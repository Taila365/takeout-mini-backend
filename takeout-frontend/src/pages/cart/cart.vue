<template>
  <view class="container">
    <!-- 商家切换 -->
    <scroll-view class="merchant-tabs" scroll-x v-if="hasToken && merchantOptions.length > 0">
      <view
        class="merchant-tab"
        :class="{ active: activeMerchantId === merchant.id }"
        v-for="merchant in merchantOptions"
        :key="merchant.id"
        @click="switchMerchant(merchant.id)"
      >
        {{merchant.name}}
      </view>
    </scroll-view>

    <!-- 未登录 -->
    <view class="empty-cart" v-if="!hasToken">
      <image src="/static/images/empty-cart.png" class="empty-img" />
      <text class="empty-text">登录后使用云端购物车，与账号同步</text>
      <button class="go-shopping" @click="goLogin">去登录</button>
    </view>

    <!-- 空购物车 -->
    <view class="empty-cart" v-else-if="cartItems.length === 0">
      <image src="/static/images/empty-cart.png" class="empty-img" />
      <text class="empty-text">购物车是空的</text>
      <button class="go-shopping" @click="goShopping">去逛逛</button>
    </view>

    <!-- 购物车列表 -->
    <view class="cart-list" v-else-if="hasToken">
      <view class="cart-item" v-for="item in cartItems" :key="item.id">
        <checkbox :checked="item.selected" @click="toggleSelect(item)" />
        <image :src="item.image || '/static/images/default-product.png'" class="item-img" />
        <view class="item-info">
          <view class="item-name">{{item.name}}</view>
          <view class="item-price">¥{{item.price}}</view>
          <view class="item-actions">
            <view class="quantity-control">
              <text class="btn-minus" @click="decreaseQuantity(item)">-</text>
              <text class="quantity">{{item.quantity}}</text>
              <text class="btn-plus" @click="increaseQuantity(item)">+</text>
            </view>
            <text class="btn-delete" @click="deleteItem(item)">删除</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部结算栏 -->
    <view class="cart-footer" v-if="hasToken && cartItems.length > 0">
      <view class="select-all" @click="toggleSelectAll">
        <checkbox :checked="isAllSelected" />
        <text>全选</text>
      </view>
      <view class="cart-total">
        <text class="total-label">合计:</text>
        <text class="total-price">¥{{totalPrice}}</text>
      </view>
      <view class="btn-submit" @click="submitOrder">
        结算({{selectedCount}})
      </view>
    </view>
  </view>
</template>

<script>
import { cartApi, merchantApi } from '@/utils/api.js'

