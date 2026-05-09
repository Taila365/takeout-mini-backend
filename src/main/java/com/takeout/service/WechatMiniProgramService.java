package com.takeout.service;

import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.takeout.config.WechatMiniProgramProperties;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class WechatMiniProgramService {

    private static final String CODE2SESSION_URL = "https://api.weixin.qq.com/sns/jscode2session";

    private final WechatMiniProgramProperties properties;

    /**
     * 使用 wx.login 返回的 code 向微信换取 openid（标准登录链路）。
     */
    public Result<String> codeToOpenid(String jsCode) {
        if (!StringUtils.hasText(jsCode)) {
            return Result.error("登录 code 不能为空");
        }
        if (!StringUtils.hasText(properties.getAppid()) || !StringUtils.hasText(properties.getSecret())) {
            return Result.error("服务端未配置微信小程序 appid 或 secret");
        }
        String url = CODE2SESSION_URL
                + "?appid=" + URLEncoder.encode(properties.getAppid(), StandardCharsets.UTF_8)
                + "&secret=" + URLEncoder.encode(properties.getSecret(), StandardCharsets.UTF_8)
                + "&js_code=" + URLEncoder.encode(jsCode, StandardCharsets.UTF_8)
                + "&grant_type=authorization_code";
        String body;
        try {
            body = HttpUtil.get(url, 10_000);
        } catch (Exception e) {
            return Result.error("请求微信登录服务失败");
        }
        JSONObject json = JSONUtil.parseObj(body);
        int errcode = json.getInt("errcode", 0);
        if (errcode != 0) {
            String errmsg = json.getStr("errmsg");
            return Result.error(StringUtils.hasText(errmsg) ? errmsg : "微信登录失败(" + errcode + ")");
        }
        String openid = json.getStr("openid");
        if (!StringUtils.hasText(openid)) {
            return Result.error("微信未返回用户标识");
        }
        return Result.success(openid);
    }
}
