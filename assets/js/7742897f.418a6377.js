"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[41],{15288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=n(74848),s=n(28453),r=n(36289),d=n(11470),o=n(19365);const a={title:"Configure Authorization Model",description:"Configuring authorization model for a store",slug:"/getting-started/configure-model"},l="Configure Authorization Model for a Store",c={id:"content/getting-started/configure-model",title:"Configure Authorization Model",description:"Configuring authorization model for a store",source:"@site/docs/content/getting-started/configure-model.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/configure-model",permalink:"/docs/getting-started/configure-model",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/configure-model.mdx",tags:[],version:"current",frontMatter:{title:"Configure Authorization Model",description:"Configuring authorization model for a store",slug:"/getting-started/configure-model"},sidebar:"docs",previous:{title:"Setup SDK Client for Store",permalink:"/docs/getting-started/setup-sdk-client"},next:{title:"Update Relationship Tuples",permalink:"/docs/getting-started/update-tuples"}},h={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step by step",id:"step-by-step",level:2},{value:"Related Sections",id:"related-sections",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"configure-authorization-model-for-a-store",children:"Configure Authorization Model for a Store"})}),"\n",(0,i.jsx)(r.ZE,{}),"\n",(0,i.jsxs)(t.p,{children:["This article explains how to configure an ",(0,i.jsx)(r.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})," for a ",(0,i.jsx)(r.OK,{section:"what-is-a-store",linkName:"store"})," in an OpenFGA server."]}),"\n",(0,i.jsx)(t.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,i.jsxs)(d.A,{groupId:"languages",children:[(0,i.jsx)(o.A,{value:r.NH.JS_SDK,label:r.px.get(r.NH.JS_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),", ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and ",(0,i.jsx)(t.a,{href:"/docs/getting-started/setup-sdk-client",children:"setup the SDK client"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(o.A,{value:r.NH.GO_SDK,label:r.px.get(r.NH.GO_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),", ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and ",(0,i.jsx)(t.a,{href:"/docs/getting-started/setup-sdk-client",children:"setup the SDK client"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(o.A,{value:r.NH.DOTNET_SDK,label:r.px.get(r.NH.DOTNET_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),", ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and ",(0,i.jsx)(t.a,{href:"/docs/getting-started/setup-sdk-client",children:"setup the SDK client"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(o.A,{value:r.NH.PYTHON_SDK,label:r.px.get(r.NH.PYTHON_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),", ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and ",(0,i.jsx)(t.a,{href:"/docs/getting-started/setup-sdk-client",children:"setup the SDK client"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(o.A,{value:r.NH.JAVA_SDK,label:r.px.get(r.NH.JAVA_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),", ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and ",(0,i.jsx)(t.a,{href:"/docs/getting-started/setup-sdk-client",children:"setup the SDK client"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(o.A,{value:r.NH.CLI,label:r.px.get(r.NH.CLI),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the CLI"}),", ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and ",(0,i.jsx)(t.a,{href:"/docs/getting-started/setup-sdk-client",children:"setup your environment variables"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(o.A,{value:r.NH.CURL,label:r.px.get(r.NH.CURL),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(r.iz,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/create-store",children:"created the store"})," and have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step",children:"Step by step"}),"\n",(0,i.jsx)(t.p,{children:"Assume that you want to configure your store with the following model."}),"\n",(0,i.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{reader:{this:{}},writer:{this:{}},owner:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"user"}]},writer:{directly_related_user_types:[{type:"user"}]},owner:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,i.jsxs)(t.p,{children:["To configure authorization model, we can invoke the ",(0,i.jsx)(t.a,{href:"/api/service#Authorization%20Models/WriteAuthorizationModel",children:"write authorization models API"}),"."]}),"\n",(0,i.jsx)(r.Rh,{authorizationModel:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{reader:{this:{}},writer:{this:{}},owner:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"user"}]},writer:{directly_related_user_types:[{type:"user"}]},owner:{directly_related_user_types:[{type:"user"}]}}}}]},allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,i.jsx)(t.p,{children:"The API will then return the authorization model ID."}),"\n",(0,i.jsxs)(t.admonition,{title:"Note",type:"info",children:[(0,i.jsx)(t.p,{children:"The OpenFGA API only accepts an authorization model in the API's JSON syntax."}),(0,i.jsxs)(t.p,{children:["To convert between the API Syntax and the friendly DSL, you can use the ",(0,i.jsx)(t.a,{href:"https://github.com/openfga/cli/",children:"FGA CLI"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(r.XQ,{description:"Take a look at the following sections for more information on how to configure authorization model in your store.",relatedLinks:[{title:"Getting Started with Modeling",description:"Read how to get started with modeling.",link:"../modeling/getting-started"},{title:"Modeling: Direct Relationships",description:"Read the basics of modeling authorization and granting access to users.",link:"../modeling/direct-access"}]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}}}]);