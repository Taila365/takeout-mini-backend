package com.takeout.controller;

import com.takeout.entity.Address;
import com.takeout.service.AddressService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/address")
@RequiredArgsConstructor
@Tag(name = "地址接口", description = "地址管理、默认地址设置")
public class AddressController {
    private final AddressService addressService;

    @Operation(summary = "获取用户地址列表", description = "获取当前用户的地址列表")
    @GetMapping("/list")
    public Result<List<Address>> getAddressesByUserId(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return addressService.getAddressesByUserId(userId);
    }

    @Operation(summary = "获取用户默认地址", description = "获取当前用户的默认地址")
    @GetMapping("/default")
    public Result<Address> getDefaultAddress(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return addressService.getDefaultAddress(userId);
    }

    @Operation(summary = "获取地址详情", description = "根据地址ID获取地址详细信息")
    @GetMapping("/detail/{id}")
    public Result<Address> getAddressById(@PathVariable Long id) {
        return addressService.getAddressById(id);
    }

    @Operation(summary = "创建地址", description = "创建新的地址")
    @PostMapping("/create")
    public Result<Address> createAddress(@RequestBody Address address, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        address.setUserId(userId);
        return addressService.createAddress(address);
    }

    @Operation(summary = "更新地址", description = "更新地址信息")
    @PutMapping("/update")
    public Result<Address> updateAddress(@RequestBody Address address, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        address.setUserId(userId);
        return addressService.updateAddress(address);
    }

    @Operation(summary = "设置默认地址", description = "设置指定地址为默认地址")
    @PutMapping("/default/{id}")
    public Result<Address> setDefaultAddress(@PathVariable Long id, HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return addressService.setDefaultAddress(id, userId);
    }

    @Operation(summary = "删除地址", description = "删除指定地址")
    @DeleteMapping("/delete/{id}")
    public Result<Void> deleteAddress(@PathVariable Long id) {
        return addressService.deleteAddress(id);
    }
}