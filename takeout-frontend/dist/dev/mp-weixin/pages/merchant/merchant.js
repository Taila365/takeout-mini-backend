"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_api = require("../../utils/api.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      merchantId: null,
      merchant: {},
      categories: [
        { id: 0, name: "\u5168\u90E8" }
      ],
      currentCategory: 0,
      products: [],
      cart: {}
    };
  },
  computed: {
    currentCategoryName() {
      var _a;
      return ((_a = this.categories[this.currentCategory]) == null ? void 0 : _a.name) || "\u5168\u90E8";
    },
    cartTotal() {
      return Object.values(this.cart).reduce((sum, item) => sum + item.quantity, 0);
    },
    cartTotalPrice() {
      return Object.values(this.cart).reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    }
  },
  onLoad(options) {
    this.merchantId = options.id;
    this.loadMerchantDetail();
    this.loadProducts();
    this.loadCart();
  },
  methods: {
    async loadMerchantDetail() {
      try {
        const res = await utils_api.merchantApi.getMerchantById(this.merchantId);
        this.merchant = res.data || {};
      } catch (error) {
        console.error("\u52A0\u8F7D\u5546\u5BB6\u8BE6\u60C5\u5931\u8D25:", error);
      }
    },
    async loadProducts() {
      try {
        const res = await utils_api.productApi.getOnSaleProducts(this.merchantId);
        this.products = res.data || [];
      } catch (error) {
        console.error("\u52A0\u8F7D\u5546\u54C1\u5931\u8D25:", error);
      }
    },
    selectCategory(index) {
      this.currentCategory = index;
    },
    getCartQuantity(productId) {
      var _a;
      return ((_a = this.cart[productId]) == null ? void 0 : _a.quantity) || 0;
    },
    addToCart(product) {
      if (product.stock <= 0) {
        common_vendor.index.showToast({ title: "\u5546\u54C1\u5DF2\u552E\u7F44", icon: "none" });
        return;
      }
      if (this.cart[product.id]) {
        if (this.cart[product.id].quantity >= product.stock) {
          common_vendor.index.showToast({ title: "\u5E93\u5B58\u4E0D\u8DB3", icon: "none" });
          return;
        }
        this.cart[product.id].quantity++;
      } else {
        this.cart[product.id] = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        };
      }
      this.saveCart();
    },
    decreaseQuantity(product) {
      if (this.cart[product.id]) {
        this.cart[product.id].quantity--;
        if (this.cart[product.id].quantity <= 0) {
          delete this.cart[product.id];
        }
        this.saveCart();
      }
    },
    saveCart() {
      const cartData = {
        merchantId: this.merchantId,
        items: this.cart
      };
      common_vendor.index.setStorageSync("cart", cartData);
    },
    loadCart() {
      const cartData = common_vendor.index.getStorageSync("cart");
      if (cartData && cartData.merchantId == this.merchantId) {
        this.cart = cartData.items || {};
      }
    },
    showCartDetail() {
      console.log("\u663E\u793A\u8D2D\u7269\u8F66\u8BE6\u60C5");
    },
    submitOrder() {
      if (this.cartTotal === 0) {
        common_vendor.index.showToast({ title: "\u8D2D\u7269\u8F66\u4E3A\u7A7A", icon: "none" });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/order/confirm"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.merchant.banner || "/static/images/default-banner.jpg",
    b: $data.merchant.logo || "/static/images/default-shop.png",
    c: common_vendor.t($data.merchant.name),
    d: common_vendor.t($data.merchant.rating),
    e: common_vendor.t($data.merchant.salesVolume || 0),
    f: common_vendor.t($data.merchant.description || "\u6682\u65E0\u516C\u544A"),
    g: common_vendor.f($data.categories, (category, index, i0) => {
      return {
        a: common_vendor.t(category.name),
        b: category.id,
        c: $data.currentCategory === index ? 1 : "",
        d: common_vendor.o(($event) => $options.selectCategory(index), category.id)
      };
    }),
    h: common_vendor.t($options.currentCategoryName),
    i: common_vendor.f($data.products, (product, k0, i0) => {
      return common_vendor.e({
        a: product.image || "/static/images/default-product.png",
        b: common_vendor.t(product.name),
        c: common_vendor.t(product.description || "\u6682\u65E0\u63CF\u8FF0"),
        d: common_vendor.t(product.price),
        e: product.stock <= 10
      }, product.stock <= 10 ? {
        f: common_vendor.t(product.stock)
      } : {}, {
        g: $options.getCartQuantity(product.id) > 0
      }, $options.getCartQuantity(product.id) > 0 ? {
        h: common_vendor.o(($event) => $options.decreaseQuantity(product))
      } : {}, {
        i: $options.getCartQuantity(product.id) > 0
      }, $options.getCartQuantity(product.id) > 0 ? {
        j: common_vendor.t($options.getCartQuantity(product.id))
      } : {}, {
        k: common_vendor.o(($event) => $options.addToCart(product)),
        l: product.id
      });
    }),
    j: $options.cartTotal > 0
  }, $options.cartTotal > 0 ? {
    k: common_vendor.t($options.cartTotal),
    l: common_vendor.t($options.cartTotalPrice),
    m: common_vendor.o((...args) => $options.showCartDetail && $options.showCartDetail(...args)),
    n: common_vendor.o((...args) => $options.submitOrder && $options.submitOrder(...args))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2761bcdb"], ["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/merchant/merchant.vue"]]);
wx.createPage(MiniProgramPage);
