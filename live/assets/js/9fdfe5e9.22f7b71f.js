"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9453],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>o,MDXProvider:()=>x,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,d({},t,{components:n}))}},s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},x=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),p=s(n),x=a,c=p["".concat(i,".").concat(x)]||p[x]||h[x]||d;return n?r.createElement(c,l(l({ref:t},o),{},{components:n})):r.createElement(c,l({ref:t},o))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,i=new Array(d);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<d;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=n(83117),a=(n(67294),n(3905));const d={id:"torchlive_torch.torch",title:"Interface: Torch",sidebar_label:"Torch",custom_edit_url:null},i=void 0,l={unversionedId:"api/core/interfaces/torchlive_torch.torch",id:"version-0.2.0/api/core/interfaces/torchlive_torch.torch",title:"Interface: Torch",description:"torchlive/torch.Torch",source:"@site/versioned_docs/version-0.2.0/api/core/interfaces/torchlive_torch.torch.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/torchlive_torch.torch",permalink:"/live/docs/api/core/interfaces/torchlive_torch.torch",draft:!1,editUrl:null,tags:[],version:"0.2.0",frontMatter:{id:"torchlive_torch.torch",title:"Interface: Torch",sidebar_label:"Torch",custom_edit_url:null},sidebar:"api",previous:{title:"Tensor",permalink:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},next:{title:"Transforms",permalink:"/live/docs/api/core/interfaces/torchlive_torchvision.transforms"}},m={},o=[{value:"Properties",id:"properties",level:2},{value:"channelsLast",id:"channelslast",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"contiguousFormat",id:"contiguousformat",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"double",id:"double",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"float",id:"float",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"float32",id:"float32",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"float64",id:"float64",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"int",id:"int",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"int16",id:"int16",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"int32",id:"int32",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"int64",id:"int64",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"int8",id:"int8",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"jit",id:"jit",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"long",id:"long",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"preserveFormat",id:"preserveformat",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"short",id:"short",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"uint8",id:"uint8",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"Methods",id:"methods",level:2},{value:"arange",id:"arange",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"empty",id:"empty",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"eye",id:"eye",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"fromBlob",id:"fromblob",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"ones",id:"ones",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"rand",id:"rand",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"randint",id:"randint",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-25",level:4},{value:"tensor",id:"tensor",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-26",level:4},{value:"zeros",id:"zeros",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-27",level:4}],p={toc:o};function s(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torch"},"torchlive/torch"),".Torch"),(0,a.mdx)("h2",{id:"properties"},"Properties"),(0,a.mdx)("h3",{id:"channelslast"},"channelsLast"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"channelsLast"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"channelsLast"')),(0,a.mdx)("h4",{id:"defined-in"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:538"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"contiguousformat"},"contiguousFormat"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"contiguousFormat"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"contiguousFormat"')),(0,a.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:539"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"double"},"double"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"double"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"double"')),(0,a.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:524"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"float"},"float"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"float"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"float"')),(0,a.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:525"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"float32"},"float32"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"float32"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"float32"')),(0,a.mdx)("h4",{id:"defined-in-4"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:526"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"float64"},"float64"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"float64"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"float64"')),(0,a.mdx)("h4",{id:"defined-in-5"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:527"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"int"},"int"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"int"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"int"')),(0,a.mdx)("h4",{id:"defined-in-6"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:528"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"int16"},"int16"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"int16"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"int16"')),(0,a.mdx)("h4",{id:"defined-in-7"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:529"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"int32"},"int32"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"int32"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"int32"')),(0,a.mdx)("h4",{id:"defined-in-8"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:530"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"int64"},"int64"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"int64"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"int64"')),(0,a.mdx)("h4",{id:"defined-in-9"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:531"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"int8"},"int8"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"int8"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"int8"')),(0,a.mdx)("h4",{id:"defined-in-10"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:532"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"jit"},"jit"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"jit"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"JIT")),(0,a.mdx)("p",null,"JIT module"),(0,a.mdx)("h4",{id:"defined-in-11"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:521"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"long"},"long"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"long"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"long"')),(0,a.mdx)("h4",{id:"defined-in-12"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:533"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"preserveformat"},"preserveFormat"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"preserveFormat"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"preserveFormat"')),(0,a.mdx)("h4",{id:"defined-in-13"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:540"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"short"},"short"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"short"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"short"')),(0,a.mdx)("h4",{id:"defined-in-14"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:534"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"uint8"},"uint8"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("strong",{parentName:"p"},"uint8"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},'"uint8"')),(0,a.mdx)("h4",{id:"defined-in-15"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:535"),(0,a.mdx)("h2",{id:"methods"},"Methods"),(0,a.mdx)("h3",{id:"arange"},"arange"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"arange"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"end"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a 1-D tensor of size ",(0,a.mdx)("inlineCode",{parentName:"p"},"(end - 0) / 1")," with values from the interval\n",(0,a.mdx)("inlineCode",{parentName:"p"},"[0, end)")," taken with common difference step beginning from start."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.arange.html"},"https://pytorch.org/docs/1.11/generated/torch.arange.html")),(0,a.mdx)("h4",{id:"parameters"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"end")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The ending value for the set of points.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"})))),(0,a.mdx)("h4",{id:"returns"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-16"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:394"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"arange"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"start"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"end"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a 1-D tensor of size ",(0,a.mdx)("inlineCode",{parentName:"p"},"(end - start) / 1")," with values from the\ninterval ",(0,a.mdx)("inlineCode",{parentName:"p"},"[start, end)")," taken with common difference 1 beginning from\n",(0,a.mdx)("inlineCode",{parentName:"p"},"start"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.arange.html"},"https://pytorch.org/docs/1.11/generated/torch.arange.html")),(0,a.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"start")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The starting value for the set of points.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"end")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The ending value for the set of points.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"})))),(0,a.mdx)("h4",{id:"returns-1"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-17"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:406"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"arange"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"start"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"end"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"step"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a 1-D tensor of size ",(0,a.mdx)("inlineCode",{parentName:"p"},"(end - start) / step")," with values from the\ninterval ",(0,a.mdx)("inlineCode",{parentName:"p"},"[start, end)")," taken with common difference ",(0,a.mdx)("inlineCode",{parentName:"p"},"step")," beginning from\n",(0,a.mdx)("inlineCode",{parentName:"p"},"start"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.arange.html"},"https://pytorch.org/docs/1.11/generated/torch.arange.html")),(0,a.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"start")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The starting value for the set of points.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"end")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The ending value for the set of points.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"step")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The gap between each pair of adjacent points.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"})))),(0,a.mdx)("h4",{id:"returns-2"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-18"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:419"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"empty"},"empty"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"empty"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with uninitialized data. The shape of the tensor\nis defined by the variable argument size."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.empty.html"},"https://pytorch.org/docs/1.11/generated/torch.empty.html")),(0,a.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A sequence of integers defining the shape of the output tensor.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"-")))),(0,a.mdx)("h4",{id:"returns-3"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-19"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:434"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"eye"},"eye"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"eye"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"n"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"m?"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with ones on the diagonal, and zeroes elsewhere.\nThe shape of the tensor is defined by the arguments n and m."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.eye.html"},"https://pytorch.org/docs/1.11/generated/torch.eye.html")),(0,a.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"n")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"An integer defining the number of rows in the result.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"m?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"An integer defining the number of columns in the result. Optional, defaults to n.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"-")))),(0,a.mdx)("h4",{id:"returns-4"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-20"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:444"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"fromblob"},"fromBlob"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"fromBlob"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"blob"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"sizes?"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Exposes the given data as a Tensor without taking ownership of the\noriginal data."),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The function exists in JavaScript and C++ (torch::from_blob)."))),(0,a.mdx)("h4",{id:"parameters-5"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"blob")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"any")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"The blob holding the data.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"sizes?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Should specify the shape of the tensor, strides the stride")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Tensor options in each dimension.")))),(0,a.mdx)("h4",{id:"returns-5"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-21"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:460"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"ones"},"ones"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"ones"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with the scalar value 1, with the shape defined\nby the argument ",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.ones.html"},"https://pytorch.org/docs/1.11/generated/torch.ones.html")),(0,a.mdx)("h4",{id:"parameters-6"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A sequence of integers defining the shape of the output tensor.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Tensor options.")))),(0,a.mdx)("h4",{id:"returns-6"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-22"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:470"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"rand"},"rand"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"rand"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with random numbers from a uniform distribution on\nthe interval ",(0,a.mdx)("inlineCode",{parentName:"p"},"[0, 1)"),"."),(0,a.mdx)("h4",{id:"parameters-7"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A sequence of integers defining the shape of the output tensor.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Tensor options.")))),(0,a.mdx)("h4",{id:"returns-7"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-23"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:478"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"randint"},"randint"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"randint"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"high"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with random integers generated uniformly between\n",(0,a.mdx)("inlineCode",{parentName:"p"},"0")," (inclusive) and ",(0,a.mdx)("inlineCode",{parentName:"p"},"high")," (exclusive)."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.randint.html"},"https://pytorch.org/docs/1.11/generated/torch.randint.html")),(0,a.mdx)("h4",{id:"parameters-8"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"high")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"One above the highest integer to be drawn from the distribution.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A tuple defining the shape of the output tensor.")))),(0,a.mdx)("h4",{id:"returns-8"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-24"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:488"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"randint"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"low"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"high"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with random integers generated uniformly between\n",(0,a.mdx)("inlineCode",{parentName:"p"},"low")," (inclusive) and ",(0,a.mdx)("inlineCode",{parentName:"p"},"high")," (exclusive)."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.randint.html"},"https://pytorch.org/docs/1.11/generated/torch.randint.html")),(0,a.mdx)("h4",{id:"parameters-9"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"low")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Lowest integer to be drawn from the distribution.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"high")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"One above the highest integer to be drawn from the distribution.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A tuple defining the shape of the output tensor.")))),(0,a.mdx)("h4",{id:"returns-9"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-25"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:499"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"tensor"},"tensor"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"tensor"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"data"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Constructs a tensor with no autograd history."),(0,a.mdx)("h4",{id:"parameters-10"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"data")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,a.mdx)("inlineCode",{parentName:"td"},"ItemArray")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Tensor data as multi-dimensional array.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Tensor options.")))),(0,a.mdx)("h4",{id:"returns-10"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-26"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:506"),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"zeros"},"zeros"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"zeros"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("p",null,"Returns a tensor filled with the scalar value 0, with the shape defined\nby the argument ",(0,a.mdx)("inlineCode",{parentName:"p"},"size"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pytorch.org/docs/1.11/generated/torch.zeros.html"},"https://pytorch.org/docs/1.11/generated/torch.zeros.html")),(0,a.mdx)("h4",{id:"parameters-11"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A sequence of integers defining the shape of the output tensor.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"options?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live/docs/api/core/modules/torchlive_torch#tensoroptions"},"TensorOptions")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Tensor options.")))),(0,a.mdx)("h4",{id:"returns-11"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/torchlive_torch.tensor"},"Tensor")),(0,a.mdx)("h4",{id:"defined-in-27"},"Defined in"),(0,a.mdx)("p",null,"torchlive/torch.ts:516"))}s.isMDXComponent=!0}}]);