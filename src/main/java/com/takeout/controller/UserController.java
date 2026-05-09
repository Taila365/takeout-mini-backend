package com.takeout.controller;

import com.takeout.entity.User;
import com.takeout.service.UserService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Tag(name = "用户接口", description = "小程序用户登录、信息管理")
public class UserController {
    private final UserService userService;

    @Operation(summary = "微信小程序登录", description = "传入 wx.login 返回的 code，服务端换 openid 后自动注册并返回 token")
    @PostMapping("/login")
    public Result<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        String code = request.get("code");
        return userService.login(code);
    }

    @Operation(summary = "获取用户信息", description = "根据token获取当前用户信息")
    @GetMapping("/info")
    public Result<User> getUserInfo(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return userService.getUserInfo(userId);
    }

    @Operation(summary = "更新用户信息", description = "更新当前用户的昵称、头像、手机号等信息")
    @PutMapping("/update")
    public Result<User> updateUserInfo(@RequestBody User user, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        user.setId(userId);
        return userService.updateUserInfo(user);
    }
}