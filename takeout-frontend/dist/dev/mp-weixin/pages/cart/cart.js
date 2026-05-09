"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cartItems: [],
      merchantId: null
    };
  },
  computed: {
    isAllSelected() {
      return this.cartItems.length > 0 && this.cartItems.every((item) => item.selected);
    },
    selectedCount() {
      return this.cartItems.filter((item) => item.selected).reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice() {
      return this.cartItems.filter((item) => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    }
  },
  onShow() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      const cartData = common_vendor.index.getStorageSync("cart");
      if (cartData && cartData.items) {
        this.merchantId = cartData.merchantId;
        this.cartItems = Object.values(cartData.items).map((item) => ({
          ...item,
          selected: true
        }));
      } else {
        this.cartItems = [];
      }
    },
    toggleSelect(item) {
      item.selected = !item.selected;
      this.saveCart();
    },
    toggleSelectAll() {
      const newState = !this.isAllSelected;
      this.cartItems.forEach((item) => {
        item.selected = newState;
      });
      this.saveCart();
    },
    increaseQuantity(item) {
      item.quantity++;
      this.saveCart();
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.saveCart();
      }
    },
    deleteItem(item) {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u5220\u9664\u8BE5\u5546\u54C1\u5417\uFF1F",
        success: (res) => {
          if (res.confirm) {
            const index = this.cartItems.findIndex((i) => i.id === item.id);
            if (index > -1) {
              this.cartItems.splice(index, 1);
              this.saveCart();
            }
          }
        }
      });
    },
    saveCart() {
      const items = {};
      this.cartItems.forEach((item) => {
        items[item.id] = {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity
        };
      });
      const cartData = {
        merchantId: this.merchantId,
        items
      };
      common_vendor.index.setStorageSync("cart", cartData);
    },
    goShopping() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    submitOrder() {
      if (this.selectedCount === 0) {
        common_vendor.index.showToast({ title: "\u8BF7\u9009\u62E9\u5546\u54C1", icon: "none" });
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
    a: $data.cartItems.length === 0
  }, $data.cartItems.length === 0 ? {
    b: common_vendor.o((...args) => $options.goShopping && $options.goShopping(...args))
  } : {
    c: common_vendor.f($data.cartItems, (item, k0, i0) => {
      return {
        a: item.selected,
        b: common_vendor.o(($event) => $options.toggleSelect(item)),
        c: item.image || "/static/images/default-product.png",
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.decreaseQuantity(item)),
        g: common_vendor.t(item.quantity),
        h: common_vendor.o(($event) => $options.increaseQuantity(item)),
        i: common_vendor.o(($event) => $options.deleteItem(item)),
        j: item.id
      };
    })
  }, {
    d: $data.cartItems.length > 0
  }, $data.cartItems.length > 0 ? {
    e: $options.isAllSelected,
    f: common_vendor.o((...args) => $options.toggleSelectAll && $options.toggleSelectAll(...args)),
    g: common_vendor.t($options.totalPrice),
    h: common_vendor.t($options.selectedCount),
    i: common_vendor.o((...args) => $options.submitOrder && $options.submitOrder(...args))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4a5ab35b"], ["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
