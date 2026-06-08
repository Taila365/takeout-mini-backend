<<<<<<< HEAD
"use strict";var e=require("../../common/vendor.js"),o=require("../../utils/api.js");require("../../utils/request.js");const n={data:()=>({isLogin:!1,userInfo:{},orderEntries:[{name:"待支付",icon:"💰",status:"待支付"},{name:"待配送",icon:"🚚",status:"待配送"},{name:"已完成",icon:"✅",status:"已完成"},{name:"全部",icon:"📋",status:""}]}),onShow(){this.checkLogin()},methods:{checkLogin(){const o=e.index.getStorageSync("token"),n=e.index.getStorageSync("userInfo");o&&n?(this.isLogin=!0,this.userInfo=n,this.loadUserInfo()):(this.isLogin=!1,this.userInfo={})},async loadUserInfo(){try{const n=await o.userApi.getUserInfo();200===n.code&&(this.userInfo=n.data,e.index.setStorageSync("userInfo",n.data))}catch(n){console.error("加载用户信息失败:",n)}},login(){e.index.showLoading({title:"登录中..."}),e.index.login({provider:"weixin",success:e=>{this.afterWxLogin(e)},fail:()=>{e.index.hideLoading(),e.index.showToast({title:"微信登录失败",icon:"none"})}})},async afterWxLogin(n){try{if(!n.code)return void e.index.showToast({title:"未获取到登录 code",icon:"none"});const t=await o.userApi.login(n.code);200===t.code?(e.index.setStorageSync("token",t.data.token),e.index.setStorageSync("userInfo",t.data.user),this.isLogin=!0,this.userInfo=t.data.user,e.index.showToast({title:"登录成功",icon:"success"})):e.index.showToast({title:t.msg||"登录失败",icon:"none"})}catch(t){console.error("登录失败:",t),e.index.showToast({title:t&&t.msg||"登录失败",icon:"none"})}finally{e.index.hideLoading()}},chooseAvatar(){e.index.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:e=>{this.uploadAvatar(e.tempFilePaths[0])}})},async uploadAvatar(o){try{e.index.showLoading({title:"上传中..."}),setTimeout((()=>{this.userInfo.avatar=o,e.index.setStorageSync("userInfo",this.userInfo),e.index.hideLoading(),e.index.showToast({title:"上传成功",icon:"success"})}),1e3)}catch(n){e.index.hideLoading(),e.index.showToast({title:"上传失败",icon:"none"})}},navigateToOrder(o){this.isLogin?e.index.switchTab({url:"/pages/order/order"}):e.index.showToast({title:"请先登录",icon:"none"})},navigateToAddress(){this.isLogin?e.index.navigateTo({url:"/pages/user/address"}):e.index.showToast({title:"请先登录",icon:"none"})},navigateToReviews(){this.isLogin?e.index.showToast({title:"评价功能开发中",icon:"none"}):e.index.showToast({title:"请先登录",icon:"none"})},contactService(){e.index.showModal({title:"联系客服",content:"客服电话: 400-123-4567",showCancel:!1})},showAbout(){e.index.showModal({title:"关于我们",content:"外卖小程序 v1.0.0\n为您提供便捷的外卖服务",showCancel:!1})},logout(){e.index.showModal({title:"提示",content:"确定退出登录吗？",success:o=>{o.confirm&&(e.index.removeStorageSync("token"),e.index.removeStorageSync("userInfo"),this.isLogin=!1,this.userInfo={},e.index.showToast({title:"已退出登录",icon:"success"}))}})}}};var t=e._export_sfc(n,[["render",function(o,n,t,i,s,a){return e.e({a:s.isLogin},s.isLogin?{b:s.userInfo.avatar||"/static/images/default-avatar.png",c:e.o(((...e)=>a.chooseAvatar&&a.chooseAvatar(...e))),d:e.t(s.userInfo.nickname||"微信用户"),e:e.t(s.userInfo.phone||"未绑定手机号")}:{f:e.o(((...e)=>a.login&&a.login(...e)))},{g:e.f(s.orderEntries,((o,n,t)=>({a:e.t(o.icon),b:e.t(o.name),c:n,d:e.o((e=>a.navigateToOrder(o.status)),n)}))),h:e.o(((...e)=>a.navigateToAddress&&a.navigateToAddress(...e))),i:e.o(((...e)=>a.navigateToReviews&&a.navigateToReviews(...e))),j:e.o(((...e)=>a.contactService&&a.contactService(...e))),k:e.o(((...e)=>a.showAbout&&a.showAbout(...e))),l:s.isLogin},s.isLogin?{m:e.o(((...e)=>a.logout&&a.logout(...e)))}:{})}],["__scopeId","data-v-1198f63b"],["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/user/user.vue"]]);wx.createPage(t);
=======
"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_api = require("../../utils/api.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      isLogin: false,
      userInfo: {},
      orderEntries: [
        { name: "\u5F85\u652F\u4ED8", icon: "\u{1F4B0}", status: "\u5F85\u652F\u4ED8" },
        { name: "\u5F85\u914D\u9001", icon: "\u{1F69A}", status: "\u5F85\u914D\u9001" },
        { name: "\u5DF2\u5B8C\u6210", icon: "\u2705", status: "\u5DF2\u5B8C\u6210" },
        { name: "\u5168\u90E8", icon: "\u{1F4CB}", status: "" }
      ]
    };
  },
  onShow() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = common_vendor.index.getStorageSync("token");
      const userInfo = common_vendor.index.getStorageSync("userInfo");
      if (token && userInfo) {
        this.isLogin = true;
        this.userInfo = userInfo;
        this.loadUserInfo();
      } else {
        this.isLogin = false;
        this.userInfo = {};
      }
    },
    async loadUserInfo() {
      try {
        const res = await utils_api.userApi.getUserInfo();
        if (res.code === 200) {
          this.userInfo = res.data;
          common_vendor.index.setStorageSync("userInfo", res.data);
        }
      } catch (error) {
        console.error("\u52A0\u8F7D\u7528\u6237\u4FE1\u606F\u5931\u8D25:", error);
      }
    },
    login() {
      common_vendor.index.showLoading({ title: "登录中..." });
      // uni.login 就是微信小程序获取 code 的方法
      common_vendor.index.login({
        provider: "weixin",
        success: async (loginRes) => {
          // ✅ 关键：这里 loginRes.code 才是微信给的真正登录凭证
          console.log("微信登录code：", loginRes.code);
    
          try {
            // ✅ 把真正的 code 传给后端
            const res = await utils_api.userApi.login(loginRes.code);
            
            if (res.code === 200) {
              common_vendor.index.setStorageSync("token", res.data.token);
              common_vendor.index.setStorageSync("userInfo", res.data.user);
              this.isLogin = true;
              this.userInfo = res.data.user;
              common_vendor.index.showToast({ title: "登录成功", icon: "success" });
            } else {
              common_vendor.index.showToast({ title: res.msg || "登录失败", icon: "none" });
            }
          } catch (error) {
            console.error("登录失败:", error);
            common_vendor.index.showToast({ title: "登录失败", icon: "none" });
          } finally {
            common_vendor.index.hideLoading();
          }
        },
        fail: (err) => {
          console.error("微信授权失败：", err);
          common_vendor.index.showToast({ title: "微信登录失败", icon: "none" });
          common_vendor.index.hideLoading();
        }
      });
    },
    chooseAvatar() {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          this.uploadAvatar(res.tempFilePaths[0]);
        }
      });
    },
    async uploadAvatar(filePath) {
      try {
        common_vendor.index.showLoading({ title: "\u4E0A\u4F20\u4E2D..." });
        setTimeout(() => {
          this.userInfo.avatar = filePath;
          common_vendor.index.setStorageSync("userInfo", this.userInfo);
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({ title: "\u4E0A\u4F20\u6210\u529F", icon: "success" });
        }, 1e3);
      } catch (error) {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({ title: "\u4E0A\u4F20\u5931\u8D25", icon: "none" });
      }
    },
    navigateToOrder(status) {
      if (!this.isLogin) {
        common_vendor.index.showToast({ title: "\u8BF7\u5148\u767B\u5F55", icon: "none" });
        return;
      }
      common_vendor.index.switchTab({
        url: "/pages/order/order"
      });
    },
    navigateToAddress() {
      if (!this.isLogin) {
        common_vendor.index.showToast({ title: "\u8BF7\u5148\u767B\u5F55", icon: "none" });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/user/address"
      });
    },
    navigateToReviews() {
      if (!this.isLogin) {
        common_vendor.index.showToast({ title: "\u8BF7\u5148\u767B\u5F55", icon: "none" });
        return;
      }
      common_vendor.index.showToast({ title: "\u8BC4\u4EF7\u529F\u80FD\u5F00\u53D1\u4E2D", icon: "none" });
    },
    contactService() {
      common_vendor.index.showModal({
        title: "\u8054\u7CFB\u5BA2\u670D",
        content: "\u5BA2\u670D\u7535\u8BDD: 400-123-4567",
        showCancel: false
      });
    },
    showAbout() {
      common_vendor.index.showModal({
        title: "\u5173\u4E8E\u6211\u4EEC",
        content: "\u5916\u5356\u5C0F\u7A0B\u5E8F v1.0.0\n\u4E3A\u60A8\u63D0\u4F9B\u4FBF\u6377\u7684\u5916\u5356\u670D\u52A1",
        showCancel: false
      });
    },
    logout() {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u9000\u51FA\u767B\u5F55\u5417\uFF1F",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("token");
            common_vendor.index.removeStorageSync("userInfo");
            this.isLogin = false;
            this.userInfo = {};
            common_vendor.index.showToast({ title: "\u5DF2\u9000\u51FA\u767B\u5F55", icon: "success" });
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isLogin
  }, $data.isLogin ? {
    b: $data.userInfo.avatar || "/static/images/default-avatar.png",
    c: common_vendor.o((...args) => $options.chooseAvatar && $options.chooseAvatar(...args)),
    d: common_vendor.t($data.userInfo.nickname || "\u5FAE\u4FE1\u7528\u6237"),
    e: common_vendor.t($data.userInfo.phone || "\u672A\u7ED1\u5B9A\u624B\u673A\u53F7")
  } : {
    f: common_vendor.o((...args) => $options.login && $options.login(...args))
  }, {
    g: common_vendor.f($data.orderEntries, (item, index, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.navigateToOrder(item.status), index)
      };
    }),
    h: common_vendor.o((...args) => $options.navigateToAddress && $options.navigateToAddress(...args)),
    i: common_vendor.o((...args) => $options.navigateToReviews && $options.navigateToReviews(...args)),
    j: common_vendor.o((...args) => $options.contactService && $options.contactService(...args)),
    k: common_vendor.o((...args) => $options.showAbout && $options.showAbout(...args)),
    l: $data.isLogin
  }, $data.isLogin ? {
    m: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1198f63b"], ["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
