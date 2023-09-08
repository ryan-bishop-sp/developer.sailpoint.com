"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42836],{69242:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const r={id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/docs/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},s=void 0,o={unversionedId:"docs/identity-now/event-triggers/early-access/identity-deleted",id:"docs/identity-now/event-triggers/early-access/identity-deleted",title:"Identity Deleted",description:"Fires after an identity is deleted.",source:"@site/products/idn/docs/identity-now/event-triggers/early-access/identity-deleted.md",sourceDirName:"docs/identity-now/event-triggers/early-access",slug:"/docs/event-triggers/triggers/identity-deleted",permalink:"/idn/docs/event-triggers/triggers/identity-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/early-access/identity-deleted.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/idn/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/docs/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Early Access Event Triggers",permalink:"/idn/docs/event-triggers/early-access"},next:{title:"Source Account Created",permalink:"/idn/docs/event-triggers/triggers/source-account-created"}},d={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:l};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled in your tenant.")),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow",src:i(73195).Z,width:"1178",height:"229"})),(0,a.kt)("p",null,"Identity deleted event will occur when an identity meets all of the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No correlated accounts"),(0,a.kt)("li",{parentName:"ul"},"Not an owner of a role, access profile, application, source, or taskResult"),(0,a.kt)("li",{parentName:"ul"},"Not an owner or requester of a workItem"),(0,a.kt)("li",{parentName:"ul"},"Not a protected account or manager"),(0,a.kt)("li",{parentName:"ul"},"No assigned capabilities (ex. not an assigned cert reviewer)"),(0,a.kt)("li",{parentName:"ul"},"Not involved in any active certification as a target (its access is not being certified)")),(0,a.kt)("p",null,"After accounts are aggregated and the identity refresh process finds an identity that meets the above criteria, the associated identity is deleted from IdentityNow. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045"},"Configuring Correlation"),". The Identity deleted event contains any identity attributes as they are configured in the identity profile. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877"},"Mapping Identity Profiles"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"IdentityNow will ",(0,a.kt)("strong",{parentName:"p"},"hide")," an identity from the identity list in the UI when the authoritative account is removed.  This does not necessarily mean that the identity has been deleted.  The identity will only be deleted when the above criteria are met.  The deletion task run each night, so there will be a delay from when the criteria are met to when the identity will actually be deleted.")),(0,a.kt)("p",null,"This event trigger provides a flexible way to extend joiner-mover-leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization."),(0,a.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate provisioning actions as part of the leaver workflow."),(0,a.kt)("li",{parentName:"ul"},"Notify a system to trigger another action (e.g. deactivate an employee\u2019s badge upon termination).")),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "attributes": {\n    "firstname": "John"\n  }\n}\n')),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0},73195:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/identity-deleted-path-48c9bae187bac0382cda77be26264812.png"}}]);