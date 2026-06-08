<<<<<<< HEAD
"use strict";var t=require("../../common/vendor.js"),e=require("../../utils/api.js");require("../../utils/request.js");const a={data:()=>({merchantId:null,merchant:{},categories:[{id:0,name:"全部"}],currentCategory:0,products:[],allOnSaleProducts:[],productListScrollTop:0,cart:{}}),computed:{currentCategoryName(){var t;return(null==(t=this.categories[this.currentCategory])?void 0:t.name)||"全部"},cartTotal(){return Object.values(this.cart).reduce(((t,e)=>t+e.quantity),0)},cartTotalPrice(){return Object.values(this.cart).reduce(((t,e)=>t+e.price*e.quantity),0).toFixed(2)}},async onLoad(t){this.merchantId=t.id,await Promise.all([this.loadMerchantDetail(),this.loadCategoriesAndProducts()]),await this.loadCart()},onShow(){this.merchantId&&t.index.getStorageSync("token")&&this.loadCart()},methods:{ensureLogin:e=>!!t.index.getStorageSync("token")||(t.index.showModal({title:"提示",content:`请先登录后再${e}`,confirmText:"去登录",success:e=>{e.confirm&&t.index.switchTab({url:"/pages/user/user"})}}),!1),async loadMerchantDetail(){try{const t=await e.merchantApi.getMerchantById(this.merchantId);this.merchant=t.data||{}}catch(t){console.error("加载商家详情失败:",t)}},async loadCategoriesAndProducts(){try{const[t,a]=await Promise.all([e.productApi.getOnSaleProducts(this.merchantId),e.categoryApi.getCategoriesByMerchantId(this.merchantId).catch((()=>({data:[]})))]),r=t.data||[];this.allOnSaleProducts=r,this.products=r,this.currentCategory=0;const i=a.data||[];this.categories=[{id:0,name:"全部"},...i]}catch(t){console.error("加载分类或商品失败:",t),this.allOnSaleProducts=[],this.products=[],this.categories=[{id:0,name:"全部"}]}},async selectCategory(a){this.currentCategory=a,this.resetProductListScroll();const r=this.categories[a];if(r&&0!==r.id)try{const t=await e.productApi.getProductsByCategoryId(r.id),a=String(this.merchantId);this.products=(t.data||[]).filter((t=>1===t.status&&String(t.merchantId)===a))}catch(i){console.error("加载分类商品失败:",i),t.index.showToast({title:"加载失败",icon:"none"})}else this.products=[...this.allOnSaleProducts]},resetProductListScroll(){this.productListScrollTop=this.productListScrollTop?0:.01,this.$nextTick((()=>{this.productListScrollTop=0}))},getCartQuantity(t){var e;return(null==(e=this.cart[t])?void 0:e.quantity)||0},async addToCart(a){if(this.ensureLogin("加入购物车"))if(a.stock<=0)t.index.showToast({title:"商品已售罄",icon:"none"});else try{await e.cartApi.addItem(this.merchantId,a.id,1),await this.loadCart()}catch(r){console.error("添加购物车失败:",r)}},async decreaseQuantity(t){if(this.ensureLogin("修改购物车")&&this.cart[t.id])try{await e.cartApi.subtractItem(this.merchantId,t.id,1),await this.loadCart()}catch(a){console.error("减少购物车失败:",a)}},async loadCart(){if(t.index.getStorageSync("token"))try{const t=await e.cartApi.getCartSummary(this.merchantId),a=t.data&&t.data.items||[],r={};a.forEach((t=>{r[t.productId]={id:t.productId,name:t.productName,price:t.price,image:t.productImage,quantity:t.quantity}})),this.cart=r}catch(a){this.cart={},console.error("加载购物车失败:",a)}else this.cart={}},showCartDetail(){this.ensureLogin("查看购物车")&&(t.index.setStorageSync("currentMerchantId",this.merchantId),t.index.switchTab({url:"/pages/cart/cart"}))},submitOrder(){this.ensureLogin("结算")&&(0!==this.cartTotal?(t.index.setStorageSync("currentMerchantId",this.merchantId),t.index.navigateTo({url:"/pages/order/confirm"})):t.index.showToast({title:"购物车为空",icon:"none"}))}}};var r=t._export_sfc(a,[["render",function(e,a,r,i,c,o){return t.e({a:c.merchant.banner||"/static/images/default-banner.jpg",b:c.merchant.logo||"/static/images/default-shop.png",c:t.t(c.merchant.name),d:t.t(c.merchant.rating),e:t.t(c.merchant.salesVolume||0),f:t.t(c.merchant.description||"暂无公告"),g:t.f(c.categories,((e,a,r)=>({a:t.t(e.name),b:e.id,c:c.currentCategory===a?1:"",d:t.o((t=>o.selectCategory(a)),e.id)}))),h:t.t(o.currentCategoryName),i:t.f(c.products,((e,a,r)=>t.e({a:e.image||"/static/images/default-product.png",b:t.t(e.name),c:t.t(e.description||"暂无描述"),d:t.t(e.price),e:e.stock<=10},e.stock<=10?{f:t.t(e.stock)}:{},{g:o.getCartQuantity(e.id)>0},o.getCartQuantity(e.id)>0?{h:t.o((t=>o.decreaseQuantity(e)))}:{},{i:o.getCartQuantity(e.id)>0},o.getCartQuantity(e.id)>0?{j:t.t(o.getCartQuantity(e.id))}:{},{k:t.o((t=>o.addToCart(e))),l:e.id}))),j:c.productListScrollTop,k:o.cartTotal>0},o.cartTotal>0?{l:t.t(o.cartTotal),m:t.t(o.cartTotalPrice),n:t.o(((...t)=>o.showCartDetail&&o.showCartDetail(...t))),o:t.o(((...t)=>o.submitOrder&&o.submitOrder(...t)))}:{})}],["__scopeId","data-v-2761bcdb"],["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/merchant/merchant.vue"]]);wx.createPage(r);
=======
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
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
