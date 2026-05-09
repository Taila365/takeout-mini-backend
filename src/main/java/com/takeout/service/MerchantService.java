package com.takeout.service;

import com.takeout.entity.Merchant;
import com.takeout.utils.Result;
import java.util.List;

public interface MerchantService {
    // 获取所有商家
    Result<List<Merchant>> getAllMerchants();
    
    // 获取营业中的商家
    Result<List<Merchant>> getOpenMerchants();
    
    // 根据id获取商家详情
    Result<Merchant> getMerchantById(Long id);
    
    // 创建商家
    Result<Merchant> createMerchant(Merchant merchant);
    
    // 更新商家信息
    Result<Merchant> updateMerchant(Merchant merchant);
    
    // 更新商家状态
    Result<Merchant> updateMerchantStatus(Long id, Integer status);

    // 搜索商家
    Result<List<Merchant>> searchMerchants(String keyword);
    
    // 根据分类获取商家
    Result<List<Merchant>> getMerchantsByCategory(String category);
}