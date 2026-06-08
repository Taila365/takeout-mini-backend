<template>
  <view class="container">
    <!-- 用户信息 -->
    <view class="user-header">
      <view class="user-info" v-if="isLogin">
        <image :src="userInfo.avatar || '/static/images/default-avatar.png'" class="user-avatar" @click="chooseAvatar" />
        <view class="user-detail">
          <view class="user-name">{{userInfo.nickname || '微信用户'}}</view>
          <view class="user-phone">{{userInfo.phone || '未绑定手机号'}}</view>
        </view>
      </view>
      <view class="user-info" v-else @click="login">
        <image src="/static/images/default-avatar.png" class="user-avatar" />
        <view class="user-detail">
          <view class="user-name">点击登录</view>
          <view class="user-phone">登录后享受更多服务</view>
        </view>
      </view>
    </view>

    <!-- 订单入口 -->
    <view class="order-entry">
      <view class="entry-title">我的订单</view>
      <view class="entry-list">
        <view class="entry-item" v-for="(item, index) in orderEntries" :key="index" @click="navigateToOrder(item.status)">
          <text class="entry-icon">{{item.icon}}</text>
          <text class="entry-name">{{item.name}}</text>
        </view>
      </view>
    </view>

    <!-- 功能列表 -->
    <view class="function-list">
      <view class="function-item" @click="navigateToAddress">
        <text class="function-icon">📍</text>
        <text class="function-name">地址管理</text>
        <text class="function-arrow">></text>
      </view>
      <view class="function-item" @click="navigateToReviews">
        <text class="function-icon">⭐</text>
        <text class="function-name">我的评价</text>
        <text class="function-arrow">></text>
      </view>
      <view class="function-item" @click="contactService">
        <text class="function-icon">💬</text>
        <text class="function-name">联系客服</text>
        <text class="function-arrow">></text>
      </view>
      <view class="function-item" @click="showAbout">
        <text class="function-icon">ℹ️</text>
        <text class="function-name">关于我们</text>
        <text class="function-arrow">></text>
      </view>
    </view>

    <!-- 退出登录 -->
    <view class="logout-section" v-if="isLogin">
      <button class="btn-logout" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
import { userApi } from '@/utils/api.js'

