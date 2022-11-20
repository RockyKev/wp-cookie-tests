(()=>{"use strict";var t={n:i=>{var e=i&&i.__esModule?()=>i.default:()=>i;return t.d(e,{a:e}),e},d:(i,e)=>{for(var o in e)t.o(e,o)&&!t.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:e[o]})},o:(t,i)=>Object.prototype.hasOwnProperty.call(t,i)};const i=jQuery;var e=t.n(i);const o=devowlWp_utils,n=()=>window[o.BaseOptions.getPureSlug("real-utils",!0)].others;let a,s;const c=(...t)=>(s||(s=(0,o.createLocalizationFactory)("".concat("devowl-wp","-").concat("real-utils")))).__(...t),l={path:"/cross/:slug/:action/dismiss",method:o.RouteHttpVerb.DELETE},r="crossSellingPointer";class d{constructor(t,i,e,o){this.slug=void 0,this.action=void 0,this.position=void 0,this.$handler=void 0,this.slug=i,this.action=e,this.position=o,this.$handler=t,this.init()}static waitForVisibleElement(t,i,o,n){if(!this.isActionAvailable(i,o))return!1;const a=e()(t);return a.length&&!a.data(r)&&(a.data(r,!0),new d(a,i,o,n)),a.length>0}static isActionAvailable(t,i){var e,o;return!(null===(e=n().cross)||void 0===e||null===(o=e[t])||void 0===o||!o[i])}close(t,i){t.preventDefault();const e=this.$handler.pointer("widget").find('input[type="checkbox"]').is(":checked");if(this.$handler.pointer("close"),this.$handler.pointer("destroy"),i){const{link:t}=this.getAction();window.open(t,"_blank")}((...t)=>{(a||(a=(0,o.createRequestFactory)(window[o.BaseOptions.getPureSlug("real-utils",!0)]))).request(...t)})({location:l,params:{slug:this.slug,action:this.action,force:e}})}buttons(){const t=e()('<a class="button" href="#">'.concat(c("Not now"),"</a>")).click((t=>{this.close(t,!1)})),i=e()('<a class="button button-primary" href="#">'.concat(c("Learn more!"),"</a>")).click((t=>{this.close(t,!0)}));return e()('<div class="real-utils-pointer-buttons" />').append(i,t)}getAction(){var t;return null===(t=n().cross)||void 0===t?void 0:t[this.slug][this.action]}init(){const{position:t}=this,{title:i,description:e,image:o}=this.getAction(),n='<label><input type="checkbox" /> '.concat(c("Never show this popup again"),"</label>");this.$handler.pointer({pointerClass:"wp-pointer real-utils-cross-pointer",content:"<h3>".concat(i,'</h3><p><img src="').concat(o,'" />').concat(e).concat(n,"</p>"),buttons:this.buttons.bind(this),position:t}).pointer("open").pointer("widget").find("img").get(0).onload=()=>this.$handler.pointer("reposition")}}const p="real-media-library",h="real-category-library",u="real-physical-media",b=()=>e()("select#parent").length&&d.isActionAvailable(h,"add-category")&&e()("body.wp-admin.edit-tags-php:not(.woocommerce-page,.post-type-attachment) form#addtag #submit").one("click",(function(){new d(e()(this),h,"add-category","bottom")})),m=()=>e()("select#parent").length&&d.isActionAvailable(h,"add-wc-category")&&e()("body.wp-admin.edit-tags-php.woocommerce-page form#addtag #submit").one("click",(function(){new d(e()(this),h,"add-wc-category","bottom")}));class g{static onChange(){new d(e()(this),h,"assign"),e()(g.SELECTOR).off("change",g.onChange)}static bind(){d.isActionAvailable(h,"assign")&&e()(this.SELECTOR).one("change",this.onChange)}}g.SELECTOR='body.wp-admin.post-php:not(.post-type-attachment) #categorychecklist input[type="checkbox"]';class w{static onClick(t){const i=e()(this).attr("href");return new d(e()(this),h,"pagination"),e()(this).pointer("widget").find(".button").click((()=>{setTimeout((()=>window.open(i,"_self")),1e3)})),e()(w.SELECTOR).off("click",w.onClick),t.preventDefault(),!1}static bind(){d.isActionAvailable(h,"pagination")&&e()(this.SELECTOR).one("click",this.onClick)}}w.SELECTOR="body.wp-admin.edit-php:not(.post-type-attachment) .tablenav-pages .pagination-links a",e()(document).ready((()=>{var t;setTimeout((function t(){let i=!1;!i&&(i=d.waitForVisibleElement("body.wp-admin.upload-php .attachment-info > .details:visible, body.wp-admin.post-php.post-type-attachment #post-body-content #titlewrap:visible",p,"attachment-details")),!i&&(i=d.waitForVisibleElement("body.wp-admin.plugins-php #wpbody-content > div.wrap > h1:first","real-cookie-banner","gdpr-compliant")),!i&&(i=d.waitForVisibleElement('body > div > .media-modal.wp-core-ui .media-frame-router button[role="tab"]:eq(1).active',p,"insert-dialog")),!i&&(i=d.waitForVisibleElement("body.wp-admin .editor-post-taxonomies__hierarchical-terms-list:visible",h,"assign","bottom")),!i&&(i=d.waitForVisibleElement("body.wp-admin.upload-php #wpbody-content .upload-ui .button-hero:visible, body.wp-admin.media-new-php #media-items .media-item:first:visible",u,"upload")),!i&&setTimeout(t,1e3)}),1e3),b(),m(),d.isActionAvailable(u,"move")&&(null===(t=window.rml)||void 0===t||t.hooks.register("attachment/move/finished",((t,i)=>{new d(e()('.rml-container:visible li[data-li-id="'.concat(i,'"]')),u,"move")}))),g.bind(),w.bind()}))})();
//# sourceMappingURL=cross.js.map