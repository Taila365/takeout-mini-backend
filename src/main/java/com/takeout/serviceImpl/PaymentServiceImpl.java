package com.takeout.serviceImpl;

import com.takeout.entity.Order;
import com.takeout.entity.Payment;
import com.takeout.mapper.OrderMapper;
import com.takeout.mapper.PaymentMapper;
import com.takeout.service.PaymentService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final PaymentMapper paymentMapper;
    private final OrderMapper orderMapper;

    @Override
    @Transactional
    public Result<Map<String, Object>> createPayment(Long orderId, String payMethod) {
        // 查询订单
        Order order = orderMapper.getById(orderId);
        if (order == null) {
            return Result.error("订单不存在");
        }
        
        // 检查订单状态
        if (!"待支付".equals(order.getOrderStatus())) {
            return Result.error("订单状态不正确");
        }
        
        // 生成支付单号
        String paymentNo = "PAY" + LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        
        // 创建支付记录
        Payment payment = new Payment();
        payment.setPaymentNo(paymentNo);
        payment.setOrderId(orderId);
        payment.setUserId(order.getUserId());
        payment.setAmount(order.getActualAmount());
        payment.setPayMethod(payMethod);
        payment.setPayStatus("待支付");
        
        int result = paymentMapper.insert(payment);
        if (result <= 0) {
            return Result.error("创建支付订单失败");
        }
        
        // 构建支付参数（实际项目中需要调用第三方支付接口）
        Map<String, Object> payParams = new HashMap<>();
        payParams.put("paymentNo", paymentNo);
        payParams.put("amount", payment.getAmount());
        payParams.put("payMethod", payMethod);
        payParams.put("orderNo", order.getOrderNo());
        // 模拟支付链接，实际项目中需要生成真实的支付链接或参数
        payParams.put("payUrl", "https://example.com/pay?paymentNo=" + paymentNo);
        
        return Result.success(payParams);
    }

    @Override
    @Transactional
    public Result<Void> handlePaymentCallback(Map<String, String> params) {
        // 获取支付单号
        String paymentNo = params.get("paymentNo");
        if (paymentNo == null) {
            return Result.error("支付单号不能为空");
        }
        
        // 查询支付记录
        Payment payment = paymentMapper.getByPaymentNo(paymentNo);
        if (payment == null) {
            return Result.error("支付记录不存在");
        }
        
        // 检查支付状态
        if ("已支付".equals(payment.getPayStatus())) {
            return Result.success(); // 重复回调，直接返回成功
        }
        
        // 更新支付状态
        String transactionId = params.get("transactionId");
        int result = paymentMapper.updateStatus(payment.getId(), "已支付", transactionId);
        if (result <= 0) {
            return Result.error("更新支付状态失败");
        }
        
        // 更新订单状态
        orderMapper.updatePayStatus(payment.getOrderId(), "已支付");
        orderMapper.updateOrderStatus(payment.getOrderId(), "待接单");
        
        return Result.success();
    }

    @Override
    public Result<Payment> queryPaymentStatus(String paymentNo) {
        Payment payment = paymentMapper.getByPaymentNo(paymentNo);
        if (payment == null) {
            return Result.error("支付记录不存在");
        }
        return Result.success(payment);
    }

    @Override
    @Transactional
    public Result<Void> refund(Long paymentId, Double refundAmount, String refundReason) {
        // 查询支付记录
        Payment payment = paymentMapper.getById(paymentId);
        if (payment == null) {
            return Result.error("支付记录不存在");
        }
        
        // 检查支付状态
        if (!"已支付".equals(payment.getPayStatus())) {
            return Result.error("支付状态不正确");
        }
        
        // 检查退款金额
        if (refundAmount > payment.getAmount()) {
            return Result.error("退款金额不能大于支付金额");
        }
        
        // 实际项目中需要调用第三方支付接口进行退款
        // 这里模拟退款成功
        
        // 更新订单状态为已取消
        orderMapper.updateOrderStatus(payment.getOrderId(), "已取消");
        orderMapper.updatePayStatus(payment.getOrderId(), "已退款");
        
        return Result.success();
    }
}