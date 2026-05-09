package com.takeout.controller;

import com.takeout.entity.Review;
import com.takeout.service.ReviewService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
@Tag(name = "评价接口", description = "商品评价、订单评价")
public class ReviewController {
    private final ReviewService reviewService;

    @Operation(summary = "创建评价", description = "创建新的评价")
    @PostMapping("/create")
    public Result<Review> createReview(@RequestBody Review review, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        review.setUserId(userId);
        return reviewService.createReview(review);
    }

    @Operation(summary = "获取订单评价", description = "根据订单ID获取评价列表")
    @GetMapping("/order/{orderId}")
    public Result<List<Review>> getReviewsByOrderId(@PathVariable Long orderId) {
        return reviewService.getReviewsByOrderId(orderId);
    }

    @Operation(summary = "获取商品评价", description = "根据商品ID获取评价列表")
    @GetMapping("/product/{productId}")
    public Result<List<Review>> getReviewsByProductId(@PathVariable Long productId) {
        return reviewService.getReviewsByProductId(productId);
    }

    @Operation(summary = "获取商家评价", description = "根据商家ID获取评价列表")
    @GetMapping("/merchant/{merchantId}")
    public Result<List<Review>> getReviewsByMerchantId(@PathVariable Long merchantId) {
        return reviewService.getReviewsByMerchantId(merchantId);
    }

    @Operation(summary = "获取用户评价", description = "获取当前用户的评价列表")
    @GetMapping("/user/list")
    public Result<List<Review>> getReviewsByUserId(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return reviewService.getReviewsByUserId(userId);
    }

    @Operation(summary = "删除评价", description = "删除指定评价")
    @DeleteMapping("/delete/{id}")
    public Result<Void> deleteReview(@PathVariable Long id) {
        return reviewService.deleteReview(id);
    }

    @Operation(summary = "获取商品平均评分", description = "获取指定商品的平均评分")
    @GetMapping("/product/{productId}/rating")
    public Result<Double> getProductAverageRating(@PathVariable Long productId) {
        return reviewService.getProductAverageRating(productId);
    }

    @Operation(summary = "获取商家平均评分", description = "获取指定商家的平均评分")
    @GetMapping("/merchant/{merchantId}/rating")
    public Result<Double> getMerchantAverageRating(@PathVariable Long merchantId) {
        return reviewService.getMerchantAverageRating(merchantId);
    }
}