import request from './request'

export const authApi = {
  login: (data) => request.post('/merchant/auth/login', data)
}

export const merchantApi = {
  list: () => request.get('/merchant/list'),
  detail: (merchantId) => request.get(`/merchant/detail/${merchantId}`),
  register: (data) => request.post('/merchant/register', data),
  update: (data) => request.put('/merchant/update', data),
  updateStatus: (merchantId, status) => request.put(`/merchant/status/${merchantId}`, null, { params: { status } })
}

export const orderApi = {
  listByMerchant: (merchantId) => request.get(`/order/merchant/${merchantId}`),
  detail: (orderId) => request.get(`/order/detail/${orderId}`),
  accept: (orderId) => request.put(`/order/accept/${orderId}`),
  deliver: (orderId) => request.put(`/order/deliver/${orderId}`),
  complete: (orderId) => request.put(`/order/complete/${orderId}`)
}

export const categoryApi = {
  list: (merchantId) => request.get(`/category/merchant/${merchantId}`),
  create: (data) => request.post('/category/create', data),
  update: (data) => request.put('/category/update', data),
  delete: (id) => request.delete(`/category/delete/${id}`)
}

export const productApi = {
  list: (merchantId) => request.get(`/product/merchant/${merchantId}`),
  create: (data) => request.post('/product/create', data),
  update: (data) => request.put('/product/update', data),
  updateStatus: (id, status) => request.put(`/product/status/${id}`, null, { params: { status } }),
  updateStock: (id, stock) => request.put(`/product/stock/${id}`, null, { params: { stock } }),
  delete: (id) => request.delete(`/product/delete/${id}`)
}
