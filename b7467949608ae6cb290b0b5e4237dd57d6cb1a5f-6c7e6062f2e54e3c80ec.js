(self.webpackChunkdesigners_italia_it=self.webpackChunkdesigners_italia_it||[]).push([[702],{60395:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(67294)),n=r(a(71932)),c=r(a(32728)),m=a(80970),i=function(e){return l.default.useContext(m.OptionsContext).useAutoGen?l.default.createElement(n.default,e):l.default.createElement(c.default,e)};t.default=i},71932:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(10434)),n=r(a(7071)),c=r(a(67294)),m=r(a(45697)),i=a(71082),s=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],o=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,m=e.crumbSeparator,o=e.disableLinks,u=e.hiddenCrumbs,d=(0,n.default)(e,s);return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return u.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:t+"-"+e.pathname},!o.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(i.Link,(0,l.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},d),r&&t===a.length-1?r:e.crumbLabel)),o.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,l.default)({className:"breadcrumb__link__disabled"},d),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},m))})))))};o.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},o.propTypes={title:m.default.string,crumbSeparator:m.default.oneOfType([m.default.string,m.default.element]),crumbs:m.default.arrayOf(m.default.shape({location:m.default.shape(),pathname:m.default.string.isRequired})).isRequired,crumbLabel:m.default.string,disableLinks:m.default.arrayOf(m.default.string),hiddenCrumbs:m.default.arrayOf(m.default.string)};var u=o;t.default=u},32728:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(10434)),n=r(a(7071)),c=r(a(67294)),m=r(a(45697)),i=a(71082),s=a(80970),o=r(a(61775)),u=["title","location","crumbLabel","crumbSeparator"],d=function(e){var t=e.title,a=e.location,r=e.crumbLabel,m=e.crumbSeparator,d=(0,n.default)(e,u),p=c.default.useContext(s.OptionsContext).usePathPrefix,b=(0,o.default)({location:(0,l.default)({},a,{pathname:p?a.pathname.replace(new RegExp("^"+p),""):a.pathname}),crumbLabel:r,crumbSeparator:m}).crumbs,f=void 0===b?[]:b;return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return c.default.createElement("li",{className:"breadcrumb__item",key:t},c.default.createElement(i.Link,(0,l.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},d),e.crumbLabel),t===f.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};d.defaultProps={title:"",crumbSeparator:" / "},d.propTypes={location:m.default.shape().isRequired,crumbLabel:m.default.string.isRequired,title:m.default.string,crumbSeparator:m.default.string};var p=d;t.default=p},63172:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0;var l=r(a(60395));t.Breadcrumb=l.default;var n=r(a(71932));t.AutoGenCrumb=n.default;var c=a(62623);t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var m=r(a(61775));t.useBreadcrumb=m.default},61775:function(e,t,a){"use strict";var r=a(64836);t.__esModule=!0,t.default=void 0;var l=r(a(67294)),n=a(62623),c=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,c=l.default.useContext(n.BreadcrumbContext),m=c.crumbs,i=c.updateCrumbs;return l.default.useEffect((function(){i({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,i]),{crumbs:m}};t.default=c},83845:function(e,t,a){"use strict";var r=a(63172);t.aG=r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},89351:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(67294),l=a(11150),n=a(3345),c=a(83845),m=function(e){var t=e.pageContext,a=e.crumbLabel,l=t.breadcrumb.crumbs;return r.createElement("div",null,a?r.createElement(c.aG,{crumbs:l,crumbLabel:a,crumbSeparator:" > "}):r.createElement(c.aG,{crumbs:l,crumbSeparator:" > "}))},i=a(15928),s=a(21420),o=a(69694),u=a(32639),d=function(e){var t,a,c=e.pageContext,d=e.name,p=e.crumbLabel,b=e.centered,f=e.column,g=e.specialKangarooComponent,E=(e.reversedMobile,e.tag),v=e.background,h=e.title,N=e.titleTag,x=e.headingLevel,_=e.subtitle,y=e.pretext,w=e.text,C=e.img,k=e.alt,L=e.imgRatio,Z=(e.bgImg,e.bgImgAlt,e.kangaroo),S="hero"+(v?" bg-"+v:"")+(f?" column-hero":"");x?(t="h"+x,a="h"+(x+1)):(t="h1",a="p");var B="texts py-3"+(b?" pb-lg-4":" pb-lg-5"),z="img-wrapper ratio mb-4 mb-lg-3 rounded"+(L?" ratio-"+L:""),O="row g-0"+(b?" justify-content-lg-center":""),I=" col-12 g-0 px-3"+(b?" col-lg-7 offset-lg-0":" ps-lg-5 pe-lg-0 col-lg-7"),j="hero-top px-3 pt-4"+(f?" ":" px-lg-5 "),R="kangaroo-zone"+(e.noBorder?" no-border":"")+(g?" pb-4 pb-md-5 pb-lg-0":""),M="col-12 g-0"+(b?" col-lg-7 offset-lg-0 ":""),P="  col-12 col-md-12 col-lg-4 offset-lg-1 d-flex flex-column px-3 pe-lg-5 pt-4";f&&(I="px-3 col-12 col-md-8",M="col-12 g-0",P="col-12 col-md-3 offset-md-1 d-flex flex-column px-3 pe-lg-5 pt-md-4");var T="primary"===v?"white":"primary",G=c.breadcrumb.location;return r.createElement("div",{className:S},r.createElement("div",{className:"hero-content"},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 g-0"},r.createElement("div",{className:j},p?r.createElement(m,{pageContext:c,crumbLabel:p,title:d}):r.createElement(m,{pageContext:c,title:d})),r.createElement("div",{className:"hero-main"},r.createElement("div",{className:O},r.createElement("div",{className:I},r.createElement("div",{className:B},r.createElement("div",{className:"d-flex align-items-start flex-wrap"},r.createElement(t,{className:"title"},h),N&&r.createElement(o.Z,N)),r.createElement(a,{className:"subtitle fw-normal fs-10"},_),E&&r.createElement(o.Z,E),y&&r.createElement("div",{className:"bottom-text"},r.createElement("div",{className:"pre-text"},y.icon&&r.createElement(i.Z,Object.assign({},y.icon,{addonClasses:"me-2"})),r.createElement("span",{className:"text-uppercase"},y.text)),w&&r.createElement(l.D,null,w))),b&&r.createElement(s.Z,{title:h,url:G,color:T}),Z&&g&&r.createElement("div",{className:""},r.createElement("div",{className:R},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row justify-content-lg-center"},r.createElement("div",{className:M},r.createElement(u.Z,Z))))))),!b&&r.createElement("div",{className:P},C&&r.createElement("div",{className:z},r.createElement(n.Z,{src:C,alt:k,imgClassName:"rounded"})),r.createElement(s.Z,{title:h,url:G,color:T})))))))),Z&&!g&&r.createElement("div",{className:R},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row justify-content-lg-center"},r.createElement("div",{className:M},r.createElement(u.Z,Z))))))}},32639:function(e,t,a){"use strict";var r=a(67294),l=a(15928),n=a(43299),c=a(61707),m=a(23537);t.Z=function(e){var t=e.id,a=e.titleSr,i=e.tagsLabel,s=e.tagsDesignSystemLabel,o=e.icon,u=(e.chips,e.tags),d=e.tagsDesignSystem,p=e.dropdown,b=e.color,f=e.navposition,g=e.personalInfo,E=e.otherInfo,v=e.noPadding,h=e.eventInfo,N="kangaroo px-3"+(v?" ":" px-lg-5"),x="text-uppercase small "+(b?" text-"+b:"");return r.createElement("section",{className:N,"aria-labelledby":t},a&&r.createElement("h2",{className:"visually-hidden",id:t},a),r.createElement("div",{className:"kangaroo-wrapper py-4 d-lg-flex justify-content-between align-items-top"},r.createElement("div",{className:"left-zone"},f&&r.createElement("div",{className:"navposition-wrapper"},r.createElement(m.Z,f)),g&&r.createElement("div",{className:"personal-info-wrapper"},r.createElement(m.Z,g)),h&&r.createElement("div",{className:"event-info-wrapper"},r.createElement(m.Z,h)),E&&r.createElement("div",{className:"other-info-wrapper"},r.createElement(m.Z,E)),i&&u&&u.length>0&&r.createElement("div",{className:"pills-wrapper d-md-flex align-items-start pt-3 pt-md-2"},r.createElement("div",{className:"d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0"},r.createElement(l.Z,Object.assign({},o,{addonClasses:"me-3"})),r.createElement("span",{className:x},r.createElement("strong",null,i))),r.createElement("div",{className:"chips ms-md-3 mb-2 mb-lg-0"},u.map((function(e,t){return r.createElement(n.Z,{key:"chip-"+t,label:e,size:"lg",color:"primary"})})))),s&&d&&d.length>0&&r.createElement("div",{className:"pills-wrapper d-md-flex align-items-start"},r.createElement("div",{className:"d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0"},r.createElement(l.Z,Object.assign({},o,{addonClasses:"me-3"})),r.createElement("span",{className:x},r.createElement("strong",null,s))),r.createElement("div",{className:"chips ms-md-3 mb-2 mb-lg-0"},d.map((function(e,t){return r.createElement(n.Z,{key:"chip-"+t,label:e,size:"lg",color:"primary",path:"design-system/componenti/utili-per"})}))))),p&&r.createElement("div",{className:"right-zone col-12 col-lg-4 d-flex flex-lg-row-reverse pt-3 pb-4"},r.createElement("div",{className:"dropdwon-zone mt-4 mt-lg-0"},r.createElement(c.Z,p)))))}},23537:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(67294),l=a(11150),n=a(15928),c=a(54904),m=a(97771),i=a(9642),s=function(e){var t=e.label,a=e.children,l={icon:"sprites.svg#it-info-circle",size:"sm",color:"primary",addonClasses:"align-middle",ariaLabel:" Informazioni"},c=(0,r.useRef)();return(0,r.useEffect)((function(){new i.u(c.current.children[0])}),[]),r.createElement("span",{ref:c},r.createElement(m.Z,{addonStyle:"btn p-0 shadow-none",title:t},r.createElement(n.Z,l),a))},o=function(e){var t,a=e.items,m="nav-position"+(e.footerVersion?" py-5 border-top neutral-1-border-color-a3 border-end-0 border-start-0 border-bottom-0":"");return a&&(t=a.map((function(e,t){return e.icon.addonClasses="flex-shrink-0 me-3",e.icon.hidden=!0,r.createElement("div",{key:"linkItems-"+t},r.createElement("div",{className:"d-inline-flex align-items-center me-lg-5 my-2 small"},r.createElement(n.Z,e.icon),r.createElement("span",{className:"text-uppercase text-secondary me-2"},r.createElement("strong",null,e.title)),e.tooltip&&r.createElement(s,{label:e.tooltip}),r.createElement("div",{className:"ms-3"},e.url?r.createElement(c.Z,{to:e.url,target:e.blank?"_blank":void 0},e.label,e.screenReaderText&&r.createElement("span",{className:"visually-hidden"},e.screenReaderText)):r.createElement("span",null,e.label))),r.createElement("div",null,e.text&&r.createElement(l.D,null,e.text)))}))),r.createElement("div",{className:m},r.createElement("div",{className:"container-xxl"},r.createElement("div",{className:"row"},t)))}},64049:function(e,t,a){"use strict";a.d(t,{p:function(){return n}});var r=a(67294),l=a(71082),n=function(e){var t=e.title,a=e.description,n=e.image,c=e.twitterImage,m=e.canonical,i=e.pathname,s=e.lang,o=e.children,u=(0,l.useStaticQuery)("3862798100").site.siteMetadata,d=u.siteName,p=u.title,b=u.lang,f=u.author,g=u.description,E=u.image,v=u.twitterImage,h=u.siteUrl,N={siteName:d,title:t||p,lang:s||b,author:f,canonical:m,description:a||g,image:n||E,siteUrl:h,url:""+h+(i||""),twitterUsername:u.twitterUsername,twitterImage:c||v,twitterCreator:u.twitterCreator,twitterSite:u.twitterSite,themeColor:u.themeColor};return r.createElement(r.Fragment,null,r.createElement("title",null,N.title),r.createElement("meta",{name:"description",content:N.description}),r.createElement("meta",{name:"author",content:N.author}),N.canonical&&r.createElement("link",{rel:"canonical",href:N.canonical}),r.createElement("meta",{property:"og:title",content:N.title}),r.createElement("meta",{property:"og:locale",content:N.lang}),r.createElement("meta",{property:"og:description",content:N.description}),r.createElement("meta",{property:"og:url",content:N.url}),r.createElement("meta",{property:"og:siteName",content:N.siteName}),r.createElement("meta",{property:"og:image",content:N.image}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:N.title}),r.createElement("meta",{name:"twitter:image",content:N.twitterImage}),r.createElement("meta",{name:"twitter:site",content:N.twitterSite}),r.createElement("meta",{name:"twitter:creator",content:N.twitterCreator}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-32x32.png",sizes:"32x32"}),r.createElement("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-16x16.png",sizes:"16x16"}),r.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),r.createElement("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg"}),r.createElement("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),r.createElement("meta",{name:"apple-mobile-web-app-title",content:N.siteName}),r.createElement("meta",{name:"application-name",content:N.siteName}),r.createElement("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),r.createElement("meta",{name:"theme-color",content:N.themeColor}),o)}},21420:function(e,t,a){"use strict";var r=a(67294),l=a(61707);t.Z=function(e){var t=e.title,a=e.url,n=e.color,c=void 0===n?"primary":n,m=e.small,i={button:{icon:{icon:"sprites.svg#it-more-items",size:"sm",color:c,addonClasses:"ms-3"}},list:{isShare:!0}};return void 0!==m&&m?(i.button.addonStyle="icon-only-drop",i.button.ariaLabel="Condividi"):(i.button.addonStyle="btn-share-hero btn-dropdown text-"+c+" mb-5 mt-lg-4 ms-auto",i.button.label="Condividi"),r.createElement(l.Z,Object.assign({},i,{shareTitle:t,shareUrl:a}))}},69694:function(e,t,a){"use strict";var r=a(67294),l=a(54904);t.Z=function(e){var t=e.url,a=e.children,n=e.label,c=e.addonClasses,m=e.screenReaderText;n&&(a=n);var i="tag"+(c?" "+c:"");return t?r.createElement(l.Z,{to:t,className:i},m&&r.createElement("span",{className:"visually-hidden"},m),a):r.createElement("span",{className:i},m&&r.createElement("span",{className:"visually-hidden"},m),a)}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=b7467949608ae6cb290b0b5e4237dd57d6cb1a5f-6c7e6062f2e54e3c80ec.js.map