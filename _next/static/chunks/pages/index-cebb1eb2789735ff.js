(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7954)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=r(2648).Z,i=r(1598).Z,a=r(7273).Z,l=i(r(7294)),s=o(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=o(r(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,o,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:i,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:m,placeholder:p,loading:h,srcString:v,config:w,unoptimized:b,loader:x,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:k,setShowAltText:E,onLoad:_,onError:T}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,r,{width:i,height:o,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:h,style:n({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(T&&(e.src=e.src),e.complete&&g(e,v,p,y,j,k,b))},[v,p,y,j,k,T,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,p,y,j,k,b)},onError:e=>{E(!0),"blur"===p&&k(!0),T&&T(e)}})))}),w=l.forwardRef((e,t)=>{let r,o;var i,{src:g,sizes:w,unoptimized:b=!1,priority:x=!1,loading:y,className:j,quality:k,width:E,height:_,fill:T,style:S,onLoad:C,onLoadingComplete:z,placeholder:N="empty",blurDataURL:O,layout:P,objectFit:I,objectPosition:R,lazyBoundary:A,lazyRoot:L}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=l.useContext(d.ImageConfigContext),D=l.useMemo(()=>{let e=m||M||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[M]),F=B,W=F.loader||f.default;delete F.loader;let G="__next_img_default"in W;if(G){if("custom"===D.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:r}=t,n=a(t,["config"]);return e(n)}}if(P){"fill"===P&&(T=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(S=n({},S,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!w&&(w=t)}let V="",Z=h(E),q=h(_);if("object"==typeof(i=g)&&(p(i)||void 0!==i.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,O=O||e.blurDataURL,V=e.src,!T){if(Z||q){if(Z&&!q){let t=Z/e.width;q=Math.round(e.height*t)}else if(!Z&&q){let t=q/e.height;Z=Math.round(e.width*t)}}else Z=e.width,q=e.height}}let U=!x&&("lazy"===y||void 0===y);((g="string"==typeof g?g:V).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,U=!1),D.unoptimized&&(b=!0),G&&g.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0);let[J,K]=l.useState(!1),[X,H]=l.useState(!1),Y=h(k),$=Object.assign(T?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},X?{}:{color:"transparent"},S),Q="blur"===N&&O&&!J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:q,blurWidth:r,blurHeight:o,blurDataURL:O}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:i,width:s[u]})}}({config:D,src:g,unoptimized:b,width:Z,quality:Y,sizes:w,loader:W}),et=g,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},en=l.useRef(C);l.useEffect(()=>{en.current=C},[C]);let eo=l.useRef(z);l.useEffect(()=>{eo.current=z},[z]);let ei=n({isLazy:U,imgAttributes:ee,heightInt:q,widthInt:Z,qualityInt:Y,className:j,imgStyle:$,blurStyle:Q,loading:y,config:D,fill:T,unoptimized:b,placeholder:N,loader:W,srcString:et,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:K,setShowAltText:H},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ei,{ref:t})),x?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i}=e,a=n||t,l=o||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},7954:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),o=r(5675),i=r.n(o);r(7294);var a=r(9008),l=r.n(a);let s=e=>{let{children:t,title:r="This is the default title",description:o="",keywords:i=[]}=e,a="/assets/avatar-github.jpg";return(0,n.jsxs)("div",{className:"container max-w-xl pt-6",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{content:o,name:"description"}),(0,n.jsx)("meta",{property:"keywords",content:i.join(", ")}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:site_name",content:"Koen Verburg"}),(0,n.jsx)("meta",{name:"msapplication-TileImage",content:"/favicon.ico"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"favicon-16x16.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"512x512",href:"apple-touch-icon-512x512.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"192x192",href:"apple-touch-icon-192x192.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",href:"/apple-touch-icon.png"}),(0,n.jsx)("meta",{property:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:image",content:a}),(0,n.jsx)("meta",{property:"og:description",content:o}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:a}),(0,n.jsx)("meta",{name:"twitter:description",content:o}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@koenverburg"})]}),t]})};var c=r(3454);let u=[{label:"Buy My Reel Downloader Script",description:"",href:"https://conradtheprogrammer.gumroad.com/l/instagram-reel-download-script"},{label:"Book a Call",href:"https://appointments.lokiapp.live/consultant/WUJFxrwyO0MMZj6F9lEKOsVFtpx2",description:"Looking to make your Dev Team move faster to production, career advice, or something else, Book a Video Call"},{label:"Github",href:"https://github.com/koenverburg"},{label:"Twitter",href:"https://twitter.com/koenverburg"},{label:"YouTube",href:"https://www.youtube.com/@conradtheprogrammer"},{label:"Twitch",href:"https://www.twitch.tv/conradtheprogrammer"},{label:"Instagram",href:"https://www.instagram.com/conradtheprogrammer"},{label:"Blog",href:"https://conradtheprogrammer.medium.com"},{label:"Buy me a Coffee",href:"https://www.buymeacoffee.com/conradcoffee"},{label:"Products I use",href:"https://kit.conradtheprogrammer.com"},{label:"Site",href:"https://conradtheprogrammer.com"}],d=()=>{let e=c.env.isGithubActions,t=c.env.prefix;return e?t:""},f=()=>{let e=d();return(0,n.jsxs)(s,{title:"Conrad The Programmer",children:[(0,n.jsxs)("div",{className:"text-center mb-4",children:[(0,n.jsx)(i(),{width:"460",height:"460",alt:"Avatar",src:"".concat(e,"/assets/new-avatar.jpg"),className:"rounded-full w-32 mb-4 mx-auto"}),(0,n.jsx)("h5",{className:"text-xl font-medium leading-tight mb-2",children:"Conrad The Programmer"}),(0,n.jsx)("p",{className:"text-gray-500",children:"I write code and share my coding journey on these social media platforms"})]}),(0,n.jsx)("ul",{className:"flex flex-col justify-center max-w-sm mx-auto",children:u.map(e=>(0,n.jsxs)("li",{className:"mb-4",children:[(0,n.jsx)("span",{className:"block mb-2 p-1 text-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",children:(0,n.jsx)("a",{href:e.href,rel:"noreferrer",target:"_blank",className:"px-4 py-2 block text-black font-semibold rounded-full bg-white umami--click--".concat(e.label.replaceAll(" ","-")),children:e.label})}),e.description?(0,n.jsx)("p",{className:"text-center text-gray-500",children:e.description}):null]},e.label))})]})};var m=f},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?s=n.concat(s):u=-1,s.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=s.length;t;){for(n=s,s=[];++u<t;)n&&n[u].run();u=-1,t=s.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new m(e,t)),1!==s.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);