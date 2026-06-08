<<<<<<< HEAD
"use strict";var e=require("../../common/vendor.js"),s=require("../../utils/api.js");require("../../utils/request.js");const i={data:()=>({addresses:[],isEdit:!1,currentAddressId:null,form:{name:"",phone:"",province:"",city:"",district:"",detailAddress:"",isDefault:0},region:[],isSelectMode:!1}),computed:{regionText(){return this.form.province&&this.form.city&&this.form.district?`${this.form.province} ${this.form.city} ${this.form.district}`:""}},onLoad(e){this.isSelectMode="true"===e.select,this.loadAddresses()},methods:{async loadAddresses(){try{e.index.showLoading({title:"加载中..."});const i=await s.addressApi.getAddresses();this.addresses=i.data||[],e.index.hideLoading()}catch(i){e.index.hideLoading(),console.error("加载地址失败:",i)}},selectAddress(s){if(this.isSelectMode){const i=getCurrentPages(),t=i[i.length-2];t&&(t.$vm.defaultAddress=s),e.index.navigateBack()}},addAddress(){this.isEdit=!1,this.currentAddressId=null,this.resetForm(),this.$refs.addressPopup.open()},editAddress(e){this.isEdit=!0,this.currentAddressId=e.id,this.form={name:e.name,phone:e.phone,province:e.province,city:e.city,district:e.district,detailAddress:e.detailAddress,isDefault:e.isDefault},this.region=[e.province,e.city,e.district],this.$refs.addressPopup.open()},deleteAddress(i){e.index.showModal({title:"提示",content:"确定删除该地址吗？",success:async t=>{if(t.confirm)try{e.index.showLoading({title:"删除中..."});const t=await s.addressApi.deleteAddress(i.id);e.index.hideLoading(),200===t.code?(e.index.showToast({title:"删除成功",icon:"success"}),this.loadAddresses()):e.index.showToast({title:t.msg||"删除失败",icon:"none"})}catch(d){e.index.hideLoading(),console.error("删除地址失败:",d),e.index.showToast({title:"删除失败",icon:"none"})}}})},regionChange(e){this.region=e.detail.value,this.form.province=e.detail.value[0],this.form.city=e.detail.value[1],this.form.district=e.detail.value[2]},toggleDefault(e){this.form.isDefault=e.detail.value?1:0},async saveAddress(){if(this.form.name.trim())if(this.form.phone.trim())if(/^1[3-9]\d{9}$/.test(this.form.phone))if(this.form.province&&this.form.city&&this.form.district)if(this.form.detailAddress.trim())try{let i;e.index.showLoading({title:"保存中..."}),this.isEdit?(this.form.id=this.currentAddressId,i=await s.addressApi.updateAddress(this.form)):i=await s.addressApi.createAddress(this.form),e.index.hideLoading(),200===i.code?(e.index.showToast({title:"保存成功",icon:"success"}),this.closePopup(),this.loadAddresses()):e.index.showToast({title:i.msg||"保存失败",icon:"none"})}catch(i){e.index.hideLoading(),console.error("保存地址失败:",i),e.index.showToast({title:"保存失败",icon:"none"})}else e.index.showToast({title:"请输入详细地址",icon:"none"});else e.index.showToast({title:"请选择所在地区",icon:"none"});else e.index.showToast({title:"手机号格式不正确",icon:"none"});else e.index.showToast({title:"请输入手机号",icon:"none"});else e.index.showToast({title:"请输入收货人姓名",icon:"none"})},closePopup(){this.$refs.addressPopup.close()},resetForm(){this.form={name:"",phone:"",province:"",city:"",district:"",detailAddress:"",isDefault:0},this.region=[]}}};if(!Array){e.resolveComponent("uni-popup")()}var t=e._export_sfc(i,[["render",function(s,i,t,d,o,r){return e.e({a:o.addresses.length>0},o.addresses.length>0?{b:e.f(o.addresses,((s,i,t)=>e.e({a:e.t(s.name),b:e.t(s.phone),c:1===s.isDefault},(s.isDefault,{}),{d:e.t(s.province),e:e.t(s.city),f:e.t(s.district),g:e.t(s.detailAddress),h:e.o((e=>r.editAddress(s))),i:e.o((e=>r.deleteAddress(s))),j:s.id,k:e.o((e=>r.selectAddress(s)),s.id)})))}:{},{c:e.o(((...e)=>r.addAddress&&r.addAddress(...e))),d:e.t(o.isEdit?"编辑地址":"添加地址"),e:e.o(((...e)=>r.closePopup&&r.closePopup(...e))),f:o.form.name,g:e.o((e=>o.form.name=e.detail.value)),h:o.form.phone,i:e.o((e=>o.form.phone=e.detail.value)),j:e.t(r.regionText||"请选择所在地区"),k:e.o(((...e)=>r.regionChange&&r.regionChange(...e))),l:o.region,m:o.form.detailAddress,n:e.o((e=>o.form.detailAddress=e.detail.value)),o:1===o.form.isDefault,p:e.o(((...e)=>r.toggleDefault&&r.toggleDefault(...e))),q:e.o(((...e)=>r.saveAddress&&r.saveAddress(...e))),r:e.sr("addressPopup","adea3f98-0"),s:e.p({type:"bottom"})})}],["__scopeId","data-v-adea3f98"],["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/user/address.vue"]]);wx.createPage(t);
=======
"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_api = require("../../utils/api.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      addresses: [],
      isEdit: false,
      currentAddressId: null,
      form: {
        name: "",
        phone: "",
        province: "",
        city: "",
        district: "",
        detailAddress: "",
        isDefault: 0
      },
      region: [],
      isSelectMode: false
    };
  },
  computed: {
    regionText() {
      if (this.form.province && this.form.city && this.form.district) {
        return `${this.form.province} ${this.form.city} ${this.form.district}`;
      }
      return "";
    }
  },
  onLoad(options) {
    this.isSelectMode = options.select === "true";
    this.loadAddresses();
  },
  methods: {
    async loadAddresses() {
      try {
        common_vendor.index.showLoading({ title: "\u52A0\u8F7D\u4E2D..." });
        const res = await utils_api.addressApi.getAddresses();
        this.addresses = res.data || [];
        common_vendor.index.hideLoading();
      } catch (error) {
        common_vendor.index.hideLoading();
        console.error("\u52A0\u8F7D\u5730\u5740\u5931\u8D25:", error);
      }
    },
    selectAddress(address) {
      if (this.isSelectMode) {
        const pages = getCurrentPages();
        const prevPage = pages[pages.length - 2];
        if (prevPage) {
          prevPage.$vm.defaultAddress = address;
        }
        common_vendor.index.navigateBack();
      }
    },
    addAddress() {
      this.isEdit = false;
      this.currentAddressId = null;
      this.resetForm();
      this.$refs.addressPopup.open();
    },
    editAddress(address) {
      this.isEdit = true;
      this.currentAddressId = address.id;
      this.form = {
        name: address.name,
        phone: address.phone,
        province: address.province,
        city: address.city,
        district: address.district,
        detailAddress: address.detailAddress,
        isDefault: address.isDefault
      };
      this.region = [address.province, address.city, address.district];
      this.$refs.addressPopup.open();
    },
    deleteAddress(address) {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u5220\u9664\u8BE5\u5730\u5740\u5417\uFF1F",
        success: async (res) => {
          if (res.confirm) {
            try {
              common_vendor.index.showLoading({ title: "\u5220\u9664\u4E2D..." });
              const result = await utils_api.addressApi.deleteAddress(address.id);
              common_vendor.index.hideLoading();
              if (result.code === 200) {
                common_vendor.index.showToast({ title: "\u5220\u9664\u6210\u529F", icon: "success" });
                this.loadAddresses();
              } else {
                common_vendor.index.showToast({ title: result.msg || "\u5220\u9664\u5931\u8D25", icon: "none" });
              }
            } catch (error) {
              common_vendor.index.hideLoading();
              console.error("\u5220\u9664\u5730\u5740\u5931\u8D25:", error);
              common_vendor.index.showToast({ title: "\u5220\u9664\u5931\u8D25", icon: "none" });
            }
          }
        }
      });
    },
    regionChange(e) {
      this.region = e.detail.value;
      this.form.province = e.detail.value[0];
      this.form.city = e.detail.value[1];
      this.form.district = e.detail.value[2];
    },
    toggleDefault(e) {
      this.form.isDefault = e.detail.value ? 1 : 0;
    },
    async saveAddress() {
      if (!this.form.name.trim()) {
        common_vendor.index.showToast({ title: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u59D3\u540D", icon: "none" });
        return;
      }
      if (!this.form.phone.trim()) {
        common_vendor.index.showToast({ title: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7", icon: "none" });
        return;
      }
      if (!/^1[3-9]\d{9}$/.test(this.form.phone)) {
        common_vendor.index.showToast({ title: "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E", icon: "none" });
        return;
      }
      if (!this.form.province || !this.form.city || !this.form.district) {
        common_vendor.index.showToast({ title: "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A", icon: "none" });
        return;
      }
      if (!this.form.detailAddress.trim()) {
        common_vendor.index.showToast({ title: "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740", icon: "none" });
        return;
      }
      try {
        common_vendor.index.showLoading({ title: "\u4FDD\u5B58\u4E2D..." });
        let res;
        if (this.isEdit) {
          this.form.id = this.currentAddressId;
          res = await utils_api.addressApi.updateAddress(this.form);
        } else {
          res = await utils_api.addressApi.createAddress(this.form);
        }
        common_vendor.index.hideLoading();
        if (res.code === 200) {
          common_vendor.index.showToast({ title: "\u4FDD\u5B58\u6210\u529F", icon: "success" });
          this.closePopup();
          this.loadAddresses();
        } else {
          common_vendor.index.showToast({ title: res.msg || "\u4FDD\u5B58\u5931\u8D25", icon: "none" });
        }
      } catch (error) {
        common_vendor.index.hideLoading();
        console.error("\u4FDD\u5B58\u5730\u5740\u5931\u8D25:", error);
        common_vendor.index.showToast({ title: "\u4FDD\u5B58\u5931\u8D25", icon: "none" });
      }
    },
    closePopup() {
      this.$refs.addressPopup.close();
    },
    resetForm() {
      this.form = {
        name: "",
        phone: "",
        province: "",
        city: "",
        district: "",
        detailAddress: "",
        isDefault: 0
      };
      this.region = [];
    }
  }
};
if (!Array) {
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  _component_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.addresses.length > 0
  }, $data.addresses.length > 0 ? {
    b: common_vendor.f($data.addresses, (address, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(address.name),
        b: common_vendor.t(address.phone),
        c: address.isDefault === 1
      }, address.isDefault === 1 ? {} : {}, {
        d: common_vendor.t(address.province),
        e: common_vendor.t(address.city),
        f: common_vendor.t(address.district),
        g: common_vendor.t(address.detailAddress),
        h: common_vendor.o(($event) => $options.editAddress(address)),
        i: common_vendor.o(($event) => $options.deleteAddress(address)),
        j: address.id,
        k: common_vendor.o(($event) => $options.selectAddress(address), address.id)
      });
    })
  } : {}, {
    c: common_vendor.o((...args) => $options.addAddress && $options.addAddress(...args)),
    d: common_vendor.t($data.isEdit ? "\u7F16\u8F91\u5730\u5740" : "\u6DFB\u52A0\u5730\u5740"),
    e: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    f: $data.form.name,
    g: common_vendor.o(($event) => $data.form.name = $event.detail.value),
    h: $data.form.phone,
    i: common_vendor.o(($event) => $data.form.phone = $event.detail.value),
    j: common_vendor.t($options.regionText || "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"),
    k: common_vendor.o((...args) => $options.regionChange && $options.regionChange(...args)),
    l: $data.region,
    m: $data.form.detailAddress,
    n: common_vendor.o(($event) => $data.form.detailAddress = $event.detail.value),
    o: $data.form.isDefault === 1,
    p: common_vendor.o((...args) => $options.toggleDefault && $options.toggleDefault(...args)),
    q: common_vendor.o((...args) => $options.saveAddress && $options.saveAddress(...args)),
    r: common_vendor.sr("addressPopup", "adea3f98-0"),
    s: common_vendor.p({
      type: "bottom"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-adea3f98"], ["__file", "C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/user/address.vue"]]);
wx.createPage(MiniProgramPage);
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
