package com.takeout.mapper;

import com.takeout.entity.Order;
import org.apache.ibatis.annotations.*;
import java.util.List;

public interface OrderMapper {
    // 根据id查询订单
    @Select("SELECT * FROM `order` WHERE id = #{id}")
    Order getById(@Param("id") Long id);

    // 根据订单号查询订单
    @Select("SELECT * FROM `order` WHERE order_no = #{orderNo}")
    Order getByOrderNo(@Param("orderNo") String orderNo);

    // 根据用户id查询订单列表
    @Select("SELECT * FROM `order` WHERE user_id = #{userId} ORDER BY order_time DESC")
    List<Order> getByUserId(@Param("userId") Long userId);

    // 根据商家id查询订单列表
    @Select("SELECT * FROM `order` WHERE merchant_id = #{merchantId} ORDER BY order_time DESC")
    List<Order> getByMerchantId(@Param("merchantId") Long merchantId);

    // 新增订单
    @Insert("INSERT INTO `order`(order_no, user_id, merchant_id, address_id, total_amount, delivery_fee, actual_amount, order_status, pay_status, pay_method, order_time, remark) VALUES(#{orderNo}, #{userId}, #{merchantId}, #{addressId}, #{totalAmount}, #{deliveryFee}, #{actualAmount}, #{orderStatus}, #{payStatus}, #{payMethod}, NOW(), #{remark})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Order order);

    // 更新订单状态
    @Update("UPDATE `order` SET order_status = #{orderStatus} WHERE id = #{id}")
    int updateOrderStatus(@Param("id") Long id, @Param("orderStatus") String orderStatus);

    // 更新支付状态
    @Update("UPDATE `order` SET pay_status = #{payStatus}, pay_time = NOW() WHERE id = #{id}")
    int updatePayStatus(@Param("id") Long id, @Param("payStatus") String payStatus);

    // 更新订单为已配送
    @Update("UPDATE `order` SET order_status = '待配送', delivery_time = NOW() WHERE id = #{id}")
    int updateDelivery(@Param("id") Long id);

    // 更新订单为已完成
    @Update("UPDATE `order` SET order_status = '已完成', complete_time = NOW() WHERE id = #{id}")
    int updateComplete(@Param("id") Long id);

    // 更新订单为已取消
    @Update("UPDATE `order` SET order_status = '已取消', cancel_reason = #{cancelReason} WHERE id = #{id}")
    int updateCancel(@Param("id") Long id, @Param("cancelReason") String cancelReason);
}