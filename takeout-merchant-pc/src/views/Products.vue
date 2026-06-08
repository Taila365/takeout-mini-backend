<template>
  <el-card v-loading="loading">
    <template #header>
      <span>商品管理</span>
      <el-button type="primary" @click="openDialog()">新增商品</el-button>
    </template>
    <el-table :data="list" stripe>
      <el-table-column prop="id" label="ID" width="70" />
      <el-table-column prop="name" label="商品名" min-width="140" />
      <el-table-column prop="categoryId" label="分类ID" width="90" />
      <el-table-column prop="price" label="价格" width="90">
        <template #default="{ row }">¥{{ row.price }}</template>
      </el-table-column>
      <el-table-column prop="stock" label="库存" width="80" />
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-tag :type="row.status === 1 ? 'success' : 'info'" size="small">
            {{ row.status === 1 ? '上架' : '下架' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="openDialog(row)">编辑</el-button>
          <el-button link @click="toggleStatus(row)">
            {{ row.status === 1 ? '下架' : '上架' }}
          </el-button>
          <el-button link type="danger" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="form.id ? '编辑商品' : '新增商品'" width="520px">
      <el-form :model="form" label-width="90px">
        <el-form-item label="名称" required>
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="分类" required>
          <el-select v-model="form.categoryId" placeholder="选择分类" style="width: 100%">
            <el-option v-for="c in categories" :key="c.id" :label="c.name" :value="c.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="价格" required>
          <el-input-number v-model="form.price" :min="0" :precision="2" style="width: 100%" />
        </el-form-item>
        <el-form-item label="库存">
          <el-input-number v-model="form.stock" :min="0" style="width: 100%" />
        </el-form-item>
        <el-form-item label="图片URL">
          <el-input v-model="form.image" placeholder="/static/images/xxx.png" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea" />
        </el-form-item>
        <el-form-item label="上架">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { productApi, categoryApi } from '@/api'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const loading = ref(false)
const list = ref([])
const categories = ref([])
const dialogVisible = ref(false)
const form = reactive({
  id: null,
  merchantId: null,
  categoryId: null,
  name: '',
  description: '',
  image: '',
  price: 0,
  stock: 100,
  status: 1
})

onMounted(async () => {
  await loadCategories()
  await loadList()
})

async function loadCategories() {
  const res = await categoryApi.list(auth.merchantId)
  categories.value = res.data || []
}

async function loadList() {
  loading.value = true
  try {
    const res = await productApi.list(auth.merchantId)
    list.value = res.data || []
  } finally {
    loading.value = false
  }
}

function openDialog(row) {
  form.id = row?.id ?? null
  form.categoryId = row?.categoryId ?? categories.value[0]?.id ?? null
  form.name = row?.name ?? ''
  form.description = row?.description ?? ''
  form.image = row?.image ?? ''
  form.price = row?.price ?? 0
  form.stock = row?.stock ?? 100
  form.status = row?.status ?? 1
  dialogVisible.value = true
}

async function save() {
  if (!form.name.trim() || !form.categoryId) {
    ElMessage.warning('请填写商品名称并选择分类')
    return
  }
  if (form.id) {
    await productApi.update({ ...form })
  } else {
    await productApi.create({ ...form })
  }
  ElMessage.success('保存成功')
  dialogVisible.value = false
  loadList()
}

async function toggleStatus(row) {
  const next = row.status === 1 ? 0 : 1
  await productApi.updateStatus(row.id, next)
  ElMessage.success(next === 1 ? '已上架' : '已下架')
  loadList()
}

async function remove(row) {
  await ElMessageBox.confirm(`确定删除商品「${row.name}」？`, '提示', { type: 'warning' })
  await productApi.delete(row.id)
  ElMessage.success('已删除')
  loadList()
}
</script>

<style scoped>
.el-card :deep(.el-card__header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
