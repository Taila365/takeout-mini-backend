package com.takeout.entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Merchant {
    private Long id;
    private String name;
    private String address;
    private String phone;
    private String description;
    private String logo;
    private String banner;
    private Double rating;
    private Integer salesVolume;
    private String businessHours;
    private Double deliveryFee;
    private Double minimumOrderAmount;
    private Integer status; // 0: 休息中, 1: 营业中
    private String category; // 商家分类：美食、超市、水果、甜品、饮品、快餐、烧烤
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}