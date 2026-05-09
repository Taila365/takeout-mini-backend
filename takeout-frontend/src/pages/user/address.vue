<template>
  <view class="container">
    <!-- 地址列表 -->
    <view class="address-list" v-if="addresses.length > 0">
      <view class="address-item" v-for="address in addresses" :key="address.id" @click="selectAddress(address)">
        <view class="address-header">
          <text class="address-name">{{address.name}}</text>
          <text class="address-phone">{{address.phone}}</text>
          <text class="address-default" v-if="address.isDefault === 1">默认</text>
        </view>
        <view class="address-detail">
          {{address.province}}{{address.city}}{{address.district}}{{address.detailAddress}}
        </view>
        <view class="address-actions">
          <text class="btn-edit" @click.stop="editAddress(address)">编辑</text>
          <text class="btn-delete" @click.stop="deleteAddress(address)">删除</text>
        </view>
      </view>
    </view>

    <!-- 空地址 -->
    <view class="empty-address" v-else>
      <image src="/static/images/empty-address.png" class="empty-img" />
      <text class="empty-text">暂无收货地址</text>
    </view>

    <!-- 添加地址按钮 -->
    <view class="add-address">
      <button class="btn-add" @click="addAddress">+ 添加新地址</button>
    </view>

    <!-- 地址编辑弹窗 -->
    <uni-popup ref="addressPopup" type="bottom">
      <view class="popup-content">
        <view class="popup-header">
          <text class="popup-title">{{isEdit ? '编辑地址' : '添加地址'}}</text>
          <text class="popup-close" @click="closePopup">×</text>
        </view>
        <view class="popup-form">
          <view class="form-item">
            <text class="form-label">收货人</text>
            <input type="text" v-model="form.name" placeholder="请输入收货人姓名" />
          </view>
          <view class="form-item">
            <text class="form-label">手机号</text>
            <input type="number" v-model="form.phone" placeholder="请输入手机号" maxlength="11" />
          </view>
          <view class="form-item">
            <text class="form-label">所在地区</text>
            <picker mode="region" @change="regionChange" :value="region">
              <view class="picker-value">{{regionText || '请选择所在地区'}}</view>
            </picker>
          </view>
          <view class="form-item">
            <text class="form-label">详细地址</text>
            <textarea v-model="form.detailAddress" placeholder="请输入详细地址" />
          </view>
          <view class="form-item">
            <text class="form-label">设为默认</text>
            <switch :checked="form.isDefault === 1" @change="toggleDefault" />
          </view>
        </view>
        <view class="popup-footer">
          <button class="btn-save" @click="saveAddress">保存</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { addressApi } from '@/utils/api.js'

