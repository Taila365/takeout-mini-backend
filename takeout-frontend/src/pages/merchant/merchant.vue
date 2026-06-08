<template>
  <view class="container">
    <!-- 商家信息 -->
    <view class="merchant-header">
      <image :src="merchant.banner || '/static/images/default-banner.jpg'" class="merchant-banner" mode="aspectFill" />
      <view class="merchant-basic">
        <image :src="merchant.logo || '/static/images/default-shop.png'" class="merchant-logo" />
        <view class="merchant-info">
          <view class="merchant-name">{{merchant.name}}</view>
          <view class="merchant-rating">
            <text class="rating-stars">⭐ {{merchant.rating}}</text>
            <text class="sales">月售{{merchant.salesVolume || 0}}单</text>
          </view>
          <view class="merchant-notice">{{merchant.description || '暂无公告'}}</view>
        </view>
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="product-section">
      <!-- 左侧分类 -->
      <scroll-view class="category-sidebar" scroll-y>
        <view 
          class="category-item" 
          v-for="(category, index) in categories" 
          :key="category.id"
          :class="{'active': currentCategory === index}"
          @click="selectCategory(index)"
        >
          {{category.name}}
        </view>
      </scroll-view>

      <!-- 右侧商品 -->
      <scroll-view class="product-list" scroll-y :scroll-top="productListScrollTop" scroll-with-animation>
        <view class="product-category-title">{{currentCategoryName}}</view>
        <view class="product-item" v-for="product in products" :key="product.id">
          <image :src="product.image || '/static/images/default-product.png'" class="product-img" mode="aspectFill" />
          <view class="product-info">
            <view class="product-name">{{product.name}}</view>
            <view class="product-desc">{{product.description || '暂无描述'}}</view>
            <view class="product-bottom">
              <view class="product-price">
                <text class="price-symbol">¥</text>
                <text class="price-num">{{product.price}}</text>
              </view>
              <view class="product-actions">
                <text class="stock" v-if="product.stock <= 10">仅剩{{product.stock}}份</text>
                <view class="quantity-control">
                  <text class="btn-minus" v-if="getCartQuantity(product.id) > 0" @click="decreaseQuantity(product)">-</text>
                  <text class="quantity" v-if="getCartQuantity(product.id) > 0">{{getCartQuantity(product.id)}}</text>
                  <text class="btn-plus" @click="addToCart(product)">+</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 购物车底部栏 -->
    <view class="cart-bar" v-if="cartTotal > 0">
      <view class="cart-info" @click="showCartDetail">
        <view class="cart-icon">
          <text class="cart-badge">{{cartTotal}}</text>
          🛒
        </view>
        <view class="cart-price">
          <text class="price-symbol">¥</text>
          <text class="price-num">{{cartTotalPrice}}</text>
        </view>
      </view>
      <view class="cart-submit" @click="submitOrder">
        去结算
      </view>
    </view>
  </view>
</template>

<script>
import { merchantApi, productApi, cartApi, categoryApi } from '@/utils/api.js'

