(function(e){function t(t){for(var a,l,o=t[0],r=t[1],c=t[2],d=0,m=[];d<o.length;d++)l=o[d],n[l]&&m.push(n[l][0]),n[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,o=1;o<i.length;o++){var r=i[o];0!==n[r]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=i[0]))}return e}var a={},n={app:0},s=[];function l(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=a,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(i,a,function(t){return e[t]}.bind(null,a));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=r;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2aec":function(e,t,i){"use strict";var a=i("b795"),n=i.n(a);n.a},"383c":function(e,t,i){"use strict";var a=i("c588"),n=i.n(a);n.a},"3aff":function(e,t,i){},"3e5d":function(e,t,i){},"429d":function(e,t,i){"use strict";var a=i("3e5d"),n=i.n(a);n.a},"56d7":function(e,t,i){"use strict";i.r(t);i("ff66"),i("ea23"),i("dbff");var a=i("3a00"),n=i("7f43"),s=i.n(n),l={},o=s.a.create(l);o.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),o.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["a"].use(Plugin);Plugin,i("2e54");var r=i("bead"),c=i("6334"),u=i("c84e"),d=i("b93c"),m=i("36c3"),p=i("b33d"),h=i("98a1");a["a"].use(r["a"]),a["a"].use(c["a"]),a["a"].use(u["a"]),a["a"].use(d["a"]),a["a"].use(m["a"]),a["a"].use(p["a"]),a["a"].use(h["a"]);i("0be8"),i("3f87");var f=[{name:"loginCheck",url:"LoginCheck.aspx"},{name:"savePgae",url:"service/model/savePgae"},{name:"getModelDetail",url:"service/model/model_details"},{name:"getRecordDetail",url:"service/model/package_details"}],v=[{name:"getProductList",url:"service/model/product"},{name:"getBatchTaskList",url:"service/model/batch_task/search"},{name:"changeState",url:"service/model/package_screening_status"}],g=new a["a"],w=function(e){var t={};return e.forEach(function(e){t[e.name]=function(t){return new Promise(function(i){b.axiosPost(e.url,t).then(function(e){return i(e)})})}}),t},b={ApiModule1:w(f),ApiModule2:w(v),env:function(){return"production"},previewUrl:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":3000")}return window.location.origin+"/form-design-h5"},previewOrigin:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":3000")}return window.location.origin},apiUrl:function(){return"http://xxx.com/"},axiosPost:function(e,t){var i=this;return new Promise(function(a){g.$axios.post(i.apiUrl()+e,t).then(function(e){a(e)}).catch(function(e){console.log(e)})})},postMsgoUrl:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":5000")}return window.location.origin+"/form-design"},postMsgoOrigin:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":5000")}return window.location.origin},vkcPost:function(){return new Promise(function(e){setTimeout(function(){if(10*Math.random()>5)return e({code:0,msg:"成功",data:"success"});g.$createToast({txt:"网络异常",type:"txt"}).show()},500)})},getVerifyCode:function(e){var t=this;return new Promise(function(i){/^1[3-9]\d{9}$/.test(e)?t.vkcPost(e).then(function(e){return i(e)}):g.$createToast({txt:"请输入正确的手机号",type:"txt"}).show()})}},y=b,x=(i("eee6"),i("6134"),i("a0ff"),{setCookie:function(e,t,i){var a=new Date;a.setTime(a.getTime()+24*i*3600*1e3),document.cookie=e+"="+encodeURIComponent(t)+";expires="+(i?a.toGMTString():"")},getCookie:function(e){var t=document.cookie,i=t.indexOf(e+"=");if(i>-1){i=i+e.length+1;var a=t.indexOf(";",i);return a=a<0?t.length:a,decodeURIComponent(t.substring(i,a))}return""},delCookie:function(e){var t=this.getCookie(e);!1!==t&&this.setCookie(e,t,-1)},setSessionStorage:function(e,t){var i=window.JSON.stringify(t);window.sessionStorage&&window.sessionStorage.setItem(e,i)},getSessionStorage:function(e){var t="";return window.sessionStorage&&(t=window.sessionStorage.getItem(e),t&&(t=window.JSON.parse(t))),t},setLocalStorage:function(e,t){var i=window.JSON.stringify(t);window.localStorage&&window.localStorage.setItem(e,i)},getLocalStorage:function(e){var t="";return window.localStorage&&(t=window.localStorage.getItem(e),t&&(t=window.JSON.parse(t))),t},getUrlParam:function(e){var t=new RegExp("([?&])"+e+"=([^&|^#]*)"),i=window.location.href,a=i.indexOf("?");if(a<0)return null;var n=i.slice(a,i.length);if(n){var s=n.match(t);if(s)return decodeURIComponent(s[2])}return null},checkMobile:function(e){return!!/^1[3-9]\d{9}$/.test(e)},countDown:function(e,t,i){var a=function a(){setTimeout(function(){e>0?(e--,t(e),a()):i()},1e3)};a()},getFormatDate:function(e,t){var i=e||"yyyy-mm-dd hh:mm:ss",a="[object Date]"===Object.prototype.toString.call(t)?t:new Date,n="",s=a.getMonth()+1,l=a.getDate(),o=a.getMinutes(),r=a.getSeconds();switch(s>=1&&s<=9&&(s="0"+s),l>=0&&l<=9&&(l="0"+l),o>=0&&o<=9&&(o="0"+o),r>=0&&r<=9&&(r="0"+r),i.toLowerCase()){case"yyyy-mm-dd hh:mm:ss":n=a.getFullYear()+"-"+s+"-"+l+" "+a.getHours()+":"+o+":"+r;break;case"yyyy-mm-dd":n=a.getFullYear()+"-"+s+"-"+l;break;case"yyyy-mm-dd hh:mm":n=a.getFullYear()+"-"+s+"-"+l+" "+a.getHours()+":"+o;break;case"yyyy-mm-dd hh":n=a.getFullYear()+"-"+s+"-"+l+" "+a.getHours();break;case"yyyy-mm":n=a.getFullYear()+"-"+s;break;case"yyyy":n=a.getFullYear();break;default:n=a.getFullYear()+"-"+s+"-"+l+" "+a.getHours()+":"+o+":"+r;break}return n},easeout:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,a=e.scrollTop;if(a===t||"number"!==typeof t||0===i)return!1;window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return setTimeout(e,17)});var n=function n(){a+=(t-a)/i,Math.abs(t-a)<1?e.scrollTop=t:(e.scrollTop=a,requestAnimationFrame(n))};n()},addMatomo:function(e){if(!document.getElementById("matomoCode")){var t=document.createElement("script"),i="\n\t\tvar _paq = _paq || [];\n\t\t_paq.push(['trackPageView']);\n\t\t_paq.push(['enableLinkTracking']);\n\t\t(function() {\n\t\t  var u=\"//xxx.com/\";\n\t\t  _paq.push(['setTrackerUrl', u+'piwik.php']);\n\t\t  _paq.push(['setSiteId', '".concat(e,"']);\n\t\t  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n\t\t  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);\n\t\t})();\n\t\t");t.type="text/javascript",t.id="matomoCode";try{t.appendChild(document.createTextNode(i))}catch(a){t.text=i}document.head.appendChild(t)}}}),_={install:function(e){e&&(e.prototype.$api=y,e.prototype.$util=x)}};a["a"].use(_);var k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"jb-loading"},[i("div",{staticClass:"jb-loading-wrapper",style:{padding:e.text?"20px":"15px"}},["snake"===e.type?i("span",{staticClass:"jb-loading-spin"},[i("div",{staticClass:"jb-snake"})]):"triple-bounce"===e.type?i("div",{staticClass:"jb-triple-bounce"},[i("div",{staticClass:"jb-triple-bounce-bounce1"}),i("div",{staticClass:"jb-triple-bounce-bounce2"}),i("div",{staticClass:"jb-triple-bounce-bounce3"})]):i("v-sandglass"),i("span",{directives:[{name:"show",rawName:"v-show",value:e.text,expression:"text"}],staticClass:"jb-loading-text"},[e._v(e._s(e.text))])],1),i("div",{staticClass:"jb-loading-mask",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault()}}})])])},C=[],S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sandglass-wrap"},[i("svg",{staticClass:"timer",attrs:{version:"1.1",viewBox:"131.623 175.5 120 160",preserveAspectRatio:"xMinYMin meet"}},[i("path",{attrs:{fill:"#FFFFFF",d:"M212.922,255.45l36.855-64.492c1.742-3.069,1.742-6.836-0.037-9.896c-1.783-3.06-5.037-4.938-8.581-4.938\n\t\t\th-99.158c-3.524,0-6.797,1.878-8.569,4.938c-1.773,3.06-1.792,6.827-0.03,9.896l36.846,64.491l-36.845,64.492\n\t\t\tc-1.762,3.068-1.743,6.836,0.03,9.896c1.772,3.061,5.044,4.938,8.569,4.938h99.158c3.544,0,6.798-1.878,8.581-4.938\n\t\t\tc1.779-3.06,1.779-6.827,0.037-9.896L212.922,255.45z M142.001,324.86l39.664-69.41l-39.664-69.41h99.158l-39.663,69.41\n\t\t\tl39.663,69.41H142.001z"}})])])},$=[],j=(i("5b71"),i("048f")),P={},O=Object(j["a"])(P,S,$,!1,null,"5024d70e",null);O.options.__file="sandglass.vue";var T=O.exports,D={components:{"v-sandglass":T},data:function(){return{visible:!1}},props:{text:String,type:{type:String,default:"snake"}}},I=D,L=(i("383c"),Object(j["a"])(I,k,C,!1,null,"26d3413c",null));L.options.__file="loading.vue";var E,N=L.exports,W=a["a"].extend(N),A={open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E||(E=new W({el:document.createElement("div")})),E.visible||(E.text="string"===typeof e?e:e.text||"",E.type=e.type||"snake",document.body.appendChild(E.$el),a["a"].nextTick(function(){E.visible=!0}))},close:function(){E&&(E.visible=!1)}},M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"getVerCode-btn",attrs:{disabled:e.disbtn},on:{click:function(t){e.getCode()}}},[e._v(e._s(e.codetxt)+" "+e._s(e.time))])},B=[],F={name:"ValidateCodeBtn",props:{phone:String},data:function(){return{code:"",codetxt:"获取验证码",time:"",disbtn:!1}},methods:{sendcCode:function(){var e=this;this.disbtn=!0,this.codetxt="重新发送",this.time="60",this.$util.countDown(this.time,function(t){e.time=t},function(){e.time="",e.disbtn=!1}),this.$createToast({txt:"验证码已发送",type:"txt"}).show()},getCode:function(){var e=this;this.disbtn||this.$api.getVerifyCode(this.phone).then(function(){e.sendcCode()})}}},V=F,R=(i("2aec"),Object(j["a"])(V,M,B,!1,null,"0f27e6da",null));R.options.__file="validate-code-btn.vue";var q=R.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.data.length>0?i("cube-scroll",{ref:"scroll",staticClass:"horizontal-scroll-list-wrap",style:{width:e.itemWidth*e.showNumber+"px"},attrs:{direction:"horizontal",options:e.BScollOptions}},[i("div",{ref:"wrapper",staticClass:"picker-slot-wrapper",style:{width:(e.data.length+e.showNumber-1)*e.itemWidth+"px"}},[i("div",{staticClass:"picker-item",style:{width:e.itemWidth*(e.showNumber-1)/2+"px"}}),e._l(e.data,function(t,a){return i("div",{key:t,staticClass:"picker-item",style:[{width:e.itemWidth+"px"},t===e.currentValue?e.pickerStyle:{}],on:{click:function(t){e.handClick(a)}}},[e.pickerSlot?e._t("default",null,{item:t}):i("span",[e._v(e._s(t))])],2)}),i("div",{staticClass:"picker-item",style:{width:e.itemWidth*(e.showNumber-1)/2+"px"}})],2)]):e._e()},z=[],H=(i("7378"),48),Y=5,J={name:"horizontal-picker",props:{value:{type:[String,Number],default:""},pickerSlot:{type:Boolean,default:!1},pickerStyle:{type:Object,default:function(){}},itemWidth:{type:Number,default:H},showNumber:{type:Number,default:Y},data:{type:Array,default:[],required:!0},defaultIndex:{type:Number,default:0}},data:function(){return{currentIndex:0,BScoll:null,BScollOptions:{bounceTime:300,swipeTime:500},draging:!1,scrollEndTimer:null,scrollX:null}},computed:{currentValue:function(){return this.data[this.currentIndex]}},methods:{handClick:function(e){this.currentIndex!==e&&(this.currentIndex=e,this.scrollX=-this.currentIndex*this.itemWidth,this.BScoll.scrollTo(this.scrollX,0,150),this.$emit("input",this.currentValue))},setCurrentIndex:function(e){var t=Math.abs(e)+this.itemWidth/2;this.currentIndex=Math.floor(t/this.itemWidth),console.log(this.currentIndex*this.itemWidth),this.scrollX=-this.currentIndex*this.itemWidth,this.BScoll.scrollTo(this.scrollX,0,200),this.$emit("input",this.currentValue)},touchEnd:function(e){this.draging=!1,console.log("鼠标/手指离开",e)},scrollEnd:function(e){var t=this;clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout(function(){if(t.draging||t.scrollX===e.x)return!1;console.log("滑动结束",e),t.draging=!1,t.setCurrentIndex(e.x)},50)},beforeScrollStart:function(){this.draging=!0,console.log("滑动开始之前")},scrollCancel:function(){this.draging=!1,console.log("滑动被取消")},setDefaultIndex:function(){this.defaultIndex>0&&(this.currentIndex=this.defaultIndex,this.BScoll.scrollTo(-this.currentIndex*this.itemWidth,0),this.$emit("input",this.currentValue))}},mounted:function(){this.$nextTick(function(){var e=this;this.BScoll=this.$refs.scroll.scroll,this.BScoll.on("touchEnd",function(t){return e.touchEnd(t)}),this.BScoll.on("scrollEnd",function(t){return e.scrollEnd(t)}),this.BScoll.on("beforeScrollStart",function(){return e.beforeScrollStart()}),this.BScoll.on("scrollCancel",function(){return e.scrollCancel()}),this.setDefaultIndex()})}},X=J,K=(i("429d"),Object(j["a"])(X,U,z,!1,null,null,null));K.options.__file="horizontal-picker.vue";var G=K.exports,Q={install:function(e){this.installed||(e.component(q.name,q),e.component(G.name,G),e.$loading=e.prototype.$loading=A)}};"undefined"!==typeof window&&window.Vue&&Q.install(window.Vue),a["a"].use(Q);i("3aff"),i("5aea");var Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Home")],1)},ee=[],te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.pageData?i("div",{staticClass:"wrapper",style:{background:e.pageData.config.background}},[e.theme?i("img",{staticClass:"banner",attrs:{src:e.themeBanner,alt:"banner",width:"100%"}}):e._e(),e.pageData.formList.length>0?i("WidgetItems",{ref:"formList",class:e.theme.value,style:{width:e.theme.contentWidth,borderRadius:e.theme.borderRadius?"10px":"0"},attrs:{wgList:e.pageData.formList}}):e._e(),e.pageData.list.length>0?i("WidgetItems",{ref:"list",attrs:{wgList:e.pageData.list}}):e._e()],1):e._e()},ie=[],ae=i("7ea5"),ne=(i("56cc"),i("e0ba"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._l(e.wgList,function(t){return[i("div",{key:t.key,staticClass:"widget-view",class:{"widget-view-imgShow":"imgShow"===t.type,"widget-view-button":"button"===t.type}},["phone"===t.type?i("WgPhone",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"input"===t.type?i("WgInput",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"checkbox"===t.type?i("WgCheckbox",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"select"===t.type?i("WgSelect",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"switch"===t.type?i("WgSwitch",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"date"===t.type?i("WgDate",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"h-picker"===t.type?i("WgHorizontalPicker",{ref:t.key,refInFor:!0,attrs:{item:t}}):e._e(),"imgShow"===t.type&&t.value?i("div",{staticClass:"wg-imgshow"},[i("div",{style:t.style},[i("div",{staticClass:"flex flex-center"},[i("img",{attrs:{src:t.value,alt:"图片展示",width:"100%"}})])])]):e._e(),"imgSlide"===t.type?i("div",{staticClass:"wg-imgslide"},[i("div",{style:{margin:t.style.margin}},[i("div",{style:{width:"100%",height:t.style.height/88.88+"rem"}},[i("cube-slide",{ref:t.key,refInFor:!0,staticStyle:{"max-width":"640px"},attrs:{data:t.value,interval:t.interval}},e._l(t.value,function(e,t){return i("cube-slide-item",{key:t},[i("a",{attrs:{href:e.url}},[i("img",{attrs:{src:e.image,width:"100%"}})])])}),1)],1)])]):e._e(),"button"===t.type?i("div",{style:t.style},[i("div",{staticClass:"flex flex-center"},[i("button",{staticClass:"wg-button",style:t.style.btnStyle,on:{click:function(i){e.clickBtn(t)}}},[e._v(e._s(t.btnText))])])]):e._e(),"staticText"===t.type?i("div",{staticClass:"wg-staticText"},[i("p",{style:t.style},[e._v(e._s(t.value))])]):e._e(),"splitLine"===t.type?i("div",{staticClass:"wg-splitLine"},[i("hr",{staticClass:"splitLine-hr",style:t.style})]):e._e()],1)]})],2)}),se=[],le=(i("c55b"),i("e772"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-phone",style:e.item.style},[i("div",{staticClass:"wg-item",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.item.showLabel,expression:"item.showLabel"}],staticClass:"wg-title flex-none",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("div",{staticClass:"flex-auto"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-input",attrs:{type:"tel",maxlength:"11",placeholder:e.item.placeholder},domProps:{value:e.item.value},on:{input:function(t){t.target.composing||e.$set(e.item,"value",t.target.value)}}})])]),e.item.showCode?i("div",{staticClass:"wg-item",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.item.showLabel,expression:"item.showLabel"}],staticClass:"wg-title flex-none",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v("验证码")]),i("div",{staticClass:"flex flex-auto"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.codeValue,expression:"item.codeValue"}],staticClass:"wg-input flex-auto",attrs:{placeholder:"验证码",type:"tel",maxlength:"6"},domProps:{value:e.item.codeValue},on:{input:function(t){t.target.composing||e.$set(e.item,"codeValue",t.target.value)}}}),i("ValidateCodeBtn",{style:e.item.style.btnStyle,attrs:{phone:e.item.value}})],1)]):e._e()])}),oe=[],re={props:{item:Object},methods:{validate:function(){return""===this.item.value?"请输入手机号":this.$util.checkMobile(this.item.value)?!this.item.showCode||6===this.item.codeValue.length||"验证码错误":"请输入正确的手机号"}}},ce=re,ue=Object(j["a"])(ce,le,oe,!1,null,null,null);ue.options.__file="wg-phone.vue";var de=ue.exports,me=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-item",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"],style:e.item.style},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.item.showLabel,expression:"item.showLabel"}],staticClass:"wg-title",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("div",{staticClass:"flex-auto"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-input",attrs:{placeholder:e.item.placeholder},domProps:{value:e.item.value},on:{input:function(t){t.target.composing||e.$set(e.item,"value",t.target.value)}}})])])},pe=[],he={props:{item:Object},methods:{validate:function(){return""!==this.item.value||this.item.placeholder}}},fe=he,ve=Object(j["a"])(fe,me,pe,!1,null,null,null);ve.options.__file="wg-input.vue";var ge=ve.exports,we=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-item flex-wrap wg-checkbox",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"],style:e.item.style},[i("div",{staticClass:"wg-title",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("div",{staticClass:"flex-auto"},e._l(e.item.options,function(t,a){return i("label",{key:t+a,staticClass:"label"},["checkbox"===(e.item.isRadio?"radio":"checkbox")?i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-checkbox-input",staticStyle:{display:"none"},attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.item.value)?e._i(e.item.value,t)>-1:e.item.value},on:{change:function(i){var a=e.item.value,n=i.target,s=!!n.checked;if(Array.isArray(a)){var l=t,o=e._i(a,l);n.checked?o<0&&e.$set(e.item,"value",a.concat([l])):o>-1&&e.$set(e.item,"value",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.item,"value",s)}}}):"radio"===(e.item.isRadio?"radio":"checkbox")?i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-checkbox-input",staticStyle:{display:"none"},attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.item.value,t)},on:{change:function(i){e.$set(e.item,"value",t)}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-checkbox-input",staticStyle:{display:"none"},attrs:{type:e.item.isRadio?"radio":"checkbox"},domProps:{value:t,value:e.item.value},on:{input:function(t){t.target.composing||e.$set(e.item,"value",t.target.value)}}}),i("span",[e._v(e._s(t))])])}),0)])},be=[],ye={props:{item:Object},methods:{validate:function(){return!(Array.isArray(this.item.value)&&0===this.item.value.length||""===this.item.value)||"请选择".concat(this.item.labelTitle)}}},xe=ye,_e=Object(j["a"])(xe,we,be,!1,null,null,null);_e.options.__file="wg-checkbox.vue";var ke=_e.exports,Ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-item",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"],style:e.item.style},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.item.showLabel,expression:"item.showLabel"}],staticClass:"wg-title",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("div",{staticClass:"flex-auto"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-select",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.item,"value",t.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v(e._s(e.item.placeholder))]),e._l(e.item.options,function(e){return i("option",{key:e,attrs:{label:e.showLabel?e.label:e},domProps:{value:e}})})],2)])])},Se=[],$e={props:{item:Object},methods:{validate:function(){return""!==this.item.value||this.item.placeholder}}},je=$e,Pe=Object(j["a"])(je,Ce,Se,!1,null,null,null);Pe.options.__file="wg-select.vue";var Oe=Pe.exports,Te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-item wg-switch",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"],style:e.item.style},[i("div",{staticClass:"wg-title",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("label",{staticClass:"label"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-switch-input",staticStyle:{display:"none"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.item.value)?e._i(e.item.value,null)>-1:e.item.value},on:{change:function(t){var i=e.item.value,a=t.target,n=!!a.checked;if(Array.isArray(i)){var s=null,l=e._i(i,s);a.checked?l<0&&e.$set(e.item,"value",i.concat([s])):l>-1&&e.$set(e.item,"value",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.item,"value",n)}}}),i("span",{staticClass:"wg-switch-core"})])])},De=[],Ie={props:{item:Object}},Le=Ie,Ee=Object(j["a"])(Le,Te,De,!1,null,null,null);Ee.options.__file="wg-switch.vue";var Ne=Ee.exports,We=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-item",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"],style:e.item.style},[i("div",{staticClass:"wg-title",style:{width:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("div",{staticClass:"flex-auto"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],staticClass:"wg-input",attrs:{type:"date"},domProps:{value:e.item.value},on:{input:function(t){t.target.composing||e.$set(e.item,"value",t.target.value)}}})])])},Ae=[],Me={props:{item:Object},methods:{validate:function(){return""!==this.item.value||"请选择".concat(this.item.labelTitle)}}},Be=Me,Fe=Object(j["a"])(Be,We,Ae,!1,null,null,null);Fe.options.__file="wg-date.vue";var Ve=Fe.exports,Re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wg-item",class:["top"===e.item.label.labelPosition?"flex-column":"align-middle"],style:e.item.style,attrs:{id:e.item.key}},[i("div",{staticClass:"wg-title",style:{minWidth:e.item.label.labelwidth/50+"rem"}},[e._v(e._s(e.item.label.labelTitle))]),i("div",{staticClass:"flex-auto"},[i("horizontal-picker",{staticStyle:{margin:"0 auto"},attrs:{data:e.item.options,pickerStyle:e.item.pickerStyle,itemWidth:e.item.itemWidth,showNumber:e.item.showNumber},model:{value:e.item.value,callback:function(t){e.$set(e.item,"value",t)},expression:"item.value"}})],1)])},qe=[],Ue={props:{item:Object},methods:{validate:function(){return""!==this.item.value||"请选择".concat(this.item.labelTitle)}}},ze=Ue,He=Object(j["a"])(ze,Re,qe,!1,null,null,null);He.options.__file="wg-horizontal-picker.vue";var Ye=He.exports,Je={name:"widgetItems",components:{WgPhone:de,WgInput:ge,WgCheckbox:ke,WgSelect:Oe,WgSwitch:Ne,WgDate:Ve,WgHorizontalPicker:Ye},props:{wgList:Array},data:function(){return{formData:{}}},methods:{clickBtn:function(e){switch(e.btnType){case"submit":this.$parent.clickSubmit();break;default:break}},valiAllDate:function(){var e=!0,t=!0,i=!1,a=void 0;try{for(var n,s=this.wgList[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var l=n.value;if(Array.isArray(this.$refs[l.key]))if("function"===typeof this.$refs[l.key][0].validate){var o=this.$refs[l.key][0].validate();if(!0!==o){this.$createToast({time:1500,txt:o,type:"txt"}).show(),e=!1;break}this.formatParam(l)}else this.formatParam(l)}}catch(r){i=!0,a=r}finally{try{t||null==s.return||s.return()}finally{if(i)throw a}}return e},formatParam:function(e){e.hasOwnProperty("apiKey")&&("phone"===e.type&&e.showCode&&(this.formData[e.codeKey]=e.codeValue),this.formData[e.apiKey]=e.value)},axiosPost:function(){this.$axios.post("xxx","hello world").then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},Xe=Je,Ke=(i("de4a"),Object(j["a"])(Xe,ne,se,!1,null,"79f7254e",null));Ke.options.__file="index.vue";var Ge=Ke.exports,Qe={name:"home",components:{WidgetItems:Ge},data:function(){return{pageData:null,formData:null}},computed:{theme:function(){return this.pageData?this.pageData.config.theme:null},themeBanner:function(){return this.theme.banner.includes("http")||this.theme.banner.includes("https")?this.theme.banner:this.BASE_URL+this.theme.banner}},watch:{pageData:function(e){document.title=e.config.title}},methods:{clickSubmit:function(){var e=this;if((!this.$refs.formList||this.$refs.formList.valiAllDate())&&(!this.$refs.list||this.$refs.list.valiAllDate())){var t=this.$refs.formList?Object(ae["a"])({},this.$refs.formList.formData):{},i=this.$refs.list?Object(ae["a"])({},this.$refs.list.formData):{};this.formData=Object(ae["a"])({},t,i),this.$loading.open({text:"正在提交...",type:"sandglass"}),setTimeout(function(){e.$loading.close(),e.$createDialog({type:"alert",title:"提示",content:"提交成功"}).show()},3e3)}},getPageData:function(){var e=this,t=this.$util.getSessionStorage("pageData");t?this.pageData=t:window.addEventListener("message",function(t){t.origin===e.$api.postMsgoOrigin()&&"[object Object]"===Object.prototype.toString.call(t.data)&&t.data.config&&t.data.formList&&t.data.list&&(t.source.postMessage("Received",e.$api.postMsgoUrl()),e.pageData=t.data,e.$util.setSessionStorage("pageData",t.data))},!1)}},created:function(){this.getPageData()}},Ze=Qe,et=Object(j["a"])(Ze,te,ie,!1,null,null,null);et.options.__file="home.vue";var tt=et.exports,it={name:"app",components:{Home:tt}},at=it,nt=Object(j["a"])(at,Z,ee,!1,null,null,null);nt.options.__file="App.vue";var st=nt.exports;a["a"].config.productionTip=!1,a["a"].prototype.BASE_URL="",new a["a"]({render:function(e){return e(st)}}).$mount("#app")},"5aea":function(e,t,i){},"5b71":function(e,t,i){"use strict";var a=i("868d"),n=i.n(a);n.a},"868d":function(e,t,i){},9971:function(e,t,i){},b795:function(e,t,i){},c588:function(e,t,i){},de4a:function(e,t,i){"use strict";var a=i("9971"),n=i.n(a);n.a}});