import{h as g,R as A,S as d,T as p,U as N,V as u}from"./runtime.D069mYe6.js";function I(n,t,s,r){var o=n.__attributes??(n.__attributes={});g&&(o[t]=n.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&n.nodeName==="LINK")||o[t]!==(o[t]=s)&&(t==="style"&&"__styles"in n&&(n.__styles={}),t==="loading"&&(n[A]=s),s==null?n.removeAttribute(t):typeof s!="string"&&T(n).includes(t)?n[t]=s:n.setAttribute(t,s))}var _=new Map;function T(n){var t=_.get(n.nodeName);if(t)return t;_.set(n.nodeName,t=[]);for(var s,r=n,o=Element.prototype;o!==r;){s=p(r);for(var i in s)s[i].set&&t.push(i);r=d(r)}return t}const E="data-no-translate",h="paraglide:lang",C="paraglide_lang",e={},L=()=>u(e),O=n=>{N(e,n)};function x(){const n=L();function t(r,o){return typeof r!="string"||!n?r:n.translateHref(r,o)}function s(r,o){if(r[E])return r;for(const{attribute_name:i,lang_attribute_name:a}of o)if(i in r){const c=r[i],f=a?r[a]:void 0;r[i]=t(c,typeof f=="string"?f:void 0)}return r}return[t,s]}export{C as L,O as a,h as b,x as g,I as s};
