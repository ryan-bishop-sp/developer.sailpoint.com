"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10074],{924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=r(87462),s=(r(67294),r(3905));const n={id:"trigger-types",title:"Trigger Types",pagination_label:"Trigger Types",sidebar_label:"Trigger Types",sidebar_position:1,sidebar_class_name:"triggerTypes",keywords:["event","trigger","types"],description:"These are the different trigger types you can use.",slug:"/docs/event-triggers/trigger-types",tags:["Event Triggers"]},o=void 0,a={unversionedId:"docs/identity-now/event-triggers/trigger-types",id:"docs/identity-now/event-triggers/trigger-types",title:"Trigger Types",description:"These are the different trigger types you can use.",source:"@site/products/idn/docs/identity-now/event-triggers/trigger-types.md",sourceDirName:"docs/identity-now/event-triggers",slug:"/docs/event-triggers/trigger-types",permalink:"/idn/docs/event-triggers/trigger-types",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/trigger-types.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",sidebarPosition:1,frontMatter:{id:"trigger-types",title:"Trigger Types",pagination_label:"Trigger Types",sidebar_label:"Trigger Types",sidebar_position:1,sidebar_class_name:"triggerTypes",keywords:["event","trigger","types"],description:"These are the different trigger types you can use.",slug:"/docs/event-triggers/trigger-types",tags:["Event Triggers"]},sidebar:"idnDocs",previous:{title:"Event Triggers",permalink:"/idn/docs/event-triggers"},next:{title:"Preparing a Subscriber Service",permalink:"/idn/docs/event-triggers/preparing-subscriber-service"}},g={},d=[{value:"Fire and Forget",id:"fire-and-forget",level:2},{value:"Response Required",id:"response-required",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"fire-and-forget"},"Fire and Forget"),(0,s.kt)("p",null,"A fire and forget trigger only supports one-way communication with subscribers. Its only job is to forward each event it receives to each subscribing service. This trigger type doesn't wait for a response from subscribers. It has no way of knowing whether subscribers actually receive the event, and it doesn't have any mechanism for resending events. Think of this trigger type as live television. You can only see what is happening in real-time. You cannot rewind the live feed or interact with the broadcast in any way. This trigger type is the simplest and most common trigger type among SailPoint's event triggers."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Fire and forget triggers can have a maximum of 50 subscribers per event.")),(0,s.kt)("h2",{id:"response-required"},"Response Required"),(0,s.kt)("p",null,"A response required trigger allows two-way communication between the trigger service and the subscriber. This trigger type expects a response from the subscriber with directions about how to proceed with the event. For example, the access request dynamic approval event trigger will send the subscriber details about the access request, and the subscriber may respond to the trigger with the identity ID to include in the approval process for an access request. This trigger type allows subscribers to not only receive events in real-time, but to act on them as well."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Response required triggers can only have one subscriber per event.")))}c.isMDXComponent=!0}}]);