export default {
  data() {
    return {
      merchantId: null,
      merchant: {},
      categories: [{ id: 0, name: '全部' }],
      currentCategory: 0,
      products: [],
      /** 当前商家全部上架商品，供「全部」分类使用 */
      allOnSaleProducts: [],
      productListScrollTop: 0,
      cart: {}
    }
  },
  computed: {
    currentCategoryName() {
      return this.categories[this.currentCategory]?.name || '全部'
    },
    cartTotal() {
      return Object.values(this.cart).reduce((sum, item) => sum + item.quantity, 0)
    },
    cartTotalPrice() {
      return Object.values(this.cart).reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
    }
  },
  async onLoad(options) {
    this.merchantId = options.id
    await Promise.all([this.loadMerchantDetail(), this.loadCategoriesAndProducts()])
    await this.loadCart()
  },
  onShow() {
    if (this.merchantId && uni.getStorageSync('token')) {
      this.loadCart()
    }
  },
  methods: {
    ensureLogin(actionLabel) {
      if (uni.getStorageSync('token')) return true
      uni.showModal({
        title: '提示',
        content: `请先登录后再${actionLabel}`,
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            uni.switchTab({ url: '/pages/user/user' })
          }
        }
      })
      return false
    },
    // 加载商家详情
    async loadMerchantDetail() {
      try {
        const res = await merchantApi.getMerchantById(this.merchantId)
        this.merchant = res.data || {}
      } catch (error) {
        console.error('加载商家详情失败:', error)
      }
    },
    // 加载左侧分类 + 默认「全部」上架商品
    async loadCategoriesAndProducts() {
      try {
        const [productRes, categoryRes] = await Promise.all([
          productApi.getOnSaleProducts(this.merchantId),
          categoryApi.getCategoriesByMerchantId(this.merchantId).catch(() => ({ data: [] }))
        ])
        const onSale = productRes.data || []
        this.allOnSaleProducts = onSale
        this.products = onSale
        this.currentCategory = 0
        const remote = categoryRes.data || []
        this.categories = [{ id: 0, name: '全部' }, ...remote]
      } catch (error) {
        console.error('加载分类或商品失败:', error)
        this.allOnSaleProducts = []
        this.products = []
        this.categories = [{ id: 0, name: '全部' }]
      }
    },
    // 选择分类：全部用缓存上架列表，其它调按分类接口并只展示本店上架商品
    async selectCategory(index) {
      this.currentCategory = index
      this.resetProductListScroll()
      const cat = this.categories[index]
      if (!cat || cat.id === 0) {
        this.products = [...this.allOnSaleProducts]
        return
      }
      try {
        const res = await productApi.getProductsByCategoryId(cat.id)
        const mid = String(this.merchantId)
        this.products = (res.data || []).filter(
          (p) => p.status === 1 && String(p.merchantId) === mid
        )
      } catch (error) {
        console.error('加载分类商品失败:', error)
        uni.showToast({ title: '加载失败', icon: 'none' })
      }
    },
    resetProductListScroll() {
      this.productListScrollTop = this.productListScrollTop ? 0 : 0.01
      this.$nextTick(() => {
        this.productListScrollTop = 0
      })
    },
    // 获取购物车中商品数量
    getCartQuantity(productId) {
      return this.cart[productId]?.quantity || 0
    },
    // 添加到购物车
    async addToCart(product) {
      if (!this.ensureLogin('加入购物车')) return
      if (product.stock <= 0) {
        uni.showToast({ title: '商品已售罄', icon: 'none' })
        return
      }
      try {
        await cartApi.addItem(this.merchantId, product.id, 1)
        await this.loadCart()
      } catch (error) {
        console.error('添加购物车失败:', error)
      }
    },
    // 减少数量
    async decreaseQuantity(product) {
      if (!this.ensureLogin('修改购物车')) return
      if (!this.cart[product.id]) return
      try {
        await cartApi.subtractItem(this.merchantId, product.id, 1)
        await this.loadCart()
      } catch (error) {
        console.error('减少购物车失败:', error)
      }
    },
    // 加载购物车
    async loadCart() {
      if (!uni.getStorageSync('token')) {
        this.cart = {}
        return
      }
      try {
        const res = await cartApi.getCartSummary(this.merchantId)
        const items = (res.data && res.data.items) || []
        const cartMap = {}
        items.forEach(item => {
          cartMap[item.productId] = {
            id: item.productId,
            name: item.productName,
            price: item.price,
            image: item.productImage,
            quantity: item.quantity
          }
        })
        this.cart = cartMap
      } catch (error) {
        this.cart = {}
        console.error('加载购物车失败:', error)
      }
    },
    // 跳转购物车 Tab（Redis 侧数据）
    showCartDetail() {
      if (!this.ensureLogin('查看购物车')) return
      uni.setStorageSync('currentMerchantId', this.merchantId)
      uni.switchTab({ url: '/pages/cart/cart' })
    },
    // 提交订单
    submitOrder() {
      if (!this.ensureLogin('结算')) return
      if (this.cartTotal === 0) {
        uni.showToast({ title: '购物车为空', icon: 'none' })
        return
      }
      uni.setStorageSync('currentMerchantId', this.merchantId)
      uni.navigateTo({
        url: '/pages/order/confirm'
      })
    }
  }
}
</script>

<style scoped>
.merchant-header {
  position: relative;
}

.merchant-banner {
  width: 100%;
  height: 200rpx;
}

.merchant-basic {
  display: flex;
  padding: 20rpx;
  background: #fff;
  margin-top: -40rpx;
  margin-left: 20rpx;
  margin-right: 20rpx;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.merchant-logo {
  width: 120rpx;
  height: 120rpx;
  border-radius: 12rpx;
  margin-right: 20rpx;
}

.merchant-info {
  flex: 1;
}

.merchant-name {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 12rpx;
}

.merchant-rating {
  display: flex;
  align-items: center;
  gap: 20rpx;
  margin-bottom: 12rpx;
}

.rating-stars {
  color: #ff9500;
  font-size: 26rpx;
}

.sales {
  font-size: 24rpx;
  color: #999;
}

.merchant-notice {
  font-size: 24rpx;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-section {
  display: flex;
  height: calc(100vh - 400rpx);
  margin-top: 20rpx;
}

.category-sidebar {
  width: 160rpx;
  background: #f8f8f8;
}

.category-item {
  padding: 30rpx 20rpx;
  text-align: center;
  font-size: 26rpx;
  color: #666;
  border-left: 4rpx solid transparent;
}

.category-item.active {
  background: #fff;
  color: #667eea;
  border-left-color: #667eea;
}

.product-list {
  flex: 1;
  background: #fff;
  padding: 20rpx;
}

.product-category-title {
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #f5f5f5;
}

.product-item {
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.product-img {
  width: 160rpx;
  height: 160rpx;
  border-radius: 12rpx;
  margin-right: 20rpx;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
}

.product-desc {
  font-size: 24rpx;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  color: #ff4757;
}

.price-symbol {
  font-size: 24rpx;
}

.price-num {
  font-size: 36rpx;
  font-weight: bold;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.stock {
  font-size: 22rpx;
  color: #ff4757;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.btn-minus, .btn-plus {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  font-weight: bold;
}

.btn-minus {
  background: #f5f5f5;
  color: #666;
}

.btn-plus {
  background: #667eea;
  color: #fff;
}

.quantity {
  font-size: 28rpx;
  min-width: 40rpx;
  text-align: center;
}

.cart-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  box-shadow: 0 -4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.cart-info {
  flex: 1;
  display: flex;
  align-items: center;
}

.cart-icon {
  position: relative;
  font-size: 48rpx;
  margin-right: 20rpx;
}

.cart-badge {
  position: absolute;
  top: -10rpx;
  right: -10rpx;
  background: #ff4757;
  color: #fff;
  font-size: 20rpx;
  padding: 4rpx 12rpx;
  border-radius: 20rpx;
}

.cart-price {
  color: #ff4757;
}

.cart-submit {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 20rpx 48rpx;
  border-radius: 40rpx;
  font-size: 28rpx;
}
</style>