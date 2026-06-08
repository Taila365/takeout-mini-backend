<<<<<<< HEAD
"use strict";function e(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}function t(e){let n="";if(y(e))n=e;else if(h(e))for(let o=0;o<e.length;o++){const r=t(e[o]);r&&(n+=r+" ")}else if(_(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const n=(e,t)=>t&&t.__v_isRef?n(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()]}:!_(t)||h(t)||O(t)?t:String(t),o=Object.freeze({}),r=Object.freeze([]),i=()=>{},s=()=>!1,c=/^on[^a-z]/,a=e=>c.test(e),u=e=>e.startsWith("onUpdate:"),l=Object.assign,p=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(e,t)=>f.call(e,t),h=Array.isArray,g=e=>"[object Map]"===$(e),m=e=>"[object Set]"===$(e),v=e=>"function"==typeof e,y=e=>"string"==typeof e,b=e=>"symbol"==typeof e,_=e=>null!==e&&"object"==typeof e,x=e=>_(e)&&v(e.then)&&v(e.catch),w=Object.prototype.toString,$=e=>w.call(e),k=e=>$(e).slice(8,-1),O=e=>"[object Object]"===$(e),S=e=>y(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,C=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),j=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},I=/-(\w)/g,A=j((e=>e.replace(I,((e,t)=>t?t.toUpperCase():"")))),E=/\B([A-Z])/g,T=j((e=>e.replace(E,"-$1").toLowerCase())),R=j((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=j((e=>e?`on${R(e)}`:"")),N=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},L=e=>{const t=parseFloat(e);return isNaN(t)?e:t},D=/:/g;function H(e,t=null){let n;return(...o)=>(e&&(n=e.apply(t,o),e=null),n)}function B(e,t){if(!y(t))return;const n=(t=t.replace(/\[(\d+)\]/g,".$1")).split(".");let o=n[0];return e||(e={}),1===n.length?e[o]:B(e[o],n.slice(1).join("."))}function U(e){let t={};return O(e)&&Object.keys(e).sort().forEach((n=>{const o=n;t[o]=e[o]})),Object.keys(t)?t:e}const z=encodeURIComponent;function W(e,t=z){const n=e?Object.keys(e).map((n=>{let o=e[n];return void 0===typeof o||null===o?o="":O(o)&&(o=JSON.stringify(o)),t(n)+"="+t(o)})).filter((e=>e.length>0)).join("&"):null;return n?`?${n}`:""}const F=["onInit","onLoad","onShow","onHide","onUnload","onBackPress","onPageScroll","onTabItemTap","onReachBottom","onPullDownRefresh","onShareTimeline","onShareAppMessage","onAddToFavorites","onSaveExitState","onNavigationBarButtonTap","onNavigationBarSearchInputClicked","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputFocusChanged"];const q=["onShow","onHide","onLaunch","onError","onThemeChange","onPageNotFound","onUnhandledRejection","onInit","onLoad","onReady","onUnload","onResize","onBackPress","onPageScroll","onTabItemTap","onReachBottom","onPullDownRefresh","onShareTimeline","onAddToFavorites","onShareAppMessage","onSaveExitState","onNavigationBarButtonTap","onNavigationBarSearchInputClicked","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputFocusChanged"],K=(()=>({onPageScroll:1,onShareAppMessage:2,onShareTimeline:4}))();let J;const G=[];const Z=function(){};Z.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,s=o.length;i<s;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}};var Q=Z;function Y(e,t){if(!e)return;if(e=e.trim().replace(/_/g,"-"),t&&t[e])return e;if("chinese"===(e=e.toLowerCase()))return"zh-Hans";if(0===e.indexOf("zh"))return e.indexOf("-hans")>-1?"zh-Hans":e.indexOf("-hant")>-1?"zh-Hant":(n=e,["-tw","-hk","-mo","-cht"].find((e=>-1!==n.indexOf(e)))?"zh-Hant":"zh-Hans");var n;const o=function(e,t){return t.find((t=>0===e.indexOf(t)))}(e,["en","fr","es"]);return o||void 0}function X(e,t){console.warn(`${e}: ${t}`)}function ee(e,t,n,o){o||(o=X);for(const r in n){const i=te(r,t[r],n[r],!d(t,r));y(i)&&o(e,i)}}function te(e,t,n,o){O(n)||(n={type:n});const{type:r,required:i,validator:s}=n;if(i&&o)return'Missing required args: "'+e+'"';if(null!=t||i){if(null!=r){let n=!1;const o=h(r)?r:[r],i=[];for(let e=0;e<o.length&&!n;e++){const{valid:r,expectedType:s}=oe(t,o[e]);i.push(s||""),n=r}if(!n)return function(e,t,n){let o=`Invalid args: type check failed for args "${e}". Expected ${n.map(R).join(", ")}`;const r=n[0],i=k(t),s=re(t,r),c=re(t,i);1===n.length&&ie(r)&&!function(...e){return e.some((e=>"boolean"===e.toLowerCase()))}(r,i)&&(o+=` with value ${s}`);o+=`, got ${i} `,ie(i)&&(o+=`with value ${c}.`);return o}(e,t,i)}return s?s(t):void 0}}const ne=e("String,Number,Boolean,Function,Symbol");function oe(e,t){let n;const o=function(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}(t);if(ne(o)){const r=typeof e;n=r===o.toLowerCase(),n||"object"!==r||(n=e instanceof t)}else n="Object"===o?_(e):"Array"===o?h(e):e instanceof t;return{valid:n,expectedType:o}}function re(e,t){return"String"===t?`"${e}"`:"Number"===t?`${Number(e)}`:`${e}`}function ie(e){return["string","number","boolean"].some((t=>e.toLowerCase()===t))}function se(e){return function(){try{return e.apply(e,arguments)}catch(t){console.error(t)}}}let ce=1;const ae={};function ue(e,t,n){if("number"==typeof e){const o=ae[e];if(o)return o.keepAlive||delete ae[e],o.callback(t,n)}return t}const le="success",pe="fail",fe="complete";function de(e,t={},{beforeAll:n,beforeSuccess:o}={}){O(t)||(t={});const{success:r,fail:i,complete:s}=function(e){const t={};for(const n in e){const o=e[n];v(o)&&(t[n]=se(o),delete e[n])}return t}(t),c=v(r),a=v(i),u=v(s),l=ce++;return function(e,t,n,o=!1){ae[e]={name:t,keepAlive:o,callback:n}}(l,e,(l=>{(l=l||{}).errMsg=function(e,t){return e&&-1!==e.indexOf(":fail")?t+e.substring(e.indexOf(":fail")):t+":ok"}(l.errMsg,e),v(n)&&n(l),l.errMsg===e+":ok"?(v(o)&&o(l,t),c&&r(l)):a&&i(l),u&&s(l)})),l}const he="success",ge="fail",me="complete",ve={},ye={};function be(e){return function(t){return e(t)||t}}function _e(e,t){let n=!1;for(let o=0;o<e.length;o++){const r=e[o];if(n)n=Promise.resolve(be(r));else{const e=r(t);if(x(e)&&(n=Promise.resolve(e)),!1===e)return{then(){},catch(){}}}}return n||{then:e=>e(t),catch(){}}}function xe(e,t={}){return[he,ge,me].forEach((n=>{const o=e[n];if(!h(o))return;const r=t[n];t[n]=function(e){_e(o,e).then((e=>v(r)&&r(e)||e))}})),t}function we(e,t){const n=[];h(ve.returnValue)&&n.push(...ve.returnValue);const o=ye[e];return o&&h(o.returnValue)&&n.push(...o.returnValue),n.forEach((e=>{t=e(t)||t})),t}function $e(e,t,n,o){const r=function(e){const t=Object.create(null);Object.keys(ve).forEach((e=>{"returnValue"!==e&&(t[e]=ve[e].slice())}));const n=ye[e];return n&&Object.keys(n).forEach((e=>{"returnValue"!==e&&(t[e]=(t[e]||[]).concat(n[e]))})),t}(e);if(r&&Object.keys(r).length){if(h(r.invoke)){return _e(r.invoke,n).then((e=>t(xe(r,e),...o)))}return t(xe(r,n),...o)}return t(n,...o)}function ke(e,t){return(n={},...o)=>function(e){return!(!O(e)||![le,pe,fe].find((t=>v(e[t]))))}(n)?we(e,$e(e,t,n,o)):we(e,new Promise(((r,i)=>{$e(e,t,l(n,{success:r,fail:i}),o)})))}function Oe(e,t,n,o){return ue(e,l({errMsg:t+":fail"+(n?" "+n:"")},o))}function Se(e,t,n,o){if(function(e,t,n,o){if(!n)return;if(!h(n))return ee(e,t[0]||Object.create(null),n,o);const r=n.length,i=t.length;for(let s=0;s<r;s++){const r=n[s],c=Object.create(null);i>s&&(c[r.name]=t[s]),ee(e,c,{[r.name]:r},o)}}(e,t,n),o&&o.beforeInvoke){const e=o.beforeInvoke(t);if(y(e))return e}const r=function(e,t){const n=e[0];if(!t||!O(t.formatArgs)&&O(n))return;const o=t.formatArgs,r=Object.keys(o);for(let i=0;i<r.length;i++){const t=r[i],s=o[t];if(v(s)){const o=s(e[0][t],n);if(y(o))return o}else d(n,t)||(n[t]=s)}}(t,o);if(r)return r}function Ce(e,t,n,o){return r=>{const i=de(e,r,o),s=Se(e,[r],n,o);return s?Oe(i,e,s):t(r,{resolve:t=>function(e,t,n){return ue(e,l(n||{},{errMsg:t+":ok"}))}(i,e,t),reject:(t,n)=>Oe(i,e,function(e){return!e||y(e)?e:e.stack?(console.error(e.message+"\n"+e.stack),e.message):e}(t),n)})}}function Pe(e,t,n,o){return function(e,t,n,o){return(...r)=>{const i=Se(e,r,n,o);if(i)throw new Error(i);return t.apply(null,r)}}(e,t,n,o)}let je=!1,Ie=0,Ae=0;function Ee(){const{platform:e,pixelRatio:t,windowWidth:n}=wx.getSystemInfoSync();Ie=n,Ae=t,je="ios"===e}const Te=Pe("upx2px",((e,t)=>{if(0===Ie&&Ee(),0===(e=Number(e)))return 0;let n=e/750*(t||Ie);return n<0&&(n=-n),n=Math.floor(n+1e-4),0===n&&(n=1!==Ae&&je?.5:1),e<0?-n:n}),[{name:"upx",type:[Number,String],required:!0}]),Re=[{name:"method",type:[String,Object],required:!0}],Me=Re;function Ne(e,t){Object.keys(t).forEach((n=>{v(t[n])&&(e[n]=function(e,t){const n=t?e?e.concat(t):h(t)?t:[t]:e;return n?function(e){const t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}(e[n],t[n]))}))}function Ve(e,t){e&&t&&Object.keys(t).forEach((n=>{const o=e[n],r=t[n];h(o)&&v(r)&&p(o,r)}))}const Le=Pe("addInterceptor",((e,t)=>{y(e)&&O(t)?Ne(ye[e]||(ye[e]={}),t):O(e)&&Ne(ve,e)}),Re),De=Pe("removeInterceptor",((e,t)=>{y(e)?O(t)?Ve(ye[e],t):delete ye[e]:O(e)&&Ve(ve,e)}),Me),He=[{name:"event",type:String,required:!0},{name:"callback",type:Function,required:!0}],Be=He,Ue=[{name:"event",type:[String,Array]},{name:"callback",type:Function}],ze=[{name:"event",type:String,required:!0}],We=new Q,Fe=Pe("$on",((e,t)=>(We.on(e,t),()=>We.off(e,t))),He),qe=Pe("$once",((e,t)=>(We.once(e,t),()=>We.off(e,t))),Be),Ke=Pe("$off",((e,t)=>{e?(h(e)||(e=[e]),e.forEach((e=>We.off(e,t)))):We.e={}}),Ue),Je=Pe("$emit",((e,...t)=>{We.emit(e,...t)}),ze);let Ge,Ze,Qe;function Ye(e){try{return JSON.parse(e)}catch(t){}return e}const Xe=[];function et(e,t){Xe.forEach((n=>{n(e,t)})),Xe.length=0}const tt=ke(nt="getPushClientId",function(e,t,n,o){return Ce(e,t,n,o)}(nt,((e,{resolve:t,reject:n})=>{Promise.resolve().then((()=>{void 0===Qe&&(Qe=!1,Ge="",Ze="uniPush is not enabled"),Xe.push(((e,o)=>{e?t({cid:e}):n(o)})),void 0!==Ge&&et(Ge,Ze)}))}),ot,rt));var nt,ot,rt;const it=[],st=/^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/,ct=/^create|Manager$/,at=["createBLEConnection"],ut=["createBLEConnection"],lt=/^on|^off/;function pt(e){return ct.test(e)&&-1===at.indexOf(e)}function ft(e){return st.test(e)&&-1===ut.indexOf(e)}function dt(e){return!(pt(e)||ft(e)||function(e){return lt.test(e)&&"onPush"!==e}(e))}function ht(e,t){return dt(e)&&v(t)?function(n={},...o){return v(n.success)||v(n.fail)||v(n.complete)?we(e,$e(e,t,n,o)):we(e,new Promise(((r,i)=>{$e(e,t,l({},n,{success:r,fail:i}),o)})))}:t}Promise.prototype.finally||(Promise.prototype.finally=function(e){const t=this.constructor;return this.then((n=>t.resolve(e&&e()).then((()=>n))),(n=>t.resolve(e&&e()).then((()=>{throw n}))))});const gt=["success","fail","cancel","complete"];const mt=()=>{const e=getApp({allowDefault:!0});return e&&e.$vm?e.$vm.$locale:Y(wx.getSystemInfoSync().language)||"en"},vt=[];"undefined"!=typeof global&&(global.getLocale=mt);const yt={$on:Fe,$off:Ke,$once:qe,$emit:Je,upx2px:Te,interceptors:{},addInterceptor:Le,removeInterceptor:De,onCreateVueApp:function(e){if(J)return e(J);G.push(e)},invokeCreateVueAppHook:function(e){J=e,G.forEach((t=>t(e)))},getLocale:mt,setLocale:e=>{const t=getApp();if(!t)return!1;return t.$vm.$locale!==e&&(t.$vm.$locale=e,vt.forEach((t=>t({locale:e}))),!0)},onLocaleChange:e=>{-1===vt.indexOf(e)&&vt.push(e)},getPushClientId:tt,onPushMessage:e=>{-1===it.indexOf(e)&&it.push(e)},offPushMessage:e=>{if(e){const t=it.indexOf(e);t>-1&&it.splice(t,1)}else it.length=0},invokePushCallback:function(e){if("enabled"===e.type)Qe=!0;else if("clientId"===e.type)Ge=e.cid,Ze=e.errMsg,et(Ge,e.errMsg);else if("pushMsg"===e.type){const t={type:"receive",data:Ye(e.message)};for(let e=0;e<it.length;e++){if((0,it[e])(t),t.stopped)break}}else"click"===e.type&&it.forEach((t=>{t({type:"click",data:Ye(e.message)})}))}};let bt;function _t(e=wx){return function(t,n){bt=bt||e.getStorageSync("__DC_STAT_UUID"),bt||(bt=Date.now()+""+Math.floor(1e7*Math.random()),wx.setStorage({key:"__DC_STAT_UUID",data:bt})),n.deviceId=bt}}function xt(e,t){if(e.safeArea){const n=e.safeArea;t.safeAreaInsets={top:n.top,left:n.left,right:e.windowWidth-n.right,bottom:e.screenHeight-n.bottom}}}function wt(e,t){let n=e.deviceType||"phone";{const e={ipad:"pad",windows:"pc",mac:"pc"},o=Object.keys(e),r=t.toLocaleLowerCase();for(let t=0;t<o.length;t++){const i=o[t];if(-1!==r.indexOf(i)){n=e[i];break}}}return n}function $t(e){let t=e;return t&&(t=t.toLocaleLowerCase()),t}function kt(e){return mt?mt():e}function Ot(e){let t=e.hostName||"WeChat";return e.environment?t=e.environment:e.host&&e.host.env&&(t=e.host.env),t}const St={returnValue:(e,t)=>{xt(e,t),_t()(e,t),function(e,t){const{brand:n="",model:o="",system:r="",language:i="",theme:s,version:c,platform:a,fontSizeSetting:u,SDKVersion:p,pixelRatio:f,deviceOrientation:d}=e;let h="",g="";h=r.split(" ")[0]||"",g=r.split(" ")[1]||"";let m=c,v=wt(e,o),y=$t(n),b=Ot(e),_=d,x=f,w=p;const $=i.replace(/_/g,"-"),k={appId:"wx70a108ff8fd5fcd3",appName:"外卖小程序",appVersion:"1.0.0",appVersionCode:"100",appLanguage:kt($),uniCompileVersion:"3.6.4",uniRuntimeVersion:"3.6.4",uniPlatform:"mp-weixin",deviceBrand:y,deviceModel:o,deviceType:v,devicePixelRatio:x,deviceOrientation:_,osName:h.toLocaleLowerCase(),osVersion:g,hostTheme:s,hostVersion:m,hostLanguage:$,hostName:b,hostSDKVersion:w,hostFontSizeSetting:u,windowTop:0,windowBottom:0,osLanguage:void 0,osTheme:void 0,ua:void 0,hostPackageName:void 0,browserName:void 0,browserVersion:void 0};l(t,k)}(e,t)}},Ct=St,Pt={args(e,t){let n=parseInt(e.current);if(isNaN(n))return;const o=e.urls;if(!h(o))return;const r=o.length;return r?(n<0?n=0:n>=r&&(n=r-1),n>0?(t.current=o[n],t.urls=o.filter(((e,t)=>!(t<n)||e!==o[n]))):t.current=o[0],{indicator:!1,loop:!1}):void 0}},jt={args(e,t){t.alertText=e.title}},It={returnValue:(e,t)=>{const{brand:n,model:o}=e;let r=wt(e,o),i=$t(n);_t()(e,t),t=U(l(t,{deviceType:r,deviceBrand:i,deviceModel:o}))}},At={returnValue:(e,t)=>{const{version:n,language:o,SDKVersion:r,theme:i}=e;let s=Ot(e),c=o.replace(/_/g,"-");t=U(l(t,{hostVersion:n,hostLanguage:c,hostName:s,hostSDKVersion:r,hostTheme:i,appId:"wx70a108ff8fd5fcd3",appName:"外卖小程序",appVersion:"1.0.0",appVersionCode:"100",appLanguage:kt(c)}))}},Et={returnValue:(e,t)=>{xt(e,t),t=U(l(t,{windowTop:0,windowBottom:0}))}},Tt=["__route__","__wxExparserNodeId__","__wxWebviewId__"],Rt=(Mt={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]},function({service:e,success:t,fail:n,complete:o}){let r;Mt[e]?(r={errMsg:"getProvider:ok",service:e,provider:Mt[e]},v(t)&&t(r)):(r={errMsg:"getProvider:fail:服务["+e+"]不存在"},v(n)&&n(r)),v(o)&&o(r)});var Mt;var Nt=Object.freeze({__proto__:null,getProvider:Rt,createSelectorQuery:function(){const e=wx.createSelectorQuery(),t=e.in;return e.in=function(e){return t.call(this,function(e){const t=Object.create(null);return Tt.forEach((n=>{t[n]=e[n]})),t}(e))},e}}),Vt=function(e,t){const n=function(e){function t(e,t,n){return function(r){return t(o(e,r,n))}}function n(e,n,o={},r={},i=!1){if(O(n)){const s=!0===i?n:{};v(o)&&(o=o(n,s)||{});for(const c in n)if(d(o,c)){let t=o[c];v(t)&&(t=t(n[c],n,s)),t?y(t)?s[t]=n[c]:O(t)&&(s[t.name?t.name:c]=t.value):console.warn(`微信小程序 ${e} 暂不支持 ${c}`)}else if(-1!==gt.indexOf(c)){const o=n[c];v(o)&&(s[c]=t(e,o,r))}else i||d(s,c)||(s[c]=n[c]);return s}return v(n)&&(n=t(e,n,r)),n}function o(t,o,r,i=!1){return v(e.returnValue)&&(o=e.returnValue(t,o)),n(t,o,r,{},i)}return function(t,r){if(!d(e,t))return r;const i=e[t];return i?function(e,r){let s=i;v(i)&&(s=i(e));const c=[e=n(t,e,s.args,s.returnValue)];void 0!==r&&c.push(r);const a=wx[s.name||t].apply(wx,c);return ft(t)?o(t,a,s.returnValue,pt(t)):a}:function(){console.error(`微信小程序 暂不支持${t}`)}}}(t);return new Proxy({},{get:(t,o)=>d(t,o)?t[o]:d(e,o)?ht(o,e[o]):d(yt,o)?ht(o,yt[o]):ht(o,n(o,wx[o]))})}(Nt,Object.freeze({__proto__:null,redirectTo:{},previewImage:Pt,getSystemInfo:St,getSystemInfoSync:Ct,showActionSheet:jt,getDeviceInfo:It,getAppBaseInfo:At,getWindowInfo:Et,getAppAuthorizeSetting:{returnValue:function(e,t){const{locationReducedAccuracy:n}=e;t.locationAccuracy="unsupported",!0===n?t.locationAccuracy="reduced":!1===n&&(t.locationAccuracy="full")}}}));function Lt(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Dt;class Ht{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Dt&&(this.parent=Dt,this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Dt;try{return Dt=this,e()}finally{Dt=t}}else Lt("cannot run an inactive effect scope.")}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const Bt=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ut=e=>(e.w&qt)>0,zt=e=>(e.n&qt)>0,Wt=new WeakMap;let Ft=0,qt=1;let Kt;const Jt=Symbol("iterate"),Gt=Symbol("Map key iterate");class Zt{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=Dt){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=Kt,t=Yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,Yt=!0,qt=1<<++Ft,Ft<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt})(this):Qt(this),this.fn()}finally{Ft<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];Ut(r)&&!zt(r)?r.delete(e):t[n++]=r,r.w&=~qt,r.n&=~qt}t.length=n}})(this),qt=1<<--Ft,Kt=this.parent,Yt=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(Qt(this),this.onStop&&this.onStop(),this.active=!1)}}function Qt(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Yt=!0;const Xt=[];function en(){Xt.push(Yt),Yt=!1}function tn(){const e=Xt.pop();Yt=void 0===e||e}function nn(e,t,n){if(Yt&&Kt){let o=Wt.get(e);o||Wt.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Bt());on(r,{effect:Kt,target:e,type:t,key:n})}}function on(e,t){let n=!1;Ft<=30?zt(e)||(e.n|=qt,n=!Ut(e)):n=!e.has(Kt),n&&(e.add(Kt),Kt.deps.push(e),Kt.onTrack&&Kt.onTrack(Object.assign({effect:Kt},t)))}function rn(e,t,n,o,r,i){const s=Wt.get(e);if(!s)return;let c=[];if("clear"===t)c=[...s.values()];else if("length"===n&&h(e))s.forEach(((e,t)=>{("length"===t||t>=o)&&c.push(e)}));else switch(void 0!==n&&c.push(s.get(n)),t){case"add":h(e)?S(n)&&c.push(s.get("length")):(c.push(s.get(Jt)),g(e)&&c.push(s.get(Gt)));break;case"delete":h(e)||(c.push(s.get(Jt)),g(e)&&c.push(s.get(Gt)));break;case"set":g(e)&&c.push(s.get(Jt))}const a={target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:i};if(1===c.length)c[0]&&sn(c[0],a);else{const e=[];for(const t of c)t&&e.push(...t);sn(Bt(e),a)}}function sn(e,t){const n=h(e)?e:[...e];for(const o of n)o.computed&&cn(o,t);for(const o of n)o.computed||cn(o,t)}function cn(e,t){(e!==Kt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(l({effect:e},t)),e.scheduler?e.scheduler():e.run())}const an=e("__proto__,__v_isRef,__isVue"),un=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(b)),ln=mn(),pn=mn(!1,!0),fn=mn(!0),dn=mn(!0,!0),hn=gn();function gn(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=no(this);for(let t=0,r=this.length;t<r;t++)nn(n,"get",t+"");const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(no)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){en();const n=no(this)[t].apply(this,e);return tn(),n}})),e}function mn(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_isShallow"===o)return t;if("__v_raw"===o&&r===(e?t?Jn:Kn:t?qn:Fn).get(n))return n;const i=h(n);if(!e&&i&&d(hn,o))return Reflect.get(hn,o,r);const s=Reflect.get(n,o,r);return(b(o)?un.has(o):an(o))?s:(e||nn(n,"get",o),t?s:ao(s)?i&&S(o)?s:s.value:_(s)?e?Zn(s):Gn(s):s)}}function vn(e=!1){return function(t,n,o,r){let i=t[n];if(eo(i)&&ao(i)&&!ao(o))return!1;if(!e&&(to(o)||eo(o)||(i=no(i),o=no(o)),!h(t)&&ao(i)&&!ao(o)))return i.value=o,!0;const s=h(t)&&S(n)?Number(n)<t.length:d(t,n),c=Reflect.set(t,n,o,r);return t===no(r)&&(s?N(o,i)&&rn(t,"set",n,o,i):rn(t,"add",n,o)),c}}const yn={get:ln,set:vn(),deleteProperty:function(e,t){const n=d(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&rn(e,"delete",t,void 0,o),r},has:function(e,t){const n=Reflect.has(e,t);return b(t)&&un.has(t)||nn(e,"has",t),n},ownKeys:function(e){return nn(e,"iterate",h(e)?"length":Jt),Reflect.ownKeys(e)}},bn={get:fn,set:(e,t)=>(Lt(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0),deleteProperty:(e,t)=>(Lt(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0)},_n=l({},yn,{get:pn,set:vn(!0)}),xn=l({},bn,{get:dn}),wn=e=>e,$n=e=>Reflect.getPrototypeOf(e);function kn(e,t,n=!1,o=!1){const r=no(e=e.__v_raw),i=no(t);n||(t!==i&&nn(r,"get",t),nn(r,"get",i));const{has:s}=$n(r),c=o?wn:n?io:ro;return s.call(r,t)?c(e.get(t)):s.call(r,i)?c(e.get(i)):void(e!==r&&e.get(t))}function On(e,t=!1){const n=this.__v_raw,o=no(n),r=no(e);return t||(e!==r&&nn(o,"has",e),nn(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Sn(e,t=!1){return e=e.__v_raw,!t&&nn(no(e),"iterate",Jt),Reflect.get(e,"size",e)}function Cn(e){e=no(e);const t=no(this);return $n(t).has.call(t,e)||(t.add(e),rn(t,"add",e,e)),this}function Pn(e,t){t=no(t);const n=no(this),{has:o,get:r}=$n(n);let i=o.call(n,e);i?Wn(n,o,e):(e=no(e),i=o.call(n,e));const s=r.call(n,e);return n.set(e,t),i?N(t,s)&&rn(n,"set",e,t,s):rn(n,"add",e,t),this}function jn(e){const t=no(this),{has:n,get:o}=$n(t);let r=n.call(t,e);r?Wn(t,n,e):(e=no(e),r=n.call(t,e));const i=o?o.call(t,e):void 0,s=t.delete(e);return r&&rn(t,"delete",e,void 0,i),s}function In(){const e=no(this),t=0!==e.size,n=g(e)?new Map(e):new Set(e),o=e.clear();return t&&rn(e,"clear",void 0,void 0,n),o}function An(e,t){return function(n,o){const r=this,i=r.__v_raw,s=no(i),c=t?wn:e?io:ro;return!e&&nn(s,"iterate",Jt),i.forEach(((e,t)=>n.call(o,c(e),c(t),r)))}}function En(e,t,n){return function(...o){const r=this.__v_raw,i=no(r),s=g(i),c="entries"===e||e===Symbol.iterator&&s,a="keys"===e&&s,u=r[e](...o),l=n?wn:t?io:ro;return!t&&nn(i,"iterate",a?Gt:Jt),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[l(e[0]),l(e[1])]:l(e),done:t}},[Symbol.iterator](){return this}}}}function Tn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${R(e)} operation ${n}failed: target is readonly.`,no(this))}return"delete"!==e&&this}}function Rn(){const e={get(e){return kn(this,e)},get size(){return Sn(this)},has:On,add:Cn,set:Pn,delete:jn,clear:In,forEach:An(!1,!1)},t={get(e){return kn(this,e,!1,!0)},get size(){return Sn(this)},has:On,add:Cn,set:Pn,delete:jn,clear:In,forEach:An(!1,!0)},n={get(e){return kn(this,e,!0)},get size(){return Sn(this,!0)},has(e){return On.call(this,e,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:An(!0,!1)},o={get(e){return kn(this,e,!0,!0)},get size(){return Sn(this,!0)},has(e){return On.call(this,e,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:An(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=En(r,!1,!1),n[r]=En(r,!0,!1),t[r]=En(r,!1,!0),o[r]=En(r,!0,!0)})),[e,n,t,o]}const[Mn,Nn,Vn,Ln]=Rn();function Dn(e,t){const n=t?e?Ln:Vn:e?Nn:Mn;return(t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(d(n,o)&&o in t?n:t,o,r)}const Hn={get:Dn(!1,!1)},Bn={get:Dn(!1,!0)},Un={get:Dn(!0,!1)},zn={get:Dn(!0,!0)};function Wn(e,t,n){const o=no(n);if(o!==n&&t.call(e,o)){const t=k(e);console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Fn=new WeakMap,qn=new WeakMap,Kn=new WeakMap,Jn=new WeakMap;function Gn(e){return eo(e)?e:Yn(e,!1,yn,Hn,Fn)}function Zn(e){return Yn(e,!0,bn,Un,Kn)}function Qn(e){return Yn(e,!0,xn,zn,Jn)}function Yn(e,t,n,o,r){if(!_(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const s=(c=e).__v_skip||!Object.isExtensible(c)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(k(c));var c;if(0===s)return e;const a=new Proxy(e,2===s?o:n);return r.set(e,a),a}function Xn(e){return eo(e)?Xn(e.__v_raw):!(!e||!e.__v_isReactive)}function eo(e){return!(!e||!e.__v_isReadonly)}function to(e){return!(!e||!e.__v_isShallow)}function no(e){const t=e&&e.__v_raw;return t?no(t):e}function oo(e){return((e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})})(e,"__v_skip",!0),e}const ro=e=>_(e)?Gn(e):e,io=e=>_(e)?Zn(e):e;function so(e){Yt&&Kt&&on((e=no(e)).dep||(e.dep=Bt()),{target:e,type:"get",key:"value"})}function co(e,t){(e=no(e)).dep&&sn(e.dep,{target:e,type:"set",key:"value",newValue:t})}function ao(e){return!(!e||!0!==e.__v_isRef)}function uo(e){return function(e,t){if(ao(e))return e;return new lo(e,t)}(e,!1)}class lo{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:no(e),this._value=t?e:ro(e)}get value(){return so(this),this._value}set value(e){const t=this.__v_isShallow||to(e)||eo(e);e=t?e:no(e),N(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ro(e),co(this,e))}}function po(e){return ao(e)?e.value:e}const fo={get:(e,t,n)=>po(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return ao(r)&&!ao(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function ho(e){return Xn(e)?e:new Proxy(e,fo)}var go;class mo{constructor(e,t,n,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[go]=!1,this._dirty=!0,this.effect=new Zt(e,(()=>{this._dirty||(this._dirty=!0,co(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const e=no(this);return so(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}go="__v_isReadonly";const vo=[];function yo(e){vo.push(e)}function bo(){vo.pop()}function _o(e,...t){en();const n=vo.length?vo[vo.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=vo[vo.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}();if(o)ko(o,n,11,[e+t.join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${vi(n,e.type)}>`)).join("\n"),r]);else{const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=!!e.component&&null==e.component.parent,r=` at <${vi(e.component,e.type,o)}`,i=">"+n;return e.props?[r,...xo(e.props),i]:[r+i]}(e))})),t}(r)),console.warn(...n)}tn()}function xo(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...wo(n,e[n]))})),n.length>3&&t.push(" ..."),t}function wo(e,t,n){return y(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:ao(t)?(t=wo(e,no(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):v(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=no(t),n?t:[`${e}=`,t])}const $o={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ko(e,t,n,o){let r;try{r=o?e(...o):e()}catch(i){So(i,t,n)}return r}function Oo(e,t,n,o){if(v(e)){const r=ko(e,t,n,o);return r&&x(r)&&r.catch((e=>{So(e,t,n)})),r}const r=[];for(let i=0;i<e.length;i++)r.push(Oo(e[i],t,n,o));return r}function So(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,i=$o[n]||n;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,i))return;o=o.parent}const s=t.appContext.config.errorHandler;if(s)return void ko(s,null,10,[e,r,i])}!function(e,t,n,o=!0){{const o=$o[t]||t;n&&yo(n),_o("Unhandled error"+(o?` during execution of ${o}`:"")),n&&bo(),console.error(e)}}(e,n,r,o)}let Co=!1,Po=!1;const jo=[];let Io=0;const Ao=[];let Eo=null,To=0;const Ro=Promise.resolve();let Mo=null;function No(e){const t=Mo||Ro;return e?t.then(this?e.bind(this):e):t}function Vo(e){jo.length&&jo.includes(e,Co&&e.allowRecurse?Io+1:Io)||(null==e.id?jo.push(e):jo.splice(function(e){let t=Io+1,n=jo.length;for(;t<n;){const o=t+n>>>1;Bo(jo[o])<e?t=o+1:n=o}return t}(e.id),0,e),Lo())}function Lo(){Co||Po||(Po=!0,Mo=Ro.then(zo))}function Do(e){h(e)?Ao.push(...e):Eo&&Eo.includes(e,e.allowRecurse?To+1:To)||Ao.push(e),Lo()}function Ho(e,t=(Co?Io+1:0)){for(e=e||new Map;t<jo.length;t++){const n=jo[t];if(n&&n.pre){if(Wo(e,n))continue;jo.splice(t,1),t--,n()}}}const Bo=e=>null==e.id?1/0:e.id,Uo=(e,t)=>{const n=Bo(e)-Bo(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function zo(e){Po=!1,Co=!0,e=e||new Map,jo.sort(Uo);const t=t=>Wo(e,t);try{for(Io=0;Io<jo.length;Io++){const e=jo[Io];if(e&&!1!==e.active){if(t(e))continue;ko(e,null,14)}}}finally{Io=0,jo.length=0,function(e){if(Ao.length){const t=[...new Set(Ao)];if(Ao.length=0,Eo)return void Eo.push(...t);for(Eo=t,e=e||new Map,Eo.sort(((e,t)=>Bo(e)-Bo(t))),To=0;To<Eo.length;To++)Wo(e,Eo[To])||Eo[To]();Eo=null,To=0}}(e),Co=!1,Mo=null,(jo.length||Ao.length)&&zo(e)}}function Wo(e,t){if(e.has(t)){const n=e.get(t);if(n>100){const e=t.ownerInstance,n=e&&mi(e.type);return _o(`Maximum recursive updates exceeded${n?` in component <${n}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}e.set(t,n+1)}else e.set(t,1)}function Fo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o;{const{emitsOptions:o,propsOptions:[r]}=e;if(o)if(t in o){const e=o[t];if(v(e)){e(...n)||_o(`Invalid event arguments: event validation failed for event "${t}".`)}}else r&&M(t)in r||_o(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${M(t)}" prop.`)}let i=n;const s=t.startsWith("update:"),c=s&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||o;s&&(i=n.map((e=>e.trim()))),t&&(i=n.map(L))}e.appContext.app;{const n=t.toLowerCase();n!==t&&r[M(n)]&&_o(`Event "${n}" is emitted in component ${vi(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${T(t)}" instead of "${t}".`)}let a,u=r[a=M(t)]||r[a=M(A(t))];!u&&s&&(u=r[a=M(T(t))]),u&&Oo(u,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Oo(l,e,6,i)}}function qo(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(void 0!==r)return r;const i=e.emits;let s={},c=!1;if(!v(e)){const o=e=>{const n=qo(e,t,!0);n&&(c=!0,l(s,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return i||c?(h(i)?i.forEach((e=>s[e]=null)):l(s,i),_(e)&&o.set(e,s),s):(_(e)&&o.set(e,null),null)}function Ko(e,t){return!(!e||!a(t))&&(t=t.slice(2).replace(/Once$/,""),d(e,t[0].toLowerCase()+t.slice(1))||d(e,T(t))||d(e,t))}let Jo=null;function Go(e){const t=Jo;return Jo=e,e&&e.type.__scopeId,t}function Zo(e,t,n=!1){const o=oi||Jo;if(o){const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&v(t)?t.call(o.proxy):t;_o(`injection "${String(e)}" not found.`)}else _o("inject() can only be used inside setup() or functional components.")}const Qo={};function Yo(e,t,n){return v(t)||_o("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Xo(e,t,n)}function Xo(e,t,{immediate:n,deep:r,flush:s,onTrack:c,onTrigger:a}=o){t||(void 0!==n&&_o('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==r&&_o('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=e=>{_o("Invalid watch source: ",e,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=oi;let f,d,g=!1,m=!1;if(ao(e)?(f=()=>e.value,g=to(e)):Xn(e)?(f=()=>e,r=!0):h(e)?(m=!0,g=e.some((e=>Xn(e)||to(e))),f=()=>e.map((e=>ao(e)?e.value:Xn(e)?nr(e):v(e)?ko(e,l,2):void u(e)))):v(e)?f=t?()=>ko(e,l,2):()=>{if(!l||!l.isUnmounted)return d&&d(),Oo(e,l,3,[y])}:(f=i,u(e)),t&&r){const e=f;f=()=>nr(e())}let y=e=>{d=w.onStop=()=>{ko(e,l,4)}},b=m?[]:Qo;const _=()=>{if(w.active)if(t){const e=w.run();(r||g||(m?e.some(((e,t)=>N(e,b[t]))):N(e,b)))&&(d&&d(),Oo(t,l,3,[e,b===Qo?void 0:b,y]),b=e)}else w.run()};let x;_.allowRecurse=!!t,"sync"===s?x=_:"post"===s?x=()=>Yr(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),x=()=>Vo(_));const w=new Zt(f,x);return w.onTrack=c,w.onTrigger=a,t?n?_():b=w.run():"post"===s?Yr(w.run.bind(w),l&&l.suspense):w.run(),()=>{w.stop(),l&&l.scope&&p(l.scope.effects,w)}}function er(e,t,n){const o=this.proxy,r=y(e)?e.includes(".")?tr(o,e):()=>o[e]:e.bind(o,o);let i;v(t)?i=t:(i=t.handler,n=t);const s=oi;ii(this);const c=Xo(r,i.bind(o),n);return s?ii(s):si(),c}function tr(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function nr(e,t){if(!_(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ao(e))nr(e.value,t);else if(h(e))for(let n=0;n<e.length;n++)nr(e[n],t);else if(m(e)||g(e))e.forEach((e=>{nr(e,t)}));else if(O(e))for(const n in e)nr(e[n],t);return e}function or(e,t){ir(e,"a",t)}function rr(e,t){ir(e,"da",t)}function ir(e,t,n=oi){const o=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(cr(t,o,n),n){let e=n.parent;for(;e&&e.parent;)e.parent.vnode.type.__isKeepAlive&&sr(o,t,n,e),e=e.parent}}function sr(e,t,n,o){const r=cr(t,e,o,!0);hr((()=>{p(o[t],r)}),n)}function cr(e,t,n=oi,o=!1){if(n){(function(e){return F.indexOf(e)>-1})(e)&&(n=n.root);const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),ii(n);const r=Oo(t,n,e,o);return si(),tn(),r});return o?r.unshift(i):r.push(i),i}_o(`${M(($o[e]||e.replace(/^on/,"")).replace(/ hook$/,""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`)}const ar=e=>(t,n=oi)=>(!li||"sp"===e)&&cr(e,t,n),ur=ar("bm"),lr=ar("m"),pr=ar("bu"),fr=ar("u"),dr=ar("bum"),hr=ar("um"),gr=ar("sp"),mr=ar("rtg"),vr=ar("rtc");function yr(e,t=oi){cr("ec",e,t)}function br(e){P(e)&&_o("Do not use built-in directive ids as custom directive id: "+e)}function _r(e,t){return e&&(e[t]||e[A(t)]||e[R(A(t))])}const xr=e=>e?ui(e)?hi(e)||e.proxy:xr(e.parent):null,wr=l(Object.create(null),{$:e=>e,$el:e=>e.__$el||(e.__$el={}),$data:e=>e.data,$props:e=>Qn(e.props),$attrs:e=>Qn(e.attrs),$slots:e=>Qn(e.slots),$refs:e=>Qn(e.refs),$parent:e=>xr(e.parent),$root:e=>xr(e.root),$emit:e=>e.emit,$options:e=>jr(e),$forceUpdate:e=>e.f||(e.f=()=>Vo(e.update)),$watch:e=>er.bind(e)}),$r=e=>"_"===e||"$"===e,kr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:c,type:a,appContext:u}=e;if("__isVue"===t)return!0;if(r!==o&&r.__isScriptSetup&&d(r,t))return r[t];let l;if("$"!==t[0]){const a=c[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==o&&d(r,t))return c[t]=1,r[t];if(i!==o&&d(i,t))return c[t]=2,i[t];if((l=e.propsOptions[0])&&d(l,t))return c[t]=3,s[t];if(n!==o&&d(n,t))return c[t]=4,n[t];Or&&(c[t]=0)}}const p=wr[t];let f,h;return p?("$attrs"===t&&nn(e,"get",t),p(e)):(f=a.__cssModules)&&(f=f[t])?f:n!==o&&d(n,t)?(c[t]=4,n[t]):(h=u.config.globalProperties,d(h,t)?h[t]:void(!Jo||y(t)&&0===t.indexOf("__v")||(i!==o&&$r(t[0])&&d(i,t)?_o(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Jo&&_o(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))))},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return i!==o&&d(i,t)?(i[t]=n,!0):r!==o&&d(r,t)?(r[t]=n,!0):d(e.props,t)?(_o(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):"$"===t[0]&&t.slice(1)in e?(_o(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,value:n}):s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},c){let a;return!!n[c]||e!==o&&d(e,c)||t!==o&&d(t,c)||(a=s[0])&&d(a,c)||d(r,c)||d(wr,c)||d(i.config.globalProperties,c)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:d(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};kr.ownKeys=e=>(_o("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));let Or=!0;function Sr(e){const t=jr(e),n=e.proxy,o=e.ctx;Or=!1,t.beforeCreate&&Cr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:c,watch:a,provide:u,inject:l,created:p,beforeMount:f,mounted:d,beforeUpdate:g,updated:m,activated:y,deactivated:b,beforeDestroy:w,beforeUnmount:$,destroyed:k,unmounted:O,render:S,renderTracked:C,renderTriggered:P,errorCaptured:j,serverPrefetch:I,expose:A,inheritAttrs:E,components:T,directives:R,filters:M}=t,N=function(){const e=Object.create(null);return(t,n)=>{e[n]?_o(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}();{const[t]=e.propsOptions;if(t)for(const e in t)N("Props",e)}if(l&&function(e,t,n=i,o=!1){h(e)&&(e=Tr(e));for(const r in e){const i=e[r];let s;s=_(i)?"default"in i?Zo(i.from||r,i.default,!0):Zo(i.from||r):Zo(i),ao(s)?o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):(_o(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=s):t[r]=s,n("Inject",r)}}(l,o,N,e.appContext.config.unwrapInjectedRef),c)for(const i in c){const e=c[i];v(e)?(Object.defineProperty(o,i,{value:e.bind(n),configurable:!0,enumerable:!0,writable:!0}),N("Methods",i)):_o(`Method "${i}" has type "${typeof e}" in the component definition. Did you reference the function correctly?`)}if(r){v(r)||_o("The data option must be a function. Plain object usage is no longer supported.");const t=r.call(n,n);if(x(t)&&_o("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),_(t)){e.data=Gn(t);for(const e in t)N("Data",e),$r(e[0])||Object.defineProperty(o,e,{configurable:!0,enumerable:!0,get:()=>t[e],set:i})}else _o("data() should return an object.")}if(Or=!0,s)for(const h in s){const e=s[h],t=v(e)?e.bind(n,n):v(e.get)?e.get.bind(n,n):i;t===i&&_o(`Computed property "${h}" has no getter.`);const r=!v(e)&&v(e.set)?e.set.bind(n):()=>{_o(`Write operation failed: computed property "${h}" is readonly.`)},c=yi({get:t,set:r});Object.defineProperty(o,h,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e}),N("Computed",h)}if(a)for(const i in a)Pr(a[i],o,n,i);if(u){const e=v(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{!function(e,t){if(oi){let n=oi.provides;const o=oi.parent&&oi.parent.provides;o===n&&(n=oi.provides=Object.create(o)),n[e]=t,"app"===oi.type.mpType&&oi.appContext.app.provide(e,t)}else _o("provide() can only be used inside setup().")}(t,e[t])}))}function V(e,t){h(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(p&&Cr(p,e,"c"),V(ur,f),V(lr,d),V(pr,g),V(fr,m),V(or,y),V(rr,b),V(yr,j),V(vr,C),V(mr,P),V(dr,$),V(hr,O),V(gr,I),h(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i&&(e.render=S),null!=E&&(e.inheritAttrs=E),T&&(e.components=T),R&&(e.directives=R),e.ctx.$onApplyOptions&&e.ctx.$onApplyOptions(t,e,n)}function Cr(e,t,n){Oo(h(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Pr(e,t,n,o){const r=o.includes(".")?tr(n,o):()=>n[o];if(y(e)){const n=t[e];v(n)?Yo(r,n):_o(`Invalid watch handler specified by key "${e}"`,n)}else if(v(e))Yo(r,e.bind(n));else if(_(e))if(h(e))e.forEach((e=>Pr(e,t,n,o)));else{const o=v(e.handler)?e.handler.bind(n):t[e.handler];v(o)?Yo(r,o,e):_o(`Invalid watch handler specified by key "${e.handler}"`,o)}else _o(`Invalid watch option: "${o}"`,e)}function jr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,c=i.get(t);let a;return c?a=c:r.length||n||o?(a={},r.length&&r.forEach((e=>Ir(a,e,s,!0))),Ir(a,t,s)):a=t,_(t)&&i.set(t,a),a}function Ir(e,t,n,o=!1){const{mixins:r,extends:i}=t;i&&Ir(e,i,n,!0),r&&r.forEach((t=>Ir(e,t,n,!0)));for(const s in t)if(o&&"expose"===s)_o('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const o=Ar[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Ar={data:Er,props:Mr,emits:Mr,methods:Mr,computed:Mr,beforeCreate:Rr,created:Rr,beforeMount:Rr,mounted:Rr,beforeUpdate:Rr,updated:Rr,beforeDestroy:Rr,beforeUnmount:Rr,destroyed:Rr,unmounted:Rr,activated:Rr,deactivated:Rr,errorCaptured:Rr,serverPrefetch:Rr,components:Mr,directives:Mr,watch:function(e,t){if(!e)return t;if(!t)return e;const n=l(Object.create(null),e);for(const o in t)n[o]=Rr(e[o],t[o]);return n},provide:Er,inject:function(e,t){return Mr(Tr(e),Tr(t))}};function Er(e,t){return t?e?function(){return l(v(e)?e.call(this,this):e,v(t)?t.call(this,this):t)}:t:e}function Tr(e){if(h(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Rr(e,t){return e?[...new Set([].concat(e,t))]:t}function Mr(e,t){return e?l(l(Object.create(null),e),t):t}function Nr(e,t,n,o=!1){const r={},i={};e.propsDefaults=Object.create(null),Vr(e,t,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);Wr(t||{},r,e),n?e.props=o?r:Yn(r,!1,_n,Bn,qn):e.type.props?e.props=r:e.props=i,e.attrs=i}function Vr(e,t,n,r){const[i,s]=e.propsOptions;let c,a=!1;if(t)for(let o in t){if(C(o))continue;const u=t[o];let l;i&&d(i,l=A(o))?s&&s.includes(l)?(c||(c={}))[l]=u:n[l]=u:Ko(e.emitsOptions,o)||o in r&&u===r[o]||(r[o]=u,a=!0)}if(s){const t=no(n),r=c||o;for(let o=0;o<s.length;o++){const c=s[o];n[c]=Lr(i,t,c,r[c],e,!d(r,c))}}return a}function Lr(e,t,n,o,r,i){const s=e[n];if(null!=s){const e=d(s,"default");if(e&&void 0===o){const e=s.default;if(s.type!==Function&&v(e)){const{propsDefaults:i}=r;n in i?o=i[n]:(ii(r),o=i[n]=e.call(null,t),si())}else o=e}s[0]&&(i&&!e?o=!1:!s[1]||""!==o&&o!==T(n)||(o=!0))}return o}function Dr(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const c=e.props,a={},u=[];let p=!1;if(!v(e)){const o=e=>{p=!0;const[n,o]=Dr(e,t,!0);l(a,n),o&&u.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!c&&!p)return _(e)&&i.set(e,r),r;if(h(c))for(let r=0;r<c.length;r++){y(c[r])||_o("props must be strings when using array syntax.",c[r]);const e=A(c[r]);Hr(e)&&(a[e]=o)}else if(c){_(c)||_o("invalid props options",c);for(const e in c){const t=A(e);if(Hr(t)){const n=c[e],o=a[t]=h(n)||v(n)?{type:n}:n;if(o){const e=zr(Boolean,o.type),n=zr(String,o.type);o[0]=e>-1,o[1]=n<0||e<n,(e>-1||d(o,"default"))&&u.push(t)}}}}const f=[a,u];return _(e)&&i.set(e,f),f}function Hr(e){return"$"!==e[0]||(_o(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Br(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Ur(e,t){return Br(e)===Br(t)}function zr(e,t){return h(t)?t.findIndex((t=>Ur(t,e))):v(t)&&Ur(t,e)?0:-1}function Wr(e,t,n){const o=no(t),r=n.propsOptions[0];for(const i in r){let t=r[i];null!=t&&Fr(i,o[i],t,!d(e,i)&&!d(e,T(i)))}}function Fr(e,t,n,o){const{type:r,required:i,validator:s}=n;if(i&&o)_o('Missing required prop: "'+e+'"');else if(null!=t||n.required){if(null!=r&&!0!==r){let n=!1;const o=h(r)?r:[r],i=[];for(let e=0;e<o.length&&!n;e++){const{valid:r,expectedType:s}=Kr(t,o[e]);i.push(s||""),n=r}if(!n)return void _o(function(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(R).join(" | ")}`;const r=n[0],i=k(t),s=Jr(t,r),c=Jr(t,i);1===n.length&&Gr(r)&&!function(...e){return e.some((e=>"boolean"===e.toLowerCase()))}(r,i)&&(o+=` with value ${s}`);o+=`, got ${i} `,Gr(i)&&(o+=`with value ${c}.`);return o}(e,t,i))}s&&!s(t)&&_o('Invalid prop: custom validator check failed for prop "'+e+'".')}}const qr=e("String,Number,Boolean,Function,Symbol,BigInt");function Kr(e,t){let n;const o=Br(t);if(qr(o)){const r=typeof e;n=r===o.toLowerCase(),n||"object"!==r||(n=e instanceof t)}else n="Object"===o?_(e):"Array"===o?h(e):"null"===o?null===e:e instanceof t;return{valid:n,expectedType:o}}function Jr(e,t){return"String"===t?`"${e}"`:"Number"===t?`${Number(e)}`:`${e}`}function Gr(e){return["string","number","boolean"].some((t=>e.toLowerCase()===t))}function Zr(){return{app:null,config:{isNativeTag:s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qr=0;const Yr=Do;function Xr(e){return e?Xn(t=e)||eo(t)||"__vInternal"in e?l({},e):e:null;var t}const ei=Zr();let ti=0;function ni(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ei,c={uid:ti++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ht(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dr(r,s),emitsOptions:qo(r,s),emit:null,emitted:null,propsDefaults:o,inheritAttrs:r.inheritAttrs,ctx:o,data:o,props:o,attrs:o,slots:o,refs:o,setupState:o,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx=function(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(wr).forEach((n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>wr[n](e),set:i})})),t}(c),c.root=t?t.root:c,c.emit=Fo.bind(null,c),e.ce&&e.ce(c),c}let oi=null;const ri=()=>oi||Jo,ii=e=>{oi=e,e.scope.on()},si=()=>{oi&&oi.scope.off(),oi=null},ci=e("slot,component");function ai(e,t){const n=t.isNativeTag||s;(ci(e)||n(e))&&_o("Do not use built-in or reserved HTML elements as component id: "+e)}function ui(e){return 4&e.vnode.shapeFlag}let li=!1;function pi(e,t=!1){li=t;const{props:n}=e.vnode,o=ui(e);Nr(e,n,o,t);const r=o?function(e,t){const n=e.type;n.name&&ai(n.name,e.appContext.config);if(n.components){const t=Object.keys(n.components);for(let n=0;n<t.length;n++)ai(t[n],e.appContext.config)}if(n.directives){const e=Object.keys(n.directives);for(let t=0;t<e.length;t++)br(e[t])}n.compilerOptions&&fi()&&_o('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');e.accessCache=Object.create(null),e.proxy=oo(new Proxy(e.ctx,kr)),function(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach((n=>{Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>e.props[n],set:i})}))}(e);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?function(e){const t=t=>{e.exposed&&_o("expose() should be called only once per setup()."),e.exposed=t||{}};let n;return Object.freeze({get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(nn(e,"get","$attrs"),t[n]),set:()=>(_o("setupContext.attrs is readonly."),!1),deleteProperty:()=>(_o("setupContext.attrs is readonly."),!1)})}(e))},get slots(){return Qn(e.slots)},get emit(){return(t,...n)=>e.emit(t,...n)},expose:t})}(e):null;ii(e),en();const r=ko(o,e,0,[Qn(e.props),n]);tn(),si(),x(r)?(r.then(si,si),_o("setup() returned a Promise, but the version of Vue you are using does not support it yet.")):function(e,t,n){v(t)?e.render=t:_(t)?((o=t)&&!0===o.__v_isVNode&&_o("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=ho(t),function(e){const{ctx:t,setupState:n}=e;Object.keys(no(n)).forEach((e=>{if(!n.__isScriptSetup){if($r(e[0]))return void _o(`setup() return property ${JSON.stringify(e)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:()=>n[e],set:i})}}))}(e)):void 0!==t&&_o("setup() should return an object. Received: "+(null===t?"null":typeof t));var o;di(e,n)}(e,r,t)}else di(e,t)}(e,t):void 0;return li=!1,r}const fi=()=>!0;function di(e,t,n){const o=e.type;e.render||(e.render=o.render||i),ii(e),en(),Sr(e),tn(),si(),o.render||e.render!==i||t||(o.template?_o('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):_o("Component is missing template or render function."))}function hi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ho(oo(e.exposed)),{get:(t,n)=>n in t?t[n]:e.proxy[n]}))}const gi=/(?:^|[-_])(\w)/g;function mi(e,t=!0){return v(e)?e.displayName||e.name:e.name||t&&e.__name}function vi(e,t,n=!1){let o=mi(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1])}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components)}return o?o.replace(gi,(e=>e.toUpperCase())).replace(/[-_]/g,""):n?"App":"Anonymous"}const yi=(e,t)=>function(e,t,n=!1){let o,r;const i=v(e);i?(o=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,r=e.set);const s=new mo(o,r,i||!r,n);return t&&!n&&(s.effect.onTrack=t.onTrack,s.effect.onTrigger=t.onTrigger),s}(e,t,li),bi="3.2.39";function _i(e){return po(e)}const xi="[object Array]",wi="[object Object]";function $i(e,t){const n={};return ki(e,t),Oi(e,t,"",n),n}function ki(e,t){if((e=_i(e))===t)return;const n=$(e),o=$(t);if(n==wi&&o==wi)for(let r in t){const n=e[r];void 0===n?e[r]=null:ki(n,t[r])}else n==xi&&o==xi&&e.length>=t.length&&t.forEach(((t,n)=>{ki(e[n],t)}))}function Oi(e,t,n,o){if((e=_i(e))===t)return;const r=$(e),i=$(t);if(r==wi)if(i!=wi||Object.keys(e).length<Object.keys(t).length)Si(o,n,e);else for(let s in e){const r=_i(e[s]),i=t[s],c=$(r),a=$(i);if(c!=xi&&c!=wi)r!=i&&Si(o,(""==n?"":n+".")+s,r);else if(c==xi)a!=xi||r.length<i.length?Si(o,(""==n?"":n+".")+s,r):r.forEach(((e,t)=>{Oi(e,i[t],(""==n?"":n+".")+s+"["+t+"]",o)}));else if(c==wi)if(a!=wi||Object.keys(r).length<Object.keys(i).length)Si(o,(""==n?"":n+".")+s,r);else for(let e in r)Oi(r[e],i[e],(""==n?"":n+".")+s+"."+e,o)}else r==xi?i!=xi||e.length<t.length?Si(o,n,e):e.forEach(((e,r)=>{Oi(e,t[r],n+"["+r+"]",o)})):Si(o,n,e)}function Si(e,t,n){e[t]=n}function Ci(e){const t=e.ctx.__next_tick_callbacks;if(t&&t.length){const e=t.slice(0);t.length=0;for(let t=0;t<e.length;t++)e[t]()}}function Pi(e,t){const n=e.ctx;if(!n.__next_tick_pending&&!function(e){return jo.includes(e.update)}(e))return No(t&&t.bind(e.proxy));let o;return n.__next_tick_callbacks||(n.__next_tick_callbacks=[]),n.__next_tick_callbacks.push((()=>{t?ko(t.bind(e.proxy),e,14):o&&o(e.proxy)})),new Promise((e=>{o=e}))}function ji(e,t){const n=typeof(e=_i(e));if("object"===n&&null!==e){let n=t.get(e);if(void 0!==n)return n;if(h(e)){const o=e.length;n=new Array(o),t.set(e,n);for(let r=0;r<o;r++)n[r]=ji(e[r],t)}else{n={},t.set(e,n);for(const o in e)d(e,o)&&(n[o]=ji(e[o],t))}return n}if("symbol"!==n)return e}function Ii(e){return ji(e,"undefined"!=typeof WeakMap?new WeakMap:new Map)}function Ai(e,t,n){if(!t)return;t=Ii(t);const o=e.ctx,r=o.mpType;if("page"===r||"component"===r){t.r0=1;const r=o.$scope,i=Object.keys(t),s=$i(t,n||function(e,t){const n=e.data,o=Object.create(null);return t.forEach((e=>{o[e]=n[e]})),o}(r,i));Object.keys(s).length?(o.__next_tick_pending=!0,r.setData(s,(()=>{o.__next_tick_pending=!1,Ci(e)})),Ho()):Ci(e)}}function Ei(e,t,n){t.appContext.config.globalProperties.$applyOptions(e,t,n);const o=e.computed;if(o){const e=Object.keys(o);if(e.length){const n=t.ctx;n.$computedKeys||(n.$computedKeys=[]),n.$computedKeys.push(...e)}}delete t.ctx.$onApplyOptions}function Ti(e,t=!1){const{setupState:n,$templateRefs:o,ctx:{$scope:r,$mpPlatform:i}}=e;if("mp-alipay"===i)return;if(!o||!r)return;if(t)return o.forEach((e=>Ri(e,null,n)));const s="mp-baidu"===i||"mp-toutiao"===i,c=e=>{const t=r.selectAllComponents(".r").concat(r.selectAllComponents(".r-i-f"));return e.filter((e=>{const o=function(e,t){const n=e.find((e=>e&&(e.properties||e.props).uI===t));if(n){const e=n.$vm;return e?hi(e.$)||e:n}return null}(t,e.i);return!(!s||null!==o)||(Ri(e,o,n),!1)}))},a=()=>{const t=c(o);t.length&&e.proxy&&e.proxy.$scope&&e.proxy.$scope.setData({r1:1},(()=>{c(t)}))};r._$setRef?r._$setRef(a):Pi(e,a)}function Ri({r:e,f:t},n,o){if(v(e))e(n,{});else{const r=y(e),i=ao(e);if(r||i)if(t){if(!i)return;h(e.value)||(e.value=[]);const t=e.value;if(-1===t.indexOf(n)){if(t.push(n),!n)return;dr((()=>p(t,n)),n.$)}}else r?d(o,e)&&(o[e]=n):ao(e)?e.value=n:Mi(e);else Mi(e)}}function Mi(e){_o("Invalid template ref type:",e,`(${typeof e})`)}var Ni,Vi;(Vi=Ni||(Ni={})).APP="app",Vi.PAGE="page",Vi.COMPONENT="component";const Li=Do;function Di(e,t){const n=e.component=ni(e,t.parentComponent,null);return n.ctx.$onApplyOptions=Ei,n.ctx.$children=[],"app"===t.mpType&&(n.render=i),t.onBeforeSetup&&t.onBeforeSetup(n,t),yo(e),pi(n),t.parentComponent&&n.proxy&&t.parentComponent.ctx.$children.push(hi(n)||n.proxy),function(e){const t=Ui.bind(e);e.$updateScopedSlots=()=>No((()=>Vo(t)));const n=()=>{if(e.isMounted){const{bu:t,u:n}=e;zi(e,!1),en(),Ho(),tn(),t&&V(t),zi(e,!0),Ai(e,Hi(e)),n&&Li(n)}else dr((()=>{Ti(e,!0)}),e),Ai(e,Hi(e))},o=e.effect=new Zt(n,(()=>Vo(e.update)),e.scope),r=e.update=o.run.bind(o);r.id=e.uid,zi(e,!0),o.onTrack=e.rtc?t=>V(e.rtc,t):void 0,o.onTrigger=e.rtg?t=>V(e.rtg,t):void 0,r.ownerInstance=e,r()}(n),bo(),n.proxy}function Hi(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:i,propsOptions:[s],slots:c,attrs:u,emit:l,render:p,renderCache:f,data:d,setupState:h,ctx:g,uid:m,appContext:{app:{config:{globalProperties:{pruneComponentPropsCache:v}}}},inheritAttrs:y}=e;let b;e.$templateRefs=[],e.$ei=0,v(m),e.__counter=0===e.__counter?1:0;const _=Go(e);try{if(4&n.shapeFlag){Bi(y,i,s,u);const e=r||o;b=p.call(e,e,f,i,h,d,g)}else{Bi(y,i,s,t.props?u:(e=>{let t;for(const n in e)("class"===n||"style"===n||a(n))&&((t||(t={}))[n]=e[n]);return t})(u));const e=t;b=e.length>1?e(i,{attrs:u,slots:c,emit:l}):e(i,null)}}catch(x){So(x,e,1),b=!1}return Ti(e),Go(_),b}function Bi(e,t,n,o){if(t&&o&&!1!==e){const e=Object.keys(o).filter((e=>"class"!==e&&"style"!==e));if(!e.length)return;n&&e.some(u)?e.forEach((e=>{u(e)&&e.slice(9)in n||(t[e]=o[e])})):e.forEach((e=>t[e]=o[e]))}}function Ui(){const e=this.$scopedSlotsData;if(!e||0===e.length)return;const t=this.ctx.$scope,n=t.data,o=Object.create(null);e.forEach((({path:e,index:t,data:r})=>{const i=B(n,e),s=y(t)?`${e}.${t}`:`${e}[${t}]`;if(void 0===i||void 0===i[t])o[s]=r;else{const e=$i(r,i[t]);Object.keys(e).forEach((t=>{o[s+"."+t]=e[t]}))}})),e.length=0,Object.keys(o).length&&t.setData(o)}function zi({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}const Wi=function(e,t=null){v(e)||(e=Object.assign({},e)),null==t||_(t)||(_o("root props passed to app.mount() must be an object."),t=null);const n=Zr(),o=new Set,r=n.app={_uid:Qr++,_component:e,_props:t,_container:null,_context:n,_instance:null,version:bi,get config(){return n.config},set config(e){_o("app.config cannot be replaced. Modify individual options instead.")},use:(e,...t)=>(o.has(e)?_o("Plugin has already been applied to target app."):e&&v(e.install)?(o.add(e),e.install(r,...t)):v(e)?(o.add(e),e(r,...t)):_o('A plugin must either be a function or an object with an "install" function.'),r),mixin:e=>(n.mixins.includes(e)?_o("Mixin has already been applied to target app"+(e.name?`: ${e.name}`:"")):n.mixins.push(e),r),component:(e,t)=>(ai(e,n.config),t?(n.components[e]&&_o(`Component "${e}" has already been registered in target app.`),n.components[e]=t,r):n.components[e]),directive:(e,t)=>(br(e),t?(n.directives[e]&&_o(`Directive "${e}" has already been registered in target app.`),n.directives[e]=t,r):n.directives[e]),mount(){},unmount(){},provide:(e,t)=>(e in n.provides&&_o(`App already provides property with key "${String(e)}". It will be overwritten with the new value.`),n.provides[e]=t,r)};return r};function Fi(e,t=null){const n=Wi(e,t),o=n._context;o.config.globalProperties.$nextTick=function(e){return Pi(this.$,e)};const r=e=>(e.appContext=o,e.shapeFlag=6,e),s=function(e,t){return Di(r(e),t)},c=function(e){return e&&function(e){const{bum:t,scope:n,update:o,um:r}=e;t&&V(t),n.stop(),o&&(o.active=!1),r&&Li(r),Li((()=>{e.isUnmounted=!0}))}(e.$)};return n.mount=function(){e.render=i;const t=Di(r({type:e}),{mpType:Ni.APP,mpInstance:null,parentComponent:null,slots:[],props:null});return n._instance=t.$,t.$app=n,t.$createComponent=s,t.$destroyComponent=c,o.$appInstance=t,t},n.unmount=function(){_o("Cannot unmount an app.")},n}function qi(e,t,n,o){v(t)&&cr(e,t.bind(n),o)}function Ki(e,t,n){!function(e,t,n){(e.mpType||n.$mpType)&&Object.keys(e).forEach((o=>{if(0===o.indexOf("on")){const r=e[o];h(r)?r.forEach((e=>qi(o,e,n,t))):qi(o,r,n,t)}}))}(e,t,n)}function Ji(e,t,n){return e[t]=n}function Gi(e,t){return e?[...new Set([].concat(e,t))]:t}let Zi;const Qi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Yi=/^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function Xi(){const e=Vt.getStorageSync("uni_id_token")||"",t=e.split(".");if(!e||3!==t.length)return{uid:null,role:[],permission:[],tokenExpired:0};let n;try{n=JSON.parse((o=t[1],decodeURIComponent(Zi(o).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))))}catch(r){throw new Error("获取当前用户信息出错，详细错误信息为："+r.message)}var o;return n.tokenExpired=1e3*n.exp,delete n.exp,delete n.iat,n}function es(e){const t=e._context.config;var n;v(e._component.onError)&&(t.errorHandler=function(e){return function(t,n,o){if(!n)throw t;const r=e._instance;if(!r||!r.proxy)throw t;r.proxy.$callHook("onError",t)}}(e)),n=t.optionMergeStrategies,q.forEach((e=>{n[e]=Gi}));const o=t.globalProperties;!function(e){e.uniIDHasRole=function(e){const{role:t}=Xi();return t.indexOf(e)>-1},e.uniIDHasPermission=function(e){const{permission:t}=Xi();return this.uniIDHasRole("admin")||t.indexOf(e)>-1},e.uniIDTokenValid=function(){const{tokenExpired:e}=Xi();return e>Date.now()}}(o),o.$set=Ji,o.$applyOptions=Ki,Vt.invokeCreateVueAppHook(e)}Zi="function"!=typeof atob?function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!Yi.test(e))throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e+="==".slice(2-(3&e.length));for(var n,o,r="",i=0;i<e.length;)t=Qi.indexOf(e.charAt(i++))<<18|Qi.indexOf(e.charAt(i++))<<12|(n=Qi.indexOf(e.charAt(i++)))<<6|(o=Qi.indexOf(e.charAt(i++))),r+=64===n?String.fromCharCode(t>>16&255):64===o?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return r}:atob;const ts=Object.create(null);function ns(e){delete ts[e]}function os(e){if(!e)return;const[t,n]=e.split(",");return ts[t]?ts[t][parseInt(n)]:void 0}var rs={install(e){es(e),e.config.globalProperties.pruneComponentPropsCache=ns;const t=e.mount;e.mount=function(n){const o=t.call(e,n),r=function(){const e="createApp";if("undefined"!=typeof global)return global[e];if("undefined"!=typeof my)return my[e]}();return r?r(o):"undefined"!=typeof createMiniProgramApp&&createMiniProgramApp(o),o}}};function is(e,t){const n=ri(),o=n.ctx,r=void 0===t||"mp-weixin"!==o.$mpPlatform&&"mp-qq"!==o.$mpPlatform||!y(t)&&"number"!=typeof t?"":"_"+t,s="e"+n.$ei+++r,c=o.$scope;if(!e)return delete c[s],s;const a=c[s];return a?a.value=e:c[s]=function(e,t){const n=e=>{var o;(o=e).type&&o.target&&(o.preventDefault=i,o.stopPropagation=i,o.stopImmediatePropagation=i,d(o,"detail")||(o.detail={}),d(o,"markerId")&&(o.detail="object"==typeof o.detail?o.detail:{},o.detail.markerId=o.markerId),O(o.detail)&&d(o.detail,"checked")&&!d(o.detail,"value")&&(o.detail.value=o.detail.checked),O(o.detail)&&(o.target=l({},o.target,o.detail)));let r=[e];e.detail&&e.detail.__args__&&(r=e.detail.__args__);const s=n.value,c=()=>Oo(function(e,t){if(h(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n&&n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,s),t,5,r),a=e.target,u=!!a&&(!!a.dataset&&"true"===a.dataset.eventsync);if(!ss.includes(e.type)||u){const t=c();if("input"===e.type&&(h(t)||x(t)))return;return t}setTimeout(c)};return n.value=e,n}(e,n),s}const ss=["tap","longpress","longtap","transitionend","animationstart","animationiteration","animationend","touchforcechange"];const cs=function(e,t=null){return e&&(e.mpType="app"),Fi(e,t).use(rs)},as={},us=[];const ls=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function ps(e,t){const n=e.ctx;n.mpType=t.mpType,n.$mpType=t.mpType,n.$mpPlatform="mp-weixin",n.$scope=t.mpInstance,n.$mp={},n._self={},e.slots={},h(t.slots)&&t.slots.length&&(t.slots.forEach((t=>{e.slots[t]=!0})),e.slots.d&&(e.slots.default=!0)),n.getOpenerEventChannel=function(){return t.mpInstance.getOpenerEventChannel()},n.$hasHook=fs,n.$callHook=ds,e.emit=function(e,t){return function(n,...o){const r=t.$scope;if(r&&n){const e={__args__:o};r.triggerEvent(n,e)}return e.apply(this,[n,...o])}}(e.emit,n)}function fs(e){const t=this.$[e];return!(!t||!t.length)}function ds(e,t){"mounted"===e?(ds.call(this,"bm"),this.$.isMounted=!0,e="m"):"onLoad"===e&&t&&t.__id__&&(this.__eventChannel__=function(e){if(e){const t=as[e];return delete as[e],t}return us.shift()}(t.__id__),delete t.__id__);const n=this.$[e];return n&&((e,t)=>{let n;for(let o=0;o<e.length;o++)n=e[o](t);return n})(n,t)}const hs=["onLoad","onShow","onHide","onUnload","onResize","onTabItemTap","onReachBottom","onPullDownRefresh","onAddToFavorites"];function gs(e,t=new Set){if(e){Object.keys(e).forEach((n=>{0===n.indexOf("on")&&v(e[n])&&t.add(n)}));{const{extends:n,mixins:o}=e;o&&o.forEach((e=>gs(e,t))),n&&gs(n,t)}}return t}function ms(e,t,n){-1!==n.indexOf(t)||d(e,t)||(e[t]=function(e){return this.$vm&&this.$vm.$callHook(t,e)})}const vs=["onReady"];function ys(e,t,n=vs){t.forEach((t=>ms(e,t,n)))}function bs(e,t,n=vs){gs(t).forEach((t=>ms(e,t,n)))}const _s=H((()=>{const e=[],t=getApp({allowDefault:!0});if(t&&t.$vm&&t.$vm.$){const n=t.$vm.$.appContext.mixins;if(h(n)){const t=Object.keys(K);n.forEach((n=>{t.forEach((t=>{d(n,t)&&!e.includes(t)&&e.push(t)}))}))}}return e}));const xs=["onShow","onHide","onError","onThemeChange","onPageNotFound","onUnhandledRejection"];function ws(e,t){const n=e.$,o={globalData:e.$options&&e.$options.globalData||{},$vm:e,onLaunch(t){this.$vm=e;const o=n.ctx;this.$vm&&o.$scope||(ps(n,{mpType:"app",mpInstance:this,slots:[]}),o.globalData=this.globalData,e.$callHook("onLaunch",t))}};!function(e){const t=uo(Y(wx.getSystemInfoSync().language)||"en");Object.defineProperty(e,"$locale",{get:()=>t.value,set(e){t.value=e}})}(e);const r=e.$.type;ys(o,xs),bs(o,r);{const e=r.methods;e&&l(o,e)}return t&&t.parse(o),o}function $s(e,t){if(v(e.onLaunch)){const t=wx.getLaunchOptionsSync&&wx.getLaunchOptionsSync();e.onLaunch(t)}v(e.onShow)&&wx.onAppShow&&wx.onAppShow((e=>{t.$callHook("onShow",e)})),v(e.onHide)&&wx.onAppHide&&wx.onAppHide((e=>{t.$callHook("onHide",e)}))}const ks=["externalClasses"];function Os(e,t){const n=e.$children;for(let r=n.length-1;r>=0;r--){const e=n[r];if(e.$scope._$vueId===t)return e}let o;for(let r=n.length-1;r>=0;r--)if(o=Os(n[r],t),o)return o}const Ss=["eO","uR","uRIF","uI","uT","uP","uS"];function Cs(e){e.properties||(e.properties={}),l(e.properties,function(e=!1){const t={};return e||(Ss.forEach((e=>{t[e]={type:null,value:""}})),t.uS={type:null,value:[],observer:function(e){const t=Object.create(null);e&&e.forEach((e=>{t[e]=!0})),this.setData({$slots:t})}}),t}(),function(e){const t={};return e&&e.virtualHost&&(t.virtualHostStyle={type:null,value:""},t.virtualHostClass={type:null,value:""}),t}(e.options))}const Ps=[String,Number,Boolean,Object,Array,null];function js(e,t){const n=function(e,t){return h(e)&&1===e.length?e[0]:e}(e);return-1!==Ps.indexOf(n)?n:null}function Is(e,t){return(t?function(e){const t={};O(e)&&Object.keys(e).forEach((n=>{-1===Ss.indexOf(n)&&(t[n]=e[n])}));return t}(e):os(e.uP))||{}}function As(e){const t=function(){const e=this.properties.uP;e&&(this.$vm?function(e,t){const n=no(t.props),o=os(e)||{};Es(n,o)&&(!function(e,t,n,o){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,c=no(r),[a]=e.propsOptions;let u=!1;if(function(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}(e)||!(o||s>0)||16&s){let o;Vr(e,t,r,i)&&(u=!0);for(const i in c)t&&(d(t,i)||(o=T(i))!==i&&d(t,o))||(a?!n||void 0===n[i]&&void 0===n[o]||(r[i]=Lr(a,c,i,void 0,e,!0)):delete r[i]);if(i!==c)for(const e in i)t&&d(t,e)||(delete i[e],u=!0)}else if(8&s){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let s=n[o];if(Ko(e.emitsOptions,s))continue;const l=t[s];if(a)if(d(i,s))l!==i[s]&&(i[s]=l,u=!0);else{const t=A(s);r[t]=Lr(a,c,t,l,e,!1)}else l!==i[s]&&(i[s]=l,u=!0)}}u&&rn(e,"set","$attrs"),Wr(t||{},r,e)}(t,o,n,!1),r=t.update,jo.indexOf(r)>-1&&function(e){const t=jo.indexOf(e);t>Io&&jo.splice(t,1)}(t.update),t.update());var r}(e,this.$vm.$):"m"===this.properties.uT&&function(e,t){const n=t.properties,o=os(e)||{};Es(n,o,!1)&&t.setData(o)}(e,this))};e.observers||(e.observers={}),e.observers.uP=t}function Es(e,t,n=!0){const o=Object.keys(t);if(n&&o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const n=o[r];if(t[n]!==e[n])return!0}return!1}function Ts(e,t){e.data={},e.behaviors=function(e){const t=e.behaviors;let n=e.props;n||(e.props=n=[]);const o=[];return h(t)&&t.forEach((e=>{o.push(e.replace("uni://","wx://")),"uni://form-field"===e&&(h(n)?(n.push("name"),n.push("value")):(n.name={type:String,default:""},n.value={type:[String,Number,Boolean,Array,Object,Date],default:""}))})),o}(t)}function Rs(e,{parse:t,mocks:n,isPage:o,initRelation:r,handleLink:i,initLifetimes:s}){const c={multipleSlots:!0,addGlobalClass:!0,pureDataPattern:/^uP$/};(e=e.default||e).options&&l(c,e.options);const a={options:c,lifetimes:s({mocks:n,isPage:o,initRelation:r,vueOptions:e}),pageLifetimes:{show(){this.$vm&&this.$vm.$callHook("onPageShow")},hide(){this.$vm&&this.$vm.$callHook("onPageHide")},resize(e){this.$vm&&this.$vm.$callHook("onPageResize",e)}},methods:{__l:i}};var u,p;return Ts(a,e),Cs(a),As(a),function(e,t){ks.forEach((n=>{d(t,n)&&(e[n]=t[n])}))}(a,e),u=a.methods,p=e.wxsCallMethods,h(p)&&p.forEach((e=>{u[e]=function(t){return this.$vm[e](t)}})),t&&t(a,{handleLink:i}),a}let Ms,Ns;function Vs(e,t){Ms||(Ms=getApp().$vm.$createComponent);const n=Ms(e,t);return hi(n.$)||n}function Ls(e,t){const{parse:n,mocks:o,isPage:r,initRelation:i,handleLink:s,initLifetimes:c}=t,a=Rs(e,{mocks:o,isPage:r,initRelation:i,handleLink:s,initLifetimes:c});!function({properties:e},t){h(t)?t.forEach((t=>{e[t]={type:String,value:""}})):O(t)&&Object.keys(t).forEach((n=>{const o=t[n];if(O(o)){let t=o.default;v(t)&&(t=t());const r=o.type;o.type=js(r),e[n]={type:o.type,value:t}}else e[n]={type:js(o)}}))}(a,(e.default||e).props);const u=a.methods;return u.onLoad=function(e){var t;return this.options=e,this.$page={fullPath:(t=this.route+W(e),function(e){return 0===e.indexOf("/")}(t)?t:"/"+t)},this.$vm&&this.$vm.$callHook("onLoad",e)},ys(u,hs),bs(u,e),function(e,t){if(!t)return;Object.keys(K).forEach((n=>{t&K[n]&&ms(e,n,[])}))}(u,e.__runtimeHooks),ys(u,_s()),n&&n(a,{handleLink:s}),a}const Ds=Page,Hs=Component;function Bs(e){const t=e.triggerEvent;e.triggerEvent=function(n,...o){return t.apply(e,[(r=n,A(r.replace(D,"-"))),...o]);var r}}function Us(e,t,n){const o=t[e];t[e]=o?function(...e){return Bs(this),o.apply(this,e)}:function(){Bs(this)}}Page=function(e){return Us("onLoad",e),Ds(e)},Component=function(e){Us("created",e);return e.properties&&e.properties.uP||(Cs(e),As(e)),Hs(e)};var zs=Object.freeze({__proto__:null,mocks:["__route__","__wxExparserNodeId__","__wxWebviewId__"],isPage:function(e){return!!e.route},initRelation:function(e,t){e.triggerEvent("__l",t)},handleLink:function(e){const t=e.detail||e.value,n=t.vuePid;let o;n&&(o=Os(this.$vm,n)),o||(o=this.$vm),t.parent=o},initLifetimes:function({mocks:e,isPage:t,initRelation:n,vueOptions:o}){return{attached(){let r=this.properties;!function(e,t){if(!e)return;const n=e.split(","),o=n.length;1===o?t._$vueId=n[0]:2===o&&(t._$vueId=n[0],t._$vuePid=n[1])}(r.uI,this);const i={vuePid:this._$vuePid};n(this,i);const s=this,c=t(s);let a=r;this.$vm=Vs({type:o,props:Is(a,c)},{mpType:c?"page":"component",mpInstance:s,slots:r.uS||{},parentComponent:i.parent&&i.parent.$,onBeforeSetup(t,n){!function(e,t){Object.defineProperty(e,"refs",{get(){const e={};return function(e,t,n){e.selectAllComponents(t).forEach((e=>{const t=e.properties.uR;n[t]=e.$vm||e}))}(t,".r",e),t.selectAllComponents(".r-i-f").forEach((t=>{const n=t.properties.uR;n&&(e[n]||(e[n]=[]),e[n].push(t.$vm||t))})),e}})}(t,s),function(e,t,n){const o=e.ctx;n.forEach((n=>{d(t,n)&&(e[n]=o[n]=t[n])}))}(t,s,e),function(e,t){ps(e,t);const n=e.ctx;ls.forEach((e=>{n[e]=function(...t){const o=n.$scope;if(o&&o[e])return o[e].apply(o,t)}}))}(t,n)}})},ready(){this.$vm&&(this.$vm.$callHook("mounted"),this.$vm.$callHook("onReady"))},detached(){var e;this.$vm&&(ns(this.$vm.$.uid),e=this.$vm,Ns||(Ns=getApp().$vm.$destroyComponent),Ns(e))}}}});const Ws=function(e){return App(ws(e,Fs))};var Fs;const qs=(Ks=zs,function(e){return Component(Ls(e,Ks))});var Ks;const Js=function(e){return function(t){return Component(Rs(t,e))}}(zs),Gs=function(e){return function(t){$s(ws(t,e),t)}}(),Zs=function(e){return function(t){const n=ws(t,e),o=getApp({allowDefault:!0});t.$.ctx.$scope=o;const r=o.globalData;r&&Object.keys(n.globalData).forEach((e=>{d(r,e)||(r[e]=n.globalData[e])})),Object.keys(n).forEach((e=>{d(o,e)||(o[e]=n[e])})),$s(n,t)}}();wx.createApp=global.createApp=Ws,wx.createPage=qs,wx.createComponent=Js,wx.createPluginApp=global.createPluginApp=Gs,wx.createSubpackageApp=global.createSubpackageApp=Zs,exports._export_sfc=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},exports.createSSRApp=cs,exports.e=(e,...t)=>l(e,...t),exports.f=(e,t)=>function(e,t){let n;if(h(e)||y(e)){n=new Array(e.length);for(let o=0,r=e.length;o<r;o++)n[o]=t(e[o],o,o)}else if("number"==typeof e){if(!Number.isInteger(e))return _o(`The v-for range expect an integer value but got ${e}.`),[];n=new Array(e);for(let o=0;o<e;o++)n[o]=t(o+1,o,o)}else if(_(e))if(e[Symbol.iterator])n=Array.from(e,((e,n)=>t(e,n,n)));else{const o=Object.keys(e);n=new Array(o.length);for(let r=0,i=o.length;r<i;r++){const i=o[r];n[r]=t(e[i],i,r)}}else n=[];return n}(e,t),exports.index=Vt,exports.n=e=>t(e),exports.o=(e,t)=>is(e,t),exports.p=e=>function(e){const{uid:t,__counter:n}=ri();return t+","+((ts[t]||(ts[t]=[])).push(Xr(e))-1)+","+n}(e),exports.resolveComponent=function(e,t){return function(e,t,n=!0,o=!1){const r=Jo||oi;if(r){const i=r.type;if("components"===e){const e=mi(i,!1);if(e&&(e===t||e===A(t)||e===R(A(t))))return i}const s=_r(r[e]||i[e],t)||_r(r.appContext[e],t);if(!s&&o)return i;if(n&&!s){const n="components"===e?"\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.":"";_o(`Failed to resolve ${e.slice(0,-1)}: ${t}${n}`)}return s}_o(`resolve${R(e.slice(0,-1))} can only be used in render() or setup().`)}("components",e,!0,t)||e},exports.sr=(e,t,n)=>function(e,t,n={}){const{$templateRefs:o}=ri();o.push({i:t,r:e,k:n.k,f:n.f})}(e,t,n),exports.t=e=>(e=>y(e)?e:null==e?"":h(e)||_(e)&&(e.toString===w||!v(e.toString))?JSON.stringify(e,n,2):String(e))(e);
=======
"use strict";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const LINEFEED = "\n";
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key];
  }
  return getValueByDataPath(obj[key], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const encode = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode) {
  const res = obj ? Object.keys(obj).map((key) => {
    let val = obj[key];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const E = function() {
};
E.prototype = {
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self = this;
    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
function getBaseSystemInfo() {
  return wx.getSystemInfoSync();
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn(data, key));
    if (isString(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len = protocol.length;
  const argsLen = args.length;
  for (let i = 0; i < len; i++) {
    const opts = protocol[i];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i) {
      data[opts.name] = args[i];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp$1(name, value, prop, isAbsent) {
  if (!isPlainObject(prop)) {
    prop = { type: prop };
  }
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value == null && !required) {
    return;
  }
  if (type != null) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType$1(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage$1(name, value, expectedTypes);
    }
  }
  if (validator) {
    return validator(value);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType$1(value, type) {
  let valid;
  const expectedType = getType$1(type);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    {
      valid = value instanceof type;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue$1(value, expectedType);
  const receivedValue = styleValue$1(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType$1(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue$1(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable$1(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg$1(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg$1(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook) {
  return function(data) {
    return hook(data) || data;
  };
}
function queue$1(hooks, data) {
  let promise = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      const res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$1(hooks, res).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray(interceptor.invoke)) {
      const res = queue$1(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(interceptor, options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, fn, extend(args, { success: resolve2, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  const params = args[0];
  if (!options || !isPlainObject(options.formatArgs) && isPlainObject(params)) {
    return;
  }
  const formatArgs = options.formatArgs;
  const keys = Object.keys(formatArgs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id, name, res) {
  return invokeCallback(id, extend(res || {}, { errMsg: name + ":ok" }));
}
function invokeFail(id, name, errMsg, errRes) {
  return invokeCallback(id, extend({ errMsg: name + ":fail" + (errMsg ? " " + errMsg : "") }, errRes));
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function normalizeErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    console.error(errMsg.message + LINEFEED + errMsg.stack);
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, normalizeErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol, options);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  const { platform, pixelRatio, windowWidth } = getBaseSystemInfo();
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}, Upx2pxProtocol);
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor[name];
    if (isArray(hooks) && isFunction(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  const res = [];
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString(method) && isPlainObject(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString(method)) {
    if (isPlainObject(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: Function
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
const emitter = new E$1();
const $on = defineSyncApi(API_ON, (name, callback) => {
  emitter.on(name, callback);
  return () => emitter.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  emitter.once(name, callback);
  return () => emitter.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!name) {
    emitter.e = {};
    return;
  }
  if (!isArray(name))
    name = [name];
  name.forEach((n2) => emitter.off(n2, callback));
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  emitter.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i = 0; i < onPushMessageCallbacks.length; i++) {
      const callback = onPushMessageCallbacks[i];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_, { resolve: resolve2, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve2({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(onfinally && onfinally()).then(() => value), (reason) => promise.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction(options.success) || isFunction(options.fail) || isFunction(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, options, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, api, extend({}, options, {
        success: resolve2,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method, returnValue) {
    return function(res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ${methodName} \u6682\u4E0D\u652F\u6301 ${key}`);
          } else if (isString(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }
  return function wrapper(methodName, method) {
    if (!hasOwn(protocols2, methodName)) {
      return method;
    }
    const protocol = protocols2[methodName];
    if (!protocol) {
      return function() {
        console.error(`\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301${methodName}`);
      };
    }
    return function(arg1, arg2) {
      let options = protocol;
      if (isFunction(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
};
const setLocale = (locale) => {
  const app = getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale;
}
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback
};
function initUni(api, protocols2) {
  const wrapper = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key) {
      if (hasOwn(target, key)) {
        return target[key];
      }
      if (hasOwn(api, key)) {
        return promisify(key, api[key]);
      }
      if (hasOwn(baseApis, key)) {
        return promisify(key, baseApis[key]);
      }
      return promisify(key, wrapper(key, wx[key]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:\u670D\u52A1[" + service + "]\u4E0D\u5B58\u5728"
      };
      isFunction(fail) && fail(res);
    }
    isFunction(complete) && complete(res);
  };
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  let osName = "";
  let osVersion = "";
  {
    osName = system.split(" ")[0] || "";
    osVersion = system.split(" ")[1] || "";
  }
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = language.replace(/_/g, "-");
  const parameters = {
    appId: "__UNI__XXXXXXX",
    appName: "\u5916\u5356\u5C0F\u7A0B\u5E8F",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.6.4",
    uniRuntimeVersion: "3.6.4",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0
  };
  extend(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLocaleLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale ? getLocale() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray(urls)) {
      return;
    }
    const len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = language.replace(/_/g, "-");
    toRes = sortObject(extend(toRes, {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "__UNI__XXXXXXX",
      appName: "\u5916\u5356\u5C0F\u7A0B\u5E8F",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage)
    }));
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getProvider,
  createSelectorQuery
});
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  redirectTo,
  previewImage,
  getSystemInfo,
  getSystemInfoSync,
  showActionSheet,
  getDeviceInfo,
  getAppBaseInfo,
  getWindowInfo,
  getAppAuthorizeSetting
});
var index = initUni(shims, protocols);
function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set: set$1,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self = toRaw(this);
    trackRefValue(self);
    if (self._dirty || !self._cacheable) {
      self._dirty = false;
      self._value = self.effect.run();
    }
    return self._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a = "__v_isReadonly";
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff2 = getId(a) - getId(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
function emit(event, ...args) {
}
function devtoolsComponentEmit(component, event, params) {
  emit("component:emit", component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s) => {
    warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type)) {
      target = target.root;
    }
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey((ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, ""));
    warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`);
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component2 = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component2, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component2;
      }
    }
    const res = resolve(instance[type] || Component2[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component2;
    }
    if (warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.__$el || (i.__$el = {}),
  $data: (i) => i.data,
  $props: (i) => shallowReadonly(i.props),
  $attrs: (i) => shallowReadonly(i.attrs),
  $slots: (i) => shallowReadonly(i.slots),
  $refs: (i) => shallowReadonly(i.refs),
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $watch: (i) => instanceWatch.bind(i)
});
const isReservedPrefix = (key) => key === "_" || key === "$";
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    if (setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn(setupState, key)) {
      return setupState[key];
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed$1({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  {
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    if (created) {
      callHook$1(created, instance, "c");
    }
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        {
          warn$1(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray$1(to[key], from[key]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type != null && type !== true) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$1(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount() {
      },
      unmount() {
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
const queuePostRenderEffect = queuePostFlushCb;
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props, isStateful, isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn$1(`setup() returned a Promise, but the version of Vue you are using does not support it yet.`);
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions$1(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component2.render && instance.render === NOOP && !isSSR) {
    if (Component2.template) {
      warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  );
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (instance.exposed) {
      warn$1(`expose() should be called only once per setup().`);
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        }
        return instance.proxy[key];
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed$1 = (getterOrOptions, debugOptions) => {
  return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
const version = "3.2.39";
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key in pre) {
      const currentValue = current[key];
      if (currentValue === void 0) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key in current) {
        const currentValue = unwrapper(current[key]);
        const preValue = pre[key];
        const currentType = toTypeString(currentValue);
        const preType = toTypeString(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            if (currentValue.length < preValue.length) {
              setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
            } else {
              currentValue.forEach((item, index2) => {
                _diff(item, preValue[index2], (path == "" ? "" : path + ".") + key + "[" + index2 + "]", result);
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            for (let subKey in currentValue) {
              _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
function nextTick$1(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(fn.bind(instance.proxy), instance, 14);
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve2) => {
    _resolve = resolve2;
  });
}
function clone(src, seen) {
  src = unwrapper(src);
  const type = typeof src;
  if (type === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray(src)) {
      const len = src.length;
      copy = new Array(len);
      seen.set(src, copy);
      for (let i = 0; i < len; i++) {
        copy[i] = clone(src[i], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn(src, name)) {
          copy[name] = clone(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type !== "symbol") {
    return src;
  }
}
function deepCopy(src) {
  return clone(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys.forEach((key) => {
    ret[key] = data[key];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy(data);
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys = Object.keys(data);
    const diffData = diff(data, oldData || getMPInstanceData(mpInstance, keys));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick$1(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(options, instance, publicThis);
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys = Object.keys(computedOptions);
    if (keys.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const { setupState, $templateRefs, ctx: { $scope, $mpPlatform } } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$templateRefs || !$scope) {
    return;
  }
  if (isUnmount) {
    return $templateRefs.forEach((templateRef) => setTemplateRef(templateRef, null, setupState));
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    const mpComponents = $scope.selectAllComponents(".r").concat($scope.selectAllComponents(".r-i-f"));
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    const refs = doSetByRefs($templateRefs);
    if (refs.length && instance.proxy && instance.proxy.$scope) {
      instance.proxy.$scope.setData({ r1: 1 }, () => {
        doSetByRefs(refs);
      });
    }
  };
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick$1(instance, doSet);
  }
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find((com) => com && (com.properties || com.props).uI === id);
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return mpInstance;
  }
  return null;
}
function setTemplateRef({ r, f: f2 }, refValue, setupState) {
  if (isFunction(r)) {
    r(refValue, {});
  } else {
    const _isString = isString(r);
    const _isRef = isRef(r);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray(r.value)) {
          r.value = [];
        }
        const existing = r.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          onBeforeUnmount(() => remove(existing, refValue), refValue.$);
        }
      } else if (_isString) {
        if (hasOwn(setupState, r)) {
          setupState[r] = refValue;
        }
      } else if (isRef(r)) {
        r.value = refValue;
      } else {
        warnRef(r);
      }
    } else {
      warnRef(r);
    }
  }
}
function warnRef(ref2) {
  warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
var MPType;
(function(MPType2) {
  MPType2["APP"] = "app";
  MPType2["PAGE"] = "page";
  MPType2["COMPONENT"] = "component";
})(MPType || (MPType = {}));
const queuePostRenderEffect$1 = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
  }
  setupComponent(instance);
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const { type: Component2, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, uid: uid2, appContext: { app: { config: { globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 } } } }, inheritAttrs } = instance;
  instance.$templateRefs = [];
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx);
    } else {
      fallthroughAttrs(inheritAttrs, props, propsOptions, Component2.props ? attrs : getFunctionalFallthrough(attrs));
      const render2 = Component2;
      result = render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(props, null);
    }
  } catch (err) {
    handleError(err, instance, 1);
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props, propsOptions, fallthroughAttrs2) {
  if (props && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs2).filter((key) => key !== "class" && key !== "style");
    if (!keys.length) {
      return;
    }
    if (propsOptions && keys.some(isModelListener)) {
      keys.forEach((key) => {
        if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
          props[key] = fallthroughAttrs2[key];
        }
      });
    } else {
      keys.forEach((key) => props[key] = fallthroughAttrs2[key]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff(data, oldScopedSlotData[index2]);
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(instance);
  instance.$updateScopedSlots = () => nextTick(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      patch(instance, renderComponentRoot(instance));
    } else {
      const { bu, u } = instance;
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      patch(instance, renderComponentRoot(instance));
      if (u) {
        queuePostRenderEffect$1(u);
      }
    }
  };
  const effect = instance.effect = new ReactiveEffect(
    componentUpdateFn,
    () => queueJob(instance.update),
    instance.scope
  );
  const update = instance.update = effect.run.bind(effect);
  update.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update.ownerInstance = instance;
  }
  update();
}
function unmountComponent(instance) {
  const { bum, scope, update, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  scope.stop();
  if (update) {
    update.active = false;
  }
  if (um) {
    queuePostRenderEffect$1(um);
  }
  queuePostRenderEffect$1(() => {
    instance.isUnmounted = true;
  });
}
const oldCreateApp = createAppAPI();
function createVueApp(rootComponent, rootProps = null) {
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent3(initialVNode, options) {
    return mountComponent(createVNode(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(createVNode({ type: rootComponent }), {
      mpType: MPType.APP,
      mpInstance: null,
      parentComponent: null,
      slots: [],
      props: null
    });
    app._instance = instance.$;
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn$1(`Cannot unmount an app.`);
  };
  return app;
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType) {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (name.indexOf("on") === 0) {
      const hooks = options[name];
      if (isArray(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set(target, key, val) {
  return target[key] = val;
}
function createErrorHandler(app) {
  return function errorHandler(err, instance, _info) {
    if (!instance) {
      throw err;
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    {
      appInstance.proxy.$callHook(ON_ERROR, err);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = index.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app._context.config;
  if (isFunction(app._component.onError)) {
    appConfig.errorHandler = createErrorHandler(app);
  }
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set;
    globalProperties.$applyOptions = applyOptions$2;
  }
  {
    index.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function renderProps(props) {
  const { uid: uid2, __counter } = getCurrentInstance();
  const propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props)) - 1;
  return uid2 + "," + propsId + "," + __counter;
}
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method = "createApp";
  if (typeof global !== "undefined") {
    return global[method];
  } else if (typeof my !== "undefined") {
    return my[method];
  }
}
function vOn(value, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq") && (isString(key) || typeof key === "number") ? "_" + key : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value;
  } else {
    mpInstance[name] = createInvoker(value, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? eventTarget.dataset.eventsync === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray(res) || isPromise(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject(event.detail) && hasOwn(event.detail, "checked") && !hasOwn(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject(event.detail)) {
      event.target = extend({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, i);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, i));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function setRef(ref2, id, opts = {}) {
  const { $templateRefs } = getCurrentInstance();
  $templateRefs.push({ i: id, r: ref2, k: opts.k, f: opts.f });
}
const o = (value, key) => vOn(value, key);
const f = (source, renderItem) => vFor(source, renderItem);
const e = (target, ...sources) => extend(target, ...sources);
const n = (value) => normalizeClass(value);
const t = (val) => toDisplayString(val);
const p = (props) => renderProps(props);
const sr = (ref2, id, opts) => setRef(ref2, id, opts);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
const eventChannels = {};
const eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    const eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method) => {
    ctx[method] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method]) {
        return mpInstance[method].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks = this.$[name];
  if (hooks && hooks.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  } else if (name === "onLoad" && args && args.__id__) {
    this.__eventChannel__ = getEventChannel(args.__id__);
    delete args.__id__;
  }
  const hooks = this.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
];
function findHooks(vueOptions, hooks = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (name.indexOf("on") === 0 && isFunction(vueOptions[name])) {
        hooks.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin) => findHooks(mixin, hooks));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks);
      }
    }
  }
  return hooks;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks, excludes = EXCLUDE_HOOKS) {
  hooks.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray(mixins)) {
      const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin) => {
        hooks.forEach((hook) => {
          if (hasOwn(mixin, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend(appOptions, methods);
  }
  if (parseAppOptions) {
    parseAppOptions.parse(appOptions);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm, parseAppOptions));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm, parseAppOptions);
    const app = getApp({
      allowDefault: true
    });
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v) {
      locale.value = v;
    }
  });
}
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len = ids.length;
  if (len === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i = $children.length - 1; i >= 0; i--) {
    const childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
const builtInProps = [
  "eO",
  "uR",
  "uRIF",
  "uI",
  "uT",
  "uP",
  "uS"
];
function initDefaultProps(isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: [],
      observer: function(newVal) {
        const $slots = /* @__PURE__ */ Object.create(null);
        newVal && newVal.forEach((slotName) => {
          $slots[slotName] = true;
        });
        this.setData({
          $slots
        });
      }
    };
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties.virtualHostStyle = {
        type: null,
        value: ""
      };
      properties.virtualHostClass = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend(mpComponentOptions.properties, initDefaultProps(), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type, defaultValue) {
  if (isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function normalizePropType(type, defaultValue) {
  const res = parsePropType(type);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray(rawProps)) {
    rawProps.forEach((key) => {
      properties[key] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject(rawProps)) {
    Object.keys(rawProps).forEach((key) => {
      const opts = rawProps[key];
      if (isPlainObject(opts)) {
        let value = opts.default;
        if (isFunction(value)) {
          value = value();
        }
        const type = opts.type;
        opts.type = normalizePropType(type);
        properties[key] = {
          type: opts.type,
          value
        };
      } else {
        properties[key] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = properties[name];
      }
    });
  }
  return propsData;
}
function initData(_) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(up, this.$vm.$);
    } else if (this.properties.uT === "m") {
      updateMiniProgramComponentProperties(up, this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps, false);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray(vueProps)) {
          vueProps.push("name");
          vueProps.push("value");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (vueOptions.options) {
    extend(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  if (parse) {
    parse(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getApp().$vm.$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    this.options = query;
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse && parse(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm, parseAppOptions), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [customizeEvent(event), ...args]);
  };
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  mocks,
  isPage,
  initRelation,
  handleLink,
  initLifetimes
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
exports._export_sfc = _export_sfc;
exports.createSSRApp = createSSRApp;
exports.e = e;
exports.f = f;
exports.index = index;
exports.n = n;
exports.o = o;
exports.p = p;
exports.resolveComponent = resolveComponent;
exports.sr = sr;
exports.t = t;
>>>>>>> e4fada038ccf8970bdc77b7679babc05e46a3366
