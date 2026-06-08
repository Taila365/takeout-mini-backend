package com.takeout.mapper;

import com.takeout.entity.Product;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface ProductMapper {
    // 根据id查询商品
    @Select("SELECT * FROM product WHERE id = #{id}")
    Product getById(@Param("id") Long id);

    // 根据id列表查询商品
    @Select({
            "<script>",
            "SELECT * FROM product WHERE id IN",
            "<foreach item='id' collection='ids' open='(' separator=',' close=')'>",
            "#{id}",
            "</foreach>",
            "</script>"
    })
    List<Product> getByIds(@Param("ids") List<Long> ids);

    // 根据商家id查询商品列表
    @Select("SELECT * FROM product WHERE merchant_id = #{merchantId}")
    List<Product> getByMerchantId(@Param("merchantId") Long merchantId);

    // 根据分类id查询商品列表
    @Select("SELECT * FROM product WHERE category_id = #{categoryId}")
    List<Product> getByCategoryId(@Param("categoryId") Long categoryId);

    // 查询商家上架的商品
    @Select("SELECT * FROM product WHERE merchant_id = #{merchantId} AND status = 1")
    List<Product> getOnSaleProductsByMerchantId(@Param("merchantId") Long merchantId);

    // 新增商品
    @Insert("INSERT INTO product(merchant_id, category_id, name, description, image, price, stock, sales_volume, rating, status, create_time, update_time) VALUES(#{merchantId}, #{categoryId}, #{name}, #{description}, #{image}, #{price}, #{stock}, #{salesVolume}, #{rating}, #{status}, NOW(), NOW())")
    int insert(Product product);

    // 更新商品
    @Update("UPDATE product SET category_id = #{categoryId}, name = #{name}, description = #{description}, image = #{image}, price = #{price}, stock = #{stock}, status = #{status}, update_time = NOW() WHERE id = #{id}")
    int update(Product product);

    // 更新商品状态
    @Update("UPDATE product SET status = #{status}, update_time = NOW() WHERE id = #{id}")
    int updateStatus(@Param("id") Long id, @Param("status") Integer status);

    // 更新商品库存
    @Update("UPDATE product SET stock = #{stock}, update_time = NOW() WHERE id = #{id}")
    int updateStock(@Param("id") Long id, @Param("stock") Integer stock);

    // 更新商品销量和评分
    @Update("UPDATE product SET sales_volume = #{salesVolume}, rating = #{rating}, update_time = NOW() WHERE id = #{id}")
    int updateSalesAndRating(@Param("id") Long id, @Param("salesVolume") Integer salesVolume, @Param("rating") Double rating);

    // 删除商品
    @Delete("DELETE FROM product WHERE id = #{id}")
    int delete(@Param("id") Long id);
}