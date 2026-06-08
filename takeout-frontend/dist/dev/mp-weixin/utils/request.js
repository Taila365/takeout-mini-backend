<<<<<<< HEAD
"use strict";var e=require("../common/vendor.js");const t=t=>new Promise(((o,a)=>{const n=e.index.getStorageSync("token");e.index.request({url:"http://localhost:8080/api"+t.url,method:t.method||"GET",data:t.data||{},header:{"Content-Type":"application/json",token:n||""},success:t=>{200===t.statusCode?200===t.data.code?o(t.data):(e.index.showToast({title:t.data.msg||"请求失败",icon:"none"}),a(t.data)):401===t.statusCode?(e.index.removeStorageSync("token"),e.index.removeStorageSync("userInfo"),e.index.showToast({title:"登录已过期，请重新登录",icon:"none"}),setTimeout((()=>{e.index.switchTab({url:"/pages/user/user"})}),1500),a(t)):(e.index.showToast({title:"网络错误",icon:"none"}),a(t))},fail:t=>{e.index.showToast({title:"网络请求失败",icon:"none"}),a(t)}})}));exports.del=(e,o={})=>t({url:e,method:"DELETE",data:o}),exports.get=(e,o={})=>t({url:e,method:"GET",data:o}),exports.post=(e,o={})=>t({url:e,method:"POST",data:o}),exports.put=(e,o={})=>t({url:e,method:"PUT",data:o});
=======
"use strict";
var common_vendor = require("../common/vendor.js");
const BASE_URL = "http://localhost:8080/api";
const request = (options) => {
  return new Promise((resolve, reject) => {
    const token = common_vendor.index.getStorageSync("token");
    common_vendor.index.request({
      url: BASE_URL + options.url,
      method: options.method || "GET",
      data: options.data || {},
      header: {
        "Content-Type": "application/json",
        "token": token || ""
      },
      success: (res) => {
        if (res.statusCode === 200) {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            common_vendor.index.showToast({
              title: res.data.msg || "\u8BF7\u6C42\u5931\u8D25",
              icon: "none"
            });
            reject(res.data);
          }
        } else if (res.statusCode === 401) {
          common_vendor.index.removeStorageSync("token");
          common_vendor.index.removeStorageSync("userInfo");
          common_vendor.index.showToast({
            title: "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55",
            icon: "none"
          });
          setTimeout(() => {
            common_vendor.index.switchTab({
              url: "/pages/user/user"
            });
          }, 1500);
          reject(res);
        } else {
          common_vendor.index.showToast({
            title: "\u7F51\u7EDC\u9519\u8BEF",
            icon: "none"
          });
          reject(res);
        }
      },
      fail: (err) => {
        common_vendor.index.showToast({
          title: "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25",
          icon: "none"
        });
        reject(err);
      }
    });
  });
};
const get = (url, params = {}) => {
  return request({
    url,
    method: "GET",
    data: params
  });
};
const post = (url, data = {}) => {
  return request({
    url,
    method: "POST",
    data
  });
};
const put = (url, data = {}) => {
  return request({
    url,
    method: "PUT",
    data
  });
};
const del = (url, data = {}) => {
  return request({
    url,
    method: "DELETE",
    data
  });
};
exports.del = del;
exports.get = get;
exports.post = post;
exports.put = put;
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
