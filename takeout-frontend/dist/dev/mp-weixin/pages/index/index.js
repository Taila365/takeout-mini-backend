<<<<<<< HEAD
"use strict";var e=require("../../common/vendor.js"),a=require("../../utils/api.js");require("../../utils/request.js");const t={data:()=>({searchKey:"",banners:["/static/images/banner1.jpg","/static/images/banner2.jpg","/static/images/banner3.jpg"],categories:[{name:"美食",icon:"/static/images/food.png"},{name:"超市",icon:"/static/images/supermarket.png"},{name:"水果",icon:"/static/images/fruit.png"},{name:"甜品",icon:"/static/images/dessert.png"},{name:"饮品",icon:"/static/images/drink.png"},{name:"快餐",icon:"/static/images/fastfood.png"},{name:"烧烤",icon:"/static/images/bbq.png"},{name:"全部",icon:"/static/images/all.png"}],activeCategoryIndex:7,merchants:[]}),onLoad(){this.loadMerchants()},onPullDownRefresh(){this.loadMerchants(),e.index.stopPullDownRefresh()},methods:{async loadMerchants(){try{e.index.showLoading({title:"加载中..."});const t=await a.merchantApi.getOpenMerchants();this.merchants=t.data||[],e.index.hideLoading()}catch(t){e.index.hideLoading(),console.error("加载商家失败:",t)}},async loadMerchantsByCategory(t){try{e.index.showLoading({title:"加载中..."});const n=await a.merchantApi.getMerchantsByCategory(t);this.merchants=n.data||[],e.index.hideLoading()}catch(n){e.index.hideLoading(),console.error("按分类加载商家失败:",n)}},handleSearch(){this.searchKey.trim()?e.index.showToast({title:"搜索功能开发中",icon:"none"}):e.index.showToast({title:"请输入搜索关键词",icon:"none"})},navigateToCategory(e,a){this.activeCategoryIndex=a,"全部"===e.name?this.loadMerchants():this.loadMerchantsByCategory(e.name)},navigateToMerchant(a){e.index.navigateTo({url:`/pages/merchant/merchant?id=${a}`})}}};var n=e._export_sfc(t,[["render",function(a,t,n,i,s,o){return{a:e.o(((...e)=>o.handleSearch&&o.handleSearch(...e))),b:s.searchKey,c:e.o((e=>s.searchKey=e.detail.value)),d:e.f(s.banners,((e,a,t)=>({a:e,b:a}))),e:e.f(s.categories,((a,t,n)=>({a:a.icon,b:e.t(a.name),c:s.activeCategoryIndex===t?1:"",d:t,e:e.o((e=>o.navigateToCategory(a,t)),t)}))),f:e.f(s.merchants,((a,t,n)=>e.e({a:a.logo||"/static/images/default-shop.png",b:e.t(a.name),c:e.t(a.rating),d:e.t(a.salesVolume||0),e:e.t(a.businessHours),f:e.t(a.deliveryFee||0),g:a.minimumOrderAmount},a.minimumOrderAmount?{h:e.t(a.minimumOrderAmount)}:{},{i:e.t(1===a.status?"营业中":"休息中"),j:1===a.status?1:"",k:1!==a.status?1:"",l:a.merchantId,m:e.o((e=>o.navigateToMerchant(a.merchantId)),a.merchantId)})))}}],["__scopeId","data-v-1badc801"],["__file","C:/Users/qiuzijian/Downloads/takeout-backend/takeout-frontend/src/pages/index/index.vue"]]);wx.createPage(n);
=======
// pages/index/index.js
var BASE_URL = 'http://localhost:8080/api'

