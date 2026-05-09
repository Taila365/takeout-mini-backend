package com.takeout.mapper;

import com.takeout.entity.Category;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface CategoryMapper {
    // 根据id查询分类
    @Select("SELECT * FROM category WHERE id = #{id}")
    Category getById(@Param("id") Long id);

    // 根据商家id查询分类列表
    @Select("SELECT * FROM category WHERE merchant_id = #{merchantId} ORDER BY sort ASC")
    List<Category> getByMerchantId(@Param("merchantId") Long merchantId);

    // 新增分类
    @Insert("INSERT INTO category(merchant_id, name, description, sort, create_time, update_time) VALUES(#{merchantId}, #{name}, #{description}, #{sort}, NOW(), NOW())")
    int insert(Category category);

    // 更新分类
    @Update("UPDATE category SET name = #{name}, description = #{description}, sort = #{sort}, update_time = NOW() WHERE id = #{id}")
    int update(Category category);

    // 删除分类
    @Delete("DELETE FROM category WHERE id = #{id}")
    int delete(@Param("id") Long id);
}