package com.takeout.serviceImpl;

import com.takeout.entity.Review;
import com.takeout.mapper.ReviewMapper;
import com.takeout.service.ReviewService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewMapper reviewMapper;

    @Override
    public Result<Review> createReview(Review review) {
        int result = reviewMapper.insert(review);
        if (result > 0) {
            return Result.success(review);
        }
        return Result.error("创建评价失败");
    }

    @Override
    public Result<List<Review>> getReviewsByOrderId(Long orderId) {
        List<Review> reviews = reviewMapper.getByOrderId(orderId);
        return Result.success(reviews);
    }

    @Override
    public Result<List<Review>> getReviewsByProductId(Long productId) {
        List<Review> reviews = reviewMapper.getByProductId(productId);
        return Result.success(reviews);
    }

    @Override
    public Result<List<Review>> getReviewsByMerchantId(Long merchantId) {
        List<Review> reviews = reviewMapper.getByMerchantId(merchantId);
        return Result.success(reviews);
    }

    @Override
    public Result<List<Review>> getReviewsByUserId(Long userId) {
        List<Review> reviews = reviewMapper.getByUserId(userId);
        return Result.success(reviews);
    }

    @Override
    public Result<Void> deleteReview(Long id) {
        int result = reviewMapper.delete(id);
        if (result > 0) {
            return Result.success();
        }
        return Result.error("删除评价失败");
    }

    @Override
    public Result<Double> getProductAverageRating(Long productId) {
        Double rating = reviewMapper.getProductAverageRating(productId);
        return Result.success(rating != null ? rating : 0.0);
    }

    @Override
    public Result<Double> getMerchantAverageRating(Long merchantId) {
        Double rating = reviewMapper.getMerchantAverageRating(merchantId);
        return Result.success(rating != null ? rating : 0.0);
    }
}