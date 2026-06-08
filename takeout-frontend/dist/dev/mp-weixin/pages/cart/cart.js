<<<<<<< HEAD
"use strict";var t=require("../../common/vendor.js"),e=require("../../utils/api.js");require("../../utils/request.js");const a={data:()=>({hasToken:!1,cartItems:[],merchantId:null,activeMerchantId:null,merchantOptions:[]}),computed:{isAllSelected(){return this.cartItems.length>0&&this.cartItems.every((t=>t.selected))},selectedCount(){return this.cartItems.filter((t=>t.selected)).reduce(((t,e)=>t+e.quantity),0)},totalPrice(){return this.cartItems.filter((t=>t.selected)).reduce(((t,e)=>t+e.price*e.quantity),0).toFixed(2)}},onShow(){if(this.hasToken=!!t.index.getStorageSync("token"),!this.hasToken)return this.cartItems=[],this.merchantOptions=[],this.merchantId=null,void(this.activeMerchantId=null);this.loadMerchantCarts()},methods:{goLogin(){t.index.switchTab({url:"/pages/user/user"})},async loadMerchantCarts(){try{const a=(await e.merchantApi.getOpenMerchants()).data||[],n=[];for(const t of a){((await e.cartApi.getCartList(t.merchantId)).data||[]).length>0&&n.push({id:t.merchantId,name:t.name||`商家${t.merchantId}`})}if(this.merchantOptions=n,0===n.length)return this.cartItems=[],this.merchantId=null,void(this.activeMerchantId=null);const i=t.index.getStorageSync("currentMerchantId"),r=n.find((t=>String(t.id)===String(i)));this.activeMerchantId=r?r.id:n[0].id,await this.loadCartByMerchant(this.activeMerchantId)}catch(a){this.cartItems=[],this.merchantId=null,this.activeMerchantId=null,this.merchantOptions=[],console.error("加载商家购物车失败:",a)}},async loadCartByMerchant(t){if(!t)return this.cartItems=[],void(this.merchantId=null);try{this.merchantId=t;const a=await e.cartApi.getCartList(t);this.cartItems=(a.data||[]).map((t=>({id:t.productId,name:t.productName,image:t.productImage,price:t.price,quantity:t.quantity,selected:!0})))}catch(a){this.cartItems=[],console.error("加载购物车失败:",a)}},async switchMerchant(e){this.activeMerchantId=e,t.index.setStorageSync("currentMerchantId",e),await this.loadCartByMerchant(e)},toggleSelect(t){t.selected=!t.selected},toggleSelectAll(){const t=!this.isAllSelected;this.cartItems.forEach((e=>{e.selected=t}))},async increaseQuantity(t){if(this.hasToken)try{await e.cartApi.addItem(this.merchantId,t.id,1),await this.loadCartByMerchant(this.merchantId)}catch(a){console.error("增加购物车失败:",a)}else this.goLogin()},async decreaseQuantity(t){if(this.hasToken)try{await e.cartApi.subtractItem(this.merchantId,t.id,1),await this.loadCartByMerchant(this.merchantId)}catch(a){console.error("减少购物车失败:",a)}else this.goLogin()},deleteItem(a){t.index.showModal({title:"提示",content:"确定删除该商品吗？",success:n=>{if(n.confirm){const n=a.quantity||1;e.cartApi.subtractItem(this.merchantId,a.id,n).then((()=>{this.loadCartByMerchant(this.merchantId).then((()=>{0===this.cartItems.length&&this.loadMerchantCarts()}))})).catch((e=>{console.error("删除商品失败:",e),t.index.showToast({title:"删除失败",icon:"none"})}))}}})},goShopping(){t.index.switchTab({url:"/pages/index/index"})},submitOrder(){if(!this.hasToken)return void this.goLogin();if(0===this.selectedCount)return void t.index.showToast({title:"请选择商品",icon:"none"});const e=this.cartItems.filter((t=>t.selected));t.index.setStorageSync("currentMerchantId",this.merchantId),t.index.setStorageSync("checkoutItems",e),t.index.navigateTo({url:"/pages/order/confirm"})}}};var n=t._export_sfc(a,[["render",function(e,a,n,i,r,c){return t.e({a:r.hasToken&&r.merchantOptions.length>0},r.hasToken&&r.merchantOptions.length>0?{b:t.f(r.merchantOptions,((e,a,n)=>({a:t.t(e.name),b:r.activeMerchantId===e.id?1:"",c:e.id,d:t.o((t=>c.switchMerchant(e.id)),e.id)})))}:{},{c:!r.hasToken},r.hasToken?0===r.cartItems.length?{f:t.o(((...t)=>c.goShopping&&c.goShopping(...t)))}:r.hasToken?{h:t.f(r.cartItems,((e,a,n)=>({a:e.selected,b:t.o((t=>c.toggleSelect(e))),c:e.image||"/static/images/default-product.png",d:t.t(e.name),e:t.t(e.price),f:t.o((t=>c.decreaseQuantity(e))),g:t.t(e.quantity),h:t.o((t=>c.increaseQuantity(e))),i:t.o((t=>c.deleteItem(e))),j:e.id})))}:{}:{d:t.o(((...t)=>c.goLogin&&c.goLogin(...t)))},{e:0===r.cartItems.length,g:r.hasToken,i:r.hasToken&&r.cartItems.length>0},r.hasToken&&r.cartItems.length>0?{j:c.isAllSelected,k:t.o(((...t)=>c.toggleSelectAll&&c.toggleSelectAll(...t))),l:t.t(c.totalPrice),m:t.t(c.selectedCount),n:t.o(((...t)=>c.submitOrder&&c.submitOrder(...t)))}:{})}],["__scopeId","data-v-4a5ab35b"],["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/cart/cart.vue"]]);wx.createPage(n);
=======
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
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
