<template>
  <div v-loading="loading">
    <el-row :gutter="20" class="stat-row">
      <el-col :span="6" v-for="item in statCards" :key="item.label">
        <el-card shadow="hover" class="stat-card">
          <span class="stat-value">{{ item.value }}</span>
          <span class="stat-label">{{ item.label }}</span>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="recent-card">
      <template #header>
        <span>{{ txt.pendingTitle }}</span>
        <el-button type="primary" link @click="$router.push('/orders')">{{ txt.viewAll }}</el-button>
      </template>
      <el-table :data="pendingOrders" stripe :empty-text="txt.empty">
        <el-table-column prop="orderNo" :label="txt.orderNo" min-width="180" />
        <el-table-column prop="orderStatus" :label="txt.status" width="100">
          <template #default="{ row }">
            <el-tag :type="statusType(row.orderStatus)" size="small">{{ row.orderStatus }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="actualAmount" :label="txt.amount" width="100">
          <template #default="{ row }">{{ yen }}{{ row.actualAmount }}</template>
        </el-table-column>
        <el-table-column prop="orderTime" :label="txt.time" min-width="160" />
        <el-table-column :label="txt.action" width="120" fixed="right">
          <template #default>
            <el-button type="primary" link @click="$router.push('/orders')">{{ txt.handle }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { orderApi } from '@/api'
import { useAuthStore } from '@/stores/auth'

const STATUS_PENDING_PAY = '\u5f85\u652f\u4ed8'
const STATUS_PENDING_ACCEPT = '\u5f85\u63a5\u5355'
const STATUS_PENDING_DELIVERY = '\u5f85\u914d\u9001'
const STATUS_COMPLETED = '\u5df2\u5b8c\u6210'
const STATUS_CANCELLED = '\u5df2\u53d6\u6d88'

const yen = '\u00a5'

const txt = {
  pendingTitle: '\u5f85\u5904\u7406\u8ba2\u5355',
  viewAll: '\u67e5\u770b\u5168\u90e8',
  empty: '\u6682\u65e0\u5f85\u5904\u7406\u8ba2\u5355',
  orderNo: '\u8ba2\u5355\u53f7',
  status: '\u72b6\u6001',
  amount: '\u5b9e\u4ed8',
  time: '\u4e0b\u5355\u65f6\u95f4',
  action: '\u64cd\u4f5c',
  handle: '\u53bb\u5904\u7406',
  allOrders: '\u5168\u90e8\u8ba2\u5355',
  todayRevenue: '\u4eca\u65e5\u8425\u4e1a\u989d'
}

const auth = useAuthStore()
const loading = ref(false)
const orders = ref([])

const statCards = computed(() => {
  const list = orders.value
  const paid = list.filter(
    (o) => o.orderStatus !== STATUS_PENDING_PAY && o.orderStatus !== STATUS_CANCELLED
  )
  const today = new Date().toISOString().slice(0, 10)
  const todayPaid = paid.filter((o) => (o.orderTime || '').startsWith(today))
  return [
    { label: txt.allOrders, value: list.length },
    {
      label: STATUS_PENDING_ACCEPT,
      value: list.filter((o) => o.orderStatus === STATUS_PENDING_ACCEPT).length
    },
    {
      label: STATUS_PENDING_DELIVERY,
      value: list.filter((o) => o.orderStatus === STATUS_PENDING_DELIVERY).length
    },
    {
      label: txt.todayRevenue,
      value: `\u00a5${todayPaid.reduce((s, o) => s + (o.actualAmount || 0), 0).toFixed(2)}`
    }
  ]
})

const pendingOrders = computed(() =>
  orders.value
    .filter((o) => [STATUS_PENDING_ACCEPT, STATUS_PENDING_DELIVERY].includes(o.orderStatus))
    .slice(0, 8)
)

function statusType(status) {
  const map = {
    [STATUS_PENDING_PAY]: 'warning',
    [STATUS_PENDING_ACCEPT]: 'primary',
    [STATUS_PENDING_DELIVERY]: '',
    [STATUS_COMPLETED]: 'success',
    [STATUS_CANCELLED]: 'info'
  }
  return map[status] || 'info'
}

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await orderApi.listByMerchant(auth.merchantId)
    orders.value = res.data || []
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.stat-row {
  margin-bottom: 20px;
}
.stat-card {
  text-align: center;
}
.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: #303133;
  margin-bottom: 8px;
}
.stat-label {
  font-size: 14px;
  color: #909399;
}
.recent-card :deep(.el-card__header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
