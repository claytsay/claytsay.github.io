(self.webpackChunkclaytsay_github_io=self.webpackChunkclaytsay_github_io||[]).push([[6],{203:function(t,e,n){"use strict";n.d(e,{A:function(){return y}});var r=n(4794),o=n(8156),a=n.n(o),i=n(6540),c=n.p+"static/profile-8be0e05ef0e8f9bf5f0fb97627d59f6f.jpg";const s="block mb-6 md:flex",u="w-full max-w-150",l="rounded-full transform transition-all duration-150 hover:scale-105",f="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20",p="text-5xl text-gray-900 font-bold leading-tight hover:text-black",v="text-gray-600",h="mt-6 uppercase tracking-wider",_="inline list-none pr-4",x="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black";var y=t=>{let{metadata:e={},noBlog:n=!1}=t;const o=a()(e,"author",!1),y=a()(e,"github",!1),d=a()(e,"linkedin",!1);return i.createElement("div",{className:s},i.createElement("div",{className:u},i.createElement(r.Link,{to:"/"},i.createElement("img",{className:l,src:c,alt:e.name}))),i.createElement("div",{className:f},i.createElement("h1",{className:p},i.createElement(r.Link,{to:"/"},e.name)),i.createElement("p",{className:v},e.description),i.createElement("ul",{className:h},o&&i.createElement("li",{className:_},i.createElement("a",{className:x,href:`https://twitter.com/${o}`},"Twitter")),y&&i.createElement("li",{className:_},i.createElement("a",{className:x,href:y},"GitHub")),d&&i.createElement("li",{className:_},i.createElement("a",{className:x,href:d},"LinkedIn")),!n&&i.createElement("li",{className:_},i.createElement(r.Link,{className:x,to:"/blog"},"Blog")),i.createElement("li",{className:_},i.createElement(r.Link,{className:x,to:"/portfolio"},"Portfolio")))))}},1549:function(t,e,n){var r=n(2032),o=n(3862),a=n(6721),i=n(2749),c=n(5749);function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},79:function(t,e,n){var r=n(3702),o=n(80),a=n(4739),i=n(8655),c=n(1175);function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},8223:function(t,e,n){var r=n(6110)(n(9325),"Map");t.exports=r},3661:function(t,e,n){var r=n(3040),o=n(7670),a=n(289),i=n(4509),c=n(2949);function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},1873:function(t,e,n){var r=n(9325).Symbol;t.exports=r},4932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},6025:function(t,e,n){var r=n(5288);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},7422:function(t,e,n){var r=n(1769),o=n(7797);t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},2552:function(t,e,n){var r=n(1873),o=n(659),a=n(9350),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},5083:function(t,e,n){var r=n(1882),o=n(7296),a=n(3805),i=n(7473),c=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,l=s.toString,f=u.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?p:c).test(i(t))}},7556:function(t,e,n){var r=n(1873),o=n(4932),a=n(6449),i=n(4394),c=r?r.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},1769:function(t,e,n){var r=n(6449),o=n(8586),a=n(1802),i=n(3222);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},5481:function(t,e,n){var r=n(9325)["__core-js_shared__"];t.exports=r},4840:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},2651:function(t,e,n){var r=n(4218);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},6110:function(t,e,n){var r=n(5083),o=n(392);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},659:function(t,e,n){var r=n(1873),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(s){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},392:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},2032:function(t,e,n){var r=n(1042);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},3862:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},6721:function(t,e,n){var r=n(1042),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},2749:function(t,e,n){var r=n(1042),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},5749:function(t,e,n){var r=n(1042);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},8586:function(t,e,n){var r=n(6449),o=n(4394),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}},4218:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},7296:function(t,e,n){var r,o=n(5481),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},3702:function(t){t.exports=function(){this.__data__=[],this.size=0}},80:function(t,e,n){var r=n(6025),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},4739:function(t,e,n){var r=n(6025);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},8655:function(t,e,n){var r=n(6025);t.exports=function(t){return r(this.__data__,t)>-1}},1175:function(t,e,n){var r=n(6025);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},3040:function(t,e,n){var r=n(1549),o=n(79),a=n(8223);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},7670:function(t,e,n){var r=n(2651);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},289:function(t,e,n){var r=n(2651);t.exports=function(t){return r(this,t).get(t)}},4509:function(t,e,n){var r=n(2651);t.exports=function(t){return r(this,t).has(t)}},2949:function(t,e,n){var r=n(2651);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},2224:function(t,e,n){var r=n(104);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},1042:function(t,e,n){var r=n(6110)(Object,"create");t.exports=r},9350:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},9325:function(t,e,n){var r=n(4840),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},1802:function(t,e,n){var r=n(2224),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},7797:function(t,e,n){var r=n(4394);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},7473:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},5288:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},8156:function(t,e,n){var r=n(7422);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},6449:function(t){var e=Array.isArray;t.exports=e},1882:function(t,e,n){var r=n(2552),o=n(3805);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3805:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},346:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},4394:function(t,e,n){var r=n(2552),o=n(346);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},104:function(t,e,n){var r=n(3661);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},3222:function(t,e,n){var r=n(7556);t.exports=function(t){return null==t?"":r(t)}}}]);
//# sourceMappingURL=500c2994e08cbb1cd01b621c5266fc5f90738ad5-1958d55b59790859d111.js.map