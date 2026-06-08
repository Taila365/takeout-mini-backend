package com.takeout.service;

import com.takeout.entity.Payment;
import com.takeout.utils.Result;
import java.util.Map;

public interface PaymentService {
    // 创建支付订单
    Result<Map<String, Object>> createPayment(Long orderId, String payMethod);
    
    // 处理支付回调
    Result<Void> handlePaymentCallback(Map<String, String> params);
    
    // 查询支付状态
    Result<Payment> queryPaymentStatus(String paymentNo);
    
    // 退款
    Result<Void> refund(Long paymentId, Double refundAmount, String refundReason);
}