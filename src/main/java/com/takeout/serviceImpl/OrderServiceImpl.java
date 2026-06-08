package com.takeout.serviceImpl;

import com.takeout.entity.Order;
import com.takeout.entity.OrderItem;
import com.takeout.mapper.OrderMapper;
import com.takeout.mapper.OrderItemMapper;
import com.takeout.service.OrderService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderMapper orderMapper;
    private final OrderItemMapper orderItemMapper;

    @Override
    @Transactional
    public Result<Order> createOrder(Order order, List<OrderItem> orderItems) {
        // 生成订单号
        String orderNo = "ORDER" + LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        order.setOrderNo(orderNo);
        order.setOrderStatus("待支付");
        order.setPayStatus("未支付");
        
        // 插入订单
        int orderResult = orderMapper.insert(order);
        if (orderResult <= 0) {
            return Result.error("创建订单失败");
        }
        
        // 插入订单详情
        for (OrderItem item : orderItems) {
            item.setOrderId(order.getId());
        }
        int itemResult = orderItemMapper.batchInsert(orderItems);
        if (itemResult <= 0) {
            throw new RuntimeException("创建订单详情失败");
        }
        
        return Result.success(order);
    }

    @Override
    public Result<List<Order>> getOrdersByUserId(Long userId) {
        List<Order> orders = orderMapper.getByUserId(userId);
        return Result.success(orders);
    }

    @Override
    public Result<List<Order>> getOrdersByMerchantId(Long merchantId) {
        List<Order> orders = orderMapper.getByMerchantId(merchantId);
        return Result.success(orders);
    }

    @Override
    public Result<Map<String, Object>> getOrderDetail(Long orderId) {
        Order order = orderMapper.getById(orderId);
        if (order == null) {
            return Result.error("订单不存在");
        }
        
        List<OrderItem> orderItems = orderItemMapper.getByOrderId(orderId);
        Map<String, Object> map = new HashMap<>();
        map.put("order", order);
        map.put("orderItems", orderItems);
        
        return Result.success(map);
    }

    @Override
    public Result<Order> updateOrderStatus(Long orderId, String orderStatus) {
        int result = orderMapper.updateOrderStatus(orderId, orderStatus);
        if (result > 0) {
            return Result.success(orderMapper.getById(orderId));
        }
        return Result.error("更新订单状态失败");
    }

    @Override
    public Result<Order> payOrder(Long orderId, String payMethod) {
        Order order = orderMapper.getById(orderId);
        if (order == null) {
            return Result.error("订单不存在");
        }
        
        int result = orderMapper.updatePayStatus(orderId, "已支付");
        if (result > 0) {
            orderMapper.updateOrderStatus(orderId, "待接单");
            return Result.success(orderMapper.getById(orderId));
        }
        return Result.error("支付失败");
    }

    @Override
    public Result<Order> acceptOrder(Long orderId) {
        int result = orderMapper.updateOrderStatus(orderId, "待配送");
        if (result > 0) {
            return Result.success(orderMapper.getById(orderId));
        }
        return Result.error("接单失败");
    }

    @Override
    public Result<Order> deliverOrder(Long orderId) {
        int result = orderMapper.updateDelivery(orderId);
        if (result > 0) {
            return Result.success(orderMapper.getById(orderId));
        }
        return Result.error("开始配送失败");
    }

    @Override
    public Result<Order> completeOrder(Long orderId) {
        int result = orderMapper.updateComplete(orderId);
        if (result > 0) {
            return Result.success(orderMapper.getById(orderId));
        }
        return Result.error("完成订单失败");
    }

    @Override
    public Result<Order> cancelOrder(Long orderId, String cancelReason) {
        int result = orderMapper.updateCancel(orderId, cancelReason);
        if (result > 0) {
            orderMapper.updatePayStatus(orderId, "已取消");
            return Result.success(orderMapper.getById(orderId));
        }
        return Result.error("取消订单失败");
    }
}