package com.takeout.serviceImpl;

import com.takeout.entity.Merchant;
import com.takeout.mapper.MerchantMapper;
import com.takeout.service.MerchantService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MerchantServiceImpl implements MerchantService {
    private final MerchantMapper merchantMapper;

    @Override
    public Result<List<Merchant>> getAllMerchants() {
        List<Merchant> merchants = merchantMapper.getAll();
        return Result.success(merchants);
    }

    @Override
    public Result<List<Merchant>> getOpenMerchants() {
        List<Merchant> merchants = merchantMapper.getOpenMerchants();
        return Result.success(merchants);
    }

    @Override
    public Result<Merchant> getMerchantById(Long id) {
        Merchant merchant = merchantMapper.getById(id);
        if (merchant == null) {
            return Result.error("商家不存在");
        }
        return Result.success(merchant);
    }

    @Override
    public Result<Merchant> createMerchant(Merchant merchant) {
        // 设置默认值
        merchant.setRating(5.0);
        merchant.setSalesVolume(0);
        merchant.setStatus(1); // 默认营业中
        int result = merchantMapper.insert(merchant);
        if (result > 0) {
            return Result.success(merchant);
        }
        return Result.error("创建商家失败");
    }

    @Override
    public Result<Merchant> updateMerchant(Merchant merchant) {
        int result = merchantMapper.update(merchant);
        if (result > 0) {
            return Result.success(merchantMapper.getById(merchant.getId()));
        }
        return Result.error("更新商家失败");
    }

    @Override
    public Result<Merchant> updateMerchantStatus(Long id, Integer status) {
        int result = merchantMapper.updateStatus(id, status);
        if (result > 0) {
            return Result.success(merchantMapper.getById(id));
        }
        return Result.error("更新商家状态失败");
    }

    @Override
    public Result<List<Merchant>> searchMerchants(String keyword) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return Result.error("搜索关键词不能为空");
        }
        List<Merchant> merchants = merchantMapper.searchMerchants(keyword.trim());
        return Result.success(merchants);
    }

    @Override
    public Result<List<Merchant>> getMerchantsByCategory(String category) {
        if (category == null || category.trim().isEmpty()) {
            return Result.error("分类不能为空");
        }
        List<Merchant> merchants = merchantMapper.getMerchantsByCategory(category.trim());
        return Result.success(merchants);
    }
}