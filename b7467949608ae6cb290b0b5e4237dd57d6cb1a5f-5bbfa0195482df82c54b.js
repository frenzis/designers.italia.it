(self.webpackChunkdesigners_italia_it=self.webpackChunkdesigners_italia_it||[]).push([[702],{60395:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(67294)),n=r(a(71932)),c=r(a(32728)),m=a(80970),s=function(e){return l.default.useContext(m.OptionsContext).useAutoGen?l.default.createElement(n.default,e):l.default.createElement(c.default,e)};t.default=s},71932:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(10434)),n=r(a(7071)),c=r(a(67294)),m=r(a(45697)),s=a(84854),i=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],o=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,m=e.crumbSeparator,o=e.disableLinks,u=e.hiddenCrumbs,d=(0,n.default)(e,i);return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return u.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:t+"-"+e.pathname},!o.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(s.Link,(0,l.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},d),r&&t===a.length-1?r:e.crumbLabel)),o.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,l.default)({className:"breadcrumb__link__disabled"},d),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},m))})))))};o.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},o.propTypes={title:m.default.string,crumbSeparator:m.default.oneOfType([m.default.string,m.default.element]),crumbs:m.default.arrayOf(m.default.shape({location:m.default.shape(),pathname:m.default.string.isRequired})).isRequired,crumbLabel:m.default.string,disableLinks:m.default.arrayOf(m.default.string),hiddenCrumbs:m.default.arrayOf(m.default.string)};var u=o;t.default=u},32728:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(10434)),n=r(a(7071)),c=r(a(67294)),m=r(a(45697)),s=a(84854),i=a(80970),o=r(a(61775)),u=["title","location","crumbLabel","crumbSeparator"],d=function(e){var t=e.title,a=e.location,r=e.crumbLabel,m=e.crumbSeparator,d=(0,n.default)(e,u),p=c.default.useContext(i.OptionsContext).usePathPrefix,b=(0,o.default)({location:(0,l.default)({},a,{pathname:p?a.pathname.replace(new RegExp("^"+p),""):a.pathname}),crumbLabel:r,crumbSeparator:m}).crumbs,f=void 0===b?[]:b;return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return c.default.createElement("li",{className:"breadcrumb__item",key:t},c.default.createElement(s.Link,(0,l.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},d),e.crumbLabel),t===f.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};d.defaultProps={title:"",crumbSeparator:" / "},d.propTypes={location:m.default.shape().isRequired,crumbLabel:m.default.string.isRequired,title:m.default.string,crumbSeparator:m.default.string};var p=d;t.default=p},63172:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0;var l=r(a(60395));t.Breadcrumb=l.default;var n=r(a(71932));t.AutoGenCrumb=n.default;var c=a(62623);t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var m=r(a(61775));t.useBreadcrumb=m.default},61775:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(67294)),n=a(62623),c=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,c=l.default.useContext(n.BreadcrumbContext),m=c.crumbs,s=c.updateCrumbs;return l.default.useEffect((function(){s({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,s]),{crumbs:m}};t.default=c},83845:function(e,t,a){"use strict";var r=a(63172);t.aG=r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},89351:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(67294),l=a(29639),n=a(3345),c=a(83845);var m=function(e){let{pageContext:t,crumbLabel:a}=e;const{breadcrumb:{crumbs:l}}=t;return r.createElement("div",null,a?r.createElement(c.aG,{crumbs:l,crumbLabel:a,crumbSeparator:" > "}):r.createElement(c.aG,{crumbs:l,crumbSeparator:" > "}))},s=a(15928),i=a(21420),o=a(69694),u=a(32639);var d=function(e){let{pageContext:t,name:a,crumbLabel:c,centered:d,column:p,specialKangarooComponent:b,reversedMobile:f,tag:g,background:E,title:v,titleTag:h,headingLevel:N,subtitle:x,pretext:_,text:y,img:w,alt:C,imgRatio:k,bgImg:L,bgImgAlt:Z,kangaroo:S,noBorder:B}=e;const z="hero"+(E?" bg-"+E:"")+(p?" column-hero":"");let O,I;N?(O="h"+N,I="h"+(N+1)):(O="h1",I="p");const j="texts py-3"+(d?" pb-lg-4":" pb-lg-5"),R="img-wrapper ratio mb-4 mb-lg-3 rounded"+(k?" ratio-"+k:""),M="row g-0"+(d?" justify-content-lg-center":"");let P=" col-12 g-0 px-3"+(d?" col-lg-7 offset-lg-0":" ps-lg-5 pe-lg-0 col-lg-7");const T="hero-top px-3 pt-4"+(p?" ":" px-lg-5 "),G="kangaroo-zone"+(B?" no-border":"")+(b?" pb-4 pb-md-5 pb-lg-0":"");let U="col-12 g-0"+(d?" col-lg-7 offset-lg-0 ":""),q="  col-12 col-md-12 col-lg-4 offset-lg-1 d-flex flex-column px-3 pe-lg-5 pt-4";p&&(P="px-3 col-12 col-md-8",U="col-12 g-0",q="col-12 col-md-3 offset-md-1 d-flex flex-column px-3 pe-lg-5 pt-md-4");const A="primary"===E?"white":"primary",D=t.breadcrumb.location;return r.createElement("div",{className:z},r.createElement("div",{className:"hero-content"},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 g-0"},r.createElement("div",{className:T},c?r.createElement(m,{pageContext:t,crumbLabel:c,title:a}):r.createElement(m,{pageContext:t,title:a})),r.createElement("div",{className:"hero-main"},r.createElement("div",{className:M},r.createElement("div",{className:P},r.createElement("div",{className:j},r.createElement("div",{className:"d-flex align-items-start flex-wrap"},r.createElement(O,{className:"title"},v),h&&r.createElement(o.Z,h)),r.createElement(I,{className:"subtitle fw-normal fs-10"},x),g&&r.createElement(o.Z,g),_&&r.createElement("div",{className:"bottom-text"},r.createElement("div",{className:"pre-text"},_.icon&&r.createElement(s.Z,Object.assign({},_.icon,{addonClasses:"me-2"})),r.createElement("span",{className:"text-uppercase"},_.text)),y&&r.createElement(l.D,null,y))),d&&r.createElement(i.Z,{title:v,url:D,color:A}),S&&b&&r.createElement("div",{className:""},r.createElement("div",{className:G},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row justify-content-lg-center"},r.createElement("div",{className:U},r.createElement(u.Z,S))))))),!d&&r.createElement("div",{className:q},w&&r.createElement("div",{className:R},r.createElement(n.Z,{src:w,alt:C,imgClassName:"rounded"})),r.createElement(i.Z,{title:v,url:D,color:A})))))))),S&&!b&&r.createElement("div",{className:G},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row justify-content-lg-center"},r.createElement("div",{className:U},r.createElement(u.Z,S))))))}},32639:function(e,t,a){"use strict";var r=a(67294),l=a(15928),n=a(43299),c=a(61707),m=a(23537);t.Z=function(e){let{id:t,titleSr:a,tagsLabel:s,tagsDesignSystemLabel:i,icon:o,chips:u,tags:d,tagsDesignSystem:p,dropdown:b,color:f,navposition:g,personalInfo:E,otherInfo:v,noPadding:h,eventInfo:N}=e;const x="kangaroo px-3"+(h?" ":" px-lg-5"),_="text-uppercase small "+(f?" text-"+f:"");return r.createElement("section",{className:x,"aria-labelledby":t},a&&r.createElement("h2",{className:"visually-hidden",id:t},a),r.createElement("div",{className:"kangaroo-wrapper py-4 d-lg-flex justify-content-between align-items-top"},r.createElement("div",{className:"left-zone"},g&&r.createElement("div",{className:"navposition-wrapper"},r.createElement(m.Z,g)),E&&r.createElement("div",{className:"personal-info-wrapper"},r.createElement(m.Z,E)),N&&r.createElement("div",{className:"event-info-wrapper"},r.createElement(m.Z,N)),v&&r.createElement("div",{className:"other-info-wrapper"},r.createElement(m.Z,v)),s&&d&&d.length>0&&r.createElement("div",{className:"pills-wrapper d-md-flex align-items-start pt-3 pt-md-2"},r.createElement("div",{className:"d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0"},r.createElement(l.Z,Object.assign({},o,{addonClasses:"me-3"})),r.createElement("span",{className:_},r.createElement("strong",null,s))),r.createElement("div",{className:"chips ms-md-3 mb-2 mb-lg-0"},d.map(((e,t)=>r.createElement(n.Z,{key:"chip-"+t,label:e,size:"lg",color:"primary"}))))),i&&p&&p.length>0&&r.createElement("div",{className:"pills-wrapper d-md-flex align-items-start"},r.createElement("div",{className:"d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0"},r.createElement(l.Z,Object.assign({},o,{addonClasses:"me-3"})),r.createElement("span",{className:_},r.createElement("strong",null,i))),r.createElement("div",{className:"chips ms-md-3 mb-2 mb-lg-0"},p.map(((e,t)=>r.createElement(n.Z,{key:"chip-"+t,label:e,size:"lg",color:"primary",path:"design-system/componenti/utili-per"})))))),b&&r.createElement("div",{className:"right-zone col-12 col-lg-4 d-flex flex-lg-row-reverse pt-3 pb-4"},r.createElement("div",{className:"dropdwon-zone mt-4 mt-lg-0"},r.createElement(c.Z,b)))))}},23537:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(67294),l=a(29639),n=a(15928),c=a(54904),m=a(33545),s=a(97771);var i=function(e){let{label:t,children:a}=e;const l={icon:"sprites.svg#it-info-circle",size:"sm",color:"primary",addonClasses:"align-middle",ariaLabel:" Informazioni"},c=(0,r.useRef)();return(0,r.useEffect)((()=>{new m.u(c.current.children[0])}),[]),r.createElement("span",{ref:c},r.createElement(s.Z,{addonStyle:"btn p-0 shadow-none",title:t},r.createElement(n.Z,l),a))};var o=function(e){let{items:t,footerVersion:a}=e;const m="nav-position"+(a?" py-5 border-top neutral-1-border-color-a3 border-end-0 border-start-0 border-bottom-0":"");let s;return t&&(s=t.map(((e,t)=>(e.icon.addonClasses="flex-shrink-0 me-3",e.icon.hidden=!0,r.createElement("div",{key:"linkItems-"+t},r.createElement("div",{className:"d-inline-flex align-items-center me-lg-5 my-2 small"},r.createElement(n.Z,e.icon),r.createElement("span",{className:"text-uppercase text-secondary me-2"},r.createElement("strong",null,e.title)),e.tooltip&&r.createElement(i,{label:e.tooltip}),r.createElement("div",{className:"ms-3"},e.url?r.createElement(c.Z,{to:e.url,target:e.blank?"_blank":void 0,rel:e.blank?"noreferrer":void 0},e.label,e.screenReaderText&&r.createElement("span",{className:"visually-hidden"},e.screenReaderText)):r.createElement("span",null,e.label))),r.createElement("div",null,e.text&&r.createElement(l.D,null,e.text))))))),r.createElement("div",{className:m},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row"},s)))}},64049:function(e,t,a){"use strict";a.d(t,{p:function(){return c}});var r=a(67294),l=a(84854);const n=()=>(0,l.useStaticQuery)("3862798100").site.siteMetadata;function c(e){let{title:t,description:a,image:l,twitterImage:c,canonical:m,pathname:s,lang:i,children:o}=e;const{siteName:u,title:d,lang:p,author:b,description:f,image:g,twitterImage:E,siteUrl:v,twitterUsername:h,twitterCreator:N,twitterSite:x,themeColor:_}=n(),y={siteName:u,title:t||d,lang:i||p,author:b,canonical:m,description:a||f,image:l||g,siteUrl:v,url:""+v+(s||""),twitterUsername:h,twitterImage:c||E,twitterCreator:N,twitterSite:x,themeColor:_};return r.createElement(r.Fragment,null,r.createElement("title",null,y.title),r.createElement("meta",{name:"description",content:y.description}),r.createElement("meta",{name:"author",content:y.author}),y.canonical&&r.createElement("link",{rel:"canonical",href:y.canonical}),r.createElement("meta",{property:"og:title",content:y.title}),r.createElement("meta",{property:"og:locale",content:y.lang}),r.createElement("meta",{property:"og:description",content:y.description}),r.createElement("meta",{property:"og:url",content:y.url}),r.createElement("meta",{property:"og:siteName",content:y.siteName}),r.createElement("meta",{property:"og:image",content:y.image}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:y.title}),r.createElement("meta",{name:"twitter:image",content:y.twitterImage}),r.createElement("meta",{name:"twitter:site",content:y.twitterSite}),r.createElement("meta",{name:"twitter:creator",content:y.twitterCreator}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-32x32.png",sizes:"32x32"}),r.createElement("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-16x16.png",sizes:"16x16"}),r.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),r.createElement("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg"}),r.createElement("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),r.createElement("meta",{name:"apple-mobile-web-app-title",content:y.siteName}),r.createElement("meta",{name:"application-name",content:y.siteName}),r.createElement("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),r.createElement("meta",{name:"theme-color",content:y.themeColor}),o)}},21420:function(e,t,a){"use strict";var r=a(67294),l=a(61707);t.Z=function(e){let{title:t,url:a,color:n="primary",small:c=!1}=e;const m={button:{icon:{icon:"sprites.svg#it-more-items",size:"sm",color:n,addonClasses:"ms-3"}},list:{isShare:!0}};return c?(m.button.addonStyle="icon-only-drop",m.button.ariaLabel="Condividi"):(m.button.addonStyle="btn-share-hero btn-dropdown text-"+n+" mb-5 mt-lg-4 ms-auto",m.button.label="Condividi"),r.createElement(l.Z,Object.assign({},m,{shareTitle:t,shareUrl:a}))}},69694:function(e,t,a){"use strict";var r=a(67294),l=a(54904);t.Z=function(e){let{url:t,children:a,label:n,addonClasses:c,screenReaderText:m}=e;n&&(a=n);const s="tag"+(c?" "+c:"");return t?r.createElement(l.Z,{to:t,className:s},m&&r.createElement("span",{className:"visually-hidden"},m),a):r.createElement("span",{className:s},m&&r.createElement("span",{className:"visually-hidden"},m),a)}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=b7467949608ae6cb290b0b5e4237dd57d6cb1a5f-5bbfa0195482df82c54b.js.map