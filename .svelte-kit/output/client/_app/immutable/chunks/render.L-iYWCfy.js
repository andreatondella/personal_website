import{A as V,B as O,C as R,D as k,E as C,F as I,G as T,f as H,a as Y,g as j,I as E,s as g,d as A,J as q,e as v,K as B,L as $,M as F,N as G,O as J,P as K,c as Q,Q as W,p as z,h as b,q as U,j as X}from"./runtime.D069mYe6.js";import{r as Z}from"./svelte-head.BdOSXJz4.js";import{b as x}from"./legacy.DWS5Df1q.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const tr=new Set,D=new Set;function m(r){var S;var e=this,s=e.ownerDocument,c=r.type,i=((S=r.composedPath)==null?void 0:S.call(r))||[],t=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(t=i[d]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=C,o=I;O(null),R(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(k(l)){var[M,...P]=l;M.apply(t,[r,...P])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,O(w),R(o)}}}function ir(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function ar(r,e){return L(r,e)}function fr(r,e){T(),e.intro=e.intro??!1;const s=e.target,c=b,i=v;try{for(var t=H(s);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw E;g(!0),A(t),q();const d=L(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==B)throw $(),E;return g(!1),d}catch(d){if(d===E)return e.recover===!1&&F(),T(),G(s),g(!1),ar(r,e);throw d}finally{g(c),A(i),Z()}}const p=new Map;function L(r,{target:e,anchor:s,props:c={},events:i,context:t,intro:d=!0}){T();var _=new Set,u=o=>{for(var a=0;a<o.length;a++){var n=o[a];if(!_.has(n)){_.add(n);var f=er(n);e.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};u(J(tr)),D.add(u);var h=void 0,w=K(()=>{var o=s??e.appendChild(Q());return W(()=>{if(t){z({});var a=X;a.c=t}i&&(c.$$events=i),b&&x(o,null),h=r(o,c)||{},b&&(I.nodes_end=v),t&&U()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}D.delete(u),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function dr(r,e){const s=N.get(r);return s?(N.delete(r),s(e)):Promise.resolve()}export{fr as h,ar as m,ir as s,dr as u};
