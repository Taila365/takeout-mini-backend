package com.takeout.controller;

import com.takeout.service.PaymentService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
@Tag(name = "支付接口", description = "支付管理、回调处理")
public class PaymentController {
    private final PaymentService paymentService;

    @Operation(summary = "创建支付订单", description = "为指定订单创建支付订单")
    @PostMapping("/create")
    public Result<Map<String, Object>> createPayment(@RequestParam Long orderId, @RequestParam String payMethod) {
        return paymentService.createPayment(orderId, payMethod);
    }

    @Operation(summary = "支付回调", description = "处理第三方支付平台的回调")
    @PostMapping("/callback")
    public Result<Void> handlePaymentCallback(@RequestParam Map<String, String> params) {
        return paymentService.handlePaymentCallback(params);
    }

    @Operation(summary = "查询支付状态", description = "根据支付单号查询支付状态")
    @GetMapping("/status/{paymentNo}")
    public Result<?> queryPaymentStatus(@PathVariable String paymentNo) {
        return paymentService.queryPaymentStatus(paymentNo);
    }

    @Operation(summary = "退款", description = "为指定支付记录发起退款")
    @PostMapping("/refund")
    public Result<Void> refund(@RequestParam Long paymentId, @RequestParam Double refundAmount, @RequestParam String refundReason) {
        return paymentService.refund(paymentId, refundAmount, refundReason);
    }
}