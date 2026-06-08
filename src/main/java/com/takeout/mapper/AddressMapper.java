package com.takeout.mapper;

import com.takeout.entity.Address;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface AddressMapper {
    // 根据id查询地址
    @Select("SELECT * FROM address WHERE id = #{id}")
    Address getById(@Param("id") Long id);

    // 根据用户id查询地址列表
    @Select("SELECT * FROM address WHERE user_id = #{userId} ORDER BY is_default DESC, update_time DESC")
    List<Address> getByUserId(@Param("userId") Long userId);

    // 查询用户默认地址
    @Select("SELECT * FROM address WHERE user_id = #{userId} AND is_default = 1")
    Address getDefaultByUserId(@Param("userId") Long userId);

    // 新增地址
    @Insert("INSERT INTO address(user_id, name, phone, province, city, district, detail_address, is_default, create_time, update_time) VALUES(#{userId}, #{name}, #{phone}, #{province}, #{city}, #{district}, #{detailAddress}, #{isDefault}, NOW(), NOW())")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Address address);

    // 更新地址
    @Update("UPDATE address SET name = #{name}, phone = #{phone}, province = #{province}, city = #{city}, district = #{district}, detail_address = #{detailAddress}, is_default = #{isDefault}, update_time = NOW() WHERE id = #{id}")
    int update(Address address);

    // 设置默认地址
    @Update("UPDATE address SET is_default = 0 WHERE user_id = #{userId}")
    int clearDefault(@Param("userId") Long userId);

    @Update("UPDATE address SET is_default = 1, update_time = NOW() WHERE id = #{id}")
    int setDefault(@Param("id") Long id);

    // 删除地址
    @Delete("DELETE FROM address WHERE id = #{id}")
    int delete(@Param("id") Long id);
}