Page({

  data: {
    searchKey: '',
    isSearching: false,
    selectedCategory: '全部',
    banners: [
      '/static/images/banner1.jpg',
      '/static/images/banner2.jpg',
      '/static/images/banner3.jpg'
    ],
    categories: [
      { name: '美食', icon: '/static/images/food.png' },
      { name: '超市', icon: '/static/images/supermarket.png' },
      { name: '水果', icon: '/static/images/fruit.png' },
      { name: '甜品', icon: '/static/images/dessert.png' },
      { name: '饮品', icon: '/static/images/drink.png' },
      { name: '快餐', icon: '/static/images/fastfood.png' },
      { name: '烧烤', icon: '/static/images/bbq.png' },
      { name: '全部', icon: '/static/images/all.png' }
    ],
    merchants: []
  },

  onLoad(options) {
    this.loadMerchants()
  },

  onReady() {

  },

  onShow() {

  },

  onHide() {

  },

  onUnload() {

  },

  onPullDownRefresh() {
    if (this.data.isSearching) {
      this.handleSearch({ detail: { value: this.data.searchKey } })
    } else if (this.data.selectedCategory !== '全部') {
      this.filterMerchantsByCategory(this.data.selectedCategory)
    } else {
      this.loadMerchants()
    }
    wx.stopPullDownRefresh()
  },

  onReachBottom() {

  },

  onShareAppMessage() {

  },

  // 加载营业中的商家列表
  loadMerchants() {
    var that = this
    wx.showLoading({ title: '加载中...' })
    wx.request({
      url: BASE_URL + '/merchant/open',
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function(res) {
        wx.hideLoading()
        if (res.data && res.data.code === 200) {
          var merchants = res.data.data || []
          console.log('后端返回的商家数据:', merchants)
          // 为后端数据添加分类属性（如果没有）
          merchants = merchants.map(function(merchant) {
            if (!merchant.category) {
              // 根据商家名称自动分类
              merchant.category = that.getMerchantCategory(merchant.name)
              console.log('商家:', merchant.name, '分类:', merchant.category)
            }
            return merchant
          })
          that.setData({ merchants: merchants })
        } else {
          console.log('后端返回错误，使用本地数据')
          that.loadDefaultMerchants()
        }
      },
      fail: function(err) {
        console.log('请求失败:', err)
        wx.hideLoading()
        that.loadDefaultMerchants()
      }
    })
  },


  // 根据商家名称自动分类
  getMerchantCategory(name) {
    if (!name) return '美食'
    name = name.toLowerCase()
    
    // 超市分类
    if (name.includes('超市')) return '超市'
    
    // 水果分类
    if (name.includes('水果')) return '水果'
    
    // 甜品分类
    if (name.includes('甜品') || name.includes('蛋糕')) return '甜品'
    
    // 饮品分类
    if (name.includes('饮品') || name.includes('果汁') || name.includes('奶茶') || name.includes('咖啡') || name.includes('饮料')) return '饮品'
    
    // 快餐分类
    if (name.includes('快餐') || name.includes('汉堡') || name.includes('麦当劳') || name.includes('肯德基') || 
        name.includes('炸鸡') || name.includes('鸡排') || name.includes('米饭') || name.includes('盖饭') || 
        name.includes('便当') || name.includes('快餐') || name.includes('速食')) return '快餐'
    
    // 烧烤分类
    if (name.includes('烧烤') || name.includes('烤') || name.includes('串')) return '烧烤'
    
    // 默认分类
    return '美食'
  },

  // 搜索输入变化
  onSearchInput(e) {
    this.setData({ searchKey: e.detail.value })
  },

  // 清空搜索
  clearSearch() {
    this.setData({ searchKey: '', isSearching: false, selectedCategory: '全部' })
    this.loadMerchants()
  },

  // 搜索商家
  handleSearch(e) {
    var searchKey = e.detail.value || this.data.searchKey
    if (!searchKey || !searchKey.trim()) {
      wx.showToast({ title: '请输入搜索关键词', icon: 'none' })
      return
    }
    var that = this
    this.setData({ searchKey: searchKey, isSearching: true, selectedCategory: '全部' })
    wx.showLoading({ title: '搜索中...' })
    wx.request({
      url: BASE_URL + '/merchant/search',
      method: 'GET',
      data: { keyword: searchKey.trim() },
      header: { 'content-type': 'application/json' },
      success: function(res) {
        wx.hideLoading()
        if (res.data && res.data.code === 200) {
          var merchants = res.data.data || []
          // 为搜索结果添加分类属性
          merchants = merchants.map(function(merchant) {
            if (!merchant.category) {
              merchant.category = that.getMerchantCategory(merchant.name)
            }
            return merchant
          })
          that.setData({ merchants: merchants })
          if (merchants.length === 0) {
            wx.showToast({ title: '未找到相关商家', icon: 'none' })
          } else {
            wx.showToast({ title: '搜索完成', icon: 'success' })
          }
        } else {
          that.handleSearchFallback(searchKey.trim())
        }
      },
      fail: function() {
        wx.hideLoading()
        that.handleSearchFallback(searchKey.trim())
      }
    })
  },

  // 搜索降级处理（从本地数据中搜索）
  handleSearchFallback(keyword) {
    var defaultMerchants = this.getDefaultMerchants()
    var filteredMerchants = defaultMerchants.filter(function(merchant) {
      return merchant.name.toLowerCase().includes(keyword.toLowerCase())
    })
    this.setData({ merchants: filteredMerchants })
    if (filteredMerchants.length === 0) {
      wx.showToast({ title: '未找到相关商家', icon: 'none' })
    } else {
      wx.showToast({ title: '使用本地数据搜索', icon: 'none' })
    }
  },

  // 按分类筛选商家
  navigateToCategory(e) {
    var category = e.currentTarget.dataset.category
    console.log('点击分类:', category.name)
    this.setData({ selectedCategory: category.name, isSearching: false })
    this.filterMerchantsByCategory(category.name)
  },

  // 根据分类筛选商家
  filterMerchantsByCategory(categoryName) {
    console.log('筛选分类:', categoryName)
    var that = this
    wx.showLoading({ title: '加载中...' })
    
    // 尝试使用后端API进行分类筛选
    var useBackend = true
    
    if (useBackend) {
      if (categoryName === '全部') {
        // 获取所有营业中的商家
        wx.request({
          url: BASE_URL + '/merchant/open',
          method: 'GET',
          header: { 'content-type': 'application/json' },
          success: function(res) {
            wx.hideLoading()
            if (res.data && res.data.code === 200) {
              var merchants = res.data.data || []
              // 为后端数据添加分类属性（如果没有）
              merchants = merchants.map(function(merchant) {
                if (!merchant.category) {
                  merchant.category = that.getMerchantCategory(merchant.name)
                }
                return merchant
              })
              that.setData({ merchants: merchants })
              that.showCategoryToast(categoryName, merchants.length)
            } else {
              console.log('后端返回错误，使用本地数据')
              that.filterLocalMerchantsByCategory(categoryName)
            }
          },
          fail: function(err) {
            console.log('请求失败:', err)
            wx.hideLoading()
            that.filterLocalMerchantsByCategory(categoryName)
          }
        })
      } else {
        // 根据分类获取商家
        wx.request({
          url: BASE_URL + '/merchant/category',
          method: 'GET',
          data: { category: categoryName },
          header: { 'content-type': 'application/json' },
          success: function(res) {
            wx.hideLoading()
            if (res.data && res.data.code === 200) {
              var merchants = res.data.data || []
              console.log('后端分类数据:', merchants)
              that.setData({ merchants: merchants })
              that.showCategoryToast(categoryName, merchants.length)
            } else {
              console.log('后端返回错误，使用本地数据')
              that.filterLocalMerchantsByCategory(categoryName)
            }
          },
          fail: function(err) {
            console.log('请求失败:', err)
            wx.hideLoading()
            that.filterLocalMerchantsByCategory(categoryName)
          }
        })
      }
    } else {
      // 直接使用本地数据进行分类筛选
      setTimeout(function() {
        wx.hideLoading()
        that.filterLocalMerchantsByCategory(categoryName)
      }, 500)
    }
  },

  // 使用本地数据进行分类筛选
  filterLocalMerchantsByCategory(categoryName) {
    console.log('使用本地数据筛选分类:', categoryName)
    var defaultMerchants = this.getDefaultMerchants()
    var filteredMerchants = categoryName === '全部' ? defaultMerchants : defaultMerchants.filter(function(merchant) {
      return merchant.category === categoryName
    })
    console.log('本地数据筛选结果:', filteredMerchants.length)
    console.log('筛选结果:', filteredMerchants)
    this.setData({ merchants: filteredMerchants })
    this.showCategoryToast(categoryName, filteredMerchants.length)
  },

  // 显示分类筛选结果提示
  showCategoryToast(categoryName, count) {
    if (count === 0) {
      wx.showToast({ title: '该分类暂无商家', icon: 'none' })
    } else {
      wx.showToast({ title: categoryName + '分类 (' + count + ')', icon: 'success' })
    }
  },

  // 跳转到商家详情
  navigateToMerchant(e) {
    var merchantId = e.currentTarget.dataset.merchantId
    wx.navigateTo({
      url: '/pages/merchant/merchant?id=' + merchantId
    })
  }
})
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
