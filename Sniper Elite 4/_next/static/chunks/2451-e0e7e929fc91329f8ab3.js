"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2451],{32451:function(e,i,s){s.d(i,{Z:function(){return P}});var t=s(65988),a=s(67294),n=s(94184),r=s.n(n),l=s(23826),o=s(35481),d=s(27900),x=s(47275),c=s(30859),m=s(24800),f=s(70471),p=s(49109),h=s(87926),g=s(50845),j=s(95117),u=s(47675),b=s(30400),w=s(38130),v=s(85893),y=function(e){var i=e.groups,s=e.loading,n=e.loadingMore,l=e.shouldLoadMore,o=e.onLoadMore,d=e.hide,x=e.changeIndex,c=function(e){var i=e.index,s=e.adjustedIndex;return function(){return x({index:i,adjustedIndex:s})(),d()}},m=-1,f=-1;return(0,v.jsxs)("div",{className:"jsx-3254354645 page-content",children:[(0,v.jsx)("div",{className:"jsx-3254354645 gallery-images",children:(0,v.jsxs)(w.Z,{loading:s,color:"#d1d5db",children:[i.map((function(e,i){return 0!==i&&(f+=1),(0,v.jsx)(a.Fragment,{children:e.map((function(e){var i=e.url,s=e.caption,t=e.embargoDate;m+=1,f+=1;var a=!isNaN(Date.parse(t));return(0,v.jsx)("button",{onClick:c({index:m,adjustedIndex:f}),"aria-label":"View Image",className:"jsx-3254354645",children:(0,v.jsxs)("div",{className:"jsx-3254354645 "+(r()("slide-wrapper",{embargoed:a})||""),children:[(0,v.jsx)("img",{src:(0,b.sQv)(i,{fit:"crop",crop:"1:1",width:100,height:100}),alt:s||"",className:"jsx-3254354645 gallery-image"}),a&&(0,v.jsx)("div",{title:"Embargoed until ".concat((0,b.J8E)(t)),className:"jsx-3254354645 embargo-indicator",children:(0,v.jsx)("span",{className:"jsx-3254354645 until",children:"E"})})]})},m)}))},i)})),l&&(0,v.jsxs)(h.Z,{title:"Load More",onClick:o,children:[(0,v.jsx)(j.IconEllipsis,{outlined:!0,styles:{fontSize:"2rem"}}),(0,v.jsx)("span",{className:"jsx-3254354645",children:"Load More"})]}),n&&(0,v.jsx)(w.Z,{loading:n,color:"#d1d5db"})]})}),(0,v.jsx)(t.default,{id:"3254354645",children:[".gallery-images.jsx-3254354645{--theme-elements-icon-default:var(--theme-elements-video-icon-default);--theme-elements-icon-hover:var(--theme-elements-video-icon-hover);position:relative;display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));grid-template-rows:repeat(auto-fill,minmax(100px,1fr));grid-gap:6px 6px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".gallery-images.jsx-3254354645 .slide-wrapper.jsx-3254354645{position:relative;width:100%;}",".gallery-images.jsx-3254354645 .slide-wrapper.embargoed.jsx-3254354645 .gallery-image.jsx-3254354645{opacity:0.8;-webkit-filter:blur(2px);filter:blur(2px);}",".gallery-images.jsx-3254354645 .slide-wrapper.jsx-3254354645 .gallery-image.jsx-3254354645{display:inline-block;border-radius:4px;cursor:pointer;object-fit:contain;background-color:transparent;width:100px;height:100px;}",".gallery-images.jsx-3254354645 .slide-wrapper.jsx-3254354645 .gallery-image.jsx-3254354645:hover{opacity:0.85;}",".gallery-images.jsx-3254354645 .slide-wrapper.jsx-3254354645 .gallery-image.jsx-3254354645 .loading{margin:auto;}",".gallery-images.jsx-3254354645 .icon-button{width:100px;height:100px;background-color:var(--theme-elements-background-surfaceColor);border-radius:4px;padding:12px;}",".embargo-indicator.jsx-3254354645{background-color:#bf1313;color:#fff;border-radius:1rem;border:1px solid #bf1313;padding:6px;text-transform:uppercase;text-align:center;width:32px;height:32px;position:absolute;top:50%;left:50%;margin-left:-18px;margin-top:-16px;}"]})]})},k=s(92809),N=s(45338),I=s(46097),Z=s(42731),F=s(52067);function S(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,t)}return s}function D(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?S(Object(s),!0).forEach((function(i){(0,k.Z)(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}var M=function(e){var i=e.groups,s=e.index,a=e.adsDisabled,n=e.children,r=-1,l=null;return i.map((function(e,i){a||0===i||(r+=1),e.map((function(e){var i=e.url;(r+=1)===s&&(l=i)}))})),l?(0,v.jsxs)(m.Z,{type:"image",action:"download",params:{src:l},children:[n,(0,v.jsx)(t.default,{id:"2171482729",children:[".ee{height:100%;}"]})]}):n},O=function(e){var i=e.adsDisabled,s=e.index,t=e.noAdIndex,a=e.adIndex,n=e.isAd,l=e.effect,o=e.children,d=i?t:a,x=d===s,c=!n&&d===s-1;return(0,v.jsx)("div",{id:"slide-".concat(d),"data-index":t,"data-adjusted":a,className:r()("slide-container",l,{active:x},{"no-longer-active":c}),children:(!n||n&&x)&&o},d)},C=function(e){var i,s=e.groups,n=e.loading,l=e.adsDisabled,o=e.adFrequency,d=e.index,x=e.effect,c=e.fullscreen,m=e.nextSlideshow,p=e.goToNextSlide,g=e.goToPrevSlide,u=(0,N.QS)({onSwipedLeft:p,onSwipedRight:g,preventScrollOnSwipe:!0,trackMouse:!0});(0,I.Z)("ArrowLeft",g),(0,I.Z)("ArrowRight",p);var y=0,k=-1,S=-1;return(0,a.useEffect)((function(){}),[n]),(0,v.jsxs)("div",D(D({},u),{},{className:"jsx-596980274 "+(u&&null!=u.className&&u.className||"slider"),children:[(0,v.jsx)("div",{className:"jsx-596980274 "+(r()("slides",{fullscreen:c})||""),children:(0,v.jsx)(w.Z,{loading:n,color:"#d1d5db",children:(0,v.jsxs)(M,{groups:s,index:d,adsDisabled:l,children:[s.map((function(e,s){return i=0,0!==s&&(k+=1),(0,v.jsxs)(a.Fragment,{children:[e.map((function(e){var s=e.url,t=e.embargoDate;i+=1,y+=1,k+=1,S+=1;var a=!isNaN(Date.parse(t));return(0,v.jsx)(O,{index:d,adIndex:k,noAdIndex:S,adsDisabled:l,effect:x,children:(0,v.jsxs)("div",{className:"jsx-596980274 "+(r()("slide-wrapper",{embargoed:a})||""),children:[(0,v.jsx)("div",{className:"jsx-596980274 slide",children:(0,v.jsxs)("picture",{className:"jsx-596980274",children:[(0,v.jsx)("source",{srcSet:(0,b.sQv)(s,{width:1400}),media:"(min-width: 1441px)",className:"jsx-596980274"}),(0,v.jsx)("source",{srcSet:(0,b.sQv)(s,{width:1e3}),media:"(min-width: 1041px)",className:"jsx-596980274"}),(0,v.jsx)("source",{srcSet:(0,b.sQv)(s,{width:820}),media:"(min-width: 861px)",className:"jsx-596980274"}),(0,v.jsx)("source",{srcSet:(0,b.sQv)(s,{width:600}),media:"(max-width: 640px)",className:"jsx-596980274"}),(0,v.jsx)(Z.ZP,{src:s,alt:"Image ".concat(y),fitToContainer:!0})]})}),a&&(0,v.jsx)("div",{className:"jsx-596980274 embargo-indicator",children:(0,v.jsxs)("span",{className:"jsx-596980274 until",children:["embargoed until ",(0,b.J8E)(t)]})})]})},k)})),i===o&&!l&&(0,v.jsx)(O,{index:d,adIndex:k+1,isAd:!0,noAdIndex:S,adsDisabled:l,effect:x,children:(0,v.jsx)("div",{className:"jsx-596980274 slide",children:(0,v.jsx)("div",{className:"jsx-596980274 special",children:(0,v.jsx)(f.Z,{mixName:"mrecAd",position:"slideshow"})})})},k)]},s)})),m&&(0,v.jsx)(O,{index:d,adIndex:k+(i===o?2:1),noAdIndex:S+1,adsDisabled:l,effect:x,children:(0,v.jsx)("div",{className:"jsx-596980274 slide",children:(0,v.jsxs)("div",{className:"jsx-596980274 up-next",children:[(0,v.jsx)(F.Z,{children:"UP NEXT"}),(0,v.jsx)("div",{className:"jsx-596980274 up-next-title",children:m.title})]})})},k),!c&&(0,v.jsx)("div",{className:"jsx-596980274 arrows-container",children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.Z,{title:"Previous",className:"left-arrow",onClick:g,children:(0,v.jsx)(j.IconLeftArrow,{})}),(0,v.jsx)(h.Z,{title:"Next",className:"right-arrow",onClick:p,children:(0,v.jsx)(j.IconRightArrow,{})})]})})]})})}),(0,v.jsx)(t.default,{id:"596980274",children:[".slides.jsx-596980274{position:absolute;top:0;left:0;height:100%;width:100%;padding:0;margin:0;overflow:hidden;}",".slides.jsx-596980274>.loading{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%;}",".slides.jsx-596980274 .progressive-image{pointer-events:none;object-fit:contain;max-height:70vh;background-color:transparent;}",".slides.jsx-596980274 .progressive-image.loading{background-color:var(--theme-elements-background-surfaceColor);}",".slide-container{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);opacity:0;padding:0;margin:0;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}",".slide-container.active{z-index:20002;opacity:1;}",".slide-container.active.left{-webkit-animation-name:slide-left-jsx-596980274;animation-name:slide-left-jsx-596980274;}",".slide-container.active.right{-webkit-animation-name:slide-right-jsx-596980274;animation-name:slide-right-jsx-596980274;}",".slide-container.no-longer-active.left{-webkit-animation-name:slide-more-left-jsx-596980274;animation-name:slide-more-left-jsx-596980274;}",".slide-container.no-longer-active.right{-webkit-animation-name:slide-more-right-jsx-596980274;animation-name:slide-more-right-jsx-596980274;}","@-webkit-keyframes slide-right-jsx-596980274{from{opacity:0;left:0%;}to{opacity:1;left:50%;}}","@keyframes slide-right-jsx-596980274{from{opacity:0;left:0%;}to{opacity:1;left:50%;}}","@-webkit-keyframes slide-more-right-jsx-596980274{from{opacity:1;left:50%;}to{opacity:0;left:100%;}}","@keyframes slide-more-right-jsx-596980274{from{opacity:1;left:50%;}to{opacity:0;left:100%;}}","@-webkit-keyframes slide-left-jsx-596980274{from{opacity:0;left:100%;}to{opacity:1;left:50%;}}","@keyframes slide-left-jsx-596980274{from{opacity:0;left:100%;}to{opacity:1;left:50%;}}","@-webkit-keyframes slide-more-left-jsx-596980274{from{opacity:1;left:50%;}to{opacity:0;left:0%;}}","@keyframes slide-more-left-jsx-596980274{from{opacity:1;left:50%;}to{opacity:0;left:0%;}}",".up-next.jsx-596980274{color:#fff;margin:auto 100px;}","@media (max-width:640px){.up-next.jsx-596980274{margin-left:36px;margin-right:36px;}}",".up-next.jsx-596980274 .badge{display:inline-block;}",".up-next-title.jsx-596980274{font-size:60px;line-height:1.1em;font-weight:900;margin-top:20px;}","@media (max-width:640px){.up-next-title.jsx-596980274{font-size:32px;}}",".slide-wrapper.jsx-596980274{position:relative;width:100%;}",".slide-wrapper.embargoed.jsx-596980274 .slide.jsx-596980274{opacity:0.8;-webkit-filter:blur(8px);filter:blur(8px);}",".slide.jsx-596980274{width:100%;text-align:center;min-height:20vh;max-height:70vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","@media (max-height:375px){.slide.jsx-596980274{max-height:60vh;}.slide.jsx-596980274 .progressive-image{max-height:60vh;}}","@media (max-width:640px){.slide.jsx-596980274 .special.jsx-596980274{pointer-events:all;}}",".embargo-indicator.jsx-596980274{background-color:#bf1313;color:#fff;border-radius:1rem;border:1px solid #bf1313;padding:6px 12px;text-transform:uppercase;width:350px;height:32px;position:absolute;top:48%;left:50%;margin-left:-175px;margin-top:-16px;font-size:0.875rem;}","@media (max-width:640px){.embargo-indicator.jsx-596980274{width:250px;height:48px;margin-left:-125px;margin-top:-24px;text-align:center;}}",".fullscreen.jsx-596980274 .slide.jsx-596980274{max-height:90vh;}",".fullscreen.jsx-596980274 .slide.jsx-596980274 .progressive-image{max-height:90vh;}","@media (max-height:375px){.fullscreen.jsx-596980274 .slide.jsx-596980274{max-height:70vh;}.fullscreen.jsx-596980274 .slide.jsx-596980274 .progressive-image{max-height:70vh;}}",".arrows-container.jsx-596980274{--theme-elements-icon-default:var(--theme-elements-video-icon-default);--theme-elements-icon-hover:var(--theme-elements-video-icon-hover);width:100%;height:100%;z-index:20002;position:relative;}",".arrows-container.jsx-596980274 .icon-button{z-index:20002;position:absolute;top:46%;margin:0 24px;height:3.5em;width:3.5em;background-color:rgba(0,0,0,0.4);border-radius:50%;display:none;}","@media (max-width:640px){.arrows-container.jsx-596980274 .icon-button{display:block;pointer-events:all;}}",".arrows-container.jsx-596980274 .left-arrow{left:0;}",".arrows-container.jsx-596980274 .right-arrow{right:0;}",".arrows-container.jsx-596980274:hover .icon-button,.arrows-container.jsx-596980274:active .icon-button,.arrows-container.jsx-596980274:focus .icon-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","@media (max-width:640px){.jsx-596980274{pointer-events:none;}}"]})]}))},A=function(e){return e.onBack?(0,v.jsx)(x.v,{trackingComponent:"navigation-logo",contained:!0,size:"small"}):(0,v.jsx)(j.IconIgn,{contained:!0,size:"small"})},E=function(e){var i=e.slug,s=e.children;return i?(0,v.jsx)(m.Z,{type:"slideshow",params:{slug:i},styles:{color:"#FFF"},children:s}):s},L=function(e){var i=e.slug,s=e.itemTotal,n=e.groups,x=e.loading,m=e.loadingMore,b=e.shouldLoadMore,w=e.total,k=e.onLoadMore,N=e.sliderAdsDisabled,I=e.rightRailAdDisabled,Z=e.title,F=e.isDraft,S=e.nextSlideshow,D=e.onClose,M=e.onBack,O=(0,u.no)(),L=O.className,P=O.styles,z=(0,o.Z)(!1),T=z.display,R=z.show,B=z.hide,Q=(0,o.Z)(!1),_=Q.display,G=Q.toggle,q=(0,d.Go)(),V=q.index,X=q.adjustedIndex,J=q.adFrequency,H=q.changeIndex,U=N?V:X,K=(0,a.useState)("left"),W=K[0],Y=K[1],$=0,ee=-1,ie=function(){var e=Math.trunc(s/J);return N?s:s+e},se=U===ie();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Z,{isPreview:F,label:"slideshow"}),(0,v.jsxs)("div",{className:"jsx-2120481227 "+(r()("slideshow",L,{"with-preview-banner":F})||""),children:[(0,v.jsxs)("header",{className:"jsx-2120481227",children:[(0,v.jsxs)("div",{className:"jsx-2120481227",children:[M&&(0,v.jsx)(h.Z,{title:"Back",onClick:M,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.IconLeftArrow,{title:"Back"}),(0,v.jsx)("span",{className:"jsx-2120481227",children:"Back"})]})}),!se&&!T&&!_&&(0,v.jsx)(h.Z,{title:"Fullscreen",onClick:G,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.IconFullscreen,{}),(0,v.jsx)("span",{className:"jsx-2120481227",children:"Fullscreen"})]})})]}),(0,v.jsx)(A,{onBack:M}),(0,v.jsx)("div",{className:"jsx-2120481227",children:T?(0,v.jsx)(g.Z,{onClick:B}):_?(0,v.jsx)(g.Z,{onClick:G}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{}),!se&&(0,v.jsx)(h.Z,{title:"Image Gallery",onClick:R,children:(0,v.jsx)(j.IconGrid,{title:"Image Gallery"})}),D&&(0,v.jsx)(g.Z,{onClick:D})]})})]}),(0,v.jsxs)("div",{className:"jsx-2120481227 slideshow-main",children:[(0,v.jsxs)("div",{className:"jsx-2120481227 "+(r()("image-container",{hidden:T})||""),children:[(0,v.jsx)(C,{loading:x||m,groups:n,goToNextSlide:function(){var e=ie();if("right"===W&&Y("left"),U===e-1){if(b)requestAnimationFrame(k);else if(null===S||void 0===S)return H({index:0,adjustedIndex:0})()}else if(S&&U===e)return l.Router.pushRoute("slideshows-show",{slug:S.slug});H({index:V+1,adjustedIndex:X+1})()},goToPrevSlide:function(){if("left"===W&&Y("right"),0===V){if(M)return M();var e=Math.trunc(s/J);return H({index:s-1,adjustedIndex:s+e-1})()}H({index:V-1,adjustedIndex:X-1})()},fullscreen:_,adsDisabled:N,adFrequency:J,index:U,effect:W,nextSlideshow:S}),!_&&(0,v.jsxs)("div",{className:"jsx-2120481227 sidebar",children:[(0,v.jsx)(E,{slug:i,children:n.map((function(e,i){return N||0===i||(ee+=1),(0,v.jsx)(a.Fragment,{children:e.map((function(e){var i=e.caption;if($+=1,(ee+=1)===U)return(0,v.jsxs)("div",{id:"imageInfo-".concat(ee),className:"jsx-2120481227 image-info",children:[(0,v.jsxs)("div",{className:"jsx-2120481227 image-count",children:[(0,v.jsx)("span",{className:"jsx-2120481227",children:$})," OF ",w]}),i&&(0,v.jsx)("div",{dangerouslySetInnerHTML:{__html:i},className:"jsx-2120481227 image-title"})]},ee)}))},i)}))}),!I&&(0,v.jsx)("div",{className:"jsx-2120481227 special",children:(0,v.jsx)(f.Z,{mixName:"slideshow",position:"slideshow"})})]})]}),T&&(0,v.jsx)(y,{hide:B,changeIndex:H,loading:x,loadingMore:m,groups:n,shouldLoadMore:b,onLoadMore:k})]}),(0,v.jsx)("footer",{className:"jsx-2120481227 "+(r()({fullscreen:_})||""),children:T?(0,v.jsxs)("div",{className:"jsx-2120481227 image-total",children:[$<w&&(0,v.jsxs)(v.Fragment,{children:[$," OF "]}),w," IMAGES"]}):!se&&Z?(0,v.jsx)("div",{className:"jsx-2120481227 album-title",children:Z}):null})]}),(0,v.jsx)(t.default,{id:"2120481227",children:[".jsx-2120481227{--theme-elements-scrollbar-thumb:rgba(0,0,0,0.4);--theme-elements-scrollbar-hover:rgba(0,0,0,0.4);}",".image-count.jsx-2120481227,.image-total.jsx-2120481227{font-family:'Visby Round CF',sans-serif;}",".preview-banner{position:fixed;top:0;left:0;right:0;}",".slideshow.jsx-2120481227{--theme-icons-logo-color:#fff;--theme-icons-logo-text:#fff;--theme-elements-icon-default:var(--theme-elements-video-icon-default);--theme-elements-icon-hover:var(--theme-elements-video-icon-hover);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;padding:0 12px;}","@media (min-width:1281px){.slideshow.jsx-2120481227{padding:0 36px;}}",".slideshow.with-preview-banner.jsx-2120481227{top:50px;}","header.jsx-2120481227{margin:18px 0 36px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","header.jsx-2120481227>div.jsx-2120481227{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","header.jsx-2120481227>div.jsx-2120481227:first-child .icon-button:first-child{margin-right:36px;}","header.jsx-2120481227>div.jsx-2120481227:last-child{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}","header.jsx-2120481227 .user-tools-wrapper{margin-right:36px;}","header.jsx-2120481227 .icon-close{margin-left:36px;}","header.jsx-2120481227,footer.jsx-2120481227{min-height:36px;}","footer.fullscreen.jsx-2120481227{min-height:0;}",".slideshow-main.jsx-2120481227{-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;}",".image-container.jsx-2120481227{overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}",".image-container.hidden.jsx-2120481227{display:none;}",".slider{position:relative;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}",".slider .slides.fullscreen{width:100%;}",".sidebar.jsx-2120481227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".sidebar.jsx-2120481227 .ee,.sidebar.jsx-2120481227 .image-info.jsx-2120481227{overflow-x:hidden;overflow-y:auto;min-height:20%;}",".sidebar.jsx-2120481227 .image-info.jsx-2120481227{color:#d1d5db;line-height:1.25;font-size:0.75rem;}",".sidebar.jsx-2120481227 .image-info.jsx-2120481227 a{color:#fff;font-weight:bold;}",".sidebar.jsx-2120481227 .image-info.jsx-2120481227 a:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".sidebar.jsx-2120481227 .image-count.jsx-2120481227 span.jsx-2120481227{font-weight:bold;color:#fff;}",".sidebar.jsx-2120481227 .image-title.jsx-2120481227{margin-top:12px;}",".special{text-align:center;}",".special:after{content:'ADVERTISEMENT';font-family:'Visby Round CF',sans-serif;font-size:0.688em;color:#d1d5db;}","footer.jsx-2120481227{margin:12px 0 0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-2120481227 .image-total.jsx-2120481227{margin:0 auto 12px;font-weight:bold;}","footer.jsx-2120481227 .album-title.jsx-2120481227{color:#d1d5db;font-weight:bold;margin:0 36px 12px 0;}","@media (max-width:640px){.icon-button span{display:none;}}","@media (max-width:860px){header.jsx-2120481227{margin-bottom:18px;}.image-container.jsx-2120481227{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar.jsx-2120481227{height:45%;z-index:20002;}.sidebar.jsx-2120481227 .ee,.sidebar.jsx-2120481227 .image-info.jsx-2120481227{margin-top:auto;}.sidebar.jsx-2120481227 .image-info.jsx-2120481227{background-image:linear-gradient(to bottom,rgba(0,0,0,0),#000000);}}","@media (min-width:861px){.sidebar.jsx-2120481227{padding:0 0 0 36px;width:370px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.sidebar.jsx-2120481227 .ee,.sidebar.jsx-2120481227 .image-info.jsx-2120481227{margin-bottom:36px;}.sidebar.jsx-2120481227 .special.jsx-2120481227{margin-top:auto;}}"]}),P]})};L.defaultProps={itemTotal:0,groups:[[]],loading:!1,loadingMore:!1,shouldLoadMore:!1,total:0,onLoadMore:function(){}};var P=L}}]);
//# sourceMappingURL=2451-e0e7e929fc91329f8ab3.js.map