_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[125],{"+7oI":function(e,n,i){"use strict";var t=i("cpVT"),a=(i("q1tI"),i("TSYQ")),r=i.n(a),o=i("E2Uc"),s=i("nKUr");function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){Object(t.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}n.a=function(e){var n=e.className,i=e.sx,t=void 0===i?{}:i,a=e.spacing,c=void 0===a?1:a,l=e.children;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.a,{spacing:c,sx:d({justifyContent:"center",alignItems:"center",textAlign:"center",flexShrink:0},t),className:r()("meta-item",n),children:l})})}},"7tJj":function(e,n,i){"use strict";i.r(n),i.d(n,"pageTypes",(function(){return D})),i.d(n,"WikiListPages",(function(){return V}));var t=i("rg98"),a=i("cpVT"),r=i("dhJC"),o=i("MX0m"),s=i.n(o),c=i("vJKn"),d=i.n(c),l=(i("q1tI"),i("zJC5")),u=i("eMNQ"),m=i("VnKV"),f=i("ANpN"),g=i.n(f),p=i("j3Zk"),k=i("oR23"),v=i("500x"),b=i("Qbax"),h=i("j2H6"),j=i("+7oI"),O=i("zuye"),S=i("NRuK"),y=i("JoFD"),w=i("nKUr"),x=["items"];function N(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function F(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?N(Object(i),!0).forEach((function(n){Object(a.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var P=i("NOtv")("kraken:pages:wikis:ListPages"),E=function(e){var n=e.toLowerCase();return"allpages"===n?n:n.replace(n[0],n[0].toUpperCase())},D={Orphanedpages:{title:"Orphaned Pages",excerpt:"Orphaned pages are pages that have been created but currently have no links pointing users to them. Consider finding relevant places from which to link to these orphaned pages."},Deadendpages:{title:"Dead-end Pages",excerpt:"Dead-end pages are pages that do not link to other pages in the wiki. Consider finding words within these pages that can be linked to other pages."},Shortpages:{title:"Short Pages",excerpt:"Short pages are pages that have little content. This listing is sorted by shortest page. Consider adding more content to the pages if necessary."},Longpages:{title:"Long Pages",excerpt:"Long pages are pages with a high amount of content. This listing is sorted by longest page. Some long pages may need to be broken into multiple smaller pages, though not all."},Wantedpages:{title:"Wanted Pages",excerpt:"Wanted pages are pages that are linked to but have not yet been created. Consider filling in information on these pages. The link counter next to each page title references the number of links inside the wiki guide pointing to that page."},allpages:{title:"All Pages",excerpt:"A list of all created pages within this wiki guide, ordered alphabetically."}},C=function(e){var n=e.type,i=e.slug,t=e.title,a=e.url,r=e.length;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"jsx-3252262113 pages-row",children:[Object(w.jsx)(S.a,{element:Object(w.jsx)(y.b,{}),href:"/wikis/".concat(i,"/").concat(a),underlined:!0,children:t}),r&&r>=0&&("Shortpages"===n||"Longpages"===n)&&Object(w.jsxs)(j.a,{spacing:0,children:[Object(w.jsx)(S.a,{bold:!0,children:Object(u.bb)(r)}),Object(w.jsx)(O.a,{children:Object(u.jc)({count:r,noun:"character",withCount:!1})})]})]}),Object(w.jsx)(s.a,{id:"3252262113",children:[".pages-row.jsx-3252262113{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:12px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:12px 0;}"]})]})},T=Object(h.a)((function(e){var n=e.items,i=void 0===n?[]:n,t=Object(r.a)(e,x);return i.map((function(e,n){return Object(w.jsx)(C,F(F({},e),t),n)}))})),V=function(e){var n=e.pageKey,i=e.page,t=i.slug,a=i.type,r=i.name,o=i.description,c=i.pageTitle,d=i.canonical,l=i.region,f={count:m.WIKIS_PAGE_SIZE,slug:t,type:a,region:l,nextCursor:""},h=1;return Object(w.jsx)(v.c,{pageKey:n,slug:t,children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(v.b,{children:[Object(w.jsx)(v.a,{pageTitle:c}),Object(w.jsx)("section",{className:"jsx-3982582219 wiki-section",children:o}),Object(w.jsx)(p.a,{query:g.a,dataPath:"wiki.listPages",variables:f,notifyOnNetworkStatusChange:!0,purge:c,children:function(e){var n=e.data,i=e.error,o=e.networkStatus,s=e.fetchMore,l=null!==n&&void 0!==n?n:{},m=l.pages,f=void 0===m?[]:m,g=l.pagination,p=void 0===g?{}:g,v=p.nextCursor;return Object(w.jsx)(k.a,{items:f,pagination:p,networkStatus:o,onLoadMore:function(){return s({variables:{nextCursor:v}}).then((function(){return Object(u.Fc)({url:d,title:"".concat(c," - ").concat(r," Wiki Guide (Page ").concat(++h,")"),eventLabel:"virtualPageview"})}))},children:Object(w.jsx)(b.b,{error:i,type:a,slug:t,items:f,children:Object(w.jsx)(T,{})})})}})]}),Object(w.jsx)(s.a,{id:"3982582219",children:[".wiki-section.jsx-3982582219{line-height:32px;margin:24px 0;}"]})]})})};V.getInitialProps=function(){var e=Object(t.a)(d.a.mark((function e(n){var i,t,a,r,o,s,c,l,f,p,k,v,b,h,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.query,t=n.res,a=n.apolloClient,r=n.region,o=i.slug,s=i.type,c=E(s),e.prev=3,e.next=6,a.query({query:g.a,variables:{slug:o,type:c,region:r,count:m.WIKIS_PAGE_SIZE,nextCursor:""}});case 6:return l=e.sent,f=l.data.wiki,p=f.id,k=f.name,v=f.primaryObject,b=D[c].title,h=Object(u.rd)({id:p,slug:o,name:k,thin:!0,primaryObject:v,excerpt:D[c].excerpt}),j="".concat(b," - ").concat(k," Wiki Guide"),e.abrupt("return",{page:F(F({slug:o,name:k,type:c,pageTitle:b},h),{},{title:j,isCommunity:"no",hasAds:!0,canonical:"/wikis/".concat(o,"/").concat(c)}),pageKey:"".concat(o,":").concat(c)});case 15:return e.prev=15,e.t0=e.catch(3),e.abrupt("return",Object(u.Cc)({error:e.t0,res:t,debug:P}));case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),n.default=Object(l.a)(V)},"9Wgi":function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"objectStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Object"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"genres"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objectRegions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"platformAttributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:181}};i.loc.source={body:"fragment objectStandardFields on Object {\n  id\n  genres {\n    slug\n  }\n  objectRegions(region: $region) {\n    releases {\n      platformAttributes {\n        slug\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.objectStandardFields=function(e,n){var i={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,o=new Set,s=new Set;for(t.forEach((function(e){s.add(e)}));s.size>0;){var c=s;s=new Set,c.forEach((function(e){o.has(e)||(o.add(e),(a[e]||new Set).forEach((function(e){s.add(e)})))}))}return o.forEach((function(n){var t=r(e,n);t&&i.definitions.push(t)})),i}(i,"objectStandardFields")},ANpN:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WikiListPages"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"nextCursor"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wiki"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"wikiStandardFields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"listPages"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"nextCursor"},value:{kind:"Variable",name:{kind:"Name",value:"nextCursor"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isMore"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:411}};t.loc.source={body:"#import './fragments/wikiStandardFieldsFragment.gql'\nquery WikiListPages($slug: String!, $type: String, $nextCursor: String, $count: Int, $region: String!) {\n  wiki(slug: $slug) {\n    ...wikiStandardFields\n    listPages(type: $type, nextCursor: $nextCursor, count: $count) {\n      pagination {\n        nextCursor\n        isMore\n      }\n      pages {\n        title\n        url\n        length\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}t.definitions=t.definitions.concat(i("S2M8").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})));var o={};function s(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.WikiListPages=function(e,n){var i={kind:e.kind,definitions:[s(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,a=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach((function(e){r.add(e)})))}))}return a.forEach((function(n){var t=s(e,n);t&&i.definitions.push(t)})),i}(t,"WikiListPages"),t.documentId="cd614ff06a769611404397aa6653ad1f8dcd18e717b62970c7ceb710301d7f54"},Qbax:function(e,n,i){"use strict";i.d(n,"a",(function(){return p}));var t=i("cpVT"),a=i("dhJC"),r=i("q1tI"),o=i.n(r),s=i("VFWX"),c=i("AbQs"),d=i("NXc5"),l=i("Nfk7"),u=i("nKUr"),m=["error","loading","loadingMore","items","fallback","children"];function f(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function g(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?f(Object(i),!0).forEach((function(n){Object(t.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var p=function(e){var n=e.error,i=e.loading,t=e.loadingMore,a=e.items,r=void 0===a?[]:a,o=e.count,s=e.moreCount,m=e.fallback,f=e.skeleton,g=e.children;return Object(u.jsxs)(l.a,{around:"ApolloResponse",children:[Object(u.jsx)(c.c,{loading:i,count:o,skeleton:f,children:Object(u.jsx)(d.a,{error:n,children:r.length?g:null!==m&&void 0!==m?m:Object(u.jsx)("p",{children:"No Results."})})}),t&&Object(u.jsx)(c.c,{loading:t,count:s||o,skeleton:f})]})};n.b=function(e){var n=e.error,i=e.loading,t=e.loadingMore,r=e.items,c=void 0===r?[]:r,f=e.fallback,p=e.children,k=Object(a.a)(e,m);return Object(u.jsxs)(l.a,{around:"ApolloResponse",children:[Object(u.jsx)(s.a,{loading:i,children:Object(u.jsx)(d.a,{error:n,children:c.length?o.a.cloneElement(p,g({items:c},k)):null!==f&&void 0!==f?f:Object(u.jsx)("p",{children:"No Results."})})}),t&&Object(u.jsx)(s.a,{loading:t})]})}},S2M8:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"wikiStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Wiki"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locked"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"breadcrumbs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"objectStandardFields"},directives:[]}]}}]}}],loc:{start:0,end:154}};t.loc.source={body:"#import './objectStandardFieldsFragment.gql'\nfragment wikiStandardFields on Wiki {\n  id\n  name\n  locked\n  breadcrumbs {\n    ...objectStandardFields\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}t.definitions=t.definitions.concat(i("9Wgi").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})));var o={};function s(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.wikiStandardFields=function(e,n){var i={kind:e.kind,definitions:[s(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,a=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach((function(e){r.add(e)})))}))}return a.forEach((function(n){var t=s(e,n);t&&i.definitions.push(t)})),i}(t,"wikiStandardFields")},jYBB:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wikis/listpages",function(){return i("7tJj")}])}},[["jYBB",1,0,2,4,3,5,6,7,8,9,10,11,12,13,14,17,23]]]);
//# sourceMappingURL=listpages-e7d22c23fdf5e51f0514.js.map