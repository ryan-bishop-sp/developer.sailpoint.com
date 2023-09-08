"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[26049],{30689:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"index-of",title:"Index Of",pagination_label:"Index Of",sidebar_label:"Index Of",sidebar_class_name:"indexOf",keywords:["transforms","operations","index","of"],description:"Get the location of a specific substring within a value.",slug:"/docs/transforms/operations/index-of",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/index-of",id:"docs/identity-now/transforms/operations/index-of",title:"Index Of",description:"Get the location of a specific substring within a value.",source:"@site/products/idn/docs/identity-now/transforms/operations/index-of.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/index-of",permalink:"/idn/docs/transforms/operations/index-of",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/index-of.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"index-of",title:"Index Of",pagination_label:"Index Of",sidebar_label:"Index Of",sidebar_class_name:"indexOf",keywords:["transforms","operations","index","of"],description:"Get the location of a specific substring within a value.",slug:"/docs/transforms/operations/index-of",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Identity Attribute",permalink:"/idn/docs/transforms/operations/identity-attribute"},next:{title:"ISO3166",permalink:"/idn/docs/transforms/operations/iso-3166"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the index of transform to get the location of a specific substring within an incoming value. This transform is often useful in conjunction with the substring transform for getting parts of strings that can be dynamic in length or composition. If the substring you are searching for does not occur within the data, the transform returns -1."),(0,a.kt)("admonition",{title:"Other Considerations",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If the substring you are searching for occurs multiple times within the incoming data, the transform returns the location of the first occurrence. If you want the last occurrence of a substring, use the ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/transforms/operations/last-index-of"},"Last Index Of")," transform. If you want an occurrence that is neither first nor last, use the ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/transforms/operations/substring"},"Substring")," transform."))),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The indexOf transform requires only the substring which you want to search for, along with the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "substring": "admin_"\n  },\n  "type": "indexOf",\n  "name": "Index Of Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"indexOf"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"substring")," - This is the string whose beginning location within the incoming data you want to find."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'The "admin',"_",'" substring occurs at the very beginning of the input string, so this transform returns 0.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "admin_jsmith"\nOutput: "0"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "substring": "admin_"\n  },\n  "type": "indexOf",\n  "name": "Index Of Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'Though the letter "b" occurs multiple times throughout the input string, the first time it occurs is within the index location 1, so the transform returns that value.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "abcabcabc"\nOutput: "1"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "substring": "b"\n  },\n  "type": "indexOf",\n  "name": "Index Of Transform"\n}\n')))}d.isMDXComponent=!0}}]);