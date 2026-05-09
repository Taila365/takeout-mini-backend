package com.takeout.serviceImpl;

import com.takeout.entity.Category;
import com.takeout.mapper.CategoryMapper;
import com.takeout.service.CategoryService;
import com.takeout.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryMapper categoryMapper;

    @Override
    public Result<List<Category>> getCategoriesByMerchantId(Long merchantId) {
        List<Category> categories = categoryMapper.getByMerchantId(merchantId);
        return Result.success(categories);
    }

    @Override
    public Result<Category> getCategoryById(Long id) {
        Category category = categoryMapper.getById(id);
        if (category == null) {
            return Result.error("分类不存在");
        }
        return Result.success(category);
    }

    @Override
    public Result<Category> createCategory(Category category) {
        int result = categoryMapper.insert(category);
        if (result > 0) {
            return Result.success(category);
        }
        return Result.error("创建分类失败");
    }

    @Override
    public Result<Category> updateCategory(Category category) {
        int result = categoryMapper.update(category);
        if (result > 0) {
            return Result.success(categoryMapper.getById(category.getId()));
        }
        return Result.error("更新分类失败");
    }

    @Override
    public Result<Void> deleteCategory(Long id) {
        int result = categoryMapper.delete(id);
        if (result > 0) {
            return Result.success();
        }
        return Result.error("删除分类失败");
    }
}