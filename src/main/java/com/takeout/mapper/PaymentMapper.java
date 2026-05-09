package com.takeout.mapper;

import com.takeout.entity.Payment;
import org.apache.ibatis.annotations.*;

public interface PaymentMapper {
    // 根据id查询支付记录
    @Select("SELECT * FROM payment WHERE id = #{id}")
    Payment getById(@Param("id") Long id);

    // 根据订单id查询支付记录
    @Select("SELECT * FROM payment WHERE order_id = #{orderId}")
    Payment getByOrderId(@Param("orderId") Long orderId);

    // 根据支付单号查询支付记录
    @Select("SELECT * FROM payment WHERE payment_no = #{paymentNo}")
    Payment getByPaymentNo(@Param("paymentNo") String paymentNo);

    // 新增支付记录
    @Insert("INSERT INTO payment(payment_no, order_id, user_id, amount, pay_method, pay_status, create_time) VALUES(#{paymentNo}, #{orderId}, #{userId}, #{amount}, #{payMethod}, #{payStatus}, NOW())")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Payment payment);

    // 更新支付状态
    @Update("UPDATE payment SET pay_status = #{payStatus}, transaction_id = #{transactionId}, pay_time = NOW() WHERE id = #{id}")
    int updateStatus(@Param("id") Long id, @Param("payStatus") String payStatus, @Param("transactionId") String transactionId);
}