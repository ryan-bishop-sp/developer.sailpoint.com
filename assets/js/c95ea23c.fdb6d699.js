"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[13191],{41776:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>k,toc:()=>g});var l=t(87462),s=(t(67294),t(3905)),r=t(26389),i=t(94891),m=t(75190),n=t(47507),o=t(24310),p=t(63303),d=(t(75035),t(85162));const c={id:"get-role",sidebar_label:"Find role by id",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVdtuGzcQ/RWCTy2gm225TQX0wUWdQkWTFLbbl0AwRrsjickuuRmSihaL/ffOkJItV65T+8FaknM5M+dw2GnXIEEwzs5LPdNrDDeuQj3QJfqCTCMnvD+3K6dWjhQo32BhVqZQ0SMpytYB1l7PPmpZer0Y6AYIagxIst1pywsOY0q2NRKwgbA5zfKrcisVNqjc8hMWQQWnCAMZ3OJAxaaEwL+MosSKY7M/4ZdoCBl6oIgD7YsN1qBnnQ5tIxk9e9s1WzL4GgLvxJhQ4A7qphKTs/PpD+Wb5cUQivOfhtPJ2eXwzdnldFgiTKcXU/jxYgW67xeSzTfOeq6QE5xPJvLztILrHXcnYKkOplICqC1URva+RPSBkxfOBrRB/KFpKlMkBsafvATpTqvI7WDHhoSvYDKE1PxvWnG5/6MfhFB+sFWbO9kPdHzerzb2D7RrZm92cc5L2B0vn0Y57nJqhyN/n0Bz/CyJ0wSPLrd7F7Fek4uNP7IHImhFTQFr/3IcKO+T+31K2fccLpiQjpLY+/Q30NPnGP0FSnWTiVNDFS0sq0Rq4SR6wNFr6HQWP6zShfg3ZQdAc5u08ru49oP/tvtbrFKaa6LUo0Uu4vK5IuaMjyxU6hZpy7c2+XA5fLkiWZars1zaBmxZ8QJ3BSZP/6riXlYhSspTZFeqRu9hjSrvL5m8NAGy/RM5OKJWecdjZSNWXxmV+kqO2e4PFMqZ2w8ygSBTZqbHaSyNO1P2vOlTD/JcilTx+SaExs/G444LBRves0z6kWWyOLNrEUdM9hgaw85bICMSyJJ7MM+FrSBWcqWgqLFwJ+PtLpkrUaEC781aOi9Sij5wVSRlLARfEcmENgFcIhDSVZQ6Pi6Oj2+l8RnHsdEDD1KU3k9EWWcj3skfbw/3/859Rssw+P/PrYuUP7V00/DUl4jSrlzC2WgymhzJ8P31zTt19ef8tFam8HCoCrBqifJgpHqhKJhzxWpTtSvNqlXSVRe9TE1GwKfKWJXAoN0aprhmrkWMLD/kqSqg9k/Ku/ldwto4H2qwRydvDScQ5tWyVWnGPYHYPSr7289bbmnAXRg3FRi5m1k73V5jh6dvoGecimnaMB7Z7rolePyLqr6XbR4kJMwuHqWUeC6Nl2+W7goqjy9g/e5m/+Z9r17/Xj5byGGi2jYJvIqy4s/P2OY3m2cLF8SjnfUjYPPBVSFj4sjlZDyIXB9u5G/XQtQ/uiPkjA==",sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role by id' (get-role)"},u=void 0,k={unversionedId:"api/get-role",id:"api/get-role",title:"get-role",description:"Find role by id",source:"@site/products/nerm/api/get-role.api.mdx",sourceDirName:"api",slug:"/api/get-role",permalink:"/nerm/api/get-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role by id' (get-role)",tags:[],version:"current",frontMatter:{id:"get-role",sidebar_label:"Find role by id",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVdtuGzcQ/RWCTy2gm225TQX0wUWdQkWTFLbbl0AwRrsjickuuRmSihaL/ffOkJItV65T+8FaknM5M+dw2GnXIEEwzs5LPdNrDDeuQj3QJfqCTCMnvD+3K6dWjhQo32BhVqZQ0SMpytYB1l7PPmpZer0Y6AYIagxIst1pywsOY0q2NRKwgbA5zfKrcisVNqjc8hMWQQWnCAMZ3OJAxaaEwL+MosSKY7M/4ZdoCBl6oIgD7YsN1qBnnQ5tIxk9e9s1WzL4GgLvxJhQ4A7qphKTs/PpD+Wb5cUQivOfhtPJ2eXwzdnldFgiTKcXU/jxYgW67xeSzTfOeq6QE5xPJvLztILrHXcnYKkOplICqC1URva+RPSBkxfOBrRB/KFpKlMkBsafvATpTqvI7WDHhoSvYDKE1PxvWnG5/6MfhFB+sFWbO9kPdHzerzb2D7RrZm92cc5L2B0vn0Y57nJqhyN/n0Bz/CyJ0wSPLrd7F7Fek4uNP7IHImhFTQFr/3IcKO+T+31K2fccLpiQjpLY+/Q30NPnGP0FSnWTiVNDFS0sq0Rq4SR6wNFr6HQWP6zShfg3ZQdAc5u08ru49oP/tvtbrFKaa6LUo0Uu4vK5IuaMjyxU6hZpy7c2+XA5fLkiWZars1zaBmxZ8QJ3BSZP/6riXlYhSspTZFeqRu9hjSrvL5m8NAGy/RM5OKJWecdjZSNWXxmV+kqO2e4PFMqZ2w8ygSBTZqbHaSyNO1P2vOlTD/JcilTx+SaExs/G444LBRves0z6kWWyOLNrEUdM9hgaw85bICMSyJJ7MM+FrSBWcqWgqLFwJ+PtLpkrUaEC781aOi9Sij5wVSRlLARfEcmENgFcIhDSVZQ6Pi6Oj2+l8RnHsdEDD1KU3k9EWWcj3skfbw/3/859Rssw+P/PrYuUP7V00/DUl4jSrlzC2WgymhzJ8P31zTt19ef8tFam8HCoCrBqifJgpHqhKJhzxWpTtSvNqlXSVRe9TE1GwKfKWJXAoN0aprhmrkWMLD/kqSqg9k/Ku/ldwto4H2qwRydvDScQ5tWyVWnGPYHYPSr7289bbmnAXRg3FRi5m1k73V5jh6dvoGecimnaMB7Z7rolePyLqr6XbR4kJMwuHqWUeC6Nl2+W7goqjy9g/e5m/+Z9r17/Xj5byGGi2jYJvIqy4s/P2OY3m2cLF8SjnfUjYPPBVSFj4sjlZDyIXB9u5G/XQtQ/uiPkjA==",sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role by id' (get-role)"},sidebar:"nermOpenApiSidebar",previous:{title:"Create a new role",permalink:"/nerm/api/post-role"},next:{title:"Update an existing role",permalink:"/nerm/api/patch-role"}},y={},g=[{value:"Find role by id",id:"find-role-by-id",level:2}],h={toc:g};function b(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,l.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"find-role-by-id"},"Find role by id"),(0,s.kt)("p",null,"Info for a specific user role"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"role"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Sponsors"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"ad_group_name"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "role": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "sponsors_role",\n    "name": "Sponsors",\n    "groups": [\n      "ad_group_name"\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,s.kt)(d.Z,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);