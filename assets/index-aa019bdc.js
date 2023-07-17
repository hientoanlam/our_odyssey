(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const X={},xt=[],Se=()=>{},gc=()=>!1,mc=/^on[^a-z]/,ur=t=>mc.test(t),ms=t=>t.startsWith("onUpdate:"),re=Object.assign,_s=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_c=Object.prototype.hasOwnProperty,F=(t,e)=>_c.call(t,e),k=Array.isArray,Dt=t=>dr(t)==="[object Map]",go=t=>dr(t)==="[object Set]",M=t=>typeof t=="function",se=t=>typeof t=="string",vs=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",mo=t=>Q(t)&&M(t.then)&&M(t.catch),_o=Object.prototype.toString,dr=t=>_o.call(t),vc=t=>dr(t).slice(8,-1),vo=t=>dr(t)==="[object Object]",bs=t=>se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jn=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bc=/-(\w)/g,Bt=fr(t=>t.replace(bc,(e,n)=>n?n.toUpperCase():"")),yc=/\B([A-Z])/g,Ct=fr(t=>t.replace(yc,"-$1").toLowerCase()),bo=fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Or=fr(t=>t?`on${bo(t)}`:""),un=(t,e)=>!Object.is(t,e),Vn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ic=t=>{const e=se(t)?Number(t):NaN;return isNaN(e)?t:e};let ri;const Gr=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zt(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=se(r)?Ac(r):zt(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(se(t))return t;if(Q(t))return t}}const wc=/;(?![^(]*\))/g,Ec=/:([^]+)/,Tc=/\/\*[^]*?\*\//g;function Ac(t){const e={};return t.replace(Tc,"").split(wc).forEach(n=>{if(n){const r=n.split(Ec);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Et(t){let e="";if(se(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=Et(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sc=gs(Cc);function yo(t){return!!t||t===""}const Rc=t=>se(t)?t:t==null?"":k(t)||Q(t)&&(t.toString===_o||!M(t.toString))?JSON.stringify(t,Io,2):String(t),Io=(t,e)=>e&&e.__v_isRef?Io(t,e.value):Dt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:go(e)?{[`Set(${e.size})`]:[...e.values()]}:Q(e)&&!k(e)&&!vo(e)?String(e):e;let Te;class kc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Oc(t,e=Te){e&&e.active&&e.effects.push(t)}function Pc(){return Te}const ys=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wo=t=>(t.w&ot)>0,Eo=t=>(t.n&ot)>0,Nc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ot},xc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];wo(s)&&!Eo(s)?s.delete(t):e[n++]=s,s.w&=~ot,s.n&=~ot}e.length=n}},Jr=new WeakMap;let en=0,ot=1;const Yr=30;let Ae;const bt=Symbol(""),Xr=Symbol("");class Is{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Oc(this,r)}run(){if(!this.active)return this.fn();let e=Ae,n=nt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,nt=!0,ot=1<<++en,en<=Yr?Nc(this):si(this),this.fn()}finally{en<=Yr&&xc(this),ot=1<<--en,Ae=this.parent,nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(si(this),this.onStop&&this.onStop(),this.active=!1)}}function si(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nt=!0;const To=[];function Kt(){To.push(nt),nt=!1}function qt(){const t=To.pop();nt=t===void 0?!0:t}function ge(t,e,n){if(nt&&Ae){let r=Jr.get(t);r||Jr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ys()),Ao(s)}}function Ao(t,e){let n=!1;en<=Yr?Eo(t)||(t.n|=ot,n=!wo(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Ve(t,e,n,r,s,i){const o=Jr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&k(t)){const c=Number(r);o.forEach((l,d)=>{(d==="length"||d>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":k(t)?bs(n)&&a.push(o.get("length")):(a.push(o.get(bt)),Dt(t)&&a.push(o.get(Xr)));break;case"delete":k(t)||(a.push(o.get(bt)),Dt(t)&&a.push(o.get(Xr)));break;case"set":Dt(t)&&a.push(o.get(bt));break}if(a.length===1)a[0]&&Qr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qr(ys(c))}}function Qr(t,e){const n=k(t)?t:[...t];for(const r of n)r.computed&&ii(r);for(const r of n)r.computed||ii(r)}function ii(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Dc=gs("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vs)),Mc=ws(),Lc=ws(!1,!0),Uc=ws(!0),oi=Fc();function Fc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=$(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map($)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kt();const r=$(this)[e].apply(this,n);return qt(),r}}),t}function $c(t){const e=$(this);return ge(e,"has",t),e.hasOwnProperty(t)}function ws(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?tl:Po:e?Oo:ko).get(r))return r;const o=k(r);if(!t){if(o&&F(oi,s))return Reflect.get(oi,s,i);if(s==="hasOwnProperty")return $c}const a=Reflect.get(r,s,i);return(vs(s)?Co.has(s):Dc(s))||(t||ge(r,"get",s),e)?a:ue(a)?o&&bs(s)?a:a.value:Q(a)?t?No(a):As(a):a}}const Bc=So(),Hc=So(!0);function So(t=!1){return function(n,r,s,i){let o=n[r];if(Ht(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!Zn(s)&&!Ht(s)&&(o=$(o),s=$(s)),!k(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=k(n)&&bs(r)?Number(r)<n.length:F(n,r),c=Reflect.set(n,r,s,i);return n===$(i)&&(a?un(s,o)&&Ve(n,"set",r,s):Ve(n,"add",r,s)),c}}function jc(t,e){const n=F(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ve(t,"delete",e,void 0),r}function Vc(t,e){const n=Reflect.has(t,e);return(!vs(e)||!Co.has(e))&&ge(t,"has",e),n}function Wc(t){return ge(t,"iterate",k(t)?"length":bt),Reflect.ownKeys(t)}const Ro={get:Mc,set:Bc,deleteProperty:jc,has:Vc,ownKeys:Wc},zc={get:Uc,set(t,e){return!0},deleteProperty(t,e){return!0}},Kc=re({},Ro,{get:Lc,set:Hc}),Es=t=>t,hr=t=>Reflect.getPrototypeOf(t);function Mn(t,e,n=!1,r=!1){t=t.__v_raw;const s=$(t),i=$(e);n||(e!==i&&ge(s,"get",e),ge(s,"get",i));const{has:o}=hr(s),a=r?Es:n?Ss:dn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ln(t,e=!1){const n=this.__v_raw,r=$(n),s=$(t);return e||(t!==s&&ge(r,"has",t),ge(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Un(t,e=!1){return t=t.__v_raw,!e&&ge($(t),"iterate",bt),Reflect.get(t,"size",t)}function ai(t){t=$(t);const e=$(this);return hr(e).has.call(e,t)||(e.add(t),Ve(e,"add",t,t)),this}function ci(t,e){e=$(e);const n=$(this),{has:r,get:s}=hr(n);let i=r.call(n,t);i||(t=$(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?un(e,o)&&Ve(n,"set",t,e):Ve(n,"add",t,e),this}function li(t){const e=$(this),{has:n,get:r}=hr(e);let s=n.call(e,t);s||(t=$(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ve(e,"delete",t,void 0),i}function ui(){const t=$(this),e=t.size!==0,n=t.clear();return e&&Ve(t,"clear",void 0,void 0),n}function Fn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=$(o),c=e?Es:t?Ss:dn;return!t&&ge(a,"iterate",bt),o.forEach((l,d)=>r.call(s,c(l),c(d),i))}}function $n(t,e,n){return function(...r){const s=this.__v_raw,i=$(s),o=Dt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),d=n?Es:e?Ss:dn;return!e&&ge(i,"iterate",c?Xr:bt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[d(h[0]),d(h[1])]:d(h),done:g}},[Symbol.iterator](){return this}}}}function Ke(t){return function(...e){return t==="delete"?!1:this}}function qc(){const t={get(i){return Mn(this,i)},get size(){return Un(this)},has:Ln,add:ai,set:ci,delete:li,clear:ui,forEach:Fn(!1,!1)},e={get(i){return Mn(this,i,!1,!0)},get size(){return Un(this)},has:Ln,add:ai,set:ci,delete:li,clear:ui,forEach:Fn(!1,!0)},n={get(i){return Mn(this,i,!0)},get size(){return Un(this,!0)},has(i){return Ln.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:Fn(!0,!1)},r={get(i){return Mn(this,i,!0,!0)},get size(){return Un(this,!0)},has(i){return Ln.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$n(i,!1,!1),n[i]=$n(i,!0,!1),e[i]=$n(i,!1,!0),r[i]=$n(i,!0,!0)}),[t,n,e,r]}const[Gc,Jc,Yc,Xc]=qc();function Ts(t,e){const n=e?t?Xc:Yc:t?Jc:Gc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(F(n,s)&&s in r?n:r,s,i)}const Qc={get:Ts(!1,!1)},Zc={get:Ts(!1,!0)},el={get:Ts(!0,!1)},ko=new WeakMap,Oo=new WeakMap,Po=new WeakMap,tl=new WeakMap;function nl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rl(t){return t.__v_skip||!Object.isExtensible(t)?0:nl(vc(t))}function As(t){return Ht(t)?t:Cs(t,!1,Ro,Qc,ko)}function sl(t){return Cs(t,!1,Kc,Zc,Oo)}function No(t){return Cs(t,!0,zc,el,Po)}function Cs(t,e,n,r,s){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=rl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Mt(t){return Ht(t)?Mt(t.__v_raw):!!(t&&t.__v_isReactive)}function Ht(t){return!!(t&&t.__v_isReadonly)}function Zn(t){return!!(t&&t.__v_isShallow)}function xo(t){return Mt(t)||Ht(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Do(t){return Qn(t,"__v_skip",!0),t}const dn=t=>Q(t)?As(t):t,Ss=t=>Q(t)?No(t):t;function Mo(t){nt&&Ae&&(t=$(t),Ao(t.dep||(t.dep=ys())))}function Lo(t,e){t=$(t);const n=t.dep;n&&Qr(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function tt(t){return il(t,!1)}function il(t,e){return ue(t)?t:new ol(t,e)}class ol{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:dn(e)}get value(){return Mo(this),this._value}set value(e){const n=this.__v_isShallow||Zn(e)||Ht(e);e=n?e:$(e),un(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:dn(e),Lo(this))}}function fn(t){return ue(t)?t.value:t}const al={get:(t,e,n)=>fn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Uo(t){return Mt(t)?t:new Proxy(t,al)}class cl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Is(e,()=>{this._dirty||(this._dirty=!0,Lo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=$(this);return Mo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ll(t,e,n=!1){let r,s;const i=M(t);return i?(r=t,s=Se):(r=t.get,s=t.set),new cl(r,s,i||!s,n)}function rt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){pr(i,e,n)}return s}function we(t,e,n,r){if(M(t)){const i=rt(t,e,n,r);return i&&mo(i)&&i.catch(o=>{pr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(we(t[i],e,n,r));return s}function pr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rt(c,null,10,[t,o,a]);return}}ul(t,n,s,r)}function ul(t,e,n,r=!0){console.error(t)}let hn=!1,Zr=!1;const le=[];let De=0;const Lt=[];let Be=null,gt=0;const Fo=Promise.resolve();let Rs=null;function dl(t){const e=Rs||Fo;return t?e.then(this?t.bind(this):t):e}function fl(t){let e=De+1,n=le.length;for(;e<n;){const r=e+n>>>1;pn(le[r])<t?e=r+1:n=r}return e}function ks(t){(!le.length||!le.includes(t,hn&&t.allowRecurse?De+1:De))&&(t.id==null?le.push(t):le.splice(fl(t.id),0,t),$o())}function $o(){!hn&&!Zr&&(Zr=!0,Rs=Fo.then(Ho))}function hl(t){const e=le.indexOf(t);e>De&&le.splice(e,1)}function pl(t){k(t)?Lt.push(...t):(!Be||!Be.includes(t,t.allowRecurse?gt+1:gt))&&Lt.push(t),$o()}function di(t,e=hn?De+1:0){for(;e<le.length;e++){const n=le[e];n&&n.pre&&(le.splice(e,1),e--,n())}}function Bo(t){if(Lt.length){const e=[...new Set(Lt)];if(Lt.length=0,Be){Be.push(...e);return}for(Be=e,Be.sort((n,r)=>pn(n)-pn(r)),gt=0;gt<Be.length;gt++)Be[gt]();Be=null,gt=0}}const pn=t=>t.id==null?1/0:t.id,gl=(t,e)=>{const n=pn(t)-pn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ho(t){Zr=!1,hn=!0,le.sort(gl);const e=Se;try{for(De=0;De<le.length;De++){const n=le[De];n&&n.active!==!1&&rt(n,null,14)}}finally{De=0,le.length=0,Bo(),hn=!1,Rs=null,(le.length||Lt.length)&&Ho()}}function ml(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[d]||X;g&&(s=n.map(E=>se(E)?E.trim():E)),h&&(s=n.map(qr))}let a,c=r[a=Or(e)]||r[a=Or(Bt(e))];!c&&i&&(c=r[a=Or(Ct(e))]),c&&we(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,we(l,t,6,s)}}function jo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!M(t)){const c=l=>{const d=jo(l,e,!0);d&&(a=!0,re(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Q(t)&&r.set(t,null),null):(k(i)?i.forEach(c=>o[c]=null):re(o,i),Q(t)&&r.set(t,o),o)}function gr(t,e){return!t||!ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),F(t,e[0].toLowerCase()+e.slice(1))||F(t,Ct(e))||F(t,e))}let Ie=null,mr=null;function er(t){const e=Ie;return Ie=t,mr=t&&t.type.__scopeId||null,e}function Os(t){mr=t}function Ps(){mr=null}function sn(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wi(-1);const i=er(e);let o;try{o=t(...s)}finally{er(i),r._d&&wi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:d,renderCache:h,data:g,setupState:E,ctx:x,inheritAttrs:T}=t;let B,z;const K=er(t);try{if(n.shapeFlag&4){const O=s||r;B=xe(d.call(O,O,h,i,E,g,x)),z=c}else{const O=e;B=xe(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),z=e.props?c:_l(c)}}catch(O){an.length=0,pr(O,t,1),B=Y(Re)}let j=B;if(z&&T!==!1){const O=Object.keys(z),{shapeFlag:te}=j;O.length&&te&7&&(o&&O.some(ms)&&(z=vl(z,o)),j=at(j,z))}return n.dirs&&(j=at(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),B=j,er(K),B}const _l=t=>{let e;for(const n in t)(n==="class"||n==="style"||ur(n))&&((e||(e={}))[n]=t[n]);return e},vl=(t,e)=>{const n={};for(const r in t)(!ms(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fi(r,o,l):!!o;if(c&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const g=d[h];if(o[g]!==r[g]&&!gr(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fi(r,o,l):!0:!!o;return!1}function fi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gr(n,i))return!0}return!1}function yl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Il=t=>t.__isSuspense;function wl(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):pl(t)}const Bn={};function Nr(t,e,n){return Vo(t,e,n)}function Vo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=X){var a;const c=Pc()===((a=oe)==null?void 0:a.scope)?oe:null;let l,d=!1,h=!1;if(ue(t)?(l=()=>t.value,d=Zn(t)):Mt(t)?(l=()=>t,r=!0):k(t)?(h=!0,d=t.some(O=>Mt(O)||Zn(O)),l=()=>t.map(O=>{if(ue(O))return O.value;if(Mt(O))return vt(O);if(M(O))return rt(O,c,2)})):M(t)?e?l=()=>rt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return g&&g(),we(t,c,3,[E])}:l=Se,e&&r){const O=l;l=()=>vt(O())}let g,E=O=>{g=K.onStop=()=>{rt(O,c,4)}},x;if(vn)if(E=Se,e?n&&we(e,c,3,[l(),h?[]:void 0,E]):l(),s==="sync"){const O=vu();x=O.__watcherHandles||(O.__watcherHandles=[])}else return Se;let T=h?new Array(t.length).fill(Bn):Bn;const B=()=>{if(K.active)if(e){const O=K.run();(r||d||(h?O.some((te,he)=>un(te,T[he])):un(O,T)))&&(g&&g(),we(e,c,3,[O,T===Bn?void 0:h&&T[0]===Bn?[]:T,E]),T=O)}else K.run()};B.allowRecurse=!!e;let z;s==="sync"?z=B:s==="post"?z=()=>pe(B,c&&c.suspense):(B.pre=!0,c&&(B.id=c.uid),z=()=>ks(B));const K=new Is(l,z);e?n?B():T=K.run():s==="post"?pe(K.run.bind(K),c&&c.suspense):K.run();const j=()=>{K.stop(),c&&c.scope&&_s(c.scope.effects,K)};return x&&x.push(j),j}function El(t,e,n){const r=this.proxy,s=se(t)?t.includes(".")?Wo(r,t):()=>r[t]:t.bind(r,r);let i;M(e)?i=e:(i=e.handler,n=e);const o=oe;jt(this);const a=Vo(s,i.bind(r),n);return o?jt(o):It(),a}function Wo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vt(t,e){if(!Q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))vt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)vt(t[n],e);else if(go(t)||Dt(t))t.forEach(n=>{vt(n,e)});else if(vo(t))for(const n in t)vt(t[n],e);return t}function Ns(t,e){const n=Ie;if(n===null)return t;const r=Ir(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=X]=e[i];o&&(M(o)&&(o={mounted:o,updated:o}),o.deep&&vt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Kt(),we(c,n,8,[t.el,a,t,e]),qt())}}function zo(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ds(()=>{t.isMounted=!0}),Ms(()=>{t.isUnmounting=!0}),t}const ye=[Function,Array],Ko={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},Tl={name:"BaseTransition",props:Ko,setup(t,{slots:e}){const n=aa(),r=zo();let s;return()=>{const i=e.default&&xs(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Re){o=T;break}}const a=$(t),{mode:c}=a;if(r.isLeaving)return xr(o);const l=hi(o);if(!l)return xr(o);const d=gn(l,a,r,n);mn(l,d);const h=n.subTree,g=h&&hi(h);let E=!1;const{getTransitionKey:x}=l.type;if(x){const T=x();s===void 0?s=T:T!==s&&(s=T,E=!0)}if(g&&g.type!==Re&&(!mt(l,g)||E)){const T=gn(g,a,r,n);if(mn(g,T),c==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},xr(o);c==="in-out"&&l.type!==Re&&(T.delayLeave=(B,z,K)=>{const j=qo(r,g);j[String(g.key)]=g,B._leaveCb=()=>{z(),B._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=K})}return o}}},Al=Tl;function qo(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function gn(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:d,onBeforeLeave:h,onLeave:g,onAfterLeave:E,onLeaveCancelled:x,onBeforeAppear:T,onAppear:B,onAfterAppear:z,onAppearCancelled:K}=e,j=String(t.key),O=qo(n,t),te=(D,q)=>{D&&we(D,r,9,q)},he=(D,q)=>{const V=q[1];te(D,q),k(D)?D.every(ce=>ce.length<=1)&&V():D.length<=1&&V()},me={mode:i,persisted:o,beforeEnter(D){let q=a;if(!n.isMounted)if(s)q=T||a;else return;D._leaveCb&&D._leaveCb(!0);const V=O[j];V&&mt(t,V)&&V.el._leaveCb&&V.el._leaveCb(),te(q,[D])},enter(D){let q=c,V=l,ce=d;if(!n.isMounted)if(s)q=B||c,V=z||l,ce=K||d;else return;let C=!1;const Z=D._enterCb=_e=>{C||(C=!0,_e?te(ce,[D]):te(V,[D]),me.delayedLeave&&me.delayedLeave(),D._enterCb=void 0)};q?he(q,[D,Z]):Z()},leave(D,q){const V=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return q();te(h,[D]);let ce=!1;const C=D._leaveCb=Z=>{ce||(ce=!0,q(),Z?te(x,[D]):te(E,[D]),D._leaveCb=void 0,O[V]===t&&delete O[V])};O[V]=t,g?he(g,[D,C]):C()},clone(D){return gn(D,e,n,r)}};return me}function xr(t){if(_r(t))return t=at(t),t.children=null,t}function hi(t){return _r(t)?t.children?t.children[0]:void 0:t}function mn(t,e){t.shapeFlag&6&&t.component?mn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xs(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===be?(o.patchFlag&128&&s++,r=r.concat(xs(o.children,e,a))):(e||o.type!==Re)&&r.push(a!=null?at(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const Wn=t=>!!t.type.__asyncLoader,_r=t=>t.type.__isKeepAlive;function Cl(t,e){Go(t,"a",e)}function Sl(t,e){Go(t,"da",e)}function Go(t,e,n=oe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_r(s.parent.vnode)&&Rl(r,e,n,s),s=s.parent}}function Rl(t,e,n,r){const s=vr(e,t,r,!0);Yo(()=>{_s(r[e],s)},n)}function vr(t,e,n=oe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),jt(n);const a=we(e,n,t,o);return It(),qt(),a});return r?s.unshift(i):s.push(i),i}}const ze=t=>(e,n=oe)=>(!vn||t==="sp")&&vr(t,(...r)=>e(...r),n),kl=ze("bm"),Ds=ze("m"),Ol=ze("bu"),Jo=ze("u"),Ms=ze("bum"),Yo=ze("um"),Pl=ze("sp"),Nl=ze("rtg"),xl=ze("rtc");function Dl(t,e=oe){vr("ec",t,e)}const Ml=Symbol.for("v-ndc");function Ll(t,e,n,r){let s;const i=n&&n[r];if(k(t)||se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Q(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const es=t=>t?ca(t)?Ir(t)||t.proxy:es(t.parent):null,on=re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>es(t.parent),$root:t=>es(t.root),$emit:t=>t.emit,$options:t=>Ls(t),$forceUpdate:t=>t.f||(t.f=()=>ks(t.update)),$nextTick:t=>t.n||(t.n=dl.bind(t.proxy)),$watch:t=>El.bind(t)}),Dr=(t,e)=>t!==X&&!t.__isScriptSetup&&F(t,e),Ul={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Dr(r,e))return o[e]=1,r[e];if(s!==X&&F(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&F(l,e))return o[e]=3,i[e];if(n!==X&&F(n,e))return o[e]=4,n[e];ts&&(o[e]=0)}}const d=on[e];let h,g;if(d)return e==="$attrs"&&ge(t,"get",e),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==X&&F(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,F(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Dr(s,e)?(s[e]=n,!0):r!==X&&F(r,e)?(r[e]=n,!0):F(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==X&&F(t,o)||Dr(e,o)||(a=i[0])&&F(a,o)||F(r,o)||F(on,o)||F(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:F(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pi(t){return k(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ts=!0;function Fl(t){const e=Ls(t),n=t.proxy,r=t.ctx;ts=!1,e.beforeCreate&&gi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:d,beforeMount:h,mounted:g,beforeUpdate:E,updated:x,activated:T,deactivated:B,beforeDestroy:z,beforeUnmount:K,destroyed:j,unmounted:O,render:te,renderTracked:he,renderTriggered:me,errorCaptured:D,serverPrefetch:q,expose:V,inheritAttrs:ce,components:C,directives:Z,filters:_e}=e;if(l&&$l(l,r,null),o)for(const ee in o){const G=o[ee];M(G)&&(r[ee]=G.bind(n))}if(s){const ee=s.call(n,n);Q(ee)&&(t.data=As(ee))}if(ts=!0,i)for(const ee in i){const G=i[ee],lt=M(G)?G.bind(n,n):M(G.get)?G.get.bind(n,n):Se,xn=!M(G)&&M(G.set)?G.set.bind(n):Se,ut=gu({get:lt,set:xn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Oe=>ut.value=Oe})}if(a)for(const ee in a)Xo(a[ee],r,n,ee);if(c){const ee=M(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{zl(G,ee[G])})}d&&gi(d,t,"c");function ie(ee,G){k(G)?G.forEach(lt=>ee(lt.bind(n))):G&&ee(G.bind(n))}if(ie(kl,h),ie(Ds,g),ie(Ol,E),ie(Jo,x),ie(Cl,T),ie(Sl,B),ie(Dl,D),ie(xl,he),ie(Nl,me),ie(Ms,K),ie(Yo,O),ie(Pl,q),k(V))if(V.length){const ee=t.exposed||(t.exposed={});V.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:lt=>n[G]=lt})})}else t.exposed||(t.exposed={});te&&t.render===Se&&(t.render=te),ce!=null&&(t.inheritAttrs=ce),C&&(t.components=C),Z&&(t.directives=Z)}function $l(t,e,n=Se){k(t)&&(t=ns(t));for(const r in t){const s=t[r];let i;Q(s)?"default"in s?i=zn(s.from||r,s.default,!0):i=zn(s.from||r):i=zn(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gi(t,e,n){we(k(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xo(t,e,n,r){const s=r.includes(".")?Wo(n,r):()=>n[r];if(se(t)){const i=e[t];M(i)&&Nr(s,i)}else if(M(t))Nr(s,t.bind(n));else if(Q(t))if(k(t))t.forEach(i=>Xo(i,e,n,r));else{const i=M(t.handler)?t.handler.bind(n):e[t.handler];M(i)&&Nr(s,i,t)}}function Ls(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>tr(c,l,o,!0)),tr(c,e,o)),Q(e)&&i.set(e,c),c}function tr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&tr(t,i,n,!0),s&&s.forEach(o=>tr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Bl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Bl={data:mi,props:_i,emits:_i,methods:tn,computed:tn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:tn,directives:tn,watch:jl,provide:mi,inject:Hl};function mi(t,e){return e?t?function(){return re(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Hl(t,e){return tn(ns(t),ns(e))}function ns(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function tn(t,e){return t?re(Object.create(null),t,e):e}function _i(t,e){return t?k(t)&&k(e)?[...new Set([...t,...e])]:re(Object.create(null),pi(t),pi(e??{})):e}function jl(t,e){if(!t)return e;if(!e)return t;const n=re(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function Qo(){return{app:null,config:{isNativeTag:gc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Wl(t,e){return function(r,s=null){M(r)||(r=re({},r)),s!=null&&!Q(s)&&(s=null);const i=Qo(),o=new Set;let a=!1;const c=i.app={_uid:Vl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bu,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&M(l.install)?(o.add(l),l.install(c,...d)):M(l)&&(o.add(l),l(c,...d))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,d){return d?(i.components[l]=d,c):i.components[l]},directive(l,d){return d?(i.directives[l]=d,c):i.directives[l]},mount(l,d,h){if(!a){const g=Y(r,s);return g.appContext=i,d&&e?e(g,l):t(g,l,h),a=!0,c._container=l,l.__vue_app__=c,Ir(g.component)||g.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,d){return i.provides[l]=d,c},runWithContext(l){nr=c;try{return l()}finally{nr=null}}};return c}}let nr=null;function zl(t,e){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[t]=e}}function zn(t,e,n=!1){const r=oe||Ie;if(r||nr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&M(e)?e.call(r&&r.proxy):e}}function Kl(t,e,n,r=!1){const s={},i={};Qn(i,yr,1),t.propsDefaults=Object.create(null),Zo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ql(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=$(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let g=d[h];if(gr(t.emitsOptions,g))continue;const E=e[g];if(c)if(F(i,g))E!==i[g]&&(i[g]=E,l=!0);else{const x=Bt(g);s[x]=rs(c,a,x,E,t,!1)}else E!==i[g]&&(i[g]=E,l=!0)}}}else{Zo(t,e,s,i)&&(l=!0);let d;for(const h in a)(!e||!F(e,h)&&((d=Ct(h))===h||!F(e,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=rs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!F(e,h))&&(delete i[h],l=!0)}l&&Ve(t,"set","$attrs")}function Zo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(jn(c))continue;const l=e[c];let d;s&&F(s,d=Bt(c))?!i||!i.includes(d)?n[d]=l:(a||(a={}))[d]=l:gr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=$(n),l=a||X;for(let d=0;d<i.length;d++){const h=i[d];n[h]=rs(s,c,h,l[h],t,!F(l,h))}}return o}function rs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=F(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&M(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(jt(s),r=l[n]=c.call(null,e),It())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function ea(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!M(t)){const d=h=>{c=!0;const[g,E]=ea(h,e,!0);re(o,g),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Q(t)&&r.set(t,xt),xt;if(k(i))for(let d=0;d<i.length;d++){const h=Bt(i[d]);vi(h)&&(o[h]=X)}else if(i)for(const d in i){const h=Bt(d);if(vi(h)){const g=i[d],E=o[h]=k(g)||M(g)?{type:g}:re({},g);if(E){const x=Ii(Boolean,E.type),T=Ii(String,E.type);E[0]=x>-1,E[1]=T<0||x<T,(x>-1||F(E,"default"))&&a.push(h)}}}const l=[o,a];return Q(t)&&r.set(t,l),l}function vi(t){return t[0]!=="$"}function bi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yi(t,e){return bi(t)===bi(e)}function Ii(t,e){return k(e)?e.findIndex(n=>yi(n,t)):M(e)&&yi(e,t)?0:-1}const ta=t=>t[0]==="_"||t==="$stable",Us=t=>k(t)?t.map(xe):[xe(t)],Gl=(t,e,n)=>{if(e._n)return e;const r=sn((...s)=>Us(e(...s)),n);return r._c=!1,r},na=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ta(s))continue;const i=t[s];if(M(i))e[s]=Gl(s,i,r);else if(i!=null){const o=Us(i);e[s]=()=>o}}},ra=(t,e)=>{const n=Us(e);t.slots.default=()=>n},Jl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),Qn(e,"_",n)):na(e,t.slots={})}else t.slots={},e&&ra(t,e);Qn(t.slots,yr,1)},Yl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(re(s,e),!n&&a===1&&delete s._):(i=!e.$stable,na(e,s)),o=e}else e&&(ra(t,e),o={default:1});if(i)for(const a in s)!ta(a)&&!(a in o)&&delete s[a]};function ss(t,e,n,r,s=!1){if(k(t)){t.forEach((g,E)=>ss(g,e&&(k(e)?e[E]:e),n,r,s));return}if(Wn(r)&&!s)return;const i=r.shapeFlag&4?Ir(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,d=a.refs===X?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(se(l)?(d[l]=null,F(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),M(c))rt(c,a,12,[o,d]);else{const g=se(c),E=ue(c);if(g||E){const x=()=>{if(t.f){const T=g?F(h,c)?h[c]:d[c]:c.value;s?k(T)&&_s(T,i):k(T)?T.includes(i)||T.push(i):g?(d[c]=[i],F(h,c)&&(h[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else g?(d[c]=o,F(h,c)&&(h[c]=o)):E&&(c.value=o,t.k&&(d[t.k]=o))};o?(x.id=-1,pe(x,n)):x()}}}const pe=wl;function Xl(t){return Ql(t)}function Ql(t,e){const n=Gr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:d,parentNode:h,nextSibling:g,setScopeId:E=Se,insertStaticContent:x}=t,T=(u,f,p,_=null,m=null,y=null,w=!1,b=null,I=!!f.dynamicChildren)=>{if(u===f)return;u&&!mt(u,f)&&(_=Dn(u),Oe(u,m,y,!0),u=null),f.patchFlag===-2&&(I=!1,f.dynamicChildren=null);const{type:v,ref:S,shapeFlag:A}=f;switch(v){case br:B(u,f,p,_);break;case Re:z(u,f,p,_);break;case Kn:u==null&&K(f,p,_,w);break;case be:C(u,f,p,_,m,y,w,b,I);break;default:A&1?te(u,f,p,_,m,y,w,b,I):A&6?Z(u,f,p,_,m,y,w,b,I):(A&64||A&128)&&v.process(u,f,p,_,m,y,w,b,I,Rt)}S!=null&&m&&ss(S,u&&u.ref,y,f||u,!f)},B=(u,f,p,_)=>{if(u==null)r(f.el=a(f.children),p,_);else{const m=f.el=u.el;f.children!==u.children&&l(m,f.children)}},z=(u,f,p,_)=>{u==null?r(f.el=c(f.children||""),p,_):f.el=u.el},K=(u,f,p,_)=>{[u.el,u.anchor]=x(u.children,f,p,_,u.el,u.anchor)},j=({el:u,anchor:f},p,_)=>{let m;for(;u&&u!==f;)m=g(u),r(u,p,_),u=m;r(f,p,_)},O=({el:u,anchor:f})=>{let p;for(;u&&u!==f;)p=g(u),s(u),u=p;s(f)},te=(u,f,p,_,m,y,w,b,I)=>{w=w||f.type==="svg",u==null?he(f,p,_,m,y,w,b,I):q(u,f,m,y,w,b,I)},he=(u,f,p,_,m,y,w,b)=>{let I,v;const{type:S,props:A,shapeFlag:R,transition:N,dirs:L}=u;if(I=u.el=o(u.type,y,A&&A.is,A),R&8?d(I,u.children):R&16&&D(u.children,I,null,_,m,y&&S!=="foreignObject",w,b),L&&dt(u,null,_,"created"),me(I,u,u.scopeId,w,_),A){for(const H in A)H!=="value"&&!jn(H)&&i(I,H,null,A[H],y,u.children,_,m,Fe);"value"in A&&i(I,"value",null,A.value),(v=A.onVnodeBeforeMount)&&Ne(v,_,u)}L&&dt(u,null,_,"beforeMount");const J=(!m||m&&!m.pendingBranch)&&N&&!N.persisted;J&&N.beforeEnter(I),r(I,f,p),((v=A&&A.onVnodeMounted)||J||L)&&pe(()=>{v&&Ne(v,_,u),J&&N.enter(I),L&&dt(u,null,_,"mounted")},m)},me=(u,f,p,_,m)=>{if(p&&E(u,p),_)for(let y=0;y<_.length;y++)E(u,_[y]);if(m){let y=m.subTree;if(f===y){const w=m.vnode;me(u,w,w.scopeId,w.slotScopeIds,m.parent)}}},D=(u,f,p,_,m,y,w,b,I=0)=>{for(let v=I;v<u.length;v++){const S=u[v]=b?Ye(u[v]):xe(u[v]);T(null,S,f,p,_,m,y,w,b)}},q=(u,f,p,_,m,y,w)=>{const b=f.el=u.el;let{patchFlag:I,dynamicChildren:v,dirs:S}=f;I|=u.patchFlag&16;const A=u.props||X,R=f.props||X;let N;p&&ft(p,!1),(N=R.onVnodeBeforeUpdate)&&Ne(N,p,f,u),S&&dt(f,u,p,"beforeUpdate"),p&&ft(p,!0);const L=m&&f.type!=="foreignObject";if(v?V(u.dynamicChildren,v,b,p,_,L,y):w||G(u,f,b,null,p,_,L,y,!1),I>0){if(I&16)ce(b,f,A,R,p,_,m);else if(I&2&&A.class!==R.class&&i(b,"class",null,R.class,m),I&4&&i(b,"style",A.style,R.style,m),I&8){const J=f.dynamicProps;for(let H=0;H<J.length;H++){const ne=J[H],Ee=A[ne],kt=R[ne];(kt!==Ee||ne==="value")&&i(b,ne,Ee,kt,m,u.children,p,_,Fe)}}I&1&&u.children!==f.children&&d(b,f.children)}else!w&&v==null&&ce(b,f,A,R,p,_,m);((N=R.onVnodeUpdated)||S)&&pe(()=>{N&&Ne(N,p,f,u),S&&dt(f,u,p,"updated")},_)},V=(u,f,p,_,m,y,w)=>{for(let b=0;b<f.length;b++){const I=u[b],v=f[b],S=I.el&&(I.type===be||!mt(I,v)||I.shapeFlag&70)?h(I.el):p;T(I,v,S,null,_,m,y,w,!0)}},ce=(u,f,p,_,m,y,w)=>{if(p!==_){if(p!==X)for(const b in p)!jn(b)&&!(b in _)&&i(u,b,p[b],null,w,f.children,m,y,Fe);for(const b in _){if(jn(b))continue;const I=_[b],v=p[b];I!==v&&b!=="value"&&i(u,b,v,I,w,f.children,m,y,Fe)}"value"in _&&i(u,"value",p.value,_.value)}},C=(u,f,p,_,m,y,w,b,I)=>{const v=f.el=u?u.el:a(""),S=f.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:N}=f;N&&(b=b?b.concat(N):N),u==null?(r(v,p,_),r(S,p,_),D(f.children,p,S,m,y,w,b,I)):A>0&&A&64&&R&&u.dynamicChildren?(V(u.dynamicChildren,R,p,m,y,w,b),(f.key!=null||m&&f===m.subTree)&&sa(u,f,!0)):G(u,f,p,S,m,y,w,b,I)},Z=(u,f,p,_,m,y,w,b,I)=>{f.slotScopeIds=b,u==null?f.shapeFlag&512?m.ctx.activate(f,p,_,w,I):_e(f,p,_,m,y,w,I):Yt(u,f,I)},_e=(u,f,p,_,m,y,w)=>{const b=u.component=lu(u,_,m);if(_r(u)&&(b.ctx.renderer=Rt),uu(b),b.asyncDep){if(m&&m.registerDep(b,ie),!u.el){const I=b.subTree=Y(Re);z(null,I,f,p)}return}ie(b,u,f,p,m,y,w)},Yt=(u,f,p)=>{const _=f.component=u.component;if(bl(u,f,p))if(_.asyncDep&&!_.asyncResolved){ee(_,f,p);return}else _.next=f,hl(_.update),_.update();else f.el=u.el,_.vnode=f},ie=(u,f,p,_,m,y,w)=>{const b=()=>{if(u.isMounted){let{next:S,bu:A,u:R,parent:N,vnode:L}=u,J=S,H;ft(u,!1),S?(S.el=L.el,ee(u,S,w)):S=L,A&&Vn(A),(H=S.props&&S.props.onVnodeBeforeUpdate)&&Ne(H,N,S,L),ft(u,!0);const ne=Pr(u),Ee=u.subTree;u.subTree=ne,T(Ee,ne,h(Ee.el),Dn(Ee),u,m,y),S.el=ne.el,J===null&&yl(u,ne.el),R&&pe(R,m),(H=S.props&&S.props.onVnodeUpdated)&&pe(()=>Ne(H,N,S,L),m)}else{let S;const{el:A,props:R}=f,{bm:N,m:L,parent:J}=u,H=Wn(f);if(ft(u,!1),N&&Vn(N),!H&&(S=R&&R.onVnodeBeforeMount)&&Ne(S,J,f),ft(u,!0),A&&kr){const ne=()=>{u.subTree=Pr(u),kr(A,u.subTree,u,m,null)};H?f.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Pr(u);T(null,ne,p,_,u,m,y),f.el=ne.el}if(L&&pe(L,m),!H&&(S=R&&R.onVnodeMounted)){const ne=f;pe(()=>Ne(S,J,ne),m)}(f.shapeFlag&256||J&&Wn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&pe(u.a,m),u.isMounted=!0,f=p=_=null}},I=u.effect=new Is(b,()=>ks(v),u.scope),v=u.update=()=>I.run();v.id=u.uid,ft(u,!0),v()},ee=(u,f,p)=>{f.component=u;const _=u.vnode.props;u.vnode=f,u.next=null,ql(u,f.props,_,p),Yl(u,f.children,p),Kt(),di(),qt()},G=(u,f,p,_,m,y,w,b,I=!1)=>{const v=u&&u.children,S=u?u.shapeFlag:0,A=f.children,{patchFlag:R,shapeFlag:N}=f;if(R>0){if(R&128){xn(v,A,p,_,m,y,w,b,I);return}else if(R&256){lt(v,A,p,_,m,y,w,b,I);return}}N&8?(S&16&&Fe(v,m,y),A!==v&&d(p,A)):S&16?N&16?xn(v,A,p,_,m,y,w,b,I):Fe(v,m,y,!0):(S&8&&d(p,""),N&16&&D(A,p,_,m,y,w,b,I))},lt=(u,f,p,_,m,y,w,b,I)=>{u=u||xt,f=f||xt;const v=u.length,S=f.length,A=Math.min(v,S);let R;for(R=0;R<A;R++){const N=f[R]=I?Ye(f[R]):xe(f[R]);T(u[R],N,p,null,m,y,w,b,I)}v>S?Fe(u,m,y,!0,!1,A):D(f,p,_,m,y,w,b,I,A)},xn=(u,f,p,_,m,y,w,b,I)=>{let v=0;const S=f.length;let A=u.length-1,R=S-1;for(;v<=A&&v<=R;){const N=u[v],L=f[v]=I?Ye(f[v]):xe(f[v]);if(mt(N,L))T(N,L,p,null,m,y,w,b,I);else break;v++}for(;v<=A&&v<=R;){const N=u[A],L=f[R]=I?Ye(f[R]):xe(f[R]);if(mt(N,L))T(N,L,p,null,m,y,w,b,I);else break;A--,R--}if(v>A){if(v<=R){const N=R+1,L=N<S?f[N].el:_;for(;v<=R;)T(null,f[v]=I?Ye(f[v]):xe(f[v]),p,L,m,y,w,b,I),v++}}else if(v>R)for(;v<=A;)Oe(u[v],m,y,!0),v++;else{const N=v,L=v,J=new Map;for(v=L;v<=R;v++){const ve=f[v]=I?Ye(f[v]):xe(f[v]);ve.key!=null&&J.set(ve.key,v)}let H,ne=0;const Ee=R-L+1;let kt=!1,ei=0;const Xt=new Array(Ee);for(v=0;v<Ee;v++)Xt[v]=0;for(v=N;v<=A;v++){const ve=u[v];if(ne>=Ee){Oe(ve,m,y,!0);continue}let Pe;if(ve.key!=null)Pe=J.get(ve.key);else for(H=L;H<=R;H++)if(Xt[H-L]===0&&mt(ve,f[H])){Pe=H;break}Pe===void 0?Oe(ve,m,y,!0):(Xt[Pe-L]=v+1,Pe>=ei?ei=Pe:kt=!0,T(ve,f[Pe],p,null,m,y,w,b,I),ne++)}const ti=kt?Zl(Xt):xt;for(H=ti.length-1,v=Ee-1;v>=0;v--){const ve=L+v,Pe=f[ve],ni=ve+1<S?f[ve+1].el:_;Xt[v]===0?T(null,Pe,p,ni,m,y,w,b,I):kt&&(H<0||v!==ti[H]?ut(Pe,p,ni,2):H--)}}},ut=(u,f,p,_,m=null)=>{const{el:y,type:w,transition:b,children:I,shapeFlag:v}=u;if(v&6){ut(u.component.subTree,f,p,_);return}if(v&128){u.suspense.move(f,p,_);return}if(v&64){w.move(u,f,p,Rt);return}if(w===be){r(y,f,p);for(let A=0;A<I.length;A++)ut(I[A],f,p,_);r(u.anchor,f,p);return}if(w===Kn){j(u,f,p);return}if(_!==2&&v&1&&b)if(_===0)b.beforeEnter(y),r(y,f,p),pe(()=>b.enter(y),m);else{const{leave:A,delayLeave:R,afterLeave:N}=b,L=()=>r(y,f,p),J=()=>{A(y,()=>{L(),N&&N()})};R?R(y,L,J):J()}else r(y,f,p)},Oe=(u,f,p,_=!1,m=!1)=>{const{type:y,props:w,ref:b,children:I,dynamicChildren:v,shapeFlag:S,patchFlag:A,dirs:R}=u;if(b!=null&&ss(b,null,p,u,!0),S&256){f.ctx.deactivate(u);return}const N=S&1&&R,L=!Wn(u);let J;if(L&&(J=w&&w.onVnodeBeforeUnmount)&&Ne(J,f,u),S&6)pc(u.component,p,_);else{if(S&128){u.suspense.unmount(p,_);return}N&&dt(u,null,f,"beforeUnmount"),S&64?u.type.remove(u,f,p,m,Rt,_):v&&(y!==be||A>0&&A&64)?Fe(v,f,p,!1,!0):(y===be&&A&384||!m&&S&16)&&Fe(I,f,p),_&&Qs(u)}(L&&(J=w&&w.onVnodeUnmounted)||N)&&pe(()=>{J&&Ne(J,f,u),N&&dt(u,null,f,"unmounted")},p)},Qs=u=>{const{type:f,el:p,anchor:_,transition:m}=u;if(f===be){hc(p,_);return}if(f===Kn){O(u);return}const y=()=>{s(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:w,delayLeave:b}=m,I=()=>w(p,y);b?b(u.el,y,I):I()}else y()},hc=(u,f)=>{let p;for(;u!==f;)p=g(u),s(u),u=p;s(f)},pc=(u,f,p)=>{const{bum:_,scope:m,update:y,subTree:w,um:b}=u;_&&Vn(_),m.stop(),y&&(y.active=!1,Oe(w,u,f,p)),b&&pe(b,f),pe(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Fe=(u,f,p,_=!1,m=!1,y=0)=>{for(let w=y;w<u.length;w++)Oe(u[w],f,p,_,m)},Dn=u=>u.shapeFlag&6?Dn(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),Zs=(u,f,p)=>{u==null?f._vnode&&Oe(f._vnode,null,null,!0):T(f._vnode||null,u,f,null,null,null,p),di(),Bo(),f._vnode=u},Rt={p:T,um:Oe,m:ut,r:Qs,mt:_e,mc:D,pc:G,pbc:V,n:Dn,o:t};let Rr,kr;return e&&([Rr,kr]=e(Rt)),{render:Zs,hydrate:Rr,createApp:Wl(Zs,Rr)}}function ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sa(t,e,n=!1){const r=t.children,s=e.children;if(k(r)&&k(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ye(s[i]),a.el=o.el),n||sa(o,a)),a.type===br&&(a.el=o.el)}}function Zl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const eu=t=>t.__isTeleport,be=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),Kn=Symbol.for("v-stc"),an=[];let Ce=null;function ae(t=!1){an.push(Ce=t?null:[])}function tu(){an.pop(),Ce=an[an.length-1]||null}let _n=1;function wi(t){_n+=t}function ia(t){return t.dynamicChildren=_n>0?Ce||xt:null,tu(),_n>0&&Ce&&Ce.push(t),t}function Me(t,e,n,r,s,i){return ia(U(t,e,n,r,s,i,!0))}function yt(t,e,n,r,s){return ia(Y(t,e,n,r,s,!0))}function is(t){return t?t.__v_isVNode===!0:!1}function mt(t,e){return t.type===e.type&&t.key===e.key}const yr="__vInternal",oa=({key:t})=>t??null,qn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?se(t)||ue(t)||M(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,r=0,s=null,i=t===be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oa(e),ref:e&&qn(e),scopeId:mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(Fs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=se(n)?8:16),_n>0&&!o&&Ce&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ce.push(c),c}const Y=nu;function nu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ml)&&(t=Re),is(t)){const a=at(t,e,!0);return n&&Fs(a,n),_n>0&&!i&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(t)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(pu(t)&&(t=t.__vccOpts),e){e=ru(e);let{class:a,style:c}=e;a&&!se(a)&&(e.class=Et(a)),Q(c)&&(xo(c)&&!k(c)&&(c=re({},c)),e.style=zt(c))}const o=se(t)?1:Il(t)?128:eu(t)?64:Q(t)?4:M(t)?2:0;return U(t,e,n,r,s,o,i,!0)}function ru(t){return t?xo(t)||yr in t?re({},t):t:null}function at(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ou(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&oa(a),ref:e&&e.ref?n&&s?k(s)?s.concat(qn(e)):[s,qn(e)]:qn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&at(t.ssContent),ssFallback:t.ssFallback&&at(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function su(t=" ",e=0){return Y(br,null,t,e)}function iu(t,e){const n=Y(Kn,null,t);return n.staticCount=e,n}function Mr(t="",e=!1){return e?(ae(),yt(Re,null,t)):Y(Re,null,t)}function xe(t){return t==null||typeof t=="boolean"?Y(Re):k(t)?Y(be,null,t.slice()):typeof t=="object"?Ye(t):Y(br,null,String(t))}function Ye(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:at(t)}function Fs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(yr in e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[su(e)]):n=8);t.children=e,t.shapeFlag|=n}function ou(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Et([e.class,r.class]));else if(s==="style")e.style=zt([e.style,r.style]);else if(ur(s)){const i=e[s],o=r[s];o&&i!==o&&!(k(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ne(t,e,n,r=null){we(t,e,7,[n,r])}const au=Qo();let cu=0;function lu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||au,i={uid:cu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ea(r,s),emitsOptions:jo(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ml.bind(null,i),t.ce&&t.ce(i),i}let oe=null;const aa=()=>oe||Ie;let $s,Ot,Ei="__VUE_INSTANCE_SETTERS__";(Ot=Gr()[Ei])||(Ot=Gr()[Ei]=[]),Ot.push(t=>oe=t),$s=t=>{Ot.length>1?Ot.forEach(e=>e(t)):Ot[0](t)};const jt=t=>{$s(t),t.scope.on()},It=()=>{oe&&oe.scope.off(),$s(null)};function ca(t){return t.vnode.shapeFlag&4}let vn=!1;function uu(t,e=!1){vn=e;const{props:n,children:r}=t.vnode,s=ca(t);Kl(t,n,s,e),Jl(t,r);const i=s?du(t,e):void 0;return vn=!1,i}function du(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Do(new Proxy(t.ctx,Ul));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hu(t):null;jt(t),Kt();const i=rt(r,t,0,[t.props,s]);if(qt(),It(),mo(i)){if(i.then(It,It),e)return i.then(o=>{Ti(t,o,e)}).catch(o=>{pr(o,t,0)});t.asyncDep=i}else Ti(t,i,e)}else la(t,e)}function Ti(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=Uo(e)),la(t,n)}let Ai;function la(t,e,n){const r=t.type;if(!t.render){if(!e&&Ai&&!r.render){const s=r.template||Ls(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=re(re({isCustomElement:i,delimiters:a},o),c);r.render=Ai(s,l)}}t.render=r.render||Se}jt(t),Kt(),Fl(t),qt(),It()}function fu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ge(t,"get","$attrs"),e[n]}}))}function hu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fu(t)},slots:t.slots,emit:t.emit,expose:e}}function Ir(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Uo(Do(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in on)return on[n](t)},has(e,n){return n in e||n in on}}))}function pu(t){return M(t)&&"__vccOpts"in t}const gu=(t,e)=>ll(t,e,vn);function mu(t,e,n){const r=arguments.length;return r===2?Q(e)&&!k(e)?is(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&is(n)&&(n=[n]),Y(t,e,n))}const _u=Symbol.for("v-scx"),vu=()=>zn(_u),bu="3.3.4",yu="http://www.w3.org/2000/svg",_t=typeof document<"u"?document:null,Ci=_t&&_t.createElement("template"),Iu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?_t.createElementNS(yu,t):_t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ci.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ci.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Eu(t,e,n){const r=t.style,s=se(n);if(n&&!s){if(e&&!se(e))for(const i in e)n[i]==null&&os(r,i,"");for(const i in n)os(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Si=/\s*!important$/;function os(t,e,n){if(k(n))n.forEach(r=>os(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tu(t,e);Si.test(n)?t.setProperty(Ct(r),n.replace(Si,""),"important"):t[r]=n}}const Ri=["Webkit","Moz","ms"],Lr={};function Tu(t,e){const n=Lr[e];if(n)return n;let r=Bt(e);if(r!=="filter"&&r in t)return Lr[e]=r;r=bo(r);for(let s=0;s<Ri.length;s++){const i=Ri[s]+r;if(i in t)return Lr[e]=i}return e}const ki="http://www.w3.org/1999/xlink";function Au(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ki,e.slice(6,e.length)):t.setAttributeNS(ki,e,n);else{const i=Sc(e);n==null||i&&!yo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,d=n??"";l!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yo(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Pt(t,e,n,r){t.addEventListener(e,n,r)}function Su(t,e,n,r){t.removeEventListener(e,n,r)}function Ru(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ku(e);if(r){const l=i[e]=Nu(r,s);Pt(t,a,l,c)}else o&&(Su(t,a,o,c),i[e]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function ku(t){let e;if(Oi.test(t)){e={};let r;for(;r=t.match(Oi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ct(t.slice(2)),e]}let Ur=0;const Ou=Promise.resolve(),Pu=()=>Ur||(Ou.then(()=>Ur=0),Ur=Date.now());function Nu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;we(xu(r,n.value),e,5,[r])};return n.value=t,n.attached=Pu(),n}function xu(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pi=/^on[a-z]/,Du=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?wu(t,r,s):e==="style"?Eu(t,n,r):ur(e)?ms(e)||Ru(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mu(t,e,r,s))?Cu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Au(t,e,r,s))};function Mu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Pi.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Pi.test(e)&&se(n)?!1:e in t}const qe="transition",Qt="animation",cn=(t,{slots:e})=>mu(Al,da(t),e);cn.displayName="Transition";const ua={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lu=cn.props=re({},Ko,ua),ht=(t,e=[])=>{k(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ni=t=>t?k(t)?t.some(e=>e.length>1):t.length>1:!1;function da(t){const e={};for(const C in t)C in ua||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:d=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,x=Uu(s),T=x&&x[0],B=x&&x[1],{onBeforeEnter:z,onEnter:K,onEnterCancelled:j,onLeave:O,onLeaveCancelled:te,onBeforeAppear:he=z,onAppear:me=K,onAppearCancelled:D=j}=e,q=(C,Z,_e)=>{Je(C,Z?d:a),Je(C,Z?l:o),_e&&_e()},V=(C,Z)=>{C._isLeaving=!1,Je(C,h),Je(C,E),Je(C,g),Z&&Z()},ce=C=>(Z,_e)=>{const Yt=C?me:K,ie=()=>q(Z,C,_e);ht(Yt,[Z,ie]),xi(()=>{Je(Z,C?c:i),$e(Z,C?d:a),Ni(Yt)||Di(Z,r,T,ie)})};return re(e,{onBeforeEnter(C){ht(z,[C]),$e(C,i),$e(C,o)},onBeforeAppear(C){ht(he,[C]),$e(C,c),$e(C,l)},onEnter:ce(!1),onAppear:ce(!0),onLeave(C,Z){C._isLeaving=!0;const _e=()=>V(C,Z);$e(C,h),ha(),$e(C,g),xi(()=>{C._isLeaving&&(Je(C,h),$e(C,E),Ni(O)||Di(C,r,B,_e))}),ht(O,[C,_e])},onEnterCancelled(C){q(C,!1),ht(j,[C])},onAppearCancelled(C){q(C,!0),ht(D,[C])},onLeaveCancelled(C){V(C),ht(te,[C])}})}function Uu(t){if(t==null)return null;if(Q(t))return[Fr(t.enter),Fr(t.leave)];{const e=Fr(t);return[e,e]}}function Fr(t){return Ic(t)}function $e(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Je(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function xi(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Fu=0;function Di(t,e,n,r){const s=t._endId=++Fu,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=fa(t,e);if(!o)return r();const l=o+"end";let d=0;const h=()=>{t.removeEventListener(l,g),i()},g=E=>{E.target===t&&++d>=c&&h()};setTimeout(()=>{d<c&&h()},a+1),t.addEventListener(l,g)}function fa(t,e){const n=window.getComputedStyle(t),r=x=>(n[x]||"").split(", "),s=r(`${qe}Delay`),i=r(`${qe}Duration`),o=Mi(s,i),a=r(`${Qt}Delay`),c=r(`${Qt}Duration`),l=Mi(a,c);let d=null,h=0,g=0;e===qe?o>0&&(d=qe,h=o,g=i.length):e===Qt?l>0&&(d=Qt,h=l,g=c.length):(h=Math.max(o,l),d=h>0?o>l?qe:Qt:null,g=d?d===qe?i.length:c.length:0);const E=d===qe&&/\b(transform|all)(,|$)/.test(r(`${qe}Property`).toString());return{type:d,timeout:h,propCount:g,hasTransform:E}}function Mi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Li(n)+Li(t[r])))}function Li(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ha(){return document.body.offsetHeight}const pa=new WeakMap,ga=new WeakMap,ma={name:"TransitionGroup",props:re({},Lu,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=aa(),r=zo();let s,i;return Jo(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Wu(s[0].el,n.vnode.el,o))return;s.forEach(Hu),s.forEach(ju);const a=s.filter(Vu);ha(),a.forEach(c=>{const l=c.el,d=l.style;$e(l,o),d.transform=d.webkitTransform=d.transitionDuration="";const h=l._moveCb=g=>{g&&g.target!==l||(!g||/transform$/.test(g.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Je(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=$(t),a=da(o);let c=o.tag||be;s=i,i=e.default?xs(e.default()):[];for(let l=0;l<i.length;l++){const d=i[l];d.key!=null&&mn(d,gn(d,a,r,n))}if(s)for(let l=0;l<s.length;l++){const d=s[l];mn(d,gn(d,a,r,n)),pa.set(d,d.el.getBoundingClientRect())}return Y(c,null,i)}}},$u=t=>delete t.mode;ma.props;const Bu=ma;function Hu(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ju(t){ga.set(t,t.el.getBoundingClientRect())}function Vu(t){const e=pa.get(t),n=ga.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Wu(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=fa(r);return s.removeChild(r),i}const Ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return k(e)?n=>Vn(e,n):e};function zu(t){t.target.composing=!0}function Fi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ku={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ui(s);const i=r||s.props&&s.props.type==="number";Pt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qr(a)),t._assign(a)}),n&&Pt(t,"change",()=>{t.value=t.value.trim()}),e||(Pt(t,"compositionstart",zu),Pt(t,"compositionend",Fi),Pt(t,"change",Fi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ui(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&qr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gu=(t,e)=>n=>{if(!("key"in n))return;const r=Ct(n.key);if(e.some(s=>s===r||qu[s]===r))return t(n)},_a={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Zt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Zt(t,!0),r.enter(t)):r.leave(t,()=>{Zt(t,!1)}):Zt(t,e))},beforeUnmount(t,{value:e}){Zt(t,e)}};function Zt(t,e){t.style.display=e?t._vod:"none"}const Ju=re({patchProp:Du},Iu);let $i;function Yu(){return $i||($i=Xl(Ju))}const Xu=(...t)=>{const e=Yu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qu(r);if(!s)return;const i=e._component;!M(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qu(t){return se(t)?document.querySelector(t):t}const Zu="/our_odyssey/assets/jar-ea323999.svg";var ed="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",td="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z";const Tn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Bi={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},nd={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both","none"].includes(t)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return Bi[this.type]||Bi.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},rd=["width","height","viewBox"],sd=["d"];function id(t,e,n,r,s,i){return ae(),Me("svg",{width:i.sizeValue,height:i.sizeValue,viewBox:i.viewboxValue,style:zt(i.styles)},[U("path",{d:n.path},null,8,sd)],12,rd)}const va=Tn(nd,[["render",id],["__scopeId","data-v-76aa6b74"]]),as={__name:"CloseButton",props:{show:{type:Boolean,default:!1}},setup(t){return(e,n)=>Ns((ae(),yt(fn(va),{class:"close-btn",size:"24",type:"mdi",path:fn(td)},null,8,["path"])),[[_a,t.show]])}},od={class:"flex flex-row justify-between items-center mb-6"},ad={class:"text-white text-center font-bold text-l"},cd=U("div",{class:"overflow-y-scroll max-h-72 mb-6"},[U("pre",{class:"whitespace-pre-line text-white text-justify text-base"},`            “luminaelixir” combines “lumina” (light) and “elixir” (magical potion) to represent a potent source of light, positivity, and healing. It means that I want to provide something for you to be happy and shiny.
            
            This bottle contains a lot of capsules prepared by me. Whenever you are in a bad mood, please feel free to pick up one capsule to read my uplifting message.
            
            I am not sure that you will be better after reading the message, but keep in mind that I will always be by your side.
            `)],-1),ld={__name:"ModalForm",props:{is_shown:{type:Boolean,default:!1},msg:String,title:String,color:{type:String,default:"white"}},setup(t){return(e,n)=>(ae(),Me("div",{class:Et(["p-6 rounded bg-gradient-to-br to-transparent border backdrop-blur-lg",[`from-${t.color}/40`,`border-${t.color}`]])},[U("div",od,[U("div",null,[Y(as,{onClick:n[0]||(n[0]=r=>e.$emit("close"))})]),U("div",ad,Rc(t.title),1),U("div",null,[Y(as,{onClick:n[1]||(n[1]=r=>e.$emit("close")),show:t.is_shown},null,8,["show"])])]),cd],2))}},ud={class:"top-0 absolute grid grid-cols-12 w-auto gap-x-6 bg-black/90",style:"z-index: 15"},dd=U("div",{class:"col-span-3"},null,-1),fd={class:"col-span-6 flex flex-col justify-center items-center h-screen"},hd={class:"absolute text-white/70 self-center bottom-8"},pd=U("div",{class:"col-span-3"},null,-1),Hi={__name:"ModalView",props:{is_shown:{type:Boolean,default:!1},msg:String,title:String,color:{type:String,default:"white"}},setup(t){return(e,n)=>(ae(),Me("div",ud,[dd,U("div",fd,[U("div",{class:Et({"hover:drop-shadow-[0.5rem_0.5rem_2rem_rgba(255,255,255,0.3)] transition duration-500 cursor-pointer":!t.is_shown})},[Y(ld,{is_shown:t.is_shown,onClose:n[0]||(n[0]=r=>e.$emit("close")),onDblclick:n[1]||(n[1]=r=>e.$emit("close")),color:t.color,title:t.title},null,8,["is_shown","color","title"])],2),Ns(U("div",hd,"double-click the message to claim it",512),[[_a,!t.is_shown]])]),pd]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,E=l&63;c||(E=64,o||(g=64)),r.push(n[d],n[h],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ba(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new md;const g=i<<2|a>>4;if(r.push(g),l!==64){const E=a<<4&240|l>>2;if(r.push(E),h!==64){const x=l<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class md extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _d=function(t){const e=ba(t);return ya.encodeByteArray(e,!0)},Ia=function(t){return _d(t).replace(/\./g,"")},wa=function(t){try{return ya.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=()=>vd().__FIREBASE_DEFAULTS__,yd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Id=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wa(t[1]);return e&&JSON.parse(e)},Bs=()=>{try{return bd()||yd()||Id()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wd=t=>{var e,n;return(n=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ea=()=>{var t;return(t=Bs())===null||t===void 0?void 0:t.config},Ta=t=>{var e;return(e=Bs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Ad(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="FirebaseError";class ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Od,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,r)}}function Pd(t,e){return t.replace(Nd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nd=/\{\$([^}]+)}/g;function xd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ji(i)&&ji(o)){if(!rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ji(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dd(t,e){const n=new Md(t,e);return n.subscribe.bind(n)}class Md{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ld(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$r),s.error===void 0&&(s.error=$r),s.complete===void 0&&(s.complete=$r);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ld(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $r(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ed;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($d(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fd(t){return t===pt?void 0:t}function $d(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ud(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Hd={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},jd=W.INFO,Vd={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Wd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Aa{constructor(e){this.name=e,this._logLevel=jd,this._logHandler=Wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const zd=(t,e)=>e.some(n=>t instanceof n);let Vi,Wi;function Kd(){return Vi||(Vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qd(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ca=new WeakMap,cs=new WeakMap,Sa=new WeakMap,Br=new WeakMap,Hs=new WeakMap;function Gd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(st(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ca.set(n,t)}).catch(()=>{}),Hs.set(e,t),e}function Jd(t){if(cs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cs.set(t,e)}let ls={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yd(t){ls=t(ls)}function Xd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hr(this),e,...n);return Sa.set(r,e.sort?e.sort():[e]),st(r)}:qd().includes(t)?function(...e){return t.apply(Hr(this),e),st(Ca.get(this))}:function(...e){return st(t.apply(Hr(this),e))}}function Qd(t){return typeof t=="function"?Xd(t):(t instanceof IDBTransaction&&Jd(t),zd(t,Kd())?new Proxy(t,ls):t)}function st(t){if(t instanceof IDBRequest)return Gd(t);if(Br.has(t))return Br.get(t);const e=Qd(t);return e!==t&&(Br.set(t,e),Hs.set(e,t)),e}const Hr=t=>Hs.get(t);function Zd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=st(o);return r&&o.addEventListener("upgradeneeded",c=>{r(st(o.result),c.oldVersion,c.newVersion,st(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ef=["get","getKey","getAll","getAllKeys","count"],tf=["put","add","delete","clear"],jr=new Map;function zi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ef.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return jr.set(e,i),i}Yd(t=>({...t,get:(e,n,r)=>zi(e,n)||t.get(e,n,r),has:(e,n)=>!!zi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",Ki="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Aa("@firebase/app"),sf="@firebase/app-compat",of="@firebase/analytics-compat",af="@firebase/analytics",cf="@firebase/app-check-compat",lf="@firebase/app-check",uf="@firebase/auth",df="@firebase/auth-compat",ff="@firebase/database",hf="@firebase/database-compat",pf="@firebase/functions",gf="@firebase/functions-compat",mf="@firebase/installations",_f="@firebase/installations-compat",vf="@firebase/messaging",bf="@firebase/messaging-compat",yf="@firebase/performance",If="@firebase/performance-compat",wf="@firebase/remote-config",Ef="@firebase/remote-config-compat",Tf="@firebase/storage",Af="@firebase/storage-compat",Cf="@firebase/firestore",Sf="@firebase/firestore-compat",Rf="firebase",kf="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",Of={[us]:"fire-core",[sf]:"fire-core-compat",[af]:"fire-analytics",[of]:"fire-analytics-compat",[lf]:"fire-app-check",[cf]:"fire-app-check-compat",[uf]:"fire-auth",[df]:"fire-auth-compat",[ff]:"fire-rtdb",[hf]:"fire-rtdb-compat",[pf]:"fire-fn",[gf]:"fire-fn-compat",[mf]:"fire-iid",[_f]:"fire-iid-compat",[vf]:"fire-fcm",[bf]:"fire-fcm-compat",[yf]:"fire-perf",[If]:"fire-perf-compat",[wf]:"fire-rc",[Ef]:"fire-rc-compat",[Tf]:"fire-gcs",[Af]:"fire-gcs-compat",[Cf]:"fire-fst",[Sf]:"fire-fst-compat","fire-js":"fire-js",[Rf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map,fs=new Map;function Pf(t,e){try{t.container.addComponent(e)}catch(n){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(fs.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;fs.set(e,t);for(const n of sr.values())Pf(n,t);return!0}function Ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},it=new An("app","Firebase",Nf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=kf;function ka(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ds,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw it.create("bad-app-name",{appName:String(s)});if(n||(n=Ea()),!n)throw it.create("no-options");const i=sr.get(s);if(i){if(rr(n,i.options)&&rr(r,i.config))return i;throw it.create("duplicate-app",{appName:s})}const o=new Bd(s);for(const c of fs.values())o.addComponent(c);const a=new xf(n,r,o);return sr.set(s,a),a}function Df(t=ds){const e=sr.get(t);if(!e&&t===ds&&Ea())return ka();if(!e)throw it.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let s=(r=Of[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}bn(new Vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="firebase-heartbeat-database",Lf=1,yn="firebase-heartbeat-store";let Vr=null;function Oa(){return Vr||(Vr=Zd(Mf,Lf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yn)}}}).catch(t=>{throw it.create("idb-open",{originalErrorMessage:t.message})})),Vr}async function Uf(t){try{return await(await Oa()).transaction(yn).objectStore(yn).get(Pa(t))}catch(e){if(e instanceof ct)Tt.warn(e.message);else{const n=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(n.message)}}}async function qi(t,e){try{const r=(await Oa()).transaction(yn,"readwrite");await r.objectStore(yn).put(e,Pa(t)),await r.done}catch(n){if(n instanceof ct)Tt.warn(n.message);else{const r=it.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tt.warn(r.message)}}}function Pa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=1024,$f=30*24*60*60*1e3;class Bf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$f}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gi(),{heartbeatsToSend:n,unsentEntries:r}=Hf(this._heartbeatsCache.heartbeats),s=Ia(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gi(){return new Date().toISOString().substring(0,10)}function Hf(t,e=Ff){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ji(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ji(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?kd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ji(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){bn(new Vt("platform-logger",e=>new nf(e),"PRIVATE")),bn(new Vt("heartbeat",e=>new Bf(e),"PRIVATE")),Ut(us,Ki,t),Ut(us,Ki,"esm2017"),Ut("fire-js","")}Vf("");function js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Na(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wf=Na,xa=new An("auth","Firebase",Na());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Aa("@firebase/auth");function zf(t,...e){ir.logLevel<=W.WARN&&ir.warn(`Auth (${Sn}): ${t}`,...e)}function Gn(t,...e){ir.logLevel<=W.ERROR&&ir.error(`Auth (${Sn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,...e){throw Vs(t,...e)}function Le(t,...e){return Vs(t,...e)}function Kf(t,e,n){const r=Object.assign(Object.assign({},Wf()),{[e]:n});return new An("auth","Firebase",r).create(e,{appName:t.name})}function Vs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xa.create(t,...e)}function P(t,e,...n){if(!t)throw Vs(e,...n)}function He(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gn(e),new Error(e)}function We(t,e){t||He(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qf(){return Yi()==="http:"||Yi()==="https:"}function Yi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qf()||Ad()||"connection"in navigator)?navigator.onLine:!0}function Jf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){this.shortDelay=e,this.longDelay=n,We(n>e,"Short delay should be less than long delay!"),this.isMobile=Td()||Cd()}get(){return Gf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e){We(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Rn(3e4,6e4);function kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gt(t,e,n,r,s={}){return Ma(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Cn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Da.fetch()(La(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ma(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yf),e);try{const s=new Qf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hn(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Kf(t,d,l);ke(t,d)}}catch(s){if(s instanceof ct)throw s;ke(t,"network-request-failed",{message:String(s)})}}async function wr(t,e,n,r,s={}){const i=await Gt(t,e,n,r,s);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function La(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ws(t.config,s):`${t.config.apiScheme}://${s}`}class Qf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"network-request-failed")),Xf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Le(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(t,e){return Gt(t,"POST","/v1/accounts:delete",e)}async function eh(t,e){return Gt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function th(t,e=!1){const n=St(t),r=await n.getIdToken(e),s=zs(r);P(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ln(Wr(s.auth_time)),issuedAtTime:ln(Wr(s.iat)),expirationTime:ln(Wr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wr(t){return Number(t)*1e3}function zs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gn("JWT malformed, contained fewer than 3 sections"),null;try{const s=wa(n);return s?JSON.parse(s):(Gn("Failed to decode base64 JWT payload"),null)}catch(s){return Gn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nh(t){const e=zs(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ct&&rh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ln(this.lastLoginAt),this.creationTime=ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t){var e;const n=t.auth,r=await t.getIdToken(),s=await In(t,eh(n,{idToken:r}));P(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ah(i.providerUserInfo):[],a=oh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ua(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function ih(t){const e=St(t);await or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ah(t){return t.map(e=>{var{providerId:n}=e,r=js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(t,e){const n=await Ma(t,{},async()=>{const r=Cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=La(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Da.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ch(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wn;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(P(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(P(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ua(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return th(this,e)}reload(){return ih(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await or(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await In(this,Zf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,z=(l=n.createdAt)!==null&&l!==void 0?l:void 0,K=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:O,isAnonymous:te,providerData:he,stsTokenManager:me}=n;P(j&&me,e,"internal-error");const D=wn.fromJSON(this.name,me);P(typeof j=="string",e,"internal-error"),Ge(h,e.name),Ge(g,e.name),P(typeof O=="boolean",e,"internal-error"),P(typeof te=="boolean",e,"internal-error"),Ge(E,e.name),Ge(x,e.name),Ge(T,e.name),Ge(B,e.name),Ge(z,e.name),Ge(K,e.name);const q=new wt({uid:j,auth:e,email:g,emailVerified:O,displayName:h,isAnonymous:te,photoURL:x,phoneNumber:E,tenantId:T,stsTokenManager:D,createdAt:z,lastLoginAt:K});return he&&Array.isArray(he)&&(q.providerData=he.map(V=>Object.assign({},V))),B&&(q._redirectEventId=B),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new wn;s.updateFromServerResponse(n);const i=new wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await or(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map;function je(t){We(t instanceof Function,"Expected a class definition");let e=Xi.get(t);return e?(We(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fa.type="NONE";const Qi=Fa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ft{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ft(je(Qi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||je(Qi);const o=Jn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const d=await l._get(o);if(d){const h=wt._fromJSON(e,d);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ft(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ft(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ha(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($a(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Va(e))return"Blackberry";if(Wa(e))return"Webos";if(Ks(e))return"Safari";if((e.includes("chrome/")||Ba(e))&&!e.includes("edge/"))return"Chrome";if(ja(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $a(t=de()){return/firefox\//i.test(t)}function Ks(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ba(t=de()){return/crios\//i.test(t)}function Ha(t=de()){return/iemobile/i.test(t)}function ja(t=de()){return/android/i.test(t)}function Va(t=de()){return/blackberry/i.test(t)}function Wa(t=de()){return/webos/i.test(t)}function Er(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lh(t=de()){var e;return Er(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uh(){return Sd()&&document.documentMode===10}function za(t=de()){return Er(t)||ja(t)||Wa(t)||Va(t)||/windows phone/i.test(t)||Ha(t)}function dh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e=[]){let n;switch(t){case"Browser":n=Zi(de());break;case"Worker":n=`${Zi(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sn}/${r}`}async function qa(t,e){return Gt(t,"GET","/v2/recaptchaConfig",kn(t,e))}function eo(t){return t!==void 0&&t.enterprise!==void 0}class Ga{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ja(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Le("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fh().appendChild(r)})}function hh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ph="https://www.google.com/recaptcha/enterprise.js?render=",gh="recaptcha-enterprise",mh="NO_RECAPTCHA";class Ya{constructor(e){this.type=gh,this.auth=On(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{qa(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ga(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;eo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(mh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&eo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ja(ph+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function to(t,e,n,r=!1){const s=new Ya(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new no(this),this.idTokenSubscription=new no(this),this.beforeStateQueue=new _h(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ft.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?St(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}async initializeRecaptchaConfig(){const e=await qa(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ga(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ya(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&je(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Ft.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function On(t){return St(t)}class no{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dd(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){const n=Ra(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rr(i,e??{}))return s;ke(s,"already-initialized")}return n.initialize({options:e})}function yh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ih(t,e,n){const r=On(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Xa(e),{host:o,port:a}=wh(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Eh()}function Xa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wh(t){const e=Xa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ro(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ro(o)}}}function ro(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Eh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,n){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}async function Th(t,e){return Gt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return wr(t,"POST","/v1/accounts:signInWithPassword",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,e))}async function Ch(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends qs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new En(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new En(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await to(e,r,"signInWithPassword");return zr(e,s)}else return zr(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await to(e,r,"signInWithPassword");return zr(e,i)}else return Promise.reject(s)});case"emailLink":return Ah(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Th(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ch(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return wr(t,"POST","/v1/accounts:signInWithIdp",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="http://localhost";class At extends qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new At(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new At(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $t(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$t(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$t(e,n)}buildRequest(){const e={requestUri:Sh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kh(t){const e=nn(rn(t)).link,n=e?nn(rn(e)).deep_link_id:null,r=nn(rn(t)).deep_link_id;return(r?nn(rn(r)).link:null)||r||n||e||t}class Gs{constructor(e){var n,r,s,i,o,a;const c=nn(rn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Rh((s=c.mode)!==null&&s!==void 0?s:null);P(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kh(e);try{return new Gs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.providerId=Jt.PROVIDER_ID}static credential(e,n){return En._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gs.parseLink(n);return P(r,"argument-error"),En._fromEmailAndCode(e,r.code,r.tenantId)}}Jt.PROVIDER_ID="password";Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Qa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Pn{constructor(){super("facebook.com")}static credential(e){return At._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return At._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Pn{constructor(){super("github.com")}static credential(e){return At._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Pn{constructor(){super("twitter.com")}static credential(e,n){return At._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return et.credential(n,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wt._fromIdTokenResponse(e,r,s),o=so(r);return new Wt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=so(r);return new Wt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function so(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ar.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ar(e,n,r,s)}}function Za(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ar._fromErrorAndOperation(t,i,e,r):i})}async function Oh(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await In(t,Za(r,s,e,t),n);P(i.idToken,r,"internal-error");const o=zs(i.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),Wt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(t,e,n=!1){const r="signIn",s=await Za(t,r,e),i=await Wt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Nh(t,e){return ec(On(t),e)}function xh(t,e,n){return Nh(St(t),Jt.credential(e,n))}function Dh(t,e,n,r){return St(t).onIdTokenChanged(e,n,r)}function Mh(t,e,n){return St(t).beforeAuthStateChanged(e,n)}const cr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cr,"1"),this.storage.removeItem(cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){const t=de();return Ks(t)||Er(t)}const Uh=1e3,Fh=10;class nc extends tc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lh()&&dh(),this.fallbackToPolling=za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Uh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nc.type="LOCAL";const $h=nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends tc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rc.type="SESSION";const sc=rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Bh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Js("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function jh(t){Ue().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function Vh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zh(){return ic()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="firebaseLocalStorageDb",Kh=1,lr="firebaseLocalStorage",ac="fbase_key";class Nn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ar(t,e){return t.transaction([lr],e?"readwrite":"readonly").objectStore(lr)}function qh(){const t=indexedDB.deleteDatabase(oc);return new Nn(t).toPromise()}function ps(){const t=indexedDB.open(oc,Kh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lr,{keyPath:ac})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lr)?e(r):(r.close(),await qh(),e(await ps()))})})}async function io(t,e,n){const r=Ar(t,!0).put({[ac]:e,value:n});return new Nn(r).toPromise()}async function Gh(t,e){const n=Ar(t,!1).get(e),r=await new Nn(n).toPromise();return r===void 0?null:r.value}function oo(t,e){const n=Ar(t,!0).delete(e);return new Nn(n).toPromise()}const Jh=800,Yh=3;class cc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ps(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tr._getInstance(zh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vh(),!this.activeServiceWorker)return;this.sender=new Hh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ps();return await io(e,cr,"1"),await oo(e,cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ar(s,!1).getAll();return new Nn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cc.type="LOCAL";const Xh=cc;new Rn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e){return e?je(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $t(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $t(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $t(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zh(t){return ec(t.auth,new Ys(t),t.bypassAuthState)}function ep(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Ph(n,new Ys(t),t.bypassAuthState)}async function tp(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Oh(n,new Ys(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zh;case"linkViaPopup":case"linkViaRedirect":return tp;case"reauthViaPopup":case"reauthViaRedirect":return ep;default:ke(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new Rn(2e3,1e4);class Nt extends lc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=Js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,np.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="pendingRedirect",Yn=new Map;class sp extends lc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yn.get(this.auth._key());if(!e){try{const r=await ip(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yn.set(this.auth._key(),e)}return this.bypassAuthState||Yn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ip(t,e){const n=cp(e),r=ap(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function op(t,e){Yn.set(t._key(),e)}function ap(t){return je(t._redirectPersistence)}function cp(t){return Jn(rp,t.config.apiKey,t.name)}async function lp(t,e,n=!1){const r=On(t),s=Qh(r,e),o=await new sp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=10*60*1e3;class dp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=up&&this.cachedEventUids.clear(),this.cachedEventUids.has(ao(e))}saveEventToCache(e){this.cachedEventUids.add(ao(e)),this.lastProcessedEventTime=Date.now()}}function ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e={}){return Gt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gp=/^https?/;async function mp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hp(t);for(const n of e)try{if(_p(n))return}catch{}ke(t,"unauthorized-domain")}function _p(t){const e=hs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gp.test(n))return!1;if(pp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=new Rn(3e4,6e4);function co(){const t=Ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bp(t){return new Promise((e,n)=>{var r,s,i;function o(){co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{co(),n(Le(t,"network-request-failed"))},timeout:vp.get()})}if(!((s=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ue().gapi)===null||i===void 0)&&i.load)o();else{const a=hh("iframefcb");return Ue()[a]=()=>{gapi.load?o():n(Le(t,"network-request-failed"))},Ja(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Xn=null,e})}let Xn=null;function yp(t){return Xn=Xn||bp(t),Xn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Rn(5e3,15e3),wp="__/auth/iframe",Ep="emulator/auth/iframe",Tp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cp(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ws(e,Ep):`https://${t.config.authDomain}/${wp}`,r={apiKey:e.apiKey,appName:t.name,v:Sn},s=Ap.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Cn(r).slice(1)}`}async function Sp(t){const e=await yp(t),n=Ue().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:Cp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=Ue().setTimeout(()=>{i(o)},Ip.get());function c(){Ue().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kp=500,Op=600,Pp="_blank",Np="http://localhost";class lo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xp(t,e,n,r=kp,s=Op){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=Ba(l)?Pp:n),$a(l)&&(e=e||Np,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[E,x])=>`${g}${E}=${x},`,"");if(lh(l)&&a!=="_self")return Dp(e||"",a),new lo(null);const h=window.open(e||"",a,d);P(h,t,"popup-blocked");try{h.focus()}catch{}return new lo(h)}function Dp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="__/auth/handler",Lp="emulator/auth/handler",Up=encodeURIComponent("fac");async function uo(t,e,n,r,s,i){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sn,eventId:s};if(e instanceof Qa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(i||{}))o[d]=h}if(e instanceof Pn){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),l=c?`#${Up}=${encodeURIComponent(c)}`:"";return`${Fp(t)}?${Cn(a).slice(1)}${l}`}function Fp({config:t}){return t.emulator?Ws(t,Lp):`https://${t.authDomain}/${Mp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="webStorageSupport";class $p{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sc,this._completeRedirectFn=lp,this._overrideRedirectResult=op}async _openPopup(e,n,r,s){var i;We((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await uo(e,n,r,hs(),s);return xp(e,o,Js())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await uo(e,n,r,hs(),s);return jh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(We(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sp(e),r=new dp(e);return n.register("authEvent",s=>(P(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kr,{type:Kr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Kr];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return za()||Ks()||Er()}}const Bp=$p;var fo="@firebase/auth",ho="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vp(t){bn(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ka(t)},l=new vh(r,s,i,c);return yh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new Vt("auth-internal",e=>{const n=On(e.getProvider("auth").getImmediate());return(r=>new Hp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(fo,ho,jp(t)),Ut(fo,ho,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=5*60,zp=Ta("authIdTokenMaxAge")||Wp;let po=null;const Kp=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zp)return;const s=n==null?void 0:n.token;po!==s&&(po=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qp(t=Df()){const e=Ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bh(t,{popupRedirectResolver:Bp,persistence:[Xh,$h,sc]}),r=Ta("authTokenSyncURL");if(r){const i=Kp(r);Mh(n,i,()=>i(n.currentUser)),Dh(n,o=>i(o))}const s=wd("auth");return s&&Ih(n,`http://${s}`),n}Vp("Browser");const Cr=t=>(Os("data-v-3bc822c6"),t=t(),Ps(),t),Gp={version:"1.2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1220 420",width:"100%"},Jp=Cr(()=>U("title",null,"capsule",-1)),Yp=Cr(()=>U("defs",null,[U("image",{width:"1200",height:"400",id:"img1",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAGQAQMAAACEewsdAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAABRSURBVHic7cGBAAAAAMOg+VOf4AZVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA36/AAAQT9g3oAAAAASUVORK5CYII="})],-1)),Xp=Cr(()=>U("use",{id:"Background",href:"#img1",x:"10",y:"10"},null,-1)),Qp={id:"Roll"},Zp=Cr(()=>U("path",{id:"Shape 2",class:"s1",d:"m1027.5 335c-31.8 0-57.5-55.9-57.5-125 0-69.1 25.7-125 57.5-125 31.8 0 57.5 55.9 57.5 125 0 69.1-25.7 125-57.5 125z"},null,-1)),eg=iu('<g id="Pill" data-v-3bc822c6><g id="right" data-v-3bc822c6><path id="line" class="s2" d="m602 10h408c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200h-408z" data-v-3bc822c6></path><path id="cover" class="s3" d="m602 10h408c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200h-408z" data-v-3bc822c6></path></g><g id="left" data-v-3bc822c6><path id="&lt;Path&gt;" class="s4" d="m442.7 56.1c-9.6-7.4-45.4-9.2-58.6-9.7-46.4-2.1-89.8-1.6-128.5 0.3-44.4 2.4-78.5 9.2-108.6 17.1-4.6 1.2 7.5 5.9 13.3 5.1 33.2-4.4 71.9-7 112.4-8.1 41.7-1 82.6-2 129.3-0.4 12.8 0.4 49.8 2.5 40.7-4.3z" data-v-3bc822c6></path><path id="line" class="s2" d="m10 210c0-110.5 89.5-200 200-200h408v400h-408c-110.5 0-200-89.5-200-200z" data-v-3bc822c6></path><path id="cover" class="s3" d="m10 210c0-110.5 89.5-200 200-200h408v400h-408c-110.5 0-200-89.5-200-200z" data-v-3bc822c6></path></g></g>',1),tg={__name:"Capsule",props:{color:String},setup(t){return(e,n)=>(ae(),Me("svg",Gp,[Jp,Yp,Xp,U("g",Qp,[U("path",{id:"Shape 1",style:zt(`fill: var(--neon-${t.color})`),d:"m175 85h850v250h-850zm-3.5 250c-31.8 0-57.5-55.9-57.5-125 0-69.1 25.7-125 57.5-125 31.8 0 57.5 55.9 57.5 125 0 69.1-25.7 125-57.5 125zm856 0c-31.8 0-57.5-55.9-57.5-125 0-69.1 25.7-125 57.5-125 31.8 0 57.5 55.9 57.5 125 0 69.1-25.7 125-57.5 125z"},null,4),Zp]),eg]))}},dc=Tn(tg,[["__scopeId","data-v-3bc822c6"]]);const Xs=t=>(Os("data-v-160cd241"),t=t(),Ps(),t),ng={class:"top-0 grid grid-cols-12 w-full gap-x-6 bg-black/90 absolute"},rg=Xs(()=>U("div",{class:"col-span-3"},null,-1)),sg={class:"col-span-6 flex flex-col justify-center items-center h-screen"},ig={key:0},og=Xs(()=>U("div",{class:"text-center text-base text-white mt-12 mb-2"},"enter passcode",-1)),ag=["onKeyup","disabled"],cg={key:1,class:"text-center text-base text-white mt-12 mb-2",style:{"transition-delay":"1s"}},lg=Xs(()=>U("div",{class:"col-span-2"},null,-1)),ug={class:"col-span-1 flex justify-center items-center"},dg={__name:"CapsuleView",props:{color:{type:String,default:"blue"}},emits:["close","capsule-dblclicked"],setup(t,{emit:e}){const n=tt(!1),r=tt(""),s=tt(!1),i=()=>{s.value===!0&&(c(),e("capsule-dblclicked"))},o=async()=>{try{const l=await xh(qp(),"lhtoan20@apcs.vn",r.value);s.value=!0}catch(l){console.error(l),n.value=!0,setTimeout(()=>{n.value=!1},1e3)}},a=l=>{l.preventDefault()},c=()=>{e("close")};return(l,d)=>(ae(),Me("div",ng,[rg,U("div",sg,[Y(Bu,{name:"fadeT"},{default:sn(()=>[Y(dc,{onDblclick:i,color:t.color,style:"z-index: 20;",class:Et({"cursor-pointer hover:drop-shadow-[0.5rem_0.5rem_1rem_rgba(255,255,255,0.3)] transition duration-300":s.value})},null,8,["color","class"]),s.value?(ae(),Me("div",cg,"double-click the capsule to read the message")):(ae(),Me("div",ig,[og,Ns(U("input",{type:"password",class:Et(["p-1 pl-4 text-white rounded-full outline-none bg-white/0 bg-gradient-to-br border backdrop-blur-lg",{"shake from-red/40 border-red":n.value&&!s.value,"from-white/40 border-white":!n.value}]),onKeyup:Gu(o,["enter"]),"onUpdate:modelValue":d[0]||(d[0]=h=>r.value=h),disabled:n.value,onCopy:a},null,42,ag),[[Ku,r.value]])]))]),_:1})]),lg,U("div",ug,[Y(as,{class:"absolute top-[5%]",onClick:c,show:!0})])]))}},fg=Tn(dg,[["__scopeId","data-v-160cd241"]]),hg={class:"w-[85%] h-[9%] justify-center items-center"},pg={__name:"CapsuleContainer",setup(t){let e=Array.from({length:6},(c,l)=>l===0||l===5?Math.floor(Math.random()*3):-1*(Math.floor(Math.random()*2)+12)),n=0;const r=tt([]),s=()=>{r.value=Array.from({length:56}).map((c,l)=>{const d=i(),h=o(l),g=a();return{color:d,x:h.x,y:h.y,style:`transform: rotate(${h.r}deg); bottom: ${h.y+20}px; left: ${h.x+30}px; z-index: ${g}`}})},i=()=>{const c=["yellow","blue","green","coral","purple"];return c[Math.floor(Math.random()*c.length)]},o=c=>{let l=0,d=Math.floor(Math.random()*8)+15,h=Math.floor(Math.random()*13)-7;const g=c%6;return Math.floor(c/6)===0&&(h=Math.floor(Math.random()*8),console.log(h),g===0||g===1?h*=1:g===2||g===3?h=Math.floor(Math.random()*3)-1:h*=-1),g===0?n=0:g===5?n=210:l=Math.random()*10+42,n+=l,e[g]+=d,{x:n,y:e[g],r:h}},a=()=>Math.floor(Math.random()*9);return Ds(()=>{s()}),Ms(()=>{}),(c,l)=>(ae(),Me("div",hg,[(ae(!0),Me(be,null,Ll(r.value,(d,h)=>(ae(),yt(dc,{class:"absolute cursor-pointer w-[20%] hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.5)] transition duration-300",key:h,color:d.color,style:zt(d.style),onClick:g=>c.$emit("capsule-clicked",h,d.color)},null,8,["color","style","onClick"]))),128))]))}};const Sr=t=>(Os("data-v-86743a6a"),t=t(),Ps(),t),gg=Sr(()=>U("div",{class:"text-center title text-xl text-white font-bold my-12 ml-6 tracking-1"},"luminaelixir",-1)),mg={class:"grid grid-cols-12 gap-x-6"},_g=Sr(()=>U("div",{class:"col-span-4"},null,-1)),vg={class:"col-span-4 flex justify-center"},bg={class:"flex items-center relative",id:"jar"},yg=Sr(()=>U("img",{src:Zu,class:"w-full h-full"},null,-1)),Ig={class:"flex w-full h-full flex justify-center items-center"},wg=Sr(()=>U("div",{class:"col-span-3"},null,-1)),Eg={class:"col-span-1 flex justify-center items-center"},Tg={__name:"Luminaelixir",setup(t){const e=tt(!1),n=tt(!1),r=tt(!1),s=tt("blue"),i=(o,a)=>{r.value=!0,s.value=a};return(o,a)=>(ae(),Me(be,null,[gg,U("div",mg,[_g,U("div",vg,[U("div",bg,[yg,U("div",Ig,[Y(pg,{onCapsuleClicked:i})])])]),wg,U("div",Eg,[Y(fn(va),{class:"absolute hover:text-red cursor-pointer transition duration-300 bottom-6 text-white z-1",size:"24",type:"mdi",path:fn(ed),onClick:a[0]||(a[0]=c=>e.value=!0)},null,8,["path"])])]),Y(cn,{name:"fade"},{default:sn(()=>[r.value?(ae(),yt(fg,{key:0,onClose:a[1]||(a[1]=c=>r.value=!1),onCapsuleDblclicked:a[2]||(a[2]=c=>n.value=!0),color:s.value,style:"z-index: 15"},null,8,["color"])):Mr("",!0)]),_:1}),Y(cn,{name:"fade"},{default:sn(()=>[e.value?(ae(),yt(Hi,{key:0,is_shown:!0,onClose:a[3]||(a[3]=c=>e.value=!1),title:"information"})):Mr("",!0)]),_:1}),Y(cn,{name:"message"},{default:sn(()=>[n.value?(ae(),yt(Hi,{key:0,is_shown:!1,color:"neon-"+s.value,onClose:a[4]||(a[4]=c=>n.value=!1),title:"for you only",class:"select-none"},null,8,["color"])):Mr("",!0)]),_:1})],64))}},Ag=Tn(Tg,[["__scopeId","data-v-86743a6a"]]);const Cg={__name:"App",setup(t){return(e,n)=>(ae(),yt(Ag))}},Sg=Tn(Cg,[["__scopeId","data-v-86efbf2e"]]);function Rg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/*!
 * vue-svg-inline v1.0.0
 * (c) Olumide Olugbemiro
 * Released under the MIT License.
 */var kg={props:{src:{type:String,required:!1},styleClass:{type:String,default:"myClass"},styleId:{type:String,default:"myId"}},created:function(){var e=this.$props;fetch(e.src).then(function(n){return n.text()}).then(function(n){var r=null;if(window.DOMParser){var s=new DOMParser;r=s.parseFromString(n,"application/xml")}else r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n);r.documentElement.setAttribute("class",e.styleClass),r.documentElement.setAttribute("id",e.styleId),document.getElementById("svg").replaceWith(r.documentElement)}).catch(function(n){return console.log(n)})}};function Og(t,e,n,r,s,i,o,a,c,l){typeof o!="boolean"&&(c=a,a=o,o=!1);var d=typeof n=="function"?n.options:n;t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),r&&(d._scopeId=r);var h;if(i?(h=function(T){T=T||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!T&&typeof __VUE_SSR_CONTEXT__<"u"&&(T=__VUE_SSR_CONTEXT__),e&&e.call(this,c(T)),T&&T._registeredComponents&&T._registeredComponents.add(i)},d._ssrRegister=h):e&&(h=o?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(x){e.call(this,a(x))}),h)if(d.functional){var g=d.render;d.render=function(T,B){return h.call(B),g(T,B)}}else{var E=d.beforeCreate;d.beforeCreate=E?[].concat(E,h):[h]}return n}var Pg=Og,Ng=kg,xg=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"svg"}})},Dg=[],Mg=void 0,Lg=void 0,Ug=void 0,Fg=!1,$g=Pg({render:xg,staticRenderFns:Dg},Mg,Ng,Lg,Fg,Ug,void 0,void 0),Bg={install:function(e,n){e.component("vue-svg-inline",$g)}},Hg=Bg;const jg=Rg(Hg);var Vg="firebase",Wg="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(Vg,Wg,"app");const zg={apiKey:"AIzaSyCY5kWWn1FgxwqQeHacq-ahovHFrGMkfpo",authDomain:"our-odyssey.firebaseapp.com",projectId:"our-odyssey",storageBucket:"our-odyssey.appspot.com",messagingSenderId:"959052027883",appId:"1:959052027883:web:45b0ef7a2baa88e37dabae",measurementId:"G-SEJXSNP0G6"};ka(zg);const fc=Xu(Sg);fc.use(jg);fc.mount("#app");
