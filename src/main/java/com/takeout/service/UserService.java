package com.takeout.service;

import com.takeout.entity.User;
import com.takeout.utils.Result;
import java.util.Map;

public interface UserService {
    /** 小程序登录：js_code 由 wx.login 取得，服务端向微信换取 openid 后签发 token */
    Result<Map<String, Object>> login(String jsCode);
    
    // 获取用户信息
    Result<User> getUserInfo(Long userId);
    
    // 更新用户信息
    Result<User> updateUserInfo(User user);
}