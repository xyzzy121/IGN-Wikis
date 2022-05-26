"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9185],{79382:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(80318),o=n(67294),i=n(70131),a=n(92809),s=n(10219),d=n(9008),c=n(5391),l=n(85893),m=["children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.children,n=(0,s.Z)(e,m);return(0,c.KK)()?null:(0,l.jsx)(d.default,{children:(0,l.jsx)("script",p(p({},n),{},{children:t}))})},h=n(38081),y=n(45649),v=n(10361),x=function(e){var t=e.room,n=e.chatToken,r=(0,o.useRef)();return(0,o.useEffect)((function(){var e,t=function(){window.IGN.loadChat(r.current)};return window.IGN&&window.IGN.loadChat&&r.current?t():e=setInterval((function(){window.IGN&&window.IGN.loadChat&&r.current&&(clearInterval(e),t())}),500),function(){window.IGN&&window.IGN.unloadChat&&window.IGN.unloadChat(),clearInterval(e)}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{defer:!0,type:"text/javascript",src:v.tW},"chat"),(0,l.jsx)("div",{className:"chat-container","data-auto-load":"false","data-room":t,"data-user-data":n,"data-source":"kraken",ref:r})]})},w=function(e){var t=e.room,n=(0,i.YD)({rootMargin:"300px 0px",triggerOnce:!0}),a=(0,r.Z)(n,2),s=a[0],d=a[1],c=(0,y.zq)().showSignIn,m=(0,h.xJ)().currentUser.chatToken;return(0,o.useEffect)((function(){var e=function(){return c({trigger:"Live Chat"})};return window.addEventListener("IGN.Chat.openSignIn",e,!0),function(){window.removeEventListener("IGN.Chat.openSignIn",e)}}),[c]),d?(0,l.jsx)(x,{room:t,chatToken:m}):(0,l.jsx)("div",{ref:s,className:"chat-container"})}},890:function(e,t,n){var r=n(80318),o=n(67294),i=n(70131),a=n(49319),s=n(21951),d=n(17249),c=n(96987),l=n(85893),m=function(e){var t=e.url,n=e.assetId,s=e.assetTitle,d=e.style,m=(0,i.YD)({threshold:.5,triggerOnce:!0}),u=(0,r.Z)(m,2),p=u[0],f=u[1],h=(0,a.ZP)("topicTracker",[]),y=(0,r.Z)(h,2),v=y[0],x=y[1];return(0,o.useEffect)((function(){f&&(0,c.L9)("community-topic-seen",{community:{comments:{assetId:n,assetTitle:s}}})}),[f,n,s]),(0,o.useEffect)((function(){var e=function(e){var t=e.detail,r=t.name,o=t.type;v.unshift({topic:r,type:o}),x(v),(0,c.L9)("community-topic-followed",{community:{comments:{assetId:n,assetTitle:s,topic:r,type:o}}})};return document.addEventListener("spot-im-topic-tracker-tag-followed",e,!1),function(){document.removeEventListener("spot-im-topic-tracker-tag-followed",e,!1)}})),(0,l.jsx)("div",{ref:p,style:d,"data-spotim-module":"topic-tracker","data-post-id":n,"data-post-url":t},"topic-tracker-".concat(n))},u=function(e){var t=e.assetId,n=e.assetTitle,r=e.url,i=e.pluginTheme;!function(e,t){(0,o.useEffect)((function(){var n={community:{comments:{assetId:e,assetTitle:t}}},r=function(){return(0,c.L9)({event:"community-postComment",dataLayerObject:n})},o=function(){return(0,c.L9)({event:"community-likeComment",dataLayerObject:n})},i=function(){return(0,c.L9)({event:"community-showMore",dataLayerObject:n})},a=function(){return(0,c.L9)({event:"community-reCircClick",dataLayerObject:n})};return document.addEventListener("spot-im-current-user-sent-message",r),document.addEventListener("spot-im-user-up-vote-click",o),document.addEventListener("spot-im-show-more-comments-clicked",i),document.addEventListener("spot-im-recirculation-item-clicked",a),function(){document.removeEventListener("spot-im-current-user-sent-message",r),document.removeEventListener("spot-im-user-up-vote-click",o),document.removeEventListener("spot-im-show-more-comments-clicked",i),document.removeEventListener("spot-im-recirculation-item-clicked",a)}}),[e,t])}(t,n);var a=(0,d.Fg)(),s="theater"===i;return(0,l.jsxs)(l.Fragment,{children:[!s&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(m,{style:{marginTop:"2em"},assetId:t,assetTitle:n,url:r})}),(0,l.jsx)("div",{style:{marginRight:"1em"},children:(0,l.jsx)("div",{"data-spotim-module":"pitc"})})]}),(0,l.jsx)("div",{style:!s||null!==a&&void 0!==a&&a.isDark?{}:{backgroundColor:"white"},"data-spotim-module":"conversation","data-post-id":t,"data-post-url":r})]})};t.ZP=function(e){var t=e.assetTitle,n=e.assetId,r=e.url,o=e.pluginTheme;return(0,l.jsx)(s.Z,{around:"Comments",children:(0,l.jsx)(u,{assetTitle:t,assetId:n,url:r,pluginTheme:o},"openweb-comments-".concat(n))})}},69185:function(e,t,n){n.d(t,{F:function(){return L}});var r=n(92809),o=n(65988),i=n(67294),a=n(94184),s=n.n(a),d=n(27361),c=n.n(d),l=n(54557),m=n(25193),u=n.n(m),p=n(26422),f=n(87926),h=n(19330),y=n(79382),v=n(890),x=n(28222),w=n(92217),j=n(20571),g=n(5391),_=n(85893);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.trackingComponent,n=e.url,r=e.title,a=e.liveOnAir;return(0,_.jsxs)(i.Fragment,{children:[(0,_.jsxs)(x.Z,{href:n,className:"video-headline",trackingComponent:t,trackingLabel:r,children:[a&&(0,_.jsx)(w.Z,{}),(0,_.jsx)("h2",{className:"jsx-1219416111",children:r})]}),(0,_.jsx)(o.default,{id:"1219416111",children:[".video-headline{padding:24px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".video-headline .live-on-air{margin-right:12px;}",".video-headline h2.jsx-1219416111{margin:0;font-size:1.5rem;font-weight:bold;color:#fff;}",".video-headline:hover h2.jsx-1219416111{-webkit-text-decoration:underline;text-decoration:underline;}"]})]})},O=function(e){var t=e.children,n=e.videoHeadline,r=e.trackingComponent,a=e.showRightRail,d=e.video,l=e.isInTheaterMode,m=e.handleTheaterModeToggle,u=e.exitTheaterMode,p=e.forwardedRef,x=d.videoId,w=c()(d,"extra.liveOnAir"),j=c()(d,"metadata.title"),b=c()(d,"metadata.url"),k=(0,g.KK)();return(0,_.jsxs)(i.Fragment,{children:[n&&(0,_.jsx)(T,{trackingComponent:r,url:b,title:n,liveOnAir:w}),(0,_.jsxs)("div",{className:o.default.dynamic([["803785990",[k?"none":"none !important"]],["2961666605",[l?"hidden":"auto"]]])+" "+(s()("video-wrapper",{"theater-mode":l})||""),children:[(0,_.jsx)("div",{className:o.default.dynamic([["803785990",[k?"none":"none !important"]],["2961666605",[l?"hidden":"auto"]]])+" video-container",children:t({video:d,forwardedRef:p,handleTheaterModeToggle:m,isInTheaterMode:l})}),(a||l)&&(0,_.jsx)("div",{className:o.default.dynamic([["803785990",[k?"none":"none !important"]],["2961666605",[l?"hidden":"auto"]]])+" video-right-rail",children:w?(0,_.jsx)(y.Z,{room:x}):(0,_.jsx)("div",{className:o.default.dynamic([["803785990",[k?"none":"none !important"]],["2961666605",[l?"hidden":"auto"]]])+" comments-container",children:(0,_.jsx)(v.ZP,{assetTitle:j,assetId:x,url:b,pluginTheme:"theater"})})}),l&&(0,_.jsx)(f.Z,{title:"Exit Theater Mode",onClick:u,children:(0,_.jsxs)(i.Fragment,{children:[(0,_.jsx)(h._,{title:"Exit Theater Mode"}),(0,_.jsx)("span",{className:o.default.dynamic([["803785990",[k?"none":"none !important"]],["2961666605",[l?"hidden":"auto"]]]),children:"Exit"})]})})]}),(0,_.jsx)(o.default,{id:"803785990",dynamic:[k?"none":"none !important"],children:[".video-wrapper.__jsx-style-dynamic-selector{--theme-elements-icon-default:var(--theme-elements-video-icon-default);--theme-elements-icon-hover:var(--theme-elements-video-icon-hover);width:100%;}",".video-wrapper.theater-mode.__jsx-style-dynamic-selector{top:0;left:0;bottom:0;right:0;background-color:var(--theme-elements-video-background);}",".video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector{background-color:#28292c;overflow:auto;}",".video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .chat-container,.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .comments-container.__jsx-style-dynamic-selector{top:0;left:0;bottom:0;right:0;}","@media (min-width:861px){.video-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.video-wrapper.theater-mode.__jsx-style-dynamic-selector{position:fixed;overflow:hidden;z-index:1111111;}.video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-container.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.video-wrapper.__jsx-style-dynamic-selector .video-container.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector{margin-left:24px;-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;}.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .chat-container,.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .comments-container.__jsx-style-dynamic-selector{position:absolute;overflow:auto;}.video-wrapper.__jsx-style-dynamic-selector .button--link{margin:24px 12px;position:fixed;top:0;left:0;z-index:1111112;}}","@media (max-width:860px){@media (orientation:landscape){.theater-button{display:".concat(k?"none":"none !important",";}}.video-wrapper.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector,.video-wrapper.__jsx-style-dynamic-selector .button--link{display:none;}body:not(.ReactModal__Body--open) .video-wrapper.theater-mode.__jsx-style-dynamic-selector{position:fixed;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;z-index:20007;}body:not(.ReactModal__Body--open) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-container.__jsx-style-dynamic-selector{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}body:not(.ReactModal__Body--open) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector{display:inherit;position:relative;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;height:100%;}body:not(.ReactModal__Body--open) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .chat-container,body:not(.ReactModal__Body--open) .video-wrapper.theater-mode.__jsx-style-dynamic-selector .video-right-rail.__jsx-style-dynamic-selector .comments-container.__jsx-style-dynamic-selector{position:absolute;}}")]}),(0,_.jsx)(o.default,{id:"2961666605",dynamic:[l?"hidden":"auto"],children:["body:not(.ReactModal__Body--open){overflow:".concat(l?"hidden":"auto",";}")]})]})},I=function(e){var t=(0,i.useState)(!1),n=t[0],r=t[1],a=(0,i.useCallback)((function(){n&&(e.forwardedRef.current&&e.forwardedRef.current.setInTheaterMode(!1),r(!1))}),[n,e.forwardedRef]);(0,i.useEffect)((function(){var e=function(e){27===e.keyCode&&a()};return window.addEventListener("keydown",e,!!(0,l.QZN)()&&{passive:!0}),function(){return window.removeEventListener("keydown",e)}}),[n,a]);var s=function(){r(!n)};return(0,_.jsxs)(i.Fragment,{children:[e.video?(0,_.jsx)(O,k({},k({isInTheaterMode:n,handleTheaterModeToggle:s,exitTheaterMode:a},e))):e.url?(0,_.jsx)(p.Z,{query:u(),variables:{slug:(0,l.D0W)(e.url)},children:function(t){var r=t.data.videoPlayerProps;return r&&"published"===c()(r,"metadata.state")?(0,_.jsx)(O,k({},k({isInTheaterMode:n,handleTheaterModeToggle:s,exitTheaterMode:a,video:r},e))):null}}):e.children({isInTheaterMode:n,handleTheaterModeToggle:s,forwardedRef:e.forwardedRef}),(0,_.jsx)(o.default,{id:"3068261793",children:[]})]})},E=i.forwardRef((function(e,t){return(0,_.jsx)(I,k(k({},e),{},{forwardedRef:t}))})),M=function(e){var t=(0,i.createRef)();return(0,_.jsx)(E,k(k({},e),{},{ref:t}))};t.Z=M;var L=function(e){return(0,_.jsx)(M,k(k({},k({},e)),{},{children:function(t){var n=t.handleTheaterModeToggle,r=t.forwardedRef,o=t.video,i=t.isInTheaterMode;return o&&(0,_.jsx)(j.Z,k({theaterButtonVisible:!0},k(k({},e),{},{video:o,handleTheaterModeToggle:n,forwardedRef:r,isInTheaterMode:i})))}}))}}}]);
//# sourceMappingURL=9185-22d6c76252a5158af871.js.map