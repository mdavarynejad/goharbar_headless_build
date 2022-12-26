"use strict";(self.webpackChunkheadless_gatsby_multilang=self.webpackChunkheadless_gatsby_multilang||[]).push([[990],{97007:function(e,n,t){var r,i;t.d(n,{g8:function(){return x},Lq:function(){return L},b2:function(){return I},J$:function(){return A},qk:function(){return N},Xy:function(){return w},HJ:function(){return T},C$:function(){return S},u$:function(){return R},nq:function(){return j},OD:function(){return k},RF:function(){return C},C_:function(){return y},dn:function(){return b},L9:function(){return q},UZ:function(){return O}});var o="blockquote",a="block",l="code",d="heading",c="inlineItem",s="itemLink",u="link",p="listItem",f="list",g="paragraph",h="root",m="span",v="thematicBreak";(r={})[o]=[g],r[a]=[],r[l]=[],r[d]="inlineNodes",r[c]=[],r[s]="inlineNodes",r[u]="inlineNodes",r[p]=[g,f],r[f]=[p],r[g]="inlineNodes",r[h]=[o,l,f,g,d,a,v],r[m]=[],r[v]=[],(i={})[o]=["children","attribution"],i[a]=["item"],i[l]=["language","highlight","code"],i[d]=["level","children","style"],i[c]=["item"],i[s]=["item","children","meta"],i[u]=["url","children","meta"],i[p]=["children"],i[f]=["style","children"],i[g]=["children","style"],i[h]=["children"],i[m]=["value","marks"],i[v]=[];function x(e){return"children"in e}function w(e){return e.type===d}function b(e){return e.type===m}function y(e){return e.type===h}function C(e){return e.type===g}function j(e){return e.type===f}function k(e){return e.type===p}function I(e){return e.type===o}function L(e){return e.type===a}function A(e){return e.type===l}function R(e){return e.type===u}function S(e){return e.type===s}function T(e){return e.type===c}function O(e){return e.type===v}function q(e){return e&&"value"in e&&N(e.value)}function N(e){return e&&"schema"in e&&"document"in e}},76954:function(e,n,t){t.d(n,{su:function(){return c},sY:function(){return p},SZ:function(){return s}});var r=t(97007);function i(e){var n=[];return o(e,n),n}function o(e,n){for(var t=0;t<e.length;t++){var r=e[t];Array.isArray(r)?o(r,n):n.push(r)}}var a,l=(a=function(e,n){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},a(e,n)},function(e,n){function t(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),d=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],a=0,l=o.length;a<l;a++,i++)r[i]=o[a];return r},c=function(e){function n(t,r){var i=e.call(this,t)||this;return i.node=r,Object.setPrototypeOf(i,n.prototype),i}return l(n,e),n}(Error),s=function(e,n){return{appliable:e,apply:function(e){return n(e)}}};function u(e,n,t,o,a){var l=(0,r.g8)(n)?i(n.children.map((function(t,r){return u(e,t,"t-"+r,d([n],o),a)})).filter((function(e){return!!e}))):void 0,s=a.find((function(e){return e.appliable(n)}));if(s)return s.apply({adapter:e,node:n,children:l,key:t,ancestors:o});throw new c("Don't know how to render a node with type \""+n.type+'". Please specify a custom renderRule for it!',n)}function p(e,n,t){return n?u(e,(0,r.L9)(n)?n.value.document:(0,r.qk)(n)?n.document:n,"t-0",[],t):null}},10830:function(e,n,t){t.d(n,{rZ:function(){return p}});var r=t(76954),i=t(97007),o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)},a=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],a=0,l=o.length;a<l;a++,i++)r[i]=o[a];return r};var l=function(e){var n=e.meta,t={};return n.forEach((function(e){["target","title","rel"].includes(e.id)&&(t[e.id]=e.value)})),t};var d=t(67294),c=function(e,n,t){if(t||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))},s={renderNode:d.createElement,renderFragment:function(e,n){return d.createElement(d.Fragment,{key:n},e)},renderText:function(e,n){return e}};function u(e,n){return(0,d.isValidElement)(e)&&null===e.key?(0,d.cloneElement)(e,{key:n}):e}function p(e){var n=e.data,t=e.renderInlineRecord,p=e.renderLinkToRecord,f=e.renderBlock,g=e.renderText,h=e.renderNode,m=e.renderFragment,v=e.customMarkRules,x=e.customRules,w=e.customNodeRules,b=e.metaTransformer,y=function(e,n){var t,d,c=n.metaTransformer||l;return(0,r.sY)(n.adapter,e,a(n.customNodeRules||[],[(0,r.SZ)(i.C_,(function(e){var n=e.adapter.renderFragment,t=e.key;return n(e.children,t)})),(0,r.SZ)(i.RF,(function(e){return(0,e.adapter.renderNode)("p",{key:e.key},e.children)})),(0,r.SZ)(i.nq,(function(e){var n=e.adapter.renderNode,t=e.node,r=e.key,i=e.children;return n("bulleted"===t.style?"ul":"ol",{key:r},i)})),(0,r.SZ)(i.OD,(function(e){return(0,e.adapter.renderNode)("li",{key:e.key},e.children)})),(0,r.SZ)(i.b2,(function(e){var n=e.adapter.renderNode,t=e.key,r=e.node,i=e.children,o=r.attribution?a(i||[],[n("footer",{key:"footer"},r.attribution)]):i;return n("blockquote",{key:t},o)})),(0,r.SZ)(i.J$,(function(e){var n=e.adapter,t=n.renderNode,r=n.renderText,i=e.key,o=e.node;return t("pre",{key:i,"data-language":o.language},t("code",null,r(o.code)))})),(0,r.SZ)(i.u$,(function(e){var n=e.adapter.renderNode,t=e.key,r=e.children,i=e.node,a=i.meta?c({node:i,meta:i.meta}):{};return n("a",o(o({},a||{}),{key:t,href:i.url}),r)})),(0,r.SZ)(i.UZ,(function(e){return(0,e.adapter.renderNode)("hr",{key:e.key})})),(0,r.SZ)(i.Xy,(function(e){var n=e.node,t=e.adapter.renderNode,r=e.children,i=e.key;return t("h"+n.level,{key:i},r)})),(t={customMarkRules:n.customMarkRules||[]},d=t.customMarkRules,(0,r.SZ)(i.dn,(function(e){var n=e.adapter,t=e.key;return(e.node.marks||[]).reduce((function(e,r){if(e){var i=d.find((function(e){return e.appliable(r)}));return i?i.apply({adapter:n,key:t,mark:r,children:e}):n.renderNode(function(e){switch(e){case"emphasis":return"em";case"underline":return"u";case"strikethrough":return"del";case"highlight":return"mark";default:return e}}(r),{key:t},e)}}),function(e){var n=e.node,t=e.key,r=e.adapter,i=r.renderNode,o=r.renderText,a=r.renderFragment,l=n.value.split(/\n/);return 0===l.length?o(n.value,t):a(l.slice(1).reduce((function(e,n,r){return e.concat([i("br",{key:t+"-br-"+r}),o(n,t+"-line-"+r)])}),[o(l[0],t+"-line-first")]),t)}(e))})))]))}(n,{adapter:{renderText:g||s.renderText,renderNode:h||s.renderNode,renderFragment:m||s.renderFragment},metaTransformer:b,customMarkRules:v,customNodeRules:c([(0,r.SZ)(i.HJ,(function(e){var o=e.node,a=e.key;if(!t)throw new r.su("The Structured Text document contains an 'inlineItem' node, but no 'renderInlineRecord' prop is specified!",o);if(!(0,i.L9)(n)||!n.links)throw new r.su("The document contains an 'itemLink' node, but the passed data prop is not a Structured Text GraphQL response, or data.links is not present!",o);var l=n.links.find((function(e){return e.id===o.item}));if(!l)throw new r.su("The Structured Text document contains an 'inlineItem' node, but cannot find a record with ID ".concat(o.item," inside data.links!"),o);return u(t({record:l}),a)})),(0,r.SZ)(i.C$,(function(e){var t=e.node,o=e.key,a=e.children;if(!p)throw new r.su("The Structured Text document contains an 'itemLink' node, but no 'renderLinkToRecord' prop is specified!",t);if(!(0,i.L9)(n)||!n.links)throw new r.su("The document contains an 'itemLink' node, but the passed data prop is not a Structured Text GraphQL response, or data.links is not present!",t);var d=n.links.find((function(e){return e.id===t.item}));if(!d)throw new r.su("The Structured Text document contains an 'itemLink' node, but cannot find a record with ID ".concat(t.item," inside data.links!"),t);return u(p({record:d,children:a,transformedMeta:t.meta?(b||l)({node:t,meta:t.meta}):null}),o)})),(0,r.SZ)(i.Lq,(function(e){var t=e.node,o=e.key;if(!f)throw new r.su("The Structured Text document contains a 'block' node, but no 'renderBlock' prop is specified!",t);if(!(0,i.L9)(n)||!n.blocks)throw new r.su("The document contains an 'block' node, but the passed data prop is not a Structured Text GraphQL response, or data.blocks is not present!",t);var a=n.blocks.find((function(e){return e.id===t.item}));if(!a)throw new r.su("The Structured Text document contains a 'block' node, but cannot find a record with ID ".concat(t.item," inside data.blocks!"),t);return u(f({record:a}),o)}))],w||x||[],!0)});return"string"==typeof y?d.createElement(d.Fragment,null,y):y||null}},85207:function(e,n,t){t.d(n,{I:function(){return a},R:function(){return o}});var r=t(67294),i=t(85893),o=(0,r.createContext)({}),a=function(e){var n=e.children,t=e.pageData,a=t.locale,l=t.id,d=(0,r.useState)(a)[0];return(0,i.jsx)(o.Provider,{value:{pageLocale:d,id:l},children:n})}},93158:function(e,n,t){t.d(n,{F:function(){return he}});var r=t(71082),i=t(35414),o=t(29499),a=t(13921),l=t(92992),d=t(84301),c=t(85893),s=function(e){var n=e.seoTitle,t=e.seoDescription,s=e.seoImage,u=(0,r.K2)("3415878905").allDatoCmsSeoAndPwa.seoAndPwaNodes,p=(0,o.useLocation)().href,f=(0,d.U)().pageLocale,g=(0,a.n)().defaultLocale,h=(0,l.s)().isRtl,m=u.find((function(e){return e.locale===f})),v=m.siteName,x=m.separator,w=m.fallbackDescription,b=m.defaultOgImage.url,y=m.pwaThemeColor.themeHexColor,C=n?n+" "+x+" "+v:v,j=[{properties:["og:title","twitter:title"],content:C},{properties:["og:description","twitter:description"],content:t||w},{properties:["og:image","twitter:image"],content:s||b},{properties:["og:url","twitter:url"],content:p}];return(0,c.jsxs)(i.q,{children:[(0,c.jsx)("html",{lang:f,dir:h?"rtl":"ltr"}),(0,c.jsx)("meta",{name:"theme-color",content:y}),(0,c.jsx)("link",{rel:"manifest",href:f===g?"/manifest.webmanifest":"/manifest_"+f+".webmanifest",crossOrigin:"anonymous"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon-32.png",type:"image/png"}),["192","512"].map((function(e){return(0,c.jsx)("link",{rel:"apple-touch-icon",sizes:e+"x"+e,href:"/images/icon-"+e+".png"},"icon-"+e)})),(0,c.jsx)("title",{children:C}),(0,c.jsx)("meta",{name:"description",content:t||w}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),j.map((function(e){var n=e.properties,t=e.content;return n.map((function(e){return(0,c.jsx)("meta",{property:e,content:t},e)}))}))]})},u=t(23469),p=t(67294),f=t(85207),g=t(83494),h=g.default.nav.withConfig({componentId:"sc-nou7mg-0"})(["display:grid;"]),m=g.default.ul.withConfig({componentId:"sc-nou7mg-1"})(["display:grid;align-items:center;grid-auto-flow:column;column-gap:var(--gapRegular);@media (max-width:768px){column-gap:0;}"]),v=g.default.li.withConfig({componentId:"sc-nou7mg-2"})(["& span{cursor:not-allowed;color:var(--primaryColor);}"]),x=(0,g.default)(r.rU).withConfig({componentId:"sc-nou7mg-3"})(["font-weight:600;color:var(--baseTextColor);transition:color 0.2s linear;text-transform:uppercase;@media (hover:hover){&:hover{color:var(--primaryColor);}}@media (max-width:768px){padding:var(--gapSmall);}",""],(function(e){return e.isActive&&(0,g.css)(["color:var(--primaryColor);@media (hover:hover){&:hover{color:var(--primaryColor);}}"])})),w=function(){var e=(0,r.K2)("4122876240"),n=e.allSitePage.pageNodes,t=e.allDatoCmsBlogRoot.blogRootNodes,i=function(){var e=(0,p.useContext)(f.R).id;if(!e)throw new Error("It seems that the originalId field has not been exported to the pageContext object while creating pages in gatsby-node.js");return{pageId:e}}(),o=i.pageId,l=(0,d.U)().pageLocale,s=(0,a.n)(),g=s.defaultLocale,w=s.locales,b=function(e){var r,i=n.find((function(n){var t=n.pageContext,r=t.id,i=t.locale;return r===o&&i===e}));if(!(r=null==i?void 0:i.path)){var a=t.find((function(n){return n.locale===e})),l=a.slug,d=a.locale;r=d===g?"/"+l:"/"+d+"/"+l}return r};return(0,c.jsx)(h,{children:(0,c.jsx)(m,{children:w.map((function(e){return e===l?(0,c.jsx)(v,{children:(0,c.jsx)(x,{isActive:!0,as:"span",children:(0,u.pD)(e)})},e):(0,c.jsx)(v,{children:(0,c.jsx)(x,{to:b(e),onClick:function(){return(0,u.CS)(e)},children:(0,u.pD)(e)})},e)}))})})},b=t(12862),y=t(22271),C=g.default.li.withConfig({componentId:"sc-oc2yc-0"})(["position:relative;display:flex;align-items:center;"]),j=g.default.button.withConfig({componentId:"sc-oc2yc-1"})(["cursor:pointer;border:none;background:none;font-weight:600;display:grid;column-gap:var(--gapSmall);grid-template-columns:min-content auto;align-items:center;transition:color ",";color:",";"],y.tA,(function(e){return e.isDropdownOpen?"var(--primaryColor)":"var(--headingsColor)"})),k=g.default.span.withConfig({componentId:"sc-oc2yc-2"})(["font-size:var(--baseXL);display:flex;max-height:0;pointer-events:none;color:",";align-items:center;transition:transform ",",color ",";transform:",";"],(function(e){return e.isDropdownOpen&&"var(--primaryColor)"}),y.tA,y.tA,(function(e){return e.isDropdownOpen?"scaleX(-1) rotate(-90deg)":"rotate(90deg)"})),I=g.default.ul.withConfig({componentId:"sc-oc2yc-3"})(["position:absolute;top:2.5em;z-index:2;right:0;min-width:220px;display:grid;grid-auto-flow:row;padding:var(--gapSmall) 0;background:var(--backgroundColorAlt);border-radius:20px;border:var(--borderRegular) solid var(--dividerColor);height:auto;",""],(function(e){switch(e.isDropdownOpen){case null:return(0,g.css)(["display:none;"]);case!1:return(0,g.css)(["animation:"," "," forwards;"],y.xy,y.tA);case!0:return(0,g.css)(["animation:"," "," forwards;"],y.ft,y.tA);default:return null}})),L="var(--gapSmall) var(--gapRegular)",A=g.default.li.withConfig({componentId:"sc-oc2yc-4"})(["display:flex;width:100%;"]),R=(0,g.default)(b.C).withConfig({componentId:"sc-oc2yc-5"})(["padding:",";width:100%;"],L),S=(0,g.default)(b.C).withConfig({componentId:"sc-oc2yc-6"})(["margin-top:var(--gapSmall);color:var(--primaryColor) !important;font-size:var(--baseS);padding:",";@media (hover:hover){&:hover{text-decoration:underline;}}"],L),T="categories_list",O=function(e){var n=e.categoryNodes,t=e.categoryArchiveRecordId,r=e.seeAllCategoriesText,i=e.menuItemLabel,o=(0,p.useState)(null),a=o[0],l=o[1],d=(0,p.useRef)(),s=(0,p.useRef)(),u=(0,p.useRef)([]),f=(0,p.useRef)(),g=function(e){var n=e.target===d.current,t=e.target===s.current,r=e.target===f.current,i=u.current.some((function(n){return e.target===n}));n||t||r||i||l(!1)};return(0,p.useEffect)((function(){return a&&document.addEventListener("click",g),function(){return document.removeEventListener("click",g)}}),[a]),(0,c.jsxs)(C,{children:[(0,c.jsxs)(j,{ref:d,"aria-label":i,"aria-controls":T,isDropdownOpen:a,"aria-expanded":a||!1,onClick:function(){return l(!a)},children:[i,(0,c.jsx)(k,{isDropdownOpen:a,children:"›"})]}),(0,c.jsxs)(I,{id:T,isDropdownOpen:a,ref:s,onAnimationEnd:function(){!1===a&&l(null)},children:[n.map((function(e,n){var t=e.id,r=e.title;return(0,c.jsx)(A,{children:(0,c.jsx)(R,{passRef:function(e){return u.current[n]=e},recordId:t,activeClassName:"activeClassLink",children:r})},t)})),(0,c.jsx)(S,{passRef:f,recordId:t,children:r})]})]})},q=t(57842),N=function(){return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18.005",style:{width:"20px",height:"20px"},children:(0,c.jsx)("path",{fill:"var(--baseTextColor)",d:"M9.096 18.005A9.1 9.1 0 012.662 2.47 9.313 9.313 0 016.914.044 1.212 1.212 0 017.242 0a1.262 1.262 0 011.164 1.756 5.821 5.821 0 001.056 6.779 5.778 5.778 0 004.113 1.7 5.838 5.838 0 002.622-.626.743.743 0 01.174-.062 1.262 1.262 0 011.207.263 1.267 1.267 0 01.374 1.3 9.287 9.287 0 01-2.42 4.229 9.038 9.038 0 01-6.436 2.666zM6.842 1.606a7.894 7.894 0 00-3.13 1.916 7.613 7.613 0 1010.767 10.766 7.825 7.825 0 001.91-3.129 7.334 7.334 0 01-2.814.565 7.255 7.255 0 01-5.164-2.138 7.284 7.284 0 01-1.569-7.98z"})})},D=function(){return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:(0,c.jsxs)("g",{fill:"var(--baseTextColor)",children:[(0,c.jsx)("path",{d:"M10 14.544a4.545 4.545 0 01-3.213-7.76 4.545 4.545 0 016.428 6.428A4.516 4.516 0 0110 14.544zm0-7.273a2.727 2.727 0 101.928.8A2.709 2.709 0 0010 7.272v-.001z"}),(0,c.jsx)("path",{d:"M10 2.727a.909.909 0 01-.909-.909V.909A.909.909 0 0110 0a.909.909 0 01.909.909v.909a.909.909 0 01-.909.909z"}),(0,c.jsx)("path",{d:"M10 20a.909.909 0 01-.909-.909v-.909a.909.909 0 111.818 0v.909A.909.909 0 0110 20z"}),(0,c.jsx)("path",{d:"M4.486 5.395a.906.906 0 01-.643-.266l-.644-.644a.909.909 0 010-1.286.909.909 0 011.286 0l.644.644a.909.909 0 010 1.286.906.906 0 01-.643.266z"}),(0,c.jsx)("path",{d:"M16.159 17.068a.906.906 0 01-.643-.266l-.643-.644a.909.909 0 011.285-1.285l.644.644a.909.909 0 01-.643 1.552v-.001z"}),(0,c.jsx)("path",{d:"M15.515 5.395a.906.906 0 01-.642-.266.909.909 0 010-1.286l.644-.644a.909.909 0 011.286 0 .909.909 0 010 1.286l-.645.644a.906.906 0 01-.643.266z"}),(0,c.jsx)("path",{d:"M3.842 17.068a.906.906 0 01-.643-.266.909.909 0 010-1.286l.644-.643a.909.909 0 011.286 1.285l-.644.644a.906.906 0 01-.643.266z"}),(0,c.jsx)("path",{d:"M19.091 10.909h-.909a.909.909 0 110-1.818h.909a.909.909 0 110 1.818z"}),(0,c.jsx)("path",{d:"M1.818 10.909H.909A.909.909 0 010 10a.909.909 0 01.909-.909h.909a.909.909 0 01.909.909.909.909 0 01-.909.909z"})]})})},M=g.default.button.withConfig({componentId:"sc-12hmi5w-0"})(["display:flex;align-items:center;",""],(function(e){return e.hideOnMobile&&(0,g.css)(["@media (max-width:860px){display:none;}"])})),z=function(e){var n=e.hideOnMobile,t=(0,p.useContext)(q.N),i=t.isDark,o=t.handleDarkModeSwitch,a=(0,r.K2)("2850601048"),l=(0,d.U)().pageLocale,s=a.allDatoCmsMiscTextString.nodes.find((function(e){return e.locale===l})),u=s.enableDarkModeAriaLabel,f=s.disableDarkModeAriaLabel;return(0,c.jsx)(M,{role:"switch",hideOnMobile:n,"aria-checked":i,onClick:o,"aria-label":i?f:u,children:i?(0,c.jsx)(D,{}):(0,c.jsx)(N,{})})},P=function(){return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",children:(0,c.jsx)("path",{d:"M823.058,231.951a15,15,0,1,1,15-15,3.838,3.838,0,1,1-7.676,0,7.327,7.327,0,1,0-7.327,7.327q.262,0,.522-.018a12.919,12.919,0,0,0,7.673,5.254A15,15,0,0,1,823.058,231.951Z",transform:"translate(-808.058 -201.951)",fill:"var(--primaryColor)"})})},H=g.default.button.withConfig({componentId:"sc-nlnouq-0"})(["padding:0.33em;display:grid;align-content:center;width:40px;height:40px;--rowHeight:4px;grid-template-rows:repeat(3,var(--rowHeight));row-gap:var(--rowHeight);"]),Z=g.default.span.withConfig({componentId:"sc-nlnouq-1"})(["border-radius:var(--rowHeight);transition:all ",";height:var(--rowHeight);width:100%;background:var(--baseTextColor);",""],y.tA,(function(e){return e.isOpen&&(0,g.css)(["&:first-child{transform:translateY(calc(var(--rowHeight) * 2)) rotateZ(45deg);opacity:1;}&:nth-child(2){opacity:0;}&:last-child{transform:translateY(calc(var(--rowHeight) * -2)) rotateZ(-45deg);opacity:1;}"])})),E=function(e){var n=e.isOpen,t=e.onClick,r=e.ariaLabel;return(0,c.jsxs)(H,{"aria-label":r,onClick:t,children:[(0,c.jsx)(Z,{isOpen:n}),(0,c.jsx)(Z,{isOpen:n}),(0,c.jsx)(Z,{isOpen:n})]})},_=g.default.div.withConfig({componentId:"sc-1qq909b-0"})(["display:none;@media (max-width:768px){display:block;}"]),F=g.default.nav.withConfig({componentId:"sc-1qq909b-1"})(["width:280px;border-radius:var(--defaultRadius);border:var(--borderRegular) solid var(--primaryColor);position:absolute;top:calc(var(--globalPaddingLr) * 3);background:var(--backgroundColorAlt);padding:var(--gapSmall) 0;transition:opacity ",";z-index:5;"," ",";@media (max-width:480px){max-width:calc(100vw - calc(var(--globalPaddingLr) * 2));}"],y.tA,(function(e){return e.isRtl?(0,g.css)(["left:var(--globalPaddingLr);"]):(0,g.css)(["right:var(--globalPaddingLr);"])}),(function(e){switch(e.isMenuOpen){case null:return(0,g.css)(["display:none;"]);case!1:return(0,g.css)(["animation:"," "," forwards;"],y.xy,y.tA);case!0:return(0,g.css)(["animation:"," "," forwards;"],y.ft,y.tA);default:return null}})),X=g.default.ul.withConfig({componentId:"sc-1qq909b-2"})(["display:grid;justify-items:center;"]),U=g.default.li.withConfig({componentId:"sc-1qq909b-3"})(["display:flex;width:100%;flex-direction:column;"]),V=g.default.li.withConfig({componentId:"sc-1qq909b-4"})(["padding:var(--gapSmall) var(--gapRegular);width:100%;display:grid;justify-items:end;"]),$=(0,g.css)(["padding:var(--gapSmall) var(--gapRegular);width:100%;color:var(--headingsColor);font-size:var(--baseL);text-align:inherit;line-height:var(--bodyLineHeight);"]),J=(0,g.default)(b.C).withConfig({componentId:"sc-1qq909b-5"})(["",";font-weight:600;font-size:var(--baseL);"],$),K=g.default.button.withConfig({componentId:"sc-1qq909b-6"})([""," font-weight:600;font-size:var(--baseL);display:flex;justify-content:space-between;align-items:center;transition:color ",";color:",";"],$,y.tA,(function(e){return e.isAccordionOpen?"var(--primaryColor)":"var(--headingsColor)"})),B=g.default.li.withConfig({componentId:"sc-1qq909b-7"})(["width:100%;display:flex;"]),Q=(0,g.default)(b.C).withConfig({componentId:"sc-1qq909b-8"})(["",";font-size:var(--baseM);font-weight:600;"],$),W=g.default.span.withConfig({componentId:"sc-1qq909b-9"})(["height:var(--borderSmall);background:var(--dividerColor);width:calc(100% - calc(var(--gapRegular) * 2));position:relative;",""],(function(e){return e.isRtl?(0,g.css)(["right:var(--gapRegular);"]):(0,g.css)(["left:var(--gapRegular);"])})),Y=g.default.span.withConfig({componentId:"sc-1qq909b-10"})(["font-size:var(--headingS);display:flex;max-height:0;color:",";align-items:center;transition:transform ",",color ",";transform:",";"],(function(e){return e.isAccordionOpen&&"var(--primaryColor)"}),y.tA,y.tA,(function(e){return e.isAccordionOpen?"scaleX(-1) rotate(-90deg)":"rotate(90deg)"})),G=(0,g.default)(b.C).withConfig({componentId:"sc-1qq909b-11"})(["color:var(--primaryColor);font-size:var(--baseSMobile);padding:var(--gapRegular);display:flex;"]),ee=g.default.ul.withConfig({componentId:"sc-1qq909b-12"})(["visibility:",";position:",";transition:height ",";overflow:hidden;height:",";"],(function(e){return null===e.isAccordionOpen&&"hidden"}),(function(e){return null===e.isAccordionOpen&&"absolute"}),y.tA,(function(e){var n=e.isAccordionOpen,t=e.clientHeight;return n?t+"px":!1===n?0:void 0})),ne="mobile_categories_list",te=function(e){var n=e.menuNodes,t=e.categoryNodes,r=e.seeAllCategoriesText,i=e.categoryArchiveRecordId,o=e.ariaLabelHamburger,a=(0,p.useRef)(),d=(0,l.s)().isRtl,s=(0,p.useState)(null),u=s[0],f=s[1],g=(0,p.useState)({booleanValue:null,clientHeight:null}),h=g[0],m=g[1];return(0,p.useLayoutEffect)((function(){u&&m({clientHeight:a.current.clientHeight,booleanValue:!1})}),[u]),(0,c.jsxs)(_,{children:[(0,c.jsx)(E,{ariaLabel:o,isOpen:u,onClick:function(){return f(!u)}}),(0,c.jsx)(F,{isRtl:d,isMenuOpen:u,onAnimationEnd:function(){!1===u&&(f(null),m({clientHeight:0,booleanValue:null}))},children:(0,c.jsxs)(X,{children:[(0,c.jsx)(V,{children:(0,c.jsx)(z,{})}),n.map((function(e){var n=e.links;return n.map((function(e,o){var l=e.id,s=e.name,u=e.isCategoryDropdown,p=e.link;return u?(0,c.jsxs)(U,{children:[(0,c.jsxs)(K,{as:"button","aria-controls":ne,"aria-expanded":h.booleanValue||!1,isAccordionOpen:h.booleanValue,onClick:function(){return m(Object.assign({},h,{booleanValue:!h.booleanValue}))},children:[s,(0,c.jsx)(Y,{isAccordionOpen:h.booleanValue,children:"›"})]}),(0,c.jsxs)(ee,{id:ne,clientHeight:h.clientHeight,isAccordionOpen:h.booleanValue,ref:a,children:[t.map((function(e){var n=e.id,t=e.title;return(0,c.jsx)(B,{children:(0,c.jsx)(Q,{recordId:n,activeClassName:"activeClassLink",children:t})},n)})),(0,c.jsx)(G,{recordId:i,children:r})]}),n.length-1!==o&&(0,c.jsx)(W,{isRtl:d},"div_"+l)]},l):(0,c.jsxs)(U,{children:[(0,c.jsx)(J,{activeClassName:"activeClassLink",recordId:null==p?void 0:p.id,children:s}),n.length-1!==o&&(0,c.jsx)(W,{isRtl:d},"div_"+l)]},l)}))}))]})})]})},re=g.default.header.withConfig({componentId:"sc-b7jbxx-0"})(["padding:0 var(--globalPaddingLr);margin:auto;width:100%;max-width:var(--globalContainer);"]),ie=g.default.div.withConfig({componentId:"sc-b7jbxx-1"})(["width:100%;padding:var(--globalPaddingLr) 0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--dividerColor);"]),oe=g.default.nav.withConfig({componentId:"sc-b7jbxx-2"})(["@media (max-width:768px){display:none;}"]),ae=g.default.ul.withConfig({componentId:"sc-b7jbxx-3"})(["display:grid;align-items:center;grid-auto-flow:column;column-gap:var(--gapXL);& li a{color:var(--headingsColor);transition:color 0.1s linear;font-weight:600;&:hover{color:var(--primaryColor);}}@media (max-width:860px){column-gap:var(--gapL);}"]),le=g.default.div.withConfig({componentId:"sc-b7jbxx-4"})(["display:grid;grid-auto-flow:column;column-gap:var(--gapRegular);@media (max-width:768px){grid-template-columns:auto auto auto;}"]),de=g.default.span.withConfig({componentId:"sc-b7jbxx-5"})(["height:100%;width:var(--borderSmall);background:var(--dividerColor);display:",";@media (max-width:768px){display:",";}"],(function(e){return e.hideOnDesktop?"none":"block"}),(function(e){return e.hideOnMobile?"none":"block"})),ce=function(){var e=(0,r.K2)("2757196681"),n=e.allDatoCmsMenu.menuNodes,t=e.allDatoCmsHomepage.homepageNodes,i=e.allDatoCmsCategory.categoryNodes,o=e.allDatoCmsCategoriesArchive.categoriesArchiveNodes,a=e.allDatoCmsMiscTextString.textStringNodes,l=(0,d.U)().pageLocale,s=o.find((function(e){return e.locale===l})).id,u=t.find((function(e){return e.locale===l})),p=a.find((function(e){return e.locale===l})).seeAllCategoriesText,f=n.filter((function(e){return e.locale===l})),g=i.filter((function(e){return e.locale===l})).slice(0,6),h=u.id,m=u.seo.title,v=f[0],x=v.ariaLabelHamburger,y=v.links;return(0,c.jsx)(re,{children:(0,c.jsxs)(ie,{children:[(0,c.jsx)(b.C,{style:{display:"flex"},"aria-label":m,recordId:h,children:(0,c.jsx)(P,{})},h),(0,c.jsx)(oe,{children:(0,c.jsx)(ae,{children:y.map((function(e){var n=e.id,t=e.name,r=e.isCategoryDropdown,i=e.link;return r&&g.length>0?(0,c.jsx)(O,{menuItemLabel:t,categoryNodes:g,categoryArchiveRecordId:s,seeAllCategoriesText:p},n):!r&&(0,c.jsx)("li",{children:(0,c.jsx)(b.C,{recordId:null==i?void 0:i.id,activeClassName:"activeClassLink",children:t})},n)}))})}),(0,c.jsxs)(le,{children:[(0,c.jsx)(z,{hideOnMobile:!0}),(0,c.jsx)(de,{hideOnMobile:!0}),(0,c.jsx)(w,{}),(0,c.jsx)(de,{hideOnDesktop:!0}),(0,c.jsx)(te,{ariaLabelHamburger:x,menuNodes:f,categoryNodes:g,seeAllCategoriesText:p,categoryArchiveRecordId:s})]})]})})},se=t(10830),ue=g.default.footer.withConfig({componentId:"sc-t9n63i-0"})(["width:var(--globalContainer);width:100%;max-width:var(--globalContainer);margin:auto;padding:0 var(--globalPaddingLr);"]),pe=g.default.div.withConfig({componentId:"sc-t9n63i-1"})(["border-top:1px solid var(--dividerColor);width:100%;padding:var(--globalPaddingLr) 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media (max-width:950px){flex-direction:column;gap:var(--gapSmall);}"]),fe=g.default.div.withConfig({componentId:"sc-t9n63i-2"})(["font-size:var(--baseS);text-align:center;& a{color:var(--primaryColor);@media (hover:hover){text-decoration:underline;}}"]),ge=function(){var e=(0,r.K2)("4195094990"),n=(0,d.U)().pageLocale,t=e.allDatoCmsFooter.nodes;return(0,c.jsx)(ue,{children:(0,c.jsx)(pe,{children:t.filter((function(e){return e.locale===n})).map((function(e){var n=e.id,t=e.textLeft.value,r=e.textRight.value;return(0,c.jsxs)(p.Fragment,{children:[(0,c.jsx)(fe,{children:(0,c.jsx)(se.rZ,{data:t})}),(0,c.jsx)(fe,{children:(0,c.jsx)(se.rZ,{data:r})})]},n)}))})})},he=function(e){var n=e.pageData,t=e.seoTitle,r=e.seoDescription,i=e.seoImage,o=e.children;return(0,c.jsxs)(f.I,{pageData:n,children:[(0,c.jsx)(s,{seoTitle:t,seoDescription:r,seoImage:i}),(0,c.jsx)(ce,{}),(0,c.jsx)("main",{children:o}),(0,c.jsx)(ge,{})]})}},23918:function(e,n,t){t.d(n,{$z:function(){return p},Jf:function(){return c},Jj:function(){return a},NZ:function(){return l},TE:function(){return d},j1:function(){return o}});var r=t(83494),i=t(85893),o=r.default.h1.withConfig({componentId:"sc-1q7vjti-0"})(["font-size:var(--headingXL);color:var(--headingsColor);text-align:center;line-height:var(--headingsLineHeight);@media (max-width:860px){text-align:inherit;}@media (max-width:768px){font-size:var(--headingL);}"]),a=r.default.p.withConfig({componentId:"sc-1q7vjti-1"})(["font-size:var(--baseXL);color:var(--baseTextColor);text-align:center;line-height:var(--bodyLineHeight);@media (max-width:860px){text-align:inherit;}"]),l=r.default.h1.withConfig({componentId:"sc-1q7vjti-2"})(["font-size:var(--headingL);color:var(--headingsColor);text-align:inherit;line-height:var(--headingsLineHeight);margin:auto;padding:",";width:100%;max-width:var(--globalContainer);@media (max-width:768px){font-size:calc(var(--headingL) * 0.8);}"],(function(e){return e.noPaddings?"0":" 0 var(--globalPaddingLr)"})),d=r.default.h1.withConfig({componentId:"sc-1q7vjti-3"})(["font-size:var(--headingM);color:var(--headingsColor);text-align:inherit;font-weight:700;line-height:1.2;@media (max-width:768px){font-size:var(--headingS);}"]),c=r.default.h1.withConfig({componentId:"sc-1q7vjti-4"})(["font-size:var(--baseL);color:var(--headingsColor);text-align:inherit;font-weight:700;line-height:1.2;@media (max-width:768px){font-size:var(--baseXL);}"]),s=(0,r.default)(c).withConfig({componentId:"sc-1q7vjti-5"})(["&&&{--tipWidth:3px;column-gap:var(--gapSmall);display:grid;grid-template-columns:var(--tipWidth) auto;}"]),u=r.default.span.withConfig({componentId:"sc-1q7vjti-6"})(["width:var(--tipWidth);border-radius:var(--tipWidth);height:100%;background:var(--primaryColor);"]),p=function(e){var n=e.children;return(0,i.jsxs)(s,{children:[(0,i.jsx)(u,{}),n]})}},64734:function(e,n,t){t.d(n,{$0:function(){return i},$b:function(){return l},Dr:function(){return d},QF:function(){return a},fA:function(){return o},t9:function(){return s},up:function(){return c}});var r=t(83494),i=r.default.section.withConfig({componentId:"sc-gwppjl-0"})(["width:100%;max-width:var(--globalContainer);margin:auto;padding:var(--globalPaddingLr) var(--globalPaddingLr) var(--globalPaddingTb) var(--globalPaddingLr);display:flex;flex-direction:column;justify-content:center;align-items:center;"]),o=r.default.section.withConfig({componentId:"sc-gwppjl-1"})(["display:grid;grid-template-columns:1fr 1fr;column-gap:var(--gapXL);row-gap:var(--gapXL);margin:auto;padding-top:var(--globalPaddingTb);max-width:var(--articleContainer);width:100%;@media (max-width:760px){column-gap:var(--gapL);}@media (max-width:620px){grid-template-columns:1fr;}"]),a=r.default.section.withConfig({componentId:"sc-gwppjl-2"})(["display:grid;grid-template-columns:repeat(3,1fr);column-gap:var(--gapXL);row-gap:var(--gapXL);margin:auto;padding:",";width:100%;max-width:var(--globalContainer);@media (max-width:1100px){column-gap:var(--gapL);}@media (max-width:950px){grid-template-columns:1fr 1fr;}@media (max-width:620px){grid-template-columns:1fr;}"],(function(e){return e.noPaddings?"0":"var(--globalPaddingTb) var(--globalPaddingLr)"})),l=r.default.section.withConfig({componentId:"sc-gwppjl-3"})(["width:var(--globalContainer);display:flex;flex-direction:row;width:100%;margin:auto;padding:var(--globalPaddingTb) var(--globalPaddingLr);max-width:var(--globalContainer);@media (max-width:768px){flex-direction:column;& > div:first-child{margin-bottom:var(--gapL);}}"]),d=(0,r.default)(l).withConfig({componentId:"sc-gwppjl-4"})(["&&&{@media (max-width:768px){flex-direction:column-reverse;& > div:first-child{margin-bottom:0;}}}& > div:last-child{margin-bottom:0;}@media (max-width:768px){& > div:last-child{margin-bottom:var(--gapL);}}"]),c=r.default.div.withConfig({componentId:"sc-gwppjl-5"})(["display:flex;align-items:center;justify-content:center;width:50%;@media (max-width:768px){width:100%;justify-content:flex-start;& img{width:",";}}"],(function(e){return e.hasImg&&"150px"})),s=r.default.section.withConfig({componentId:"sc-gwppjl-6"})(["display:grid;row-gap:",";align-content:baseline;"],(function(e){return e.small?"var(--gapSmall)":"var(--gapRegular)"}))},12862:function(e,n,t){t.d(n,{C:function(){return d}});var r=t(63366),i=t(71082),o=t(84301),a=t(85893),l=["recordId","passRef","children"],d=function(e){var n=e.recordId,t=e.passRef,d=e.children,c=(0,r.Z)(e,l),s=function(e){if(!e)throw new Error("usePageMatch hook requires a recordId to be passed as parameter");var n=(0,i.K2)("3879866231").allSitePage.pageNodes,t=(0,o.U)().pageLocale,r=n.find((function(n){var r=n.pageContext,i=r.id,o=r.locale;return i===e&&o===t}));if(!r)throw new Error("No page for the provided recordId "+e+" has been generated for "+t+' locale.\n\n      Please refer to the "Troubleshooting" section of the README.');return{path:r.path}}(n),u=s.path;return(0,a.jsx)(i.rU,Object.assign({},c,{ref:t,to:u,children:d}))}},84301:function(e,n,t){t.d(n,{U:function(){return o}});var r=t(67294),i=t(85207),o=function(){var e=(0,r.useContext)(i.R).pageLocale;if(!e)throw new Error("usePageLangauge hook cannot be called inside a template file. Call it inside of a component,\n      then import the component in the template file.\n      \n      If you are calling this hook inside a component and getting this error, most likely\n      the locale field has not been exported to the pageContext object while creating pages\n      in gatsby-node.js");return{pageLocale:e}}},92992:function(e,n,t){t.d(n,{s:function(){return o}});var r=t(23469),i=t(84301),o=function(){var e=(0,i.U)().pageLocale;if(!e)throw new Error("useTextDirection hook cannot be called inside a template file. Call it inside of a component and import it in the template file.");return{isRtl:(0,r.II)(e)}}},63366:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=c14a090f5968eb9223df675b41bc1769a1321f7c-6cb99ef1296d6130314a.js.map