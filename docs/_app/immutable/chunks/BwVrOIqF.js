import{Z as A,_ as Z,$,O as P,a0 as j,w as c,Y as d,a1 as o,a2 as D,L as z,a3 as C,a4 as G,P as K,a5 as V,m as F,a6 as H,l as J,a7 as Q,z as q,a8 as W,i as B,a9 as X,aa as k,ab as p,N as ee,ac as re,ad as ne}from"./BGJf_qRY.js";function h(t,v=null,R){if(typeof t!="object"||t===null||A in t)return t;const m=G(t);if(m!==Z&&m!==$)return t;var f=new Map,g=K(t),y=P(0);g&&f.set("length",P(t.length));var I;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&C();var a=f.get(e);return a===void 0?(a=P(r.value),f.set(e,a)):o(a,h(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(d));else{if(g&&typeof e=="string"){var a=f.get("length"),n=Number(e);Number.isInteger(n)&&n<a.v&&o(a,n)}o(r,d),M(y)}return!0},get(i,e,r){var l;if(e===A)return t;var a=f.get(e),n=e in i;if(a===void 0&&(!n||(l=D(i,e))!=null&&l.writable)&&(a=P(h(n?i[e]:d,I)),f.set(e,a)),a!==void 0){var u=c(a);return u===d?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=c(a))}else if(r===void 0){var n=f.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==d)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===A)return!0;var r=f.get(e),a=r!==void 0&&r.v!==d||Reflect.has(i,e);if(r!==void 0||z!==null&&(!a||(u=D(i,e))!=null&&u.writable)){r===void 0&&(r=P(a?h(i[e],I):d),f.set(e,r));var n=c(r);if(n===d)return!1}return a},set(i,e,r,a){var S;var n=f.get(e),u=e in i;if(g&&e==="length")for(var l=r;l<n.v;l+=1){var w=f.get(l+"");w!==void 0?o(w,d):l in i&&(w=P(d),f.set(l+"",w))}n===void 0?(!u||(S=D(i,e))!=null&&S.writable)&&(n=P(void 0),o(n,h(r,I)),f.set(e,n)):(u=n.v!==d,o(n,h(r,I)));var _=Reflect.getOwnPropertyDescriptor(i,e);if(_!=null&&_.set&&_.set.call(a,r),!u){if(g&&typeof e=="string"){var E=f.get("length"),N=Number(e);Number.isInteger(N)&&N>=E.v&&o(E,N+1)}M(y)}return!0},ownKeys(i){c(y);var e=Reflect.ownKeys(i).filter(n=>{var u=f.get(n);return u===void 0||u.v!==d});for(var[r,a]of f)a.v!==d&&!(r in i)&&e.push(r);return e},setPrototypeOf(){j()}})}function M(t,v=1){o(t,t.v+v)}let x=!1;function ae(t){var v=x;try{return x=!1,[t(),x]}finally{x=v}}function U(t){var v;return((v=t.ctx)==null?void 0:v.d)??!1}function ie(t,v,R,m){var Y;var f=(R&ne)!==0,g=!J||(R&Q)!==0,y=(R&W)!==0,I=(R&re)!==0,i=!1,e;y?[e,i]=ae(()=>t[v]):e=t[v];var r=A in t||H in t,a=y&&(((Y=D(t,v))==null?void 0:Y.set)??(r&&v in t&&(s=>t[v]=s)))||void 0,n=m,u=!0,l=!1,w=()=>(l=!0,u&&(u=!1,I?n=B(m):n=m),n);e===void 0&&m!==void 0&&(a&&g&&X(),e=w(),a&&a(e));var _;if(g)_=()=>{var s=t[v];return s===void 0?w():(u=!0,l=!1,s)};else{var E=(f?q:F)(()=>t[v]);E.f|=V,_=()=>{var s=c(E);return s!==void 0&&(n=void 0),s===void 0?n:s}}if((R&k)===0)return _;if(a){var N=t.$$legacy;return function(s,O){return arguments.length>0?((!g||!O||N||i)&&a(O?_():s),s):_()}}var S=!1,L=ee(e),b=q(()=>{var s=_(),O=c(L);return S?(S=!1,O):L.v=s});return y&&c(b),f||(b.equals=p),function(s,O){if(arguments.length>0){const T=O?c(b):g&&y?h(s):s;if(!b.equals(T)){if(S=!0,o(L,T),l&&n!==void 0&&(n=T),U(b))return s;B(()=>c(b))}return s}return U(b)?b.v:c(b)}}export{h as a,ie as p};
