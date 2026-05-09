package com.takeout.serviceImpl;

import com.takeout.entity.CartItemVO;
import com.takeout.entity.Product;
import com.takeout.mapper.ProductMapper;
import com.takeout.service.CartService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.script.DefaultRedisScript;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private static final String CART_KEY_PREFIX = "cart:user:%d:merchant:%d";
    private static final long CART_TTL_DAYS = 7;

    private final StringRedisTemplate stringRedisTemplate;
    private final ProductMapper productMapper;

    @Override
    public Result<Integer> addItem(Long userId, Long merchantId, Long productId, Integer count) {
        int delta = normalizeCount(count);
        Product product = productMapper.getById(productId);
        if (product == null || product.getStatus() == null || product.getStatus() != 1) {
            return Result.error("商品不存在或已下架");
        }
        if (!merchantId.equals(product.getMerchantId())) {
            return Result.error("商品与商家不匹配");
        }
        if (product.getStock() == null || product.getStock() <= 0) {
            return Result.error("商品库存不足");
        }

        String key = buildCartKey(userId, merchantId);
        String field = String.valueOf(productId);
        Long newQuantity = executeSafeIncrLua(key, field, delta, product.getStock());
        if (newQuantity == null || newQuantity < 0) {
            return Result.error("购物车更新失败，请稍后再试");
        }
        if (newQuantity == 0) {
            return Result.error("商品库存不足");
        }
        refreshCartTtl(key);
        return Result.success(newQuantity.intValue());
    }

    @Override
    public Result<Integer> subtractItem(Long userId, Long merchantId, Long productId, Integer count) {
        int delta = normalizeCount(count);
        String key = buildCartKey(userId, merchantId);
        String field = String.valueOf(productId);

        Long remain = stringRedisTemplate.opsForHash().increment(key, field, -delta);
        if (remain == null) {
            return Result.error("购物车更新失败，请稍后再试");
        }
        if (remain <= 0) {
            stringRedisTemplate.opsForHash().delete(key, field);
            remain = 0L;
        }
        refreshCartTtl(key);
        return Result.success(remain.intValue());
    }

    @Override
    public Result<List<CartItemVO>> listCart(Long userId, Long merchantId) {
        String key = buildCartKey(userId, merchantId);
        Map<Object, Object> entries = stringRedisTemplate.opsForHash().entries(key);
        if (entries == null || entries.isEmpty()) {
            return Result.success(Collections.emptyList());
        }

        List<Long> productIds = entries.keySet().stream()
                .map(id -> Long.parseLong(String.valueOf(id)))
                .toList();

        List<Product> products = productMapper.getByIds(productIds);
        Map<Long, Product> productMap = new HashMap<>();
        for (Product product : products) {
            productMap.put(product.getId(), product);
        }

        List<CartItemVO> items = new ArrayList<>();
        for (Map.Entry<Object, Object> entry : entries.entrySet()) {
            Long productId = Long.parseLong(String.valueOf(entry.getKey()));
            Integer quantity = Integer.parseInt(String.valueOf(entry.getValue()));
            if (quantity <= 0) {
                continue;
            }
            Product product = productMap.get(productId);
            if (product == null) {
                continue;
            }
            CartItemVO item = new CartItemVO();
            item.setProductId(product.getId());
            item.setProductName(product.getName());
            item.setProductImage(product.getImage());
            item.setPrice(product.getPrice());
            item.setQuantity(quantity);
            item.setSubtotal(product.getPrice() * quantity);
            items.add(item);
        }
        refreshCartTtl(key);
        return Result.success(items);
    }

    @Override
    public Result<Void> clearCart(Long userId, Long merchantId) {
        String key = buildCartKey(userId, merchantId);
        stringRedisTemplate.delete(key);
        return Result.success();
    }

    @Override
    public Result<Map<String, Object>> summary(Long userId, Long merchantId) {
        Result<List<CartItemVO>> listResult = listCart(userId, merchantId);
        if (listResult.getCode() != 200 || listResult.getData() == null) {
            return Result.error("查询购物车失败");
        }

        int totalCount = 0;
        double totalAmount = 0D;
        for (CartItemVO item : listResult.getData()) {
            totalCount += item.getQuantity();
            totalAmount += item.getSubtotal();
        }

        Map<String, Object> result = new HashMap<>();
        result.put("merchantId", merchantId);
        result.put("totalCount", totalCount);
        result.put("totalAmount", totalAmount);
        result.put("items", listResult.getData());
        return Result.success(result);
    }

    private Long executeSafeIncrLua(String key, String field, int delta, int stock) {
        String scriptText =
                "local current = redis.call('HGET', KEYS[1], ARGV[1]);" +
                "if (not current) then current = 0 else current = tonumber(current) end;" +
                "local target = current + tonumber(ARGV[2]);" +
                "local maxStock = tonumber(ARGV[3]);" +
                "if target > maxStock then return 0 end;" +
                "redis.call('HSET', KEYS[1], ARGV[1], target);" +
                "return target;";
        DefaultRedisScript<Long> script = new DefaultRedisScript<>();
        script.setScriptText(scriptText);
        script.setResultType(Long.class);
        return stringRedisTemplate.execute(script, Collections.singletonList(key), field, String.valueOf(delta), String.valueOf(stock));
    }

    private void refreshCartTtl(String key) {
        stringRedisTemplate.expire(key, CART_TTL_DAYS, TimeUnit.DAYS);
    }

    private String buildCartKey(Long userId, Long merchantId) {
        return String.format(CART_KEY_PREFIX, userId, merchantId);
    }

    private int normalizeCount(Integer count) {
        if (count == null || count <= 0) {
            return 1;
        }
        return count;
    }
}
