package com.takeout.service;

import com.takeout.entity.Category;
import com.takeout.utils.Result;
import java.util.List;

public interface CategoryService {
    // 根据商家id获取分类列表
    Result<List<Category>> getCategoriesByMerchantId(Long merchantId);
    
    // 根据id获取分类详情
    Result<Category> getCategoryById(Long id);
    
    // 创建分类
    Result<Category> createCategory(Category category);
    
    // 更新分类
    Result<Category> updateCategory(Category category);
    
    // 删除分类
    Result<Void> deleteCategory(Long id);
}