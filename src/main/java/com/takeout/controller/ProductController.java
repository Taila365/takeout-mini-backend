package com.takeout.controller;

import com.takeout.entity.Product;
import com.takeout.service.ProductService;
import com.takeout.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@Tag(name = "商品接口", description = "商品管理、库存管理")
public class ProductController {
    private final ProductService productService;

    @Operation(summary = "获取商家商品列表", description = "根据商家ID获取商品列表")
    @GetMapping("/merchant/{merchantId}")
    public Result<List<Product>> getProductsByMerchantId(@PathVariable Long merchantId) {
        return productService.getProductsByMerchantId(merchantId);
    }

    @Operation(summary = "获取分类商品列表", description = "根据分类ID获取商品列表")
    @GetMapping("/category/{categoryId}")
    public Result<List<Product>> getProductsByCategoryId(@PathVariable Long categoryId) {
        return productService.getProductsByCategoryId(categoryId);
    }

    @Operation(summary = "获取商家上架商品", description = "获取商家当前上架的商品列表")
    @GetMapping("/merchant/{merchantId}/onsale")
    public Result<List<Product>> getOnSaleProductsByMerchantId(@PathVariable Long merchantId) {
        return productService.getOnSaleProductsByMerchantId(merchantId);
    }

    @Operation(summary = "获取商品详情", description = "根据商品ID获取商品详细信息")
    @GetMapping("/detail/{id}")
    public Result<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @Operation(summary = "创建商品", description = "创建新的商品")
    @PostMapping("/create")
    public Result<Product> createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @Operation(summary = "更新商品", description = "更新商品信息")
    @PutMapping("/update")
    public Result<Product> updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product);
    }

    @Operation(summary = "更新商品状态", description = "更新商品的上架/下架状态，0: 下架, 1: 上架")
    @PutMapping("/status/{id}")
    public Result<Product> updateProductStatus(@PathVariable Long id, @RequestParam Integer status) {
        return productService.updateProductStatus(id, status);
    }

    @Operation(summary = "更新商品库存", description = "更新商品的库存数量")
    @PutMapping("/stock/{id}")
    public Result<Product> updateProductStock(@PathVariable Long id, @RequestParam Integer stock) {
        return productService.updateProductStock(id, stock);
    }

    @Operation(summary = "删除商品", description = "删除商品")
    @DeleteMapping("/delete/{id}")
    public Result<Void> deleteProduct(@PathVariable Long id) {
        return productService.deleteProduct(id);
    }
}