package com.takeout.service;

import com.takeout.entity.Order;
import com.takeout.entity.OrderItem;
import com.takeout.utils.Result;
import java.util.List;
import java.util.Map;

public interface OrderService {
    // 创建订单
    Result<Order> createOrder(Order order, List<OrderItem> orderItems);
    
    // 根据用户id获取订单列表
    Result<List<Order>> getOrdersByUserId(Long userId);
    
    // 根据商家id获取订单列表
    Result<List<Order>> getOrdersByMerchantId(Long merchantId);
    
    // 根据订单id获取订单详情
    Result<Map<String, Object>> getOrderDetail(Long orderId);
    
    // 更新订单状态
    Result<Order> updateOrderStatus(Long orderId, String orderStatus);
    
    // 支付订单
    Result<Order> payOrder(Long orderId, String payMethod);
    
    // 商家接单
    Result<Order> acceptOrder(Long orderId);
    
    // 商家配送
    Result<Order> deliverOrder(Long orderId);
    
    // 完成订单
    Result<Order> completeOrder(Long orderId);
    
    // 取消订单
    Result<Order> cancelOrder(Long orderId, String cancelReason);
}