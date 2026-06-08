<template>
  <view class="container">
    <!-- 收货地址 -->
    <view class="address-section" @click="selectAddress">
      <view class="address-info" v-if="defaultAddress">
        <view class="address-header">
          <text class="address-name">{{defaultAddress.name}}</text>
          <text class="address-phone">{{defaultAddress.phone}}</text>
        </view>
        <view class="address-detail">
          {{defaultAddress.province}}{{defaultAddress.city}}{{defaultAddress.district}}{{defaultAddress.detailAddress}}
        </view>
      </view>
      <view class="no-address" v-else>
        <text>请选择收货地址</text>
      </view>
      <text class="arrow">></text>
    </view>

    <!-- 商品列表 -->
    <view class="product-section">
      <view class="merchant-name">{{merchantName}}</view>
      <view class="product-list">
        <view class="product-item" v-for="item in orderItems" :key="item.id">
          <image :src="item.image || '/static/images/default-product.png'" class="product-img" />
          <view class="product-info">
            <view class="product-name">{{item.name}}</view>
            <view class="product-bottom">
              <text class="product-price">¥{{item.price}}</text>
              <text class="product-quantity">x{{item.quantity}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 配送信息 -->
    <view class="delivery-section">
      <view class="delivery-item">
        <text class="label">配送费</text>
        <text class="value">¥{{deliveryFee}}</text>
      </view>
      <view class="delivery-item">
        <text class="label">备注</text>
        <input type="text" placeholder="请输入备注信息" v-model="remark" class="remark-input" />
      </view>
    </view>

    <!-- 支付方式 -->
    <view class="payment-section">
      <view class="section-title">支付方式</view>
      <radio-group @change="selectPayment">
        <label class="payment-item">
          <text>微信支付</text>
          <radio value="wechat" :checked="paymentMethod === 'wechat'" />
        </label>
        <label class="payment-item">
          <text>支付宝</text>
          <radio value="alipay" :checked="paymentMethod === 'alipay'" />
        </label>
      </radio-group>
    </view>

    <!-- 底部结算栏 -->
    <view class="order-footer">
      <view class="order-total">
        <text class="total-label">合计:</text>
        <text class="total-price">¥{{totalAmount}}</text>
      </view>
      <view class="btn-submit" @click="submitOrder">
        提交订单
      </view>
    </view>
  </view>
</template>

<script>
import { addressApi, orderApi, cartApi, merchantApi } from '@/utils/api.js'

export default {
  data() {
    return {
      defaultAddress: null,
      merchantId: null,
      merchantName: '',
      orderItems: [],
      deliveryFee: 0,
      remark: '',
      paymentMethod: 'wechat'
    }
  },
  computed: {
    productTotal() {
      return this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    totalAmount() {
      return (this.productTotal + this.deliveryFee).toFixed(2)
    }
  },
  onLoad() {
    this.loadAddress()
    this.loadCart()
  },
  onShow() {
    // 从地址选择页面返回时刷新地址
    this.loadAddress()
  },
  methods: {
    // 加载默认地址
    async loadAddress() {
      try {
        const res = await addressApi.getDefaultAddress()
        if (res.data) {
          this.defaultAddress = res.data
        }
      } catch (error) {
        console.error('加载地址失败:', error)
      }
    },
    // 加载购物车数据（与后端 Redis 一致）
    async loadCart() {
      if (!uni.getStorageSync('token')) {
        this.orderItems = []
        return
      }
      const merchantId = uni.getStorageSync('currentMerchantId')
      if (!merchantId) {
        this.orderItems = []
        return
      }
      this.merchantId = merchantId
      try {
        const [cartRes, merchantRes] = await Promise.all([
          cartApi.getCartList(merchantId),
          merchantApi.getMerchantById(merchantId)
        ])
        this.merchantName = (merchantRes.data && merchantRes.data.name) || ''
        const selectedItems = uni.getStorageSync('checkoutItems')
        const selectedMap = {}
        ;(selectedItems || []).forEach(item => {
          selectedMap[item.id] = true
        })
        const items = cartRes.data || []
        this.orderItems = items
          .filter(item => Object.keys(selectedMap).length === 0 || selectedMap[item.productId])
          .map(item => ({
            id: item.productId,
            name: item.productName,
            image: item.productImage,
            price: item.price,
            quantity: item.quantity
          }))
      } catch (error) {
        console.error('加载购物车失败:', error)
        this.orderItems = []
      }
    },
    // 选择地址
    selectAddress() {
      uni.navigateTo({
        url: '/pages/user/address?select=true'
      })
    },
    // 选择支付方式
    selectPayment(e) {
      this.paymentMethod = e.detail.value
    },
    // 提交订单
    async submitOrder() {
      if (!this.defaultAddress) { 
        uni.showToast({ title: '请选择收货地址', icon: 'none' })
        return
      }

      if (this.orderItems.length === 0) {
        uni.showToast({ title: '购物车为空', icon: 'none' })
        return
      }

      try {
        uni.showLoading({ title: '提交中...' })
        
        const orderData = {
          merchantId: this.merchantId,
          addressId: this.defaultAddress.id,
          totalAmount: this.productTotal,
          deliveryFee: this.deliveryFee,
          actualAmount: parseFloat(this.totalAmount),
          payMethod: this.paymentMethod,
          remark: this.remark,
          orderItems: this.orderItems.map(item => ({
            productId: item.id,
            productName: item.name,
            productImage: item.image,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.price * item.quantity
          }))
        }

        const res = await orderApi.createOrder(orderData)
        uni.hideLoading()

        if (res.code === 200) {
          // 清空购物车
          await cartApi.clearCart(this.merchantId)
          uni.removeStorageSync('checkoutItems')
          
          uni.setStorageSync('orderTabIndex', 1)

          uni.showToast({
            title: '订单创建成功',
            icon: 'success'
          })

          setTimeout(() => {
            uni.switchTab({
              url: '/pages/order/order'
            })
          }, 1500)
        } else {
          uni.showToast({ title: res.msg || '创建订单失败', icon: 'none' })
        }
      } catch (error) {
        uni.hideLoading()
        console.error('创建订单失败:', error)
        uni.showToast({ title: '创建订单失败', icon: 'none' })
      }
    }
  }
}
</script>

<style scoped>
.address-section {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 30rpx;
  margin: 20rpx;
  border-radius: 16rpx;
}

.address-info {
  flex: 1;
}

.address-header {
  display: flex;
  align-items: center;
  margin-bottom: 12rpx;
}

.address-name {
  font-size: 32rpx;
  font-weight: bold;
  margin-right: 20rpx;
}

.address-phone {
  font-size: 28rpx;
  color: #666;
}

.address-detail {
  font-size: 28rpx;
  color: #333;
  line-height: 1.5;
}

.no-address {
  flex: 1;
  font-size: 28rpx;
  color: #999;
}

.arrow {
  font-size: 32rpx;
  color: #999;
}

.product-section {
  background: #fff;
  padding: 30rpx;
  margin: 20rpx;
  border-radius: 16rpx;
}

.merchant-name {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #f5f5f5;
}

.product-list {
  margin-top: 20rpx;
}

.product-item {
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.product-item:last-child {
  border-bottom: none;
}

.product-img {
  width: 120rpx;
  height: 120rpx;
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
  font-size: 28rpx;
  color: #333;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 32rpx;
  color: #ff4757;
  font-weight: bold;
}

.product-quantity {
  font-size: 28rpx;
  color: #999;
}

.delivery-section {
  background: #fff;
  padding: 30rpx;
  margin: 20rpx;
  border-radius: 16rpx;
}

.delivery-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.delivery-item:last-child {
  border-bottom: none;
}

.label {
  font-size: 28rpx;
  color: #333;
}

.value {
  font-size: 28rpx;
  color: #ff4757;
}

.remark-input {
  flex: 1;
  text-align: right;
  font-size: 28rpx;
}

.payment-section {
  background: #fff;
  padding: 30rpx;
  margin: 20rpx;
  border-radius: 16rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}

.payment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
  font-size: 28rpx;
}

.payment-item:last-child {
  border-bottom: none;
}

.order-footer {
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

.order-total {
  flex: 1;
  display: flex;
  align-items: center;
}

.total-label {
  font-size: 28rpx;
  margin-right: 12rpx;
}

.total-price {
  font-size: 40rpx;
  color: #ff4757;
  font-weight: bold;
}

.btn-submit {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 24rpx 60rpx;
  border-radius: 40rpx;
  font-size: 32rpx;
}
</style>