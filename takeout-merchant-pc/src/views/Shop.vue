<template>
  <el-card v-loading="loading">
    <template #header>店铺设置</template>
    <el-form :model="form" label-width="120px" style="max-width: 560px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item label="营业时间">
        <el-input v-model="form.businessHours" placeholder="10:00-22:00" />
      </el-form-item>
      <el-form-item label="配送费">
        <el-input-number v-model="form.deliveryFee" :min="0" :precision="2" />
      </el-form-item>
      <el-form-item label="起送价">
        <el-input-number v-model="form.minimumOrderAmount" :min="0" :precision="2" />
      </el-form-item>
      <el-form-item label="经营类目">
        <el-input v-model="form.category" />
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="form.description" type="textarea" :rows="3" />
      </el-form-item>
      <el-form-item label="营业状态">
        <el-switch
          v-model="form.status"
          :active-value="1"
          :inactive-value="0"
          active-text="营业中"
          inactive-text="休息中"
          @change="onStatusChange"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存设置</el-button>
        <el-button @click="load">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { merchantApi } from '@/api'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const loading = ref(false)
const form = reactive({
  id: null,
  name: '',
  phone: '',
  address: '',
  businessHours: '',
  deliveryFee: 0,
  minimumOrderAmount: 0,
  category: '',
  description: '',
  status: 1
})

onMounted(load)

async function load() {
  loading.value = true
  try {
    const res = await merchantApi.detail(auth.merchantId)
    Object.assign(form, res.data)
  } finally {
    loading.value = false
  }
}

async function save() {
  loading.value = true
  try {
    const res = await merchantApi.update({ ...form })
    auth.refreshMerchant(res.data)
    ElMessage.success('保存成功')
  } finally {
    loading.value = false
  }
}

async function onStatusChange(status) {
  try {
    const res = await merchantApi.updateStatus(form.merchantId, status)
    auth.refreshMerchant(res.data)
    ElMessage.success(status === 1 ? '已开始营业' : '已休息')
  } catch {
    form.status = status === 1 ? 0 : 1
  }
}
</script>
