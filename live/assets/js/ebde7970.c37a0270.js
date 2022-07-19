"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7397],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,d({},t,{components:r}))}},u=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),c=a,f=p["".concat(l,".").concat(c)]||p[c]||s[c]||d;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,l=new Array(d);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<d;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var n=r(83117),a=(r(67294),r(3905));const d={id:"torchlive_torch.module",title:"Interface: Module",sidebar_label:"Module",custom_edit_url:null},l=void 0,o={unversionedId:"api/core/interfaces/torchlive_torch.module",id:"api/core/interfaces/torchlive_torch.module",title:"Interface: Module",description:"torchlive/torch.Module",source:"@site/docs/api/core/interfaces/torchlive_torch.module.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/torchlive_torch.module",permalink:"/live/docs/next/api/core/interfaces/torchlive_torch.module",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"torchlive_torch.module",title:"Interface: Module",sidebar_label:"Module",custom_edit_url:null},sidebar:"api",previous:{title:"Blob",permalink:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},next:{title:"Tensor",permalink:"/live/docs/next/api/core/interfaces/torchlive_torch.tensor"}},i={},m=[{value:"Methods",id:"methods",level:2},{value:"forward",id:"forward",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"forwardSync",id:"forwardsync",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/modules/torchlive_torch"},"torchlive/torch"),".Module"),(0,a.mdx)("h2",{id:"methods"},"Methods"),(0,a.mdx)("h3",{id:"forward"},"forward"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"forward"),"<In, Out",">","(...",(0,a.mdx)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,a.mdx)("inlineCode",{parentName:"p"},"Promise"),"<Out",">"),(0,a.mdx)("p",null,"Module forward function."),(0,a.mdx)("h4",{id:"type-parameters"},"Type parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"In")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"In"),": ",(0,a.mdx)("inlineCode",{parentName:"td"},"ModuleInputValue"))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"Out")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"Out"),": ",(0,a.mdx)("inlineCode",{parentName:"td"},"ModuleValue"))))),(0,a.mdx)("h4",{id:"parameters"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"...inputs")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"In"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Module inputs. Input could be of type [","[ModuleInputValue]","]")))),(0,a.mdx)("h4",{id:"returns"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Promise"),"<Out",">"),(0,a.mdx)("p",null,"Module output, which is particular to the model and can be any of\nthe [","[ModuleValue]","] union types."),(0,a.mdx)("h4",{id:"defined-in"},"Defined in"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/torchlive/torch.ts#L68"},"torchlive/torch.ts:68")),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"forwardsync"},"forwardSync"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"forwardSync"),"<In, Out",">","(...",(0,a.mdx)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,a.mdx)("inlineCode",{parentName:"p"},"Out")),(0,a.mdx)("p",null,"Synchronous module forward function."),(0,a.mdx)("h4",{id:"type-parameters-1"},"Type parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"In")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"In"),": ",(0,a.mdx)("inlineCode",{parentName:"td"},"ModuleInputValue"))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"Out")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"Out"),": ",(0,a.mdx)("inlineCode",{parentName:"td"},"ModuleValue"))))),(0,a.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"...inputs")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"In"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Module inputs. Input could be of type [","[ModuleInputValue]","]")))),(0,a.mdx)("h4",{id:"returns-1"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Out")),(0,a.mdx)("p",null,"Module output, which is particular to the model and can be any of\nthe [","[ModuleValue]","] union types."),(0,a.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/torchlive/torch.ts#L78"},"torchlive/torch.ts:78")))}u.isMDXComponent=!0}}]);