<template>
  <view class="container">
    <text>测试页面</text>
    <button @click="test">点击测试</button>
  </view>
</template>

<script>
export default {
  methods: {
    test() {
      console.log('测试成功')
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20rpx;
}
</style>