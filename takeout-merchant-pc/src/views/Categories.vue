<template>
  <el-card v-loading="loading">
    <template #header>
      <span>分类管理</span>
      <el-button type="primary" @click="openDialog()">新增分类</el-button>
    </template>
    <el-table :data="list" stripe>
      <el-table-column prop="id" label="ID" width="70" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="description" label="描述" show-overflow-tooltip />
      <el-table-column prop="sort" label="排序" width="80" />
      <el-table-column label="操作" width="160">
        <template #default="{ row }">
          <el-button link type="primary" @click="openDialog(row)">编辑</el-button>
          <el-button link type="danger" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="form.id ? '编辑分类' : '新增分类'" width="480px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称" required>
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea" />
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="form.sort" :min="0" />
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
import { categoryApi } from '@/api'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const loading = ref(false)
const list = ref([])
const dialogVisible = ref(false)
const form = reactive({
  id: null,
  merchantId: null,
  name: '',
  description: '',
  sort: 0
})

onMounted(loadList)

async function loadList() {
  loading.value = true
  try {
    const res = await categoryApi.list(auth.merchantId)
    list.value = res.data || []
  } finally {
    loading.value = false
  }
}

function openDialog(row) {
  form.id = row?.id ?? null
  form.name = row?.name ?? ''
  form.description = row?.description ?? ''
  form.sort = row?.sort ?? 0
  dialogVisible.value = true
}

async function save() {
  if (!form.name.trim()) {
    ElMessage.warning('请填写分类名称')
    return
  }
  if (form.id) {
    await categoryApi.update({ ...form })
  } else {
    await categoryApi.create({ ...form })
  }
  ElMessage.success('保存成功')
  dialogVisible.value = false
  loadList()
}

async function remove(row) {
  await ElMessageBox.confirm(`确定删除分类「${row.name}」？`, '提示', { type: 'warning' })
  await categoryApi.delete(row.id)
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
