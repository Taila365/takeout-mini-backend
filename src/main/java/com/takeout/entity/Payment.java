package com.takeout.entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Payment {
    private Long id;
    private String paymentNo;
    private Long orderId;
    private Long userId;
    private Double amount;
    private String payMethod;
    private String payStatus;
    private String transactionId;
    private LocalDateTime payTime;
    private LocalDateTime createTime;
}