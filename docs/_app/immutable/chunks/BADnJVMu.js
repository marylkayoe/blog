var Nn=Array.isArray,Gt=Array.prototype.indexOf,Cn=Array.from,Pn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,bn=Object.prototype,Fn=Array.prototype,Zt=Object.getPrototypeOf;const Mn=()=>{};function Ln(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,J=8,ot=16,R=32,P=64,V=128,E=256,G=512,d=1024,I=2048,b=4096,C=8192,Q=16384,$t=32768,gt=65536,qn=1<<17,zt=1<<19,Tt=1<<20,vt=Symbol("$state"),Yn=Symbol("legacy props");function mt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Hn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Vn(){tt=!0}const Gn=1,Kn=2,Zn=4,$n=8,zn=16,Wn=1,Xn=2,Jn=4,Qn=8,tr=16,nr=1,rr=2,en="[",ln="[!",an="]",xt={},er=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function pt(t){i=t}function lr(t,n=!1,r){var e=i={p:i,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)}),vn(()=>{e.d=!0})}function ar(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];z(l.effect),$(l.reaction),Pt(l.fn)}}finally{z(r),$(e)}}i=n.p,n.m=!0}return{}}function nt(){return!tt||i!==null&&i.l===null}const L=new Map;function ft(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function sr(t){return sn(ft(t))}function ur(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function sn(t){return u!==null&&!w&&(u.f&y)!==0&&(m===null?gn([t]):m.push(t)),t}function or(t,n){return u!==null&&!w&&nt()&&(u.f&(y|ot))!==0&&(m===null||!m.includes(t))&&rn(),un(t,n)}function un(t,n){if(!t.equals(n)){var r=t.v;j?L.set(t,n):L.set(t,r),t.v=n,t.wv=Ht(),Dt(t,I),nt()&&o!==null&&(o.f&d)!==0&&(o.f&(R|P))===0&&(x===null?Tn([t]):x.push(t))}return n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;(f&I)===0&&(!e&&s===o||(A(s,n),(f&(d|E))!==0&&((f&y)!==0?Dt(s,b):et(s))))}}let O=!1;function fr(t){O=t}let g;function q(t){if(t===null)throw Rt(),xt;return g=t}function ir(){return q(N(g))}function _r(t){if(O){if(N(g)!==null)throw Rt(),xt;g=t}}function cr(t=1){if(O){for(var n=t,r=g;n--;)r=N(r);g=r}}function vr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===ln)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,on,It,kt;function pr(){if(ht===void 0){ht=window,on=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=ct(n,"firstChild").get,kt=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return It.call(t)}function N(t){return kt.call(t)}function hr(t,n){if(!O)return at(t);var r=at(g);if(r===null)r=g.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),q(e),e}return q(r),r}function dr(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function Er(t,n=1,r=!1){let e=O?g:t;for(var a;n--;)a=e,e=N(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=lt();return e===null?a==null||a.after(s):e.before(s),q(s),s}return q(e),e}function wr(t){t.textContent=""}function Ot(t){var n=y|I,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=Tt,{ctx:i,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function yr(t){const n=Ot(t);return n.equals=At,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function fn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function _n(t){var n,r=o;z(fn(t));try{St(t),n=Ut(t)}finally{z(r)}return n}function Nt(t){var n=_n(t),r=(D||(t.f&E)!==0)&&t.deps!==null?b:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Ht())}function Ct(t){o===null&&u===null&&Qt(),u!==null&&(u.f&E)!==0&&o===null&&Jt(),j&&Xt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var a=o,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(l),l.f|=$t}catch(_){throw S(l),_}else n!==null&&et(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Tt|V))===0;if(!s&&e&&(a!==null&&cn(l,a),u!==null&&(u.f&y)!==0)){var f=u;(f.effects??(f.effects=[])).push(l)}return l}function vn(t){const n=F(J,null,!1);return A(n,d),n.teardown=t,n}function gr(t){Ct();var n=o!==null&&(o.f&R)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Tr(t){return Ct(),pn(t)}function mr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Pt(t){return F(yt,t,!1)}function pn(t){return F(J,t,!0)}function Ar(t,n=[],r=Ot){const e=n.map(r);return hn(()=>t(...e.map(On)))}function hn(t,n=0){return F(J|ot|n,t,!0)}function xr(t,n=!0){return F(J|R,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=j,e=u;Et(!0),$(null);try{n.call(null)}finally{Et(r),$(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:S(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),X(t,0),A(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Lt(t,r,!0),wn(r,()=>{S(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Lt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&gt)!==0||(e.f&R)!==0;Lt(e,n,l?r:!1),e=a}}}function Rr(t){qt(t,!0)}function qt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&d)===0&&(t.f^=d),H(t)&&(A(t,I),et(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&gt)!==0||(r.f&R)!==0;qt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let Y=[],st=[];function Yt(){var t=Y;Y=[],wt(t)}function yn(){var t=st;st=[],wt(t)}function Dr(t){Y.length===0&&queueMicrotask(Yt),Y.push(t)}function dt(){Y.length>0&&Yt(),st.length>0&&yn()}let U=!1,K=!1,Z=null,k=!1,j=!1;function Et(t){j=t}let M=[];let u=null,w=!1;function $(t){u=t}let o=null;function z(t){o=t}let m=null;function gn(t){m=t}let c=null,h=0,x=null;function Tn(t){x=t}let jt=1,W=0,D=!1;function Ht(){return++jt}function H(t){var v;var n=t.f;if((n&I)!==0)return!0;if((n&b)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var a,l,s=(n&G)!==0,f=e&&o!==null&&!D,_=r.length;if(s||f){var T=t,B=T.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(T)))&&(l.reactions??(l.reactions=[])).push(T);s&&(T.f^=G),f&&B!==null&&(B.f&E)===0&&(T.f^=E)}for(a=0;a<_;a++)if(l=r[a],H(l)&&Nt(l),l.wv>t.wv)return!0}(!e||o!==null&&!D)&&A(t,d)}return!1}function mn(t,n){for(var r=n;r!==null;){if((r.f&V)!==0)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw U=!1,t}function An(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),An(n))throw t;return}r!==null&&(U=!0);{mn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&y)!==0?Bt(l,n,!1):n===l&&(r?A(l,I):(l.f&d)!==0&&A(l,b),et(l))}}function Ut(t){var _t;var n=c,r=h,e=x,a=u,l=D,s=m,f=i,_=w,T=t.f;c=null,h=0,x=null,D=(T&E)!==0&&(w||!k||u===null),u=(T&(R|P))===0?t:null,m=null,pt(t.ctx),w=!1,W++;try{var B=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(X(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!D)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(X(t,h),v.length=h);if(nt()&&x!==null&&!w&&v!==null&&(t.f&(y|b|I))===0)for(p=0;p<x.length;p++)Bt(x[p],t);return a!==null&&W++,B}finally{c=n,h=r,x=e,u=a,D=l,m=s,pt(f),w=_}}function xn(t,n){let r=n.reactions;if(r!==null){var e=Gt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(A(n,b),(n.f&(E|G))===0&&(n.f^=G),St(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function it(t){var n=t.f;if((n&Q)===0){A(t,d);var r=o,e=i,a=k;o=t,k=!0;try{(n&ot)!==0?dn(t):Ft(t),bt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,f}catch(_){rt(_,t,r,e||t.ctx)}finally{k=a,o=r}}}function Rn(){try{tn()}catch(t){if(Z!==null)rt(t,Z,null);else throw t}}function Vt(){var t=k;try{var n=0;for(k=!0;M.length>0;){n++>1e3&&Rn();var r=M,e=r.length;M=[];for(var a=0;a<e;a++){var l=In(r[a]);Dn(l)}}}finally{K=!1,k=t,Z=null,L.clear()}}function Dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|C))===0)try{H(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(a){rt(a,e,null,e.ctx)}}}function et(t){K||(K=!0,queueMicrotask(Vt));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|R))!==0){if((r&d)===0)return;n.f^=d}}M.push(n)}function In(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(R|P))!==0,l=a&&(e&d)!==0;if(!l&&(e&C)===0){if((e&yt)!==0)n.push(r);else if(a)r.f^=d;else{var s=u;try{u=r,H(r)&&it(r)}catch(T){rt(T,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function kn(t){var n;for(dt();M.length>0;)K=!0,Vt(),dt();return n}async function Ir(){await Promise.resolve(),kn()}function On(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){m!==null&&m.includes(t)&&nn();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&E)===0&&(a.f^=E)}return r&&(a=t,H(a)&&Nt(a)),j&&L.has(t)?L.get(t):t.v}function kr(t){var n=w;try{return w=!0,t()}finally{w=n}}const Sn=-7169;function A(t,n){t.f=t.f&Sn|n}function Or(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{$n as $,Vn as A,vr as B,q as C,fr as D,gt as E,an as F,Rr as G,ln as H,En as I,C as J,Cn as K,o as L,un as M,ur as N,ft as O,Nn as P,Kn as Q,Lt as R,wr as S,wn as T,Gn as U,zn as V,N as W,at as X,lt as Y,Zn as Z,Dr as _,xr as a,en as a0,er as a1,vt as a2,bn as a3,Fn as a4,Un as a5,or as a6,ct as a7,Bn as a8,Zt as a9,Wt as aA,qn as aa,Yn as ab,Xn as ac,Qn as ad,Hn as ae,Jn as af,At as ag,tr as ah,Wn as ai,Pn as aj,$ as ak,z as al,u as am,pr as an,xt as ao,Rt as ap,jn as aq,mr as ar,on as as,nr as at,rr as au,Pt as av,pn as aw,kn as ax,sr as ay,Ir as az,hn as b,Mn as c,S as d,g as e,dr as f,i as g,O as h,kr as i,ir as j,ar as k,tt as l,yr as m,cr as n,hr as o,lr as p,Tr as q,_r as r,Er as s,Ar as t,gr as u,wt as v,On as w,Ln as x,Or as y,Ot as z};
