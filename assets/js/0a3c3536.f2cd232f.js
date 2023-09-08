"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86709],{92510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),i=n(52991),c=n(53438);const r={id:"non-employee-lifecycle-management",title:"Non-Employee Lifecycle Management",description:"Non-Employee Lifecycle Management",custom_edit_url:null},l=void 0,s={unversionedId:"api/v3/non-employee-lifecycle-management",id:"api/v3/non-employee-lifecycle-management",title:"Non-Employee Lifecycle Management",description:"Non-Employee Lifecycle Management",source:"@site/products/idn/api/v3/non-employee-lifecycle-management.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/non-employee-lifecycle-management",permalink:"/idn/api/v3/non-employee-lifecycle-management",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"non-employee-lifecycle-management",title:"Non-Employee Lifecycle Management",description:"Non-Employee Lifecycle Management",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Process identities under profile",permalink:"/idn/api/v3/sync-identity-profile"},next:{title:"Create Non-Employee Record",permalink:"/idn/api/v3/create-non-employee-record"}},m={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement non-employee lifecycle management functionality.\nWith this functionality in place, administrators can create non-employee records and configure them for use in their organizations.\nThis allows organizations to provide secure access to non-employees and control that access. "),(0,a.kt)("p",null,"The 'non-employee' term refers to any consultant, contractor, intern, or other user in an organization who is not a full-time permanent employee.\nOrganizations can track non-employees' access and activity in IdentityNow by creating and maintaining non-employee sources.\nOrganizations can have a maximum of 50 non-employee sources. "),(0,a.kt)("p",null,"By using SailPoint's Non-Employee Lifecycle Management functionality, you agree to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SailPoint is not responsible for storing sensitive data.\nYou may only add account attributes to non-employee identities that are necessary for business operations and are consistent with your contractual limitations on data that may be sent or stored in IdentityNow.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You are responsible for regularly downloading your list of non-employee accounts for all the sources you create and storing this list of accounts in a managed location to maintain an authoritative system of record and backup data for these accounts."))),(0,a.kt)("p",null,"To manage non-employees in IdentityNow, administrators must create a non-employee source and add accounts to the source. "),(0,a.kt)("p",null,"To create a non-employee source in IdentityNow, administrators must use the Admin panel to go to Connections > Sources.\nThey must then specify 'Non-Employee' in the 'Source Type' field.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#creating-a-non-employee-source"},"Creating a Non-Employee Source")," for more details about how to create non-employee sources."),(0,a.kt)("p",null,"To add accounts to a non-employee source in IdentityNow, administrators can select the non-employee source and add the accounts.\nThey can also use the 'Manage Non-Employees' widget on their user dashboards to reach the list of sources and then select the non-employee source they want to add the accounts to. "),(0,a.kt)("p",null,"Administrators can either add accounts individually or in bulk. Each non-employee source can have a maximum of 20,000 accounts.\nTo add accounts in bulk, they must select the 'Bulk Upload' option and upload a CSV file.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#adding-accounts"},"Adding Accounts")," for more details about how to add accounts to non-employee sources."),(0,a.kt)("p",null,"Once administrators have created the non-employee source and added accounts to it, they can create identity profiles to generate identities for the non-employee accounts and manage the non-employee identities the same way they would any other identities. "),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html"},"Managing Non-Employee Sources and Accounts")," for more information about non-employee lifecycle management."),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0},52991:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(67294),a=n(86010),i=n(53438),c=n(39960),r=n(13919),l=n(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return o.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function d(e){let{href:t,icon:n,title:i,description:c}=e;return o.createElement(u,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},n," ",i),c&&o.createElement("p",{className:(0,a.Z)("text--truncate",p),title:c},c))}function y(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?o.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return o.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return o.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return o.createElement(g,e);const c=(0,i.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}}}]);