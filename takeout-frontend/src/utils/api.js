import { get, post, put, del } from './request.js'

// 用户相关接口
export const userApi = {
  // 登录
  login: (code) => post('/user/login', { code }),
  // 获取用户信息
  getUserInfo: () => get('/user/info'),
  // 更新用户信息
  updateUserInfo: (data) => put('/user/update', data)
}

// 商家相关接口
export const merchantApi = {
  // 获取所有商家
  getAllMerchants: () => get('/merchant/list'),
  // 获取营业中的商家
  getOpenMerchants: () => get('/merchant/open'),
  /** 按商家经营类目筛选（与数据库 merchant.category 字段一致，如：美食、超市） */
  getMerchantsByCategory: (category) => get('/merchant/category', { category }),
  // 获取商家详情
  getMerchantById: (id) => get(`/merchant/detail/${id}`)
}

// 商品分类（CategoryController）
export const categoryApi = {
  getCategoriesByMerchantId: (merchantId) => get(`/category/merchant/${merchantId}`)
}

// 商品相关接口
export const productApi = {
  // 获取商家商品列表
  getProductsByMerchantId: (merchantId) => get(`/product/merchant/${merchantId}`),
  // 获取分类商品列表
  getProductsByCategoryId: (categoryId) => get(`/product/category/${categoryId}`),
  // 获取商家上架商品
  getOnSaleProducts: (merchantId) => get(`/product/merchant/${merchantId}/onsale`),
  // 获取商品详情
  getProductById: (id) => get(`/product/detail/${id}`)
}

// 购物车：对齐后端 CartController（Redis，需登录 token）
// POST /cart/add | POST /cart/subtract | GET /cart/list | GET /cart/summary | DELETE /cart/clear
export const cartApi = {
  /** CartController.add — JSON: merchantId, productId, count */
  addItem: (merchantId, productId, count = 1) => post('/cart/add', { merchantId, productId, count }),
  /** CartController.subtract */
  subtractItem: (merchantId, productId, count = 1) => post('/cart/subtract', { merchantId, productId, count }),
  /** CartController.list — query merchantId */
  getCartList: (merchantId) => get('/cart/list', { merchantId }),
  /** CartController.summary — query merchantId */
  getCartSummary: (merchantId) => get('/cart/summary', { merchantId }),
  /** CartController.clear — query merchantId（小程序 DELETE 用 query 传参） */
  clearCart: (merchantId) => del(`/cart/clear?merchantId=${encodeURIComponent(merchantId)}`)
}

// 订单相关接口
export const orderApi = {
  // 创建订单
  createOrder: (data) => post('/order/create', data),
  // 获取用户订单列表
  getUserOrders: () => get('/order/user/list'),
  // 获取订单详情
  getOrderDetail: (orderId) => get(`/order/detail/${orderId}`),
  // 支付订单（后端 @RequestParam，需走 query）
  payOrder: (orderId, payMethod) => put(`/order/pay/${orderId}?payMethod=${encodeURIComponent(payMethod)}`),
  // 取消订单
  cancelOrder: (orderId, cancelReason) => put(`/order/cancel/${orderId}?cancelReason=${encodeURIComponent(cancelReason)}`)
}

// 地址相关接口
export const addressApi = {
  // 获取用户地址列表
  getAddresses: () => get('/address/list'),
  // 获取默认地址
  getDefaultAddress: () => get('/address/default'),
  // 创建地址
  createAddress: (data) => post('/address/create', data),
  // 更新地址
  updateAddress: (data) => put('/address/update', data),
  // 设置默认地址
  setDefaultAddress: (id) => put(`/address/default/${id}`),
  // 删除地址
  deleteAddress: (id) => del(`/address/delete/${id}`)
}

// 支付相关接口
export const paymentApi = {
  // 创建支付订单
  createPayment: (orderId, payMethod) => post('/payment/create', { orderId, payMethod }),
  // 查询支付状态
  queryPaymentStatus: (paymentNo) => get(`/payment/status/${paymentNo}`)
}

// 评价相关接口
export const reviewApi = {
  // 创建评价
  createReview: (data) => post('/review/create', data),
  // 获取商品评价
  getProductReviews: (productId) => get(`/review/product/${productId}`),
  // 获取商家评价
  getMerchantReviews: (merchantId) => get(`/review/merchant/${merchantId}`),
  // 获取用户评价
  getUserReviews: () => get('/review/user/list')
}