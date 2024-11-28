"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7550],{87417:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"content/modeling/parent-child","title":"Parent-Child Objects","description":"Indicate relationships between objects, and how users\' relationships to one object can affect their relationship with another","source":"@site/docs/content/modeling/parent-child.mdx","sourceDirName":"content/modeling","slug":"/modeling/parent-child","permalink":"/docs/modeling/parent-child","draft":false,"unlisted":false,"editUrl":"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/parent-child.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"slug":"/modeling/parent-child","description":"Indicate relationships between objects, and how users\' relationships to one object can affect their relationship with another"},"sidebar":"docs","previous":{"title":"Roles and Permissions","permalink":"/docs/modeling/roles-and-permissions"},"next":{"title":"Blocklists","permalink":"/docs/modeling/blocklists"}}');var i=o(74848),s=o(28453),d=o(89987);const r={sidebar_position:7,slug:"/modeling/parent-child",description:"Indicate relationships between objects, and how users' relationships to one object can affect their relationship with another"},a="Parent-Child Objects",c={},l=[{value:"Before you start",id:"before-you-start",level:2},{value:"Direct access",id:"direct-access",level:3},{value:"<ProductName></ProductName> concepts",id:"-concepts",level:3},{value:"Step by step",id:"step-by-step",level:2},{value:"01. Update the Athorization Model to allow a parent relationship between folder and document",id:"01-update-the-athorization-model-to-allow-a-parent-relationship-between-folder-and-document",level:3},{value:"02. Update the editor relation in the document type definition to support cascading from folder",id:"02-update-the-editor-relation-in-the-document-type-definition-to-support-cascading-from-folder",level:3},{value:"03. Create a new relationship tuple to indicate that <code>bob</code> is an <code>editor</code> of <code>folder:notes</code>",id:"03-create-a-new-relationship-tuple-to-indicate-that-bob-is-an-editor-of-foldernotes",level:3},{value:"04. Create a new relationship tuple to indicate that <code>folder:notes</code> is a <code>parent</code> of <code>document:meeting_notes.doc</code>",id:"04-create-a-new-relationship-tuple-to-indicate-that-foldernotes-is-a-parent-of-documentmeeting_notesdoc",level:3},{value:"05. Check if <code>bob</code> is an <code>editor</code> of <code>document:meeting_notes.doc</code>",id:"05-check-if-bob-is-an-editor-of-documentmeeting_notesdoc",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"parent-child-objects",children:"Parent-Child Objects"})}),"\n",(0,i.jsx)(d.ZE,{}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(d.bU,{format:d.Ed.ShortForm}),", a user's ",(0,i.jsx)(d.OK,{section:"what-is-a-relationship",linkName:"relationship"})," with an ",(0,i.jsx)(d.OK,{section:"what-is-an-object",linkName:"object"})," can affect their relationship with another object. For example, an ",(0,i.jsx)(t.code,{children:"editor"})," of a ",(0,i.jsx)(t.code,{children:"folder"})," can also be an ",(0,i.jsx)(t.code,{children:"editor"})," of all ",(0,i.jsx)(t.code,{children:"documents"})," that ",(0,i.jsx)(t.code,{children:"folder"})," is a ",(0,i.jsx)(t.code,{children:"parent"})," of."]}),"\n",(0,i.jsxs)(d.u6,{title:"When to use",appearance:"filled",children:[(0,i.jsxs)(t.p,{children:["Object-to-object relationships can combine with a configured authorization model to indicate that a user's relationship with one object may influence the user's relationship with another object. They can also eliminate the need to modify relationships between objects using ",(0,i.jsx)(t.a,{href:"/docs/modeling/user-groups#03-assign-the-team-members-a-relation-to-an-object",children:"user groups"}),"."]}),(0,i.jsx)(t.p,{children:"The follow are examples of simple object-to-object relationships:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"managers"})," of an ",(0,i.jsx)(t.code,{children:"employee"})," have access to ",(0,i.jsx)(t.code,{children:"approve"})," requests the ",(0,i.jsx)(t.code,{children:"employee"})," has made"]}),"\n",(0,i.jsxs)(t.li,{children:["users who have a repository admin role (",(0,i.jsx)(t.code,{children:"repo_admin"}),") in an organization automatically have ",(0,i.jsx)(t.code,{children:"admin"})," access to all repositories in that organization"]}),"\n",(0,i.jsxs)(t.li,{children:["users who are ",(0,i.jsx)(t.code,{children:"subscribed"})," to a ",(0,i.jsx)(t.code,{children:"plan"})," get access to all the ",(0,i.jsx)(t.code,{children:"features"})," in that ",(0,i.jsx)(t.code,{children:"plan"})]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,i.jsxs)(t.p,{children:["Familiarize yourself with basic ",(0,i.jsx)(d.OK,{}),":"]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsxs)(t.p,{children:["Assume that you have the following ",(0,i.jsx)(d.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,i.jsx)("br",{}),"\nYou have two types:"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"folder"})," that users can be related to as an ",(0,i.jsx)(t.code,{children:"editor"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"document"})," that users can be related to as an ",(0,i.jsx)(t.code,{children:"editor"})]}),"\n"]})]}),(0,i.jsx)(d.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"folder",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,i.jsx)("hr",{}),(0,i.jsx)(t.p,{children:"In addition:"}),(0,i.jsx)(t.h3,{id:"direct-access",children:"Direct access"}),(0,i.jsxs)(t.p,{children:["Creating an authorization model and a relationship tuple can grant a user access to an object. To learn more, ",(0,i.jsx)(t.a,{href:"/docs/modeling/direct-access",children:"read about Direct Access"})]}),(0,i.jsxs)(t.h3,{id:"-concepts",children:[(0,i.jsx)(d.bU,{format:d.Ed.ShortForm})," concepts"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(d.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(d.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(d.OK,{section:"what-is-a-relation",linkName:"Relation"}),": a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,i.jsxs)(t.li,{children:["An ",(0,i.jsx)(d.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(d.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a group stored in ",(0,i.jsx)(d.bU,{format:d.Ed.ShortForm})," that consists of a user, a relation, and an object"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/configuration-language#the-union-operator",children:"Union Operator"}),": can be used to indicate that the user has multiple ways of being related to an object"]}),"\n"]})]}),"\n",(0,i.jsx)(d.QF,{}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step",children:"Step by step"}),"\n",(0,i.jsx)(t.p,{children:"The following walkthrough models (a) folders that contain documents and (b) that a user who has editor access to a given folder has editor access to all documents in that folder."}),"\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.code,{children:"editors"})," of a ",(0,i.jsx)(t.code,{children:"folder"})," to be ",(0,i.jsx)(t.code,{children:"editors"})," of a containing ",(0,i.jsx)(t.code,{children:"document"}),", you must:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Update the authorization model to allow a ",(0,i.jsx)(t.code,{children:"parent"})," relationship between ",(0,i.jsx)(t.code,{children:"folder"})," and ",(0,i.jsx)(t.code,{children:"document"})]}),"\n",(0,i.jsxs)(t.li,{children:["Update the ",(0,i.jsx)(t.code,{children:"editor"})," relation in the ",(0,i.jsx)(t.code,{children:"document"})," type definition to support cascading from ",(0,i.jsx)(t.code,{children:"folder"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The following three steps indicate and verify that ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})," because ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"folder:notes"}),":"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Create a new ",(0,i.jsx)(t.em,{children:"relationship tuple"})," to indicate that ",(0,i.jsx)(t.strong,{children:"bob"})," is a ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsxs)(t.strong,{children:["folder",":notes"]})]}),"\n",(0,i.jsxs)(t.li,{children:["Create a new ",(0,i.jsx)(t.em,{children:"relationship tuple"})," to indicate that ",(0,i.jsxs)(t.strong,{children:["folder",":notes"]})," is a ",(0,i.jsx)(t.code,{children:"parent"})," of ",(0,i.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})]}),"\n",(0,i.jsxs)(t.li,{children:["Check to see if ",(0,i.jsx)(t.strong,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"01-update-the-athorization-model-to-allow-a-parent-relationship-between-folder-and-document",children:"01. Update the Athorization Model to allow a parent relationship between folder and document"}),"\n",(0,i.jsxs)(t.p,{children:["As documented in ",(0,i.jsx)(t.a,{href:"/docs/modeling/building-blocks/object-to-object-relationships",children:"Modeling Concepts: Object to Object Relationships"}),", the following update to the authorization model allows a ",(0,i.jsx)(t.code,{children:"parent"})," relation between a ",(0,i.jsx)(t.code,{children:"folder"})," and a ",(0,i.jsx)(t.code,{children:"document"}),":"]}),"\n",(0,i.jsx)(d.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"folder",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{parent:{this:{}},editor:{this:{}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"document"})," type now has a ",(0,i.jsx)(t.code,{children:"parent"})," relation, indicating that other objects can be ",(0,i.jsx)(t.code,{children:"parent"}),"s of ",(0,i.jsx)(t.code,{children:"document"}),"s"]})}),"\n",(0,i.jsx)(t.h3,{id:"02-update-the-editor-relation-in-the-document-type-definition-to-support-cascading-from-folder",children:"02. Update the editor relation in the document type definition to support cascading from folder"}),"\n",(0,i.jsxs)(t.p,{children:["To allow cascading relations between ",(0,i.jsx)(t.code,{children:"folder"})," and ",(0,i.jsx)(t.code,{children:"document"}),", update the authorization model:"]}),"\n",(0,i.jsx)(d.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"folder",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{parent:{this:{}},editor:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{relation:"parent"},computedUserset:{relation:"editor"}}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"editor"})," of a ",(0,i.jsx)(t.code,{children:"document"})," can be the following:"]}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"users that are directly assigned as editors"}),"\n",(0,i.jsxs)(t.li,{children:["users that are related to any ",(0,i.jsx)(t.code,{children:"parent"})," of this document as ",(0,i.jsx)(t.code,{children:"editor"})," (editors of the parent)"]}),"\n"]})]}),"\n",(0,i.jsxs)(t.p,{children:["After making these changes, anyone related to a ",(0,i.jsx)(t.code,{children:"folder"})," that is a ",(0,i.jsx)(t.code,{children:"parent"})," of a ",(0,i.jsx)(t.code,{children:"document"})," as an ",(0,i.jsx)(t.code,{children:"editor"})," is also an ",(0,i.jsx)(t.code,{children:"editor"})," of that ",(0,i.jsx)(t.code,{children:"document"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"03-create-a-new-relationship-tuple-to-indicate-that-bob-is-an-editor-of-foldernotes",children:["03. Create a new relationship tuple to indicate that ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"folder:notes"})]}),"\n",(0,i.jsxs)(t.p,{children:["To leverage the new cascading relation, create a relationship tuple stating that ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"folder:notes"})]}),"\n",(0,i.jsx)(d.dp,{relationshipTuples:[{user:"user:bob",relation:"editor",object:"folder:notes"}]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," Use unique ids for each object and user within your application domain when creating relationship tuples for ",(0,i.jsx)(d.bU,{format:d.Ed.LongForm}),". We use first names and simple ids below as an easy-to-follow example."]})}),"\n",(0,i.jsxs)(t.h3,{id:"04-create-a-new-relationship-tuple-to-indicate-that-foldernotes-is-a-parent-of-documentmeeting_notesdoc",children:["04. Create a new relationship tuple to indicate that ",(0,i.jsx)(t.code,{children:"folder:notes"})," is a ",(0,i.jsx)(t.code,{children:"parent"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})]}),"\n",(0,i.jsxs)(t.p,{children:["Now that ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"folder:notes"}),", we need to indicate that ",(0,i.jsxs)(t.strong,{children:["folder",":notes"]})," is a ",(0,i.jsx)(t.code,{children:"parent"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})]}),"\n",(0,i.jsx)(d.dp,{relationshipTuples:[{_description:"the notes folder is a parent of the meeting notes document",user:"folder:notes",relation:"parent",object:"document:meeting_notes.doc"}]}),"\n",(0,i.jsxs)(t.h3,{id:"05-check-if-bob-is-an-editor-of-documentmeeting_notesdoc",children:["05. Check if ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})]}),"\n",(0,i.jsxs)(t.p,{children:["After changing the authorization model and adding two new relationship tuples, verify that your configuration is correct by running the following check: ",(0,i.jsxs)(t.strong,{children:["is bob an editor of document",":meeting_notes",".doc"]}),"."]}),"\n",(0,i.jsx)(d.ou,{user:"user:bob",relation:"editor",object:"document:meeting_notes.doc",allowed:!0}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: There are no other relationship tuples in the store that dictate a direct relation between ",(0,i.jsx)(t.code,{children:"bob"})," and ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"}),". The check succeeds because of the cascading relation."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The chain of resolution is:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"folder:notes"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"folder:notes"})," is a ",(0,i.jsx)(t.code,{children:"parent"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"editors"})," of any ",(0,i.jsx)(t.code,{children:"parent"})," ",(0,i.jsx)(t.code,{children:"folder"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})," are also ",(0,i.jsx)(t.code,{children:"editors"})," of the ",(0,i.jsx)(t.code,{children:"document"})]}),"\n",(0,i.jsxs)(t.li,{children:["therefore ",(0,i.jsx)(t.code,{children:"bob"})," is an ",(0,i.jsx)(t.code,{children:"editor"})," of ",(0,i.jsx)(t.code,{children:"document:meeting_notes.doc"})]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsxs)(t.p,{children:["When searching tuples that are related to the object (the word after ",(0,i.jsx)(t.code,{children:"from"}),", also called the tupleset), ",(0,i.jsx)(d.bU,{format:d.Ed.LongForm})," will not do any evaluation and only considers concrete objects (of the form ",(0,i.jsx)(t.code,{children:"<object_type>:<object_id>"}),") that were directly assigned. ",(0,i.jsx)(d.bU,{format:d.Ed.LongForm})," will throw an error if it encounters any rewrites, a ",(0,i.jsx)(t.code,{children:"*"}),", a type bound public access (",(0,i.jsx)(t.code,{children:"<object_type>:*"}),"), or a userset (",(0,i.jsx)(t.code,{children:"<object_type>:<object_id>#<relation>"}),")."]}),(0,i.jsxs)(t.p,{children:["For more information on this topic, see ",(0,i.jsx)(t.a,{href:"/docs/configuration-language#referencing-relations-on-related-objects",children:"Referencing Relations on Related Objects"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(d.XQ,{description:"Check the following sections for more on how to model for parent and child objects.",relatedLinks:[{title:"Modeling Concepts: Object to Object Relationships",description:"Learn about how to model object to object relationships in {ProductName}.",link:"./building-blocks/object-to-object-relationships",id:"./building-blocks/object-to-object-relationships"},{title:"Modeling Google Drive",description:"See how to make folders parents of documents, and to make editors on the parent folders editors on documents inside them..",link:"./advanced/gdrive#01-individual-permissions",id:"./advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to grant users access to all repositories owned by an organization.",link:"./advanced/github#01-permissions-for-individuals-in-an-org",id:"./advanced/github.mdx#01-permissions-for-individuals-in-an-org"}]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);