"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[27518],{28959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"iso-3166",title:"ISO3166",pagination_label:"ISO3166",sidebar_label:"ISO3166",sidebar_class_name:"iso3166",keywords:["transforms","operations","iso3166"],description:"Convert a string into an ISO 3166 country code value.",slug:"/docs/transforms/operations/iso-3166",tags:["Transforms","Transform Operations"]},i=void 0,s={unversionedId:"docs/identity-now/transforms/operations/iso-3166",id:"docs/identity-now/transforms/operations/iso-3166",title:"ISO3166",description:"Convert a string into an ISO 3166 country code value.",source:"@site/products/idn/docs/identity-now/transforms/operations/iso-3166.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/iso-3166",permalink:"/idn/docs/transforms/operations/iso-3166",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/iso-3166.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"iso-3166",title:"ISO3166",pagination_label:"ISO3166",sidebar_label:"ISO3166",sidebar_class_name:"iso3166",keywords:["transforms","operations","iso3166"],description:"Convert a string into an ISO 3166 country code value.",slug:"/docs/transforms/operations/iso-3166",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Index Of",permalink:"/idn/docs/transforms/operations/index-of"},next:{title:"Last Index Of",permalink:"/idn/docs/transforms/operations/last-index-of"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the ISO3166 transform to convert an incoming string into an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166"},"ISO 3166")," country code value. The incoming data must be either a recognized country name or country code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The alpha2 country code (e.g. "ES")'),(0,r.kt)("li",{parentName:"ul"},'The alpha3 country code (e.g. "ESP)'),(0,r.kt)("li",{parentName:"ul"},"The numeric country code (e.g. 724)"),(0,r.kt)("li",{parentName:"ul"},"The English name for the country (e.g. Spain)"),(0,r.kt)("li",{parentName:"ul"},"The native name for the country (e.g. Espa\xf1a)")),(0,r.kt)("p",null,"The output value can be any of these three values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Two-character country code (e.g., "US")'),(0,r.kt)("li",{parentName:"ul"},'Three-character country code (e.g., "USA")'),(0,r.kt)("li",{parentName:"ul"},'Numeric country code (e.g., "840")')),(0,r.kt)("admonition",{title:"Other Considerations",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the input string to the transform does not represent a valid country code or country name, the transform returns null.")),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"The transform for iso3166 only requires the transform's ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "iso3166",\n  "name": "ISO3166 Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"iso3166"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"format")," - Use this optional value to denote which ISO 3166 format to return. The following values are valid:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alpha2"),' - Two-character country code (e.g., "US"). This is the default value if you do not provide a format.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alpha3"),' - Three-character country code (e.g., "USA")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numeric"),' - The numeric country code (e.g., "840")'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,'Because no specific format is provided, this transform defaults to the alpha2 output and returns "US".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "United States of America"\nOutput: "US"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "iso3166",\n  "name": "ISO3166 Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,'Because the desired format is specified as numeric, the output of this transform returns "724".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "ES"\nOutput: "724"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "format": "numeric"\n  },\n  "type": "iso3166",\n  "name": "ISO3166 Transform"\n}\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_3166"},"https://en.wikipedia.org/wiki/ISO_3166"))))}m.isMDXComponent=!0}}]);