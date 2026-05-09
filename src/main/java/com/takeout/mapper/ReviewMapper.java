package com.takeout.mapper;

import com.takeout.entity.Review;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface ReviewMapper {
    // 根据id查询评价
    @Select("SELECT * FROM review WHERE id = #{id}")
    Review getById(@Param("id") Long id);

    // 根据订单id查询评价
    @Select("SELECT * FROM review WHERE order_id = #{orderId}")
    List<Review> getByOrderId(@Param("orderId") Long orderId);

    // 根据商品id查询评价
    @Select("SELECT * FROM review WHERE product_id = #{productId}")
    List<Review> getByProductId(@Param("productId") Long productId);

    // 根据商家id查询评价
    @Select("SELECT * FROM review WHERE merchant_id = #{merchantId}")
    List<Review> getByMerchantId(@Param("merchantId") Long merchantId);

    // 根据用户id查询评价
    @Select("SELECT * FROM review WHERE user_id = #{userId}")
    List<Review> getByUserId(@Param("userId") Long userId);

    // 新增评价
    @Insert("INSERT INTO review(user_id, order_id, product_id, merchant_id, rating, content, images, create_time) VALUES(#{userId}, #{orderId}, #{productId}, #{merchantId}, #{rating}, #{content}, #{images}, NOW())")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Review review);

    // 删除评价
    @Delete("DELETE FROM review WHERE id = #{id}")
    int delete(@Param("id") Long id);

    // 统计商品的平均评分
    @Select("SELECT AVG(rating) FROM review WHERE product_id = #{productId}")
    Double getProductAverageRating(@Param("productId") Long productId);

    // 统计商家的平均评分
    @Select("SELECT AVG(rating) FROM review WHERE merchant_id = #{merchantId}")
    Double getMerchantAverageRating(@Param("merchantId") Long merchantId);
}