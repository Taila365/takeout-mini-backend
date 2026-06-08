package com.takeout.entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Review {
    private Long id;
    private Long userId;
    private Long orderId;
    private Long productId;
    private Long merchantId;
    private Integer rating; // 评分，1-5星
    private String content;
    private String images; // 评价图片，多个图片用逗号分隔
    private LocalDateTime createTime;
}