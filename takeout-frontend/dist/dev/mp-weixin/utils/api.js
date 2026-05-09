"use strict";
var utils_request = require("./request.js");
const userApi = {
  login: (code) => utils_request.post("/user/login", { code }),
  getUserInfo: () => utils_request.get("/user/info"),
  updateUserInfo: (data) => utils_request.put("/user/update", data)
};
const merchantApi = {
  getAllMerchants: () => utils_request.get("/merchant/list"),
  getOpenMerchants: () => utils_request.get("/merchant/open"),
  getMerchantById: (id) => utils_request.get(`/merchant/detail/${id}`)
};
const productApi = {
  getProductsByMerchantId: (merchantId) => utils_request.get(`/product/merchant/${merchantId}`),
  getProductsByCategoryId: (categoryId) => utils_request.get(`/product/category/${categoryId}`),
  getOnSaleProducts: (merchantId) => utils_request.get(`/product/merchant/${merchantId}/onsale`),
  getProductById: (id) => utils_request.get(`/product/detail/${id}`)
};
const orderApi = {
  createOrder: (data) => utils_request.post("/order/create", data),
  getUserOrders: () => utils_request.get("/order/user/list"),
  getOrderDetail: (orderId) => utils_request.get(`/order/detail/${orderId}`),
  payOrder: (orderId, payMethod) => utils_request.put(`/order/pay/${orderId}`, { payMethod }),
  cancelOrder: (orderId, cancelReason) => utils_request.put(`/order/cancel/${orderId}`, { cancelReason })
};
const addressApi = {
  getAddresses: () => utils_request.get("/address/list"),
  getDefaultAddress: () => utils_request.get("/address/default"),
  createAddress: (data) => utils_request.post("/address/create", data),
  updateAddress: (data) => utils_request.put("/address/update", data),
  setDefaultAddress: (id) => utils_request.put(`/address/default/${id}`),
  deleteAddress: (id) => utils_request.del(`/address/delete/${id}`)
};
exports.addressApi = addressApi;
exports.merchantApi = merchantApi;
exports.orderApi = orderApi;
exports.productApi = productApi;
exports.userApi = userApi;
