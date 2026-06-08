package com.takeout.service;

import com.takeout.entity.Address;
import com.takeout.utils.Result;
import java.util.List;

public interface AddressService {
    // 获取用户地址列表
    Result<List<Address>> getAddressesByUserId(Long userId);
    
    // 获取用户默认地址
    Result<Address> getDefaultAddress(Long userId);
    
    // 根据id获取地址详情
    Result<Address> getAddressById(Long id);
    
    // 创建地址
    Result<Address> createAddress(Address address);
    
    // 更新地址
    Result<Address> updateAddress(Address address);
    
    // 设置默认地址
    Result<Address> setDefaultAddress(Long id, Long userId);
    
    // 删除地址
    Result<Void> deleteAddress(Long id);
}