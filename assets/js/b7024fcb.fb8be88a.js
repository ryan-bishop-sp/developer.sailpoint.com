"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[95970],{56303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"before-and-after-rule-operations",title:"Before and After Operations on Source Account Rule",pagination_label:"Before and After Operations",sidebar_label:"Before and After Rule Operations",sidebar_class_name:"beforeAndAfterRuleOperations",keywords:["cloud","rules"],description:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it.",slug:"/docs/rules/connector-rules/before-and-after-rule-operations",tags:["Rules"]},i="Before and After Operations on Source Account Rule",l={unversionedId:"docs/identity-now/rules/connector-rules/before-and-after-rule-operations",id:"docs/identity-now/rules/connector-rules/before-and-after-rule-operations",title:"Before and After Operations on Source Account Rule",description:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/before_after_operation_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/before-and-after-rule-operations",permalink:"/idn/docs/rules/connector-rules/before-and-after-rule-operations",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/before_after_operation_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1694183932,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"before-and-after-rule-operations",title:"Before and After Operations on Source Account Rule",pagination_label:"Before and After Operations",sidebar_label:"Before and After Rule Operations",sidebar_class_name:"beforeAndAfterRuleOperations",keywords:["cloud","rules"],description:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it.",slug:"/docs/rules/connector-rules/before-and-after-rule-operations",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Connector Executed Rules",permalink:"/idn/docs/rules/connector-rules"},next:{title:"JDBC BuildMap Rule",permalink:"/idn/docs/rules/connector-rules/jdbc-buildmap-rule"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Architecture Best Practices",id:"architecture-best-practices",level:2},{value:"Rule Template",id:"rule-template",level:2},{value:"Powershell Script Template",id:"powershell-script-template",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"before-and-after-operations-on-source-account-rule"},"Before and After Operations on Source Account Rule"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it."),(0,o.kt)("p",null,"The following operations can be performed on a source:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Rule Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Rule Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Source Type(s)"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Before Creation Rule"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectorBeforeCreate"),(0,o.kt)("td",{parentName:"tr",align:null},"Active Directory, Azure Active Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Executes PowerShell commands on the IQService component before a source account is created.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Before Modify Rule"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectorBeforeModify"),(0,o.kt)("td",{parentName:"tr",align:null},"Active Directory, Azure Active Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Executes PowerShell commands on the IQService component before a source account is modified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Before Delete Rule"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectorBeforeDelete"),(0,o.kt)("td",{parentName:"tr",align:null},"Active Directory, Azure Active Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Executes PowerShell commands on the IQService component before a source account is deleted.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"After Creation Rule"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectorAfterCreate"),(0,o.kt)("td",{parentName:"tr",align:null},"Active Directory, Azure Active Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Executes PowerShell commands on the IQService component after a source account is created.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"After Modify Rule"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectorAfterModify"),(0,o.kt)("td",{parentName:"tr",align:null},"Active Directory, Azure Active Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Executes PowerShell commands on the IQService component after a source account is modified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"After Delete Rule"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectorAfterDelete"),(0,o.kt)("td",{parentName:"tr",align:null},"Active Directory, Azure Active Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"Executes PowerShell commands on the IQService component after a source account is deleted.")))),(0,o.kt)("h2",{id:"execution"},"Execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rule Execution",src:n(25089).Z,width:"1525",height:"618"})),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Application"),(0,o.kt)("td",{parentName:"tr",align:null},"System.Collections.Hashtable"),(0,o.kt)("td",{parentName:"tr",align:null},"Map of the application configuration.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Request"),(0,o.kt)("td",{parentName:"tr",align:null},"SailPoint.Utils.objects.AccountRequest"),(0,o.kt)("td",{parentName:"tr",align:null},"Reference to the account request provisioning instructions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Result"),(0,o.kt)("td",{parentName:"tr",align:null},"SailPoint.Utils.objects.ServiceResult"),(0,o.kt)("td",{parentName:"tr",align:null},"Reference to the provisioning result that can be manipulated if necessary.")))),(0,o.kt)("h2",{id:"architecture-best-practices"},"Architecture Best Practices"),(0,o.kt)("p",null,"For supportability, it is recommended that you write these operation rules with only the most basic logic necessary to trigger a PowerShell script and shift the bulk of the downstream events and/or modifications to the PowerShell script itself. This script would reside on the client's servers and can therefore be easily maintained or modified by the client as needed. It also allows the client to implement changes to the PowerShell scripted functionality without requiring code review by SailPoint because the code runs outside of the IdentityNow platform."),(0,o.kt)("h2",{id:"rule-template"},"Rule Template"),(0,o.kt)("p",null,"This example triggers on the BeforeCreate operation. If you want to use another operation, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"BeforeCreate")," in the name and ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectorBeforeCreate")," in the type with one of the other operations described earlier in the ",(0,o.kt)("a",{parentName:"p",href:"#overview"},"Overview")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n <Rule language="beanshell" name="SampleSource BeforeCreate" type="ConnectorBeforeCreate">\n  <Attributes>\n   <Map>\n    <entry key="ObjectOrientedScript" value="true" />\n    <entry key="disabled" value="false" />\n    <entry key="extension" value=".ps1" />\n    <entry key="program" value="powershell.exe" />\n    <entry key="timeout" value="300" />\n   </Map>\n  </Attributes>\n  <Description>\n   This is an IQService afterScript - On a successful provisioning event, this after script should be used as the starting point to\n            initiate a separate PowerShell script residing on the client\'s IQService server.\n\n            Configuration tasks include the following:\n             - Set a proper location for the $logFile variable.\n             - Set the proper script location and name for the $command variable.\n             - Set the $enableDebug flag to $true or $false to toggle debug mode.\n  </Description>\n  <Source>\n<![CDATA[\n\n$logDate = Get-Date -UFormat "%Y%m%d"\n$logFile = "c:\\SailPoint\\Scripts\\Logs\\ConnectorAfterCreate_$logDate.log"\n$command = "c:\\SailPoint\\Scripts\\SampleSource-AfterCreate.ps1"\n$enableDebug = $false\n\n#====================-------Helper functions-------====================\nfunction LogToFile([String] $info) {\n    $info | Out-File $logFile -Append\n}\n\n#====================-------Get the request object-------====================\nTry{\n    if($enableDebug) {\n        LogToFile("Entering SailPoint rule")\n    }\n\n    Add-type -path utils.dll;\n $sReader = New-Object System.IO.StringReader([System.String]$env:Request);\n $xmlReader = [System.xml.XmlTextReader]([sailpoint.utils.xml.XmlUtil]::getReader($sReader));\n $requestObject = New-Object Sailpoint.Utils.objects.AccountRequest($xmlReader);\n    $requestAsString = $env:Request\n\n    if($enableDebug) {\n        LogToFile("Request as XML object is: $requestAsString")\n    }\n\n    #Call the client script\n    $command = -join ($command, " -requestString \'$requestAsString\'")\n    Invoke-Expression $command\n\n}Catch{\n $ErrorMessage = $_.Exception.Message\n   $ErrorItem = $_.Exception.ItemName\n   LogToFile("Error: Item = $ErrorItem -> Message = $ErrorMessage")\n}\n\nif($enableDebug) {\n    LogToFile("Exiting SailPoint rule")\n}\n\n]]>\n  </Source>\n </Rule>\n')),(0,o.kt)("h2",{id:"powershell-script-template"},"Powershell Script Template"),(0,o.kt)("p",null,"You can also use the following Powershell script template for each operation in the ",(0,o.kt)("a",{parentName:"p",href:"#overview"},"Overview")," section. Be sure to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"$logFile")," variable with the operation you use to ensure you are logging to a file with the correct operation name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'###############################################################################################################################\n# SETUP\n# Instructions (for each IQService host that could run the script):\n#   - Update the path to Utils.dll (can be an unqualified path like "Utils.dll" since script is copied to IQService folder for execution)\n#   - Make sure Utils.dll is in the specified folder on each IQService host\n#   - Be sure the account that runs IQService has appropriate permissions to create directories and set permissions on them\n#   - Be sure to set the "run as" account for the IQService in Windows Service to the above-specified account instead of just the "logged on" user\n#   - Set a proper location for the $logFile variable\n#   - Set the $enableDebug flag to $true or $false to toggle debug mode\n###############################################################################################################################\n\nparam (\n [Parameter(Mandatory=$true)][System.String]$requestString\n)\n\n#include SailPoint library\nAdd-Type -Path "c:\\SailPoint\\IQService\\Utils.dll";\n\n#import AD cmdlets\nImport-Module activeDirectory\n\n#log file info\n$logDate = Get-Date -UFormat "%Y%m%d"\n$logFile = "c:\\SailPoint\\Scripts\\Logs\\SampleSourceBeforeCreateScript_$logDate.log"\n$enableDebug = $false\n\n###############################################################################################################################\n# HELPER FUNCTIONS\n###############################################################################################################################\n\n#save logging files to a separate txt file\nfunction LogToFile([String] $info) {\n    $info | Out-File $logFile -Append\n}\n\n#if we have a non-null account request, get our value; otherwise return nothing\nfunction Get-AttributeValueFromAccountRequest([sailpoint.Utils.objects.AccountRequest] $request, [String] $targetAttribute) {\n    $value = $null;\n\n    if ($request) {\n        foreach ($attrib in $request.AttributeRequests) {\n            if ($attrib.Name -eq $targetAttribute) {\n                $value = $attrib.Value;\n                break;\n            }\n        }\n    } else {\n        LogToFile("Account request object was null");\n    }\n    return $value;\n}\n\n\n###############################################################################################################################\n# BODY\n###############################################################################################################################\nif($enableDebug) {\n    LogToFile("Entering beforeScript")\n}\n\ntry {\n\n    ##########################\n    # Begin SailPoint protected code -- do not modify this code block\n    #\n        $sReader = New-Object System.IO.StringReader([System.String]$requestString);\n        $xmlReader = [System.xml.XmlTextReader]([sailpoint.utils.xml.XmlUtil]::getReader($sReader));\n        $requestObject = New-Object Sailpoint.Utils.objects.AccountRequest($xmlReader);\n\n        #debug line for testing\n        if($enableDebug) {\n            LogToFile("Request object contents:")\n            LogToFile($requestObject | Out-String)\n        }\n    #\n    # End SailPoint protected code\n    ##########################\n\n\n    ##########################\n    # Begin Client-provided code\n\n    #get the necessary info we need from the accountRequest object\n    #as an example: $nativeIdentity = $requestObject.nativeIdentity\n\n    #do whatever work needs to be done here\n\n    #\n    # End Client-provided code\n}\ncatch {\n    $ErrorMessage = $_.Exception.Message\n   $ErrorItem = $_.Exception.ItemName\n   LogToFile("Error: Item = $ErrorItem -> Message = $ErrorMessage")\n}\n\nif($enableDebug) {\n    LogToFile("Exiting beforeScript")\n}\n')),(0,o.kt)("h2",{id:"attach-to-source"},"Attach to Source"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/idn/docs/rules/connector-rules#aftercreate-aftermodify-afterdelete-beforecreate-beforemodify-beforedelete-rules"},"Attaching Connector-Related Rules to Sources")," for details on how to attach your rule to your source."))}d.isMDXComponent=!0},25089:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);