package com.takeout.serviceImpl;

import com.takeout.entity.Address;
import com.takeout.mapper.AddressMapper;
import com.takeout.service.AddressService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
    private final AddressMapper addressMapper;

    @Override
    public Result<List<Address>> getAddressesByUserId(Long userId) {
        List<Address> addresses = addressMapper.getByUserId(userId);
        return Result.success(addresses);
    }

    @Override
    public Result<Address> getDefaultAddress(Long userId) {
        Address address = addressMapper.getDefaultByUserId(userId);
        return Result.success(address);
    }

    @Override
    public Result<Address> getAddressById(Long id) {
        Address address = addressMapper.getById(id);
        if (address == null) {
            return Result.error("地址不存在");
        }
        return Result.success(address);
    }

    @Override
    @Transactional
    public Result<Address> createAddress(Address address) {
        // 如果是默认地址，先清除用户的其他默认地址
        if (address.getIsDefault() == 1) {
            addressMapper.clearDefault(address.getUserId());
        }
        
        int result = addressMapper.insert(address);
        if (result > 0) {
            return Result.success(address);
        }
        return Result.error("创建地址失败");
    }

    @Override
    @Transactional
    public Result<Address> updateAddress(Address address) {
        // 如果是默认地址，先清除用户的其他默认地址
        if (address.getIsDefault() == 1) {
            addressMapper.clearDefault(address.getUserId());
        }
        
        int result = addressMapper.update(address);
        if (result > 0) {
            return Result.success(addressMapper.getById(address.getId()));
        }
        return Result.error("更新地址失败");
    }

    @Override
    @Transactional
    public Result<Address> setDefaultAddress(Long id, Long userId) {
        // 先清除用户的其他默认地址
        addressMapper.clearDefault(userId);
        // 设置当前地址为默认地址
        int result = addressMapper.setDefault(id);
        if (result > 0) {
            return Result.success(addressMapper.getById(id));
        }
        return Result.error("设置默认地址失败");
    }

    @Override
    public Result<Void> deleteAddress(Long id) {
        int result = addressMapper.delete(id);
        if (result > 0) {
            return Result.success();
        }
        return Result.error("删除地址失败");
    }
}