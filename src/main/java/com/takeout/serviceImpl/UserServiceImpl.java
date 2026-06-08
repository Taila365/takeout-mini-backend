package com.takeout.serviceImpl;

import com.takeout.entity.User;
import com.takeout.mapper.UserMapper;
import com.takeout.service.UserService;
import com.takeout.service.WechatMiniProgramService;
import com.takeout.utils.JwtUtil;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final JwtUtil jwtUtil;
    private final WechatMiniProgramService wechatMiniProgramService;

    @Override
    public Result<Map<String, Object>> login(String jsCode) {
        Result<String> openidResult = wechatMiniProgramService.codeToOpenid(jsCode);
        if (openidResult.getCode() == null || openidResult.getCode() != 200) {
            return Result.error(openidResult.getMsg() != null ? openidResult.getMsg() : "微信登录失败");
        }
        String openid = openidResult.getData();

        // 1. 根据openid查询用户
        User user = userMapper.getByOpenid(openid);
        if (user == null) {
            // 2. 新用户自动注册
            user = new User();
            user.setOpenid(openid);
            user.setNickname("微信用户");
            user.setAvatar("默认头像地址");
            userMapper.insert(user);
        }

        // 3. 生成JWT Token
        String token = jwtUtil.generateToken(user.getId());

        // 4. 返回token和用户信息
        Map<String, Object> map = new HashMap<>();
        map.put("token", token);
        map.put("user", user);
        return Result.success(map);
    }

    @Override
    public Result<User> getUserInfo(Long userId) {
        User user = userMapper.getById(userId);
        if (user == null) {
            return Result.error("用户不存在");
        }
        return Result.success(user);
    }

    @Override
    public Result<User> updateUserInfo(User user) {
        int result = userMapper.update(user);
        if (result > 0) {
            return Result.success(userMapper.getById(user.getId()));
        }
        return Result.error("更新失败");
    }
}