export default {
  data() {
    return {
      isLogin: false,
      userInfo: {},
      orderEntries: [
        { name: '待支付', icon: '💰', status: '待支付' },
        { name: '待配送', icon: '🚚', status: '待配送' },
        { name: '已完成', icon: '✅', status: '已完成' },
        { name: '全部', icon: '📋', status: '' }
      ]
    }
  },
  onShow() {
    this.checkLogin()
  },
  methods: {
    // 检查登录状态
    checkLogin() {
      const token = uni.getStorageSync('token')
      const userInfo = uni.getStorageSync('userInfo')
      
      if (token && userInfo) {
        this.isLogin = true
        this.userInfo = userInfo
        this.loadUserInfo()
      } else {
        this.isLogin = false
        this.userInfo = {}
      }
    },
    // 加载用户信息
    async loadUserInfo() {
      try {
        const res = await userApi.getUserInfo()
        if (res.code === 200) {
          this.userInfo = res.data
          uni.setStorageSync('userInfo', res.data)
        }
      } catch (error) {
        console.error('加载用户信息失败:', error)
      }
    },
    // 登录（uni.login 的 success 若用 async，部分端上 finally 时机异常，改为同步 success + 单独 async 方法，保证 showLoading/hideLoading 配对）
    login() {
      uni.showLoading({ title: '登录中...' })
      uni.login({
        provider: 'weixin',
        success: (loginRes) => {
          this.afterWxLogin(loginRes)
        },
        fail: () => {
          uni.hideLoading()
          uni.showToast({ title: '微信登录失败', icon: 'none' })
        }
      })
    },
    async afterWxLogin(loginRes) {
      try {
        if (!loginRes.code) {
          uni.showToast({ title: '未获取到登录 code', icon: 'none' })
          return
        }
        const res = await userApi.login(loginRes.code)
        if (res.code === 200) {
          uni.setStorageSync('token', res.data.token)
          uni.setStorageSync('userInfo', res.data.user)
          this.isLogin = true
          this.userInfo = res.data.user
          uni.showToast({ title: '登录成功', icon: 'success' })
        } else {
          uni.showToast({ title: res.msg || '登录失败', icon: 'none' })
        }
      } catch (error) {
        console.error('登录失败:', error)
        uni.showToast({ title: (error && error.msg) || '登录失败', icon: 'none' })
      } finally {
        uni.hideLoading()
      }
    },
    // 选择头像
    chooseAvatar() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          // 上传头像
          this.uploadAvatar(res.tempFilePaths[0])
        }
      })
    },
    // 上传头像
    async uploadAvatar(filePath) {
      try {
        uni.showLoading({ title: '上传中...' })
        // 这里应该调用上传接口
        // 模拟上传成功
        setTimeout(() => {
          this.userInfo.avatar = filePath
          uni.setStorageSync('userInfo', this.userInfo)
          uni.hideLoading()
          uni.showToast({ title: '上传成功', icon: 'success' })
        }, 1000)
      } catch (error) {
        uni.hideLoading()
        uni.showToast({ title: '上传失败', icon: 'none' })
      }
    },
    // 跳转到订单页面
    navigateToOrder(status) {
      if (!this.isLogin) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      uni.switchTab({
        url: '/pages/order/order'
      })
    },
    // 跳转到地址管理
    navigateToAddress() {
      if (!this.isLogin) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      uni.navigateTo({
        url: '/pages/user/address'
      })
    },
    // 跳转到评价页面
    navigateToReviews() {
      if (!this.isLogin) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      uni.showToast({ title: '评价功能开发中', icon: 'none' })
    },
    // 联系客服
    contactService() {
      uni.showModal({
        title: '联系客服',
        content: '客服电话: 400-123-4567',
        showCancel: false
      })
    },
    // 关于我们
    showAbout() {
      uni.showModal({
        title: '关于我们',
        content: '外卖小程序 v1.0.0\n为您提供便捷的外卖服务',
        showCancel: false
      })
    },
    // 退出登录
    logout() {
      uni.showModal({
        title: '提示',
        content: '确定退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            uni.removeStorageSync('token')
            uni.removeStorageSync('userInfo')
            this.isLogin = false
            this.userInfo = {}
            uni.showToast({ title: '已退出登录', icon: 'success' })
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.user-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60rpx 40rpx;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 30rpx;
  border: 4rpx solid rgba(255, 255, 255, 0.3);
}

.user-detail {
  flex: 1;
}

.user-name {
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 12rpx;
}

.user-phone {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.8);
}

.order-entry {
  background: #fff;
  margin: 20rpx;
  border-radius: 16rpx;
  padding: 30rpx;
}

.entry-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}

.entry-list {
  display: flex;
  justify-content: space-around;
}

.entry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx;
}

.entry-icon {
  font-size: 48rpx;
  margin-bottom: 12rpx;
}

.entry-name {
  font-size: 26rpx;
  color: #666;
}

.function-list {
  background: #fff;
  margin: 20rpx;
  border-radius: 16rpx;
  padding: 0 30rpx;
}

.function-item {
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.function-item:last-child {
  border-bottom: none;
}

.function-icon {
  font-size: 40rpx;
  margin-right: 20rpx;
}

.function-name {
  flex: 1;
  font-size: 30rpx;
  color: #333;
}

.function-arrow {
  font-size: 32rpx;
  color: #999;
}

.logout-section {
  margin: 40rpx 20rpx;
}

.btn-logout {
  width: 100%;
  background: #fff;
  color: #ff4757;
  padding: 30rpx;
  border-radius: 16rpx;
  font-size: 32rpx;
  border: none;
}

.btn-logout::after {
  border: none;
}
</style>