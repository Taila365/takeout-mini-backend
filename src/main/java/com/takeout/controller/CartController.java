package com.takeout.controller;

import com.takeout.entity.CartItemVO;
import com.takeout.service.CartService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@Tag(name = "购物车接口", description = "Redis购物车并发安全管理")
public class CartController {
    private final CartService cartService;

    @Operation(summary = "添加商品到购物车")
    @PostMapping("/add")
    public Result<Integer> add(@RequestBody Map<String, Object> request, HttpServletRequest httpRequest) {
        Long userId = (Long) httpRequest.getAttribute("userId");
        Long merchantId = Long.valueOf(String.valueOf(request.get("merchantId")));
        Long productId = Long.valueOf(String.valueOf(request.get("productId")));
        Integer count = request.get("count") == null ? 1 : Integer.valueOf(String.valueOf(request.get("count")));
        return cartService.addItem(userId, merchantId, productId, count);
    }

    @Operation(summary = "减少购物车商品数量")
    @PostMapping("/subtract")
    public Result<Integer> subtract(@RequestBody Map<String, Object> request, HttpServletRequest httpRequest) {
        Long userId = (Long) httpRequest.getAttribute("userId");
        Long merchantId = Long.valueOf(String.valueOf(request.get("merchantId")));
        Long productId = Long.valueOf(String.valueOf(request.get("productId")));
        Integer count = request.get("count") == null ? 1 : Integer.valueOf(String.valueOf(request.get("count")));
        return cartService.subtractItem(userId, merchantId, productId, count);
    }

    @Operation(summary = "获取购物车明细")
    @GetMapping("/list")
    public Result<List<CartItemVO>> list(@RequestParam Long merchantId, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return cartService.listCart(userId, merchantId);
    }

    @Operation(summary = "获取购物车汇总")
    @GetMapping("/summary")
    public Result<Map<String, Object>> summary(@RequestParam Long merchantId, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return cartService.summary(userId, merchantId);
    }

    @Operation(summary = "清空购物车")
    @DeleteMapping("/clear")
    public Result<Void> clear(@RequestParam Long merchantId, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return cartService.clearCart(userId, merchantId);
    }
}
