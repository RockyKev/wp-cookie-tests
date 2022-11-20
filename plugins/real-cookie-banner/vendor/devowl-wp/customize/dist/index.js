var devowlWp_customize;(()=>{var t,e={206:(t,e,n)=>{"use strict";n.d(e,{W:()=>c});var o=n(363),i=n(370),a=n(340);const c=({setting1:t,setting2:e,setting3:n,modifier:c,children:r})=>{const s=(0,i.D)(),[l,d]=(0,o.useState)(s(t).get()),[u,m]=(0,o.useState)(s(e).get()),[p,v]=(0,o.useState)(n?s(n).get():void 0),[f,h]=(0,o.useState)(0);return(0,o.useEffect)((()=>{for(const{setting:o,setColor:i}of[{setting:t,setColor:d},{setting:e,setColor:m},n?{setting:n,setColor:v}:void 0].filter(Boolean))s(o,(t=>{t.bind("change",(t=>{i(t)}))}))}),[t,e,n]),(0,o.useEffect)((()=>{const[t,e]=c?c(l,u,p,s):[l,u];h((0,a.g)(t,e))}),[l,u,p,c]),r(f)}},442:(t,e,n)=>{"use strict";n.d(e,{J:()=>i});var o=n(316);const i=({children:t})=>{const{params:{label:e,description:n,skipFieldSet:i,className:a},initializeNotifications:c}=(0,o.t)();return i?React.createElement("div",{className:a||""},t):React.createElement(React.Fragment,null,!!e&&React.createElement("span",{className:"customize-control-title"},e),!!c&&React.createElement("div",{className:"customize-control-notifications-container",style:{display:"none"},ref:c}),!!n&&React.createElement("span",{className:"description customize-control-description",dangerouslySetInnerHTML:{__html:n}}),React.createElement("div",{className:"customize-control-content ".concat(a||"")},t))}},11:(t,e,n)=>{"use strict";n.d(e,{j:()=>a});var o=n(316);const i=/^0+0/,a=()=>{const{value:t,setValue:e,params:{dashicon:n}}=(0,o.t)(),a=n=>{const o=+n.target.value,i=[...t];i.splice(+n.target.dataset.index,1,o),e(i)},c=e=>React.createElement("input",{type:"number",value:t[e].toString().replace(i,""),"data-index":e,onChange:a});return React.createElement(React.Fragment,null,React.createElement("div",null,React.createElement("div",null),React.createElement("div",null,c(0)),React.createElement("div",null)),React.createElement("div",null,React.createElement("div",null,c(3)),React.createElement("div",null,React.createElement("span",{className:"dashicons dashicons-".concat(n)})),React.createElement("div",null,c(1))),React.createElement("div",null,React.createElement("div",null),React.createElement("div",null,c(2)),React.createElement("div",null)))}},984:(t,e,n)=>{"use strict";n.d(e,{t:()=>i});var o=n(316);const i=()=>{const{params:{description:t}}=(0,o.t)();return React.createElement(React.Fragment,null,!!t&&React.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))}},177:(t,e,n)=>{"use strict";n.d(e,{s:()=>i});var o=n(316);const i=()=>{const{params:{label:t,description:e,level:n}}=(0,o.t)(),i="h".concat(n);return React.createElement(React.Fragment,null,React.createElement(i,null,t),!!e&&React.createElement("span",{className:"description customize-control-description",dangerouslySetInnerHTML:{__html:e}}))}},626:(t,e,n)=>{"use strict";n.d(e,{W6:()=>d.W,Jl:()=>o.J,jj:()=>i.j,tS:()=>l.t,s0:()=>a.s,C$:()=>c,LO:()=>u.L,md:()=>s});var o=n(442),i=n(11),a=n(177);const c=({children:t})=>React.createElement("div",{className:"customize-control-headline-before-section"},t);var r=n(363);const s=({title:t,children:e,onToggle:n,state:o})=>{const[i,a]=(0,r.useState)(!1),c=(0,r.useCallback)((()=>{null==n||n(!i),a(!i)}),[i,a]),s=void 0===o?i:o;return React.createElement("li",{className:"accordion-section same-section-accordion ".concat(s?"same-section-accordion-open":"")},React.createElement("div",{className:"accordion-section-title",onClick:c},React.createElement("strong",null,t)),s&&React.createElement("div",null,e))};var l=n(984),d=n(206),u=n(15)},15:(t,e,n)=>{"use strict";n.d(e,{L:()=>a});var o=n(465),i=n(316);const a=()=>{const{value:t,setValue:e,params:{unit:n,inputAttrs:a}}=(0,i.t)(),c={...a,value:t,onChange:t=>{e(+t.target.value)}};return React.createElement(React.Fragment,null,React.createElement("input",(0,o.Z)({type:"range"},c)),React.createElement("div",{"data-unit":n||void 0},React.createElement("input",(0,o.Z)({type:"number"},c))))}},316:(t,e,n)=>{"use strict";n.d(e,{t:()=>a,y:()=>i});var o=n(363);class i{static Context(){return this.context=this.context||(0,o.createContext)({})}}function a(){return(0,o.useContext)(i.Context())}i.context=void 0},918:(t,e,n)=>{"use strict";n.d(e,{t:()=>o.t,y:()=>o.y});var o=n(316)},742:(t,e,n)=>{"use strict";n.r(e),n.d(e,{CUSTOMIZE_CLASS_CHECKBOX:()=>i.Kk,CUSTOM_CONTROL_INPUT_CHECKBOX_CLASS_NAME:()=>i.sQ,ContrastRatio:()=>a.W6,ControlFieldset:()=>a.Jl,CssMarginInput:()=>a.jj,CustomControlContextFactory:()=>c.y,CustomHTML:()=>a.tS,Headline:()=>a.s0,HeadlineBeforeSection:()=>a.C$,RangeInput:()=>a.LO,SameSectionAccordion:()=>a.md,addContentBesideSection:()=>i.qr,addContrastRatioToIrisContainer:()=>o.IA,conditionalControls:()=>i.nh,customControl:()=>i.f4,customControlBackboneView:()=>i.Do,getLuminosity:()=>l.x,getLuminosityRatio:()=>l.g,getSidebarCustomize:()=>i.DQ,hasControlChanged:()=>i.Wk,initializeTinyMce:()=>i.gi,isPreviewScreen:()=>o.yJ,listenChanges:()=>o.Ww,listenPanelExpanded:()=>o.HY,makeDefaultsResettable:()=>i.Pi,previewFactory:()=>o.qI,ready:()=>i.Cd,sidebarFactory:()=>i.Yw,useCustomControl:()=>c.t}),n(452);var o=n(435),i=n(599),a=n(626),c=n(918),r=n(485),s={};for(const t in r)["default","addContrastRatioToIrisContainer","isPreviewScreen","listenChanges","listenPanelExpanded","previewFactory","CUSTOMIZE_CLASS_CHECKBOX","CUSTOM_CONTROL_INPUT_CHECKBOX_CLASS_NAME","addContentBesideSection","conditionalControls","customControl","customControlBackboneView","getSidebarCustomize","hasControlChanged","initializeTinyMce","makeDefaultsResettable","ready","sidebarFactory","ContrastRatio","ControlFieldset","CssMarginInput","CustomHTML","Headline","HeadlineBeforeSection","RangeInput","SameSectionAccordion","CustomControlContextFactory","useCustomControl"].indexOf(t)<0&&(s[t]=()=>r[t]);n.d(e,s);var l=n(443)},435:(t,e,n)=>{"use strict";n.d(e,{IA:()=>m,yJ:()=>r,Ww:()=>a,HY:()=>o.H,qI:()=>c});var o=n(504),i=n(370);function a(t,e){const n=(0,i.D)();for(const o of Object.keys(t)){const i=t[o];for(const t of Object.keys(i))n(i[t],(n=>{n.bind("change",(n=>{e(o,t,n)}))}))}}function c({immediateApply:t,onChange:e,onPanelChange:n}){const c=(0,i.D)();if(c.panel){if(t&&e)for(const n of Object.keys(t)){const o=t[n];for(const t of Object.keys(o)){const i=o[t];e[1](n,t,c(i).get())}}e&&a(...e),n&&(0,o.H)(...n)}else console.warn("The sidebar customize API could not be retrieved!")}function r(){return!(0,i.D)(!1).panel}var s=n(206),l=n(311),d=n.n(l),u=n(533);function m(t,e){const n=(0,i.D)();for(const o of t)n.control(o,(({container:t})=>{(0,u.render)(React.createElement(s.W,e),d()("<div />").addClass("customize-control-iris-contrast-ratio").appendTo(t.find(".wp-picker-holder")).get(0))}))}},504:(t,e,n)=>{"use strict";n.d(e,{H:()=>i});var o=n(370);function i(t,e,n=!1){const i=(0,o.D)(),a=i.panel(t)||i.section(t);if(!a)return!1;let c=a.expanded();const r=(o,i)=>{var a;(n||c!==o)&&["accordion-panel-".concat(t),"accordion-section-".concat(t)].indexOf(null===(a=i.currentTarget)||void 0===a?void 0:a.id)>-1&&(e(o),c=o)};return e(c),a.container.bind("expanded",(t=>{r(!0,t)})).bind("collapsed",(t=>{r(!1,t)})),!0}},370:(t,e,n)=>{"use strict";function o(t=!0){var e,n,o;return t&&(null===(e=window)||void 0===e||null===(n=e.parent)||void 0===n?void 0:n.wp.customize)||(null===(o=window)||void 0===o?void 0:o.wp.customize)}n.d(e,{D:()=>o})},599:(t,e,n)=>{"use strict";n.d(e,{Kk:()=>l,sQ:()=>C,qr:()=>s,nh:()=>a,f4:()=>b,Do:()=>y,DQ:()=>o.D,Wk:()=>d,gi:()=>f,Pi:()=>p,Cd:()=>c,Yw:()=>O});var o=n(370),i=n(504);function a(t,e){const n=(0,o.D)();for(const o of Object.keys(e))n.control(o,(a=>{const c=e[o];function r(){let t=!0;for(const e of Object.keys(c)){const o=c[e],i=n(e).get();if("function"==typeof o){if(!o(i)){t=!1;break}}else{const e=!0===o||!1===o;if(e&&!!+i!==o||!e&&i!==o){t=!1;break}}}return["code_editor"].indexOf(a.params.type)>-1?t?a.container.fadeTo(0,1):a.container.fadeTo(0,0):t?a.activate():a.deactivate(),t}r(),Object.keys(c).forEach((t=>n(t).bind("change",(()=>{r()})))),(0,i.H)(t,(t=>{t&&r()}),!0)}))}function c(t){const e=(0,o.D)();e.bind("ready",(()=>{t(e)}))}var r=n(533);function s(t){const e=(0,o.D)();for(const o of Object.keys(t)){var n,i;let a={};const c=t[o];"function"==typeof c?(a.render=c,a.type="before"):a=c;const s=(null===(n=e.section(o))||void 0===n?void 0:n.container.get(0))||(null===(i=e.control(o))||void 0===i?void 0:i.container.get(0));if(!s)return;const l=document.createElement("div");"before"===a.type?s.before(l):s.after(l),(0,r.render)(a.render(s),l)}}const l="customize-control customize-control-checkbox";function d(t,e){var n;const i=(0,o.D)();let a;((null===(n=i.control(t))||void 0===n?void 0:n.container).hasClass(l)||"boolean"==typeof e)&&(a="checkbox");let c=i(t).get();return"checkbox"===a?c=!!+c:isNaN(+c)||(c=+c),JSON.stringify(c)!==JSON.stringify(e)}var u=n(311),m=n.n(u);function p(t,e){const n=(0,o.D)();for(const o in e){const a=e[o];for(const e in a){var i;let c=a[e];"function"==typeof c.toJS&&(c=c.toJS());const r=t.settings[o][e],s=null===(i=n.control(r))||void 0===i?void 0:i.container;if(s){let t=parseInt(s.css("padding-top"));s.hasClass(l)&&(t+=9),s.css("position","relative");const e=m()('<button class="button button-small customize-button-reset" style="top:'.concat(t,'px;">\n    <span class="dashicons dashicons-image-rotate"></span>\n</button>')).appendTo(s).on("click",(t=>{n(r).set(c),s.trigger("customize-reset-value",{defaultValue:c}),e.hide(),t.preventDefault()}));let o;const i=()=>{clearTimeout(o),o=setTimeout((()=>e[d(r,c)?"show":"hide"]()),50)};i(),n(r,(t=>t.bind("change",i)))}}}}const v="devowl-tinymce-setup";function f(){function t(){const t=m()(this);t.addClass(v);const e=t.parents("li.customize-control"),n=t.data("customize-setting-link"),o=window._wpCustomizeSettings.settings[n],{editor:i}=window.wp;if(!o)return;const{mediaButtons:a,toolbar1:c,toolbar2:r}=o;try{i.initialize(m()(this).attr("id"),{quicktags:!0,dragDropUpload:!1,teeny:!1,textareaRows:5,mediaButtons:a,tinymce:{toolbar1:c,toolbar2:r,forced_root_block:!1,wordpress_adv_hidden:!1,wpautop:!1,setup:function(t){e.on("customize-reset-value",((e,{defaultValue:n})=>{t.setContent(n)}))}}})}catch(t){}}m()(document).on("tinymce-editor-init",(function(t,e){e.on("change",(()=>{window.tinyMCE.triggerSave(),m()("#".concat(e.id)).trigger("change")}))}));const e=()=>m()(".customize-control-devowl-tinymce-editor:not(.".concat(v,")")).each(t);e(),jQuery(document).on("oceanready",e)}var h=n(442),g=n(316);const C="nimblecheck-input";function y(t){const e=(0,o.D)(),{Control:n}=e;return n.extend({initialize(...t){this.update=this.update.bind(this),this.initializeNotifications=this.initializeNotifications.bind(this),this.handleRemoved=this.handleRemoved.bind(this),n.prototype.initialize.apply(this,t),e.control.bind("removed",this.handleRemoved)},ready(){this.setting.bind(this.renderContent.bind(this))},renderContent(){const e=g.y.Context(),n=React.createElement(e.Provider,{value:{backboneView:this,params:this.params,initializeNotifications:this.initializeNotifications,value:this.setting.get(),setValue:this.update}},React.createElement(h.J,null,React.createElement(t,null)));(0,r.render)(n,this.container[0])},update(t){"object"!=typeof t||Array.isArray(t)?this.setting.set(t):this.setting.set({...this.setting.get(),...t})},initializeNotifications(t){const{notifications:e}=this;e.container=m()(t),e.render()},handleRemoved(t){t===this&&(this.destroy(),this.container.remove(),e.control.unbind("removed",this.handleRemoved))},destroy(){(0,r.unmountComponentAtNode)(this.container[0]),n.prototype.destroy&&n.prototype.destroy.call(this)}})}function b(t){const e=(0,o.D)();for(const n of Object.keys(t)){const o=t[n];e.controlConstructor[n]||(e.controlConstructor[n]=y(o))}}var R=n(11),E=n(15),S=n(177),w=n(984);function O({panel:t,ids:e,defaults:n,onReady:i,conditionals:r,controls:l,contentBesideSection:d}){return c((c=>{(0,o.D)().panel(t)&&(i(c),r&&a(t,r),d&&s(d),p(e,n),f())})),l&&b(l),b({cssMargin:R.j,rangeInput:E.L,headline:S.s,customHtml:w.t}),!0}},809:()=>{},892:()=>{},485:(t,e,n)=>{"use strict";n.r(e);var o=n(809),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);n.d(e,i);var a=n(892);i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);n.d(e,i)},935:(t,e,n)=>{"use strict";function o(t){const e=t.substring(1);let n=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255;return n=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),o=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),i=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4),.2126*n+.7152*o+.0722*i}n.d(e,{x:()=>o})},340:(t,e,n)=>{"use strict";n.d(e,{g:()=>i});var o=n(935);function i(t,e){const n=(0,o.x)(t),i=(0,o.x)(e);return n>i?(n+.05)/(i+.05):(i+.05)/(n+.05)}},443:(t,e,n)=>{"use strict";n.d(e,{g:()=>i.g,x:()=>o.x});var o=n(935),i=n(340)},452:()=>{},363:t=>{"use strict";t.exports=React},533:t=>{"use strict";t.exports=ReactDOM},311:t=>{"use strict";t.exports=jQuery}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,t=[],o.O=(e,n,i,a)=>{if(!n){var c=1/0;for(d=0;d<t.length;d++){for(var[n,i,a]=t[d],r=!0,s=0;s<n.length;s++)(!1&a||c>=a)&&Object.keys(o.O).every((t=>o.O[t](n[s])))?n.splice(s--,1):(r=!1,a<c&&(c=a));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,i,a]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={826:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var i,a,[c,r,s]=n,l=0;if(c.some((e=>0!==t[e]))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(s)var d=s(o)}for(e&&e(n);l<c.length;l++)a=c[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},n=self.webpackChunkdevowlWp_customize=self.webpackChunkdevowlWp_customize||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=o.O(void 0,[764],(()=>o(742)));i=o.O(i),devowlWp_customize=i})();
//# sourceMappingURL=index.js.map