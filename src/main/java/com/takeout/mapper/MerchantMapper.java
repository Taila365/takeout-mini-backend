package com.takeout.mapper;

import com.takeout.entity.Merchant;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface MerchantMapper {
    // 根据id查询商家
    @Select("SELECT * FROM merchant WHERE id = #{id}")
    Merchant getById(@Param("id") Long id);

    // 查询所有商家
    @Select("SELECT * FROM merchant")
    List<Merchant> getAll();

    // 查询营业中的商家
    @Select("SELECT * FROM merchant WHERE status = 1")
    List<Merchant> getOpenMerchants();

    // 新增商家
    @Insert("INSERT INTO merchant(name, address, phone, description, logo, banner, rating, sales_volume, business_hours, delivery_fee, minimum_order_amount, status, category, create_time, update_time) VALUES(#{name}, #{address}, #{phone}, #{description}, #{logo}, #{banner}, #{rating}, #{salesVolume}, #{businessHours}, #{deliveryFee}, #{minimumOrderAmount}, #{status}, #{category}, NOW(), NOW())")
    int insert(Merchant merchant);

    // 更新商家信息
    @Update("UPDATE merchant SET name = #{name}, address = #{address}, phone = #{phone}, description = #{description}, logo = #{logo}, banner = #{banner}, business_hours = #{businessHours}, delivery_fee = #{deliveryFee}, minimum_order_amount = #{minimumOrderAmount}, status = #{status}, category = #{category}, update_time = NOW() WHERE id = #{id}")
    int update(Merchant merchant);

    // 更新商家状态
    @Update("UPDATE merchant SET status = #{status}, update_time = NOW() WHERE id = #{id}")
    int updateStatus(@Param("id") Long id, @Param("status") Integer status);

    // 更新商家评分和销量
    @Update("UPDATE merchant SET rating = #{rating}, sales_volume = #{salesVolume}, update_time = NOW() WHERE id = #{id}")
    int updateRatingAndSales(@Param("id") Long id, @Param("rating") Double rating, @Param("salesVolume") Integer salesVolume);

    // 搜索商家（按名称模糊匹配）
    @Select("SELECT * FROM merchant WHERE name LIKE CONCAT('%', #{keyword}, '%') AND status = 1 ORDER BY sales_volume DESC")
    List<Merchant> searchMerchants(@Param("keyword") String keyword);
    
    // 根据分类查询商家
    @Select("SELECT * FROM merchant WHERE category = #{category} AND status = 1 ORDER BY sales_volume DESC")
    List<Merchant> getMerchantsByCategory(@Param("category") String category);
}