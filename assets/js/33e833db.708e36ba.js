"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46182],{53867:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const c={id:"connector-spec-key-value",title:"Key Value",pagination_label:"Key Value",sidebar_label:"Key Value",keywords:["connectivity","connectors","connector-spec","keyValue"],description:"Details on using the key value item",slug:"/docs/saas-connectivity/connector-spec/key-value",tags:["Connectivity","Connector Spec"]},o=void 0,p={unversionedId:"docs/identity-now/saas-connectivity/connector-spec/connector-spec-key-value",id:"docs/identity-now/saas-connectivity/connector-spec/connector-spec-key-value",title:"Key Value",description:"Details on using the key value item",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-spec/keyValue.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-spec",slug:"/docs/saas-connectivity/connector-spec/key-value",permalink:"/idn/docs/saas-connectivity/connector-spec/key-value",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-spec/keyValue.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Spec",permalink:"/idn/tags/connector-spec"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"connector-spec-key-value",title:"Key Value",pagination_label:"Key Value",sidebar_label:"Key Value",keywords:["connectivity","connectors","connector-spec","keyValue"],description:"Details on using the key value item",slug:"/docs/saas-connectivity/connector-spec/key-value",tags:["Connectivity","Connector Spec"]},sidebar:"idnDocs",previous:{title:"Card",permalink:"/idn/docs/saas-connectivity/connector-spec/card"},next:{title:"List",permalink:"/idn/docs/saas-connectivity/connector-spec/list"}},r={},d=[{value:"How to use the key value type in the connector spec",id:"how-to-use-the-key-value-type-in-the-connector-spec",level:2},{value:"Example key value item type",id:"example-key-value-item-type",level:3}],i={toc:d};function s(A){let{components:e,...c}=A;return(0,a.kt)("wrapper",(0,n.Z)({},i,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-use-the-key-value-type-in-the-connector-spec"},"How to use the key value type in the connector spec"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"keyValue")," type to allow users to enter multiple key value items in a single entry box. "),(0,a.kt)("p",null,"This is an example implementation:"),(0,a.kt)("h3",{id:"example-key-value-item-type"},"Example key value item type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": "header",\n    "label": "Header Values",\n    "type": "keyValue",\n    "keyValueKey": {\n        "key": "key",\n        "label": "Key",\n        "type": "text",\n        "required": true,\n        "maxlength": "4096"\n    },\n    "keyValueValue": {\n        "key": "value",\n        "label": "Value",\n        "type": "text",\n        "required": true,\n        "maxlength": "4096"\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"list input type",src:t(711).Z,width:"723",height:"279"})))}s.isMDXComponent=!0},711:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);