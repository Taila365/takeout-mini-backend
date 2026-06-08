package com.takeout.entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Order {
    private Long id;
    private String orderNo;
    private Long userId;
    private Long merchantId;
    private Long addressId;
    private Double totalAmount;
    private Double deliveryFee;
    private Double actualAmount;
    private String orderStatus; // 订单状态：待支付、待接单、待配送、已完成、已取消
    private String payStatus; // 支付状态：未支付、已支付、支付失败
    private String payMethod; // 支付方式：微信支付、支付宝
    private LocalDateTime orderTime;
    private LocalDateTime payTime;
    private LocalDateTime deliveryTime;
    private LocalDateTime completeTime;
    private String remark;
    private String cancelReason;
}