"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[18635],{25765:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var s=t(87462),m=(t(67294),t(3905)),l=t(26389),i=t(94891),r=t(75190),n=t(47507),p=t(24310),o=t(63303),d=(t(75035),t(85162));const u={id:"get-user",sidebar_label:"Find user by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVttuGzcQ/RWCTw2giy3LbSqgDyriFCoap7CdvBiCMdqdlRjvkhteFC0W+++dISVbjhS1rh+sJTkcnjNzZshWmhoteGX0LJcTuUT/yaGVPZmjy6yqeYXmZ7owojBWgHA1ZqpQmQjJ0MPSycm95KGT856swUKFnkeT+1ZqGpAHlZOtYl81+NXhAe+EKYRfoTCLL5h54Y2w6K3CNfZEqHPw9EsAcizJN+23+DUoi4Ta24A96bIVViAnrfRNzSc62q2XZEm4K/A0E0JEgRuo6pJNzkfjn/O3i4s+ZKNf++Oz88v+2/PLcT9HGI8vxvDLRQGy6+Z8mquNduj4gNHZGf+8ZHC1ocB4zMXOlCmAWEOpeO5rQOfp8Mxoj9rzfqjrUmUx+MMvjp20hyxSOGhjbTlVXiUIMfj/akV0/0M8LEJudNmkSHY9GY7vq5T+C/WSsje5GNEQNvvDAy8p8d+7oQUiqMqTwJIFmSaLQ0vUoWLRXSMRLlSJW9VeI2QZOheHcxZZAaFkly8t2bXy5XF8zoMP7tSx08yrNYvwnXKwKEmEc9pXmqXSRz2W4PzDD5b3aLPI+15VuE3Kx/1wZsY8UlofmGBNOnsA//+d1RYLtFQ9DyXoZYDlsUg8B0ly0PojmuK/nhwfK4DfIRc3SeeiL4LmwHANZIarzePgNeo3Gj8WsX98r/AdpJmOpfUnb+16P7b7zFbxmCtrDTWlbp5IXB4jMSN8VkMpbtGu0Yq4h+hQLwpWU3UbTdRWoHPKusAN54J2uleRO120yEceIpuKioRNmRJpfkE5ig0z2e+3tVtjbSOcoS68YqtvhEp8syYmdZtCXjPbls8QuClP5DB28WGr8o4mXYxBauPBUsnKlfe1mwyHLREF7a+pxLuBpmTRyaZBHFCyh1Ar2rwGq1gCqZCezBOxXVVCVmFmDm6Du2guuIMIcE4tOfIspeA8sbJMY874smCVbyLABYJFOw3M436+v3zLgU849o2e8sCk5PYC4XEyopn08X5XUXfmETXBoP+/NSbY9BnrRNH9yB45XInC+eBscLYnw+urmw9i+vfskCulcLcoMtBigXy1Rr6pmQlSm6hMropGcFRNcHzJEAJaFUqLCAb1WlGKK8o1i5Hkh3QJMajtDfxhdhex1sb5CvTeyntFB3DmxaIR8Up4AbF9VvbJh0CKpseNH9YlKC7LJJt2K6/dI6EnJ3QKZWhFUHi6bRfg8JMtu46nqYdYTur8WUUxxfmu204KKB2egPnTzfZ18Ea8/mVxlMh2EnQTtV0GHtHnIzbpddPxFbCiRssXM4FNC9PYrfe2HHQGVupTMf5xxTn6B1NjSP8=",sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)"},c=void 0,y={unversionedId:"api/get-user",id:"api/get-user",title:"get-user",description:"Find user by id",source:"@site/products/nerm/api/get-user.api.mdx",sourceDirName:"api",slug:"/api/get-user",permalink:"/nerm/api/get-user",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)",tags:[],version:"current",frontMatter:{id:"get-user",sidebar_label:"Find user by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVttuGzcQ/RWCTw2giy3LbSqgDyriFCoap7CdvBiCMdqdlRjvkhteFC0W+++dISVbjhS1rh+sJTkcnjNzZshWmhoteGX0LJcTuUT/yaGVPZmjy6yqeYXmZ7owojBWgHA1ZqpQmQjJ0MPSycm95KGT856swUKFnkeT+1ZqGpAHlZOtYl81+NXhAe+EKYRfoTCLL5h54Y2w6K3CNfZEqHPw9EsAcizJN+23+DUoi4Ta24A96bIVViAnrfRNzSc62q2XZEm4K/A0E0JEgRuo6pJNzkfjn/O3i4s+ZKNf++Oz88v+2/PLcT9HGI8vxvDLRQGy6+Z8mquNduj4gNHZGf+8ZHC1ocB4zMXOlCmAWEOpeO5rQOfp8Mxoj9rzfqjrUmUx+MMvjp20hyxSOGhjbTlVXiUIMfj/akV0/0M8LEJudNmkSHY9GY7vq5T+C/WSsje5GNEQNvvDAy8p8d+7oQUiqMqTwJIFmSaLQ0vUoWLRXSMRLlSJW9VeI2QZOheHcxZZAaFkly8t2bXy5XF8zoMP7tSx08yrNYvwnXKwKEmEc9pXmqXSRz2W4PzDD5b3aLPI+15VuE3Kx/1wZsY8UlofmGBNOnsA//+d1RYLtFQ9DyXoZYDlsUg8B0ly0PojmuK/nhwfK4DfIRc3SeeiL4LmwHANZIarzePgNeo3Gj8WsX98r/AdpJmOpfUnb+16P7b7zFbxmCtrDTWlbp5IXB4jMSN8VkMpbtGu0Yq4h+hQLwpWU3UbTdRWoHPKusAN54J2uleRO120yEceIpuKioRNmRJpfkE5ig0z2e+3tVtjbSOcoS68YqtvhEp8syYmdZtCXjPbls8QuClP5DB28WGr8o4mXYxBauPBUsnKlfe1mwyHLREF7a+pxLuBpmTRyaZBHFCyh1Ar2rwGq1gCqZCezBOxXVVCVmFmDm6Du2guuIMIcE4tOfIspeA8sbJMY874smCVbyLABYJFOw3M436+v3zLgU849o2e8sCk5PYC4XEyopn08X5XUXfmETXBoP+/NSbY9BnrRNH9yB45XInC+eBscLYnw+urmw9i+vfskCulcLcoMtBigXy1Rr6pmQlSm6hMropGcFRNcHzJEAJaFUqLCAb1WlGKK8o1i5Hkh3QJMajtDfxhdhex1sb5CvTeyntFB3DmxaIR8Up4AbF9VvbJh0CKpseNH9YlKC7LJJt2K6/dI6EnJ3QKZWhFUHi6bRfg8JMtu46nqYdYTur8WUUxxfmu204KKB2egPnTzfZ18Ea8/mVxlMh2EnQTtV0GHtHnIzbpddPxFbCiRssXM4FNC9PYrfe2HHQGVupTMf5xxTn6B1NjSP8=",sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)"},sidebar:"nermOpenApiSidebar",previous:{title:"Update multiple users",permalink:"/nerm/api/patch-users"},next:{title:"Update a user by id",permalink:"/nerm/api/patch-user"}},b={},h=[{value:"Find user by id",id:"find-user-by-id",level:2}],g={toc:h};function f(e){let{components:a,...t}=e;return(0,m.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"find-user-by-id"},"Find user by id"),(0,m.kt)("p",null,"Info for a specific user"),(0,m.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)(l.Z,{mdxType:"ApiTabs"},(0,m.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Expected response to a valid request")),(0,m.kt)("div",null,(0,m.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.Z,{mdxType:"SchemaTabs"},(0,m.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{}},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"user"),(0,m.kt)("span",{style:{opacity:"0.6"}}," object")),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readonly:!0},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readonly:!0},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileUser`, `NeaccessUser`]",schema:{type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Disabled`]",schema:{type:"string",enum:["Active","Disabled"]},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"login",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"preferred_language",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "user": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "string",\n    "name": "string",\n    "email": "user@example.com",\n    "type": "NeprofileUser",\n    "title": "string",\n    "status": "Active",\n    "login": "string",\n    "last_login": "2023-09-08T14:40:57.348Z",\n    "cookies_accepted_at": "2023-09-08T14:40:57.348Z",\n    "preferred_language": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Bad Request - unable to complete.")),(0,m.kt)("div",null,(0,m.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.Z,{mdxType:"SchemaTabs"},(0,m.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",null,(0,m.kt)("span",{className:"badge badge--info"},"oneOf"),(0,m.kt)(o.Z,{mdxType:"SchemaTabs"},(0,m.kt)(d.Z,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,m.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,m.kt)(d.Z,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,m.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,m.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,m.kt)("div",null,(0,m.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.Z,{mdxType:"SchemaTabs"},(0,m.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);