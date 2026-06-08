package com.takeout.serviceImpl;

import com.takeout.entity.Product;
import com.takeout.mapper.ProductMapper;
import com.takeout.service.ProductService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductMapper productMapper;

    @Override
    public Result<List<Product>> getProductsByMerchantId(Long merchantId) {
        List<Product> products = productMapper.getByMerchantId(merchantId);
        return Result.success(products);
    }

    @Override
    public Result<List<Product>> getProductsByCategoryId(Long categoryId) {
        List<Product> products = productMapper.getByCategoryId(categoryId);
        return Result.success(products);
    }

    @Override
    public Result<List<Product>> getOnSaleProductsByMerchantId(Long merchantId) {
        List<Product> products = productMapper.getOnSaleProductsByMerchantId(merchantId);
        return Result.success(products);
    }

    @Override
    public Result<Product> getProductById(Long id) {
        Product product = productMapper.getById(id);
        if (product == null) {
            return Result.error("商品不存在");
        }
        return Result.success(product);
    }

    @Override
    public Result<Product> createProduct(Product product) {
        // 设置默认值
        product.setSalesVolume(0);
        product.setRating(5.0);
        product.setStatus(1); // 默认上架
        int result = productMapper.insert(product);
        if (result > 0) {
            return Result.success(product);
        }
        return Result.error("创建商品失败");
    }

    @Override
    public Result<Product> updateProduct(Product product) {
        int result = productMapper.update(product);
        if (result > 0) {
            return Result.success(productMapper.getById(product.getId()));
        }
        return Result.error("更新商品失败");
    }

    @Override
    public Result<Product> updateProductStatus(Long id, Integer status) {
        int result = productMapper.updateStatus(id, status);
        if (result > 0) {
            return Result.success(productMapper.getById(id));
        }
        return Result.error("更新商品状态失败");
    }

    @Override
    public Result<Product> updateProductStock(Long id, Integer stock) {
        int result = productMapper.updateStock(id, stock);
        if (result > 0) {
            return Result.success(productMapper.getById(id));
        }
        return Result.error("更新商品库存失败");
    }

    @Override
    public Result<Void> deleteProduct(Long id) {
        int result = productMapper.delete(id);
        if (result > 0) {
            return Result.success();
        }
        return Result.error("删除商品失败");
    }
}