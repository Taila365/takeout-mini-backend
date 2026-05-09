"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_api = require("../../utils/api.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      tabs: [
        { name: "\u5168\u90E8", status: "" },
        { name: "\u5F85\u652F\u4ED8", status: "\u5F85\u652F\u4ED8" },
        { name: "\u5F85\u914D\u9001", status: "\u5F85\u914D\u9001" },
        { name: "\u5DF2\u5B8C\u6210", status: "\u5DF2\u5B8C\u6210" }
      ],
      currentTab: 0,
      orders: [],
      loading: false,
      hasMore: true,
      page: 1,
      pageSize: 10
    };
  },
  onLoad() {
    this.loadOrders();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.orders = [];
    this.loadOrders();
    common_vendor.index.stopPullDownRefresh();
  },
  methods: {
    selectTab(index) {
      this.currentTab = index;
      this.page = 1;
      this.orders = [];
      this.loadOrders();
    },
    async loadOrders() {
      if (this.loading)
        return;
      this.loading = true;
      try {
        const res = await utils_api.orderApi.getUserOrders();
        const orders = res.data || [];
        const filteredOrders = this.currentTab === 0 ? orders : orders.filter((order) => order.orderStatus === this.tabs[this.currentTab].status);
        if (this.page === 1) {
          this.orders = filteredOrders;
        } else {
          this.orders = this.orders.concat(filteredOrders);
        }
        this.hasMore = orders.length === this.pageSize;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error("\u52A0\u8F7D\u8BA2\u5355\u5931\u8D25:", error);
      }
    },
    loadMore() {
      if (this.hasMore && !this.loading) {
        this.page++;
        this.loadOrders();
      }
    },
    getStatusClass(status) {
      const statusMap = {
        "\u5F85\u652F\u4ED8": "status-pending",
        "\u5F85\u63A5\u5355": "status-waiting",
        "\u5F85\u914D\u9001": "status-delivery",
        "\u5DF2\u5B8C\u6210": "status-completed",
        "\u5DF2\u53D6\u6D88": "status-cancelled"
      };
      return statusMap[status] || "";
    },
    getTotalQuantity(order) {
      return order.items ? order.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
    },
    async payOrder(order) {
      try {
        common_vendor.index.showLoading({ title: "\u652F\u4ED8\u4E2D..." });
        const res = await utils_api.orderApi.payOrder(order.id, "wechat");
        common_vendor.index.hideLoading();
        if (res.code === 200) {
          common_vendor.index.showToast({ title: "\u652F\u4ED8\u6210\u529F", icon: "success" });
          this.loadOrders();
        } else {
          common_vendor.index.showToast({ title: res.msg || "\u652F\u4ED8\u5931\u8D25", icon: "none" });
        }
      } catch (error) {
        common_vendor.index.hideLoading();
        console.error("\u652F\u4ED8\u5931\u8D25:", error);
        common_vendor.index.showToast({ title: "\u652F\u4ED8\u5931\u8D25", icon: "none" });
      }
    },
    cancelOrder(order) {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u53D6\u6D88\u8BE5\u8BA2\u5355\u5417\uFF1F",
        success: async (res) => {
          if (res.confirm) {
            try {
              common_vendor.index.showLoading({ title: "\u53D6\u6D88\u4E2D..." });
              const result = await utils_api.orderApi.cancelOrder(order.id, "\u7528\u6237\u53D6\u6D88");
              common_vendor.index.hideLoading();
              if (result.code === 200) {
                common_vendor.index.showToast({ title: "\u53D6\u6D88\u6210\u529F", icon: "success" });
                this.loadOrders();
              } else {
                common_vendor.index.showToast({ title: result.msg || "\u53D6\u6D88\u5931\u8D25", icon: "none" });
              }
            } catch (error) {
              common_vendor.index.hideLoading();
              console.error("\u53D6\u6D88\u8BA2\u5355\u5931\u8D25:", error);
              common_vendor.index.showToast({ title: "\u53D6\u6D88\u5931\u8D25", icon: "none" });
            }
          }
        }
      });
    },
    reviewOrder(order) {
      common_vendor.index.navigateTo({
        url: `/pages/order/review?orderId=${order.id}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.tabs, (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.name),
        b: index,
        c: $data.currentTab === index ? 1 : "",
        d: common_vendor.o(($event) => $options.selectTab(index), index)
      };
    }),
    b: common_vendor.f($data.orders, (order, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(order.orderNo),
        b: common_vendor.t(order.orderStatus),
        c: common_vendor.n($options.getStatusClass(order.orderStatus)),
        d: common_vendor.f(order.items, (item, k1, i1) => {
          return {
            a: item.productImage || "/static/images/default-product.png",
            b: common_vendor.t(item.productName),
            c: common_vendor.t(item.price),
            d: common_vendor.t(item.quantity),
            e: item.id
          };
        }),
        e: common_vendor.t($options.getTotalQuantity(order)),
        f: common_vendor.t(order.actualAmount),
        g: order.orderStatus === "\u5F85\u652F\u4ED8"
      }, order.orderStatus === "\u5F85\u652F\u4ED8" ? {
        h: common_vendor.o(($event) => $options.payOrder(order))
      } : {}, {
        i: order.orderStatus === "\u5F85\u652F\u4ED8"
      }, order.orderStatus === "\u5F85\u652F\u4ED8" ? {
        j: common_vendor.o(($event) => $options.cancelOrder(order))
      } : {}, {
        k: order.orderStatus === "\u5DF2\u5B8C\u6210" && !order.isReviewed
      }, order.orderStatus === "\u5DF2\u5B8C\u6210" && !order.isReviewed ? {
        l: common_vendor.o(($event) => $options.reviewOrder(order))
      } : {}, {
        m: order.id
      });
    }),
    c: $data.loading
  }, $data.loading ? {} : {}, {
    d: !$data.hasMore && $data.orders.length > 0
  }, !$data.hasMore && $data.orders.length > 0 ? {} : {}, {
    e: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args)),
    f: $data.orders.length === 0 && !$data.loading
  }, $data.orders.length === 0 && !$data.loading ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59b7fbf9"], ["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
