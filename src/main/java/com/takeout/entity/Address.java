package com.takeout.entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Address {
    private Long id;
    private Long userId;
    private String name;
    private String phone;
    private String province;
    private String city;
    private String district;
    private String detailAddress;
    private Integer isDefault; // 0: 非默认, 1: 默认
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}