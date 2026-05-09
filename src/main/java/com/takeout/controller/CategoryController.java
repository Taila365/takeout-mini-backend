package com.takeout.controller;

import com.takeout.entity.Category;
import com.takeout.service.CategoryService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@Tag(name = "商品分类接口", description = "商品分类管理")
public class CategoryController {
    private final CategoryService categoryService;

    @Operation(summary = "获取商家分类列表", description = "根据商家ID获取分类列表")
    @GetMapping("/merchant/{merchantId}")
    public Result<List<Category>> getCategoriesByMerchantId(@PathVariable Long merchantId) {
        return categoryService.getCategoriesByMerchantId(merchantId);
    }

    @Operation(summary = "获取分类详情", description = "根据分类ID获取分类详细信息")
    @GetMapping("/detail/{id}")
    public Result<Category> getCategoryById(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }

    @Operation(summary = "创建分类", description = "创建新的商品分类")
    @PostMapping("/create")
    public Result<Category> createCategory(@RequestBody Category category) {
        return categoryService.createCategory(category);
    }

    @Operation(summary = "更新分类", description = "更新商品分类信息")
    @PutMapping("/update")
    public Result<Category> updateCategory(@RequestBody Category category) {
        return categoryService.updateCategory(category);
    }

    @Operation(summary = "删除分类", description = "删除商品分类")
    @DeleteMapping("/delete/{id}")
    public Result<Void> deleteCategory(@PathVariable Long id) {
        return categoryService.deleteCategory(id);
    }
}