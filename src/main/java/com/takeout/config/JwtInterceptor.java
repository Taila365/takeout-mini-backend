package com.takeout.config;

import com.takeout.utils.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
public class JwtInterceptor implements HandlerInterceptor {
    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // 放行登录接口
        String uri = request.getRequestURI();
        if (uri.contains("/user/login")) {
            return true;
        }

        // Redis 自检：GET /api/test/redis
        if (uri.contains("/test/redis")) {
            return true;
        }
        
        // 放行商家相关的公开接口
        if (uri.contains("/merchant/open") || 
            uri.contains("/merchant/category") || 
            uri.contains("/merchant/search") || 
            uri.contains("/merchant/detail/")) {
            return true;
        }

        // 获取Token
        String token = request.getHeader("token");
        if (token == null || !jwtUtil.validateToken(token)) {
            response.setStatus(401);
            return false;
        }

        // 把用户id存入request
        Long userId = jwtUtil.getUserIdFromToken(token);
        request.setAttribute("userId", userId);
        return true;
    }
}