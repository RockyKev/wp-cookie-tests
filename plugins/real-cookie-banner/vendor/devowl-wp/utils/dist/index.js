var devowlWp_utils;(()=>{"use strict";var t,e={550:(t,e,o)=>{o.r(e),o.d(e,{AbstractCategory:()=>nt,AbstractCategoryCollection:()=>rt,AbstractPost:()=>et,AbstractPostCollection:()=>ot,BaseOptions:()=>n,ClientCollection:()=>J,ClientModel:()=>tt,RouteHttpVerb:()=>i,SuspenseChunkTranslation:()=>at,addCorruptRestApi:()=>C,applyQueryString:()=>y,commonRequest:()=>S,commonUrlBuilder:()=>v,createContextFactory:()=>l,createLocalizationFactory:()=>j,createRequestFactory:()=>N,getWebpackPublicPath:()=>a,handleCorrupRestApi:()=>O,handleCorruptRestApi:()=>T,locationRestPluginGet:()=>U,nonceDeprecationPool:()=>P,parseResult:()=>R,qs:()=>u,sprintf:()=>q,trailingslashit:()=>s,untrailingslashit:()=>r,useChunkTranslation:()=>st});class n{constructor(){this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.restRecreateNonceEndpoint=void 0,this.publicUrl=void 0,this.chunkFolder=void 0,this.chunks=void 0}static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t,e=!1){return e?n.slugCamelCase(t):t}}const r=t=>t.endsWith("/")||t.endsWith("\\")?r(t.slice(0,-1)):t,s=t=>"".concat(r(t),"/"),a=t=>{const e=window[t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))];return"".concat(e.publicUrl).concat(e.chunkFolder,"/")};var i,c=o(363);function l(t){const e=(0,c.createContext)(t);return{StoreContext:e,StoreProvider:({children:o})=>React.createElement(e.Provider,{value:t},o),useStores:()=>(0,c.useContext)(e)}}!function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE",t.PATCH="PATCH"}(i||(i={}));var h=o(11),d=o.n(h),u=o(282),p=o(840),f=o.n(p),m=o(25),w=o.n(m);function y(t,e,o){return t.search=u.stringify(o?d().all([u.parse(t.search),...e]):e,!0),t}function v({location:t,params:e={},nonce:o=!0,options:n,cookieValueAsParam:a}){const c=new URL(n.restRoot),l=u.parse(c.search),h=l.rest_route||c.pathname,d=[];let p=t.path.replace(/:([A-Za-z0-9-_]+)/g,((t,o)=>(d.push(o),e[o])));const m={};for(const t of Object.keys(e))-1===d.indexOf(t)&&(m[t]=e[t]);a&&(m._httpCookieInvalidate=w()(JSON.stringify(a.map(f().get))));const{search:v,pathname:b}=new URL(t.path,window.location.href);if(v){const t=u.parse(v);for(const e in t)m[e]=t[e];p=b}c.protocol=window.location.protocol;const g=s(h)+r(t.namespace||n.restNamespace)+p;return l.rest_route?l.rest_route=g:c.pathname=g,o&&n.restNonce&&(l._wpnonce=n.restNonce),y(c,l),["wp-json/","rest_route="].filter((t=>c.toString().indexOf(t)>-1)).length>0&&t.method&&t.method!==i.GET&&y(c,[{_method:t.method}],!0),y(c,[n.restQuery,m],!0),c.toString()}const b={},g={};async function P(t,e){if(void 0!==e){const o=g[t]||new Promise((async(o,n)=>{try{const r=await window.fetch(e,{method:"POST"});if(r.ok){const e=await r.text();t===e?n():(b[t]=e,o(e))}else n()}catch(t){n()}}));return g[t]=o,o}{if(void 0===t)return;await Promise.all(Object.values(g));let e=t;for(;b[e]&&(e=b[e],b[e]!==t););return Promise.resolve(e)}}const E="notice-corrupt-rest-api";async function k(t,e=(async()=>{})){const o=document.getElementById(E);if(o){if(o.querySelector("ul").innerText.indexOf(t)>-1)return;try{await e()}catch(e){o.style.display="block";const n=document.createElement("li");n.innerHTML="<code>".concat(t,"</code>"),o.childNodes[1].appendChild(n),o.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}function C({method:t},e){t===i.GET&&(e?k(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(E))))}function T(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(({persisted:t})=>{const e=document.getElementById(E);e&&t&&0===window.detectCorruptRestApiFailed&&(e.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))k(e,t[e])};let o;const n=()=>{clearTimeout(o),o=setTimeout(e,1e3)};n(),window.addEventListener(E,n)}const O=T;async function R(t,e,o){if(204===e.status)return{};const n=e.clone();try{return await e.json()}catch(e){const r=await n.text();if(""===r&&[i.DELETE,i.PUT].indexOf(o)>-1)return;let s;console.warn("The response of ".concat(t," contains unexpected JSON, try to resolve the JSON line by line..."),{body:r});for(const t of r.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){s=t}throw s}}var x=o(916),_=o.n(x);async function S({location:t,options:e,request:o,params:n,settings:r={},cookieValueAsParam:s,multipart:a=!1,sendRestNonce:c=!0}){const l=t.namespace||e.restNamespace,h=v({location:t,params:n,nonce:!1,options:e,cookieValueAsParam:s});["wp-json/","rest_route="].filter((t=>h.indexOf(t)>-1)).length>0&&t.method&&t.method!==i.GET?r.method=i.POST:r.method=t.method||i.GET;const u=new URL(h),p=-1===["HEAD","GET"].indexOf(r.method);!p&&o&&y(u,[o],!0);const f=u.toString();let m;p&&(m=a?_()(o,"boolean"==typeof a?{}:a):JSON.stringify(o));const w=await P(e.restNonce),b=void 0!==w,g=d().all([r,{headers:{..."string"==typeof m?{"Content-Type":"application/json;charset=utf-8"}:{},...b&&c?{"X-WP-Nonce":w}:{},Accept:"application/json, */*;q=0.1"}}]);let E;g.body=m;let k=!1;const T=()=>{k=!0};window.addEventListener("pagehide",T),window.addEventListener("beforeunload",T);try{E=await window.fetch(f,g)}catch(t){throw k||C(r,l),console.error(t),t}finally{window.removeEventListener("pagehide",T),window.removeEventListener("beforeunload",T)}if(!E.ok){let s,i=!1;try{if(s=await R(f,E,t.method),"private_site"===s.code&&403===E.status&&b&&!c&&(i=!0),"rest_cookie_invalid_nonce"===s.code&&b){const{restRecreateNonceEndpoint:t}=e;try{await P(w,t),i=!0}catch(t){}}}catch(t){}if(i)return await S({location:t,options:e,multipart:a,params:n,request:o,sendRestNonce:!0,settings:r});C(r);const l=E;throw l.responseJSON=s,l}return R(f,E,t.method)}function N(t){return{urlBuilder:e=>v({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot}}),request:e=>S({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint}})}}var D=o(449);const F=wp.i18n,A=wp;var L=o.n(A);function q(t,...e){return F.sprintf(t,...e)}function j(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&L()&&L().i18n)for(const o of e[t])L().i18n.setLocaleData(o,t);return{_n:function(e,o,n,...r){return q(F._n(e,o,n,t),...r)},_nx:function(e,o,n,r,...s){return q(F._nx(e,o,r,n,t),...s)},_x:function(e,o,...n){return q(F._x(e,o,t),...n)},__:function(e,...o){return q(F.__(e,t),...o)},_i:function(t,e){return(0,D.Z)({mixedString:t,components:e})}}}const U={path:"/plugin",method:i.GET};var z=o(921),Z=o(888);const G=mobx;var W,I,M,Q,H;let J=(H=Q=class{constructor(){(0,z.Z)(this,"entries",I,this),(0,z.Z)(this,"busy",M,this),this.annotated=void 0,this.get=(0,G.flow)((function*(t){const{request:e,params:o,clear:n=!1}=t||{};this.busy=!0;try{const{path:t,namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:t,method:i.GET,namespace:r},request:e,params:o});n&&this.entries.clear();for(const t of s){const e=this.instance(t),o=this.entries.get(e.key);o?o.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,G.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:o}=t||{};this.busy=!0;try{const{singlePath:t,namespace:n}=this.annotated,r=yield this.annotated.request({location:{path:t,method:i.GET,namespace:n},request:e,params:o}),s=this.instance(r);this.entries.set(s.key,s)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}},Q.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}},W=H,I=(0,Z.Z)(W.prototype,"entries",[G.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),M=(0,Z.Z)(W.prototype,"busy",[G.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),W);var B,V,Y,X,K,$;let tt=($=K=class{get key(){var t;return null===(t=this.data)||void 0===t?void 0:t[this.annotated.keyId]}constructor(t,e={}){(0,z.Z)(this,"data",V,this),(0,z.Z)(this,"collection",Y,this),(0,z.Z)(this,"busy",X,this),this.annotated=void 0,this.persist=(0,G.flow)((function*(t){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:e,method:o},namespace:n}=this.annotated,r=yield this.annotated.request({location:{path:e,method:o||i.POST,namespace:n},request:this.transformDataForPersist(),params:t||{}});this.fromResponse(r),this.collection.entries.set(this.key,this),this.afterPersist()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,G.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:o},namespace:n}=this.annotated,r=yield this.annotated.request({location:{path:e,method:o||i.PATCH,namespace:n},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(r),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,G.flow)((function*(t){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:e,method:o},namespace:n}=this.annotated,r=yield this.annotated.request({location:{path:e,method:o||i.DELETE,namespace:n},params:{[this.annotated.keyId]:this.key,...t||{}}});return this.collection.entries.delete(this.key),this.afterDelete(),r}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,G.runInAction)((()=>{this.collection=t,this.data=e}))}fromResponse(t){return(0,G.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}},K.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}},B=$,V=(0,Z.Z)(B.prototype,"data",[G.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Y=(0,Z.Z)(B.prototype,"collection",[G.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=(0,Z.Z)(B.prototype,"busy",[G.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,Z.Z)(B.prototype,"key",[G.computed],Object.getOwnPropertyDescriptor(B.prototype,"key"),B.prototype),B);class et extends tt{transformDataForPersist(){var t,e;const o={...super.transformDataForPersist()};return o.title=null===(t=o.title)||void 0===t?void 0:t.rendered,o.content=null===(e=o.content)||void 0===e?void 0:e.rendered,delete o._links,delete o.link,o}transformDataForPatch(){return this.transformDataForPersist()}}class ot extends J{}class nt extends tt{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class rt extends J{}function st(t,{chunks:e,publicUrl:o,textDomain:n,version:r}){const s=e[t.split("?")[0]],a=!!s,[i,l]=(0,c.useState)(!1),h=(0,c.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:s}=e.wpi18nLazy,i="".concat(o,"languages/json/").concat(n,"-").concat(t,".json");if(a&&-1===s.indexOf(i)){s.push(i);try{const t=await window.fetch("".concat(i,"?ver=").concat(r)),{locale_data:{messages:e}}=await t.json();L().i18n.setLocaleData(e,n)}catch{}}}),[o,n]);return(0,c.useEffect)((()=>{a?Promise.all(s.map(h)).then((()=>{l(!0)})):l(!0)}),[a,h]),i}const at=({children:t,chunkFile:e,fallback:o,options:n})=>{const r=st(e,n());return React.createElement(React.Fragment,null,r?t:o)}},363:t=>{t.exports=React}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t].call(s.exports,s,s.exports,n),s.exports}n.m=e,t=[],n.O=(e,o,r,s)=>{if(!o){var a=1/0;for(h=0;h<t.length;h++){for(var[o,r,s]=t[h],i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((t=>n.O[t](o[c])))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(h--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[o,r,s]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={826:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var r,s,[a,i,c]=o,l=0;if(a.some((e=>0!==t[e]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var h=c(n)}for(e&&e(o);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(h)},o=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var r=n.O(void 0,[764],(()=>n(550)));r=n.O(r),devowlWp_utils=r})();
//# sourceMappingURL=index.js.map