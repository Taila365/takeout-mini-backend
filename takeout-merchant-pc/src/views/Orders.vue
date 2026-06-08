<template>
  <el-card v-loading="loading">
    <el-tabs v-model="activeTab" @tab-change="filterOrders">
      <el-tab-pane v-for="tab in tabs" :key="tab.value" :label="tab.label" :name="tab.value" />
    </el-tabs>
    <el-table :data="filteredOrders" stripe style="width: 100%; margin-top: 12px">
      <el-table-column prop="orderNo" label="订单号" min-width="200" />
      <el-table-column prop="orderStatus" label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="statusType(row.orderStatus)" size="small">{{ row.orderStatus }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="payStatus" label="支付" width="90" />
      <el-table-column prop="actualAmount" label="实付金额" width="100">
        <template #default="{ row }">¥{{ row.actualAmount }}</template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" min-width="120" show-overflow-tooltip />
      <el-table-column prop="orderTime" label="下单时间" min-width="170" />
      <el-table-column label="操作" width="220" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="openDetail(row)">详情</el-button>
          <el-button v-if="row.orderStatus === '待接单'" link type="success" @click="accept(row)">
            接单
          </el-button>
          <el-button v-if="row.orderStatus === '待配送'" link type="warning" @click="deliver(row)">
            配送
          </el-button>
          <el-button v-if="row.orderStatus === '待配送'" link type="success" @click="complete(row)">
            完成
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="detailVisible" title="订单详情" width="640px">
      <template v-if="detail">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="订单号">{{ detail.order.orderNo }}</el-descriptions-item>
          <el-descriptions-item label="状态">{{ detail.order.orderStatus }}</el-descriptions-item>
          <el-descriptions-item label="实付">¥{{ detail.order.actualAmount }}</el-descriptions-item>
          <el-descriptions-item label="配送费">¥{{ detail.order.deliveryFee }}</el-descriptions-item>
          <el-descriptions-item label="备注" :span="2">{{ detail.order.remark || '-' }}</el-descriptions-item>
        </el-descriptions>
        <h4 style="margin: 16px 0 8px">收货信息</h4>
        <p v-if="detail.address">
          {{ detail.address.name }} {{ detail.address.phone }}<br />
          {{ detail.address.province }}{{ detail.address.city }}{{ detail.address.district
          }}{{ detail.address.detailAddress }}
        </p>
        <p v-else>暂无地址</p>
        <h4 style="margin: 16px 0 8px">商品明细</h4>
        <el-table :data="detail.orderItems" size="small">
          <el-table-column prop="productName" label="商品" />
          <el-table-column prop="price" label="单价" width="80">
            <template #default="{ row }">¥{{ row.price }}</template>
          </el-table-column>
          <el-table-column prop="quantity" label="数量" width="70" />
          <el-table-column prop="subtotal" label="小计" width="80">
            <template #default="{ row }">¥{{ row.subtotal }}</template>
          </el-table-column>
        </el-table>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { orderApi } from '@/api'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const loading = ref(false)
const orders = ref([])
const activeTab = ref('all')
const detailVisible = ref(false)
const detail = ref(null)

const tabs = [
  { label: '全部', value: 'all' },
  { label: '待支付', value: '待支付' },
  { label: '待接单', value: '待接单' },
  { label: '待配送', value: '待配送' },
  { label: '已完成', value: '已完成' },
  { label: '已取消', value: '已取消' }
]

const filteredOrders = computed(() => {
  if (activeTab.value === 'all') return orders.value
  return orders.value.filter((o) => o.orderStatus === activeTab.value)
})

function statusType(status) {
  const map = { 待支付: 'warning', 待接单: 'primary', 待配送: '', 已完成: 'success', 已取消: 'info' }
  return map[status] || 'info'
}

function filterOrders() {}

onMounted(loadOrders)

async function loadOrders() {
  loading.value = true
  try {
    const res = await orderApi.listByMerchant(auth.merchantId)
    orders.value = res.data || []
  } finally {
    loading.value = false
  }
}

async function openDetail(row) {
  const res = await orderApi.detail(row.id)
  detail.value = res.data
  detailVisible.value = true
}

async function accept(row) {
  await ElMessageBox.confirm('确认接单？', '提示')
  await orderApi.accept(row.id)
  ElMessage.success('已接单')
  loadOrders()
}

async function deliver(row) {
  await orderApi.deliver(row.id)
  ElMessage.success('已开始配送')
  loadOrders()
}

async function complete(row) {
  await orderApi.complete(row.id)
  ElMessage.success('订单已完成')
  loadOrders()
}
</script>
