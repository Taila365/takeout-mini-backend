package com.takeout;

import com.takeout.config.WechatMiniProgramProperties;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@MapperScan("com.takeout.mapper") // 扫描MyBatis Mapper接口
@EnableConfigurationProperties(WechatMiniProgramProperties.class)
public class TakeoutBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(TakeoutBackendApplication.class, args);
    }

}
