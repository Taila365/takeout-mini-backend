package com.takeout.service;

import com.takeout.entity.Product;
import com.takeout.utils.Result;
import java.util.List;

public interface ProductService {
    // 根据商家id获取商品列表
    Result<List<Product>> getProductsByMerchantId(Long merchantId);
    
    // 根据分类id获取商品列表
    Result<List<Product>> getProductsByCategoryId(Long categoryId);
    
    // 获取商家上架的商品
    Result<List<Product>> getOnSaleProductsByMerchantId(Long merchantId);
    
    // 根据id获取商品详情
    Result<Product> getProductById(Long id);
    
    // 创建商品
    Result<Product> createProduct(Product product);
    
    // 更新商品
    Result<Product> updateProduct(Product product);
    
    // 更新商品状态
    Result<Product> updateProductStatus(Long id, Integer status);
    
    // 更新商品库存
    Result<Product> updateProductStock(Long id, Integer stock);
    
    // 删除商品
    Result<Void> deleteProduct(Long id);
}