"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[14514],{62854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={id:"generate-random-string",title:"Generate Random String",pagination_label:"Generate Random String",sidebar_label:"Generate Random String",sidebar_class_name:"generateRandomString",keywords:["transforms","operations","generate","random","string"],description:"Generate a random string of any length.",slug:"/docs/transforms/operations/generate-random-string",tags:["Transforms","Transform Operations"]},o=void 0,s={unversionedId:"docs/identity-now/transforms/operations/generate-random-string",id:"docs/identity-now/transforms/operations/generate-random-string",title:"Generate Random String",description:"Generate a random string of any length.",source:"@site/products/idn/docs/identity-now/transforms/operations/generate-random-string.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/generate-random-string",permalink:"/idn/docs/transforms/operations/generate-random-string",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/generate-random-string.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"generate-random-string",title:"Generate Random String",pagination_label:"Generate Random String",sidebar_label:"Generate Random String",sidebar_class_name:"generateRandomString",keywords:["transforms","operations","generate","random","string"],description:"Generate a random string of any length.",slug:"/docs/transforms/operations/generate-random-string",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"First Valid",permalink:"/idn/docs/transforms/operations/first-valid"},next:{title:"Get End of String",permalink:"/idn/docs/transforms/operations/get-end-of-string"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the generate random string transform as an out-of-the-box rule transform provided through SailPoint's Cloud Services Utility rule. The transform allows you to generate a random string of any length, using true/false flags to denote whether the stringe includes numbers and/or special characters."),(0,a.kt)("admonition",{title:"Other Considerations",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The generate random string transform shares some common features with two other transforms: ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/transforms/operations/random-numeric"},"random numeric")," and ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/transforms/operations/random-alphanumeric"},"random alphanumeric"),". In most cases, either of these other two out-of-the-box transforms are recommended. However, the one advantage of the generate random string transform is its support for special characters, so a common use for this transform is generating random passwords that meet basic complexity requirements."))),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The structure of a generate random string transform requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),' of the referenced rule to be the "Cloud Services Deployment Utility" rule built by SailPoint. You must also must set ',(0,a.kt)("inlineCode",{parentName:"p"},"operation")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"generateRandomString"),", provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"length"),", and provide the true/false attributes for ",(0,a.kt)("inlineCode",{parentName:"p"},"includeNumbers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"includeSpecialChars"),". Last, you must include the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes required for all transforms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "generateRandomString",\n    "includeNumbers": "true",\n    "includeSpecialChars": "true",\n    "length": "16"\n  },\n  "type": "rule",\n  "name": "Generate Random String Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"rule"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"attributes.name")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud Services Deployment Utility"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"operation")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"generateRandomString"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"includeNumbers")," - You must set this value to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," to indicate whether the generator logic includes numbers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"includeSpecialChars")," - You must set this value to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," to indicate whether the generator logic includes the followin special characters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"!"),(0,a.kt)("li",{parentName:"ul"},"@"),(0,a.kt)("li",{parentName:"ul"},"#"),(0,a.kt)("li",{parentName:"ul"},"\\$"),(0,a.kt)("li",{parentName:"ul"},"%"),(0,a.kt)("li",{parentName:"ul"},"&"),(0,a.kt)("li",{parentName:"ul"},"*"),(0,a.kt)("li",{parentName:"ul"},"("),(0,a.kt)("li",{parentName:"ul"},")"),(0,a.kt)("li",{parentName:"ul"},"+"),(0,a.kt)("li",{parentName:"ul"},"<"),(0,a.kt)("li",{parentName:"ul"},">"),(0,a.kt)("li",{parentName:"ul"},"?"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"length")," - This is the required length ofthe randomly generated string.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note")," Due to identity attribute data constraints, the maximum allowable value is 450 characters."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This transform generates a 16-character random string containing letters, numbers and special characters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "generateRandomString",\n    "includeNumbers": "true",\n    "includeSpecialChars": "true",\n    "length": "16"\n  },\n  "type": "rule",\n  "name": "Generate Random String Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,"This transform generates an 8-character random string containing only letters and numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "generateRandomString",\n    "includeNumbers": "true",\n    "includeSpecialChars": "false",\n    "length": "8"\n  },\n  "type": "rule",\n  "name": "Generate Random String Transform"\n}\n')))}p.isMDXComponent=!0}}]);