(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(t,e,n){"use strict";e.a={}},147:function(t,e,n){"use strict";var r={name:"profile-card",data:function(){return{socials:[{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UCpBQkRsDXJZNm-wPoyXHBDg?view_as=subscriber"},{icon:"mdi-github",link:"https://github.com/bastilavarias"},{icon:"mdi-facebook",link:"https://www.facebook.com/BastiLavar21"}],communicationTools:[{icon:"mdi-cellphone",text:"+639972217704"},{icon:"mdi-email",text:"denzilbao@gmail.com"},{icon:"mdi-web",text:"https://bastilavarias.github.io/"}]}}},o=n(44),c=n(53),f=n.n(c),l=n(244),h=n(257),d=n(117),v=n(94),m=n(252),x=n(116),y=n(256),w=n(253),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",color:"transparent"}},[r("div",{staticClass:"text-center"},[r("v-avatar",{attrs:{size:100}},[r("v-img",{attrs:{src:n(188)}})],1),t._v(" "),r("div",{staticClass:"mb-5"}),t._v(" "),r("v-card-title",[r("div",{staticClass:"flex-grow-1"}),t._v(" "),r("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"1.8rem"}},[t._v("\n        Sebastian Lavarias")]),t._v(" "),r("div",{staticClass:"flex-grow-1"})]),t._v(" "),r("div",{staticClass:"mb-3"}),t._v(" "),r("v-row",{attrs:{justify:"space-around",align:"center"}},[t._l(t.socials,(function(e,n){return[r("v-btn",{key:n,attrs:{icon:"",depressed:"","x-large":"",href:e.link,target:"_blank"}},[r("v-icon",[t._v(t._s(e.icon))])],1)]}))],2),t._v(" "),r("div",{staticStyle:{"margin-bottom":"2rem"}}),t._v(" "),t._l(t.communicationTools,(function(e,n){return[r("v-chip",{key:n,staticClass:"ma-2"},[r("v-icon",{staticClass:"mr-1"},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.text)+"\n      ")],1)]}))],2)])}),[],!1,null,null,null),_=component.exports;f()(component,{VAvatar:l.a,VBtn:h.a,VCard:d.a,VCardTitle:v.b,VChip:m.a,VIcon:x.a,VImg:y.a,VRow:w.a});var k={name:"default-layout",components:{ProfileCard:_},data:function(){return{isDarkMode:!0,tab:0}},watch:{isDarkMode:function(){this.$vuetify.theme.isDark=this.isDarkMode}},created:function(){this.$vuetify.theme.isDark=!0}},C=(n(220),n(251)),O=n(254),$=n(258),j=n(259),E=n(255),R=Object(o.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-content",[n("v-container",[n("v-row",{attrs:{justify:"space-between"}},[n("div",{staticClass:"flex-grow-1"}),t._v(" "),n("v-switch",{staticClass:"mr-5 mr-lg-0",scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-icon",[t._v("\n              mdi-lightbulb-on-outline\n            ")])]},proxy:!0},{key:"label",fn:function(){return[n("v-icon",[t._v("\n              mdi-weather-night\n            ")])]},proxy:!0}]),model:{value:t.isDarkMode,callback:function(e){t.isDarkMode=e},expression:"isDarkMode"}})],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("profile-card")],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("router-view")],1)],1)],1),t._v(" "),n("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"primary"},on:{click:function(e){return t.$vuetify.goTo(0)}}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)}),[],!1,null,null,null);e.a=R.exports;f()(R,{VApp:C.a,VBtn:h.a,VCol:O.a,VContainer:$.a,VContent:j.a,VIcon:x.a,VRow:w.a,VSwitch:E.a})},154:function(t,e,n){t.exports=n(155)},155:function(t,e,n){"use strict";n.r(e),function(t){n(52),n(70),n(9);var e=n(18),r=(n(78),n(96),n(25)),o=(n(33),n(34),n(5),n(4),n(8),n(30),n(131),n(164),n(169),n(171),n(0)),c=n(148),f=n(118),l=n(3),h=n(32),d=n(93);o.a.component(d.a.name,d.a),o.a.component("NLink",d.a),t.fetch||(t.fetch=c.a);var v,m,x=[],y=window.__NUXT__||{};Object.assign(o.a.config,{silent:!0,performance:!1});var w=o.a.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function k(t,e,n){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,h,d=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._pathChanged=Boolean(v.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,this._pathChanged||!this._queryChanged){t.next=11;break}return t.next=8,Object(l.n)(e,(function(t,e){return{Component:t,instance:e}}));case 8:o=t.sent,o.some((function(t){var r=t.Component,o=t.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return d._diffQuery[t]})):"function"==typeof c&&c.apply(o,[e.query,n.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();case 11:r(),t.next=25;break;case 14:if(t.prev=14,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=22;break}return window.location.reload(!0),t.abrupt("return");case 22:this.error({statusCode:f,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 25:case"end":return t.stop()}}),t,this,[[4,14]])})))).apply(this,arguments)}function O(t,e){return y.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function $(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=O(Object(l.o)(e),y.data?y.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function j(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])})),!c)return Object(l.k)(o,e)}function E(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,d,m,y,w,k,C,O,$,E,R,T,P,S,N,D,A=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?x=[]:(o=[],x=Object(l.e)(n,o).map((function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)}))),c=!1,f=function(path){n.path===path.path&&A.$loading.finish&&A.$loading.finish(),n.path!==path.path&&A.$loading.pause&&A.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(v,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=v.nuxt.dateErr,this._hadError=Boolean(v.nuxt.err),d=[],(m=Object(l.e)(e,d)).length){t.next=26;break}return t.next=14,j.call(this,m,v.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return y=(h.a.options||h.a).layout,t.next=19,this.loadLayout("function"==typeof y?y.call(h.a,v.context):y);case 19:return w=t.sent,t.next=22,j.call(this,m,v.context,w);case 22:if(!c){t.next=24;break}return t.abrupt("return");case 24:return v.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 26:return m.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(_(m,e,n)),t.prev=28,t.next=31,j.call(this,m,v.context);case 31:if(!c){t.next=33;break}return t.abrupt("return");case 33:if(!v.context._errored){t.next=35;break}return t.abrupt("return",r());case 35:return"function"==typeof(k=m[0].options.layout)&&(k=k(v.context)),t.next=39,this.loadLayout(k);case 39:return k=t.sent,t.next=42,j.call(this,m,v.context,k);case 42:if(!c){t.next=44;break}return t.abrupt("return");case 44:if(!v.context._errored){t.next=46;break}return t.abrupt("return",r());case 46:C=!0,t.prev=47,O=!0,$=!1,E=void 0,t.prev=51,R=m[Symbol.iterator]();case 53:if(O=(T=R.next()).done){t.next=65;break}if("function"==typeof(P=T.value).options.validate){t.next=57;break}return t.abrupt("continue",62);case 57:return t.next=59,P.options.validate(v.context);case 59:if(C=t.sent){t.next=62;break}return t.abrupt("break",65);case 62:O=!0,t.next=53;break;case 65:t.next=71;break;case 67:t.prev=67,t.t0=t.catch(51),$=!0,E=t.t0;case 71:t.prev=71,t.prev=72,O||null==R.return||R.return();case 74:if(t.prev=74,!$){t.next=77;break}throw E;case 77:return t.finish(74);case 78:return t.finish(71);case 79:t.next=85;break;case 81:return t.prev=81,t.t1=t.catch(47),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 85:if(C){t.next=88;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 88:return t.next=90,Promise.all(m.map((function(t,i){if(t._path=Object(l.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,A._pathChanged&&A._queryChanged||t._path!==x[i])t._dataRefresh=!0;else if(!A._pathChanged&&A._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)?t._dataRefresh=r.some((function(t){return A._diffQuery[t]})):"function"==typeof r&&(S||(S=Object(l.f)(e)),t._dataRefresh=r.apply(S[i],[e.query,n.query]))}if(A._hadError||!A._isMounted||t._dataRefresh){var o=[],c=t.options.asyncData&&"function"==typeof t.options.asyncData,f=Boolean(t.options.fetch),h=c&&f?30:45;if(c){var m=Object(l.m)(t.options.asyncData,v.context).then((function(e){Object(l.a)(t,e),A.$loading.increase&&A.$loading.increase(h)}));o.push(m)}if(A.$loading.manual=!1===t.options.loading,f){var p=t.options.fetch(v.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){A.$loading.increase&&A.$loading.increase(h)})),o.push(p)}return Promise.all(o)}})));case 90:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=107;break;case 93:if(t.prev=93,t.t2=t.catch(28),"ERR_REDIRECT"!==(N=t.t2||{}).message){t.next=98;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,N));case 98:return x=[],Object(l.i)(N),"function"==typeof(D=(h.a.options||h.a).layout)&&(D=D(v.context)),t.next=104,this.loadLayout(D);case 104:this.error(N),this.$nuxt.$emit("routeChanged",e,n,N),r();case 107:case"end":return t.stop()}}),t,this,[[28,93],[47,81],[51,67,71,79],[72,,74,78]])})))).apply(this,arguments)}function T(t,n){Object(l.c)(t,(function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.a.extend(t))._Ctor=t,r.components[c]=t),t}))}function P(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?(h.a.options||h.a).layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(v.context)),this.setLayout(e)}function S(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=Object(l.f)(t),c=Object(l.e)(t);o.a.nextTick((function(){r.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.a.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),P.call(n,t)}))}}function N(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),m.afterEach((function(e,n){o.a.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function D(){return(D=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v=e.app,m=e.router,n=new o.a(v),r=function(){n.$mount("#__nuxt"),m.afterEach(T),m.afterEach(S.bind(n)),o.a.nextTick((function(){N(n)}))},t.next=6,Promise.all($(m));case 6:if(c=t.sent,n.setTransitions=n.$options.nuxt.setTransitions.bind(n),c.length&&(n.setTransitions(_(c,m.currentRoute)),x=m.currentRoute.matched.map((function(t){return Object(l.b)(t.path)(m.currentRoute.params)}))),n.$loading={},y.error&&n.error(y.error),m.beforeEach(k.bind(n)),m.beforeEach(E.bind(n)),!y.serverRendered){t.next=16;break}return r(),t.abrupt("return");case 16:f=function(){T(m.currentRoute,m.currentRoute),P.call(n,m.currentRoute),r()},E.call(n,m.currentRoute,m.currentRoute,(function(path){if(path){var t=m.afterEach((function(e,n){t(),f()}));m.push(path,void 0,(function(t){t&&w(t)}))}else f()}));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(h.b)().then((function(t){return D.apply(this,arguments)})).catch(w)}.call(this,n(59))},182:function(t,e,n){"use strict";var r=n(87);n.n(r).a},183:function(t,e,n){(e=n(10)(!1)).push([t.i,"h1[data-v-d0680786]{font-size:20px}",""]),t.exports=e},186:function(t,e,n){"use strict";var r=n(88);n.n(r).a},187:function(t,e,n){(e=n(10)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#c0392b;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},188:function(t,e,n){t.exports=n.p+"img/273e4b7.jpeg"},220:function(t,e,n){"use strict";var r=n(91);n.n(r).a},221:function(t,e,n){(e=n(10)(!1)).push([t.i,"#app{font-family:Roboto Condensed,sans-serif}",""]),t.exports=e},3:function(t,e,n){"use strict";n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return m})),n.d(e,"a",(function(){return x})),n.d(e,"o",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return k})),n.d(e,"n",(function(){return C})),n.d(e,"h",(function(){return O})),n.d(e,"p",(function(){return j})),n.d(e,"k",(function(){return R})),n.d(e,"m",(function(){return T})),n.d(e,"d",(function(){return P})),n.d(e,"b",(function(){return S})),n.d(e,"g",(function(){return N})),n.d(e,"l",(function(){return D}));n(12),n(9);var r=n(14),o=(n(42),n(43),n(83),n(18)),c=(n(49),n(50),n(175),n(177),n(31),n(78),n(25)),f=(n(52),n(5),n(4),n(8),n(30),n(2)),l=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function v(t){l.a.config.errorHandler&&l.a.config.errorHandler(t)}function m(t){return t.then((function(t){return t.default||t}))}function x(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return w(t,e,"instances")}function k(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function C(t,e){return Promise.all(k(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r,o,c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=y(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function O(t){return $.apply(this,arguments)}function $(){return($=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,C(e);case 4:return t.abrupt("return",d({},e,{meta:w(e).map((function(t,n){return d({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,f,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=B(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([O(n.route),O(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],h=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():T(t[0],e).then((function(){return R(t.slice(1),e)}))}function T(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function P(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",I(e)));return function(e,r){for(var path="",data=e||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],h=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d]),!n[c].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?L(l,!0):o(l),!n[c].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=A.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var v=t[c],m=n[2],x=n[3],y=n[4],w=n[5],_=n[6],k=n[7];path&&(r.push(path),path="");var C=null!=m&&null!=v&&v!==m,O="+"===_||"*"===_,$="?"===_||"*"===_,j=n[2]||f,pattern=y||w;r.push({name:x||o++,prefix:m||"",delimiter:j,optional:$,repeat:O,partial:C,asterisk:Boolean(k),pattern:pattern?V(pattern):k?".*":"[^"+M(j)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e),e)}function N(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function D(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var A=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function M(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function V(t){return t.replace(/([=!:$/()])/g,"\\$1")}function I(t){return t&&t.sensitive?"":"i"}function B(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,f=t.split("/"),l=(n?n+"://":"//")+f.shift(),path=f.filter(Boolean).join("/");if(2===(f=path.split("#")).length){var h=f,d=Object(r.a)(h,2);path=d[0],c=d[1]}return l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),l+=c?"#"+c:""}},32:function(t,e,n){"use strict";n.d(e,"b",(function(){return K})),n.d(e,"a",(function(){return S}));n(78),n(12),n(9),n(5),n(4),n(8);var r=n(25),o=n(2),c=(n(30),n(0)),f=n(149),l=n(119),h=n.n(l),d=n(58),v=n.n(d),m=n(69),x=n(3);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var y=function(){},w=m.a.prototype.push;m.a.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,n=arguments.length>2?arguments[2]:void 0;return w.call(this,t,e,n)},c.a.use(m.a);var _={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(x.e)(t);(o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))||o.some((function(t){return t.options.scrollToTop})))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/contact",component:function(){return Object(x.j)(n.e(2).then(n.bind(null,275)))},name:"contact"},{path:"/",component:function(){return Object(x.j)(Promise.all([n.e(6),n.e(3)]).then(n.bind(null,274)))},name:"index"}],fallback:!1};function k(){return new m.a(_)}var C={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};O.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var v={};$.forEach((function(t){"function"==typeof h[t]&&(v[t]=h[t].bind(o))}));var m=v.beforeEnter;if(v.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),m)return m.call(o,t)},!1===h.css){var x=v.leave;(!x||x.length<2)&&(v.leave=function(t,e){x&&x.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:d,on:v},[y])}},O=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],$=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],j={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},E=(n(182),n(44)),R=n(53),T=n.n(R),P=n(251),component=Object(E.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"d0680786",null),S=component.exports;T()(component,{VApp:P.a});n(49),n(50),n(31);var N=n(14),D={name:"Nuxt",components:{NuxtChild:C,NuxtError:S},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured:function(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(x.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(N.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){var e=this;return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick((function(){return e.errorFromNuxtError=!1})),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((function(){return e.displayingNuxtError=!1})),t(S,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},A=(n(52),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),L=(n(186),Object(E.a)(A,void 0,void 0,!1,null,null,null).exports),M={_default:n(147).a},V={head:{titleTemplate:"%s",title:"",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto+Condensed:100,300,400,500,700,900"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"},{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"},{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"});if(this.nuxt.err&&S){var r=(S.options||S).layout;r&&this.setLayout("function"==typeof r?r.call(S,this.context):r)}var o=t(this.layout||"nuxt"),c=t("div",{domProps:{id:"__layout"},key:this.layoutName},[o]),f=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[c]);return t("div",{domProps:{id:"__nuxt"}},[n,f])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=Object(x.f)(t.$route)).length){e.next=3;break}return e.abrupt("return");case 3:return t.$loading.start(),r=n.map((function(e){var p=[];return e.$options.fetch&&p.push(Object(x.m)(e.$options.fetch,t.context)),e.$options.asyncData&&p.push(Object(x.m)(e.$options.asyncData,t.context).then((function(t){for(var n in t)c.a.set(e.$data,n,t[n])}))),Promise.all(p)})),e.prev=5,e.next=8,Promise.all(r);case 8:e.next=15;break;case 10:e.prev=10,e.t0=e.catch(5),t.$loading.fail(),Object(x.i)(e.t0),t.error(e.t0);case 15:t.$loading.finish();case 16:case"end":return e.stop()}}),e,null,[[5,10]])})))()},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&M["_"+t]||(t="default"),this.layoutName=t,this.layout=M["_"+t],this.layout},loadLayout:function(t){return t&&M["_"+t]||(t="default"),Promise.resolve(M["_"+t])}},components:{NuxtLoading:L}},I=n(120),B={theme:{themes:{dark:{primary:"#1976d2",accent:"#424242",secondary:"#ff8f00",info:"#26a69a",warning:"#ffc107",error:"#dd2c00",success:"#00e676"},light:{primary:"#c0392b"}}}};c.a.use(I.a,{});var F=function(t){var e="function"==typeof B?B(t):B;e.icons=e.icons||{},e.icons.iconfont="mdi";var n=new I.a(e);t.app.vuetify=n,t.$vuetify=n.framework};function U(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function J(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.component(h.a.name,h.a),c.a.component(v.a.name,J({},v.a,{render:function(t,e){return v.a._warned||(v.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),v.a.render(t,e)}})),c.a.component(C.name,C),c.a.component("NChild",C),c.a.component(D.name,D),c.a.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var H={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function K(t){return Q.apply(this,arguments)}function Q(){return(Q=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,f,path;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:return n=t.sent,r=J({router:n,nuxt:{defaultTransition:H,transitions:[H],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},H,{name:t}):Object.assign({},H,t):H})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=Boolean(t),t=t?Object(x.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},V),o=e?e.next:function(t){return r.router.push(t)},e?f=n.resolve(e.url).route:(path=Object(x.d)(n.options.base,n.options.mode),f=n.resolve(path).route),t.next=8,Object(x.p)(r,{route:f,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:return function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use((function(){Object.prototype.hasOwnProperty.call(c.a,t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})})))},t.next=12,F(r.context);case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},87:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("99d3c0e6",content,!0,{sourceMap:!1})},88:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5b425f4d",content,!0,{sourceMap:!1})},91:function(t,e,n){var content=n(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("262847ae",content,!0,{sourceMap:!1})},93:function(t,e,n){"use strict";n(4),n(70),n(9),n(5),n(33),n(34);var r=n(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},f=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy:function(){c(this.handleId),this.__observed&&(f.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){f&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),f.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetchLink:function(){if(this.canPrefetch()){f.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value,h=l();h instanceof Promise&&h.catch((function(){})),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}}}},[[154,4,1,5]]]);