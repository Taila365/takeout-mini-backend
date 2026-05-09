package com.takeout.entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Product {
    private Long id;
    private Long merchantId;
    private Long categoryId;
    private String name;
    private String description;
    private String image;
    private Double price;
    private Integer stock;
    private Integer salesVolume;
    private Double rating;
    private Integer status; // 0: 下架, 1: 上架
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}