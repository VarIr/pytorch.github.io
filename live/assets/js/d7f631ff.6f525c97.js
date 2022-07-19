"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5279],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=l.createContext({}),p=function(e){return function(t){var a=s(t.components);return l.createElement(e,n({},t,{components:a}))}},s=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return l.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},x=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,x=p["".concat(d,".").concat(u)]||p[u]||c[u]||n;return a?l.createElement(x,o(o({ref:t},m),{},{components:a})):l.createElement(x,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,d=new Array(n);d[0]=x;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var m=2;m<n;m++)d[m]=a[m];return l.createElement.apply(null,d)}return l.createElement.apply(null,a)}x.displayName="MDXCreateElement"},5355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var l=a(83117),r=(a(67294),a(3905));const n={id:"mobilemodelmodule.mobilemodel",title:"Interface: MobileModel",sidebar_label:"MobileModel",custom_edit_url:null},d=void 0,o={unversionedId:"api/core/interfaces/mobilemodelmodule.mobilemodel",id:"api/core/interfaces/mobilemodelmodule.mobilemodel",title:"Interface: MobileModel",description:"MobileModelModule.MobileModel",source:"@site/docs/api/core/interfaces/mobilemodelmodule.mobilemodel.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/mobilemodelmodule.mobilemodel",permalink:"/live/docs/next/api/core/interfaces/mobilemodelmodule.mobilemodel",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mobilemodelmodule.mobilemodel",title:"Interface: MobileModel",sidebar_label:"MobileModel",custom_edit_url:null},sidebar:"api",previous:{title:"Image",permalink:"/live/docs/next/api/core/interfaces/imagemodule.image"},next:{title:"ModelResult",permalink:"/live/docs/next/api/core/interfaces/mobilemodelmodule.modelresult"}},i={},m=[{value:"Methods",id:"methods",level:2},{value:"download",id:"download",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"execute",id:"execute",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"preload",id:"preload",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"unload",id:"unload",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:m};function s(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/modules/mobilemodelmodule"},"MobileModelModule"),".MobileModel"),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"download"},"download"),(0,r.mdx)("p",null,"\u25b8 ",(0,r.mdx)("strong",{parentName:"p"},"download"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"modelPath"),"): ",(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<string",">"),(0,r.mdx)("p",null,"Download a model to the local file system and return the local file path\nas a model. If the model path is a file path already, it will return the\nsame path as a result."),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"modelPath")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/modules/models#modelpath"},"ModelPath")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The model path as require or uri (i.e., ",(0,r.mdx)("inlineCode",{parentName:"td"},"require"),").")))),(0,r.mdx)("h4",{id:"returns"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<string",">"),(0,r.mdx)("h4",{id:"defined-in"},"Defined in"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/MobileModelModule.ts#L70"},"MobileModelModule.ts:70")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"execute"},"execute"),(0,r.mdx)("p",null,"\u25b8 ",(0,r.mdx)("strong",{parentName:"p"},"execute"),"<T",">","(",(0,r.mdx)("inlineCode",{parentName:"p"},"modelPath"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/mobilemodelmodule.modelresult"},"ModelResult"),"<T",">",">"),(0,r.mdx)("p",null,"Run inference on a model."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"const classificationModel = require('../models/mobilenet_v3_small.ptl');\n\n// or\n\nconst classificationModel = require('https://example.com/models/mobilenet_v3_small.ptl');\n\nconst image: Image = await ImageUtils.fromURL('https://image.url');\n\nconst { result: {maxIdx} } = await MobileModel.execute(\n  classificationModel,\n  {\n    image,\n  }\n);\n\nconst topClass = ImageClasses(scores);\n")),(0,r.mdx)("h4",{id:"type-parameters"},"Type parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"T"))))),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"modelPath")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/modules/models#modelpath"},"ModelPath")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The model path as require or uri (i.e., ",(0,r.mdx)("inlineCode",{parentName:"td"},"require"),").")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"params")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"any")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The input parameters for the model.")))),(0,r.mdx)("h4",{id:"returns-1"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/mobilemodelmodule.modelresult"},"ModelResult"),"<T",">",">"),(0,r.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/MobileModelModule.ts#L113"},"MobileModelModule.ts:113")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"preload"},"preload"),(0,r.mdx)("p",null,"\u25b8 ",(0,r.mdx)("strong",{parentName:"p"},"preload"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"modelPath"),"): ",(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Preload a model. If a model is not preloaded, it will be loaded during the\nfirst inference call. However, the first inference time will therefore\ntake significantly longer. This function allows to preload a model ahead\nof time before running the first inference."),(0,r.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"modelPath")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/modules/models#modelpath"},"ModelPath")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The model path as require or uri (i.e., ",(0,r.mdx)("inlineCode",{parentName:"td"},"require"),").")))),(0,r.mdx)("h4",{id:"returns-2"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/MobileModelModule.ts#L79"},"MobileModelModule.ts:79")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"unload"},"unload"),(0,r.mdx)("p",null,"\u25b8 ",(0,r.mdx)("strong",{parentName:"p"},"unload"),"(): ",(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Unload all model. If any model were loaded previously, they will be discarded.\nThis function allows to load a new version of a model without restarting the\napp."),(0,r.mdx)("h4",{id:"returns-3"},"Returns"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/MobileModelModule.ts#L86"},"MobileModelModule.ts:86")))}s.isMDXComponent=!0}}]);