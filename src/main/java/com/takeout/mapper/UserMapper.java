package com.takeout.mapper;

import com.takeout.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    // 根据openid查询用户
    @Select("SELECT * FROM user WHERE openid = #{openid}")
    User getByOpenid(@Param("openid") String openid);

    // 根据id查询用户
    @Select("SELECT * FROM user WHERE id = #{id}")
    User getById(@Param("id") Long id);

    // 新增用户
    @Options(useGeneratedKeys = true, keyProperty = "id")
    @Insert("INSERT INTO user(openid,nickname,avatar,create_time) VALUES(#{openid},#{nickname},#{avatar},NOW())")
    int insert(User user);

    // 更新用户信息
    @Update("UPDATE user SET nickname = #{nickname}, avatar = #{avatar}, phone = #{phone} WHERE id = #{id}")
    int update(User user);
}