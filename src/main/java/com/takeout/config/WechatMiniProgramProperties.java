package com.takeout.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "wechat.miniprogram")
public class WechatMiniProgramProperties {
    /** 小程序 AppID */
    private String appid = "";
    /** 小程序 AppSecret（勿提交到公开仓库，可用环境变量覆盖） */
    private String secret = "";
}
