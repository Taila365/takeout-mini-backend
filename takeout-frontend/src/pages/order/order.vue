<template>
  <view class="container">
    <!-- 订单状态标签 -->
    <view class="order-tabs">
      <view 
        class="tab-item" 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="{'active': currentTab === index}"
        @click="selectTab(index)"
      >
        {{tab.name}}
      </view>
    </view>

    <!-- 订单列表 -->
    <scroll-view class="order-list" scroll-y @scrolltolower="loadMore">
      <view class="order-item" v-for="order in orders" :key="order.id">
        <view class="order-header">
          <text class="order-no">订单号: {{order.orderNo}}</text>
          <text class="order-status" :class="getStatusClass(order.orderStatus)">{{order.orderStatus}}</text>
        </view>
        
        <view class="order-products">
          <view class="product-item" v-for="item in order.items" :key="item.id">
            <image :src="item.productImage || '/static/images/default-product.png'" class="product-img" />
            <view class="product-info">
              <view class="product-name">{{item.productName}}</view>
              <view class="product-price">
                <text>¥{{item.price}}</text>
                <text class="product-quantity">x{{item.quantity}}</text>
              </view>
            </view>
          </view>
        </view>

        <view class="order-footer">
          <view class="order-total">
            <text>共{{getTotalQuantity(order)}}件商品 合计:</text>
            <text class="total-price">¥{{order.actualAmount}}</text>
          </view>
          <view class="order-actions">
            <button 
              class="btn-action" 
              v-if="order.orderStatus === '待支付'"
              @click="payOrder(order)"
            >
              立即支付
            </button>
            <button 
              class="btn-action btn-cancel" 
              v-if="order.orderStatus === '待支付'"
              @click="cancelOrder(order)"
            >
              取消订单
            </button>
            <button 
              class="btn-action" 
              v-if="order.orderStatus === '已完成' && !order.isReviewed"
              @click="reviewOrder(order)"
            >
              评价
            </button>
          </view>
        </view>
      </view>

      <!-- 加载更多 -->
      <view class="load-more" v-if="loading">
        <text>加载中...</text>
      </view>
      <view class="no-more" v-if="!hasMore && orders.length > 0">
        <text>没有更多订单了</text>
      </view>
    </scroll-view>

    <!-- 空订单 -->
    <view class="empty-order" v-if="orders.length === 0 && !loading">
      <image src="/static/images/empty-order.png" class="empty-img" />
      <text class="empty-text">暂无订单</text>
    </view>
  </view>
</template>

<script>
import { orderApi } from '@/utils/api.js'

