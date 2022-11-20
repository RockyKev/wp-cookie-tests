"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[3],{7421:(e,t,a)=>{a.d(t,{r:()=>c});var n=a(9511),r=a(3364),o=a(987);const c=({url:e,style:t,label:a})=>{const{__:c}=(0,o.Q)(),l={cursor:"pointer",...t};return React.createElement(n.Z,{style:l,onClick:()=>window.open(e,"_blank")},React.createElement(r.Z,null)," ",a||c("Learn more"))}},3493:(e,t,a)=>{a.d(t,{Y:()=>c});var n=a(7363),r=a(5998),o=a.n(r);const c=({settings:e={},value:t="",onChange:a})=>{const r=(0,n.useRef)(),{codeEditor:c}=o();(0,n.useEffect)((()=>{if(c){const{codemirror:t}=c.initialize(r.current,e);t.on("change",(e=>{null==a||a(e.getValue())}))}}),[]);const l=(0,n.useCallback)((()=>{}),[]);return React.createElement("textarea",{ref:r,value:t,onChange:c?l:({target:{value:e}})=>a(e),style:{width:"100%"}})}},5241:(e,t,a)=>{a.d(t,{X:()=>c});var n=a(3867),r=a(5217),o=a(9743);const c=(0,n.Pi)((({style:e})=>{const{optionStore:{blockerActive:t,allBlockerCount:a}}=(0,o.m)();return!t&&a>0&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:e},React.createElement("p",null,(0,r.__)("Content Blockers are globally deactivated in the settings and are therefore not displayed on your website.")," ","• ",React.createElement("a",{href:"#/settings"},(0,r.__)("Enable now"))))}))},3625:(e,t,a)=>{a.d(t,{f:()=>n});const n=({children:e,maxWidth:t="auto",style:a={}})=>React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===t?1300:t,...a}},e)},5470:(e,t,a)=>{a.d(t,{K:()=>u});var n=a(3751),r=a(7363),o=a(3867),c=a(5217),l=a(5230),s=a(5945),i=a(9743);const u=(0,o.Pi)((({identifier:e,width:t,title:a})=>{const{optionStore:o}=(0,i.m)(),{others:{modalHints:u}}=o,[d,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{m(-1===u.indexOf(e))}),[u.length,e]);const p=(0,s.v)(e),h="string"==typeof p&&p.indexOf("?")>-1?p.split("?")[0]:"",f=a||(h?"".concat(h,"?"):(0,c.__)("What you should definitely know!")),y="string"==typeof p&&"string"==typeof f&&h?p.replace(f,"").trim():p,g=(0,r.useCallback)((()=>{o.setModalHintSeen(e)}),[e,o]);return React.createElement(n.Z,{visible:d,title:React.createElement("span",null,React.createElement(l.Z,{style:{color:"#1890ff"}})," ",f),closable:!1,onOk:g,width:t,okText:(0,c.__)("Okay, I got it"),cancelButtonProps:{style:{display:"none"}}},y)}))},2500:(e,t,a)=>{a.d(t,{j:()=>b});var n=a(7465),r=a(8208),o=a(4217),c=a(2065),l=a(7532),s=a(7363),i=a(3867),u=a(9712),d=a(5217),m=a(301),p=a(9511),h=a(1816),f=a(9743);const{Meta:y}=l.Z,g=(0,i.Pi)((function(e){const{identifier:t,version:a,name:n,description:r,logoUrl:o,disabled:c,created:i,attributes_name:u,tier:g,tags:R,onSelect:b,renderActions:_}=e,{optionStore:{others:{isDemoEnv:E}}}=(0,f.m)(),{isPro:k,open:w,modal:v}=(0,h.t)({title:(0,d.__)("Want to use %s template?",n),feature:"preset",description:"".concat((0,d.__)("Only a limited number of templates for services and content blockers are available in the %s version of Real Cookie Banner. Get the PRO version now and create a service or content blocker from this template with just one click!",(E?(0,d.__)("Demo"):(0,d.__)("Free")).toLowerCase())).concat(E?"":"\n\n".concat((0,d.__)("You can create this service yourself in the free version without any restrictions and research the necessary information.")))},!E&&void 0),x=(0,d.__)("Disabled"),C="pro"===g&&!k;return React.createElement(s.Fragment,{key:t},v,React.createElement(m.Z,{title:c?React.createElement("span",{dangerouslySetInnerHTML:{__html:R[x]}}):void 0},React.createElement(l.Z,{className:"rcb-antd-preset-card",hoverable:!c,style:{opacity:c||i?.6:1},onClick:e=>{e.target.closest(".rcb-antd-card")&&(C?w():c||b({identifier:t,version:a,attributes_name:u},e))},cover:React.createElement("img",{style:{width:"90%"},src:o}),actions:_?_(e):[]},React.createElement(y,{title:React.createElement("span",null,C&&React.createElement(p.Z,{color:h.k},"PRO"),!!R&&Object.keys(R).map((e=>React.createElement(m.Z,{title:e===x?void 0:React.createElement("span",{dangerouslySetInnerHTML:{__html:R[e]}}),key:e},React.createElement(p.Z,null,e)))),React.createElement("br",null),n),description:r||React.createElement("i",null,(0,d.__)("No description"))}))))})),{Meta:R}=l.Z,b=(0,i.Pi)((function({fetchingPresets:e,presets:t,onSelect:a,renderActions:i,quickLinks:m=[],children:p,showSearch:h=!0,showDisabled:f=!0,showHidden:y=!1}){const{isPro:b}=(0,u.u)(),[_,E]=(0,s.useState)(""),[k,w]=(0,s.useState)(!1),v=(0,s.useMemo)((()=>t.filter((({tier:e})=>!!b||!k||"pro"!==e)).filter((({name:e,description:t})=>!_.trim().length||_.split(" ").filter(Boolean).filter((a=>"".concat(e," ").concat(t||"").toLowerCase().indexOf(a.trim().toLowerCase())>-1)).length>0)).filter((({hidden:e})=>!!y||!e)).filter((({disabled:e})=>!!f||!e))),[t,_,k]);return React.createElement("div",{className:"column-posts"},m.map((({id:e,cover:t,description:a,onClick:n,title:r})=>React.createElement(l.Z,{key:e,hoverable:!0,style:{margin:5,width:240,display:"inline-block"},onClick:n,cover:t},React.createElement(R,{title:r,description:a})))),React.createElement(r.Z,{spinning:e},p,h&&React.createElement("div",{style:{marginBottom:20}},React.createElement(c.Z.Search,{autoFocus:!0,style:{maxWidth:400},placeholder:(0,d.__)("Search template by name..."),onChange:e=>E(e.target.value)}),React.createElement("br",null),!b&&React.createElement(o.Z,{onChange:()=>w(!k),style:{marginTop:10}},(0,d.__)("Show only free templates")))),0===v.length&&_.length>0&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0",maxWidth:400,display:"inline-block"}},React.createElement("p",null,(0,d._i)((0,d.__)("{{strong}}No template found{{/strong}}. Please try to create the service yourself or {{a}}contact us{{/a}} and let us know for which service you need a template."),{strong:React.createElement("strong",null),a:React.createElement("a",{href:(0,d.__)("https://devowl.io/support/"),target:"_blank",rel:"noreferrer"})}))),v.map((e=>React.createElement(g,(0,n.Z)({key:e.id,onSelect:a,renderActions:i},e)))))}))},38:(e,t,a)=>{a.r(t),a.d(t,{ScannerRouter:()=>oe});var n=a(3867),r=a(6711),o=a(5470),c=a(3625),l=a(5793),s=a(3404),i=a(7363),u=a(4944),d=a(3737),m=a(8208),p=a(5217),h=a(3751),f=a(6),y=a(9743),g=a(2684);const R=/.+?:\/\/.+?(\/.+?)(?:#|\?(.*)|$)/;function b(e,t,a=""){var n;const r=(null===(n=e.match(R))||void 0===n?void 0:n[1])||"/",o=t.match(R);if(o){const[,t,n]=o,c=n?"?".concat(n).concat(a?"?".concat(a):""):a?"?".concat(a):"";return"".concat(e).concat(t.substr(r.length)).concat(c)}return!1}async function _(e,t){try{const a=t?"".concat(t,"=1"):"",n=await fetch("".concat(e).concat("robots.txt").concat(a?"?".concat(a):""));if(!n.ok)return!1;const r=b(e,(await n.text()).match(/^sitemap:(.*)$/im)[1].trim(),a);if(r){const e=await fetch(r);if(!e.ok)return!1;const t=await e.text();return!!/<(?:sitemap|urlset)/gm.test(t)&&r}return!1}catch(e){return!1}}const E=["sitemap.xml","sitemap_index.xml","sitemap-index.xml","sitemap/","post-sitemap.xml","sitemap/sitemap.xml","sitemap/index.xml","sitemapindex.xml","sitemap.php","sitemap.txt","index.php/sitemap_index.xml","index.php?xml_sitemap=params=","glossar/sitemap.xml"];async function k(e,t=E){const a=t.map((t=>fetch("".concat(e).concat(t),{mode:"no-cors"})));for(const e of a)try{const t=await e,a=await t.text();if(a.indexOf("<sitemapindex")>-1||a.indexOf("<urlset")>-1)return t.url}catch(e){}return!1}const w="https://base";async function v(e,t,a){if(a)try{const n=await async function(e){const t=await fetch(e),a=await t.text();return(new DOMParser).parseFromString(a.trim(),"application/xml")}(t),{protocol:r}=new URL(t,w),o=n.querySelector("sitemapindex");if(o){const t=Array.from(o.children).map((e=>{var t;return null===(t=e.querySelector("loc"))||void 0===t?void 0:t.textContent})).filter(Boolean);for(const n of t){const t=b(e,n)||n;await v(e,t,a)}}const c=n.querySelector("urlset");if(c){const e=Array.from(c.children).map((e=>{var t;return null===(t=e.querySelector("loc"))||void 0===t?void 0:t.textContent})).filter(Boolean).map((e=>{try{const t=new URL(e,w);return"http:"===t.protocol&&(t.protocol=r),t.toString()}catch(t){return e}}));a.push(...e)}}catch(e){console.error("Error occurred during \"crawl('".concat(t,"')\":\n\r Error: ").concat(e))}else try{return(await v(e,t,[])).sort(((e,t)=>e.length-t.length))}catch(e){return console.error(e),[]}return a}async function x(e){const t=(0,p.__)('If you think a sitemap exists but you get this error, please <a href="%s" target="_blank" />contact our support</a> and we will look individually where the problem is in your WordPress installation.',(0,p.__)("https://devowl.io/support/"));let a=window.realCookieBannerQueue.originalHomeUrl;a=a.split("?",2)[0],null==e||e("find-sitemap");const n=await function(e,t,a){return new Promise(((n,r)=>{const o=e=>setTimeout((()=>n(e)),100);(async()=>{try{const n=await _(e);if(n)return void o(n);const r=await k(e);if(r)return void o(r);{const a=await _(e,t);if(a)return void o(a)}if(a){const t=await k(e,a);if(t)return void o(t)}o(!1)}catch(e){r(e)}})()}))}(a,"rcb-force-sitemap",["?sitemap=index&rcb-force-sitemap=1"]);if(!1===n)throw new Error("".concat((0,p.__)("We didn't find a sitemap on your website. We need it to scan all the subpages of your website. Do you have this feature disabled in your WordPress?")," ").concat(t));null==e||e("collect-sitemap");let r=[];try{r=await v(a,n)}catch(e){throw new Error("".concat((0,p.__)("The sitemap could not be parsed. Therefore, we cannot check for services on your website.")," ").concat(t))}if(0===r.length)throw new Error("".concat((0,p.__)("The sitemap is empty. So, we could not add any URLs to the scanner.")," ").concat(t));return r}var C=a(7568),S=a(3778);const Z=(0,n.Pi)((()=>{const{scannerStore:{canShowResults:e,foundScanResultsCount:t,needsAttentionCount:a}}=(0,y.m)(),[n,r]=(0,i.useState)(void 0),{status:o,currentJob:c,total:l,percent:s,remaining:R,cancelling:b,handleStart:_,handleCancel:E,step:k,stepText:w}=function(e,t){const[a,n]=(0,i.useState)("idle"),{remaining:r,...o}=(0,g.p)(e,"rcb-scan-list",(0,i.useCallback)((()=>{n("idle")}),[])),{scannerStore:c,checklistStore:l}=(0,y.m)(),s=(0,i.useCallback)((async()=>{try{const e=await x(n);n("add-to-queue"),await c.addUrlsToQueue({urls:e,purgeUnused:!0}),await Promise.all([c.fetchResultExternals(),c.fetchResultPresets(),(0,f.refreshQueue)()]),n("done"),l.fetchChecklist()}catch(e){e instanceof Error&&h.Z.error({title:(0,p.__)("Whoops!"),content:React.createElement("span",{dangerouslySetInnerHTML:{__html:e.message}})}),n("idle")}}),[]);(0,i.useEffect)((()=>{(0,f.fetchStatus)(!0)}),[]);const u=(0,i.useMemo)((()=>{switch(a){case"idle":return(0,p.__)("Scan complete website");case"find-sitemap":return(0,p.__)("Find your website sitemap...");case"collect-sitemap":return(0,p.__)("Collect all scannable URLs...");case"add-to-queue":case"done":return(0,p.__)("Add URLs to queue...")}return""}),[a]);return{handleStart:s,step:a,stepText:u,setStep:n,remaining:r,...o}}(n),v="idle"!==k;return(0,i.useEffect)((()=>{r(R>0||"done"===k?5e3:void 0)}),[R,k]),void 0===R?React.createElement(m.Z,{style:{display:"block"}}):React.createElement("div",{className:"wp-clearfix"},e&&React.createElement("div",{style:{float:"left",margin:"5px 10px"}},0===a?React.createElement(React.Fragment,null,React.createElement(C.Z,{twoToneColor:"#52c41a"})," ",(0,p.__)("All recommendations applied")):React.createElement(React.Fragment,null,React.createElement(S.Z,{style:{color:"#dba617"}})," ",(0,p.__)("%d of %d recommendations applied",t-a,t))),"failed"===o?React.createElement(u.Z,{style:{clear:"both"},description:(0,p.__)("Scan failed"),image:React.createElement(d.Z,{type:"circle",width:100,percent:100,status:"exception"})}):"done"===o?React.createElement(u.Z,{style:{clear:"both"},description:(0,p.__)("Scan completed"),image:React.createElement(d.Z,{type:"circle",width:100,percent:100})}):R>0&&c&&l?React.createElement(u.Z,{style:{clear:"both"},description:React.createElement(React.Fragment,null,React.createElement("div",null,(0,p._i)((0,p.__)("Currently scanning {{code}}%s{{/code}} (%d of %d pages scanned)...",c.data.url,l-R,l),{code:React.createElement("code",null)})),React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0",display:"inline-block"}},React.createElement("p",null,(0,p.__)("You can add already found services, edit your website or have a coffee in the meantime. The scanner runs in the background.")))),image:React.createElement(d.Z,{type:"circle",width:100,percent:s})},React.createElement("button",{className:"button button-primary",onClick:E,disabled:b},(0,p.__)("Cancel scan"))):e?React.createElement("button",{id:"rcb-btn-scan-start",className:"button button-primary alignright",onClick:_,disabled:v,style:{marginBottom:10,display:"done"!==k?void 0:"none"}},w):React.createElement(u.Z,{description:(0,p.__)("Scan your website for services that may set cookies or process personal data to obtain consent.")},React.createElement("button",{className:"button button-primary",onClick:_,disabled:v},w)))}));var T=a(7465),P=a(2500),U=a(1246),A=a(301),N=a(9511),L=a(2838),I=a(3532),F=a(3564),B=a(1576),D=a(550),W=a(8332),O=a(3493),Y=a(5998),q=a.n(Y);const M=(0,n.Pi)((({record:e})=>{const[t,a]=(0,i.useState)(!1),{data:{id:n},markup:r,store:o}=e,c=(0,i.useMemo)((()=>r?{...window.cm_settings,codemirror:{...q().codeEditor.defaultSettings.codemirror,mode:r.mime,lint:!1,readOnly:!0}}:{}),[r]),l=(0,i.useCallback)((()=>{t?a(!1):(a(!0),o.fetchMarkup(n))}),[t]),s=(0,i.useCallback)((async()=>{o.addUrlsToQueue({urls:[e.data.sourceUrl],purgeUnused:!1}),Promise.all([o.fetchResultExternals(),o.fetchResultPresets(),(0,f.refreshQueue)()]),U.ZP.info((0,p.__)("Page is scheduled for scanning again..."))}),[]);return React.createElement(React.Fragment,null,React.createElement(h.Z,{title:(0,p.__)("Element found by markup"),visible:t,width:700,bodyStyle:{paddingBottom:0},okButtonProps:{style:{display:"none"}},onCancel:l,cancelText:(0,p.__)("Close")},React.createElement(m.Z,{spinning:!r},r&&React.createElement(O.Y,{settings:c,value:r.markup}))),React.createElement(D.Z.Button,{onClick:l,overlay:React.createElement(W.Z,null,React.createElement(W.Z.Item,{onClick:s},(0,p.__)("Scan again")))},(0,p.__)("Open markup")))})),{Column:G}=I.Z,H=(0,n.Pi)((({instance:e,style:t,reloadDependencies:a=[],reload:n=!0})=>{const{scannerStore:r}=(0,y.m)(),{identifier:o,busy:c}=e,l=r.resultAllExternalUrls.get(o),s=(0,i.useCallback)((({data:{id:e}})=>e),[]),{remaining:d}=(0,g.p)(),[m,h]=(0,i.useState)("");return(0,i.useEffect)((()=>{!async function(){if(n)try{await r.fetchResultAllExternals(e),h("")}catch(e){var t;h((null===(t=e.responseJSON)||void 0===t?void 0:t.message)||e.message)}}()}),[e,n,...a]),React.createElement(React.Fragment,null,d>0&&React.createElement("div",{className:"notice notice-info below-h2 notice-alt",style:{margin:"0 0 10px"}},React.createElement("p",null,(0,p.__)("Since the scanner is currently still running, the table may be refreshed."))),React.createElement(I.Z,{locale:{emptyText:m?React.createElement(L.ZP,{title:(0,p.__)("Something went wrong."),subTitle:m,status:"500"}):React.createElement(u.Z,{description:(0,p.__)("No external URL found")})},dataSource:Array.from(l?l.values():[]),rowKey:s,size:"small",bordered:!0,style:t,loading:(!l||0===l.size)&&c},React.createElement(G,{title:(0,p.__)("Last scanned"),defaultSortOrder:"descend",sorter:(e,t)=>new Date(e.data.lastScanned).getTime()-new Date(t.data.lastScanned).getTime(),dataIndex:["data","lastScanned"],key:"created",render:(e,{data:{lastScanned:t}})=>new Date(t).toLocaleString(document.documentElement.lang)}),React.createElement(G,{title:(0,p.__)("HTML Tag"),dataIndex:["data","tag"],key:"tag",render:(e,{data:{tag:t}})=>React.createElement(N.Z,null,"<".concat(t," />"))}),React.createElement(G,{title:React.createElement(A.Z,{title:(0,p.__)("This status shows you if the URL was blocked by a content blocker you defined.")},React.createElement("span",null,(0,p.__)("Blocked?")," ",React.createElement(F.Z,{style:{color:"#9a9a9a"}}))),sorter:(e,t)=>e.data.blocked===t.data.blocked?0:e.data.blocked?-1:1,dataIndex:["data","blocked"],key:"blocked",render:(e,{data:{blocked:t}})=>t?React.createElement(C.Z,{twoToneColor:"#52c41a"}):React.createElement(B.Z,{twoToneColor:"#eb2f96"})}),React.createElement(G,{title:(0,p.__)("Blocked URL"),dataIndex:["data","blockedUrl"],key:"blockedUrl",render:(e,{blockedUrlTruncate:t,data:{blockedUrl:a}})=>React.createElement("a",{href:a,target:"_blank",rel:"noreferrer",title:a},t)}),React.createElement(G,{title:(0,p.__)("Found on this URL"),sorter:(e,t)=>e.data.sourceUrl.localeCompare(t.data.sourceUrl),dataIndex:["data","sourceUrl"],key:"sourceUrl",render:(e,{sourceUrlTruncate:t,data:{sourceUrl:a}})=>React.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},t)}),React.createElement(G,{title:(0,p.__)("Actions"),dataIndex:["data","markup"],key:"markup",render:(e,t)=>t.data.markup?React.createElement(M,{record:t}):""})))})),Q=(0,n.Pi)((({identifier:e,scanned:t,onVisibleChange:a})=>{const{scannerStore:n}=(0,y.m)(),{resultPresets:r}=n,o=r.get(e),c=[],{data:{name:l}}=o,[s,u]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>{null==a||a(!s),u(!s)}),[e,s]),m=(0,i.useCallback)((async()=>{const t=n.resultAllExternalUrls.get(e),a=Array.from(t?t.values():[]);for(const e of a)c.push(e.data.sourceUrl);await n.addUrlsToQueue({urls:c,purgeUnused:!1}),U.ZP.info((0,p.__)("Pages are scheduled for scanning again...")),await Promise.all([n.fetchResultExternals(),n.fetchResultPresets(),(0,f.refreshQueue)()])}),[]),g=!1===t?0:t.foundOnSitesCount;return React.createElement(React.Fragment,null,React.createElement(h.Z,{title:l,visible:s,width:1400,bodyStyle:{paddingBottom:0},onCancel:d,cancelText:(0,p.__)("Close"),cancelButtonProps:{style:{float:"right",marginLeft:"10px"}},okButtonProps:{type:"default"},onOk:m,okText:(0,p.__)("Scan these pages again")},React.createElement(H,{instance:o,reload:s&&g>0,reloadDependencies:[s,g]})),React.createElement("a",{onClick:e=>{e.preventDefault(),e.stopPropagation(),d()}},(0,p._n)("On %d page","On %d pages",g,g)))})),j=(0,n.Pi)((()=>{const[e,t]=(0,i.useState)(!1),{scannerStore:a,cookieStore:n}=(0,y.m)(),{resultPresets:r,busyResultPresets:o}=a,{remaining:l}=(0,g.p)(),{essentialGroup:u}=n,[d,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{n.fetchGroups()}),[]);const h=(0,i.useCallback)((async n=>{if(d||!n||e)return;t(!0);const{identifier:r}=n,o=a.resultPresets.get(r),c="navigateAfterCreation=".concat(encodeURIComponent("#scanner"));try{await o.fetchAttributes()}catch(e){return setTimeout((()=>window.location.href="#/cookies/".concat(null==u?void 0:u.key,"/new?force=").concat(r,"&").concat(c)),0),void t(!1)}const{data:{hidden:l},attributes:{serviceTemplates:[s]}}=o;if(s){if("number"!=typeof s||l){if(l)setTimeout((()=>window.location.href="#/cookies/".concat(null==u?void 0:u.key,"/new?force=").concat(r,"&").concat(c)),0);else if("number"!=typeof s){const{identifier:e}=s;setTimeout((()=>{var t;return window.location.href="#/cookies/".concat(null==u?void 0:u.key,"/new?force=").concat(e,"&attributes=").concat(JSON.stringify({createContentBlocker:(null===(t=s.attributes.group)||void 0===t?void 0:t.toLowerCase())!==(null==u?void 0:u.data.name.toLowerCase()),createContentBlockerId:r}),"&").concat(c)}),0)}}else setTimeout((()=>window.location.href="#/blocker/new?force=".concat(r,"&").concat(c)),0);t(!1)}}),[e,d,u]);return React.createElement(c.f,null,React.createElement(s.Z,null,(0,p.__)("Services, for which you should obtain consent")),React.createElement(P.j,{type:"contentBlocker",presets:Array.from(r.values()).map((({data:{logoFile:e,...t},fullLogoUrl:a})=>({...t,logoUrl:a}))),fetchingPresets:o&&!l||e,onSelect:h,renderActions:(0,i.useCallback)((e=>{const{identifier:t,version:a,attributes_name:n,scanned:r,tier:o}=e;return[React.createElement("a",{key:"create-now",onClick:()=>"pro"!==o&&h({identifier:t,version:a,attributes_name:n})},(0,p.__)("Create now")),r&&React.createElement(Q,(0,T.Z)({},e,{key:"table",onVisibleChange:m}))].filter(Boolean)}),[]),showSearch:!1,showDisabled:!1,showHidden:!0}))}));var z=a(1839);const J=({count:e})=>{const t=(0,i.useMemo)((()=>{const t=[];for(let a=0;a<e;a++)t.push({key:a});return t}),[e]);return React.createElement(l.ZP,{dataSource:t,renderItem:()=>React.createElement(l.ZP.Item,null,React.createElement(z.Z,{loading:!0,active:!0,avatar:!1,paragraph:{rows:1}}))})};var V=a(8936),K=a(5969),X=a(4121),$=a(1487);const ee=(0,n.Pi)((({item:e})=>{const[t,a]=(0,i.useState)(!1),{cookieStore:{essentialGroup:n}}=(0,y.m)(),{openDialog:r}=(0,X.u)(),{data:{host:o}}=e,{addLink:c}=(0,$.w)(),l=(0,i.useCallback)((()=>{a(!t)}),[t]),s=(0,i.useCallback)((()=>{a(!1),r()}),[r]),u="navigateAfterCreation=".concat(encodeURIComponent(window.location.href));return React.createElement(K.Z,{visible:t,content:React.createElement(React.Fragment,null,React.createElement("p",null,React.createElement("strong",null,(0,p._i)((0,p.__)("Does {{i}}%s{{/i}} belong to an essential service without which your website would technically no longer work?",o),{i:React.createElement("i",null)}))),React.createElement("p",null,React.createElement("a",{className:"button button-primary",href:"".concat(c,"?force=scratch&attributes=").concat(JSON.stringify({rules:["*".concat(o,"*")]}),"&").concat(u)},(0,p.__)("No"))," ",React.createElement("a",{className:"button",href:"#/cookies/".concat(null==n?void 0:n.key,"/new?force=scratch&").concat(u)},(0,p.__)("Yes"))," ",React.createElement("button",{className:"button",onClick:s},(0,p.__)("I do not know"))),React.createElement("p",{className:"description"},(0,p._i)((0,p.__)("{{strong}}No:{{/strong}} Non-essential services that process personal data (e.g. IP address in some countries) or set cookies may only be loaded after consent. You should block them using a content blocker until consent is given. {{i}}Examples would be iframes, YouTube and similar embeddings or tracking tools.{{/i}}"),{strong:React.createElement("strong",null),i:React.createElement("i",null)})),React.createElement("p",{className:"description"},(0,p._i)((0,p.__)("{{strong}}Yes (rare cases):{{/strong}} You should inform your users about the use of the service in the essential services group. You do not need to create a content blocker, as the service can be loaded without consent. {{i}}Examples are CDNs, privacy-friendly spam protection tools or security tools.{{/i}}"),{strong:React.createElement("strong",null),i:React.createElement("i",null)})),React.createElement("p",null,React.createElement("button",{className:"button",onClick:l},(0,p.__)("Close")))),placement:"right",overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"},onClick:l},(0,p.__)("Handle external URL")))})),te=(0,n.Pi)((({item:e})=>{const[t,a]=(0,i.useState)(!1),{data:{host:n,foundOnSitesCount:r,tags:o,ignored:c},inactive:s,blockedStatus:u,blockedStatusText:d,busy:h}=e,{scannerStore:g}=(0,y.m)(),R=(0,i.useCallback)((()=>{a(!t)}),[n,t]),b=(0,i.useCallback)((async()=>{const t=[];try{await g.fetchResultAllExternals(e),g.resultAllExternalUrls.get(e.data.host).forEach((e=>{t.push(e.data.sourceUrl)})),await g.addUrlsToQueue({urls:t,purgeUnused:!1}),await Promise.all([g.fetchResultExternals(),(0,f.refreshQueue)()])}catch(e){e instanceof Error&&console.log(e)}}),[e]);return React.createElement(React.Fragment,null,React.createElement(l.ZP.Item,{itemID:n,actions:[React.createElement(ee,{key:"handle",item:e}),c&&React.createElement(V.Z,{key:"delete",title:(0,p.__)("Are you sure that you want to restore this entry?"),placement:"bottomRight",onConfirm:()=>{e.ignore(!1),a(!1)},okText:(0,p.__)("Restore"),cancelText:(0,p.__)("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},(0,p.__)("Restore"))),!s&&React.createElement(V.Z,{key:"delete",title:(0,p.__)("Are you sure that you want to ignore this entry?"),placement:"bottomRight",onConfirm:()=>{e.ignore(),a(!1)},okText:(0,p.__)("Ignore"),cancelText:(0,p.__)("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},(0,p.__)("Ignore"))),React.createElement(React.Fragment,null,React.createElement("a",{style:{cursor:"pointer"},onClick:b},(0,p.__)("Scan these pages again")))].filter(Boolean),style:{opacity:s&&!t?.6:1}},React.createElement(m.Z,{spinning:h},React.createElement(l.ZP.Item.Meta,{title:React.createElement("span",null,n," ",o.map((e=>React.createElement(N.Z,{key:e},"<".concat(e," />")))),c&&React.createElement(N.Z,null,(0,p.__)("Ignored")),"none"!==u&&React.createElement(N.Z,{color:"partial"===u?"warning":"success"},d)),description:React.createElement("button",{className:"button-link",onClick:R},t?(0,p.__)("Close"):(0,p._n)("Embeds found on %d page","Embeds found on %d pages",r,r))}))),t&&React.createElement(H,{instance:e,reload:t&&r>0,reloadDependencies:[t,r],style:{marginTop:"-6px"}}))})),ae=(0,n.Pi)((()=>{const{scannerStore:e}=(0,y.m)(),{currentJob:t}=(0,g.p)(),{presetsCount:a,externalUrlsCount:n,busyExternalUrls:r,sortedExternalUrls:o,canShowResults:c}=e;return(0,i.useEffect)((()=>{e.fetchResultPresets(),e.fetchResultExternals()}),[]),React.createElement(React.Fragment,null,React.createElement(Z,null),c&&a>0&&React.createElement(j,null),c&&n>0&&(r&&void 0===t?React.createElement(J,{count:n}):React.createElement("div",null,React.createElement(s.Z,null,(0,p.__)("Embeds of external URLs to be checked")),React.createElement("div",{style:{maxWidth:800,margin:"0px auto 20px",textAlign:"center"}},React.createElement("p",{className:"description"},(0,p.__)("You are embedding scripts, styles, iframes or similar from the following third-party servers. We currently do not have service templates for these. Therefore, you may have to create a service and/or content blocker yourself after you have assessed the situation."))),React.createElement(l.ZP,null,o.map((e=>React.createElement(te,{item:e,key:e.data.host})))))))}));var ne=a(5945),re=a(5241);const oe=(0,n.Pi)((()=>{const{path:e}=(0,r.useRouteMatch)(),t=(0,ne.v)("scanner");return React.createElement(React.Fragment,null,React.createElement(re.X,{style:{margin:"10px 0 0 0"}}),React.createElement(r.Switch,null,React.createElement(React.Fragment,null,React.createElement(o.K,{identifier:"scanner",title:(0,p.__)("What does the scanner find?"),width:900}),React.createElement(r.Route,{path:e,exact:!0},React.createElement(c.f,null,React.createElement(ae,null),React.createElement("div",{style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},t))))))}))},5945:(e,t,a)=>{a.d(t,{v:()=>h});var n=a(7743),r=a(2605),o=a(3404),c=a(7568),l=a(1576),s=a(7421),i=a(9743),u=a(5217),d=a(4121),m=a(8488),p=a.n(m);function h(e){const{optionStore:{tcf:t,consentsDeletedAt:a,consentDuration:m}}=(0,i.m)();switch(e){case"scanner":{const{openDialog:e}=(0,d.u)();return React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},(0,u.__)("The scanner finds services that you use on your website that might set/read cookies or process personal data. This is e.g. Google Analytics, YouTube or Elementor. If there is no template for a service, you will see from which external URLs content, scripts etc. are embedded. This allows you to set up your cookie banner quickly and easily.")),React.createElement("p",{className:"description"},(0,u._i)((0,u.__)("We explicitly do not find cookies because that would not work reliably. {{a}}We explained why in our knowledge base.{{/a}}"),{a:React.createElement("a",{rel:"noreferrer",href:(0,u.__)("https://devowl.io/knowledge-base/real-cookie-banner-cookie-scanner-finds-cookies-automatically/"),target:"_blank"})})),React.createElement(n.Z,{style:{margin:"10px 0"}},React.createElement(r.Z,{span:11},React.createElement("div",{style:{paddingRight:10}},React.createElement(o.Z,null,(0,u.__)("What the scanner finds ...")),[(0,u.__)("External services (with and without template)"),(0,u.__)("WordPress plugins with templates that require consent"),(0,u.__)("Automatic check of all subpages of your website")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(c.Z,{twoToneColor:"#52c41a"}),"  ",e))))),React.createElement(r.Z,{span:2,style:{textAlign:"center"}},React.createElement(o.Z,{type:"vertical",style:{height:"100%"}})),React.createElement(r.Z,{span:11},React.createElement("div",null,React.createElement(o.Z,null,(0,u.__)("... and what it does not")),[(0,u.__)("Cookies from unknown WordPress plugins"),(0,u.__)("Services embedded after the page load via JavaScript"),(0,u.__)("Complete coverage of your individual use case")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(l.Z,{twoToneColor:"#eb2f96"}),"  ",e)))))),React.createElement("p",{className:"description"},(0,u._i)((0,u.__)("Just by using the scanner, you will not set up your cookie banner one hundred percent correctly. If it is too complex or time-consuming for you to set up the cookie banner yourself, just let one of our {{a}}cookie experts{{/a}} set it up for you!"),{a:React.createElement("a",{style:{textDecoration:"underline",cursor:"pointer"},onClick:e})})))}case"cookie":return React.createElement(React.Fragment,null,(0,u.__)("What are services? Services can be external applications such as Google Analytics or WordPress plugins or themes that process personal data (e.g. IP address) and/or set cookies. Cookies (and similar technologies) are small text files that are stored on the device of visitors to your website. You can store information about the visitor in cookies, such as the website's language, or unique advertising IDs to display personalized advertising. You, as the site owner, must ensure that cookies are only placed on your visitors' devices and personal data are only processed if they have given their explicit consent. Unless you have a legitimate interest in the legal sense to do so even without consent. You can define here all the services you use and their cookies with their legal and technical information.")," ",React.createElement(s.r,{url:(0,u.__)("https://devowl.io/2021/web-cookies-overview/")}));case"blocker":return(0,u.__)("What is a content blocker? Imagine that a user of your website does not accept all services. At the same time, you have integrated e.g. a YouTube video that sets cookies that the visitor has not agreed to. According to the ePrivacy Directive, this is prohibited. Content blockers automatically replace iframes, script and link tags like YouTube videos for such users and offer them to watch the video as soon as they agree to load it.");case"list-of-consents":return(0,u._i)((0,u.__)("Consents are automatically documented in order to be able to prove compliance with the legal requirements according to {{a}}Art. 5 GDPR{{/a}} and, in case of dispute, to prove how the consent was obtained."),{a:React.createElement("a",{href:(0,u.__)("https://gdpr-info.eu/art-5-gdpr/"),target:"_blank",rel:"noreferrer"})});case"consents-deleted":return React.createElement(React.Fragment,null,a?(0,u.__)("Consents before %s has been automatically deleted according to the settings you have made.",p()(a).subtract(m,"months").toDate().toLocaleString(document.documentElement.lang)):null);case"shortcodes":return React.createElement(React.Fragment,null,(0,u._i)((0,u.__)("Your website visitors must be able to view their consent history, change their consent, or withdraw their consent at any time. This must be as easy as giving consent. Therefore, the legal links must be included on every subpage of the website (e.g. in the footer)."),{strong:React.createElement("strong",null)}),React.createElement("br",null),React.createElement("br",null),(0,u._i)((0,u.__)("Hiding these options, e.g. in the privacy policy, is in the opinion of multiple data protection authorities in the EU a violation of the GDPR."),{a:React.createElement("a",{href:(0,u.__)("https://www.datenschutzkonferenz-online.de/media/oh/20211220_oh_telemedien.pdf"),target:"_blank",rel:"noreferrer"})}),t?React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("br",null),(0,u.__)("To meet the requirements of the TCF standard, the shortcodes should be placed near the link to the privacy policy.")):null);case"tcf-vendor":return(0,u._i)((0,u.__)("What is a TCF vendor? According to the IAB Europe Transparency and Consent Framework (TCF), any service (e.g. Google for Google Ads) that wants to use consents according to the TCF standard must register as a vendor in the {{a}}Global Vendor List (GVL){{/a}}. All TCF vendors specify for which purposes they need consent to process data and set cookies and which features they can offer with these consents. They also provide a link to their privacy policy for further information. You, as a website operator, must obtain consent in your cookie banner for all vendors you work with. You can limit the requested purposes of vendors to keep consents as privacy-friendly as possible."),{a:React.createElement("a",{href:(0,u.__)("https://iabeurope.eu/vendor-list-tcf-v2-0/"),target:"_blank",rel:"noreferrer"})});case"import":return React.createElement(React.Fragment,null,(0,u.__)("You can export and import all or only some of the settings you made in Real Cookie Banner. If you have several websites, you can save a lot of time by transferring the settings comfortably."),React.createElement("br",null),React.createElement("br",null),(0,u.__)("Also, you can export documented consents to save them in a local backup."));default:return""}}},4121:(e,t,a)=>{a.d(t,{u:()=>i});var n=a(3404),r=a(7759),o=a(3751),c=a(7363),l=a(9743),s=a(5217);function i(){const{optionStore:{others:{assetsUrl:e}}}=(0,l.m)(),t="".concat(e,"cookie-experts.svg"),a=(0,c.useCallback)((()=>{o.Z.info({icon:void 0,width:500,closable:!0,okButtonProps:{style:{display:"none"}},content:React.createElement("div",{style:{textAlign:"center"}},React.createElement("img",{src:t,style:{display:"block",paddingTop:15,margin:"auto",height:176}}),React.createElement("h3",{style:{margin:"10px 0 0"}},"Cookie Experts"),React.createElement("p",{style:{marginTop:0}},(0,s.__)("Let our team help you with the setup")),React.createElement(n.Z,null,React.createElement(r.C.Group,{size:"large"},React.createElement(r.C,{src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/cookie-experts-faces/jan.karres.jpeg"}),React.createElement(r.C,{src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/cookie-experts-faces/mario.guenter.jpeg"}),React.createElement(r.C,{src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/cookie-experts-faces/matthias.guenter.jpeg"}))),React.createElement("a",{href:(0,s.__)("https://devowl.io/wordpress-real-cookie-banner/cookie-experts/"),target:"_blank",rel:"noreferrer",className:"button button-large button-primary"},(0,s.__)("Get help from Cookie Experts")),React.createElement("p",null,(0,s.__)("We admit, it is not easy to find all the services, cookies, etc. The legal requirements in the EU are quite complex for many website operators. We can understand if you feel overwhelmed – if this goes far beyond what you can technically do. After you know what all has to be considered, the question of how to make your website privacy compliant does not let you sleep peacefully either.")),React.createElement("p",null,(0,s.__)("Don’t worry, we have a solution for you! Our Cookie Experts have already set up many cookie banners and know exactly what they are doing. They can also set up your cookie banner quickly and easily. So, we can simply take this worry away from you.")),React.createElement("a",{style:{marginTop:10,textDecoration:"underline",display:"inline-block",cursor:"pointer"},onClick:()=>o.Z.destroyAll()},(0,s.__)("Close")))})}),[]);return{logoUrl:t,openDialog:a}}},1487:(e,t,a)=>{a.d(t,{w:()=>l});var n=a(6711),r=a(9743),o=a(7363),c=a(3642);const l=()=>{const{params:e}=(0,n.useRouteMatch)(),{cookieStore:t}=(0,r.m)(),a=+e.blocker,l=isNaN(+a)?0:+a,s=!!a,i=t.blockers.entries.get(l)||new c.p(t.blockers,{id:0}),u=(0,o.useCallback)((({key:e})=>"#/blocker/edit/".concat(e)),[i]);return{blocker:i,id:l,queried:s,fetched:0!==i.key,link:"#/blocker",editLink:u,addLink:"#/blocker/new"}}}}]);
//# sourceMappingURL=chunk-config-tab-scanner.lite.js.map?ver=fda8a3d7baf68c23de17