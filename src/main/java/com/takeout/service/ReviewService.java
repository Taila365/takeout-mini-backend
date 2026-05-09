package com.takeout.service;

import com.takeout.entity.Review;
import com.takeout.utils.Result;
import java.util.List;

public interface ReviewService {
    // 创建评价
    Result<Review> createReview(Review review);
    
    // 根据订单id获取评价
    Result<List<Review>> getReviewsByOrderId(Long orderId);
    
    // 根据商品id获取评价
    Result<List<Review>> getReviewsByProductId(Long productId);
    
    // 根据商家id获取评价
    Result<List<Review>> getReviewsByMerchantId(Long merchantId);
    
    // 根据用户id获取评价
    Result<List<Review>> getReviewsByUserId(Long userId);
    
    // 删除评价
    Result<Void> deleteReview(Long id);
    
    // 获取商品的平均评分
    Result<Double> getProductAverageRating(Long productId);
    
    // 获取商家的平均评分
    Result<Double> getMerchantAverageRating(Long merchantId);
}