export default {
  data() {
    return {
      tabs: [
        { name: '全部', status: '' },
        { name: '待支付', status: '待支付' },
        { name: '待配送', status: '待配送' },
        { name: '已完成', status: '已完成' }
      ],
      currentTab: 0,
      orders: [],
      loading: false,
      hasMore: true,
      page: 1,
      pageSize: 10
    }
  },
  async onShow() {
    const tabIndex = uni.getStorageSync('orderTabIndex')
    if (tabIndex !== '' && tabIndex != null) {
      this.currentTab = Number(tabIndex)
      uni.removeStorageSync('orderTabIndex')
      this.page = 1
      this.orders = []
    }

    await this.loadOrders()
  },
  onPullDownRefresh() {
    this.page = 1
    this.orders = []
    this.loadOrders()
    uni.stopPullDownRefresh()
  },
  methods: {
    // 选择标签
    selectTab(index) {
      this.currentTab = index
      this.page = 1
      this.orders = []
      this.loadOrders()
    },
    // 加载订单列表
    async loadOrders() {
      if (this.loading) return
      this.loading = true

      try {
        const res = await orderApi.getUserOrders()
        const orders = res.data || []
        
        // 根据当前标签筛选订单
        const filteredOrders = this.currentTab === 0 
          ? orders 
          : orders.filter(order => order.orderStatus === this.tabs[this.currentTab].status)

        if (this.page === 1) {
          this.orders = filteredOrders
        } else {
          this.orders = this.orders.concat(filteredOrders)
        }

        this.hasMore = orders.length === this.pageSize
        this.loading = false
        return filteredOrders
      } catch (error) {
        this.loading = false
        console.error('加载订单失败:', error)
        return []
      }
    },
    // 加载更多
    loadMore() {
      if (this.hasMore && !this.loading) {
        this.page++
        this.loadOrders()
      }
    },
    // 获取状态样式类
    getStatusClass(status) {
      const statusMap = {
        '待支付': 'status-pending',
        '待接单': 'status-waiting',
        '待配送': 'status-delivery',
        '已完成': 'status-completed',
        '已取消': 'status-cancelled'
      }
      return statusMap[status] || ''
    },
    // 获取商品总数量
    getTotalQuantity(order) {
      return order.items ? order.items.reduce((sum, item) => sum + item.quantity, 0) : 0
    },
    // 支付订单
    async payOrder(order, payMethod = 'wechat') {
      try {
        uni.showLoading({ title: '支付中...' })
        const res = await orderApi.payOrder(order.id, payMethod)
        uni.hideLoading()

        if (res.code === 200) {
          uni.showToast({ title: '支付成功', icon: 'success' })
          this.loadOrders()
        } else {
          uni.showToast({ title: res.msg || '支付失败', icon: 'none' })
        }
      } catch (error) {
        uni.hideLoading()
        console.error('支付失败:', error)
        uni.showToast({ title: '支付失败', icon: 'none' })
      }
    },
    // 取消订单
    cancelOrder(order) {
      uni.showModal({
        title: '提示',
        content: '确定取消该订单吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              uni.showLoading({ title: '取消中...' })
              const result = await orderApi.cancelOrder(order.id, '用户取消')
              uni.hideLoading()

              if (result.code === 200) {
                uni.showToast({ title: '取消成功', icon: 'success' })
                this.loadOrders()
              } else {
                uni.showToast({ title: result.msg || '取消失败', icon: 'none' })
              }
            } catch (error) {
              uni.hideLoading()
              console.error('取消订单失败:', error)
              uni.showToast({ title: '取消失败', icon: 'none' })
            }
          }
        }
      })
    },
    // 评价订单
    reviewOrder(order) {
      uni.navigateTo({
        url: `/pages/order/review?orderId=${order.id}`
      })
    }
  }
}
</script>

<style scoped>
.order-tabs {
  display: flex;
  background: #fff;
  padding: 20rpx 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #666;
  position: relative;
}

.tab-item.active {
  color: #667eea;
  font-weight: bold;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40rpx;
  height: 4rpx;
  background: #667eea;
  border-radius: 2rpx;
}

.order-list {
  padding: 20rpx;
  height: calc(100vh - 100rpx);
}

.order-item {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #f5f5f5;
}

.order-no {
  font-size: 26rpx;
  color: #999;
}

.order-status {
  font-size: 28rpx;
  font-weight: bold;
}

.status-pending {
  color: #ff9500;
}

.status-waiting {
  color: #667eea;
}

.status-delivery {
  color: #4caf50;
}

.status-completed {
  color: #999;
}

.status-cancelled {
  color: #999;
}

.order-products {
  margin-bottom: 20rpx;
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

.product-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28rpx;
  color: #ff4757;
}

.product-quantity {
  color: #999;
}

.order-footer {
  border-top: 1rpx solid #f5f5f5;
  padding-top: 20rpx;
}

.order-total {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20rpx;
  font-size: 28rpx;
}

.total-price {
  font-size: 32rpx;
  color: #ff4757;
  font-weight: bold;
  margin-left: 12rpx;
}

.order-actions {
  display: flex;
  justify-content: flex-end;
  gap: 20rpx;
}

.btn-action {
  padding: 16rpx 32rpx;
  border-radius: 32rpx;
  font-size: 26rpx;
  border: 2rpx solid #667eea;
  color: #667eea;
  background: #fff;
}

.btn-action::after {
  border: none;
}

.btn-cancel {
  border-color: #999;
  color: #999;
}

.load-more, .no-more {
  text-align: center;
  padding: 40rpx;
  font-size: 28rpx;
  color: #999;
}

.empty-order {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.empty-img {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 40rpx;
}

.empty-text {
  font-size: 28rpx;
  color: #999;
}
</style>