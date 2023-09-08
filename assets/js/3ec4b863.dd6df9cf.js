"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[95531],{16353:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=i(87462),r=(i(67294),i(3905)),a=i(52991),s=i(53438);const o={id:"certifications",title:"Certifications",description:"Certifications",custom_edit_url:null},c=void 0,l={unversionedId:"api/v3/certifications",id:"api/v3/certifications",title:"Certifications",description:"Certifications",source:"@site/products/idn/api/v3/certifications.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/certifications",permalink:"/idn/api/v3/certifications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"certifications",title:"Certifications",description:"Certifications",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Set Campaign Reports Configuration",permalink:"/idn/api/v3/set-campaign-reports-config"},next:{title:"Identity Campaign Certifications by IDs",permalink:"/idn/api/v3/list-identity-certifications"}},d={},m=[],p={toc:m};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement certification functionality.\nWith this functionality in place, administrators and designated certification reviewers can review users' access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer.\nImplementing certifications improves organizations' data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. "),(0,r.kt)("p",null,"A certification refers to IdentityNow's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access.\nThese serve as a way of showing that a user's access has been reviewed and approved.\nMultiple certifications by different reviewers are often required to approve a user's access.\nA set of multiple certifications is called a certification campaign."),(0,r.kt)("p",null,"For example, an organization may use a Manager Certification as a way of showing that a user's access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user's access has been reviewed and approved by multiple managers.\nOnce this certification has been completed, IdentityNow  would provision all the access the user needs, nothing more. "),(0,r.kt)("p",null,"Organization administrators or certification administrators can designate other IdentityNow users as certification reviewers.\nThose reviewers can select the 'Certifications' tab to view any of the certifications they either need to review or have already reviewed under the 'Active' and 'Completed' tabs, respectively. "),(0,r.kt)("p",null,"When a certification campaign is in progress, certification reviewers will see certifications listed under 'Active,' where they can review the involved identities.\nUnder the 'Decision' column on the right, next to each access item, reviewers can select the checkmark to approve access, select the 'X' to revoke access, or they can toggle the 'More Options' menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. "),(0,r.kt)("p",null,"Once a reviewer has made decisions on all the certification's involved access items, he or she must select 'Sign Off' to complete the review process.\nDoing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer's list of work items. "),(0,r.kt)("p",null,"Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities' entitlements are altered to remove any entitlements marked for revocation.\nIn this situation, the certification campaign completes once all the remediation requests are completed. "),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/user-help/certifications.html"},"Certifications")," for more information about certifications."),(0,r.kt)(a.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>w});var n=i(67294),r=i(86010),a=i(53438),s=i(39960),o=i(13919),c=i(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:i}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},i)}function f(e){let{href:t,icon:i,title:a,description:s}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",d),title:a},i," ",a),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",m),title:s},s))}function h(e){let{item:t}=e;const i=(0,a.Wl)(t);return i?n.createElement(f,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const i=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:i,title:t.label,description:r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,a.jA)();return n.createElement(w,{items:i.items,className:t})}function w(e){const{items:t,className:i}=e;if(!t)return n.createElement(g,e);const s=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",i)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}}}]);