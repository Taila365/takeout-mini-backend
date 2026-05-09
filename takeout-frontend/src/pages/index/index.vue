<template>
  <view class="container">
    <!-- 搜索栏 -->
    <view class="search-bar">
      <view class="search-input">
        <text class="search-icon">🔍</text>
        <input type="text" placeholder="搜索商家或商品" v-model="searchKey" @confirm="handleSearch" />
      </view>
    </view>

    <!-- 轮播图 -->
    <swiper class="banner" indicator-dots autoplay circular>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <image :src="item" mode="aspectFill" class="banner-img" />
      </swiper-item>
    </swiper>

    <!-- 分类导航 -->
    <view class="category-nav">
      <view class="category-item" v-for="(item, index) in categories" :key="index" @click="navigateToCategory(item)">
        <image :src="item.icon" class="category-icon" />
        <text class="category-name">{{item.name}}</text>
      </view>
    </view>

    <!-- 商家列表 -->
    <view class="merchant-section">
      <view class="section-title">推荐商家</view>
      <view class="merchant-list">
        <view class="merchant-item" v-for="(merchant, index) in merchants" :key="merchant.id" @click="navigateToMerchant(merchant.id)">
          <image :src="merchant.logo || '/static/images/default-shop.png'" class="merchant-logo" />
          <view class="merchant-info">
            <view class="merchant-name">{{merchant.name}}</view>
            <view class="merchant-rating">
              <text class="rating-stars">⭐ {{merchant.rating}}</text>
              <text class="sales">月售{{merchant.salesVolume || 0}}单</text>
            </view>
            <view class="merchant-delivery">
              <text class="delivery-time">{{merchant.businessHours}}</text>
              <text class="delivery-fee">配送费¥{{merchant.deliveryFee || 0}}</text>
            </view>
            <view class="merchant-tags">
              <text class="tag" v-if="merchant.minimumOrderAmount">起送¥{{merchant.minimumOrderAmount}}</text>
              <text class="tag" :class="{'tag-open': merchant.status === 1, 'tag-close': merchant.status !== 1}">
                {{merchant.status === 1 ? '营业中' : '休息中'}}
              </text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { merchantApi } from '@/utils/api.js'

export default {
  data() {
    return {
      searchKey: '',
      banners: [
        '/static/images/banner1.jpg',
        '/static/images/banner2.jpg',
        '/static/images/banner3.jpg'
      ],
      categories: [
        { name: '美食', icon: '/static/images/food.png' },
        { name: '超市', icon: '/static/images/supermarket.png' },
        { name: '水果', icon: '/static/images/fruit.png' },
        { name: '甜品', icon: '/static/images/dessert.png' },
        { name: '饮品', icon: '/static/images/drink.png' },
        { name: '快餐', icon: '/static/images/fastfood.png' },
        { name: '烧烤', icon: '/static/images/bbq.png' },
        { name: '全部', icon: '/static/images/all.png' }
      ],
      merchants: []
    }
  },
  onLoad() {
    this.loadMerchants()
  },
  onPullDownRefresh() {
    this.loadMerchants()
    uni.stopPullDownRefresh()
  },
  methods: {
    // 加载商家列表
    async loadMerchants() {
      try {
        uni.showLoading({ title: '加载中...' })
        const res = await merchantApi.getOpenMerchants()
        this.merchants = res.data || []
        uni.hideLoading()
      } catch (error) {
        uni.hideLoading()
        console.error('加载商家失败:', error)
      }
    },
    // 搜索
    handleSearch() {
      if (!this.searchKey.trim()) {
        uni.showToast({ title: '请输入搜索关键词', icon: 'none' })
        return
      }
      // 实现搜索逻辑
      uni.showToast({ title: '搜索功能开发中', icon: 'none' })
    },
    // 跳转到分类
    navigateToCategory(category) {
      uni.showToast({ title: `${category.name}分类开发中`, icon: 'none' })
    },
    // 跳转到商家详情
    navigateToMerchant(merchantId) {
      uni.navigateTo({
        url: `/pages/merchant/merchant?id=${merchantId}`
      })
    }
  }
}
</script>

<style scoped>
.search-bar {
  padding: 20rpx;
  background: #fff;
}

.search-input {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 32rpx;
  padding: 16rpx 24rpx;
}

.search-icon {
  margin-right: 16rpx;
  font-size: 28rpx;
}

.search-input input {
  flex: 1;
  font-size: 28rpx;
}

.banner {
  height: 300rpx;
  margin: 20rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
}

.category-nav {
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx;
  background: #fff;
  margin: 20rpx;
  border-radius: 16rpx;
}

.category-item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx 0;
}

.category-icon {
  width: 80rpx;
  height: 80rpx;
  margin-bottom: 12rpx;
}

.category-name {
  font-size: 24rpx;
  color: #333;
}

.merchant-section {
  padding: 20rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  padding-left: 20rpx;
  border-left: 8rpx solid #667eea;
}

.merchant-list {
  background: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
}

.merchant-item {
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.merchant-item:last-child {
  border-bottom: none;
}

.merchant-logo {
  width: 160rpx;
  height: 160rpx;
  border-radius: 12rpx;
  margin-right: 20rpx;
}

.merchant-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.merchant-name {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.merchant-rating {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.rating-stars {
  color: #ff9500;
  font-size: 26rpx;
}

.sales {
  font-size: 24rpx;
  color: #999;
}

.merchant-delivery {
  display: flex;
  justify-content: space-between;
  font-size: 24rpx;
  color: #666;
}

.merchant-tags {
  display: flex;
  gap: 12rpx;
}

.tag {
  padding: 6rpx 16rpx;
  border-radius: 8rpx;
  font-size: 22rpx;
  background: #f5f5f5;
  color: #666;
}

.tag-open {
  background: #e8f5e9;
  color: #4caf50;
}

.tag-close {
  background: #ffebee;
  color: #f44336;
}
</style>