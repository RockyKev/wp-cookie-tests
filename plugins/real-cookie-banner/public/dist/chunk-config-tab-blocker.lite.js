"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[478],{5241:(e,t,a)=>{a.d(t,{X:()=>c});var n=a(3867),r=a(5217),o=a(9743);const c=(0,n.Pi)((({style:e})=>{const{optionStore:{blockerActive:t,allBlockerCount:a}}=(0,o.m)();return!t&&a>0&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:e},React.createElement("p",null,(0,r.__)("Content Blockers are globally deactivated in the settings and are therefore not displayed on your website.")," ","• ",React.createElement("a",{href:"#/settings"},(0,r.__)("Enable now"))))}))},9069:(e,t,a)=>{a.r(t),a.d(t,{BlockerRouter:()=>N});var n=a(3867),r=a(6711),o=a(5470),c=a(3625),i=a(5241),l=a(7363),s=a(9743),d=a(1487),u=a(164),m=a(5217);class h{static Context(){return this.context=this.context||(0,l.createContext)({})}}function p(){return(0,l.useContext)(h.Context())}h.context=void 0;var f=a(4944),g=a(7465),v=a(5793),y=a(1839),R=a(8208),E=a(9511),b=a(7759),k=a(8936),_=a(7837),w=a(8057);const C=({busy:e,attributes:{id:t,name:a,description:n,status:r,criteria:o,services:c,tcfVendors:i,rules:s,isVisual:d},avatarUrl:u,isCreatedFromTemplate:m})=>{const{__:h,onEdit:f,onDelete:g}=p(),[y,C]=(0,l.useState)(!1);return React.createElement(v.ZP.Item,{itemID:t.toString(),actions:[React.createElement("a",{key:"edit",onClick:()=>f(t),style:{cursor:"pointer",textDecoration:"none"}},h("Edit")),React.createElement(k.Z,{key:"delete",title:h("Are you sure that you want to delete this content blocker?"),placement:"bottomRight",onConfirm:()=>g(t),okText:h("Delete"),cancelText:h("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},h("Delete")))]},React.createElement(R.Z,{spinning:e},React.createElement(v.ZP.Item.Meta,{avatar:u?React.createElement(b.C,{size:"large",src:u,shape:"square"}):React.createElement(b.C,{size:"large",shape:"circle"},a.toUpperCase()[0]),title:React.createElement("span",null,a," ","draft"===r?React.createElement(E.Z,{color:"orange"},h("Draft")):"private"===r?React.createElement(E.Z,{color:"red"},h("Disabled")):null,"services"===o&&0===c.length&&React.createElement(E.Z,{color:"red"},h("No connected services defined")," ",React.createElement(_.Z,null)," ",h("Disabled")),"tcfVendors"===o&&0===i.length&&React.createElement(E.Z,{color:"red"},h("No connected TCF Vendors defined")," ",React.createElement(_.Z,null)," ",h("Disabled")),!!m&&React.createElement(E.Z,null,h("Created from template"))),description:React.createElement("div",null,!!n&&React.createElement("div",null,(0,w.E)(n)),React.createElement("div",{style:{paddingTop:5}},h("URLs / Elements to block"),":"," ",s.slice(0,y?s.length:5).map(((e,t)=>React.createElement(E.Z,{key:"".concat(e,"-").concat(t)},e))),s.length>5&&!y&&React.createElement(E.Z,{onClick:()=>C(!0),style:{cursor:"pointer",textDecoration:"underline"}},h("Show all"))),React.createElement("div",{style:{paddingTop:5}},h("Visual Content Blocker"),":"," ",React.createElement(E.Z,null,h(d?"Yes, if possible":"No"))))})))},x=()=>{const{__:e,busy:t,serviceCount:a,contentBlockerCount:n,rows:r,onCreate:o}=p(),c=(0,l.useMemo)((()=>{const e=[];for(let t=0;t<n;t++)e.push({key:t});return e}),[n]),i=e("Add content blocker");return n?React.createElement(React.Fragment,null,React.createElement("div",{className:"wp-clearfix"},React.createElement("a",{onClick:o,className:"button button-primary right",style:{marginBottom:10}},i)),t?React.createElement(v.ZP,{dataSource:c,renderItem:()=>React.createElement(v.ZP.Item,null,React.createElement(y.Z,{loading:!0,active:!0,paragraph:{rows:1}}))}):React.createElement(v.ZP,null,r.map((e=>React.createElement(C,(0,g.Z)({},e,{key:e.attributes.id.toString()})))))):React.createElement(f.Z,{description:e(a>0?"You have not yet created a content blocker.":"Because a content blocker must be associated with a service, you must create a service first.")},React.createElement("a",{className:"button button-primary",onClick:o},i))},Z=(0,n.Pi)((()=>{const{addLink:e,editLink:t}=(0,d.w)(),{cookieStore:a}=(0,s.m)(),{blockers:n,cookiesCount:r,blockersCount:o}=a,{busy:c,entries:i}=n,{link:p}=(0,u.R)();(0,l.useEffect)((()=>{a.fetchBlockers(),a.fetchGroups()}),[]);const f=h.Context();return React.createElement(f.Provider,{value:{__:m.__,busy:c,serviceCount:r,contentBlockerCount:o,rows:Array.from(i.values()).map((e=>{const{key:t,busy:a,data:n,rules:r,services:o,tcfVendors:c,presetModel:i}=e,{title:{raw:l},content:{raw:s},status:d,meta:{criteria:u,presetId:m,isVisual:h}}=n;return{busy:a,attributes:{id:t,criteria:u,description:s,name:l,isVisual:h,rules:r,services:o,status:d,tcfVendors:c},avatarUrl:null==i?void 0:i.fullLogoUrl,isCreatedFromTemplate:!!m}})),onDelete:e=>i.get(e).delete({force:!0}),onEdit:e=>{window.location.href=t(i.get(e))},onCreate:()=>{window.location.href=r>0?e:p}}},React.createElement(x,null))}));var S=a(2500),T=a(2637),P=a(4121),A=a(971),B=a(9520),D=a(9812);const F=(0,n.Pi)((()=>{const{cookieStore:e,checklistStore:t}=(0,s.m)(),{presetsBlocker:a,busyPresetsBlocker:n}=e,[r,o]=(0,l.useState)(),[i,d]=(0,l.useState)(!1),{logoUrl:u,openDialog:h}=(0,P.u)(),{force:p,cookieCreationPrompt:f,attributes:g,navigateAfterCreation:v=!0}=(0,A.y)(),y=(0,l.useCallback)((async t=>{d(!0);const a=e.presetsBlocker.get(t),{data:{identifier:n,version:r}}=a;o({identifier:n,version:r}),d(!1)}),[e]),E=(0,l.useCallback)((e=>{!1===e?o(!1):y(e.identifier)}),[y]);return(0,l.useEffect)((()=>{!async function(){await e.fetchPresetsBlocker(),p&&("scratch"===p?o(!!g&&{overwriteAttributes:JSON.parse(g),identifier:void 0,version:void 0}):y(p))}(),t.toggleChecklistItem("add-blocker",!0)}),[]),void 0===r?React.createElement(c.f,null,p?React.createElement(R.Z,{spinning:!0}):React.createElement(R.Z,{spinning:i},React.createElement(S.j,{type:"contentBlocker",presets:Array.from(a.values()).map((({data:{logoFile:e,...t},fullLogoUrl:a})=>({...t,logoUrl:a}))),fetchingPresets:n,onSelect:E,quickLinks:[{id:"from-scratch",cover:React.createElement(B.Z,{style:{paddingTop:25,fontSize:70}}),title:(0,m.__)("Create from scratch"),description:(0,m.__)("an individual content blocker"),onClick:()=>E(!1)},{id:"scanner",cover:React.createElement(D.Z,{style:{paddingTop:25,fontSize:70}}),title:(0,m.__)("Scan website"),description:(0,m.__)("and find used service"),onClick:()=>window.location.hash="#/scanner"},{id:"cookie-experts",cover:React.createElement("img",{src:u,style:{display:"block",paddingTop:15,margin:"auto",height:95}}),title:"Cookie Experts",description:(0,m.__)("help you with the setup"),onClick:h}]},React.createElement("h1",{style:{margin:"20px 0"}},(0,m.__)("...or create it from one of our templates"))))):React.createElement(c.f,{maxWidth:"fixed"},React.createElement(T.d,{cookieCreationPrompt:"1"===f,preset:!1===r?void 0:{identifier:r.identifier,version:r.version},overwriteAttributes:!1===r?void 0:r.overwriteAttributes,navigateAfterCreation:v}))}));var L=a(5945);const N=(0,n.Pi)((()=>{const{path:e}=(0,r.useRouteMatch)(),t=(0,L.v)("blocker");return React.createElement(React.Fragment,null,React.createElement(i.X,{style:{margin:"10px 0 0 0"}}),React.createElement(r.Switch,null,React.createElement(React.Fragment,null,React.createElement(o.K,{identifier:"blocker"}),React.createElement(r.Route,{path:e,exact:!0},React.createElement(c.f,null,React.createElement(Z,null),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},t))),React.createElement(r.Route,{path:"".concat(e,"/new")},React.createElement(F,null)),React.createElement(r.Route,{path:"".concat(e,"/edit/:blocker")},React.createElement(c.f,{maxWidth:"fixed"},React.createElement(T.d,null))))))}))},3625:(e,t,a)=>{a.d(t,{f:()=>n});const n=({children:e,maxWidth:t="auto",style:a={}})=>React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===t?1300:t,...a}},e)},5470:(e,t,a)=>{a.d(t,{K:()=>d});var n=a(3751),r=a(7363),o=a(3867),c=a(5217),i=a(5230),l=a(5945),s=a(9743);const d=(0,o.Pi)((({identifier:e,width:t,title:a})=>{const{optionStore:o}=(0,s.m)(),{others:{modalHints:d}}=o,[u,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{m(-1===d.indexOf(e))}),[d.length,e]);const h=(0,l.v)(e),p="string"==typeof h&&h.indexOf("?")>-1?h.split("?")[0]:"",f=a||(p?"".concat(p,"?"):(0,c.__)("What you should definitely know!")),g="string"==typeof h&&"string"==typeof f&&p?h.replace(f,"").trim():h,v=(0,r.useCallback)((()=>{o.setModalHintSeen(e)}),[e,o]);return React.createElement(n.Z,{visible:u,title:React.createElement("span",null,React.createElement(i.Z,{style:{color:"#1890ff"}})," ",f),closable:!1,onOk:v,width:t,okText:(0,c.__)("Okay, I got it"),cancelButtonProps:{style:{display:"none"}}},g)}))},2500:(e,t,a)=>{a.d(t,{j:()=>R});var n=a(7465),r=a(8208),o=a(4217),c=a(2065),i=a(7532),l=a(7363),s=a(3867),d=a(9712),u=a(5217),m=a(301),h=a(9511),p=a(1816),f=a(9743);const{Meta:g}=i.Z,v=(0,s.Pi)((function(e){const{identifier:t,version:a,name:n,description:r,logoUrl:o,disabled:c,created:s,attributes_name:d,tier:v,tags:y,onSelect:R,renderActions:E}=e,{optionStore:{others:{isDemoEnv:b}}}=(0,f.m)(),{isPro:k,open:_,modal:w}=(0,p.t)({title:(0,u.__)("Want to use %s template?",n),feature:"preset",description:"".concat((0,u.__)("Only a limited number of templates for services and content blockers are available in the %s version of Real Cookie Banner. Get the PRO version now and create a service or content blocker from this template with just one click!",(b?(0,u.__)("Demo"):(0,u.__)("Free")).toLowerCase())).concat(b?"":"\n\n".concat((0,u.__)("You can create this service yourself in the free version without any restrictions and research the necessary information.")))},!b&&void 0),C=(0,u.__)("Disabled"),x="pro"===v&&!k;return React.createElement(l.Fragment,{key:t},w,React.createElement(m.Z,{title:c?React.createElement("span",{dangerouslySetInnerHTML:{__html:y[C]}}):void 0},React.createElement(i.Z,{className:"rcb-antd-preset-card",hoverable:!c,style:{opacity:c||s?.6:1},onClick:e=>{e.target.closest(".rcb-antd-card")&&(x?_():c||R({identifier:t,version:a,attributes_name:d},e))},cover:React.createElement("img",{style:{width:"90%"},src:o}),actions:E?E(e):[]},React.createElement(g,{title:React.createElement("span",null,x&&React.createElement(h.Z,{color:p.k},"PRO"),!!y&&Object.keys(y).map((e=>React.createElement(m.Z,{title:e===C?void 0:React.createElement("span",{dangerouslySetInnerHTML:{__html:y[e]}}),key:e},React.createElement(h.Z,null,e)))),React.createElement("br",null),n),description:r||React.createElement("i",null,(0,u.__)("No description"))}))))})),{Meta:y}=i.Z,R=(0,s.Pi)((function({fetchingPresets:e,presets:t,onSelect:a,renderActions:s,quickLinks:m=[],children:h,showSearch:p=!0,showDisabled:f=!0,showHidden:g=!1}){const{isPro:R}=(0,d.u)(),[E,b]=(0,l.useState)(""),[k,_]=(0,l.useState)(!1),w=(0,l.useMemo)((()=>t.filter((({tier:e})=>!!R||!k||"pro"!==e)).filter((({name:e,description:t})=>!E.trim().length||E.split(" ").filter(Boolean).filter((a=>"".concat(e," ").concat(t||"").toLowerCase().indexOf(a.trim().toLowerCase())>-1)).length>0)).filter((({hidden:e})=>!!g||!e)).filter((({disabled:e})=>!!f||!e))),[t,E,k]);return React.createElement("div",{className:"column-posts"},m.map((({id:e,cover:t,description:a,onClick:n,title:r})=>React.createElement(i.Z,{key:e,hoverable:!0,style:{margin:5,width:240,display:"inline-block"},onClick:n,cover:t},React.createElement(y,{title:r,description:a})))),React.createElement(r.Z,{spinning:e},h,p&&React.createElement("div",{style:{marginBottom:20}},React.createElement(c.Z.Search,{autoFocus:!0,style:{maxWidth:400},placeholder:(0,u.__)("Search template by name..."),onChange:e=>b(e.target.value)}),React.createElement("br",null),!R&&React.createElement(o.Z,{onChange:()=>_(!k),style:{marginTop:10}},(0,u.__)("Show only free templates")))),0===w.length&&E.length>0&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0",maxWidth:400,display:"inline-block"}},React.createElement("p",null,(0,u._i)((0,u.__)("{{strong}}No template found{{/strong}}. Please try to create the service yourself or {{a}}contact us{{/a}} and let us know for which service you need a template."),{strong:React.createElement("strong",null),a:React.createElement("a",{href:(0,u.__)("https://devowl.io/support/"),target:"_blank",rel:"noreferrer"})}))),w.map((e=>React.createElement(v,(0,n.Z)({key:e.id,onSelect:a,renderActions:s},e)))))}))},5945:(e,t,a)=>{a.d(t,{v:()=>p});var n=a(7743),r=a(2605),o=a(3404),c=a(7568),i=a(1576),l=a(7421),s=a(9743),d=a(5217),u=a(4121),m=a(8488),h=a.n(m);function p(e){const{optionStore:{tcf:t,consentsDeletedAt:a,consentDuration:m}}=(0,s.m)();switch(e){case"scanner":{const{openDialog:e}=(0,u.u)();return React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},(0,d.__)("The scanner finds services that you use on your website that might set/read cookies or process personal data. This is e.g. Google Analytics, YouTube or Elementor. If there is no template for a service, you will see from which external URLs content, scripts etc. are embedded. This allows you to set up your cookie banner quickly and easily.")),React.createElement("p",{className:"description"},(0,d._i)((0,d.__)("We explicitly do not find cookies because that would not work reliably. {{a}}We explained why in our knowledge base.{{/a}}"),{a:React.createElement("a",{rel:"noreferrer",href:(0,d.__)("https://devowl.io/knowledge-base/real-cookie-banner-cookie-scanner-finds-cookies-automatically/"),target:"_blank"})})),React.createElement(n.Z,{style:{margin:"10px 0"}},React.createElement(r.Z,{span:11},React.createElement("div",{style:{paddingRight:10}},React.createElement(o.Z,null,(0,d.__)("What the scanner finds ...")),[(0,d.__)("External services (with and without template)"),(0,d.__)("WordPress plugins with templates that require consent"),(0,d.__)("Automatic check of all subpages of your website")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(c.Z,{twoToneColor:"#52c41a"}),"  ",e))))),React.createElement(r.Z,{span:2,style:{textAlign:"center"}},React.createElement(o.Z,{type:"vertical",style:{height:"100%"}})),React.createElement(r.Z,{span:11},React.createElement("div",null,React.createElement(o.Z,null,(0,d.__)("... and what it does not")),[(0,d.__)("Cookies from unknown WordPress plugins"),(0,d.__)("Services embedded after the page load via JavaScript"),(0,d.__)("Complete coverage of your individual use case")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(i.Z,{twoToneColor:"#eb2f96"}),"  ",e)))))),React.createElement("p",{className:"description"},(0,d._i)((0,d.__)("Just by using the scanner, you will not set up your cookie banner one hundred percent correctly. If it is too complex or time-consuming for you to set up the cookie banner yourself, just let one of our {{a}}cookie experts{{/a}} set it up for you!"),{a:React.createElement("a",{style:{textDecoration:"underline",cursor:"pointer"},onClick:e})})))}case"cookie":return React.createElement(React.Fragment,null,(0,d.__)("What are services? Services can be external applications such as Google Analytics or WordPress plugins or themes that process personal data (e.g. IP address) and/or set cookies. Cookies (and similar technologies) are small text files that are stored on the device of visitors to your website. You can store information about the visitor in cookies, such as the website's language, or unique advertising IDs to display personalized advertising. You, as the site owner, must ensure that cookies are only placed on your visitors' devices and personal data are only processed if they have given their explicit consent. Unless you have a legitimate interest in the legal sense to do so even without consent. You can define here all the services you use and their cookies with their legal and technical information.")," ",React.createElement(l.r,{url:(0,d.__)("https://devowl.io/2021/web-cookies-overview/")}));case"blocker":return(0,d.__)("What is a content blocker? Imagine that a user of your website does not accept all services. At the same time, you have integrated e.g. a YouTube video that sets cookies that the visitor has not agreed to. According to the ePrivacy Directive, this is prohibited. Content blockers automatically replace iframes, script and link tags like YouTube videos for such users and offer them to watch the video as soon as they agree to load it.");case"list-of-consents":return(0,d._i)((0,d.__)("Consents are automatically documented in order to be able to prove compliance with the legal requirements according to {{a}}Art. 5 GDPR{{/a}} and, in case of dispute, to prove how the consent was obtained."),{a:React.createElement("a",{href:(0,d.__)("https://gdpr-info.eu/art-5-gdpr/"),target:"_blank",rel:"noreferrer"})});case"consents-deleted":return React.createElement(React.Fragment,null,a?(0,d.__)("Consents before %s has been automatically deleted according to the settings you have made.",h()(a).subtract(m,"months").toDate().toLocaleString(document.documentElement.lang)):null);case"shortcodes":return React.createElement(React.Fragment,null,(0,d._i)((0,d.__)("Your website visitors must be able to view their consent history, change their consent, or withdraw their consent at any time. This must be as easy as giving consent. Therefore, the legal links must be included on every subpage of the website (e.g. in the footer)."),{strong:React.createElement("strong",null)}),React.createElement("br",null),React.createElement("br",null),(0,d._i)((0,d.__)("Hiding these options, e.g. in the privacy policy, is in the opinion of multiple data protection authorities in the EU a violation of the GDPR."),{a:React.createElement("a",{href:(0,d.__)("https://www.datenschutzkonferenz-online.de/media/oh/20211220_oh_telemedien.pdf"),target:"_blank",rel:"noreferrer"})}),t?React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("br",null),(0,d.__)("To meet the requirements of the TCF standard, the shortcodes should be placed near the link to the privacy policy.")):null);case"tcf-vendor":return(0,d._i)((0,d.__)("What is a TCF vendor? According to the IAB Europe Transparency and Consent Framework (TCF), any service (e.g. Google for Google Ads) that wants to use consents according to the TCF standard must register as a vendor in the {{a}}Global Vendor List (GVL){{/a}}. All TCF vendors specify for which purposes they need consent to process data and set cookies and which features they can offer with these consents. They also provide a link to their privacy policy for further information. You, as a website operator, must obtain consent in your cookie banner for all vendors you work with. You can limit the requested purposes of vendors to keep consents as privacy-friendly as possible."),{a:React.createElement("a",{href:(0,d.__)("https://iabeurope.eu/vendor-list-tcf-v2-0/"),target:"_blank",rel:"noreferrer"})});case"import":return React.createElement(React.Fragment,null,(0,d.__)("You can export and import all or only some of the settings you made in Real Cookie Banner. If you have several websites, you can save a lot of time by transferring the settings comfortably."),React.createElement("br",null),React.createElement("br",null),(0,d.__)("Also, you can export documented consents to save them in a local backup."));default:return""}}},971:(e,t,a)=>{a.d(t,{y:()=>o});var n=a(6711),r=a(8700);function o(){return r.qs.parse((0,n.useLocation)().search)}},7568:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7363);const r={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:t}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:e}}]}},name:"check-circle",theme:"twotone"};var o=a(7334),c=function(e,t){return n.createElement(o.Z,Object.assign({},e,{ref:t,icon:r}))};c.displayName="CheckCircleTwoTone";const i=n.forwardRef(c)},1576:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7363);const r={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z",fill:t}},{tag:"path",attrs:{d:"M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:e}}]}},name:"close-circle",theme:"twotone"};var o=a(7334),c=function(e,t){return n.createElement(o.Z,Object.assign({},e,{ref:t,icon:r}))};c.displayName="CloseCircleTwoTone";const i=n.forwardRef(c)}}]);
//# sourceMappingURL=chunk-config-tab-blocker.lite.js.map?ver=76f4ec784e34db6f7508