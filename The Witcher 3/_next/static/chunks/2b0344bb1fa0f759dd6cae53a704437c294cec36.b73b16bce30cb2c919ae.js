(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"9Wgi":function(e,i){var n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"objectStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Object"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"genres"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objectRegions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"platformAttributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:181}};n.loc.source={body:"fragment objectStandardFields on Object {\n  id\n  genres {\n    slug\n  }\n  objectRegions(region: $region) {\n    releases {\n      platformAttributes {\n        slug\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function r(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}})),e.exports=n,e.exports.objectStandardFields=function(e,i){var n={kind:e.kind,definitions:[r(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,l=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var s=d;d=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(i){var t=r(e,i);t&&n.definitions.push(t)})),n}(n,"objectStandardFields")},SpLK:function(e,i,n){"use strict";var t=n("MX0m"),a=n.n(t),r=n("q1tI"),l=n("c+tj"),d=n("OcuT"),s=n("e1TJ"),o=n("dhEp"),c=n("TobM"),m=n("JoFD"),u=n("VnKV"),k=n("re3D"),v=n("G+4q"),b=n("1FLE"),g=n("jfK7"),f=n("cpVT"),p=n("dhJC"),j=n("J0h2"),h=n("G37k"),x=n("eMNQ"),N=n("nKUr"),S=["href","label"];function O(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?O(Object(n),!0).forEach((function(i){Object(f.a)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var y=function(e){var i=e.href,n=e.label,t=Object(p.a)(e,S),a=Object(k.e)(),r=a.loggedIn,l=a.currentUser.use2FA;return void 0!==l&&l?Object(N.jsx)(m.b,w(w({},w({href:i},t)),{},{children:n})):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(j.c,{ModalToggleButton:function(e){var i=e.show;return Object(N.jsx)("button",{onClick:i,children:n})},aria:{labelledBy:"contentLabel"},showClose:!1,centered:!0,children:function(e){var i=e.hide;return Object(N.jsx)(h.a,{title:"Enhanced Security",message:"Logging in with Two-Factor Authentication (2FA) is required to perform this action.",buttonText:"Enable 2FA",hide:i,handleCloseClick:function(){i(),Object(x.Fd)({label:"Enable 2FA",component:"content-enable2FAPrompt",href:"/account/settings"}),window.location.href=Object(x.hc)("/account/settings",r)}})}})})},F=function(e){var i=e.pageLocked,n=Object(s.c)(),t=n.slug,r=n.chapterSlug,l=n.locked,d=Object(k.d)(),o=Object(k.e)().loggedIn,c=d.can("moderate","Wiki"),f=!l&&!i&&(!o||d.can("edit","Wiki"))||c;return Object(N.jsxs)("div",{className:"jsx-718411685 wiki-page-tools",children:[Object(N.jsxs)(v.a,{label:"Page Tools",children:[!f&&!c&&Object(N.jsx)("li",{className:"jsx-718411685",children:"Page is locked."}),f&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(y,{label:"Edit",href:"/wikis/".concat(t,"/slate/").concat(r),trackingComponent:"navigation-wikiEditBeta"})}),Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.a,{href:"/wikis/".concat(t,"/flag/").concat(r),trackingComponent:"navigation-wikiFlag",children:"Flag"})})]}),c&&!i&&Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.b,{href:"/wikis/".concat(t,"/lock/").concat(r),trackingComponent:"navigation-wikiLock",children:"Lock"})}),c&&i&&Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.b,{href:"/wikis/".concat(t,"/unlock/").concat(r),trackingComponent:"navigation-wikiUnlock",children:"Unlock"})}),c&&Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(g.a,{slug:t,chapter:r,source:u.PAGETOOLS_SOURCE,children:"Delete"})}),f&&Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.a,{href:"/wikis/".concat(t,"/history/").concat(r),trackingComponent:"navigation-wikiHistory",children:"View History"})}),o&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.b,{trackingComponent:"navigation-wikiStyleGuide",href:"/wikis/how-to/Beginner%27s_Guide_to_Wikis",children:"View Style Guide"})}),Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.b,{trackingComponent:"navigation-wikiSupport",href:"https://www.ignboards.com/forums/wikis-discussion.5030/",children:"View Wiki Support"})}),Object(N.jsx)("li",{role:"menuitem",tabIndex:"-1",className:"jsx-718411685",children:Object(N.jsx)(m.b,{trackingLabel:"Download PDF",trackingComponent:"navigation-wikiDownloadPDF",href:"http://insiderdownloads.ign.com/download/wikiguides/".concat(t.charAt(0),"/").concat(t,".pdf"),children:Object(N.jsx)(b.a,{type:"secondary",fullWidth:!0,children:"Download PDF"})})})]})]}),Object(N.jsx)(a.a,{id:"718411685",children:["@media (max-width:860px){.wiki-page-tools.jsx-718411685{width:100%;margin-top:18px;}}"]})]})};i.a=Object(s.d)((function(e){var i=e.name,n=e.page,t=n.title,s=n.locked,u=n.updatedAt,k=n.revisionId,v=e.router.query,b=e.slug,g=e.topContributors,f=void 0===g?[]:g,p=Object(c.b)(),j=f.filter((function(e){return!!e})),h=j.slice(0,3),x=j.length>h.length;return Object(N.jsxs)("div",{className:"jsx-634561730 wiki-page-title",children:[Object(N.jsxs)("div",{className:"jsx-634561730 title-and-date",children:[Object(N.jsxs)("h1",{className:"jsx-634561730 wiki-title",children:[Object(d.h)({title:t,name:i}),v.revision&&k&&" (Revision ".concat(k,")")]}),h.length>0&&Object(N.jsxs)("div",{className:"jsx-634561730 title-contributors",children:[Object(N.jsx)(o.IconProfile,{styles:{fontSize:"1rem"}}),Object(N.jsxs)("div",{className:"jsx-634561730",children:[Object(N.jsx)("span",{className:"jsx-634561730 top-contributors",children:"Top Contributors: "}),h.map((function(e,i){var n=e.nickname,t=e.name;return Object(N.jsxs)(r.Fragment,{children:[Object(N.jsx)(m.b,{className:"contributor",href:"/person/".concat(n),trackingLabel:t||n,trackingComponent:"navigation-wikiTopContributor",children:t||n}),i<h.length-1&&Object(N.jsx)("span",{className:"jsx-634561730",children:", "})]},i)})),x&&Object(N.jsxs)("span",{className:"jsx-634561730 more",children:[" + ",Object(N.jsx)(m.b,{className:"more-link",href:"/wikis/".concat(b,"/topcontributors"),trackingLabel:"More Wiki Contributors",trackingComponent:"navigation-wikiTopContributors",children:"more"})]})]})]}),Object(N.jsxs)("div",{className:"jsx-634561730 title-byline",children:[s?Object(N.jsx)(o.IconLock,{styles:{fontSize:"1rem"}}):Object(N.jsx)(o.IconUnlock,{styles:{fontSize:"1rem"}}),Object(N.jsx)("span",{className:"jsx-634561730 last-edited",children:"Last Edited:"})," ",Object(N.jsx)("time",{itemProp:"datePublished",content:u,className:"jsx-634561730",children:Object(l.f)(u,"d MMM yyyy h:mm aaa")})]})]}),!p&&Object(N.jsx)(F,{pageLocked:s}),Object(N.jsx)(a.a,{id:"634561730",children:[".wiki-page-title.jsx-634561730{border-bottom:solid 1px var(--theme-elements-divider);padding-bottom:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}","@media (max-width:860px){.wiki-page-title.jsx-634561730{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",".title-contributors.jsx-634561730{font-size:0.875rem;line-height:1.275;color:var(--theme-elements-text-data);margin-bottom:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}",".title-contributors.jsx-634561730 .top-contributors.jsx-634561730{font-weight:bold;}",".title-contributors.jsx-634561730 .contributor,.title-contributors.jsx-634561730 .contributor:visited{color:var(--theme-elements-text-data);-webkit-text-decoration:underline;text-decoration:underline;}",".title-contributors.jsx-634561730 .more.jsx-634561730{color:var(--theme-elements-text-supplemental);}",".title-contributors.jsx-634561730 .more.jsx-634561730 .more-link,.more-link:visited{color:var(--theme-elements-text-supplemental);-webkit-text-decoration:underline;text-decoration:underline;}",".title-contributors.jsx-634561730 .icon-profile{position:relative;top:2px;margin-right:12px;}",".title-byline.jsx-634561730{font-size:0.875rem;color:var(--theme-elements-text-supplemental);}",".title-byline.jsx-634561730 .last-edited.jsx-634561730{font-weight:bold;}",".title-byline.jsx-634561730 .icon-type-lock{position:relative;top:2px;margin-right:12px;}"]})]})}))},UPX3:function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"WikiDeletePage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"chapter"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"reason"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wikiDeletePage"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"chapter"}}},{kind:"Argument",name:{kind:"Name",value:"reason"},value:{kind:"Variable",name:{kind:"Name",value:"reason"}}}],directives:[]}]}}],loc:{start:0,end:143}};n.loc.source={body:"mutation WikiDeletePage($slug: String!, $chapter: String, $reason: String) {\n  wikiDeletePage(slug: $slug, title: $chapter, reason: $reason)\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function r(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}})),e.exports=n,e.exports.WikiDeletePage=function(e,i){var n={kind:e.kind,definitions:[r(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,l=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var s=d;d=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(i){var t=r(e,i);t&&n.definitions.push(t)})),n}(n,"WikiDeletePage"),n.documentId="70d0f4fe6d67385c8cae710e1d5c1d88ef22ea7d21849642c6e412a41d1c02af"},VeCp:function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WikiLatestUpdates"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"nextCursor"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"latestWikiUpdates"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"nextCursor"},value:{kind:"Variable",name:{kind:"Name",value:"nextCursor"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wikis"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recentEditor"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nickname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"update"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timestamp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"oldTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"oldLength"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"newLength"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"previousRevisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isMore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nextCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:642}};n.loc.source={body:"query WikiLatestUpdates($slug: String, $nextCursor: String, $count: Int) {\n  latestWikiUpdates(slug: $slug, nextCursor: $nextCursor, count: $count) {\n    wikis {\n      name\n      slug\n      page {\n        title\n        url\n        revisionId\n        recentEditor {\n          id\n          nickname\n          displayName\n          thumbnailUrl\n        }\n        update {\n          type\n          timestamp\n          title\n          oldTitle\n          oldLength\n          newLength\n          revisionId\n          previousRevisionId\n          comment\n        }\n      }\n    }\n    pagination {\n      count\n      isMore\n      nextCursor\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function r(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}})),e.exports=n,e.exports.WikiLatestUpdates=function(e,i){var n={kind:e.kind,definitions:[r(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,l=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var s=d;d=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(i){var t=r(e,i);t&&n.definitions.push(t)})),n}(n,"WikiLatestUpdates"),n.documentId="ff5599f831f5bf1371bf9da1066c83d5905dd57461a2dc8c97392493807ac06d"},jfK7:function(e,i,n){"use strict";var t=n("xvhg"),a=n("MX0m"),r=n.n(a),l=(n("q1tI"),n("pZLH")),d=n("KYPV"),s=n("ux3G"),o=n.n(s),c=n("VeCp"),m=n.n(c),u=n("UPX3"),k=n.n(u),v=n("aBNW"),b=n("zlSC"),g=n("eMNQ"),f=n("VnKV"),p=n("re3D"),j=n("Sf1j"),h=n("9aN4"),x=n("3FTO"),N=n("sPYn"),S=n("aUVa"),O=n("PyTg"),w=n("dhEp"),y=n("nKUr"),F=n("NOtv")("kraken:components:pages:wikis:WikiDeletePage"),E=function(e){var i=e.slug,n=e.chapter,a=e.source,s=e.hide,c=Object(j.c)(),u=c.notify,b=c.alert,p=a===f.PAGETOOLS_SOURCE?[{query:o.a,variables:{slug:i,chapter:n,purge:!0}}]:f.RECENTCHANGES_SOURCE?[{query:m.a,variables:{count:f.WIKIS_PAGE_SIZE,slug:i,purge:!0}}]:[],w=Object(l.a)(k.a,{refetchQueries:p}),E=Object(t.a)(w,1)[0];return Object(y.jsxs)(x.c,{isOpen:!0,onClose:s,contentClassName:"box",children:[Object(y.jsx)(N.a,{size:"narrow",children:Object(y.jsxs)("div",{className:"jsx-4210314179 modal",children:[Object(y.jsx)("h2",{className:"jsx-4210314179",children:"Delete Wiki Page"}),Object(y.jsx)(d.e,{initialValues:{delete:!1,reason:""},validationSchema:v.b,onSubmit:function(e,t){var r=e.reason,l=t.setSubmitting;E({variables:{slug:i,chapter:n,reason:r}}).then((function(e){var i=e.data;return F("response",i),l(!1),Object(g.Gd)({event:"wiki-DeletePage",action:"delete",optionalEvents:{reason:r,source:a}}),s(),u("Your wiki page has been deleted.")})).catch((function(e){return F(e),l(!1),b("Your wiki page failed to delete.")}))},children:Object(y.jsxs)(d.d,{children:[Object(y.jsx)(O.a,{name:"delete",label:"Are you sure you want to delete this wiki page?"}),Object(y.jsx)(S.a,{name:"reason",label:"Reason"}),Object(y.jsx)(h.b,{cancel:!0,fullWidth:!0,onCancel:s,label:"Delete"})]})})]})}),Object(y.jsx)(r.a,{id:"4210314179",children:[".modal.jsx-4210314179 .form-buttons{margin-top:24px;}"]})]})};i.a=function(e){var i=e.slug,n=e.chapter,t=e.source,a=e.children,r=Object(b.a)(!1),l=r.display,d=r.show,s=r.hide;return Object(y.jsxs)(p.a,{I:"moderate",a:"Wiki",children:[Object(y.jsx)("button",{type:"button",className:"column link",title:"Delete this Page",onClick:d,children:a||Object(y.jsx)(w.IconDelete,{title:void 0})}),l&&Object(y.jsx)(E,{slug:i,chapter:n,source:t,hide:s})]})}},ux3G:function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WikiPage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"chapter"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"revision"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wiki"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"chapter"}}},{kind:"Argument",name:{kind:"Name",value:"redirect"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"chapter"}}},{kind:"Argument",name:{kind:"Name",value:"revision"},value:{kind:"Variable",name:{kind:"Name",value:"revision"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locked"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasVideo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageForTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mapMarker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markerSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"objectSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mapSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markerName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lng"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"htmlEntities"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"values"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nextPage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"prevPage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:613}};n.loc.source={body:"query WikiPage($slug: String!, $chapter: String, $revision: Int) {\n  wiki(slug: $slug, title: $chapter, redirect: true) {\n    id\n    page(title: $chapter, revision: $revision) {\n      id\n      title\n      updatedAt\n      locked\n      revisionId\n      thin\n      hasVideo\n      imageForTitle\n      mapMarker {\n        id\n        markerSlug\n        objectSlug\n        mapSlug\n        markerName\n        typeSlug\n        lat\n        lng\n      }\n      htmlEntities {\n        name\n        values\n      }\n      nextPage {\n        label\n        url\n      }\n      prevPage {\n        label\n        url\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}var a={};function r(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}n.definitions.forEach((function(e){if(e.name){var i=new Set;t(e,i),a[e.name.value]=i}})),e.exports=n,e.exports.WikiPage=function(e,i){var n={kind:e.kind,definitions:[r(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=a[i]||new Set,l=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var s=d;d=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(i){var t=r(e,i);t&&n.definitions.push(t)})),n}(n,"WikiPage"),n.documentId="b1bec3e39d370ca9b0b7d0075613efbef390d258944c9a04db27131548b2ef17"}}]);
//# sourceMappingURL=2b0344bb1fa0f759dd6cae53a704437c294cec36.b73b16bce30cb2c919ae.js.map