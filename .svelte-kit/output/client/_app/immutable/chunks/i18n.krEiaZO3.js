import{a2 as F,au as ve,av as me,al as L,aw as be,a4 as T,ax as N,ac as p,m as x,F as H,ay as pe,S as we,D as ye,h as U,J as Te,b as xe,Z as Se,ad as Le,ae as Pe,d as Re,s as J,ag as Q,Q as X,_ as V,e as Ie,az as Ee,a6 as oe,ap as ee,aA as Oe,aB as $e,aC as Ae,aD as De,k as te,aE as Be,aF as Ce,C as ne,aG as Fe,aH as Ne,aI as je,aJ as We,a3 as ze,o as re,aK as Me,aL as Ue}from"./runtime.D069mYe6.js";import{a as ke,s as Ye,b as D,g as qe}from"./entry.DhrcXm9Q.js";import"./legacy.DWS5Df1q.js";function O(e,t=null,n){if(typeof e!="object"||e===null||F in e)return e;const i=we(e);if(i!==ve&&i!==me)return e;var s=new Map,u=ye(e),l=L(0);u&&s.set("length",L(e.length));var d;return new Proxy(e,{defineProperty(r,a,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&be();var o=s.get(a);return o===void 0?(o=L(f.value),s.set(a,o)):T(o,O(f.value,d)),!0},deleteProperty(r,a){var f=s.get(a);if(f===void 0)a in r&&s.set(a,L(p));else{if(u&&typeof a=="string"){var o=s.get("length"),c=Number(a);Number.isInteger(c)&&c<o.v&&T(o,c)}T(f,p),ae(l)}return!0},get(r,a,f){var h;if(a===F)return e;var o=s.get(a),c=a in r;if(o===void 0&&(!c||(h=N(r,a))!=null&&h.writable)&&(o=L(O(c?r[a]:p,d)),s.set(a,o)),o!==void 0){var g=x(o);return g===p?void 0:g}return Reflect.get(r,a,f)},getOwnPropertyDescriptor(r,a){var f=Reflect.getOwnPropertyDescriptor(r,a);if(f&&"value"in f){var o=s.get(a);o&&(f.value=x(o))}else if(f===void 0){var c=s.get(a),g=c==null?void 0:c.v;if(c!==void 0&&g!==p)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(r,a){var g;if(a===F)return!0;var f=s.get(a),o=f!==void 0&&f.v!==p||Reflect.has(r,a);if(f!==void 0||H!==null&&(!o||(g=N(r,a))!=null&&g.writable)){f===void 0&&(f=L(o?O(r[a],d):p),s.set(a,f));var c=x(f);if(c===p)return!1}return o},set(r,a,f,o){var w;var c=s.get(a),g=a in r;if(u&&a==="length")for(var h=f;h<c.v;h+=1){var b=s.get(h+"");b!==void 0?T(b,p):h in r&&(b=L(p),s.set(h+"",b))}c===void 0?(!g||(w=N(r,a))!=null&&w.writable)&&(c=L(void 0),T(c,O(f,d)),s.set(a,c)):(g=c.v!==p,T(c,O(f,d)));var _=Reflect.getOwnPropertyDescriptor(r,a);if(_!=null&&_.set&&_.set.call(o,f),!g){if(u&&typeof a=="string"){var v=s.get("length"),R=Number(a);Number.isInteger(R)&&R>=v.v&&T(v,R+1)}ae(l)}return!0},ownKeys(r){x(l);var a=Reflect.ownKeys(r).filter(c=>{var g=s.get(c);return g===void 0||g.v!==p});for(var[f,o]of s)o.v!==p&&!(f in r)&&a.push(f);return a},setPrototypeOf(){pe()}})}function ae(e,t=1){T(e,e.v+t)}function Lt(e,t,n=!1){U&&Te();var i=e,s=null,u=null,l=p,d=n?Se:0,r=!1;const a=(o,c=!0)=>{r=!0,f(c,o)},f=(o,c)=>{if(l===(l=o))return;let g=!1;if(U){const h=i.data===Le;!!l===h&&(i=Pe(),Re(i),J(!1),g=!0)}l?(s?Q(s):c&&(s=X(()=>c(i))),u&&V(u,()=>{u=null})):(u?Q(u):c&&(u=X(()=>c(i))),s&&V(s,()=>{s=null})),g&&J(!0)};xe(()=>{r=!1,t(a),r||f(null,null)},d),U&&(i=Ie)}let B=!1;function Pt(e,t,n){const i=n[t]??(n[t]={store:null,source:oe(void 0),unsubscribe:ee});if(i.store!==e)if(i.unsubscribe(),i.store=e,e==null)i.source.v=void 0,i.unsubscribe=ee;else{var s=!0;i.unsubscribe=ke(e,u=>{s?i.source.v=u:T(i.source,u)}),s=!1}return x(i.source)}function Rt(){const e={};return Ee(()=>{for(var t in e)e[t].unsubscribe()}),e}function Ke(e){var t=B;try{return B=!1,[e(),B]}finally{B=t}}function se(e){for(var t=H,n=H;t!==null&&!(t.f&(Be|Ce));)t=t.parent;try{return ne(t),e()}finally{ne(n)}}function It(e,t,n,i){var A;var s=(n&Fe)!==0,u=!Ne||(n&je)!==0,l=(n&We)!==0,d=(n&Ue)!==0,r=!1,a;l?[a,r]=Ke(()=>e[t]):a=e[t];var f=F in e||ze in e,o=((A=N(e,t))==null?void 0:A.set)??(f&&l&&t in e?m=>e[t]=m:void 0),c=i,g=!0,h=!1,b=()=>(h=!0,g&&(g=!1,d?c=te(i):c=i),c);a===void 0&&i!==void 0&&(o&&u&&Oe(),a=b(),o&&o(a));var _;if(u)_=()=>{var m=e[t];return m===void 0?b():(g=!0,h=!1,m)};else{var v=se(()=>(s?re:Me)(()=>e[t]));v.f|=$e,_=()=>{var m=x(v);return m!==void 0&&(c=void 0),m===void 0?c:m}}if(!(n&Ae))return _;if(o){var R=e.$$legacy;return function(m,E){return arguments.length>0?((!u||!E||R||r)&&o(E?_():m),m):_()}}var w=!1,I=!1,$=oe(a),S=se(()=>re(()=>{var m=_(),E=x($);return w?(w=!1,I=!0,E):(I=!1,$.v=m)}));return s||(S.equals=De),function(m,E){if(arguments.length>0){const M=E?x(S):u&&l?O(m):m;return S.equals(M)||(w=!0,T($,M),h&&c!==void 0&&(c=M),te(()=>x(S))),m}return x(S)}}let G;const ce="en",le=["en","it"];let j=()=>ce;const He=e=>{typeof e=="function"?j=ie(e):j=ie(()=>e),G!==void 0&&G(j())};function ie(e){return()=>{const t=e();if(!de(t))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return t}}const Ge=e=>{G=e};function de(e){return le.includes(e)}const Ze=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:le,isAvailableLanguageTag:de,get languageTag(){return j},onSetLanguageTag:Ge,setLanguageTag:He,sourceLanguageTag:ce},Symbol.toStringTag,{value:"Module"})),Je=()=>{const e=Ye;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Qe={subscribe(e){return Je().page.subscribe(e)}};function Xe(e,t){if(e==="")return"";const n=new URL(e,t).pathname;return n.endsWith("/")?n.slice(0,-1):n}function W(e,t){const n=tt(e),i=Ve(n,t),[s,u]=et(i);return[s,u]}const Z=(e,t,n)=>[t,e,n??""].filter(i=>i!=="/").join("")||"/";function Ve(e,t){const n=e.replace(t,"");return n.startsWith("/")?n:`/${n}`}function et(e){const n=["/.html__data.json","/__data.json"].find(i=>e.endsWith(i));return n?[e.slice(0,-n.length)||"/",n]:[e,void 0]}function tt(e){try{return decodeURI(e)}catch{return e}}const nt=e=>({url:t})=>{try{const[n,i]=W(t.pathname,D),s=e.getLanguageFromLocalisedPath(n);if(!s)return t.pathname;const u=e.getCanonicalPath(n,s);return Z(u,D,i)}catch{return t.pathname}};function rt(e){return`/${e.split("/").filter(Boolean).join("/")}`}function at(e){const t=e.map(n=>typeof n=="string"?i=>i===n:i=>n.test(i));return n=>t.some(i=>i(rt(n)))}const C="rtl",k="ltr";function st(e){try{const t=new Intl.Locale(e);return"textInfo"in t?t.textInfo.direction===C?C:k:t.getTextInfo().direction===C?C:k}catch{return k}}function it(e){const t=e.map(n=>[n,st(n)]);return Object.fromEntries(t)}const ut=0,ue=1,z=2,ft=4,y=0,P=1,Y=2;function ot(e){const t=ct(lt);return e.sort((n,i)=>{var s,u,l,d,r,a;const f=fe(n).map(t),o=fe(i).map(t);for(let c=0;c<Math.max(f.length,o.length);c+=1){const g=f[c],h=o[c];if(!g)return-1;if(!h)return 1;for(let b=0;b<Math.max(g.length,h.length);b+=1){const _=g[b],v=h[b];if((_==null?void 0:_[y])||(v==null?void 0:v[y])){if(!_)return-1;if(!v)return 1;const w=((s=g[b+1])==null?void 0:s[P])||((l=(u=f[c+1])==null?void 0:u[0])==null?void 0:l[P]),I=((d=h[b+1])==null?void 0:d[P])||((a=(r=o[c+1])==null?void 0:r[0])==null?void 0:a[P]),$=w&&I,S=w&&!I,A=!w&&I;if((_[y]&&v[y])===z){if($)continue;if(S)return-1;if(A)return 1}if(_[y]===z)return S?-1:1;if(v[y]===z)return A?1:-1;if(_[Y]!==v[Y])return(-1)**+_[Y];if(_[y]!==v[y])return(-1)**+(_[y]>v[y])}else if((_==null?void 0:_[P])!==(v==null?void 0:v[P]))return dt(_[P],v[P])}}return n<i?1:-1})}function ct(e){const t=new Map;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))}function lt(e){const t=[];let n=0;for(;n<=e.length;){const i=e.indexOf("[",n),s=i===-1;if(t.push([ut,e.slice(n,s?void 0:i),!1]),s)break;const u=e[i+1]==="["?ue:e[i+1]==="."?z:ft,l=u===ue?"]]":"]",d=e.indexOf(l,i);if(d===-1)throw new Error(`Invalid route definition ${e}`);const r=e.slice(i,n=d+l.length);t.push([u,r,r.includes("=")])}return t}const fe=e=>e.replace(/\[\[[^\]]+\]\](?!$)/g,"").split("/").filter(Boolean);function dt(e,t){if(e===t)return 0;let n=0;for(;e[n]===t[n];)n++;return e[n]?t[n]?e[n]<t[n]?-1:1:-1:1}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function _t(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${he(e).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return t.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return t.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const l=i.split(/\[(.+?)\](?!\])/);return"/"+l.map((r,a)=>{if(a%2){if(r.startsWith("x+"))return q(String.fromCharCode(parseInt(r.slice(2),16)));if(r.startsWith("u+"))return q(String.fromCharCode(...r.slice(2).split("-").map(b=>parseInt(b,16))));const f=gt.exec(r);if(!f)throw new Error(`Invalid param: ${r}`);const[,o,c,g,h]=f;return t.push({name:g,matcher:h,optional:!!o,rest:!!c,chained:c?a===1&&l[0]==="":!1}),c?"(.*?)":o?"([^/]*)?":"([^/]+?)"}return q(r)}).join("")}).join("")}/?$`),params:t}}function ht(e,t,n){const i={},s=e.slice(1),u=s.filter(d=>d!==void 0);let l=0;for(const[d,r]of t.entries()){let a=s[d-l];if(r.chained&&r.rest&&l&&(a=s.slice(d-l,d+1).filter(o=>o).join("/"),l=0),a===void 0){r.rest&&(i[r.name]="");continue}if(r.matcher&&!n[r.matcher])return;if((n[r.matcher]??(()=>!0))(a)){i[r.name]=a;const o=t[d+1],c=s[d+1];o&&!o.rest&&o.optional&&c&&r.chained&&(l=0),!o&&!c&&Object.keys(i).length===u.length&&(l=0);continue}if(r.optional&&r.chained){l++;continue}return}if(!l)return i}function q(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const vt=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function ge(e,t){return"/"+he(e).map(n=>n.replace(vt,(i,s,u,l)=>{const d=t[l];if(!d){if(s||u&&d!==void 0)return"";throw new Error(`Missing parameter '${l}' in route ${e}`)}if(d[0]=="/"||d.endsWith("/"))throw new Error(`Parameter '${l}' in route ${e} cannot start or end with a slash`);return d})).filter(Boolean).join("/")}function _e(e,t,n){const i=ot(t);for(const s of i){const u=_t(s),l=u.pattern.exec(mt(e));if(!l)continue;const d=ht(l,u.params,n);if(d)return{params:d,id:s}}}const mt=e=>e.endsWith("/")?e.slice(0,-1):e,he=e=>e.slice(1).split("/");function bt(e,t,n,i,s){function u(r){const f=r.split("/")[1];if(e.includes(f)&&(s==="always"||f!==t))return f;if(s==="never")return t}function l(r,a){const f=r.endsWith("/")&&r!=="/";r=f?r.slice(0,-1):r;let o=wt(r,a,n,i);return f&&(o+="/"),(s==="always"||a!==t)&&(o=`/${a}${o}`),o}function d(r,a){const f=r.endsWith("/")&&r!=="/";(s==="always"||a!==t)&&(r=r.replace(`/${a}`,"")||"/");const o=f;r=o?r.slice(0,-1):r;let c=pt(r,a,n,i);return o&&(c+="/"),c}return{getLanguageFromLocalisedPath:u,getLocalisedPath:l,getCanonicalPath:d}}function pt(e,t,n,i){for(const[s,u]of Object.entries(n)){if(!(t in u))continue;const l=u[t];if(!l)continue;const d=_e(e,[l],i);if(d)return ge(s,d.params)}return e}function wt(e,t,n,i){const s=_e(e,Object.keys(n),i);if(!s)return e;const u=n[s.id];if(!u)return e;const l=u[t];return l?ge(l,s.params):e}function yt(e,t){const n={},i=[],s=e.sourceLanguageTag,u={defaultLanguageTag:s,runtime:e,translations:n,matchers:{},exclude:at(i),prefixDefaultLanguage:"never",textDirection:it(e.availableLanguageTags),seo:{noAlternateLinks:!1}},l=bt(e.availableLanguageTags,s,u.translations,u.matchers,u.prefixDefaultLanguage);return Object.freeze(n),Object.freeze(u),{config:u,strategy:l,reroute:()=>nt(l),handle:()=>{throw new Error("")},getLanguageFromUrl(d){const r=K(D),[a]=W(d.pathname,r);return u.exclude(a)?u.defaultLanguageTag:l.getLanguageFromLocalisedPath(a)||u.defaultLanguageTag},resolveRoute(d,r=void 0){if(u.exclude(d))return d;const a=K(D),[f,o]=W(d,a);if(r=r??e.languageTag(),!d.startsWith(a))return d;const c=l.getLocalisedPath(f,r);return Z(c,a,o)},route(d){const r=K(D),[a,f]=W(d,r),c=l.getLanguageFromLocalisedPath(a)||u.defaultLanguageTag,g=l.getCanonicalPath(a,c);return Z(g,r,f)}}}function K(e){return e===""?"":e.startsWith("/")?e:Xe(e,new URL(qe(Qe).url))}const Et=yt(Ze);export{O as a,Lt as b,Pt as c,Qe as d,W as e,Z as f,Et as i,Xe as n,It as p,Rt as s};
