<template>
  <div class="login-page">
    <div class="login-card">
      <h1>{{ txt.title }}</h1>
      <p class="subtitle">{{ txt.subtitle }}</p>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="100px" @submit.prevent>
        <el-form-item :label="txt.merchantIdLabel" prop="merchantId">
          <el-input v-model="form.merchantId" :placeholder="txt.merchantIdPlaceholder" />
        </el-form-item>
        <el-form-item :label="txt.phone" prop="phone">
          <el-input v-model="form.phone" :placeholder="txt.phonePlaceholder" maxlength="11" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" style="width: 100%" @click="handleLogin">
            {{ txt.login }}
          </el-button>
        </el-form-item>
      </el-form>
      <p class="hint">{{ txt.hint }}</p>
      <p class="register-link">
        <el-button type="primary" link @click="$router.push('/register')">{{ txt.goRegister }}</el-button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { authApi } from '@/api'
import { useAuthStore } from '@/stores/auth'

const txt = {
  title: '\u5916\u5356\u5546\u5bb6\u7ba1\u7406\u540e\u53f0',
  subtitle: '\u4f7f\u7528\u5546\u5bb6 merchant_id \u767b\u5f55',
  merchantIdLabel: 'merchant_id',
  merchantIdPlaceholder: '\u5982 M00000001',
  phone: '\u624b\u673a\u53f7',
  phonePlaceholder: '\u5546\u5bb6\u767b\u8bb0\u624b\u673a\u53f7',
  login: '\u767b\u5f55',
  hint: '\u6f14\u793a\uff1amerchant_id M00000001\uff0c\u624b\u673a\u53f7 13800138001',
  inputMerchantId: '\u8bf7\u8f93\u5165 merchant_id',
  inputPhone: '\u8bf7\u8f93\u5165\u624b\u673a\u53f7',
  loginOk: '\u767b\u5f55\u6210\u529f',
  goRegister: '\u6ca1\u6709\u8d26\u53f7\uff1f\u5546\u5bb6\u5165\u9a7b\u6ce8\u518c'
}

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const formRef = ref()
const loading = ref(false)

const form = reactive({
  merchantId: '',
  phone: ''
})

const rules = {
  merchantId: [{ required: true, message: txt.inputMerchantId, trigger: 'blur' }],
  phone: [{ required: true, message: txt.inputPhone, trigger: 'blur' }]
}

onMounted(() => {
  // 清除过期 token，避免带着旧凭证被重定向到工作台再弹「登录已过期」
  auth.logout()
  if (route.query.merchantId) {
    form.merchantId = String(route.query.merchantId)
  }
})

async function handleLogin() {
  await formRef.value.validate()
  loading.value = true
  try {
    const res = await authApi.login({
      merchantId: form.merchantId.trim(),
      phone: form.phone
    })
    auth.setAuth(res.data.token, res.data.merchant)
    ElMessage.success(txt.loginOk)
    router.push('/dashboard')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.login-card {
  width: 440px;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
h1 {
  margin: 0 0 8px;
  font-size: 24px;
  text-align: center;
  color: #303133;
}
.subtitle {
  text-align: center;
  color: #909399;
  font-size: 13px;
  margin-bottom: 28px;
}
.hint {
  margin-top: 16px;
  font-size: 12px;
  color: #909399;
  text-align: center;
}
.register-link {
  text-align: center;
  margin-top: 8px;
}
</style>
