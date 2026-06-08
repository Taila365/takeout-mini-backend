<<<<<<< HEAD
"use strict";var e=require("../../common/vendor.js"),t=require("../../utils/api.js");require("../../utils/request.js");const r={data:()=>({defaultAddress:null,merchantId:null,merchantName:"",orderItems:[],deliveryFee:0,remark:"",paymentMethod:"wechat"}),computed:{productTotal(){return this.orderItems.reduce(((e,t)=>e+t.price*t.quantity),0)},totalAmount(){return(this.productTotal+this.deliveryFee).toFixed(2)}},onLoad(){this.loadAddress(),this.loadCart()},onShow(){this.loadAddress()},methods:{async loadAddress(){try{const e=await t.addressApi.getDefaultAddress();e.data&&(this.defaultAddress=e.data)}catch(e){console.error("加载地址失败:",e)}},async loadCart(){if(!e.index.getStorageSync("token"))return void(this.orderItems=[]);const r=e.index.getStorageSync("currentMerchantId");if(r){this.merchantId=r;try{const[d,a]=await Promise.all([t.cartApi.getCartList(r),t.merchantApi.getMerchantById(r)]);this.merchantName=a.data&&a.data.name||"";const s=e.index.getStorageSync("checkoutItems"),i={};(s||[]).forEach((e=>{i[e.id]=!0}));const o=d.data||[];this.orderItems=o.filter((e=>0===Object.keys(i).length||i[e.productId])).map((e=>({id:e.productId,name:e.productName,image:e.productImage,price:e.price,quantity:e.quantity})))}catch(d){console.error("加载购物车失败:",d),this.orderItems=[]}}else this.orderItems=[]},selectAddress(){e.index.navigateTo({url:"/pages/user/address?select=true"})},selectPayment(e){this.paymentMethod=e.detail.value},async submitOrder(){if(this.defaultAddress)if(0!==this.orderItems.length)try{e.index.showLoading({title:"提交中..."});const r={merchantId:this.merchantId,addressId:this.defaultAddress.id,totalAmount:this.productTotal,deliveryFee:this.deliveryFee,actualAmount:parseFloat(this.totalAmount),payMethod:this.paymentMethod,remark:this.remark,orderItems:this.orderItems.map((e=>({productId:e.id,productName:e.name,productImage:e.image,price:e.price,quantity:e.quantity,subtotal:e.price*e.quantity})))},d=await t.orderApi.createOrder(r);e.index.hideLoading(),200===d.code?(await t.cartApi.clearCart(this.merchantId),e.index.removeStorageSync("checkoutItems"),e.index.setStorageSync("orderTabIndex",1),e.index.showToast({title:"订单创建成功",icon:"success"}),setTimeout((()=>{e.index.switchTab({url:"/pages/order/order"})}),1500)):e.index.showToast({title:d.msg||"创建订单失败",icon:"none"})}catch(r){e.index.hideLoading(),console.error("创建订单失败:",r),e.index.showToast({title:"创建订单失败",icon:"none"})}else e.index.showToast({title:"购物车为空",icon:"none"});else e.index.showToast({title:"请选择收货地址",icon:"none"})}}};var d=e._export_sfc(r,[["render",function(t,r,d,a,s,i){return e.e({a:s.defaultAddress},s.defaultAddress?{b:e.t(s.defaultAddress.name),c:e.t(s.defaultAddress.phone),d:e.t(s.defaultAddress.province),e:e.t(s.defaultAddress.city),f:e.t(s.defaultAddress.district),g:e.t(s.defaultAddress.detailAddress)}:{},{h:e.o(((...e)=>i.selectAddress&&i.selectAddress(...e))),i:e.t(s.merchantName),j:e.f(s.orderItems,((t,r,d)=>({a:t.image||"/static/images/default-product.png",b:e.t(t.name),c:e.t(t.price),d:e.t(t.quantity),e:t.id}))),k:e.t(s.deliveryFee),l:s.remark,m:e.o((e=>s.remark=e.detail.value)),n:"wechat"===s.paymentMethod,o:"alipay"===s.paymentMethod,p:e.o(((...e)=>i.selectPayment&&i.selectPayment(...e))),q:e.t(i.totalAmount),r:e.o(((...e)=>i.submitOrder&&i.submitOrder(...e)))})}],["__scopeId","data-v-84174caa"],["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/order/confirm.vue"]]);wx.createPage(d);
=======
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
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
