"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1032],{26422:function(e,t,r){var n=r(10219),o=r(45697),i=r.n(o),a=r(49782),s=["children"],c=["hasData"],l=function(e){var t=e.children,r=(0,n.Z)(e,s),o=(0,a.Z)(r),i=o.hasData,l=(0,n.Z)(o,c);return null!==r&&void 0!==r&&r.skip||i?t(l):null};l.propTypes={children:i().func,purge:i().oneOfType([i().string,i().func]),dataPath:i().string,query:i().object},t.Z=l},79382:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(80318),o=r(67294),i=r(70131),a=r(92809),s=r(10219),c=r(9008),l=r(5391),d=r(85893),m=["children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.children,r=(0,s.Z)(e,m);return(0,l.KK)()?null:(0,d.jsx)(c.default,{children:(0,d.jsx)("script",p(p({},r),{},{children:t}))})},h=r(38081),x=r(90658),v=r(10361),y=function(e){var t=e.room,r=e.chatToken,n=(0,o.useRef)();return(0,o.useEffect)((function(){var e,t=function(){window.IGN.loadChat(n.current)};return window.IGN&&window.IGN.loadChat&&n.current?t():e=setInterval((function(){window.IGN&&window.IGN.loadChat&&n.current&&(clearInterval(e),t())}),500),function(){window.IGN&&window.IGN.unloadChat&&window.IGN.unloadChat(),clearInterval(e)}}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{defer:!0,type:"text/javascript",src:v.tW},"chat"),(0,d.jsx)("div",{className:"chat-container","data-auto-load":"false","data-room":t,"data-user-data":r,"data-source":"kraken",ref:n})]})},j=function(e){var t=e.room,r=(0,i.YD)({rootMargin:"300px 0px",triggerOnce:!0}),a=(0,n.Z)(r,2),s=a[0],c=a[1],l=(0,x.zq)().showSignIn,m=(0,h.OP)(),u=m.currentUser,p=m.ready,f=u.chatToken;return(0,o.useEffect)((function(){var e=function(){return l({trigger:"Live Chat"})};return window.addEventListener("IGN.Chat.openSignIn",e,!0),function(){window.removeEventListener("IGN.Chat.openSignIn",e)}}),[l]),c&&p?(0,d.jsx)(y,{room:t,chatToken:f}):(0,d.jsx)("div",{ref:s,className:"chat-container"})}},890:function(e,t,r){r.d(t,{JC:function(){return p}});var n=r(80318),o=r(67294),i=r(70131),a=r(49319),s=r(21951),c=r(17249),l=r(96987),d=r(85893),m=function(e){var t=e.url,r=e.assetId,s=e.assetTitle,c=e.style,m=(0,i.YD)({threshold:.5,triggerOnce:!0}),u=(0,n.Z)(m,2),p=u[0],f=u[1],h=(0,a.ZP)("topicTracker",[]),x=(0,n.Z)(h,2),v=x[0],y=x[1];return(0,o.useEffect)((function(){f&&(0,l.L9)("community-topic-seen",{community:{comments:{assetId:r,assetTitle:s}}})}),[f,r,s]),(0,o.useEffect)((function(){var e=function(e){var t=e.detail,n=t.name,o=t.type;v.unshift({topic:n,type:o}),y(v),(0,l.L9)("community-topic-followed",{community:{comments:{assetId:r,assetTitle:s,topic:n,type:o}}})};return document.addEventListener("spot-im-topic-tracker-tag-followed",e,!1),function(){document.removeEventListener("spot-im-topic-tracker-tag-followed",e,!1)}})),(0,d.jsx)("div",{ref:p,style:c,"data-spotim-module":"topic-tracker","data-post-id":r,"data-post-url":t},"topic-tracker-".concat(r))},u=function(e){var t=e.assetId,r=e.assetTitle,n=e.url,i=e.pluginTheme;!function(e,t){(0,o.useEffect)((function(){var r={community:{comments:{assetId:e,assetTitle:t}}},n=function(){return(0,l.L9)({event:"community-postComment",dataLayerObject:r})},o=function(){return(0,l.L9)({event:"community-likeComment",dataLayerObject:r})},i=function(){return(0,l.L9)({event:"community-showMore",dataLayerObject:r})},a=function(){return(0,l.L9)({event:"community-reCircClick",dataLayerObject:r})};return document.addEventListener("spot-im-current-user-sent-message",n),document.addEventListener("spot-im-user-up-vote-click",o),document.addEventListener("spot-im-show-more-comments-clicked",i),document.addEventListener("spot-im-recirculation-item-clicked",a),function(){document.removeEventListener("spot-im-current-user-sent-message",n),document.removeEventListener("spot-im-user-up-vote-click",o),document.removeEventListener("spot-im-show-more-comments-clicked",i),document.removeEventListener("spot-im-recirculation-item-clicked",a)}}),[e,t])}(t,r);var a=(0,c.Fg)(),s="theater"===i,u=!s||null!==a&&void 0!==a&&a.isDark?{}:{backgroundColor:"white"};return(0,d.jsxs)(d.Fragment,{children:[!s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsx)(m,{style:{marginTop:"2em"},assetId:t,assetTitle:r,url:n})}),(0,d.jsx)("div",{style:{marginRight:"1em"},children:(0,d.jsx)("div",{"data-spotim-module":"pitc"})})]}),(0,d.jsx)(p,{style:u,assetId:t,url:n})]})},p=function(e){var t=e.assetId,r=e.url,n=e.style;return(0,d.jsx)("div",{style:n,"data-spotim-module":"conversation","data-post-id":t,"data-post-url":r})};t.ZP=function(e){var t=e.assetTitle,r=e.assetId,n=e.url,o=e.pluginTheme;return(0,d.jsx)(s.Z,{around:"Comments",children:(0,d.jsx)(u,{assetTitle:t,assetId:r,url:n,pluginTheme:o},"openweb-comments-".concat(r))})}},69185:function(e,t,r){r.d(t,{F:function(){return N}});var n=r(92809),o=r(65988),i=r(67294),a=r(94184),s=r.n(a),c=r(27361),l=r.n(c),d=r(30400),m=r(25193),u=r.n(m),p=r(26422),f=r(87926),h=r(19330),x=r(79382),v=r(890),y=r(28222),j=r(92217),w=r(20571),g=r(5391),b=r(85893);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.trackingComponent,r=e.url,n=e.title,a=e.liveOnAir;return(0,b.jsxs)(i.Fragment,{children:[(0,b.jsxs)(y.Z,{href:r,className:"video-headline",trackingComponent:t,trackingLabel:n,children:[a&&(0,b.jsx)(j.Z,{}),(0,b.jsx)("h2",{className:"jsx-1219416111",children:n})]}),(0,b.jsx)(o.default,{id:"1219416111",children:[".video-headline{padding:24px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".video-headline .live-on-air{margin-right:12px;}",".video-headline h2.jsx-1219416111{margin:0;font-size:1.5rem;font-weight:bold;color:#fff;}",".video-headline:hover h2.jsx-1219416111{-webkit-text-decoration:underline;text-decoration:underline;}"]})]})},T=function(e){var t=e.children,r=e.videoHeadline,n=e.trackingComponent,a=e.showRightRail,c=e.video,d=e.isInTheaterMode,m=e.handleTheaterModeToggle,u=e.exitTheaterMode,p=e.forwardedRef,y=c.videoId,j=l()(c,"extra.liveOnAir"),w=l()(c,"metadata.title"),_=l()(c,"metadata.url"),k=(0,g.KK)();return(0,b.jsxs)(i.Fragment,{children:[r&&(0,b.jsx)(O,{trackingComponent:n,url:_,title:r,liveOnAir:j}),(0,b.jsxs)("div",{className:o.default.dynamic([["4041614775",[k?"none":"none !important"]],["609006861",[d?"hidden":"auto"]]])+" "+(s()("video-wrapper",{"theater-mode":d})||""),children:[(0,b.jsx)("div",{className:o.default.dynamic([["4041614775",[k?"none":"none !important"]],["609006861",[d?"hidden":"auto"]]])+" video-container",children:t({video:c,forwardedRef:p,handleTheaterModeToggle:m,isInTheaterMode:d})}),(a||d)&&(0,b.jsx)("div",{className:o.default.dynamic([["4041614775",[k?"none":"none !important"]],["609006861",[d?"hidden":"auto"]]])+" video-right-rail",children:j?(0,b.jsx)(x.Z,{room:y}):(0,b.jsx)("div",{className:o.default.dynamic([["4041614775",[k?"none":"none !important"]],["609006861",[d?"hidden":"auto"]]])+" comments-container",children:(0,b.jsx)(v.ZP,{assetTitle:w,assetId:y,url:_,pluginTheme:"theater"})})}),d&&(0,b.jsx)(f.Z,{title:"Exit Theater Mode",onClick:u,children:(0,b.jsxs)(i.Fragment,{children:[(0,b.jsx)(h._,{title:"Exit Theater Mode"}),(0,b.jsx)("span",{className:o.default.dynamic([["4041614775",[k?"none":"none !important"]],["609006861",[d?"hidden":"auto"]]]),children:"Exit"})]})})]}),(0,b.jsx)(o.default,{id:"4041614775",dynamic:[k?"none":"none !important"],children:[".video-wrapper.__jsx-style-dynamic-selector{--theme-elements-icon-default:var(--theme-elements-video-icon-default);--theme-elements-icon-hover:var(--theme-elements-video-icon-hover);width:100%;}",".video-wrapper.theater-mode.__jsx-style-dynamic-selector{top:0;left:0;bottom:0;right:0;background-color:var(--theme-elements-video-background);}",".video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector{background-color:#28292c;overflow:auto;}",".video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .chat-container,.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .comments-container.__jsx-style-dynamic-selector{top:0;left:0;bottom:0;right:0;}","@media (min-width:861px){.video-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.video-wrapper.theater-mode.__jsx-style-dynamic-selector{position:fixed;overflow:hidden;z-index:1111111;}.video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-container.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.video-wrapper.__jsx-style-dynamic-selector .video-container.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector{margin-left:24px;-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;}.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .chat-container,.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .comments-container.__jsx-style-dynamic-selector{position:absolute;overflow:auto;}.video-wrapper.__jsx-style-dynamic-selector .button--link{margin:24px 12px;position:fixed;top:0;left:0;z-index:1111112;}}","@media (max-width:860px){@media (orientation:landscape){.theater-button{display:".concat(k?"none":"none !important",";}}.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector,.video-wrapper.__jsx-style-dynamic-selector .button--link{display:none;}body:not(.lock-scroll) .video-wrapper.theater-mode.__jsx-style-dynamic-selector{position:fixed;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;z-index:20007;}body:not(.lock-scroll) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-container.__jsx-style-dynamic-selector{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}body:not(.lock-scroll) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector{display:inherit;position:relative;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;height:100%;}body:not(.lock-scroll) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .chat-container,body:not(.lock-scroll) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .comments-container.__jsx-style-dynamic-selector{position:absolute;}}")]}),(0,b.jsx)(o.default,{id:"609006861",dynamic:[d?"hidden":"auto"],children:["body:not(.lock-scroll){overflow:".concat(d?"hidden":"auto",";}")]})]})},I=function(e){var t=(0,i.useState)(!1),r=t[0],n=t[1],a=(0,i.useCallback)((function(){r&&(e.forwardedRef.current&&e.forwardedRef.current.setInTheaterMode(!1),n(!1))}),[r,e.forwardedRef]);(0,i.useEffect)((function(){var e=function(e){27===e.keyCode&&a()};return window.addEventListener("keydown",e,!!(0,d.QZN)()&&{passive:!0}),function(){return window.removeEventListener("keydown",e)}}),[r,a]);var s=function(){n(!r)};return(0,b.jsxs)(i.Fragment,{children:[e.video?(0,b.jsx)(T,k({},k({isInTheaterMode:r,handleTheaterModeToggle:s,exitTheaterMode:a},e))):e.url?(0,b.jsx)(p.Z,{query:u(),variables:{slug:(0,d.D0W)(e.url)},children:function(t){var n=t.data.videoPlayerProps;return n&&"published"===l()(n,"metadata.state")?(0,b.jsx)(T,k({},k({isInTheaterMode:r,handleTheaterModeToggle:s,exitTheaterMode:a,video:n},e))):null}}):e.children({isInTheaterMode:r,handleTheaterModeToggle:s,forwardedRef:e.forwardedRef}),(0,b.jsx)(o.default,{id:"3068261793",children:[]})]})},E=i.forwardRef((function(e,t){return(0,b.jsx)(I,k(k({},e),{},{forwardedRef:t}))})),P=function(e){var t=(0,i.createRef)();return(0,b.jsx)(E,k(k({},e),{},{ref:t}))};t.Z=P;var N=function(e){return(0,b.jsx)(P,k(k({},k({},e)),{},{children:function(t){var r=t.handleTheaterModeToggle,n=t.forwardedRef,o=t.video,i=t.isInTheaterMode;return o&&(0,b.jsx)(w.Z,k({theaterButtonVisible:!0},k(k({},e),{},{video:o,handleTheaterModeToggle:r,forwardedRef:n,isInTheaterMode:i})))}}))}},74195:function(e,t,r){var n=r(92809),o=r(10219),i=r(65988),a=r(67294),s=r(94184),c=r.n(s),l=r(85893),d=["className","tag","element","children"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.className,r=e.tag,n=void 0===r?"div":r,s=e.element,m=e.children,p=(0,o.Z)(e,d),f={styles:(0,l.jsx)(i.default,{id:"3309924231",children:[".box.jsx-3309924231{padding:24px;background:var(--theme-elements-background-altColor);color:var(--theme-elements-text-default);box-shadow:var(--theme-elements-boxShadow-card);border-radius:24px;}",".box.jsx-3309924231 .box-title{margin:0 0 12px;}",".box.jsx-3309924231 .title-bar .box-title{margin:0;}","@media (min-width:461px){.box.jsx-3309924231 .box-title{margin-bottom:24px;}.box.jsx-3309924231 .title-bar .box-title{margin:0;}}","@media (min-width:861px){.box.jsx-3309924231{padding:32px;}}"]}),className:"jsx-3309924231"},h=f.className,x=f.styles;return m?(0,l.jsx)(l.Fragment,{children:a.cloneElement(null!==s&&void 0!==s?s:(0,l.jsx)(n,{}),u({className:c()("box",h,t),children:(0,l.jsxs)(l.Fragment,{children:[m,x]})},p))}):null}}}]);
//# sourceMappingURL=1032-23f86d64ce626cf85fb3.js.map