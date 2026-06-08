<template>
  <div class="register-page">
    <el-card class="register-card">
      <template #header>{{ txt.title }}</template>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
        <el-form-item :label="txt.name" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item :label="txt.phone" prop="phone">
          <el-input v-model="form.phone" maxlength="11" />
        </el-form-item>
        <el-form-item :label="txt.address" prop="address">
          <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item :label="txt.category" prop="category">
          <el-select v-model="form.category" style="width: 100%">
            <el-option v-for="c in categories" :key="c" :label="c" :value="c" />
          </el-select>
        </el-form-item>
        <el-form-item :label="txt.hours">
          <el-input v-model="form.businessHours" placeholder="10:00-22:00" />
        </el-form-item>
        <el-form-item :label="txt.deliveryFee">
          <el-input-number v-model="form.deliveryFee" :min="0" :precision="2" />
        </el-form-item>
        <el-form-item :label="txt.minOrder">
          <el-input-number v-model="form.minimumOrderAmount" :min="0" :precision="2" />
        </el-form-item>
        <el-form-item :label="txt.desc">
          <el-input v-model="form.description" type="textarea" :rows="3" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="submit">{{ txt.submit }}</el-button>
          <el-button @click="$router.push('/login')">{{ txt.backLogin }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog v-model="successVisible" :title="txt.successTitle" width="480px" :close-on-click-modal="false">
      <p>{{ txt.successMsg }}</p>
      <el-descriptions :column="1" border style="margin-top: 12px">
        <el-descriptions-item label="merchant_id">{{ registeredMerchant?.merchantId }}</el-descriptions-item>
        <el-descriptions-item :label="txt.name">{{ registeredMerchant?.name }}</el-descriptions-item>
        <el-descriptions-item :label="txt.phone">{{ registeredMerchant?.phone }}</el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <el-button type="primary" @click="goLogin">{{ txt.goLogin }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { merchantApi } from '@/api'

const txt = {
  title: '\u5546\u5bb6\u5165\u9a7b\u6ce8\u518c',
  name: '\u5e97\u94fa\u540d\u79f0',
  phone: '\u8054\u7cfb\u7535\u8bdd',
  address: '\u5e97\u94fa\u5730\u5740',
  category: '\u7ecf\u8425\u7c7b\u76ee',
  hours: '\u8425\u4e1a\u65f6\u95f4',
  deliveryFee: '\u914d\u9001\u8d39',
  minOrder: '\u8d77\u9001\u4ef7',
  desc: '\u5e97\u94fa\u7b80\u4ecb',
  submit: '\u63d0\u4ea4\u5165\u9a7b\u7533\u8bf7',
  backLogin: '\u8fd4\u56de\u767b\u5f55',
  successTitle: '\u5165\u9a7b\u7533\u8bf7\u6210\u529f',
  successMsg: '\u8bf7\u4fdd\u5b58\u4ee5\u4e0b merchant_id\uff0c\u767b\u5f55\u548c\u5bf9\u63a5\u5c0f\u7a0b\u5e8f\u5747\u9700\u4f7f\u7528\u8be5\u7f16\u53f7\uff1a',
  goLogin: '\u53bb\u767b\u5f55'
}

const categories = ['\u7f8e\u98df', '\u5feb\u9910', '\u996e\u54c1', '\u751c\u54c1', '\u6c34\u679c', '\u8d85\u5e02', '\u7092\u70e4']

const router = useRouter()
const formRef = ref()
const loading = ref(false)
const successVisible = ref(false)
const registeredMerchant = ref(null)

const form = reactive({
  name: '',
  phone: '',
  address: '',
  category: '\u5feb\u9910',
  businessHours: '10:00-22:00',
  deliveryFee: 0,
  minimumOrderAmount: 0,
  description: ''
})

const rules = {
  name: [{ required: true, message: '\u8bf7\u586b\u5199\u5e97\u94fa\u540d\u79f0', trigger: 'blur' }],
  phone: [{ required: true, message: '\u8bf7\u586b\u5199\u8054\u7cfb\u7535\u8bdd', trigger: 'blur' }],
  address: [{ required: true, message: '\u8bf7\u586b\u5199\u5e97\u94fa\u5730\u5740', trigger: 'blur' }],
  category: [{ required: true, message: '\u8bf7\u9009\u62e9\u7ecf\u8425\u7c7b\u76ee', trigger: 'change' }]
}

async function submit() {
  await formRef.value.validate()
  loading.value = true
  try {
    const res = await merchantApi.register({ ...form })
    registeredMerchant.value = res.data
    successVisible.value = true
    ElMessage.success('\u6ce8\u518c\u6210\u529f')
  } finally {
    loading.value = false
  }
}

function goLogin() {
  successVisible.value = false
  router.push({ path: '/login', query: { merchantId: registeredMerchant.value?.merchantId } })
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f2f5;
  padding: 24px;
}
.register-card {
  width: 560px;
  max-width: 100%;
}
</style>
