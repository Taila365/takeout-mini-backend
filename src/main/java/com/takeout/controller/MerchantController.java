package com.takeout.controller;

import com.takeout.entity.Merchant;
import com.takeout.service.MerchantService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/merchant")
@RequiredArgsConstructor
@Tag(name = "商家接口", description = "商家管理、店铺信息维护")
public class MerchantController {
    private final MerchantService merchantService;

    @Operation(summary = "获取所有商家", description = "获取系统中所有商家信息")
    @GetMapping("/list")
    public Result<List<Merchant>> getAllMerchants() {
        return merchantService.getAllMerchants();
    }

    @Operation(summary = "获取营业中的商家", description = "获取当前营业中的商家列表")
    @GetMapping("/open")
    public Result<List<Merchant>> getOpenMerchants() {
        return merchantService.getOpenMerchants();
    }

    @Operation(summary = "获取商家详情", description = "根据商家ID获取商家详细信息")
    @GetMapping("/detail/{id}")
    public Result<Merchant> getMerchantById(@PathVariable Long id) {
        return merchantService.getMerchantById(id);
    }

    @Operation(summary = "创建商家", description = "创建新的商家信息")
    @PostMapping("/create")
    public Result<Merchant> createMerchant(@RequestBody Merchant merchant) {
        return merchantService.createMerchant(merchant);
    }

    @Operation(summary = "更新商家信息", description = "更新商家的基本信息")
    @PutMapping("/update")
    public Result<Merchant> updateMerchant(@RequestBody Merchant merchant) {
        return merchantService.updateMerchant(merchant);
    }

    @Operation(summary = "更新商家状态", description = "更新商家的营业状态，0: 休息中, 1: 营业中")
    @PutMapping("/status/{id}")
    public Result<Merchant> updateMerchantStatus(@PathVariable Long id, @RequestParam Integer status) {
        return merchantService.updateMerchantStatus(id, status);
    }

    @Operation(summary = "搜索商家", description = "根据关键词搜索营业中的商家")
    @GetMapping("/search")
    public Result<List<Merchant>> searchMerchants(@RequestParam String keyword) {
        return merchantService.searchMerchants(keyword);
    }
    
    @Operation(summary = "根据分类获取商家", description = "根据分类获取营业中的商家列表")
    @GetMapping("/category")
    public Result<List<Merchant>> getMerchantsByCategory(@RequestParam String category) {
        return merchantService.getMerchantsByCategory(category);
    }
}