package com.takeout.entity;

import lombok.Data;

@Data
public class CartItemVO {
    private Long productId;
    private String productName;
    private String productImage;
    private Double price;
    private Integer quantity;
    private Double subtotal;
}
