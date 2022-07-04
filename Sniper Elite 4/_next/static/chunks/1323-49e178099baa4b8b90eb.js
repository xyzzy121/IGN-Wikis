(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1323],{83740:function(e){var n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"objectStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Object"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"genres"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objectRegions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"releases"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"platformAttributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:193}};n.loc.source={body:"fragment objectStandardFields on Object {\n  id\n  genres {\n    slug\n  }\n  objectRegions {\n    id\n    releases {\n      id\n      platformAttributes {\n        slug\n        name\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var a={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})),e.exports=n,e.exports.objectStandardFields=function(e,n){var i={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var d=a[n]||new Set,l=new Set,r=new Set;for(d.forEach((function(e){r.add(e)}));r.size>0;){var s=r;r=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var a=t(e,n);a&&i.definitions.push(a)})),i}(n,"objectStandardFields")},98828:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WikiLatestUpdates"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"nextCursor"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"latestWikiUpdates"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"nextCursor"},value:{kind:"Variable",name:{kind:"Name",value:"nextCursor"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wikis"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recentEditor"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nickname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"update"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timestamp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"oldTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"oldLength"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"newLength"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"previousRevisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isMore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nextCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:642}};n.loc.source={body:"query WikiLatestUpdates($slug: String, $nextCursor: String, $count: Int) {\n  latestWikiUpdates(slug: $slug, nextCursor: $nextCursor, count: $count) {\n    wikis {\n      name\n      slug\n      page {\n        title\n        url\n        revisionId\n        recentEditor {\n          id\n          nickname\n          displayName\n          thumbnailUrl\n        }\n        update {\n          type\n          timestamp\n          title\n          oldTitle\n          oldLength\n          newLength\n          revisionId\n          previousRevisionId\n          comment\n        }\n      }\n    }\n    pagination {\n      count\n      isMore\n      nextCursor\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var a={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})),e.exports=n,e.exports.WikiLatestUpdates=function(e,n){var i={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var d=a[n]||new Set,l=new Set,r=new Set;for(d.forEach((function(e){r.add(e)}));r.size>0;){var s=r;r=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var a=t(e,n);a&&i.definitions.push(a)})),i}(n,"WikiLatestUpdates")},98709:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WikiNavigation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wiki"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"maps"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"mapName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mapSlug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"navigation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subnav"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subnav"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:270}};n.loc.source={body:"query WikiNavigation($slug: String!) {\n  wiki(slug: $slug) {\n    id\n    maps {\n      mapName\n      mapSlug\n    }\n    navigation {\n      label\n      url\n      subnav {\n        label\n        url\n        subnav {\n          label\n          url\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var a={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})),e.exports=n,e.exports.WikiNavigation=function(e,n){var i={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var d=a[n]||new Set,l=new Set,r=new Set;for(d.forEach((function(e){r.add(e)}));r.size>0;){var s=r;r=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var a=t(e,n);a&&i.definitions.push(a)})),i}(n,"WikiNavigation")},3650:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WikiPage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"chapter"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"revision"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"wiki"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"chapter"}}},{kind:"Argument",name:{kind:"Name",value:"redirect"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"chapter"}}},{kind:"Argument",name:{kind:"Name",value:"revision"},value:{kind:"Variable",name:{kind:"Name",value:"revision"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locked"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revisionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasVideo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageForTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mapMarker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markerSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"objectSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mapSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markerName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeSlug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lng"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"htmlEntities"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"values"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nextPage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"prevPage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:613}};n.loc.source={body:"query WikiPage($slug: String!, $chapter: String, $revision: Int) {\n  wiki(slug: $slug, title: $chapter, redirect: true) {\n    id\n    page(title: $chapter, revision: $revision) {\n      id\n      title\n      updatedAt\n      locked\n      revisionId\n      thin\n      hasVideo\n      imageForTitle\n      mapMarker {\n        id\n        markerSlug\n        objectSlug\n        mapSlug\n        markerName\n        typeSlug\n        lat\n        lng\n      }\n      htmlEntities {\n        name\n        values\n      }\n      nextPage {\n        label\n        url\n      }\n      prevPage {\n        label\n        url\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var a={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})),e.exports=n,e.exports.WikiPage=function(e,n){var i={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var d=a[n]||new Set,l=new Set,r=new Set;for(d.forEach((function(e){r.add(e)}));r.size>0;){var s=r;r=new Set,s.forEach((function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var a=t(e,n);a&&i.definitions.push(a)})),i}(n,"WikiPage")},83036:function(e,n,i){"use strict";i.d(n,{D:function(){return k}});var a=i(92809),t=i(10219),d=i(67294),l=i(38130),r=i(45231),s=i(57607),o=i(21951),u=i(85893),m=["error","loading","loadingMore","items","fallback","children"];function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function v(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){(0,a.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var k=function(e){var n=e.error,i=e.loading,a=e.loadingMore,t=e.items,d=void 0===t?[]:t,l=e.count,m=e.moreCount,c=e.fallback,v=e.skeleton,k=e.children;return(0,u.jsxs)(o.Z,{around:"ApolloResponse",children:[(0,u.jsx)(r.Dl,{loading:i,count:l,skeleton:v,children:(0,u.jsx)(s.Z,{error:n,children:d.length?k:null!==c&&void 0!==c?c:(0,u.jsx)("p",{children:"No Results."})})}),a&&(0,u.jsx)(r.Dl,{loading:a,count:m||l,skeleton:v})]})};n.Z=function(e){var n=e.error,i=e.loading,a=e.loadingMore,r=e.items,c=void 0===r?[]:r,k=e.fallback,g=e.children,f=(0,t.Z)(e,m);return(0,u.jsxs)(o.Z,{around:"ApolloResponse",children:[(0,u.jsx)(l.Z,{loading:i,children:(0,u.jsx)(s.Z,{error:n,children:c.length?d.cloneElement(g,v({items:c},f)):null!==k&&void 0!==k?k:(0,u.jsx)("p",{children:"No Results."})})}),a&&(0,u.jsx)(l.Z,{loading:a})]})}},15155:function(e,n,i){"use strict";i.d(n,{T:function(){return s}});var a=i(67294),t=i(98709),d=i.n(t),l=i(50047),r=i(49782),s=function(e){var n=e.slug;return(0,r.Z)({purge:"Wiki Navigation",query:d(),variables:{slug:n},dataPath:"wiki"})};n.Z=function(e){var n=e.slug,i=e.chapter,t=s({slug:n}).data,d=(null!==t&&void 0!==t?t:{}).navigation,r=void 0===d?[]:d;return(0,a.useMemo)((function(){return(0,l.Y0)({slug:n,chapter:i,navigation:r})}),[n,i,r])}}}]);
//# sourceMappingURL=1323-49e178099baa4b8b90eb.js.map