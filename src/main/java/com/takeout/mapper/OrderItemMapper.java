package com.takeout.mapper;

import com.takeout.entity.OrderItem;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface OrderItemMapper {
    // 根据订单id查询订单详情
    @Select("SELECT * FROM order_item WHERE order_id = #{orderId}")
    List<OrderItem> getByOrderId(@Param("orderId") Long orderId);

    // 新增订单详情
    @Insert("INSERT INTO order_item(order_id, product_id, product_name, product_image, price, quantity, subtotal) VALUES(#{orderId}, #{productId}, #{productName}, #{productImage}, #{price}, #{quantity}, #{subtotal})")
    int insert(OrderItem orderItem);

    // 批量插入订单详情
    @Insert("<script>INSERT INTO order_item(order_id, product_id, product_name, product_image, price, quantity, subtotal) VALUES <foreach collection='list' item='item' separator=','>(#{item.orderId}, #{item.productId}, #{item.productName}, #{item.productImage}, #{item.price}, #{item.quantity}, #{item.subtotal})</foreach></script>")
    int batchInsert(@Param("list") List<OrderItem> orderItems);
}