"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{5095:function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}},3655:function(e,t,n){n.d(t,{X:function(){return r}});function r(e){return"string"==typeof e}},9700:function(e,t,n){n.d(t,{x:function(){return r}});function r(e,t,n){return"function"==typeof e?e(t,n):e}},6082:function(e,t,n){n.d(t,{y:function(){return p}});var r=n(3428),l=n(791),o=n(5137),i=n(3655),s=n(7042),c=n(5095);function a(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t}var u=n(9700);let f=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function p(e){var t,n;let{elementType:p,externalSlotProps:y,ownerState:m,skipResolvingSlotProps:d=!1}=e,h=(0,l.Z)(e,f),b=d?{}:(0,u.x)(y,m),{props:v,internalRef:k}=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:l,externalForwardedProps:o,className:i}=e;if(!t){let e=(0,s.Z)(null==o?void 0:o.className,null==l?void 0:l.className,i,null==n?void 0:n.className),t=(0,r.Z)({},null==n?void 0:n.style,null==o?void 0:o.style,null==l?void 0:l.style),c=(0,r.Z)({},n,o,l);return e.length>0&&(c.className=e),Object.keys(t).length>0&&(c.style=t),{props:c,internalRef:void 0}}let u=(0,c._)((0,r.Z)({},o,l)),f=a(l),p=a(o),y=t(u),m=(0,s.Z)(null==y?void 0:y.className,null==n?void 0:n.className,i,null==o?void 0:o.className,null==l?void 0:l.className),d=(0,r.Z)({},null==y?void 0:y.style,null==n?void 0:n.style,null==o?void 0:o.style,null==l?void 0:l.style),h=(0,r.Z)({},y,n,p,f);return m.length>0&&(h.className=m),Object.keys(d).length>0&&(h.style=d),{props:h,internalRef:y.ref}}((0,r.Z)({},h,{externalSlotProps:b})),g=(0,o.Z)(k,null==b?void 0:b.ref,null==(t=e.additionalProps)?void 0:t.ref),j=(n=(0,r.Z)({},v,{ref:g}),void 0===p||(0,i.X)(p)?n:(0,r.Z)({},n,{ownerState:(0,r.Z)({},n.ownerState,m)}));return j}},4898:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(3428),l=n(791),o=n(2265);n(8185);var i=n(7042),s=n(5600),c=n(6082),a=n(5843),u=n(7927),f=n(3226),p=n(9975),y=n(9782),m=n(7437),d=(0,y.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=n(6659);let b=["slots","slotProps"],v=(0,a.ZP)(h.Z)(({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})})),k=(0,a.ZP)(d)({width:24,height:16});var g=function(e){let{slots:t={},slotProps:n={}}=e,o=(0,l.Z)(e,b);return(0,m.jsx)("li",{children:(0,m.jsx)(v,(0,r.Z)({focusRipple:!0},o,{ownerState:e,children:(0,m.jsx)(k,(0,r.Z)({as:t.CollapsedIcon,ownerState:e},n.collapsedIcon))}))})},j=n(6520),x=n(5702);function w(e){return(0,x.Z)("MuiBreadcrumbs",e)}let O=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],I=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)},_=(0,a.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${O.li}`]:t.li},t.root]})({}),Z=(0,a.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,a.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),N=o.forwardRef(function(e,t){var n,s;let a=(0,u.Z)({props:e,name:"MuiBreadcrumbs"}),{children:f,className:p,component:y="nav",slots:d={},slotProps:h={},expandText:b="Show path",itemsAfterCollapse:v=1,itemsBeforeCollapse:k=1,maxItems:j=8,separator:x="/"}=a,w=(0,l.Z)(a,S),[O,N]=o.useState(!1),C=(0,r.Z)({},a,{component:y,expanded:O,expandText:b,itemsAfterCollapse:v,itemsBeforeCollapse:k,maxItems:j,separator:x}),A=I(C),E=(0,c.y)({elementType:d.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:C}),M=o.useRef(null),D=o.Children.toArray(f).filter(e=>o.isValidElement(e)).map((e,t)=>(0,m.jsx)("li",{className:A.li,children:e},`child-${t}`));return(0,m.jsx)(_,(0,r.Z)({ref:t,component:y,color:"text.secondary",className:(0,i.Z)(A.root,p),ownerState:C},w,{children:(0,m.jsx)(Z,{className:A.ol,ref:M,ownerState:C,children:(n=O||j&&D.length<=j?D:k+v>=D.length?D:[...D.slice(0,k),(0,m.jsx)(g,{"aria-label":b,slots:{CollapsedIcon:d.CollapsedIcon},slotProps:{collapsedIcon:E},onClick:()=>{N(!0);let e=M.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...D.slice(D.length-v,D.length)],s=A.separator,n.reduce((e,t,r)=>(r<n.length-1?e=e.concat(t,(0,m.jsx)(P,{"aria-hidden":!0,className:s,ownerState:C,children:x},`separator-${r}`)):e.push(t),e),[]))})}))});var C=N},1156:function(e,t){Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},8185:function(e,t,n){n(1156)},9989:function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,l;r=t,l=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every(e=>"string"==typeof e))}function i(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every(e=>"string"==typeof e._key))&&"children"in e&&Array.isArray(e.children)&&e.children.every(e=>"object"==typeof e&&"_type"in e)}function s(e){return i(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function c(e){return"@list"===e._type}function a(e){return"@span"===e._type}function u(e){return"@text"===e._type}n.d(t,{YI:function(){return M}});let f=["strong","em","code","underline","strike-through"];function p(e,t,n){if(!o(e)||!e.marks||!e.marks.length)return[];let r=e.marks.slice(),l={};return r.forEach(e=>{l[e]=1;for(let r=t+1;r<n.length;r++){let t=n[r];if(t&&o(t)&&Array.isArray(t.marks)&&-1!==t.marks.indexOf(e))l[e]++;else break}}),r.sort((e,t)=>(function(e,t,n){let r=e[t],l=e[n];if(r!==l)return l-r;let o=f.indexOf(t),i=f.indexOf(n);return o!==i?o-i:t.localeCompare(n)})(l,e,t))}function y(e,t,n){return{_type:"@list",_key:"".concat(e._key||"".concat(t),"-parent"),mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function m(e,t){let n=t.level||1,r=t.listItem||"normal",l="string"==typeof t.listItem;if(c(e)&&(e.level||1)===n&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;let i=e.children[e.children.length-1];return i&&!o(i)?m(i,t):void 0}var d=n(7437),h=n(2265);let b=["block","list","listItem","marks","types"],v=["listItem"],k=["_key"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){var r,l;r=t,l=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function w(e,t,n){let r=t[n],l=e[n];return"function"==typeof r||r&&"function"==typeof l?r:r?j(j({},l),r):l}let O={textDecoration:"underline"},S=(e,t)=>"[@portabletext/react] Unknown ".concat(e,", specify a component for it in the `components.").concat(t,"` prop"),I=e=>S('block type "'.concat(e,'"'),"types"),_=e=>S('mark type "'.concat(e,'"'),"marks"),Z=e=>S('block style "'.concat(e,'"'),"block"),P=e=>S('list style "'.concat(e,'"'),"list"),N=e=>S('list item style "'.concat(e,'"'),"listItem");function C(e){console.warn(e)}let A={display:"none"},E={types:{},block:{normal:e=>{let{children:t}=e;return(0,d.jsx)("p",{children:t})},blockquote:e=>{let{children:t}=e;return(0,d.jsx)("blockquote",{children:t})},h1:e=>{let{children:t}=e;return(0,d.jsx)("h1",{children:t})},h2:e=>{let{children:t}=e;return(0,d.jsx)("h2",{children:t})},h3:e=>{let{children:t}=e;return(0,d.jsx)("h3",{children:t})},h4:e=>{let{children:t}=e;return(0,d.jsx)("h4",{children:t})},h5:e=>{let{children:t}=e;return(0,d.jsx)("h5",{children:t})},h6:e=>{let{children:t}=e;return(0,d.jsx)("h6",{children:t})}},marks:{em:e=>{let{children:t}=e;return(0,d.jsx)("em",{children:t})},strong:e=>{let{children:t}=e;return(0,d.jsx)("strong",{children:t})},code:e=>{let{children:t}=e;return(0,d.jsx)("code",{children:t})},underline:e=>{let{children:t}=e;return(0,d.jsx)("span",{style:O,children:t})},"strike-through":e=>{let{children:t}=e;return(0,d.jsx)("del",{children:t})},link:e=>{let{children:t,value:n}=e;return(0,d.jsx)("a",{href:null==n?void 0:n.href,children:t})}},list:{number:e=>{let{children:t}=e;return(0,d.jsx)("ol",{children:t})},bullet:e=>{let{children:t}=e;return(0,d.jsx)("ul",{children:t})}},listItem:e=>{let{children:t}=e;return(0,d.jsx)("li",{children:t})},hardBreak:()=>(0,d.jsx)("br",{}),unknownType:e=>{let{value:t,isInline:n}=e,r=I(t._type);return n?(0,d.jsx)("span",{style:A,children:r}):(0,d.jsx)("div",{style:A,children:r})},unknownMark:e=>{let{markType:t,children:n}=e;return(0,d.jsx)("span",{className:"unknown__pt__mark__".concat(t),children:n})},unknownList:e=>{let{children:t}=e;return(0,d.jsx)("ul",{children:t})},unknownListItem:e=>{let{children:t}=e;return(0,d.jsx)("li",{children:t})},unknownBlockStyle:e=>{let{children:t}=e;return(0,d.jsx)("p",{children:t})}};function M(e){let{value:t,components:n,listNestingMode:r,onMissingComponent:o=C}=e,i=o||T,c=Array.isArray(t)?t:[t],a=function(e,t){let n;let r=[];for(let i=0;i<e.length;i++){let c=e[i];if(c){var o;if(!s(c)){r.push(c),n=void 0;continue}if(!n){n=y(c,i,t),r.push(n);continue}if(o=n,(c.level||1)===o.level&&c.listItem===o.listItem){n.children.push(c);continue}if((c.level||1)>n.level){let e=y(c,i,t);if("html"===t){let t=n.children[n.children.length-1],r=l(l({},t),{},{children:[...t.children,e]});n.children[n.children.length-1]=r}else n.children.push(e);n=e;continue}if((c.level||1)<n.level){let e=r[r.length-1],l=e&&m(e,c);if(l){(n=l).children.push(c);continue}n=y(c,i,t),r.push(n);continue}if(c.listItem!==n.listItem){let e=r[r.length-1],l=e&&m(e,{level:c.level||1});if(l&&l.listItem===c.listItem){(n=l).children.push(c);continue}n=y(c,i,t),r.push(n);continue}console.warn("Unknown state encountered for block",c),r.push(c)}}return r}(c,r||"html"),u=(0,h.useMemo)(()=>n?function(e,t){let{block:n,list:r,listItem:l,marks:o,types:i}=t,s=x(t,b);return j(j({},e),{},{block:w(e,t,"block"),list:w(e,t,"list"),listItem:w(e,t,"listItem"),marks:w(e,t,"marks"),types:w(e,t,"types")},s)}(E,n):E,[n]),f=(0,h.useMemo)(()=>D(u,i),[u,i]),p=a.map((e,t)=>f({node:e,index:t,isInline:!1,renderNode:f}));return(0,d.jsx)(d.Fragment,{children:p})}let D=(e,t)=>function n(r){let{node:l,index:o,isInline:f}=r,p=l._key||"node-".concat(o);return c(l)?function(r,l,o){let i=r.children.map((e,t)=>n({node:e._key?e:j(j({},e),{},{_key:"li-".concat(l,"-").concat(t)}),index:t,isInline:!1,renderNode:n})),s=e.list,c="function"==typeof s?s:s[r.listItem],a=c||e.unknownList;if(a===e.unknownList){let e=r.listItem||"bullet";t(P(e),{nodeType:"listStyle",type:e})}return(0,d.jsx)(a,{value:r,index:l,isInline:!1,renderNode:n,children:i},o)}(l,o,p):s(l)?function(r,l,o){let i=R({node:r,index:l,isInline:!1,renderNode:n}),s=e.listItem,c="function"==typeof s?s:s[r.listItem],a=c||e.unknownListItem;if(a===e.unknownListItem){let e=r.listItem||"bullet";t(N(e),{type:e,nodeType:"listItemStyle"})}let u=i.children;if(r.style&&"normal"!==r.style){let{listItem:e}=r,t=x(r,v);u=n({node:t,index:l,isInline:!1,renderNode:n})}return(0,d.jsx)(a,{value:r,index:l,isInline:!1,renderNode:n,children:u},o)}(l,o,p):a(l)?function(r,l,o){let{markDef:i,markType:s,markKey:c}=r,f=e.marks[s]||e.unknownMark,p=r.children.map((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n}));return f===e.unknownMark&&t(_(s),{nodeType:"mark",type:s}),(0,d.jsx)(f,{text:function e(t){let n="";return t.children.forEach(t=>{u(t)?n+=t.text:a(t)&&(n+=e(t))}),n}(r),value:i,markType:s,markKey:c,renderNode:n,children:p},o)}(l,0,p):l._type in e.types?function(t,r,l,o){let i=e.types[t._type];return i?(0,d.jsx)(i,j({},{value:t,isInline:o,index:r,renderNode:n}),l):null}(l,o,p,f):i(l)?function(r,l,o,i){let s=R({node:r,index:l,isInline:i,renderNode:n}),{_key:c}=s,a=x(s,k),u=a.node.style||"normal",f="function"==typeof e.block?e.block:e.block[u],p=f||e.unknownBlockStyle;return p===e.unknownBlockStyle&&t(Z(u),{nodeType:"blockStyle",type:u}),(0,d.jsx)(p,j(j({},a),{},{value:a.node,renderNode:n}),o)}(l,o,p,f):u(l)?function(t,n){if("\n"===t.text){let t=e.hardBreak;return t?(0,d.jsx)(t,{},n):"\n"}return t.text}(l,p):function(r,l,o,i){t(I(r._type),{nodeType:"block",type:r._type});let s=e.unknownType;return(0,d.jsx)(s,j({},{value:r,isInline:i,index:l,renderNode:n}),o)}(l,o,p,f)};function R(e){let{node:t,index:n,isInline:r,renderNode:l}=e,i=function(e){var t;let{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];let l=n.map(p),i={_type:"@span",children:[],markType:"<unknown>"},s=[i];for(let e=0;e<n.length;e++){let i=n[e];if(!i)continue;let c=l[e]||[],a=1;if(s.length>1)for(;a<s.length;a++){let e=(null==(t=s[a])?void 0:t.markKey)||"",n=c.indexOf(e);if(-1===n)break;c.splice(n,1)}let u=(s=s.slice(0,a))[s.length-1];if(u){for(let e of c){let t=r.find(t=>t._key===e),n=t?t._type:e,l={_type:"@span",_key:i._key,children:[],markDef:t,markType:n,markKey:e};u.children.push(l),s.push(l),u=l}if(o(i)){let e=i.text.split("\n");for(let t=e.length;t-- >1;)e.splice(t,0,"\n");u.children=u.children.concat(e.map(e=>({_type:"@text",text:e})))}else u.children=u.children.concat(i)}}return i.children}(t),s=i.map((e,t)=>l({node:e,isInline:!0,index:t,renderNode:l}));return{_key:t._key||"block-".concat(n),children:s,index:n,isInline:r,node:t}}function T(){}}}]);