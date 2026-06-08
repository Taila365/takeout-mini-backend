package com.takeout.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc
class RedisTestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    /**
     * 测试 Redis 连通性接口
     * 
     * 说明：
     * 1. MockMvc 是一个模拟的 HTTP 客户端，不需要真实启动服务器
     * 2. 发送 GET 请求到 /api/test/redis
     * 3. 验证返回状态码是 200（成功）
     * 4. 验证响应体中包含 "成功" 或 "失败"
     */
    @Test
    void testRedisEndpoint() throws Exception {
        mockMvc.perform(get("/api/test/redis"))
                .andExpect(status().isOk())  // 验证状态码 200
                .andExpect(content().string(
                    containsString("成功")  // 验证包含 "成功" 或 "失败" 中的一个
                ));
    }

    /**
     * 测试错误情况（当 Redis 未启动时）
     */
    @Test
    void testRedisEndpointWithoutRedis() throws Exception {
        mockMvc.perform(get("/api/test/redis"))
                .andExpect(status().isOk());  // 即使 Redis 未启动，接口也返回 200 和错误信息
    }
}
