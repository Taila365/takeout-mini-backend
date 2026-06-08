package com.takeout.controller;

import com.takeout.entity.Order;
import com.takeout.entity.OrderItem;
import com.takeout.service.OrderService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
@Tag(name = "订单接口", description = "订单管理、状态更新")
public class OrderController {
    private final OrderService orderService;

    @Operation(summary = "创建订单", description = "创建新的订单")
    @PostMapping("/create")
    public Result<Order> createOrder(@RequestBody Map<String, Object> request, HttpServletRequest httpRequest) {
        Long userId = (Long) httpRequest.getAttribute("userId");
        Order order = new Order();
        order.setUserId(userId);
        order.setMerchantId((Long) request.get("merchantId"));
        order.setAddressId((Long) request.get("addressId"));
        order.setTotalAmount((Double) request.get("totalAmount"));
        order.setDeliveryFee((Double) request.get("deliveryFee"));
        order.setActualAmount((Double) request.get("actualAmount"));
        order.setPayMethod((String) request.get("payMethod"));
        order.setRemark((String) request.get("remark"));
        
        List<Map<String, Object>> items = (List<Map<String, Object>>) request.get("orderItems");
        List<OrderItem> orderItems = items.stream().map(item -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setProductId((Long) item.get("productId"));
            orderItem.setProductName((String) item.get("productName"));
            orderItem.setProductImage((String) item.get("productImage"));
            orderItem.setPrice((Double) item.get("price"));
            orderItem.setQuantity((Integer) item.get("quantity"));
            orderItem.setSubtotal((Double) item.get("subtotal"));
            return orderItem;
        }).toList();
        
        return orderService.createOrder(order, orderItems);
    }

    @Operation(summary = "获取用户订单列表", description = "获取当前用户的订单列表")
    @GetMapping("/user/list")
    public Result<List<Order>> getOrdersByUserId(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return orderService.getOrdersByUserId(userId);
    }

    @Operation(summary = "获取商家订单列表", description = "根据商家ID获取订单列表")
    @GetMapping("/merchant/{merchantId}")
    public Result<List<Order>> getOrdersByMerchantId(@PathVariable Long merchantId) {
        return orderService.getOrdersByMerchantId(merchantId);
    }

    @Operation(summary = "获取订单详情", description = "根据订单ID获取订单详细信息")
    @GetMapping("/detail/{orderId}")
    public Result<Map<String, Object>> getOrderDetail(@PathVariable Long orderId) {
        return orderService.getOrderDetail(orderId);
    }

    @Operation(summary = "支付订单", description = "支付指定订单")
    @PutMapping("/pay/{orderId}")
    public Result<Order> payOrder(@PathVariable Long orderId, @RequestParam String payMethod) {
        return orderService.payOrder(orderId, payMethod);
    }

    @Operation(summary = "商家接单", description = "商家接受订单")
    @PutMapping("/accept/{orderId}")
    public Result<Order> acceptOrder(@PathVariable Long orderId) {
        return orderService.acceptOrder(orderId);
    }

    @Operation(summary = "商家配送", description = "商家开始配送订单")
    @PutMapping("/deliver/{orderId}")
    public Result<Order> deliverOrder(@PathVariable Long orderId) {
        return orderService.deliverOrder(orderId);
    }

    @Operation(summary = "完成订单", description = "完成订单")
    @PutMapping("/complete/{orderId}")
    public Result<Order> completeOrder(@PathVariable Long orderId) {
        return orderService.completeOrder(orderId);
    }

    @Operation(summary = "取消订单", description = "取消订单")
    @PutMapping("/cancel/{orderId}")
    public Result<Order> cancelOrder(@PathVariable Long orderId, @RequestParam String cancelReason) {
        return orderService.cancelOrder(orderId, cancelReason);
    }
}