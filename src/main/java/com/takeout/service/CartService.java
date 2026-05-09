package com.takeout.service;

import com.takeout.entity.CartItemVO;
import com.takeout.utils.Result;

import java.util.List;
import java.util.Map;

public interface CartService {
    Result<Integer> addItem(Long userId, Long merchantId, Long productId, Integer count);

    Result<Integer> subtractItem(Long userId, Long merchantId, Long productId, Integer count);

    Result<List<CartItemVO>> listCart(Long userId, Long merchantId);

    Result<Void> clearCart(Long userId, Long merchantId);

    Result<Map<String, Object>> summary(Long userId, Long merchantId);
}