export default {
  data() {
    return {
      hasToken: false,
      cartItems: [],
      merchantId: null,
      activeMerchantId: null,
      merchantOptions: []
    }
  },
  computed: {
    isAllSelected() {
      return this.cartItems.length > 0 && this.cartItems.every(item => item.selected)
    },
    selectedCount() {
      return this.cartItems.filter(item => item.selected).reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice() {
      return this.cartItems.filter(item => item.selected).reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
    }
  },
  onShow() {
    this.hasToken = !!uni.getStorageSync('token')
    if (!this.hasToken) {
      this.cartItems = []
      this.merchantOptions = []
      this.merchantId = null
      this.activeMerchantId = null
      return
    }
    this.loadMerchantCarts()
  },
  methods: {
    goLogin() {
      uni.switchTab({ url: '/pages/user/user' })
    },
    // 加载有商品的商家列表，并默认展示当前商家购物车（数据来自后端 Redis）
    async loadMerchantCarts() {
      try {
        const merchantRes = await merchantApi.getOpenMerchants()
        const merchants = merchantRes.data || []
        const merchantOptions = []

        for (const merchant of merchants) {
          const res = await cartApi.getCartList(merchant.merchantId)
          if ((res.data || []).length > 0) {
            merchantOptions.push({
              id: merchant.merchantId,
              name: merchant.name || `商家${merchant.merchantId}`
            })
          }
        }

        this.merchantOptions = merchantOptions
        if (merchantOptions.length === 0) {
          this.cartItems = []
          this.merchantId = null
          this.activeMerchantId = null
          return
        }

        const currentMerchantId = uni.getStorageSync('currentMerchantId')
        const matchedMerchant = merchantOptions.find(item => String(item.id) === String(currentMerchantId))
        this.activeMerchantId = matchedMerchant ? matchedMerchant.id : merchantOptions[0].id
        await this.loadCartByMerchant(this.activeMerchantId)
      } catch (error) {
        this.cartItems = []
        this.merchantId = null
        this.activeMerchantId = null
        this.merchantOptions = []
        console.error('加载商家购物车失败:', error)
      }
    },
    // 按商家加载购物车
    async loadCartByMerchant(merchantId) {
      if (!merchantId) {
        this.cartItems = []
        this.merchantId = null
        return
      }
      try {
        this.merchantId = merchantId
        const res = await cartApi.getCartList(merchantId)
        this.cartItems = (res.data || []).map(item => ({
          id: item.productId,
          name: item.productName,
          image: item.productImage,
          price: item.price,
          quantity: item.quantity,
          selected: true
        }))
      } catch (error) {
        this.cartItems = []
        console.error('加载购物车失败:', error)
      }
    },
    // 切换商家
    async switchMerchant(merchantId) {
      this.activeMerchantId = merchantId
      uni.setStorageSync('currentMerchantId', merchantId)
      await this.loadCartByMerchant(merchantId)
    },
    // 切换选中状态
    toggleSelect(item) {
      item.selected = !item.selected
    },
    // 全选/取消全选
    toggleSelectAll() {
      const newState = !this.isAllSelected
      this.cartItems.forEach(item => {
        item.selected = newState
      })
    },
    // 增加数量
    async increaseQuantity(item) {
      if (!this.hasToken) {
        this.goLogin()
        return
      }
      try {
        await cartApi.addItem(this.merchantId, item.id, 1)
        await this.loadCartByMerchant(this.merchantId)
      } catch (error) {
        console.error('增加购物车失败:', error)
      }
    },
    // 减少数量
    async decreaseQuantity(item) {
      if (!this.hasToken) {
        this.goLogin()
        return
      }
      try {
        await cartApi.subtractItem(this.merchantId, item.id, 1)
        await this.loadCartByMerchant(this.merchantId)
      } catch (error) {
        console.error('减少购物车失败:', error)
      }
    },
    // 删除商品
    deleteItem(item) {
      uni.showModal({
        title: '提示',
        content: '确定删除该商品吗？',
        success: (res) => {
          if (res.confirm) {
            const removeCount = item.quantity || 1
            cartApi.subtractItem(this.merchantId, item.id, removeCount).then(() => {
              this.loadCartByMerchant(this.merchantId).then(() => {
                if (this.cartItems.length === 0) {
                  this.loadMerchantCarts()
                }
              })
            }).catch((error) => {
              console.error('删除商品失败:', error)
              uni.showToast({ title: '删除失败', icon: 'none' })
            })
          }
        }
      })
    },
    // 去购物
    goShopping() {
      uni.switchTab({
        url: '/pages/index/index'
      })
    },
    // 提交订单
    submitOrder() {
      if (!this.hasToken) {
        this.goLogin()
        return
      }
      if (this.selectedCount === 0) {
        uni.showToast({ title: '请选择商品', icon: 'none' })
        return
      }
      const selectedItems = this.cartItems.filter(item => item.selected)
      uni.setStorageSync('currentMerchantId', this.merchantId)
      uni.setStorageSync('checkoutItems', selectedItems)
      uni.navigateTo({
        url: '/pages/order/confirm'
      })
    }
  }
}
</script>

<style scoped>
.merchant-tabs {
  white-space: nowrap;
  background: #fff;
  padding: 16rpx 20rpx;
  border-bottom: 1rpx solid #f5f5f5;
}

.merchant-tab {
  display: inline-block;
  padding: 10rpx 24rpx;
  margin-right: 16rpx;
  border-radius: 24rpx;
  font-size: 24rpx;
  background: #f5f5f5;
  color: #666;
}

.merchant-tab.active {
  background: #667eea;
  color: #fff;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.empty-img {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 40rpx;
}

.empty-text {
  font-size: 28rpx;
  color: #999;
  margin-bottom: 40rpx;
}

.go-shopping {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 24rpx 80rpx;
  border-radius: 40rpx;
  font-size: 32rpx;
  border: none;
}

.go-shopping::after {
  border: none;
}

.cart-list {
  padding: 20rpx;
  padding-bottom: 120rpx;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20rpx;
  border-radius: 16rpx;
  margin-bottom: 20rpx;
}

.item-img {
  width: 160rpx;
  height: 160rpx;
  border-radius: 12rpx;
  margin: 0 20rpx;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 30rpx;
  font-weight: bold;
  margin-bottom: 12rpx;
}

.item-price {
  font-size: 32rpx;
  color: #ff4757;
  font-weight: bold;
  margin-bottom: 12rpx;
}

.item-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.btn-delete {
  font-size: 26rpx;
  color: #999;
}

.cart-footer {
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

.select-all {
  display: flex;
  align-items: center;
  gap: 12rpx;
  font-size: 28rpx;
}

.cart-total {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20rpx;
}

.total-label {
  font-size: 28rpx;
  margin-right: 12rpx;
}

.total-price {
  font-size: 36rpx;
  color: #ff4757;
  font-weight: bold;
}

.btn-submit {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 20rpx 48rpx;
  border-radius: 40rpx;
  font-size: 28rpx;
}
</style>