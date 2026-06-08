<<<<<<< HEAD
"use strict";var e=require("./request.js");const t={login:t=>e.post("/user/login",{code:t}),getUserInfo:()=>e.get("/user/info"),updateUserInfo:t=>e.put("/user/update",t)},r={getAllMerchants:()=>e.get("/merchant/list"),getOpenMerchants:()=>e.get("/merchant/open"),getMerchantsByCategory:t=>e.get("/merchant/category",{category:t}),getMerchantById:t=>e.get(`/merchant/detail/${t}`)},d={getCategoriesByMerchantId:t=>e.get(`/category/merchant/${t}`)},a={getProductsByMerchantId:t=>e.get(`/product/merchant/${t}`),getProductsByCategoryId:t=>e.get(`/product/category/${t}`),getOnSaleProducts:t=>e.get(`/product/merchant/${t}/onsale`),getProductById:t=>e.get(`/product/detail/${t}`)},s={addItem:(t,r,d=1)=>e.post("/cart/add",{merchantId:t,productId:r,count:d}),subtractItem:(t,r,d=1)=>e.post("/cart/subtract",{merchantId:t,productId:r,count:d}),getCartList:t=>e.get("/cart/list",{merchantId:t}),getCartSummary:t=>e.get("/cart/summary",{merchantId:t}),clearCart:t=>e.del(`/cart/clear?merchantId=${encodeURIComponent(t)}`)},c={createOrder:t=>e.post("/order/create",t),getUserOrders:()=>e.get("/order/user/list"),getOrderDetail:t=>e.get(`/order/detail/${t}`),payOrder:(t,r)=>e.put(`/order/pay/${t}?payMethod=${encodeURIComponent(r)}`),cancelOrder:(t,r)=>e.put(`/order/cancel/${t}?cancelReason=${encodeURIComponent(r)}`)},o={getAddresses:()=>e.get("/address/list"),getDefaultAddress:()=>e.get("/address/default"),createAddress:t=>e.post("/address/create",t),updateAddress:t=>e.put("/address/update",t),setDefaultAddress:t=>e.put(`/address/default/${t}`),deleteAddress:t=>e.del(`/address/delete/${t}`)};exports.addressApi=o,exports.cartApi=s,exports.categoryApi=d,exports.merchantApi=r,exports.orderApi=c,exports.productApi=a,exports.userApi=t;
=======
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
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
