"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5980],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>l});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){return function(n){var r=d(n.components);return t.createElement(e,o({},n,{components:r}))}},d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(r),m=a,u=l["".concat(i,".").concat(m)]||l[m]||v[m]||o;return r?t.createElement(u,s(s({ref:n},c),{},{components:r})):t.createElement(u,s({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71812:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(83117),a=(r(67294),r(3905));const o={id:"canvasview.canvasprops",title:"Interface: CanvasProps",sidebar_label:"CanvasProps",custom_edit_url:null},i=void 0,s={unversionedId:"api/core/interfaces/canvasview.canvasprops",id:"version-0.1/api/core/interfaces/canvasview.canvasprops",title:"Interface: CanvasProps",description:"CanvasView.CanvasProps",source:"@site/versioned_docs/version-0.1/api/core/interfaces/canvasview.canvasprops.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/canvasview.canvasprops",permalink:"/live/docs/0.1/api/core/interfaces/canvasview.canvasprops",draft:!1,editUrl:null,tags:[],version:"0.1",frontMatter:{id:"canvasview.canvasprops",title:"Interface: CanvasProps",sidebar_label:"CanvasProps",custom_edit_url:null},sidebar:"api",previous:{title:"CameraProps",permalink:"/live/docs/0.1/api/core/interfaces/cameraview.cameraprops"},next:{title:"CanvasRenderingContext2D",permalink:"/live/docs/0.1/api/core/interfaces/canvasview.canvasrenderingcontext2d"}},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"onContext2D",id:"oncontext2d",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],l={toc:c};function d(e){let{components:n,...r}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/0.1/api/core/modules/canvasview"},"CanvasView"),".CanvasProps"),(0,a.mdx)("p",null,"Properties for the canvas."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"<Canvas style={styles.canvas} onContext2D={handleContext2D} />\n")),(0,a.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"ViewProps")),(0,a.mdx)("p",{parentName:"li"},"\u21b3 ",(0,a.mdx)("strong",{parentName:"p"},"CanvasProps")))),(0,a.mdx)("h2",{id:"methods"},"Methods"),(0,a.mdx)("h3",{id:"oncontext2d"},"onContext2D"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"onContext2D"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx"),"): ",(0,a.mdx)("inlineCode",{parentName:"p"},"void")),(0,a.mdx)("h4",{id:"parameters"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"ctx")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/0.1/api/core/interfaces/canvasview.canvasrenderingcontext2d"},"CanvasRenderingContext2D"))))),(0,a.mdx)("h4",{id:"returns"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"void")),(0,a.mdx)("h4",{id:"defined-in"},"Defined in"),(0,a.mdx)("p",null,"CanvasView.tsx:692"))}d.isMDXComponent=!0}}]);