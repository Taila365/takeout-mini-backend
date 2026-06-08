<template>
  <el-container class="layout">
    <el-aside width="220px" class="aside">
      <div class="logo">
        <el-icon :size="28"><Shop /></el-icon>
        <span>{{ txt.brand }}</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        router
        background-color="#001529"
        text-color="#ffffffa6"
        active-text-color="#fff"
      >
        <el-menu-item index="/dashboard">
          <el-icon><Odometer /></el-icon>
          <span>{{ txt.dashboard }}</span>
        </el-menu-item>
        <el-menu-item index="/orders">
          <el-icon><List /></el-icon>
          <span>{{ txt.orders }}</span>
        </el-menu-item>
        <el-menu-item index="/products">
          <el-icon><Goods /></el-icon>
          <span>{{ txt.products }}</span>
        </el-menu-item>
        <el-menu-item index="/categories">
          <el-icon><Menu /></el-icon>
          <span>{{ txt.categories }}</span>
        </el-menu-item>
        <el-menu-item index="/shop">
          <el-icon><Setting /></el-icon>
          <span>{{ txt.shop }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="header-title">{{ currentTitle }}</div>
        <div class="header-right">
          <span class="merchant-name">{{ auth.merchant?.name }}</span>
          <el-tag :type="auth.merchant?.status === 1 ? 'success' : 'info'" size="small">
            {{ auth.merchant?.status === 1 ? txt.open : txt.closed }}
          </el-tag>
          <el-button type="danger" link @click="handleLogout">{{ txt.logout }}</el-button>
        </div>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { ElMessageBox } from 'element-plus'

const txt = {
  brand: '\u5546\u5bb6\u540e\u53f0',
  dashboard: '\u5de5\u4f5c\u53f0',
  orders: '\u8ba2\u5355\u7ba1\u7406',
  products: '\u5546\u54c1\u7ba1\u7406',
  categories: '\u5206\u7c7b\u7ba1\u7406',
  shop: '\u5e97\u94fa\u8bbe\u7f6e',
  open: '\u8425\u4e1a\u4e2d',
  closed: '\u4f11\u606f\u4e2d',
  logout: '\u9000\u51fa',
  confirmLogout: '\u786e\u5b9a\u9000\u51fa\u767b\u5f55\uff1f',
  tip: '\u63d0\u793a'
}

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const activeMenu = computed(() => route.path)
const currentTitle = computed(() => route.meta.title || '')

function handleLogout() {
  ElMessageBox.confirm(txt.confirmLogout, txt.tip, { type: 'warning' }).then(() => {
    auth.logout()
    router.push('/login')
  })
}
</script>

<style scoped>
.layout {
  height: 100vh;
}
.aside {
  background: #001529;
  display: flex;
  flex-direction: column;
}
.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #ffffff14;
}
.el-menu {
  border-right: none;
  flex: 1;
}
.header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.header-title {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.merchant-name {
  color: #606266;
  font-size: 14px;
}
.main {
  padding: 20px;
  overflow: auto;
}
</style>
