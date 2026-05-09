"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_api = require("../../utils/api.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      defaultAddress: null,
      merchantId: null,
      merchantName: "",
      orderItems: [],
      deliveryFee: 0,
      remark: "",
      paymentMethod: "wechat"
    };
  },
  computed: {
    productTotal() {
      return this.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    totalAmount() {
      return (this.productTotal + this.deliveryFee).toFixed(2);
    }
  },
  onLoad() {
    this.loadAddress();
    this.loadCart();
  },
  onShow() {
    this.loadAddress();
  },
  methods: {
    async loadAddress() {
      try {
        const res = await utils_api.addressApi.getDefaultAddress();
        if (res.data) {
          this.defaultAddress = res.data;
        }
      } catch (error) {
        console.error("\u52A0\u8F7D\u5730\u5740\u5931\u8D25:", error);
      }
    },
    loadCart() {
      const cartData = common_vendor.index.getStorageSync("cart");
      if (cartData && cartData.items) {
        this.merchantId = cartData.merchantId;
        this.orderItems = Object.values(cartData.items).filter((item) => item.quantity > 0);
      }
    },
    selectAddress() {
      common_vendor.index.navigateTo({
        url: "/pages/user/address?select=true"
      });
    },
    selectPayment(e) {
      this.paymentMethod = e.detail.value;
    },
    async submitOrder() {
      if (!this.defaultAddress) {
        common_vendor.index.showToast({ title: "\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740", icon: "none" });
        return;
      }
      if (this.orderItems.length === 0) {
        common_vendor.index.showToast({ title: "\u8D2D\u7269\u8F66\u4E3A\u7A7A", icon: "none" });
        return;
      }
      try {
        common_vendor.index.showLoading({ title: "\u63D0\u4EA4\u4E2D..." });
        const orderData = {
          merchantId: this.merchantId,
          addressId: this.defaultAddress.id,
          totalAmount: this.productTotal,
          deliveryFee: this.deliveryFee,
          actualAmount: parseFloat(this.totalAmount),
          payMethod: this.paymentMethod,
          remark: this.remark,
          orderItems: this.orderItems.map((item) => ({
            productId: item.id,
            productName: item.name,
            productImage: item.image,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.price * item.quantity
          }))
        };
        const res = await utils_api.orderApi.createOrder(orderData);
        common_vendor.index.hideLoading();
        if (res.code === 200) {
          common_vendor.index.removeStorageSync("cart");
          common_vendor.index.showToast({
            title: "\u8BA2\u5355\u521B\u5EFA\u6210\u529F",
            icon: "success"
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: `/pages/order/order`
            });
          }, 1500);
        } else {
          common_vendor.index.showToast({ title: res.msg || "\u521B\u5EFA\u8BA2\u5355\u5931\u8D25", icon: "none" });
        }
      } catch (error) {
        common_vendor.index.hideLoading();
        console.error("\u521B\u5EFA\u8BA2\u5355\u5931\u8D25:", error);
        common_vendor.index.showToast({ title: "\u521B\u5EFA\u8BA2\u5355\u5931\u8D25", icon: "none" });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.defaultAddress
  }, $data.defaultAddress ? {
    b: common_vendor.t($data.defaultAddress.name),
    c: common_vendor.t($data.defaultAddress.phone),
    d: common_vendor.t($data.defaultAddress.province),
    e: common_vendor.t($data.defaultAddress.city),
    f: common_vendor.t($data.defaultAddress.district),
    g: common_vendor.t($data.defaultAddress.detailAddress)
  } : {}, {
    h: common_vendor.o((...args) => $options.selectAddress && $options.selectAddress(...args)),
    i: common_vendor.t($data.merchantName),
    j: common_vendor.f($data.orderItems, (item, k0, i0) => {
      return {
        a: item.image || "/static/images/default-product.png",
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.quantity),
        e: item.id
      };
    }),
    k: common_vendor.t($data.deliveryFee),
    l: $data.remark,
    m: common_vendor.o(($event) => $data.remark = $event.detail.value),
    n: $data.paymentMethod === "wechat",
    o: $data.paymentMethod === "alipay",
    p: common_vendor.o((...args) => $options.selectPayment && $options.selectPayment(...args)),
    q: common_vendor.t($options.totalAmount),
    r: common_vendor.o((...args) => $options.submitOrder && $options.submitOrder(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-84174caa"], ["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/order/confirm.vue"]]);
wx.createPage(MiniProgramPage);
