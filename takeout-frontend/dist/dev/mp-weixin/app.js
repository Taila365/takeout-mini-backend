<<<<<<< HEAD
"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var o=require("./common/vendor.js");Math;const e={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};var n=o._export_sfc(e,[["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/App.vue"]]);function t(){return{app:o.createSSRApp(n)}}t().app.mount("#app"),exports.createApp=t;
=======
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/merchant/merchant.js";
  "./pages/cart/cart.js";
  "./pages/order/order.js";
  "./pages/order/confirm.js";
  "./pages/user/user.js";
  "./pages/user/address.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