export default {
  data() {
    return {
      addresses: [],
      isEdit: false,
      currentAddressId: null,
      form: {
        name: '',
        phone: '',
        province: '',
        city: '',
        district: '',
        detailAddress: '',
        isDefault: 0
      },
      region: [],
      isSelectMode: false
    }
  },
  computed: {
    regionText() {
      if (this.form.province && this.form.city && this.form.district) {
        return `${this.form.province} ${this.form.city} ${this.form.district}`
      }
      return ''
    }
  },
  onLoad(options) {
    this.isSelectMode = options.select === 'true'
    this.loadAddresses()
  },
  methods: {
    // 加载地址列表
    async loadAddresses() {
      try {
        uni.showLoading({ title: '加载中...' })
        const res = await addressApi.getAddresses()
        this.addresses = res.data || []
        uni.hideLoading()
      } catch (error) {
        uni.hideLoading()
        console.error('加载地址失败:', error)
      }
    },
    // 选择地址
    selectAddress(address) {
      if (this.isSelectMode) {
        // 返回上一页并传递选中的地址
        const pages = getCurrentPages()
        const prevPage = pages[pages.length - 2]
        if (prevPage) {
          prevPage.$vm.defaultAddress = address
        }
        uni.navigateBack()
      }
    },
    // 添加地址
    addAddress() {
      this.isEdit = false
      this.currentAddressId = null
      this.resetForm()
      this.$refs.addressPopup.open()
    },
    // 编辑地址
    editAddress(address) {
      this.isEdit = true
      this.currentAddressId = address.id
      this.form = {
        name: address.name,
        phone: address.phone,
        province: address.province,
        city: address.city,
        district: address.district,
        detailAddress: address.detailAddress,
        isDefault: address.isDefault
      }
      this.region = [address.province, address.city, address.district]
      this.$refs.addressPopup.open()
    },
    // 删除地址
    deleteAddress(address) {
      uni.showModal({
        title: '提示',
        content: '确定删除该地址吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              uni.showLoading({ title: '删除中...' })
              const result = await addressApi.deleteAddress(address.id)
              uni.hideLoading()

              if (result.code === 200) {
                uni.showToast({ title: '删除成功', icon: 'success' })
                this.loadAddresses()
              } else {
                uni.showToast({ title: result.msg || '删除失败', icon: 'none' })
              }
            } catch (error) {
              uni.hideLoading()
              console.error('删除地址失败:', error)
              uni.showToast({ title: '删除失败', icon: 'none' })
            }
          }
        }
      })
    },
    // 地区选择
    regionChange(e) {
      this.region = e.detail.value
      this.form.province = e.detail.value[0]
      this.form.city = e.detail.value[1]
      this.form.district = e.detail.value[2]
    },
    // 切换默认地址
    toggleDefault(e) {
      this.form.isDefault = e.detail.value ? 1 : 0
    },
    // 保存地址
    async saveAddress() {
      // 表单验证
      if (!this.form.name.trim()) {
        uni.showToast({ title: '请输入收货人姓名', icon: 'none' })
        return
      }
      if (!this.form.phone.trim()) {
        uni.showToast({ title: '请输入手机号', icon: 'none' })
        return
      }
      if (!/^1[3-9]\d{9}$/.test(this.form.phone)) {
        uni.showToast({ title: '手机号格式不正确', icon: 'none' })
        return
      }
      if (!this.form.province || !this.form.city || !this.form.district) {
        uni.showToast({ title: '请选择所在地区', icon: 'none' })
        return
      }
      if (!this.form.detailAddress.trim()) {
        uni.showToast({ title: '请输入详细地址', icon: 'none' })
        return
      }

      try {
        uni.showLoading({ title: '保存中...' })
        
        let res
        if (this.isEdit) {
          this.form.id = this.currentAddressId
          res = await addressApi.updateAddress(this.form)
        } else {
          res = await addressApi.createAddress(this.form)
        }
        
        uni.hideLoading()

        if (res.code === 200) {
          uni.showToast({ title: '保存成功', icon: 'success' })
          this.closePopup()
          this.loadAddresses()
        } else {
          uni.showToast({ title: res.msg || '保存失败', icon: 'none' })
        }
      } catch (error) {
        uni.hideLoading()
        console.error('保存地址失败:', error)
        uni.showToast({ title: '保存失败', icon: 'none' })
      }
    },
    // 关闭弹窗
    closePopup() {
      this.$refs.addressPopup.close()
    },
    // 重置表单
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        province: '',
        city: '',
        district: '',
        detailAddress: '',
        isDefault: 0
      }
      this.region = []
    }
  }
}
</script>

<style scoped>
.address-list {
  padding: 20rpx;
  padding-bottom: 140rpx;
}

.address-item {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}

.address-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.address-name {
  font-size: 32rpx;
  font-weight: bold;
  margin-right: 20rpx;
}

.address-phone {
  font-size: 28rpx;
  color: #666;
  margin-right: 20rpx;
}

.address-default {
  background: #667eea;
  color: #fff;
  font-size: 22rpx;
  padding: 6rpx 16rpx;
  border-radius: 8rpx;
}

.address-detail {
  font-size: 28rpx;
  color: #333;
  line-height: 1.5;
  margin-bottom: 20rpx;
}

.address-actions {
  display: flex;
  justify-content: flex-end;
  gap: 30rpx;
  padding-top: 20rpx;
  border-top: 1rpx solid #f5f5f5;
}

.btn-edit, .btn-delete {
  font-size: 28rpx;
  color: #667eea;
}

.btn-delete {
  color: #ff4757;
}

.empty-address {
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

.add-address {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx;
  background: #fff;
  box-shadow: 0 -4rpx 16rpx rgba(0, 0, 0, 0.1);
}

.btn-add {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 30rpx;
  border-radius: 40rpx;
  font-size: 32rpx;
  border: none;
}

.btn-add::after {
  border: none;
}

.popup-content {
  background: #fff;
  border-radius: 32rpx 32rpx 0 0;
  max-height: 80vh;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #f5f5f5;
}

.popup-title {
  font-size: 32rpx;
  font-weight: bold;
}

.popup-close {
  font-size: 48rpx;
  color: #999;
}

.popup-form {
  padding: 30rpx;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.form-label {
  width: 160rpx;
  font-size: 28rpx;
  color: #333;
}

.form-item input,
.form-item textarea {
  flex: 1;
  font-size: 28rpx;
}

.form-item textarea {
  height: 100rpx;
}

.picker-value {
  flex: 1;
  font-size: 28rpx;
  color: #333;
}

.popup-footer {
  padding: 30rpx;
}

.btn-save {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 30rpx;
  border-radius: 40rpx;
  font-size: 32rpx;
  border: none;
}

.btn-save::after {
  border: none;
}
</style>