package com.takeout.controller;

import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Redis 自检。注意：已在 application.yml 配置 {@code server.servlet.context-path: /api}，
 * 此处映射应为 {@code /test}，完整地址为 {@code http://主机:端口/api/test/redis}，
 * 不要再写 {@code /api/test}，否则会变成 {@code /api/api/test/redis}。
 */
@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
@Tag(name = "Redis 测试", description = "环境自检，已放行 JWT")
public class RedisTestController {

    private final StringRedisTemplate stringRedisTemplate;

    @Operation(summary = "Redis 读写测试")
    @GetMapping("/redis")
    public Result<Map<String, Object>> testRedis() {
        try {
            String key = "demo:test";
            String written = "redis-ok-" + System.currentTimeMillis();
            stringRedisTemplate.opsForValue().set(key, written, 1, TimeUnit.MINUTES);
            String readBack = stringRedisTemplate.opsForValue().get(key);

            Map<String, Object> data = new LinkedHashMap<>();
            data.put("key", key);
            data.put("written", written);
            data.put("readBack", readBack);
            data.put("match", written.equals(readBack));

            return Result.success(data);
        } catch (Exception e) {
            return Result.error("Redis 异常：" + e.getMessage());
        }
    }
}
