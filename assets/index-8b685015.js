(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Lo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const oe={},Sn=[],Xe=()=>{},bf=()=>!1,Tf=/^on[^a-z]/,Zi=t=>Tf.test(t),Fo=t=>t.startsWith("onUpdate:"),fe=Object.assign,Uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sf=Object.prototype.hasOwnProperty,q=(t,e)=>Sf.call(t,e),D=Array.isArray,An=t=>er(t)==="[object Map]",nu=t=>er(t)==="[object Set]",B=t=>typeof t=="function",pe=t=>typeof t=="string",Bo=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",su=t=>ae(t)&&B(t.then)&&B(t.catch),iu=Object.prototype.toString,er=t=>iu.call(t),Af=t=>er(t).slice(8,-1),ru=t=>er(t)==="[object Object]",$o=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rf=/-(\w)/g,Ln=tr(t=>t.replace(Rf,(e,n)=>n?n.toUpperCase():"")),Nf=/\B([A-Z])/g,mn=tr(t=>t.replace(Nf,"-$1").toLowerCase()),ou=tr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nr=tr(t=>t?`on${ou(t)}`:""),bs=(t,e)=>!Object.is(t,e),_i=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ti=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},kf=t=>{const e=pe(t)?Number(t):NaN;return isNaN(e)?t:e};let cl;const eo=()=>cl||(cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zn(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?Df(s):zn(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(pe(t))return t;if(ae(t))return t}}const Pf=/;(?![^(]*\))/g,xf=/:([^]+)/,Of=/\/\*[^]*?\*\//g;function Df(t){const e={};return t.replace(Of,"").split(Pf).forEach(n=>{if(n){const s=n.split(xf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function cn(t){let e="";if(pe(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=cn(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lf=Lo(Mf);function au(t){return!!t||t===""}const ul=t=>pe(t)?t:t==null?"":D(t)||ae(t)&&(t.toString===iu||!B(t.toString))?JSON.stringify(t,lu,2):String(t),lu=(t,e)=>e&&e.__v_isRef?lu(t,e.value):An(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:nu(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!D(e)&&!ru(e)?String(e):e;let Ke;class Ff{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Uf(t,e=Ke){e&&e.active&&e.effects.push(t)}function Bf(){return Ke}const Wo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cu=t=>(t.w&Bt)>0,uu=t=>(t.n&Bt)>0,$f=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bt},Wf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];cu(i)&&!uu(i)?i.delete(t):e[n++]=i,i.w&=~Bt,i.n&=~Bt}e.length=n}},to=new WeakMap;let us=0,Bt=1;const no=30;let qe;const sn=Symbol(""),so=Symbol("");class Ho{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uf(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=Ot;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,Ot=!0,Bt=1<<++us,us<=no?$f(this):hl(this),this.fn()}finally{us<=no&&Wf(this),Bt=1<<--us,qe=this.parent,Ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(hl(this),this.onStop&&this.onStop(),this.active=!1)}}function hl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ot=!0;const hu=[];function Kn(){hu.push(Ot),Ot=!1}function qn(){const t=hu.pop();Ot=t===void 0?!0:t}function Me(t,e,n){if(Ot&&qe){let s=to.get(t);s||to.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Wo()),du(i)}}function du(t,e){let n=!1;us<=no?uu(t)||(t.n|=Bt,n=!cu(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function mt(t,e,n,s,i,r){const o=to.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&D(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":D(t)?$o(n)&&a.push(o.get("length")):(a.push(o.get(sn)),An(t)&&a.push(o.get(so)));break;case"delete":D(t)||(a.push(o.get(sn)),An(t)&&a.push(o.get(so)));break;case"set":An(t)&&a.push(o.get(sn));break}if(a.length===1)a[0]&&io(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);io(Wo(l))}}function io(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&dl(s);for(const s of n)s.computed||dl(s)}function dl(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hf=Lo("__proto__,__v_isRef,__isVue"),fu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bo)),Vf=Vo(),jf=Vo(!1,!0),zf=Vo(!0),fl=Kf();function Kf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=G(this);for(let r=0,o=this.length;r<o;r++)Me(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kn();const s=G(this)[e].apply(this,n);return qn(),s}}),t}function qf(t){const e=G(this);return Me(e,"has",t),e.hasOwnProperty(t)}function Vo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?cp:vu:e?mu:gu).get(s))return s;const o=D(s);if(!t){if(o&&q(fl,i))return Reflect.get(fl,i,r);if(i==="hasOwnProperty")return qf}const a=Reflect.get(s,i,r);return(Bo(i)?fu.has(i):Hf(i))||(t||Me(s,"get",i),e)?a:Se(a)?o&&$o(i)?a:a.value:ae(a)?t?yu(a):Ko(a):a}}const Gf=pu(),Yf=pu(!0);function pu(t=!1){return function(n,s,i,r){let o=n[s];if(Fn(o)&&Se(o)&&!Se(i))return!1;if(!t&&(!Si(i)&&!Fn(i)&&(o=G(o),i=G(i)),!D(n)&&Se(o)&&!Se(i)))return o.value=i,!0;const a=D(n)&&$o(s)?Number(s)<n.length:q(n,s),l=Reflect.set(n,s,i,r);return n===G(r)&&(a?bs(i,o)&&mt(n,"set",s,i):mt(n,"add",s,i)),l}}function Qf(t,e){const n=q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&mt(t,"delete",e,void 0),s}function Jf(t,e){const n=Reflect.has(t,e);return(!Bo(e)||!fu.has(e))&&Me(t,"has",e),n}function Xf(t){return Me(t,"iterate",D(t)?"length":sn),Reflect.ownKeys(t)}const _u={get:Vf,set:Gf,deleteProperty:Qf,has:Jf,ownKeys:Xf},Zf={get:zf,set(t,e){return!0},deleteProperty(t,e){return!0}},ep=fe({},_u,{get:jf,set:Yf}),jo=t=>t,nr=t=>Reflect.getPrototypeOf(t);function ri(t,e,n=!1,s=!1){t=t.__v_raw;const i=G(t),r=G(e);n||(e!==r&&Me(i,"get",e),Me(i,"get",r));const{has:o}=nr(i),a=s?jo:n?Go:Ts;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,s=G(n),i=G(t);return e||(t!==i&&Me(s,"has",t),Me(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ai(t,e=!1){return t=t.__v_raw,!e&&Me(G(t),"iterate",sn),Reflect.get(t,"size",t)}function pl(t){t=G(t);const e=G(this);return nr(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function _l(t,e){e=G(e);const n=G(this),{has:s,get:i}=nr(n);let r=s.call(n,t);r||(t=G(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?bs(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function gl(t){const e=G(this),{has:n,get:s}=nr(e);let i=n.call(e,t);i||(t=G(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&mt(e,"delete",t,void 0),r}function ml(){const t=G(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function li(t,e){return function(s,i){const r=this,o=r.__v_raw,a=G(o),l=e?jo:t?Go:Ts;return!t&&Me(a,"iterate",sn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ci(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=An(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?jo:e?Go:Ts;return!e&&Me(r,"iterate",l?so:sn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bt(t){return function(...e){return t==="delete"?!1:this}}function tp(){const t={get(r){return ri(this,r)},get size(){return ai(this)},has:oi,add:pl,set:_l,delete:gl,clear:ml,forEach:li(!1,!1)},e={get(r){return ri(this,r,!1,!0)},get size(){return ai(this)},has:oi,add:pl,set:_l,delete:gl,clear:ml,forEach:li(!1,!0)},n={get(r){return ri(this,r,!0)},get size(){return ai(this,!0)},has(r){return oi.call(this,r,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:li(!0,!1)},s={get(r){return ri(this,r,!0,!0)},get size(){return ai(this,!0)},has(r){return oi.call(this,r,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ci(r,!1,!1),n[r]=ci(r,!0,!1),e[r]=ci(r,!1,!0),s[r]=ci(r,!0,!0)}),[t,n,e,s]}const[np,sp,ip,rp]=tp();function zo(t,e){const n=e?t?rp:ip:t?sp:np;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const op={get:zo(!1,!1)},ap={get:zo(!1,!0)},lp={get:zo(!0,!1)},gu=new WeakMap,mu=new WeakMap,vu=new WeakMap,cp=new WeakMap;function up(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hp(t){return t.__v_skip||!Object.isExtensible(t)?0:up(Af(t))}function Ko(t){return Fn(t)?t:qo(t,!1,_u,op,gu)}function dp(t){return qo(t,!1,ep,ap,mu)}function yu(t){return qo(t,!0,Zf,lp,vu)}function qo(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=hp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Rn(t){return Fn(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Fn(t){return!!(t&&t.__v_isReadonly)}function Si(t){return!!(t&&t.__v_isShallow)}function Eu(t){return Rn(t)||Fn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Iu(t){return Ti(t,"__v_skip",!0),t}const Ts=t=>ae(t)?Ko(t):t,Go=t=>ae(t)?yu(t):t;function Cu(t){Ot&&qe&&(t=G(t),du(t.dep||(t.dep=Wo())))}function wu(t,e){t=G(t);const n=t.dep;n&&io(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function Pe(t){return fp(t,!1)}function fp(t,e){return Se(t)?t:new pp(t,e)}class pp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Ts(e)}get value(){return Cu(this),this._value}set value(e){const n=this.__v_isShallow||Si(e)||Fn(e);e=n?e:G(e),bs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ts(e),wu(this))}}function Ss(t){return Se(t)?t.value:t}const _p={get:(t,e,n)=>Ss(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function bu(t){return Rn(t)?t:new Proxy(t,_p)}class gp{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ho(e,()=>{this._dirty||(this._dirty=!0,wu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=G(this);return Cu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function mp(t,e,n=!1){let s,i;const r=B(t);return r?(s=t,i=Xe):(s=t.get,i=t.set),new gp(s,i,r||!i,n)}function Dt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){sr(r,e,n)}return i}function Ve(t,e,n,s){if(B(t)){const r=Dt(t,e,n,s);return r&&su(r)&&r.catch(o=>{sr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ve(t[r],e,n,s));return i}function sr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Dt(l,null,10,[t,o,a]);return}}vp(t,n,i,s)}function vp(t,e,n,s=!0){console.error(t)}let As=!1,ro=!1;const Te=[];let ot=0;const Nn=[];let dt=null,Jt=0;const Tu=Promise.resolve();let Yo=null;function yp(t){const e=Yo||Tu;return t?e.then(this?t.bind(this):t):e}function Ep(t){let e=ot+1,n=Te.length;for(;e<n;){const s=e+n>>>1;Rs(Te[s])<t?e=s+1:n=s}return e}function Qo(t){(!Te.length||!Te.includes(t,As&&t.allowRecurse?ot+1:ot))&&(t.id==null?Te.push(t):Te.splice(Ep(t.id),0,t),Su())}function Su(){!As&&!ro&&(ro=!0,Yo=Tu.then(Ru))}function Ip(t){const e=Te.indexOf(t);e>ot&&Te.splice(e,1)}function Cp(t){D(t)?Nn.push(...t):(!dt||!dt.includes(t,t.allowRecurse?Jt+1:Jt))&&Nn.push(t),Su()}function vl(t,e=As?ot+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function Au(t){if(Nn.length){const e=[...new Set(Nn)];if(Nn.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,s)=>Rs(n)-Rs(s)),Jt=0;Jt<dt.length;Jt++)dt[Jt]();dt=null,Jt=0}}const Rs=t=>t.id==null?1/0:t.id,wp=(t,e)=>{const n=Rs(t)-Rs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ru(t){ro=!1,As=!0,Te.sort(wp);const e=Xe;try{for(ot=0;ot<Te.length;ot++){const n=Te[ot];n&&n.active!==!1&&Dt(n,null,14)}}finally{ot=0,Te.length=0,Au(),As=!1,Yo=null,(Te.length||Nn.length)&&Ru()}}function bp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||oe;d&&(i=n.map(_=>pe(_)?_.trim():_)),h&&(i=n.map(Zr))}let a,l=s[a=Nr(e)]||s[a=Nr(Ln(e))];!l&&r&&(l=s[a=Nr(mn(e))]),l&&Ve(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(c,t,6,i)}}function Nu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=Nu(c,e,!0);u&&(a=!0,fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ae(t)&&s.set(t,null),null):(D(r)?r.forEach(l=>o[l]=null):fe(o,r),ae(t)&&s.set(t,o),o)}function ir(t,e){return!t||!Zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,mn(e))||q(t,e))}let He=null,rr=null;function Ai(t){const e=He;return He=t,rr=t&&t.type.__scopeId||null,e}function Jo(t){rr=t}function Xo(){rr=null}function _s(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Nl(-1);const r=Ai(e);let o;try{o=t(...i)}finally{Ai(r),s._d&&Nl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function kr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:v}=t;let A,O;const z=Ai(t);try{if(n.shapeFlag&4){const x=i||s;A=rt(u.call(x,x,h,r,_,d,m)),O=l}else{const x=e;A=rt(x.length>1?x(r,{attrs:l,slots:a,emit:c}):x(r,null)),O=e.props?l:Tp(l)}}catch(x){ms.length=0,sr(x,t,1),A=ie(Ze)}let K=A;if(O&&v!==!1){const x=Object.keys(O),{shapeFlag:he}=K;x.length&&he&7&&(o&&x.some(Fo)&&(O=Sp(O,o)),K=$t(K,O))}return n.dirs&&(K=$t(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),A=K,Ai(z),A}const Tp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zi(n))&&((e||(e={}))[n]=t[n]);return e},Sp=(t,e)=>{const n={};for(const s in t)(!Fo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ap(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?yl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ir(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?yl(s,o,c):!0:!!o;return!1}function yl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ir(n,r))return!0}return!1}function Rp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Np=t=>t.__isSuspense;function kp(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Cp(t)}const ui={};function Pr(t,e,n){return ku(t,e,n)}function ku(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=oe){var a;const l=Bf()===((a=Ie)==null?void 0:a.scope)?Ie:null;let c,u=!1,h=!1;if(Se(t)?(c=()=>t.value,u=Si(t)):Rn(t)?(c=()=>t,s=!0):D(t)?(h=!0,u=t.some(x=>Rn(x)||Si(x)),c=()=>t.map(x=>{if(Se(x))return x.value;if(Rn(x))return en(x);if(B(x))return Dt(x,l,2)})):B(t)?e?c=()=>Dt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Ve(t,l,3,[_])}:c=Xe,e&&s){const x=c;c=()=>en(x())}let d,_=x=>{d=z.onStop=()=>{Dt(x,l,4)}},m;if(xs)if(_=Xe,e?n&&Ve(e,l,3,[c(),h?[]:void 0,_]):c(),i==="sync"){const x=S_();m=x.__watcherHandles||(x.__watcherHandles=[])}else return Xe;let v=h?new Array(t.length).fill(ui):ui;const A=()=>{if(z.active)if(e){const x=z.run();(s||u||(h?x.some((he,Ne)=>bs(he,v[Ne])):bs(x,v)))&&(d&&d(),Ve(e,l,3,[x,v===ui?void 0:h&&v[0]===ui?[]:v,_]),v=x)}else z.run()};A.allowRecurse=!!e;let O;i==="sync"?O=A:i==="post"?O=()=>ke(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),O=()=>Qo(A));const z=new Ho(c,O);e?n?A():v=z.run():i==="post"?ke(z.run.bind(z),l&&l.suspense):z.run();const K=()=>{z.stop(),l&&l.scope&&Uo(l.scope.effects,z)};return m&&m.push(K),K}function Pp(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?Pu(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=Ie;Un(this);const a=ku(i,r.bind(s),n);return o?Un(o):on(),a}function Pu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function en(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))en(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)en(t[n],e);else if(nu(t)||An(t))t.forEach(n=>{en(n,e)});else if(ru(t))for(const n in t)en(t[n],e);return t}function Zo(t,e){const n=He;if(n===null)return t;const s=ur(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=oe]=e[r];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&en(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Kn(),Ve(l,n,8,[t.el,a,t,e]),qn())}}function xu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ta(()=>{t.isMounted=!0}),na(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Ou={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},xp={name:"BaseTransition",props:Ou,setup(t,{slots:e}){const n=Gu(),s=xu();let i;return()=>{const r=e.default&&ea(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==Ze){o=v;break}}const a=G(t),{mode:l}=a;if(s.isLeaving)return xr(o);const c=El(o);if(!c)return xr(o);const u=Ns(c,a,s,n);ks(c,u);const h=n.subTree,d=h&&El(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const v=m();i===void 0?i=v:v!==i&&(i=v,_=!0)}if(d&&d.type!==Ze&&(!Xt(c,d)||_)){const v=Ns(d,a,s,n);if(ks(d,v),l==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},xr(o);l==="in-out"&&c.type!==Ze&&(v.delayLeave=(A,O,z)=>{const K=Du(s,d);K[String(d.key)]=d,A._leaveCb=()=>{O(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=z})}return o}}},Op=xp;function Du(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ns(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:v,onAppear:A,onAfterAppear:O,onAppearCancelled:z}=e,K=String(t.key),x=Du(n,t),he=(U,ee)=>{U&&Ve(U,s,9,ee)},Ne=(U,ee)=>{const X=ee[1];he(U,ee),D(U)?U.every(we=>we.length<=1)&&X():U.length<=1&&X()},Fe={mode:r,persisted:o,beforeEnter(U){let ee=a;if(!n.isMounted)if(i)ee=v||a;else return;U._leaveCb&&U._leaveCb(!0);const X=x[K];X&&Xt(t,X)&&X.el._leaveCb&&X.el._leaveCb(),he(ee,[U])},enter(U){let ee=l,X=c,we=u;if(!n.isMounted)if(i)ee=A||l,X=O||c,we=z||u;else return;let N=!1;const le=U._enterCb=Ue=>{N||(N=!0,Ue?he(we,[U]):he(X,[U]),Fe.delayedLeave&&Fe.delayedLeave(),U._enterCb=void 0)};ee?Ne(ee,[U,le]):le()},leave(U,ee){const X=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ee();he(h,[U]);let we=!1;const N=U._leaveCb=le=>{we||(we=!0,ee(),le?he(m,[U]):he(_,[U]),U._leaveCb=void 0,x[X]===t&&delete x[X])};x[X]=t,d?Ne(d,[U,N]):N()},clone(U){return Ns(U,e,n,s)}};return Fe}function xr(t){if(or(t))return t=$t(t),t.children=null,t}function El(t){return or(t)?t.children?t.children[0]:void 0:t}function ks(t,e){t.shapeFlag&6&&t.component?ks(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ea(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===$e?(o.patchFlag&128&&i++,s=s.concat(ea(o.children,e,a))):(e||o.type!==Ze)&&s.push(a!=null?$t(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const gi=t=>!!t.type.__asyncLoader,or=t=>t.type.__isKeepAlive;function Dp(t,e){Mu(t,"a",e)}function Mp(t,e){Mu(t,"da",e)}function Mu(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ar(e,s,n),n){let i=n.parent;for(;i&&i.parent;)or(i.parent.vnode)&&Lp(s,e,n,i),i=i.parent}}function Lp(t,e,n,s){const i=ar(e,t,s,!0);Fu(()=>{Uo(s[e],i)},n)}function ar(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Kn(),Un(n);const a=Ve(e,n,t,o);return on(),qn(),a});return s?i.unshift(r):i.push(r),r}}const It=t=>(e,n=Ie)=>(!xs||t==="sp")&&ar(t,(...s)=>e(...s),n),Fp=It("bm"),ta=It("m"),Up=It("bu"),Lu=It("u"),na=It("bum"),Fu=It("um"),Bp=It("sp"),$p=It("rtg"),Wp=It("rtc");function Hp(t,e=Ie){ar("ec",t,e)}const Vp=Symbol.for("v-ndc");function jp(t,e,n,s){let i;const r=n&&n[s];if(D(t)||pe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const oo=t=>t?Yu(t)?ur(t)||t.proxy:oo(t.parent):null,gs=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oo(t.parent),$root:t=>oo(t.root),$emit:t=>t.emit,$options:t=>sa(t),$forceUpdate:t=>t.f||(t.f=()=>Qo(t.update)),$nextTick:t=>t.n||(t.n=yp.bind(t.proxy)),$watch:t=>Pp.bind(t)}),Or=(t,e)=>t!==oe&&!t.__isScriptSetup&&q(t,e),zp={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Or(s,e))return o[e]=1,s[e];if(i!==oe&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==oe&&q(n,e))return o[e]=4,n[e];ao&&(o[e]=0)}}const u=gs[e];let h,d;if(u)return e==="$attrs"&&Me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==oe&&q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Or(i,e)?(i[e]=n,!0):s!==oe&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==oe&&q(t,o)||Or(e,o)||(a=r[0])&&q(a,o)||q(s,o)||q(gs,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Il(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ao=!0;function Kp(t){const e=sa(t),n=t.proxy,s=t.ctx;ao=!1,e.beforeCreate&&Cl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:v,deactivated:A,beforeDestroy:O,beforeUnmount:z,destroyed:K,unmounted:x,render:he,renderTracked:Ne,renderTriggered:Fe,errorCaptured:U,serverPrefetch:ee,expose:X,inheritAttrs:we,components:N,directives:le,filters:Ue}=e;if(c&&qp(c,s,null),o)for(const ce in o){const te=o[ce];B(te)&&(s[ce]=te.bind(n))}if(i){const ce=i.call(n,n);ae(ce)&&(t.data=Ko(ce))}if(ao=!0,r)for(const ce in r){const te=r[ce],jt=B(te)?te.bind(n,n):B(te.get)?te.get.bind(n,n):Xe,si=!B(te)&&B(te.set)?te.set.bind(n):Xe,zt=w_({get:jt,set:si});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>zt.value,set:nt=>zt.value=nt})}if(a)for(const ce in a)Uu(a[ce],s,n,ce);if(l){const ce=B(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(te=>{Zp(te,ce[te])})}u&&Cl(u,t,"c");function ge(ce,te){D(te)?te.forEach(jt=>ce(jt.bind(n))):te&&ce(te.bind(n))}if(ge(Fp,h),ge(ta,d),ge(Up,_),ge(Lu,m),ge(Dp,v),ge(Mp,A),ge(Hp,U),ge(Wp,Ne),ge($p,Fe),ge(na,z),ge(Fu,x),ge(Bp,ee),D(X))if(X.length){const ce=t.exposed||(t.exposed={});X.forEach(te=>{Object.defineProperty(ce,te,{get:()=>n[te],set:jt=>n[te]=jt})})}else t.exposed||(t.exposed={});he&&t.render===Xe&&(t.render=he),we!=null&&(t.inheritAttrs=we),N&&(t.components=N),le&&(t.directives=le)}function qp(t,e,n=Xe){D(t)&&(t=lo(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=mi(i.from||s,i.default,!0):r=mi(i.from||s):r=mi(i),Se(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Cl(t,e,n){Ve(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uu(t,e,n,s){const i=s.includes(".")?Pu(n,s):()=>n[s];if(pe(t)){const r=e[t];B(r)&&Pr(i,r)}else if(B(t))Pr(i,t.bind(n));else if(ae(t))if(D(t))t.forEach(r=>Uu(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&Pr(i,r,t)}}function sa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ri(l,c,o,!0)),Ri(l,e,o)),ae(e)&&r.set(e,l),l}function Ri(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ri(t,r,n,!0),i&&i.forEach(o=>Ri(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gp={data:wl,props:bl,emits:bl,methods:hs,computed:hs,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:hs,directives:hs,watch:Qp,provide:wl,inject:Yp};function wl(t,e){return e?t?function(){return fe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Yp(t,e){return hs(lo(t),lo(e))}function lo(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function hs(t,e){return t?fe(Object.create(null),t,e):e}function bl(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:fe(Object.create(null),Il(t),Il(e??{})):e}function Qp(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function Bu(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jp=0;function Xp(t,e){return function(s,i=null){B(s)||(s=fe({},s)),i!=null&&!ae(i)&&(i=null);const r=Bu(),o=new Set;let a=!1;const l=r.app={_uid:Jp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:A_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...u)):B(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ie(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ur(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ni=l;try{return c()}finally{Ni=null}}};return l}}let Ni=null;function Zp(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function mi(t,e,n=!1){const s=Ie||He;if(s||Ni){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ni._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s&&s.proxy):e}}function e_(t,e,n,s=!1){const i={},r={};Ti(r,cr,1),t.propsDefaults=Object.create(null),$u(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:dp(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function t_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=G(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ir(t.emitsOptions,d))continue;const _=e[d];if(l)if(q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Ln(d);i[m]=co(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{$u(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=mn(h))===h||!q(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=co(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&mt(t,"set","$attrs")}function $u(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pi(l))continue;const c=e[l];let u;i&&q(i,u=Ln(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ir(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=G(n),c=a||oe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=co(i,l,h,c[h],t,!q(c,h))}}return o}function co(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Un(i),s=c[n]=l.call(null,e),on())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===mn(n))&&(s=!0))}return s}function Wu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!B(t)){const u=h=>{l=!0;const[d,_]=Wu(h,e,!0);fe(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ae(t)&&s.set(t,Sn),Sn;if(D(r))for(let u=0;u<r.length;u++){const h=Ln(r[u]);Tl(h)&&(o[h]=oe)}else if(r)for(const u in r){const h=Ln(u);if(Tl(h)){const d=r[u],_=o[h]=D(d)||B(d)?{type:d}:fe({},d);if(_){const m=Rl(Boolean,_.type),v=Rl(String,_.type);_[0]=m>-1,_[1]=v<0||m<v,(m>-1||q(_,"default"))&&a.push(h)}}}const c=[o,a];return ae(t)&&s.set(t,c),c}function Tl(t){return t[0]!=="$"}function Sl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Al(t,e){return Sl(t)===Sl(e)}function Rl(t,e){return D(e)?e.findIndex(n=>Al(n,t)):B(e)&&Al(e,t)?0:-1}const Hu=t=>t[0]==="_"||t==="$stable",ia=t=>D(t)?t.map(rt):[rt(t)],n_=(t,e,n)=>{if(e._n)return e;const s=_s((...i)=>ia(e(...i)),n);return s._c=!1,s},Vu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Hu(i))continue;const r=t[i];if(B(r))e[i]=n_(i,r,s);else if(r!=null){const o=ia(r);e[i]=()=>o}}},ju=(t,e)=>{const n=ia(e);t.slots.default=()=>n},s_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Ti(e,"_",n)):Vu(e,t.slots={})}else t.slots={},e&&ju(t,e);Ti(t.slots,cr,1)},i_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(fe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Vu(e,i)),o=e}else e&&(ju(t,e),o={default:1});if(r)for(const a in i)!Hu(a)&&!(a in o)&&delete i[a]};function uo(t,e,n,s,i=!1){if(D(t)){t.forEach((d,_)=>uo(d,e&&(D(e)?e[_]:e),n,s,i));return}if(gi(s)&&!i)return;const r=s.shapeFlag&4?ur(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pe(c)?(u[c]=null,q(h,c)&&(h[c]=null)):Se(c)&&(c.value=null)),B(l))Dt(l,a,12,[o,u]);else{const d=pe(l),_=Se(l);if(d||_){const m=()=>{if(t.f){const v=d?q(h,l)?h[l]:u[l]:l.value;i?D(v)&&Uo(v,r):D(v)?v.includes(r)||v.push(r):d?(u[l]=[r],q(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,q(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ke(m,n)):m()}}}const ke=kp;function r_(t){return o_(t)}function o_(t,e){const n=eo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Xe,insertStaticContent:m}=t,v=(f,p,g,E=null,y=null,b=null,S=!1,w=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Xt(f,p)&&(E=ii(f),nt(f,y,b,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:k,shapeFlag:R}=p;switch(I){case lr:A(f,p,g,E);break;case Ze:O(f,p,g,E);break;case vi:f==null&&z(p,g,E,S);break;case $e:N(f,p,g,E,y,b,S,w,T);break;default:R&1?he(f,p,g,E,y,b,S,w,T):R&6?le(f,p,g,E,y,b,S,w,T):(R&64||R&128)&&I.process(f,p,g,E,y,b,S,w,T,yn)}k!=null&&y&&uo(k,f&&f.ref,b,p||f,!p)},A=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},O=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},z=(f,p,g,E)=>{[f.el,f.anchor]=m(f.children,p,g,E,f.el,f.anchor)},K=({el:f,anchor:p},g,E)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,E),f=y;s(p,g,E)},x=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},he=(f,p,g,E,y,b,S,w,T)=>{S=S||p.type==="svg",f==null?Ne(p,g,E,y,b,S,w,T):ee(f,p,y,b,S,w,T)},Ne=(f,p,g,E,y,b,S,w)=>{let T,I;const{type:k,props:R,shapeFlag:P,transition:F,dirs:V}=f;if(T=f.el=o(f.type,b,R&&R.is,R),P&8?u(T,f.children):P&16&&U(f.children,T,null,E,y,b&&k!=="foreignObject",S,w),V&&Kt(f,null,E,"created"),Fe(T,f,f.scopeId,S,E),R){for(const Q in R)Q!=="value"&&!pi(Q)&&r(T,Q,null,R[Q],b,f.children,E,y,ut);"value"in R&&r(T,"value",null,R.value),(I=R.onVnodeBeforeMount)&&it(I,E,f)}V&&Kt(f,null,E,"beforeMount");const ne=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;ne&&F.beforeEnter(T),s(T,p,g),((I=R&&R.onVnodeMounted)||ne||V)&&ke(()=>{I&&it(I,E,f),ne&&F.enter(T),V&&Kt(f,null,E,"mounted")},y)},Fe=(f,p,g,E,y)=>{if(g&&_(f,g),E)for(let b=0;b<E.length;b++)_(f,E[b]);if(y){let b=y.subTree;if(p===b){const S=y.vnode;Fe(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},U=(f,p,g,E,y,b,S,w,T=0)=>{for(let I=T;I<f.length;I++){const k=f[I]=w?Rt(f[I]):rt(f[I]);v(null,k,p,g,E,y,b,S,w)}},ee=(f,p,g,E,y,b,S)=>{const w=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:k}=p;T|=f.patchFlag&16;const R=f.props||oe,P=p.props||oe;let F;g&&qt(g,!1),(F=P.onVnodeBeforeUpdate)&&it(F,g,p,f),k&&Kt(p,f,g,"beforeUpdate"),g&&qt(g,!0);const V=y&&p.type!=="foreignObject";if(I?X(f.dynamicChildren,I,w,g,E,V,b):S||te(f,p,w,null,g,E,V,b,!1),T>0){if(T&16)we(w,p,R,P,g,E,y);else if(T&2&&R.class!==P.class&&r(w,"class",null,P.class,y),T&4&&r(w,"style",R.style,P.style,y),T&8){const ne=p.dynamicProps;for(let Q=0;Q<ne.length;Q++){const de=ne[Q],ze=R[de],En=P[de];(En!==ze||de==="value")&&r(w,de,ze,En,y,f.children,g,E,ut)}}T&1&&f.children!==p.children&&u(w,p.children)}else!S&&I==null&&we(w,p,R,P,g,E,y);((F=P.onVnodeUpdated)||k)&&ke(()=>{F&&it(F,g,p,f),k&&Kt(p,f,g,"updated")},E)},X=(f,p,g,E,y,b,S)=>{for(let w=0;w<p.length;w++){const T=f[w],I=p[w],k=T.el&&(T.type===$e||!Xt(T,I)||T.shapeFlag&70)?h(T.el):g;v(T,I,k,null,E,y,b,S,!0)}},we=(f,p,g,E,y,b,S)=>{if(g!==E){if(g!==oe)for(const w in g)!pi(w)&&!(w in E)&&r(f,w,g[w],null,S,p.children,y,b,ut);for(const w in E){if(pi(w))continue;const T=E[w],I=g[w];T!==I&&w!=="value"&&r(f,w,I,T,S,p.children,y,b,ut)}"value"in E&&r(f,"value",g.value,E.value)}},N=(f,p,g,E,y,b,S,w,T)=>{const I=p.el=f?f.el:a(""),k=p.anchor=f?f.anchor:a("");let{patchFlag:R,dynamicChildren:P,slotScopeIds:F}=p;F&&(w=w?w.concat(F):F),f==null?(s(I,g,E),s(k,g,E),U(p.children,g,k,y,b,S,w,T)):R>0&&R&64&&P&&f.dynamicChildren?(X(f.dynamicChildren,P,g,y,b,S,w),(p.key!=null||y&&p===y.subTree)&&zu(f,p,!0)):te(f,p,g,k,y,b,S,w,T)},le=(f,p,g,E,y,b,S,w,T)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?y.ctx.activate(p,g,E,S,T):Ue(p,g,E,y,b,S,T):ns(f,p,T)},Ue=(f,p,g,E,y,b,S)=>{const w=f.component=m_(f,E,y);if(or(f)&&(w.ctx.renderer=yn),v_(w),w.asyncDep){if(y&&y.registerDep(w,ge),!f.el){const T=w.subTree=ie(Ze);O(null,T,p,g)}return}ge(w,f,p,g,y,b,S)},ns=(f,p,g)=>{const E=p.component=f.component;if(Ap(f,p,g))if(E.asyncDep&&!E.asyncResolved){ce(E,p,g);return}else E.next=p,Ip(E.update),E.update();else p.el=f.el,E.vnode=p},ge=(f,p,g,E,y,b,S)=>{const w=()=>{if(f.isMounted){let{next:k,bu:R,u:P,parent:F,vnode:V}=f,ne=k,Q;qt(f,!1),k?(k.el=V.el,ce(f,k,S)):k=V,R&&_i(R),(Q=k.props&&k.props.onVnodeBeforeUpdate)&&it(Q,F,k,V),qt(f,!0);const de=kr(f),ze=f.subTree;f.subTree=de,v(ze,de,h(ze.el),ii(ze),f,y,b),k.el=de.el,ne===null&&Rp(f,de.el),P&&ke(P,y),(Q=k.props&&k.props.onVnodeUpdated)&&ke(()=>it(Q,F,k,V),y)}else{let k;const{el:R,props:P}=p,{bm:F,m:V,parent:ne}=f,Q=gi(p);if(qt(f,!1),F&&_i(F),!Q&&(k=P&&P.onVnodeBeforeMount)&&it(k,ne,p),qt(f,!0),R&&Rr){const de=()=>{f.subTree=kr(f),Rr(R,f.subTree,f,y,null)};Q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=kr(f);v(null,de,g,E,f,y,b),p.el=de.el}if(V&&ke(V,y),!Q&&(k=P&&P.onVnodeMounted)){const de=p;ke(()=>it(k,ne,de),y)}(p.shapeFlag&256||ne&&gi(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&ke(f.a,y),f.isMounted=!0,p=g=E=null}},T=f.effect=new Ho(w,()=>Qo(I),f.scope),I=f.update=()=>T.run();I.id=f.uid,qt(f,!0),I()},ce=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,t_(f,p.props,E,g),i_(f,p.children,g),Kn(),vl(),qn()},te=(f,p,g,E,y,b,S,w,T=!1)=>{const I=f&&f.children,k=f?f.shapeFlag:0,R=p.children,{patchFlag:P,shapeFlag:F}=p;if(P>0){if(P&128){si(I,R,g,E,y,b,S,w,T);return}else if(P&256){jt(I,R,g,E,y,b,S,w,T);return}}F&8?(k&16&&ut(I,y,b),R!==I&&u(g,R)):k&16?F&16?si(I,R,g,E,y,b,S,w,T):ut(I,y,b,!0):(k&8&&u(g,""),F&16&&U(R,g,E,y,b,S,w,T))},jt=(f,p,g,E,y,b,S,w,T)=>{f=f||Sn,p=p||Sn;const I=f.length,k=p.length,R=Math.min(I,k);let P;for(P=0;P<R;P++){const F=p[P]=T?Rt(p[P]):rt(p[P]);v(f[P],F,g,null,y,b,S,w,T)}I>k?ut(f,y,b,!0,!1,R):U(p,g,E,y,b,S,w,T,R)},si=(f,p,g,E,y,b,S,w,T)=>{let I=0;const k=p.length;let R=f.length-1,P=k-1;for(;I<=R&&I<=P;){const F=f[I],V=p[I]=T?Rt(p[I]):rt(p[I]);if(Xt(F,V))v(F,V,g,null,y,b,S,w,T);else break;I++}for(;I<=R&&I<=P;){const F=f[R],V=p[P]=T?Rt(p[P]):rt(p[P]);if(Xt(F,V))v(F,V,g,null,y,b,S,w,T);else break;R--,P--}if(I>R){if(I<=P){const F=P+1,V=F<k?p[F].el:E;for(;I<=P;)v(null,p[I]=T?Rt(p[I]):rt(p[I]),g,V,y,b,S,w,T),I++}}else if(I>P)for(;I<=R;)nt(f[I],y,b,!0),I++;else{const F=I,V=I,ne=new Map;for(I=V;I<=P;I++){const Be=p[I]=T?Rt(p[I]):rt(p[I]);Be.key!=null&&ne.set(Be.key,I)}let Q,de=0;const ze=P-V+1;let En=!1,ol=0;const ss=new Array(ze);for(I=0;I<ze;I++)ss[I]=0;for(I=F;I<=R;I++){const Be=f[I];if(de>=ze){nt(Be,y,b,!0);continue}let st;if(Be.key!=null)st=ne.get(Be.key);else for(Q=V;Q<=P;Q++)if(ss[Q-V]===0&&Xt(Be,p[Q])){st=Q;break}st===void 0?nt(Be,y,b,!0):(ss[st-V]=I+1,st>=ol?ol=st:En=!0,v(Be,p[st],g,null,y,b,S,w,T),de++)}const al=En?a_(ss):Sn;for(Q=al.length-1,I=ze-1;I>=0;I--){const Be=V+I,st=p[Be],ll=Be+1<k?p[Be+1].el:E;ss[I]===0?v(null,st,g,ll,y,b,S,w,T):En&&(Q<0||I!==al[Q]?zt(st,g,ll,2):Q--)}}},zt=(f,p,g,E,y=null)=>{const{el:b,type:S,transition:w,children:T,shapeFlag:I}=f;if(I&6){zt(f.component.subTree,p,g,E);return}if(I&128){f.suspense.move(p,g,E);return}if(I&64){S.move(f,p,g,yn);return}if(S===$e){s(b,p,g);for(let R=0;R<T.length;R++)zt(T[R],p,g,E);s(f.anchor,p,g);return}if(S===vi){K(f,p,g);return}if(E!==2&&I&1&&w)if(E===0)w.beforeEnter(b),s(b,p,g),ke(()=>w.enter(b),y);else{const{leave:R,delayLeave:P,afterLeave:F}=w,V=()=>s(b,p,g),ne=()=>{R(b,()=>{V(),F&&F()})};P?P(b,V,ne):ne()}else s(b,p,g)},nt=(f,p,g,E=!1,y=!1)=>{const{type:b,props:S,ref:w,children:T,dynamicChildren:I,shapeFlag:k,patchFlag:R,dirs:P}=f;if(w!=null&&uo(w,null,g,f,!0),k&256){p.ctx.deactivate(f);return}const F=k&1&&P,V=!gi(f);let ne;if(V&&(ne=S&&S.onVnodeBeforeUnmount)&&it(ne,p,f),k&6)wf(f.component,g,E);else{if(k&128){f.suspense.unmount(g,E);return}F&&Kt(f,null,p,"beforeUnmount"),k&64?f.type.remove(f,p,g,y,yn,E):I&&(b!==$e||R>0&&R&64)?ut(I,p,g,!1,!0):(b===$e&&R&384||!y&&k&16)&&ut(T,p,g),E&&il(f)}(V&&(ne=S&&S.onVnodeUnmounted)||F)&&ke(()=>{ne&&it(ne,p,f),F&&Kt(f,null,p,"unmounted")},g)},il=f=>{const{type:p,el:g,anchor:E,transition:y}=f;if(p===$e){Cf(g,E);return}if(p===vi){x(f);return}const b=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:w}=y,T=()=>S(g,b);w?w(f.el,b,T):T()}else b()},Cf=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},wf=(f,p,g)=>{const{bum:E,scope:y,update:b,subTree:S,um:w}=f;E&&_i(E),y.stop(),b&&(b.active=!1,nt(S,f,p,g)),w&&ke(w,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ut=(f,p,g,E=!1,y=!1,b=0)=>{for(let S=b;S<f.length;S++)nt(f[S],p,g,E,y)},ii=f=>f.shapeFlag&6?ii(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),rl=(f,p,g)=>{f==null?p._vnode&&nt(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,g),vl(),Au(),p._vnode=f},yn={p:v,um:nt,m:zt,r:il,mt:Ue,mc:U,pc:te,pbc:X,n:ii,o:t};let Ar,Rr;return e&&([Ar,Rr]=e(yn)),{render:rl,hydrate:Ar,createApp:Xp(rl,Ar)}}function qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zu(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Rt(i[r]),a.el=o.el),n||zu(o,a)),a.type===lr&&(a.el=o.el)}}function a_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const l_=t=>t.__isTeleport,$e=Symbol.for("v-fgt"),lr=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),vi=Symbol.for("v-stc"),ms=[];let Ye=null;function Ce(t=!1){ms.push(Ye=t?null:[])}function c_(){ms.pop(),Ye=ms[ms.length-1]||null}let Ps=1;function Nl(t){Ps+=t}function Ku(t){return t.dynamicChildren=Ps>0?Ye||Sn:null,c_(),Ps>0&&Ye&&Ye.push(t),t}function at(t,e,n,s,i,r){return Ku(j(t,e,n,s,i,r,!0))}function rn(t,e,n,s,i){return Ku(ie(t,e,n,s,i,!0))}function ho(t){return t?t.__v_isVNode===!0:!1}function Xt(t,e){return t.type===e.type&&t.key===e.key}const cr="__vInternal",qu=({key:t})=>t??null,yi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||Se(t)||B(t)?{i:He,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,s=0,i=null,r=t===$e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qu(e),ref:e&&yi(e),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return a?(ra(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),Ps>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const ie=u_;function u_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Vp)&&(t=Ze),ho(t)){const a=$t(t,e,!0);return n&&ra(a,n),Ps>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag|=-2,a}if(C_(t)&&(t=t.__vccOpts),e){e=h_(e);let{class:a,style:l}=e;a&&!pe(a)&&(e.class=cn(a)),ae(l)&&(Eu(l)&&!D(l)&&(l=fe({},l)),e.style=zn(l))}const o=pe(t)?1:Np(t)?128:l_(t)?64:ae(t)?4:B(t)?2:0;return j(t,e,n,s,i,o,r,!0)}function h_(t){return t?Eu(t)||cr in t?fe({},t):t:null}function $t(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?p_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&qu(a),ref:e&&e.ref?n&&i?D(i)?i.concat(yi(e)):[i,yi(e)]:yi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function d_(t=" ",e=0){return ie(lr,null,t,e)}function f_(t,e){const n=ie(vi,null,t);return n.staticCount=e,n}function Dr(t="",e=!1){return e?(Ce(),rn(Ze,null,t)):ie(Ze,null,t)}function rt(t){return t==null||typeof t=="boolean"?ie(Ze):D(t)?ie($e,null,t.slice()):typeof t=="object"?Rt(t):ie(lr,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$t(t)}function ra(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ra(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(cr in e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[d_(e)]):n=8);t.children=e,t.shapeFlag|=n}function p_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=cn([e.class,s.class]));else if(i==="style")e.style=zn([e.style,s.style]);else if(Zi(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function it(t,e,n,s=null){Ve(t,e,7,[n,s])}const __=Bu();let g_=0;function m_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||__,r={uid:g_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wu(s,i),emitsOptions:Nu(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bp.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const Gu=()=>Ie||He;let oa,In,kl="__VUE_INSTANCE_SETTERS__";(In=eo()[kl])||(In=eo()[kl]=[]),In.push(t=>Ie=t),oa=t=>{In.length>1?In.forEach(e=>e(t)):In[0](t)};const Un=t=>{oa(t),t.scope.on()},on=()=>{Ie&&Ie.scope.off(),oa(null)};function Yu(t){return t.vnode.shapeFlag&4}let xs=!1;function v_(t,e=!1){xs=e;const{props:n,children:s}=t.vnode,i=Yu(t);e_(t,n,i,e),s_(t,s);const r=i?y_(t,e):void 0;return xs=!1,r}function y_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Iu(new Proxy(t.ctx,zp));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?I_(t):null;Un(t),Kn();const r=Dt(s,t,0,[t.props,i]);if(qn(),on(),su(r)){if(r.then(on,on),e)return r.then(o=>{Pl(t,o,e)}).catch(o=>{sr(o,t,0)});t.asyncDep=r}else Pl(t,r,e)}else Qu(t,e)}function Pl(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=bu(e)),Qu(t,n)}let xl;function Qu(t,e,n){const s=t.type;if(!t.render){if(!e&&xl&&!s.render){const i=s.template||sa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=fe(fe({isCustomElement:r,delimiters:a},o),l);s.render=xl(i,c)}}t.render=s.render||Xe}Un(t),Kn(),Kp(t),qn(),on()}function E_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}}))}function I_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return E_(t)},slots:t.slots,emit:t.emit,expose:e}}function ur(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bu(Iu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}}))}function C_(t){return B(t)&&"__vccOpts"in t}const w_=(t,e)=>mp(t,e,xs);function b_(t,e,n){const s=arguments.length;return s===2?ae(e)&&!D(e)?ho(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ho(n)&&(n=[n]),ie(t,e,n))}const T_=Symbol.for("v-scx"),S_=()=>mi(T_),A_="3.3.4",R_="http://www.w3.org/2000/svg",Zt=typeof document<"u"?document:null,Ol=Zt&&Zt.createElement("template"),N_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zt.createElementNS(R_,t):Zt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ol.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ol.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function k_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function P_(t,e,n){const s=t.style,i=pe(n);if(n&&!i){if(e&&!pe(e))for(const r in e)n[r]==null&&fo(s,r,"");for(const r in n)fo(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Dl=/\s*!important$/;function fo(t,e,n){if(D(n))n.forEach(s=>fo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=x_(t,e);Dl.test(n)?t.setProperty(mn(s),n.replace(Dl,""),"important"):t[s]=n}}const Ml=["Webkit","Moz","ms"],Mr={};function x_(t,e){const n=Mr[e];if(n)return n;let s=Ln(e);if(s!=="filter"&&s in t)return Mr[e]=s;s=ou(s);for(let i=0;i<Ml.length;i++){const r=Ml[i]+s;if(r in t)return Mr[e]=r}return e}const Ll="http://www.w3.org/1999/xlink";function O_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ll,e.slice(6,e.length)):t.setAttributeNS(Ll,e,n);else{const r=Lf(e);n==null||r&&!au(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function D_(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=au(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wn(t,e,n,s){t.addEventListener(e,n,s)}function M_(t,e,n,s){t.removeEventListener(e,n,s)}function L_(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=F_(e);if(s){const c=r[e]=$_(s,i);wn(t,a,c,l)}else o&&(M_(t,a,o,l),r[e]=void 0)}}const Fl=/(?:Once|Passive|Capture)$/;function F_(t){let e;if(Fl.test(t)){e={};let s;for(;s=t.match(Fl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mn(t.slice(2)),e]}let Lr=0;const U_=Promise.resolve(),B_=()=>Lr||(U_.then(()=>Lr=0),Lr=Date.now());function $_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ve(W_(s,n.value),e,5,[s])};return n.value=t,n.attached=B_(),n}function W_(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ul=/^on[a-z]/,H_=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?k_(t,s,i):e==="style"?P_(t,n,s):Zi(e)?Fo(e)||L_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V_(t,e,s,i))?D_(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),O_(t,e,s,i))};function V_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ul.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ul.test(e)&&pe(n)?!1:e in t}const Tt="transition",is="animation",vs=(t,{slots:e})=>b_(Op,Xu(t),e);vs.displayName="Transition";const Ju={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j_=vs.props=fe({},Ou,Ju),Gt=(t,e=[])=>{D(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bl=t=>t?D(t)?t.some(e=>e.length>1):t.length>1:!1;function Xu(t){const e={};for(const N in t)N in Ju||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=z_(i),v=m&&m[0],A=m&&m[1],{onBeforeEnter:O,onEnter:z,onEnterCancelled:K,onLeave:x,onLeaveCancelled:he,onBeforeAppear:Ne=O,onAppear:Fe=z,onAppearCancelled:U=K}=e,ee=(N,le,Ue)=>{At(N,le?u:a),At(N,le?c:o),Ue&&Ue()},X=(N,le)=>{N._isLeaving=!1,At(N,h),At(N,_),At(N,d),le&&le()},we=N=>(le,Ue)=>{const ns=N?Fe:z,ge=()=>ee(le,N,Ue);Gt(ns,[le,ge]),$l(()=>{At(le,N?l:r),ht(le,N?u:a),Bl(ns)||Wl(le,s,v,ge)})};return fe(e,{onBeforeEnter(N){Gt(O,[N]),ht(N,r),ht(N,o)},onBeforeAppear(N){Gt(Ne,[N]),ht(N,l),ht(N,c)},onEnter:we(!1),onAppear:we(!0),onLeave(N,le){N._isLeaving=!0;const Ue=()=>X(N,le);ht(N,h),eh(),ht(N,d),$l(()=>{N._isLeaving&&(At(N,h),ht(N,_),Bl(x)||Wl(N,s,A,Ue))}),Gt(x,[N,Ue])},onEnterCancelled(N){ee(N,!1),Gt(K,[N])},onAppearCancelled(N){ee(N,!0),Gt(U,[N])},onLeaveCancelled(N){X(N),Gt(he,[N])}})}function z_(t){if(t==null)return null;if(ae(t))return[Fr(t.enter),Fr(t.leave)];{const e=Fr(t);return[e,e]}}function Fr(t){return kf(t)}function ht(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function At(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function $l(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let K_=0;function Wl(t,e,n,s){const i=t._endId=++K_,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Zu(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Zu(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Tt}Delay`),r=s(`${Tt}Duration`),o=Hl(i,r),a=s(`${is}Delay`),l=s(`${is}Duration`),c=Hl(a,l);let u=null,h=0,d=0;e===Tt?o>0&&(u=Tt,h=o,d=r.length):e===is?c>0&&(u=is,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Tt:is:null,d=u?u===Tt?r.length:l.length:0);const _=u===Tt&&/\b(transform|all)(,|$)/.test(s(`${Tt}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function Hl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Vl(n)+Vl(t[s])))}function Vl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}const th=new WeakMap,nh=new WeakMap,sh={name:"TransitionGroup",props:fe({},j_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gu(),s=xu();let i,r;return Lu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!X_(i[0].el,n.vnode.el,o))return;i.forEach(Y_),i.forEach(Q_);const a=i.filter(J_);eh(),a.forEach(l=>{const c=l.el,u=c.style;ht(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,At(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=G(t),a=Xu(o);let l=o.tag||$e;i=r,r=e.default?ea(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&ks(u,Ns(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];ks(u,Ns(u,a,s,n)),th.set(u,u.el.getBoundingClientRect())}return ie(l,null,r)}}},q_=t=>delete t.mode;sh.props;const G_=sh;function Y_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Q_(t){nh.set(t,t.el.getBoundingClientRect())}function J_(t){const e=th.get(t),n=nh.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function X_(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Zu(s);return i.removeChild(s),r}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>_i(e,n):e};function Z_(t){t.target.composing=!0}function zl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const eg={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=jl(i);const r=s||i.props&&i.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Zr(a)),t._assign(a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",Z_),wn(t,"compositionend",zl),wn(t,"change",zl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=jl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Zr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},tg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ng=(t,e)=>n=>{if(!("key"in n))return;const s=mn(n.key);if(e.some(i=>i===s||tg[i]===s))return t(n)},ih={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):rs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),rs(t,!0),s.enter(t)):s.leave(t,()=>{rs(t,!1)}):rs(t,e))},beforeUnmount(t,{value:e}){rs(t,e)}};function rs(t,e){t.style.display=e?t._vod:"none"}const sg=fe({patchProp:H_},N_);let Kl;function ig(){return Kl||(Kl=r_(sg))}const rg=(...t)=>{const e=ig().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=og(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function og(t){return pe(t)?document.querySelector(t):t}const ag="/our_odyssey/assets/jar-ea323999.svg";/**
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
 */const rh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Gn(e)},Gn=function(t){return new Error("Firebase Database ("+rh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const oh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new cg;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ah=function(t){const e=oh(t);return aa.encodeByteArray(e,!0)},ki=function(t){return ah(t).replace(/\./g,"")},Pi=function(t){try{return aa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ug(t){return lh(void 0,t)}function lh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hg(n)||(t[n]=lh(t[n],e[n]));return t}function hg(t){return t!=="__proto__"}/**
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
 */function dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fg=()=>dg().__FIREBASE_DEFAULTS__,pg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pi(t[1]);return e&&JSON.parse(e)},la=()=>{try{return fg()||pg()||_g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ch=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gg=t=>{const e=ch(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uh=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},hh=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function mg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ki(JSON.stringify(n)),ki(JSON.stringify(o)),a].join(".")}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function vg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yg(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fh(){return rh.NODE_ADMIN===!0}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function Ig(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Cg="FirebaseError";class Vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cg,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,a,s)}}function wg(t,e){return t.replace(bg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const bg=/\{\$([^}]+)}/g;/**
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
 */function Os(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const ph=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Os(Pi(r[0])||""),n=Os(Pi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Tg=function(t){const e=ph(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Sg=function(t){const e=ph(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function po(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Oi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ql(r)&&ql(o)){if(!Oi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ql(t){return t!==null&&typeof t=="object"}/**
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
 */function Yn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Ag{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Rg(t,e){const n=new Ng(t,e);return n.subscribe.bind(n)}class Ng{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ur),i.error===void 0&&(i.error=Ur),i.complete===void 0&&(i.complete=Ur);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ur(){}function ua(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Pg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class xg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Og(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(t){return t===Yt?void 0:t}function Dg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Lg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Fg=J.INFO,Ug={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Bg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ug[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const $g=(t,e)=>e.some(n=>t instanceof n);let Gl,Yl;function Wg(){return Gl||(Gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hg(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _h=new WeakMap,_o=new WeakMap,gh=new WeakMap,Br=new WeakMap,da=new WeakMap;function Vg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_h.set(n,t)}).catch(()=>{}),da.set(e,t),e}function jg(t){if(_o.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_o.set(t,e)}let go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zg(t){go=t(go)}function Kg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($r(this),e,...n);return gh.set(s,e.sort?e.sort():[e]),Mt(s)}:Hg().includes(t)?function(...e){return t.apply($r(this),e),Mt(_h.get(this))}:function(...e){return Mt(t.apply($r(this),e))}}function qg(t){return typeof t=="function"?Kg(t):(t instanceof IDBTransaction&&jg(t),$g(t,Wg())?new Proxy(t,go):t)}function Mt(t){if(t instanceof IDBRequest)return Vg(t);if(Br.has(t))return Br.get(t);const e=qg(t);return e!==t&&(Br.set(t,e),da.set(e,t)),e}const $r=t=>da.get(t);function Gg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yg=["get","getKey","getAll","getAllKeys","count"],Qg=["put","add","delete","clear"],Wr=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Qg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Yg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Wr.set(e,r),r}zg(t=>({...t,get:(e,n,s)=>Ql(e,n)||t.get(e,n,s),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
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
 */class Jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",Jl="0.9.14";/**
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
 */const hn=new ha("@firebase/app"),Zg="@firebase/app-compat",em="@firebase/analytics-compat",tm="@firebase/analytics",nm="@firebase/app-check-compat",sm="@firebase/app-check",im="@firebase/auth",rm="@firebase/auth-compat",om="@firebase/database",am="@firebase/database-compat",lm="@firebase/functions",cm="@firebase/functions-compat",um="@firebase/installations",hm="@firebase/installations-compat",dm="@firebase/messaging",fm="@firebase/messaging-compat",pm="@firebase/performance",_m="@firebase/performance-compat",gm="@firebase/remote-config",mm="@firebase/remote-config-compat",vm="@firebase/storage",ym="@firebase/storage-compat",Em="@firebase/firestore",Im="@firebase/firestore-compat",Cm="firebase",wm="10.0.0";/**
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
 */const vo="[DEFAULT]",bm={[mo]:"fire-core",[Zg]:"fire-core-compat",[tm]:"fire-analytics",[em]:"fire-analytics-compat",[sm]:"fire-app-check",[nm]:"fire-app-check-compat",[im]:"fire-auth",[rm]:"fire-auth-compat",[om]:"fire-rtdb",[am]:"fire-rtdb-compat",[lm]:"fire-fn",[cm]:"fire-fn-compat",[um]:"fire-iid",[hm]:"fire-iid-compat",[dm]:"fire-fcm",[fm]:"fire-fcm-compat",[pm]:"fire-perf",[_m]:"fire-perf-compat",[gm]:"fire-rc",[mm]:"fire-rc-compat",[vm]:"fire-gcs",[ym]:"fire-gcs-compat",[Em]:"fire-fst",[Im]:"fire-fst-compat","fire-js":"fire-js",[Cm]:"fire-js-all"};/**
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
 */const Di=new Map,yo=new Map;function Tm(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(yo.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,t);for(const n of Di.values())Tm(n,t);return!0}function fa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new zs("app","Firebase",Sm);/**
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
 */class Am{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=wm;function mh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=uh()),!n)throw Lt.create("no-options");const r=Di.get(i);if(r){if(Oi(n,r.options)&&Oi(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new Mg(i);for(const l of yo.values())o.addComponent(l);const a=new Am(n,s,o);return Di.set(i,a),a}function vh(t=vo){const e=Di.get(t);if(!e&&t===vo&&uh())return mh();if(!e)throw Lt.create("no-app",{appName:t});return e}function Ft(t,e,n){var s;let i=(s=bm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}$n(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rm="firebase-heartbeat-database",Nm=1,Ds="firebase-heartbeat-store";let Hr=null;function yh(){return Hr||(Hr=Gg(Rm,Nm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ds)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Hr}async function km(t){try{return await(await yh()).transaction(Ds).objectStore(Ds).get(Eh(t))}catch(e){if(e instanceof Vt)hn.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function Xl(t,e){try{const s=(await yh()).transaction(Ds,"readwrite");await s.objectStore(Ds).put(e,Eh(t)),await s.done}catch(n){if(n instanceof Vt)hn.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(s.message)}}}function Eh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pm=1024,xm=30*24*60*60*1e3;class Om{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=xm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zl(),{heartbeatsToSend:n,unsentEntries:s}=Dm(this._heartbeatsCache.heartbeats),i=ki(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zl(){return new Date().toISOString().substring(0,10)}function Dm(t,e=Pm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ec(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ec(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Mm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?Ig().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await km(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ec(t){return ki(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lm(t){$n(new un("platform-logger",e=>new Jg(e),"PRIVATE")),$n(new un("heartbeat",e=>new Om(e),"PRIVATE")),Ft(mo,Jl,t),Ft(mo,Jl,"esm2017"),Ft("fire-js","")}Lm("");const tc="@firebase/database",nc="1.0.0";/**
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
 */let Ih="";function Fm(t){Ih=t}/**
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
 */class Um{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Bm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ch=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Um(e)}}catch{}return new Bm},tn=Ch("localStorage"),Eo=Ch("sessionStorage");/**
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
 */const kn=new ha("@firebase/database"),$m=function(){let t=1;return function(){return t++}}(),wh=function(t){const e=Pg(t),n=new Ag;n.update(e);const s=n.digest();return aa.encodeByteArray(s)},Ks=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ks.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let an=null,sc=!0;const Wm=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(kn.logLevel=J.VERBOSE,an=kn.log.bind(kn),e&&Eo.set("logging_enabled",!0)):typeof t=="function"?an=t:(an=null,Eo.remove("logging_enabled"))},be=function(...t){if(sc===!0&&(sc=!1,an===null&&Eo.get("logging_enabled")===!0&&Wm(!0)),an){const e=Ks.apply(null,t);an(e)}},qs=function(t){return function(...e){be(t,...e)}},Io=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ks(...t);kn.error(e)},vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ks(...t)}`;throw kn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+Ks(...t);kn.warn(e)},Hm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wn="[MIN_NAME]",dn="[MAX_NAME]",Jn=function(t,e){if(t===e)return 0;if(t===Wn||e===dn)return-1;if(e===Wn||t===dn)return 1;{const n=ic(t),s=ic(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},jm=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},pa=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=pa(t[e[s]]);return n+="}",n},Th=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Le(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sh=function(t){C(!bh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},zm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Km=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Gm=new RegExp("^-?(0*)\\d{1,10}$"),Ym=-2147483648,Qm=2147483647,ic=function(t){if(Gm.test(t)){const e=Number(t);if(e>=Ym&&e<=Qm)return e}return null},Xn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},Jm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ys=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Zm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Pn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pn.OWNER="owner";/**
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
 */const _a="5",Ah="v",Rh="s",Nh="r",kh="f",Ph=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xh="ls",Oh="p",Co="ac",Dh="websocket",Mh="long_polling";/**
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
 */class Lh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ev(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fh(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Dh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ev(t)&&(n.ns=t.namespace);const i=[];return Le(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class tv{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ug(this.counters_)}}/**
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
 */const Vr={},jr={};function ga(t){const e=t.toString();return Vr[e]||(Vr[e]=new tv),Vr[e]}function nv(t,e){const n=t.toString();return jr[n]||(jr[n]=e()),jr[n]}/**
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
 */class sv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Xn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const rc="start",iv="close",rv="pLPCommand",ov="pRTLPCB",Uh="id",Bh="pw",$h="ser",av="cb",lv="seg",cv="ts",uv="d",hv="dframe",Wh=1870,Hh=30,dv=Wh-Hh,fv=25e3,pv=3e4;class bn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qs(e),this.stats_=ga(n),this.urlFn=l=>(this.appCheckToken&&(l[Co]=this.appCheckToken),Fh(n,Mh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pv)),Vm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ma((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rc)this.id=a,this.password=l;else if(o===iv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[rc]="t",s[$h]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[av]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ah]=_a,this.transportSessionId&&(s[Rh]=this.transportSessionId),this.lastSessionId&&(s[xh]=this.lastSessionId),this.applicationId&&(s[Oh]=this.applicationId),this.appCheckToken&&(s[Co]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ph.test(location.hostname)&&(s[Nh]=kh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return bn.forceAllow_?!0:!bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zm()&&!Km()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ah(n),i=Th(s,dv);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[hv]="t",s[Uh]=e,s[Bh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ma{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$m(),window[rv+this.uniqueCallbackIdentifier]=e,window[ov+this.uniqueCallbackIdentifier]=n,this.myIFrame=ma.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Uh]=this.myID,e[Bh]=this.myPW,e[$h]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hh+s.length<=Wh;){const o=this.pendingSegs.shift();s=s+"&"+lv+i+"="+o.seg+"&"+cv+i+"="+o.ts+"&"+uv+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(fv)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const _v=16384,gv=45e3;let Mi=null;typeof MozWebSocket<"u"?Mi=MozWebSocket:typeof WebSocket<"u"&&(Mi=WebSocket);class Ge{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qs(this.connId),this.stats_=ga(n),this.connURL=Ge.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ah]=_a,typeof location<"u"&&location.hostname&&Ph.test(location.hostname)&&(o[Nh]=kh),n&&(o[Rh]=n),s&&(o[xh]=s),i&&(o[Co]=i),r&&(o[Oh]=r),Fh(e,Dh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tn.set("previous_websocket_failure",!0);try{let s;fh(),this.mySock=new Mi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Mi!==null&&!Ge.forceDisallow_}static previouslyFailed(){return tn.isInMemoryStorage||tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Th(n,_v);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
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
 */class Ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bn,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let s=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ge];else{const i=this.transports_=[];for(const r of Ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ms.globalTransportInitialized_=!1;/**
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
 */const mv=6e4,vv=5e3,yv=10*1024,Ev=100*1024,zr="t",oc="d",Iv="s",ac="r",Cv="e",lc="o",cc="a",uc="n",hc="p",wv="h";class bv{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qs("c:"+this.id+":"),this.transportManager_=new Ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ev?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zr in e){const n=e[zr];n===cc?this.upgradeIfSecondaryHealthy_():n===ac?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),s=os("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),s=os("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(zr,e);if(oc in e){const s=e[oc];if(n===wv){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===uc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Iv?this.onConnectionShutdown_(s):n===ac?this.onReset_(s):n===Cv?Io("Server Error: "+s):n===lc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Io("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_a!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class jh{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Li extends jh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ca()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Li}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dc=32,fc=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new Z("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wt(t){return t.pieces_.length-t.pieceNum_}function se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function zh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Tv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Kh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return xe(se(t),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function va(t,e){if(Wt(t)!==Wt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Wt(t)>Wt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Sv{constructor(e,n){this.errorPrefix_=n,this.parts_=Kh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dr(this.parts_[s]);Gh(this)}}function Av(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dr(e),Gh(t)}function Rv(t){const e=t.parts_.pop();t.byteLength_-=dr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gh(t){if(t.byteLength_>fc)throw new Error(t.errorPrefix_+"has a key path longer than "+fc+" bytes ("+t.byteLength_+").");if(t.parts_.length>dc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dc+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ya extends jh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ya}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const as=1e3,Nv=60*5*1e3,pc=30*1e3,kv=1.3,Pv=3e4,xv="server_kill",_c=3;class gt extends Vh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=as,this.maxReconnectDelay_=Nv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!fh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ya.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new hr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const s=Bn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Tg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Io("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pv&&(this.reconnectDelay_=as),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new bv(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(xv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],po(this.interruptReasons_)&&(this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>pa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_c&&(this.reconnectDelay_=pc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_c&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ih.replace(/\./g,"-")]=1,ca()?e["framework.cordova"]=1:dh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Li.getInstance().currentlyOnline();return po(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
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
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
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
 */class fr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new W(Wn,e),i=new W(Wn,n);return this.compare(s,i)!==0}minPost(){return W.MIN}}/**
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
 */let hi;class Yh extends fr{static get __EMPTY_NODE(){return hi}static set __EMPTY_NODE(e){hi=e}compare(e,n){return Jn(e.name,n.name)}isDefinedOn(e){throw Gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(dn,hi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,hi)}toString(){return".key"}}const xn=new Yh;/**
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
 */class di{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Ov{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new di(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new Ov;/**
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
 */function Dv(t,e){return Jn(t.name,e.name)}function Ea(t,e){return Jn(t,e)}/**
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
 */let wo;function Mv(t){wo=t}const Qh=function(t){return typeof t=="number"?"number:"+Sh(t):"string:"+t},Jh=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else C(t===wo||t.isEmpty(),"priority of unexpected type.");C(t===wo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gc;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jh(this.priorityNode_)}static set __childrenNodeConstructor(e){gc=e}static get __childrenNodeConstructor(){return gc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:$(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sh(this.value_):e+=this.value_,this.lazyHash_=wh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),r=me.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Xh,Zh;function Lv(t){Xh=t}function Fv(t){Zh=t}class Uv extends fr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(dn,new me("[PRIORITY-POST]",Zh))}makePost(e,n){const s=Xh(e);return new W(n,new me("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Uv;/**
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
 */const Bv=Math.log(2);class $v{constructor(e){const n=r=>parseInt(Math.log(r)/Bv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ve(d,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),v=i(_+1,c);return h=t[_],d=n?n(h):h,new ve(d,h.node,ve.BLACK,m,v)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,v){const A=h-m,O=h;h-=m;const z=i(A+1,O),K=t[A],x=n?n(K):K;_(new ve(x,K.node,v,null,z))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const v=l.nextBitIsOne(),A=Math.pow(2,l.count-(m+1));v?d(A,ve.BLACK):(d(A,ve.BLACK),d(A,ve.RED))}return u},o=new $v(t.length),a=r(o);return new Oe(s||e,a)};/**
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
 */let Kr;const Cn={};class ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Cn&&ue,"ChildrenNode.ts has not been loaded"),Kr=Kr||new ft({".priority":Cn},{".priority":ue}),Kr}get(e){const n=Bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){C(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(W.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Fi(s,e.getCompare()):a=Cn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ft(u,c)}addToIndexes(e,n){const s=xi(this.indexes_,(i,r)=>{const o=Bn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===Cn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Fi(a,o.getCompare())}else return Cn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new ft(s,this.indexSet_)}removeFromIndexes(e,n){const s=xi(this.indexes_,i=>{if(i===Cn)return i;{const r=n.get(e.name);return r?i.remove(new W(e.name,r)):i}});return new ft(s,this.indexSet_)}}/**
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
 */let ls;class M{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Jh(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ls||(ls=new M(new Oe(Ea),null,ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ls}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ls:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new W(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ls:this.priorityNode_;return new M(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{C($(e)!==".priority"||Wt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(se(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,a)=>{n[o]=a.val(e),s++,r&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qh(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new W(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gs?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wv extends M{constructor(){super(new Oe(Ea),M.EMPTY_NODE,ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Gs=new Wv;Object.defineProperties(W,{MIN:{value:new W(Wn,M.EMPTY_NODE)},MAX:{value:new W(dn,Gs)}});Yh.__EMPTY_NODE=M.EMPTY_NODE;me.__childrenNodeConstructor=M;Mv(Gs);Fv(Gs);/**
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
 */const Hv=!0;function Ee(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,Ee(e))}if(!(t instanceof Array)&&Hv){const n=[];let s=!1;if(Le(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return M.EMPTY_NODE;const r=Fi(n,Dv,o=>o.name,Ea);if(s){const o=Fi(n,ue.getCompare());return new M(r,Ee(e),new ft({".priority":o},{".priority":ue}))}else return new M(r,Ee(e),ft.Default)}else{let n=M.EMPTY_NODE;return Le(t,(s,i)=>{if(Ct(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}Lv(Ee);/**
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
 */class Vv extends fr{constructor(e){super(),this.indexPath_=e,C(!H(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Jn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,s);return new W(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Gs);return new W(dn,e)}toString(){return Kh(this.indexPath_,0).join("/")}}/**
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
 */class jv extends fr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Jn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const s=Ee(e);return new W(n,s)}toString(){return".value"}}const zv=new jv;/**
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
 */function ed(t){return{type:"value",snapshotNode:t}}function Hn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Kv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ia{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ls(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Hn(n,s)):o.trackChildChange(Fs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ls(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Fs(i,r,o))}else s.trackChildChange(Hn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Us{constructor(e){this.indexedFilter_=new Ia(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new W(n,s))||(s=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,a)=>{r.matches(new W(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class qv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new W(n,s))||(s=M.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new W(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Fs(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ls(n,h));const v=a.updateImmediateChild(n,M.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Hn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ls(c.name,c.node)),r.trackChildChange(Hn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
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
 */class Ca{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Ca;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gv(t){return t.loadsAllData()?new Ia(t.getIndex()):t.hasLimit()?new qv(t):new Us(t)}function mc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===zv?n="$value":t.index_===xn?n="$key":(C(t.index_ instanceof Vv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class Ui extends Vh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ui.getListenId_(e,s),a={};this.listens_[o]=a;const l=mc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Bn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ui.getListenId_(e,n);delete this.listens_[s]}get(e){const n=mc(e._queryParams),s=e._path.toString(),i=new hr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Os(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Yv{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bi(){return{value:null,children:new Map}}function td(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,Bi());const i=t.children.get(s);e=se(e),td(i,e,n)}}function bo(t,e,n){t.value!==null?n(e,t.value):Qv(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);bo(i,r,n)})}function Qv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Jv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Le(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const yc=10*1e3,Xv=30*1e3,Zv=5*60*1e3;class ey{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Jv(e);const s=yc+(Xv-yc)*Math.random();ys(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Le(e,(i,r)=>{r>0&&Ct(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*Zv))}}/**
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
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function nd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ba(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $i{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Je.ACK_USER_WRITE,this.source=nd()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new $i(Y(),n,this.revert)}}else return C($(this.path)===e,"operationForChild called for unrelated child."),new $i(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class Bs{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Bs(this.source,Y()):new Bs(this.source,se(this.path))}}/**
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
 */class fn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Je.OVERWRITE}operationForChild(e){return H(this.path)?new fn(this.source,Y(),this.snap.getImmediateChild(e)):new fn(this.source,se(this.path),this.snap)}}/**
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
 */class $s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Je.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new fn(this.source,Y(),n.value):new $s(this.source,Y(),n)}else return C($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $s(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ty{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ny(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kv(o.childName,o.snapshotNode))}),cs(t,i,"child_removed",e,s,n),cs(t,i,"child_added",e,s,n),cs(t,i,"child_moved",r,s,n),cs(t,i,"child_changed",e,s,n),cs(t,i,"value",e,s,n),i}function cs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>iy(t,a,l)),o.forEach(a=>{const l=sy(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iy(t,e,n){if(e.childName==null||n.childName==null)throw Gn("Should only compare child_ events.");const s=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function pr(t,e){return{eventCache:t,serverCache:e}}function Es(t,e,n,s){return pr(new pn(e,n,s),t.serverCache)}function sd(t,e,n,s){return pr(t.eventCache,new pn(e,n,s))}function To(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let qr;const ry=()=>(qr||(qr=new Oe(jm)),qr);class re{constructor(e,n=ry()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Le(e,(s,i)=>{n=n.set(new Z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(H(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(se(e),n);return r!=null?{path:_e(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(se(e)):new re(null)}}set(e,n){if(H(e))return new re(n,this.children);{const s=$(e),r=(this.children.get(s)||new re(null)).set(se(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(se(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(H(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(se(e)):null}}setTree(e,n){if(H(e))return n;{const s=$(e),r=(this.children.get(s)||new re(null)).setTree(se(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(H(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(se(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(H(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(se(e),_e(n,i),s):new re(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new re(null))}}function Is(t,e,n){if(H(e))return new et(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Ec(t,e,n){let s=t;return Le(n,(i,r)=>{s=Is(s,_e(e,i),r)}),s}function Ic(t,e){if(H(e))return et.empty();{const n=t.writeTree_.setTree(e,new re(null));return new et(n)}}function So(t,e){return vn(t,e)!=null}function vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function Cc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new W(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new W(s,i.value))}),e}function Ut(t,e){if(H(e))return t;{const n=vn(t,e);return n!=null?new et(new re(n)):new et(t.writeTree_.subtree(e))}}function Ao(t){return t.writeTree_.isEmpty()}function Vn(t,e){return id(Y(),t.writeTree_,e)}function id(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=id(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
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
 */function Ta(t,e){return ld(e,t)}function oy(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Is(t.visibleWrites,e,n)),t.lastWriteId=s}function ay(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ly(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cy(a,s.path)?i=!1:Qe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return uy(t),!0;if(s.snap)t.visibleWrites=Ic(t.visibleWrites,s.path);else{const a=s.children;Le(a,l=>{t.visibleWrites=Ic(t.visibleWrites,_e(s.path,l))})}return!0}else return!1}function cy(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(_e(t.path,n),e))return!0;return!1}function uy(t){t.visibleWrites=rd(t.allWrites,hy,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hy(t){return t.visible}function rd(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qe(n,o)?(a=xe(n,o),s=Is(s,a,r.snap)):Qe(o,n)&&(a=xe(o,n),s=Is(s,Y(),r.snap.getChild(a)));else if(r.children){if(Qe(n,o))a=xe(n,o),s=Ec(s,a,r.children);else if(Qe(o,n))if(a=xe(o,n),H(a))s=Ec(s,Y(),r.children);else{const l=Bn(r.children,$(a));if(l){const c=l.getChild(se(a));s=Is(s,Y(),c)}}}else throw Gn("WriteRecord should have .snap or .children")}}return s}function od(t,e,n,s,i){if(!s&&!i){const r=vn(t.visibleWrites,e);if(r!=null)return r;{const o=Ut(t.visibleWrites,e);if(Ao(o))return n;if(n==null&&!So(o,Y()))return null;{const a=n||M.EMPTY_NODE;return Vn(o,a)}}}else{const r=Ut(t.visibleWrites,e);if(!i&&Ao(r))return n;if(!i&&n==null&&!So(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qe(c.path,e)||Qe(e,c.path))},a=rd(t.allWrites,o,e),l=n||M.EMPTY_NODE;return Vn(a,l)}}}function dy(t,e,n){let s=M.EMPTY_NODE;const i=vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ut(t.visibleWrites,e);return n.forEachChild(ue,(o,a)=>{const l=Vn(Ut(r,new Z(o)),a);s=s.updateImmediateChild(o,l)}),Cc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ut(t.visibleWrites,e);return Cc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function fy(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(So(t.visibleWrites,r))return null;{const o=Ut(t.visibleWrites,r);return Ao(o)?i.getChild(n):Vn(o,i.getChild(n))}}function py(t,e,n,s){const i=_e(e,n),r=vn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ut(t.visibleWrites,i);return Vn(o,s.getNode().getImmediateChild(n))}else return null}function _y(t,e){return vn(t.visibleWrites,e)}function gy(t,e,n,s,i,r,o){let a;const l=Ut(t.visibleWrites,e),c=vn(l,Y());if(c!=null)a=c;else if(n!=null)a=Vn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function my(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Wi(t,e,n,s){return od(t.writeTree,t.treePath,e,n,s)}function Sa(t,e){return dy(t.writeTree,t.treePath,e)}function wc(t,e,n,s){return fy(t.writeTree,t.treePath,e,n,s)}function Hi(t,e){return _y(t.writeTree,_e(t.treePath,e))}function vy(t,e,n,s,i,r){return gy(t.writeTree,t.treePath,e,n,s,i,r)}function Aa(t,e,n){return py(t.writeTree,t.treePath,e,n)}function ad(t,e){return ld(_e(t.treePath,e),t.writeTree)}function ld(t,e){return{treePath:t,writeTree:e}}/**
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
 */class yy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ls(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Hn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Fs(s,e.snapshotNode,i.oldSnap));else throw Gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ey{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cd=new Ey;class Ra{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Aa(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_n(this.viewCache_),r=vy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Iy(t){return{filter:t}}function Cy(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wy(t,e,n,s,i){const r=new yy;let o,a;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=Ro(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),o=Vi(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=Ty(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=No(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=Ry(t,e,c.path,s,i,r):o=Sy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Je.LISTEN_COMPLETE)o=Ay(t,e,n.path,s,r);else throw Gn("Unknown operation type: "+n.type);const l=r.getChanges();return by(e,o,l),{viewCache:o,changes:l}}function by(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=To(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ed(To(e)))}}function ud(t,e,n,s,i,r){const o=e.eventCache;if(Hi(s,n)!=null)return e;{let a,l;if(H(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_n(e),u=c instanceof M?c:M.EMPTY_NODE,h=Sa(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Wi(s,_n(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){C(Wt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=wc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=se(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=wc(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Aa(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Es(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Vi(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(H(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=$(n);if(!l.isCompleteForPath(n)&&Wt(n)>1)return e;const m=se(n),A=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),_,A,m,cd,null)}const h=sd(e,c,l.isFullyInitialized()||H(n),u.filtersNodes()),d=new Ra(i,h,r);return ud(t,h,n,i,d,a)}function Ro(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ra(i,e,r);if(H(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Es(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Es(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=se(n),_=a.getNode().getImmediateChild(h);let m;if(H(d))m=s;else{const v=u.getCompleteChild(h);v!=null?zh(d)===".priority"&&v.getChild(qh(d)).isEmpty()?m=v:m=v.updateChild(d,s):m=M.EMPTY_NODE}if(_.equals(m))l=e;else{const v=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Es(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function bc(t,e){return t.eventCache.isCompleteForChild(e)}function Ty(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=_e(n,l);bc(e,$(u))&&(a=Ro(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=_e(n,l);bc(e,$(u))||(a=Ro(t,a,u,c,i,r,o))}),a}function Tc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function No(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;H(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Tc(t,_,d);l=Vi(t,l,new Z(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),v=Tc(t,m,d);l=Vi(t,l,new Z(h),v,i,r,o,a)}}),l}function Sy(t,e,n,s,i,r,o){if(Hi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Vi(t,e,n,l.getNode().getChild(n),i,r,a,o);if(H(n)){let c=new re(null);return l.getNode().forEachChild(xn,(u,h)=>{c=c.set(new Z(u),h)}),No(t,e,n,c,i,r,a,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=_e(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),No(t,e,n,c,i,r,a,o)}}function Ay(t,e,n,s,i){const r=e.serverCache,o=sd(e,r.getNode(),r.isFullyInitialized()||H(n),r.isFiltered());return ud(t,o,n,s,cd,i)}function Ry(t,e,n,s,i,r){let o;if(Hi(s,n)!=null)return e;{const a=new Ra(s,e,i),l=e.eventCache.getNode();let c;if(H(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wi(s,_n(e));else{const h=e.serverCache.getNode();C(h instanceof M,"serverChildren would be complete if leaf node"),u=Sa(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=$(n);let h=Aa(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,se(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,M.EMPTY_NODE,se(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wi(s,_n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Hi(s,Y())!=null,Es(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Ny{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ia(s.getIndex()),r=Gv(s);this.processor_=Iy(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,a.getNode(),null),u=new pn(l,o.isFullyInitialized(),i.filtersNodes()),h=new pn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pr(h,u),this.eventGenerator_=new ty(this.query_)}get query(){return this.query_}}function ky(t){return t.viewCache_.serverCache.getNode()}function Py(t,e){const n=_n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Sc(t){return t.eventRegistrations_.length===0}function xy(t,e){t.eventRegistrations_.push(e)}function Ac(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Rc(t,e,n,s){e.type===Je.MERGE&&e.source.queryId!==null&&(C(_n(t.viewCache_),"We should always have a full cache before handling merges"),C(To(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=wy(t.processor_,i,e,n,s);return Cy(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,hd(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Oy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(Hn(r,o))}),n.isFullyInitialized()&&s.push(ed(n.getNode())),hd(t,s,n.getNode(),e)}function hd(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ny(t.eventGenerator_,e,n,i)}/**
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
 */let ji;class Dy{constructor(){this.views=new Map}}function My(t){C(!ji,"__referenceConstructor has already been defined"),ji=t}function Ly(){return C(ji,"Reference.ts has not been loaded"),ji}function Fy(t){return t.views.size===0}function Na(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Rc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Rc(o,e,n,s));return r}}function Uy(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Wi(n,i?s:null),l=!1;a?l=!0:s instanceof M?(a=Sa(n,s),l=!1):(a=M.EMPTY_NODE,l=!1);const c=pr(new pn(a,l,!1),new pn(s,i,!1));return new Ny(e,c)}return o}function By(t,e,n,s,i,r){const o=Uy(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xy(o,n),Oy(o,n)}function $y(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ht(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ac(c,n,s)),Sc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ac(l,n,s)),Sc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ht(t)&&r.push(new(Ly())(e._repo,e._path)),{removed:r,events:o}}function dd(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function On(t,e){let n=null;for(const s of t.views.values())n=n||Py(s,e);return n}function fd(t,e){if(e._queryParams.loadsAllData())return _r(t);{const s=e._queryIdentifier;return t.views.get(s)}}function pd(t,e){return fd(t,e)!=null}function Ht(t){return _r(t)!=null}function _r(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let zi;function Wy(t){C(!zi,"__referenceConstructor has already been defined"),zi=t}function Hy(){return C(zi,"Reference.ts has not been loaded"),zi}let Vy=1;class Nc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=my(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _d(t,e,n,s,i){return oy(t.pendingWriteTree_,e,n,s,i),i?Ys(t,new fn(nd(),e,n)):[]}function nn(t,e,n=!1){const s=ay(t.pendingWriteTree_,e);if(ly(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Y(),!0):Le(s.children,o=>{r=r.set(new Z(o),!0)}),Ys(t,new $i(s.path,r,n))}else return[]}function gr(t,e,n){return Ys(t,new fn(wa(),e,n))}function jy(t,e,n){const s=re.fromObject(n);return Ys(t,new $s(wa(),e,s))}function zy(t,e){return Ys(t,new Bs(wa(),e))}function Ky(t,e,n){const s=Pa(t,n);if(s){const i=xa(s),r=i.path,o=i.queryId,a=xe(r,e),l=new Bs(ba(o),a);return Oa(t,r,l)}else return[]}function ko(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pd(o,e))){const l=$y(o,e,n,s);Fy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Ht(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Yy(d);for(let m=0;m<_.length;++m){const v=_[m],A=v.query,O=vd(t,v);t.listenProvider_.startListening(Cs(A),Ki(t,A),O.hashFn,O.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Cs(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(mr(d));t.listenProvider_.stopListening(Cs(d),_)}))}Qy(t,c)}return a}function qy(t,e,n,s){const i=Pa(t,s);if(i!=null){const r=xa(i),o=r.path,a=r.queryId,l=xe(o,e),c=new fn(ba(a),l,n);return Oa(t,o,c)}else return[]}function Gy(t,e,n,s){const i=Pa(t,s);if(i){const r=xa(i),o=r.path,a=r.queryId,l=xe(o,e),c=re.fromObject(n),u=new $s(ba(a),l,c);return Oa(t,o,u)}else return[]}function kc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=xe(d,i);r=r||On(_,m),o=o||Ht(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ht(a),r=r||On(a,Y())):(a=new Dy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const v=On(m,Y());v&&(r=r.updateImmediateChild(_,v))}));const c=pd(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=mr(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Jy();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Ta(t.pendingWriteTree_,i);let h=By(a,e,n,u,r,l);if(!c&&!o&&!s){const d=fd(a,e);h=h.concat(Xy(t,e,d))}return h}function ka(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=xe(o,e),c=On(a,l);if(c)return c});return od(i,e,r,n,!0)}function Ys(t,e){return gd(e,t.syncPointTree_,null,Ta(t.pendingWriteTree_,Y()))}function gd(t,e,n,s){if(H(t.path))return md(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=On(i,Y()));let r=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ad(s,o);r=r.concat(gd(a,l,c,u))}return i&&(r=r.concat(Na(i,t,s,n))),r}}function md(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=On(i,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ad(s,o),u=t.operationForChild(o);u&&(r=r.concat(md(u,a,l,c)))}),i&&(r=r.concat(Na(i,t,s,n))),r}function vd(t,e){const n=e.query,s=Ki(t,n);return{hashFn:()=>(ky(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ky(t,n._path,s):zy(t,n._path);{const r=qm(i,n);return ko(t,n,null,r)}}}}function Ki(t,e){const n=mr(e);return t.queryToTagMap.get(n)}function mr(t){return t._path.toString()+"$"+t._queryIdentifier}function Pa(t,e){return t.tagToQueryMap.get(e)}function xa(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Oa(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Ta(t.pendingWriteTree_,e);return Na(s,n,i,null)}function Yy(t){return t.fold((e,n,s)=>{if(n&&Ht(n))return[_r(n)];{let i=[];return n&&(i=dd(n)),Le(s,(r,o)=>{i=i.concat(o)}),i}})}function Cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Hy())(t._repo,t._path):t}function Qy(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=mr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Jy(){return Vy++}function Xy(t,e,n){const s=e._path,i=Ki(t,e),r=vd(t,n),o=t.listenProvider_.startListening(Cs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!Ht(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!H(c)&&u&&Ht(u))return[_r(u).query];{let d=[];return u&&(d=d.concat(dd(u).map(_=>_.query))),Le(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Cs(u),Ki(t,u))}}return o}/**
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
 */class Da{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Da(n)}node(){return this.node_}}class Ma{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Ma(this.syncTree_,n)}node(){return ka(this.syncTree_,this.path_)}}const Zy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pc=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tE(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},tE=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},nE=function(t,e,n,s){return La(e,new Ma(n,t),s)},yd=function(t,e,n){return La(t,new Da(e),n)};function La(t,e,n){const s=t.getPriority().val(),i=Pc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Pc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new me(a,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new me(i))),o.forEachChild(ue,(a,l)=>{const c=La(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Fa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ua(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=$(n);for(;i!==null;){const r=Bn(s.node.children,i)||{children:{},childCount:0};s=new Fa(i,s,r),n=se(n),i=$(n)}return s}function Zn(t){return t.node.value}function Ed(t,e){t.node.value=e,Po(t)}function Id(t){return t.node.childCount>0}function sE(t){return Zn(t)===void 0&&!Id(t)}function vr(t,e){Le(t.node.children,(n,s)=>{e(new Fa(n,t,s))})}function Cd(t,e,n,s){n&&!s&&e(t),vr(t,i=>{Cd(i,e,!0,s)}),n&&s&&e(t)}function iE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qs(t){return new Z(t.parent===null?t.name:Qs(t.parent)+"/"+t.name)}function Po(t){t.parent!==null&&rE(t.parent,t.name,t)}function rE(t,e,n){const s=sE(n),i=Ct(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Po(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Po(t))}/**
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
 */const oE=/[\[\].#$\/\u0000-\u001F\u007F]/,aE=/[\[\].#$\u0000-\u001F\u007F]/,Gr=10*1024*1024,wd=function(t){return typeof t=="string"&&t.length!==0&&!oE.test(t)},bd=function(t){return typeof t=="string"&&t.length!==0&&!aE.test(t)},lE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bd(t)},cE=function(t,e,n,s){s&&e===void 0||Ba(ua(t,"value"),e,n)},Ba=function(t,e,n){const s=n instanceof Z?new Sv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(bh(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>Gr/3&&dr(e)>Gr)throw new Error(t+"contains a string greater than "+Gr+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Le(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Av(s,o),Ba(t,a,s),Rv(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},Td=function(t,e,n,s){if(!(s&&n===void 0)&&!bd(n))throw new Error(ua(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Td(t,e,n,s)},Sd=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lE(n))throw new Error(ua(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class dE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $a(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!va(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ad(t,e,n){$a(t,n),Rd(t,s=>va(s,e))}function yt(t,e,n){$a(t,n),Rd(t,s=>Qe(s,e)||Qe(e,s))}function Rd(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(fE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();an&&be("event: "+n.toString()),Xn(s)}}}/**
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
 */const pE="repo_interrupt",_E=25;class gE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bi(),this.transactionQueueTree_=new Fa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mE(t,e,n){if(t.stats_=ga(t.repoInfo_),t.forceRestClient_||Jm())t.server_=new Ui(t.repoInfo_,(s,i,r,o)=>{xc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Oc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gt(t.repoInfo_,e,(s,i,r,o)=>{xc(t,s,i,r,o)},s=>{Oc(t,s)},s=>{yE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=nv(t.repoInfo_,()=>new ey(t.stats_,t.server_)),t.infoData_=new Yv,t.infoSyncTree_=new Nc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=gr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ha(t,"connected",!1),t.serverSyncTree_=new Nc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);yt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vE(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wa(t){return Zy({timestamp:vE(t)})}function xc(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=xi(n,c=>Ee(c));o=Gy(t.serverSyncTree_,r,l,i)}else{const l=Ee(n);o=qy(t.serverSyncTree_,r,l,i)}else if(s){const l=xi(n,c=>Ee(c));o=jy(t.serverSyncTree_,r,l)}else{const l=Ee(n);o=gr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=yr(t,r)),yt(t.eventQueue_,a,o)}function Oc(t,e){Ha(t,"connected",e),e===!1&&IE(t)}function yE(t,e){Le(e,(n,s)=>{Ha(t,n,s)})}function Ha(t,e,n){const s=new Z("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=gr(t.infoSyncTree_,s,i);yt(t.eventQueue_,s,r)}function Nd(t){return t.nextWriteId_++}function EE(t,e,n,s,i){Va(t,"set",{path:e.toString(),value:n,priority:s});const r=Wa(t),o=Ee(n,s),a=ka(t.serverSyncTree_,e),l=yd(o,a,r),c=Nd(t),u=_d(t.serverSyncTree_,e,l,c,!0);$a(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||De("set at "+e+" failed: "+d);const v=nn(t.serverSyncTree_,c,!m);yt(t.eventQueue_,e,v),bE(t,i,d,_)});const h=Dd(t,e);yr(t,h),yt(t.eventQueue_,h,[])}function IE(t){Va(t,"onDisconnectEvents");const e=Wa(t),n=Bi();bo(t.onDisconnect_,Y(),(i,r)=>{const o=nE(i,r,t.serverSyncTree_,e);td(n,i,o)});let s=[];bo(n,Y(),(i,r)=>{s=s.concat(gr(t.serverSyncTree_,i,r));const o=Dd(t,i);yr(t,o)}),t.onDisconnect_=Bi(),yt(t.eventQueue_,Y(),s)}function CE(t,e,n){let s;$(e._path)===".info"?s=kc(t.infoSyncTree_,e,n):s=kc(t.serverSyncTree_,e,n),Ad(t.eventQueue_,e._path,s)}function Dc(t,e,n){let s;$(e._path)===".info"?s=ko(t.infoSyncTree_,e,n):s=ko(t.serverSyncTree_,e,n),Ad(t.eventQueue_,e._path,s)}function wE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pE)}function Va(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function bE(t,e,n,s){e&&Xn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function kd(t,e,n){return ka(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function ja(t,e=t.transactionQueueTree_){if(e||Er(t,e),Zn(e)){const n=xd(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&TE(t,Qs(e),n)}else Id(e)&&vr(e,n=>{ja(t,n)})}function TE(t,e,n){const s=n.map(c=>c.currentWriteId),i=kd(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Va(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Er(t,Ua(t.transactionQueueTree_,e)),ja(t,t.transactionQueueTree_),yt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Xn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}yr(t,e)}},o)}function yr(t,e){const n=Pd(t,e),s=Qs(n),i=xd(t,n);return SE(t,i,s),s}function SE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=xe(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(nn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_E)u=!0,h="maxretry",i=i.concat(nn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=kd(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Ba("transaction failed: Data returned ",_,l.path);let m=Ee(_);typeof _=="object"&&_!=null&&Ct(_,".priority")||(m=m.updatePriority(d.getPriority()));const A=l.currentWriteId,O=Wa(t),z=yd(m,d,O);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=z,l.currentWriteId=Nd(t),o.splice(o.indexOf(A),1),i=i.concat(_d(t.serverSyncTree_,l.path,z,l.currentWriteId,l.applyLocally)),i=i.concat(nn(t.serverSyncTree_,A,!0))}else u=!0,h="nodata",i=i.concat(nn(t.serverSyncTree_,l.currentWriteId,!0))}yt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Er(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Xn(s[a]);ja(t,t.transactionQueueTree_)}function Pd(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Zn(s)===void 0;)s=Ua(s,n),e=se(e),n=$(e);return s}function xd(t,e){const n=[];return Od(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Od(t,e,n){const s=Zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);vr(e,i=>{Od(t,i,n)})}function Er(t,e){const n=Zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ed(e,n.length>0?n:void 0)}vr(e,s=>{Er(t,s)})}function Dd(t,e){const n=Qs(Pd(t,e)),s=Ua(t.transactionQueueTree_,e);return iE(s,i=>{Yr(t,i)}),Yr(t,s),Cd(s,i=>{Yr(t,i)}),n}function Yr(t,e){const n=Zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ed(e,void 0):n.length=r+1,yt(t.eventQueue_,Qs(e),i);for(let o=0;o<s.length;o++)Xn(s[o])}}/**
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
 */function AE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function RE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mc=function(t,e){const n=NE(t),s=n.namespace;n.domain==="firebase.com"&&vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Lh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},NE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=AE(t.substring(u,h)));const d=RE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Md{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class Ld{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class za{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return H(this._path)?null:zh(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=vc(this._queryParams),n=pa(e);return n==="{}"?"default":n}get _queryObject(){return vc(this._queryParams)}isEqual(e){if(e=je(e),!(e instanceof za))return!1;const n=this._repo===e._repo,s=va(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tv(this._path)}}class wt extends za{constructor(e,n){super(e,n,new Ca,!1)}get parent(){const e=qh(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=qi(this.ref,e);return new Ws(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ws(i,qi(this.ref,s),ue)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ps(t,e){return t=je(t),t._checkNotDeleted("ref"),e!==void 0?qi(t._root,e):t._root}function qi(t,e){return t=je(t),$(t._path)===null?uE("child","path",e,!1):Td("child","path",e,!1),new wt(t._repo,_e(t._path,e))}function PE(t){return Sd("remove",t._path),Fd(t,null)}function Fd(t,e){t=je(t),Sd("set",t._path),cE("set",e,t._path,!1);const n=new hr;return EE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Ka{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Md("value",this,new Ws(e.snapshotNode,new wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ld(this,e,n):null}matches(e){return e instanceof Ka?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class qa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ld(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const s=qi(new wt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Md(e.type,this,new Ws(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof qa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Dc(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new kE(n,r||void 0),a=e==="value"?new Ka(o):new qa(e,o);return CE(t._repo,t,a),()=>Dc(t._repo,t,a)}function Ei(t,e,n,s){return xE(t,"value",e,n,s)}My(wt);Wy(wt);/**
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
 */const OE="FIREBASE_DATABASE_EMULATOR_HOST",xo={};let DE=!1;function ME(t,e,n,s){t.repoInfo_=new Lh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function LE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[OE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Mc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Pn(Pn.OWNER):new Zm(t.name,t.options,e);hE("Invalid Firebase Database URL",o),H(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=UE(a,t,u,new Xm(t.name,n));return new BE(h,t)}function FE(t,e){const n=xo[e];(!n||n[t.key]!==t)&&vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wE(t),delete n[t.key]}function UE(t,e,n,s){let i=xo[e.name];i||(i={},xo[e.name]=i);let r=i[t.toURLString()];return r&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gE(t,DE,n,s),i[t.toURLString()]=r,r}class BE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}function Ud(t=vh(),e){const n=fa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gg("database");s&&$E(n,...s)}return n}function $E(t,e,n,s={}){t=je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&vt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Pn(Pn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:mg(s.mockUserToken,t.app.options.projectId);r=new Pn(o)}ME(i,e,n,r)}/**
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
 */function WE(t){Fm(Qn),$n(new un("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return LE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ft(tc,nc,t),Ft(tc,nc,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WE();var HE="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",VE="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z";const Js=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Lc={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},jE={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both","none"].includes(t)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return Lc[this.type]||Lc.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},zE=["width","height","viewBox"],KE=["d"];function qE(t,e,n,s,i,r){return Ce(),at("svg",{width:r.sizeValue,height:r.sizeValue,viewBox:r.viewboxValue,style:zn(r.styles)},[j("path",{d:n.path},null,8,KE)],12,zE)}const Bd=Js(jE,[["render",qE],["__scopeId","data-v-76aa6b74"]]),Oo={__name:"CloseButton",props:{show:{type:Boolean,default:!1}},setup(t){return(e,n)=>Zo((Ce(),rn(Ss(Bd),{class:"close-btn",size:"24",type:"mdi",path:Ss(VE)},null,8,["path"])),[[ih,t.show]])}},GE={class:"flex flex-row justify-between items-center mb-6"},YE={class:"text-white text-center font-bold text-l"},QE={class:"overflow-y-scroll max-h-72 mb-6"},JE={class:"whitespace-pre-line text-white text-justify text-base"},XE={__name:"ModalForm",props:{is_shown:{type:Boolean,default:!1},msg:{type:String,default:"meo meo"},title:String,color:{type:String,default:"white"}},setup(t){return(e,n)=>(Ce(),at("div",{class:cn(["p-6 rounded bg-gradient-to-br to-transparent border backdrop-blur-lg",[`from-${t.color}/40`,`border-${t.color}`]])},[j("div",GE,[j("div",null,[ie(Oo,{onClick:n[0]||(n[0]=s=>e.$emit("close"))})]),j("div",YE,ul(t.title),1),j("div",null,[ie(Oo,{onClick:n[1]||(n[1]=s=>e.$emit("close")),show:t.is_shown},null,8,["show"])])]),j("div",QE,[j("pre",JE,"            "+ul(t.msg)+`
            `,1)])],2))}},ZE={class:"top-0 absolute grid grid-cols-12 w-full gap-x-6 bg-black/90",style:"z-index: 15"},eI=j("div",{class:"col-span-3"},null,-1),tI={class:"col-span-6 flex flex-col justify-center items-center h-screen w-full"},nI={class:"absolute text-white/70 self-center bottom-8"},sI=j("div",{class:"col-span-3"},null,-1),Fc={__name:"ModalView",props:{is_shown:{type:Boolean,default:!1},msg:{type:String,default:"meo meo"},title:String,color:{type:String,default:"white"},capKey:{type:String,default:""}},setup(t){return(e,n)=>(Ce(),at("div",ZE,[eI,j("div",tI,[j("div",{class:cn({"hover:drop-shadow-[0.5rem_0.5rem_2rem_rgba(255,255,255,0.3)] transition duration-500 cursor-pointer":!t.is_shown})},[ie(XE,{is_shown:t.is_shown,onClose:n[0]||(n[0]=s=>e.$emit("close")),onDblclick:n[1]||(n[1]=s=>e.$emit("close",t.capKey)),color:t.color,title:t.title,msg:t.msg,class:"w-auto"},null,8,["is_shown","color","title","msg"])],2),Zo(j("div",nI,"double-click the message to claim it",512),[[ih,!t.is_shown]])]),sI]))}};function Ga(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iI=$d,Wd=new zs("auth","Firebase",$d());/**
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
 */const Gi=new ha("@firebase/auth");function rI(t,...e){Gi.logLevel<=J.WARN&&Gi.warn(`Auth (${Qn}): ${t}`,...e)}function Ii(t,...e){Gi.logLevel<=J.ERROR&&Gi.error(`Auth (${Qn}): ${t}`,...e)}/**
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
 */function tt(t,...e){throw Ya(t,...e)}function lt(t,...e){return Ya(t,...e)}function oI(t,e,n){const s=Object.assign(Object.assign({},iI()),{[e]:n});return new zs("auth","Firebase",s).create(e,{appName:t.name})}function Ya(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Wd.create(t,...e)}function L(t,e,...n){if(!t)throw Ya(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ii(e),new Error(e)}function Et(t,e){t||pt(e)}/**
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
 */function Do(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aI(){return Uc()==="http:"||Uc()==="https:"}function Uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function lI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aI()||vg()||"connection"in navigator)?navigator.onLine:!0}function cI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Et(n>e,"Short delay should be less than long delay!"),this.isMobile=ca()||dh()}get(){return lI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qa(t,e){Et(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hI=new Xs(3e4,6e4);function Zs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function es(t,e,n,s,i={}){return Vd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Yn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hd.fetch()(jd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Vd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},uI),e);try{const i=new dI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw fi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw oI(t,u,c);tt(t,u)}}catch(i){if(i instanceof Vt)throw i;tt(t,"network-request-failed",{message:String(i)})}}async function Ir(t,e,n,s,i={}){const r=await es(t,e,n,s,i);return"mfaPendingCredential"in r&&tt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function jd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Qa(t.config,i):`${t.config.apiScheme}://${i}`}class dI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(lt(this.auth,"network-request-failed")),hI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=lt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function fI(t,e){return es(t,"POST","/v1/accounts:delete",e)}async function pI(t,e){return es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _I(t,e=!1){const n=je(t),s=await n.getIdToken(e),i=Ja(s);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ws(Qr(i.auth_time)),issuedAtTime:ws(Qr(i.iat)),expirationTime:ws(Qr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function Ja(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pi(n);return i?JSON.parse(i):(Ii("Failed to decode base64 JWT payload"),null)}catch(i){return Ii("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gI(t){const e=Ja(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vt&&mI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ws(this.lastLoginAt),this.creationTime=ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Hs(t,pI(n,{idToken:s}));L(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?II(r.providerUserInfo):[],a=EI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yI(t){const e=je(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function II(t){return t.map(e=>{var{providerId:n}=e,s=Ga(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function CI(t,e){const n=await Vd(t,{},async()=>{const s=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=jd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await CI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Vs;return s&&(L(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(L(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function St(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ga(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _I(this,e)}reload(){return yI(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hs(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,z=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:x,isAnonymous:he,providerData:Ne,stsTokenManager:Fe}=n;L(K&&Fe,e,"internal-error");const U=Vs.fromJSON(this.name,Fe);L(typeof K=="string",e,"internal-error"),St(h,e.name),St(d,e.name),L(typeof x=="boolean",e,"internal-error"),L(typeof he=="boolean",e,"internal-error"),St(_,e.name),St(m,e.name),St(v,e.name),St(A,e.name),St(O,e.name),St(z,e.name);const ee=new ln({uid:K,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:he,photoURL:m,phoneNumber:_,tenantId:v,stsTokenManager:U,createdAt:O,lastLoginAt:z});return Ne&&Array.isArray(Ne)&&(ee.providerData=Ne.map(X=>Object.assign({},X))),A&&(ee._redirectEventId=A),ee}static async _fromIdTokenResponse(e,n,s=!1){const i=new Vs;i.updateFromServerResponse(n);const r=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Yi(r),r}}/**
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
 */const Bc=new Map;function _t(t){Et(t instanceof Function,"Expected a class definition");let e=Bc.get(t);return e?(Et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bc.set(t,e),e)}/**
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
 */class Kd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kd.type="NONE";const $c=Kd;/**
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
 */function Ci(t,e,n){return`firebase:${t}:${e}:${n}`}class Dn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ci(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ci("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Dn(_t($c),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||_t($c);const o=Ci(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ln._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Dn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Dn(r,e,s))}}/**
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
 */function Wc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jd(e))return"Blackberry";if(Xd(e))return"Webos";if(Xa(e))return"Safari";if((e.includes("chrome/")||Gd(e))&&!e.includes("edge/"))return"Chrome";if(Qd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qd(t=Ae()){return/firefox\//i.test(t)}function Xa(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gd(t=Ae()){return/crios\//i.test(t)}function Yd(t=Ae()){return/iemobile/i.test(t)}function Qd(t=Ae()){return/android/i.test(t)}function Jd(t=Ae()){return/blackberry/i.test(t)}function Xd(t=Ae()){return/webos/i.test(t)}function Cr(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wI(t=Ae()){var e;return Cr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bI(){return yg()&&document.documentMode===10}function Zd(t=Ae()){return Cr(t)||Qd(t)||Xd(t)||Jd(t)||/windows phone/i.test(t)||Yd(t)}function TI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ef(t,e=[]){let n;switch(t){case"Browser":n=Wc(Ae());break;case"Worker":n=`${Wc(Ae())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${s}`}async function tf(t,e){return es(t,"GET","/v2/recaptchaConfig",Zs(t,e))}function Hc(t){return t!==void 0&&t.enterprise!==void 0}class nf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function SI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=lt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",SI().appendChild(s)})}function AI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RI="https://www.google.com/recaptcha/enterprise.js?render=",NI="recaptcha-enterprise",kI="NO_RECAPTCHA";class rf{constructor(e){this.type=NI,this.auth=ei(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{tf(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Hc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(kI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Hc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sf(RI+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vc(t,e,n,s=!1){const i=new rf(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class PI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class xI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jc(this),this.idTokenSubscription=new jc(this),this.beforeStateQueue=new PI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}async initializeRecaptchaConfig(){const e=await tf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_t(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ei(t){return je(t)}class jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rg(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function OI(t,e){const n=fa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Oi(r,e??{}))return i;tt(i,"already-initialized")}return n.initialize({options:e})}function DI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MI(t,e,n){const s=ei(t);L(s._canInitEmulator,s,"emulator-config-failed"),L(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=of(e),{host:o,port:a}=LI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FI()}function of(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LI(t){const e=of(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:zc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:zc(o)}}}function zc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Za{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function UI(t,e){return es(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jr(t,e){return Ir(t,"POST","/v1/accounts:signInWithPassword",Zs(t,e))}/**
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
 */async function BI(t,e){return Ir(t,"POST","/v1/accounts:signInWithEmailLink",Zs(t,e))}async function $I(t,e){return Ir(t,"POST","/v1/accounts:signInWithEmailLink",Zs(t,e))}/**
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
 */class js extends Za{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new js(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new js(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Vc(e,s,"signInWithPassword");return Jr(e,i)}else return Jr(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Vc(e,s,"signInWithPassword");return Jr(e,r)}else return Promise.reject(i)});case"emailLink":return BI(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $I(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mn(t,e){return Ir(t,"POST","/v1/accounts:signInWithIdp",Zs(t,e))}/**
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
 */const WI="http://localhost";class gn extends Za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ga(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new gn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Mn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mn(e,n)}buildRequest(){const e={requestUri:WI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yn(n)}return e}}/**
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
 */function HI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VI(t){const e=ds(fs(t)).link,n=e?ds(fs(e)).deep_link_id:null,s=ds(fs(t)).deep_link_id;return(s?ds(fs(s)).link:null)||s||n||e||t}class el{constructor(e){var n,s,i,r,o,a;const l=ds(fs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=HI((i=l.mode)!==null&&i!==void 0?i:null);L(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=VI(e);try{return new el(n)}catch{return null}}}/**
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
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(e,n){return js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=el.parseLink(n);return L(s,"argument-error"),js._fromEmailAndCode(e,s.code,s.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class af{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ti extends af{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nt extends ti{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class kt extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
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
 */class Pt extends ti{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
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
 */class xt extends ti{constructor(){super("twitter.com")}static credential(e,n){return gn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return xt.credential(n,s)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ln._fromIdTokenResponse(e,s,i),o=Kc(s);return new jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Kc(s);return new jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Kc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qi extends Vt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Qi(e,n,s,i)}}function lf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(t,r,e,s):r})}async function jI(t,e,n=!1){const s=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
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
 */async function zI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Hs(t,lf(s,i,e,t),n);L(r.idToken,s,"internal-error");const o=Ja(r.idToken);L(o,s,"internal-error");const{sub:a}=o;return L(t.uid===a,s,"user-mismatch"),jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&tt(s,"user-mismatch"),r}}/**
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
 */async function cf(t,e,n=!1){const s="signIn",i=await lf(t,s,e),r=await jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function KI(t,e){return cf(ei(t),e)}function qI(t,e,n){return KI(je(t),ts.credential(e,n))}function GI(t,e,n,s){return je(t).onIdTokenChanged(e,n,s)}function YI(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const Ji="__sak";/**
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
 */class uf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function QI(){const t=Ae();return Xa(t)||Cr(t)}const JI=1e3,XI=10;class hf extends uf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QI()&&TI(),this.fallbackToPolling=Zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);bI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hf.type="LOCAL";const ZI=hf;/**
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
 */class df extends uf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}df.type="SESSION";const ff=df;/**
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
 */function eC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new wr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await eC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wr.receivers=[];/**
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
 */function tl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=tl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function nC(t){ct().location.href=t}/**
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
 */function pf(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function sC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rC(){return pf()?self:null}/**
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
 */const _f="firebaseLocalStorageDb",oC=1,Xi="firebaseLocalStorage",gf="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function br(t,e){return t.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function aC(){const t=indexedDB.deleteDatabase(_f);return new ni(t).toPromise()}function Mo(){const t=indexedDB.open(_f,oC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Xi,{keyPath:gf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Xi)?e(s):(s.close(),await aC(),e(await Mo()))})})}async function qc(t,e,n){const s=br(t,!0).put({[gf]:e,value:n});return new ni(s).toPromise()}async function lC(t,e){const n=br(t,!1).get(e),s=await new ni(n).toPromise();return s===void 0?null:s.value}function Gc(t,e){const n=br(t,!0).delete(e);return new ni(n).toPromise()}const cC=800,uC=3;class mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>uC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wr._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sC(),!this.activeServiceWorker)return;this.sender=new tC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mo();return await qc(e,Ji,"1"),await Gc(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>lC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=br(i,!1).getAll();return new ni(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mf.type="LOCAL";const hC=mf;new Xs(3e4,6e4);/**
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
 */function dC(t,e){return e?_t(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nl extends Za{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fC(t){return cf(t.auth,new nl(t),t.bypassAuthState)}function pC(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),zI(n,new nl(t),t.bypassAuthState)}async function _C(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),jI(n,new nl(t),t.bypassAuthState)}/**
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
 */class vf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return _C;case"reauthViaPopup":case"reauthViaRedirect":return pC;default:tt(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gC=new Xs(2e3,1e4);class Tn extends vf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=tl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gC.get())};e()}}Tn.currentPopupAction=null;/**
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
 */const mC="pendingRedirect",wi=new Map;class vC extends vf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const s=await yC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yC(t,e){const n=CC(e),s=IC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function EC(t,e){wi.set(t._key(),e)}function IC(t){return _t(t._redirectPersistence)}function CC(t){return Ci(mC,t.config.apiKey,t.name)}async function wC(t,e,n=!1){const s=ei(t),i=dC(s,e),o=await new vC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const bC=10*60*1e3;class TC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!yf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yc(e))}saveEventToCache(e){this.cachedEventUids.add(Yc(e)),this.lastProcessedEventTime=Date.now()}}function Yc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yf(t);default:return!1}}/**
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
 */async function AC(t,e={}){return es(t,"GET","/v1/projects",e)}/**
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
 */const RC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NC=/^https?/;async function kC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AC(t);for(const n of e)try{if(PC(n))return}catch{}tt(t,"unauthorized-domain")}function PC(t){const e=Do(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!NC.test(n))return!1;if(RC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const xC=new Xs(3e4,6e4);function Qc(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OC(t){return new Promise((e,n)=>{var s,i,r;function o(){Qc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qc(),n(lt(t,"network-request-failed"))},timeout:xC.get()})}if(!((i=(s=ct().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ct().gapi)===null||r===void 0)&&r.load)o();else{const a=AI("iframefcb");return ct()[a]=()=>{gapi.load?o():n(lt(t,"network-request-failed"))},sf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw bi=null,e})}let bi=null;function DC(t){return bi=bi||OC(t),bi}/**
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
 */const MC=new Xs(5e3,15e3),LC="__/auth/iframe",FC="emulator/auth/iframe",UC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $C(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qa(e,FC):`https://${t.config.authDomain}/${LC}`,s={apiKey:e.apiKey,appName:t.name,v:Qn},i=BC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Yn(s).slice(1)}`}async function WC(t){const e=await DC(t),n=ct().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:$C(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=lt(t,"network-request-failed"),a=ct().setTimeout(()=>{r(o)},MC.get());function l(){ct().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const HC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VC=500,jC=600,zC="_blank",KC="http://localhost";class Jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qC(t,e,n,s=VC,i=jC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ae().toLowerCase();n&&(a=Gd(c)?zC:n),qd(c)&&(e=e||KC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(wI(c)&&a!=="_self")return GC(e||"",a),new Jc(null);const h=window.open(e||"",a,u);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Jc(h)}function GC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const YC="__/auth/handler",QC="emulator/auth/handler",JC=encodeURIComponent("fac");async function Xc(t,e,n,s,i,r){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qn,eventId:i};if(e instanceof af){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",po(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ti){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${JC}=${encodeURIComponent(l)}`:"";return`${XC(t)}?${Yn(a).slice(1)}${c}`}function XC({config:t}){return t.emulator?Qa(t,QC):`https://${t.authDomain}/${YC}`}/**
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
 */const Xr="webStorageSupport";class ZC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ff,this._completeRedirectFn=wC,this._overrideRedirectResult=EC}async _openPopup(e,n,s,i){var r;Et((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xc(e,n,s,Do(),i);return qC(e,o,tl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Xc(e,n,s,Do(),i);return nC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Et(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await WC(e),s=new TC(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xr,{type:Xr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Xr];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zd()||Xa()||Cr()}}const ew=ZC;var Zc="@firebase/auth",eu="1.0.0";/**
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
 */class tw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sw(t){$n(new un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ef(t)},c=new xI(s,i,r,l);return DI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),$n(new un("auth-internal",e=>{const n=ei(e.getProvider("auth").getImmediate());return(s=>new tw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Zc,eu,nw(t)),Ft(Zc,eu,"esm2017")}/**
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
 */const iw=5*60,rw=hh("authIdTokenMaxAge")||iw;let tu=null;const ow=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rw)return;const i=n==null?void 0:n.token;tu!==i&&(tu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aw(t=vh()){const e=fa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OI(t,{popupRedirectResolver:ew,persistence:[hC,ZI,ff]}),s=hh("authTokenSyncURL");if(s){const r=ow(s);YI(n,r,()=>r(n.currentUser)),GI(n,o=>r(o))}const i=ch("auth");return i&&MI(n,`http://${i}`),n}sw("Browser");const Tr=t=>(Jo("data-v-3bc822c6"),t=t(),Xo(),t),lw={version:"1.2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1220 420",width:"100%"},cw=Tr(()=>j("title",null,"capsule",-1)),uw=Tr(()=>j("defs",null,[j("image",{width:"1200",height:"400",id:"img1",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAGQAQMAAACEewsdAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAABRSURBVHic7cGBAAAAAMOg+VOf4AZVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA36/AAAQT9g3oAAAAASUVORK5CYII="})],-1)),hw=Tr(()=>j("use",{id:"Background",href:"#img1",x:"10",y:"10"},null,-1)),dw={id:"Roll"},fw=Tr(()=>j("path",{id:"Shape 2",class:"s1",d:"m1027.5 335c-31.8 0-57.5-55.9-57.5-125 0-69.1 25.7-125 57.5-125 31.8 0 57.5 55.9 57.5 125 0 69.1-25.7 125-57.5 125z"},null,-1)),pw=f_('<g id="Pill" data-v-3bc822c6><g id="right" data-v-3bc822c6><path id="line" class="s2" d="m602 10h408c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200h-408z" data-v-3bc822c6></path><path id="cover" class="s3" d="m602 10h408c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200h-408z" data-v-3bc822c6></path></g><g id="left" data-v-3bc822c6><path id="&lt;Path&gt;" class="s4" d="m442.7 56.1c-9.6-7.4-45.4-9.2-58.6-9.7-46.4-2.1-89.8-1.6-128.5 0.3-44.4 2.4-78.5 9.2-108.6 17.1-4.6 1.2 7.5 5.9 13.3 5.1 33.2-4.4 71.9-7 112.4-8.1 41.7-1 82.6-2 129.3-0.4 12.8 0.4 49.8 2.5 40.7-4.3z" data-v-3bc822c6></path><path id="line" class="s2" d="m10 210c0-110.5 89.5-200 200-200h408v400h-408c-110.5 0-200-89.5-200-200z" data-v-3bc822c6></path><path id="cover" class="s3" d="m10 210c0-110.5 89.5-200 200-200h408v400h-408c-110.5 0-200-89.5-200-200z" data-v-3bc822c6></path></g></g>',1),_w={__name:"Capsule",props:{color:String},setup(t){return(e,n)=>(Ce(),at("svg",lw,[cw,uw,hw,j("g",dw,[j("path",{id:"Shape 1",style:zn(`fill: var(--neon-${t.color})`),d:"m175 85h850v250h-850zm-3.5 250c-31.8 0-57.5-55.9-57.5-125 0-69.1 25.7-125 57.5-125 31.8 0 57.5 55.9 57.5 125 0 69.1-25.7 125-57.5 125zm856 0c-31.8 0-57.5-55.9-57.5-125 0-69.1 25.7-125 57.5-125 31.8 0 57.5 55.9 57.5 125 0 69.1-25.7 125-57.5 125z"},null,4),fw]),pw]))}},Ef=Js(_w,[["__scopeId","data-v-3bc822c6"]]);const sl=t=>(Jo("data-v-2a8af08f"),t=t(),Xo(),t),gw={class:"top-0 grid grid-cols-12 w-full gap-x-6 bg-black/90 absolute"},mw=sl(()=>j("div",{class:"col-span-3"},null,-1)),vw={class:"col-span-6 flex flex-col justify-center items-center h-screen"},yw={key:0},Ew=sl(()=>j("div",{class:"text-center text-base text-white mt-12 mb-2"},"enter passcode",-1)),Iw=["onKeyup","disabled"],Cw={key:1,class:"text-center text-base text-white mt-12 mb-2",style:{"transition-delay":"1s"}},ww=sl(()=>j("div",{class:"col-span-2"},null,-1)),bw={class:"col-span-1 flex justify-center items-center"},Tw={__name:"CapsuleView",props:{color:{type:String,default:"blue"},capKey:{type:String,default:""}},emits:["close","capsule-dblclicked"],setup(t,{emit:e}){const n=Pe(!1),s=Pe(""),i=Pe(!1),r=c=>{i.value===!0&&(l(),e("capsule-dblclicked",c.currentTarget.id))},o=async()=>{try{const c=await qI(aw(),"lhtoan20@apcs.vn",s.value);i.value=!0}catch{n.value=!0,setTimeout(()=>{n.value=!1},1e3)}},a=c=>{c.preventDefault()},l=()=>{e("close")};return(c,u)=>(Ce(),at("div",gw,[mw,j("div",vw,[ie(G_,{name:"fadeT"},{default:_s(()=>[ie(Ef,{onDblclick:r,color:t.color,style:"z-index: 20;",id:t.capKey,class:cn({"cursor-pointer hover:drop-shadow-[0.5rem_0.5rem_1rem_rgba(255,255,255,0.3)] transition duration-300":i.value})},null,8,["color","id","class"]),i.value?(Ce(),at("div",Cw,"double-click the capsule to read the message")):(Ce(),at("div",yw,[Ew,Zo(j("input",{type:"password",class:cn(["p-1 pl-4 text-white rounded-full outline-none bg-white/0 bg-gradient-to-br border backdrop-blur-lg",{"shake from-red/40 border-red":n.value&&!i.value,"from-white/40 border-white":!n.value}]),onKeyup:ng(o,["enter"]),"onUpdate:modelValue":u[0]||(u[0]=h=>s.value=h),disabled:n.value,onCopy:a},null,42,Iw),[[eg,s.value]])]))]),_:1})]),ww,j("div",bw,[ie(Oo,{class:"absolute top-[5%]",onClick:l,show:!0})])]))}},Sw=Js(Tw,[["__scopeId","data-v-2a8af08f"]]),Aw={__name:"CapsuleContainer",setup(t){const e=Ud(),n=Pe([]),s=Pe(null);Pe(0),Pe(0);const i=()=>{const r=ps(e,"luminaelixir/jar/capsules"),o=["yellow","blue","green","coral","purple"];Ei(r,a=>{let l=Array.from({length:6},(_,m)=>m===0||m===5?Math.floor(Math.random()*3):-1*(Math.floor(Math.random())+3)),c=0;const u=_=>{let m=0,v=Math.random()*2+3,A=Math.floor(Math.random()*13)-7;const O=_%6;return Math.floor(_/6)===0&&(A=Math.floor(Math.random()*8),O===0||O===1?A*=1:O===2||O===3?A=Math.floor(Math.random()*3)-1:A*=-1),O===0?c=0:O===5?c=65:m=Math.random()*3+12,c+=m,l[O]+=v,{x:c,y:l[O],r:A}},h=()=>Math.floor(Math.random()*9),d=a.val();if(d){const _=Object.entries(d).map(([m,{type:v}])=>({key:m,type:v})).sort(()=>Math.random()-.5);n.value=_.map((m,v)=>{const A=o[m.type],O=u(v),z=O.y+4,K=O.x+7,x=h();return{key:m.key,color:A,style:`transform: rotate(${O.r}deg); bottom: ${z}%; left: ${K}%; z-index: ${x}`}})}})};return ta(()=>{i()}),na(()=>{}),(r,o)=>(Ce(),at("div",{ref_key:"container",ref:s,class:"w-[85%] h-[9%] justify-center items-center"},[(Ce(!0),at($e,null,jp(n.value,a=>(Ce(),rn(Ef,{class:"absolute cursor-pointer w-[20%] hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.5)] transition duration-300",key:a.key,color:a.color,style:zn(a.style),onClick:l=>r.$emit("capsule-clicked",a.key,a.color)},null,8,["color","style","onClick"]))),128))],512))}};const Sr=t=>(Jo("data-v-91ebfa1e"),t=t(),Xo(),t),Rw=Sr(()=>j("div",{class:"text-center title text-xl text-white font-bold my-12 ml-6 tracking-1"},"luminaelixir",-1)),Nw={class:"grid grid-cols-12 gap-x-6"},kw=Sr(()=>j("div",{class:"col-span-4"},null,-1)),Pw={class:"col-span-4 flex justify-center"},xw={class:"flex items-center relative",id:"jar"},Ow=Sr(()=>j("img",{src:ag,class:"w-full h-full"},null,-1)),Dw={class:"flex w-full h-full flex justify-center items-center"},Mw=Sr(()=>j("div",{class:"col-span-3"},null,-1)),Lw={class:"col-span-1 flex justify-center items-center"},Fw={__name:"Luminaelixir",setup(t){const e=Pe(!1),n=Pe(!1),s=Pe(!1),i=Pe("blue"),r=Pe(""),o=Pe(""),a=Pe(null),l=Ud(),c=(_,m)=>{s.value=!0,a.value=_,i.value=m},u=_=>{n.value=!0;const m=ps(l,"luminaelixir/jar/capsules/"+_+"/message");Ei(m,v=>{const A=v.val();o.value=A}),a.value=_},h=_=>{n.value=!1;const m=new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),v=ps(l,`luminaelixir/jar/capsules/${_}`),A=ps(l,`luminaelixir/jar/used/${m}/${_}`);Ei(v,O=>{if(O.val()){const K=O.val();PE(v),Fd(A,K)}})},d=ps(l,"luminaelixir/info");return Ei(d,_=>{const m=_.val();m&&(r.value=m)}),(_,m)=>(Ce(),at($e,null,[Rw,j("div",Nw,[kw,j("div",Pw,[j("div",xw,[Ow,j("div",Dw,[ie(Aw,{onCapsuleClicked:c})])])]),Mw,j("div",Lw,[ie(Ss(Bd),{class:"absolute hover:text-red cursor-pointer transition duration-300 bottom-[3%] right-[3%] text-white z-1",size:"24",type:"mdi",path:Ss(HE),onClick:m[0]||(m[0]=v=>e.value=!0)},null,8,["path"])])]),ie(vs,{name:"fade"},{default:_s(()=>[s.value?(Ce(),rn(Sw,{key:0,onClose:m[1]||(m[1]=v=>s.value=!1),onCapsuleDblclicked:u,color:i.value,capKey:a.value,style:"z-index: 15"},null,8,["color","capKey"])):Dr("",!0)]),_:1}),ie(vs,{name:"fade"},{default:_s(()=>[e.value?(Ce(),rn(Fc,{key:0,is_shown:!0,onClose:m[2]||(m[2]=v=>e.value=!1),title:"information",msg:r.value},null,8,["msg"])):Dr("",!0)]),_:1}),ie(vs,{name:"message"},{default:_s(()=>[n.value?(Ce(),rn(Fc,{key:0,is_shown:!1,color:"neon-"+i.value,onClose:h,title:"for you only",class:"select-none",msg:o.value,capKey:a.value},null,8,["color","msg","capKey"])):Dr("",!0)]),_:1})],64))}},Uw=Js(Fw,[["__scopeId","data-v-91ebfa1e"]]);const Bw={__name:"App",setup(t){return(e,n)=>(Ce(),rn(Uw))}},$w=Js(Bw,[["__scopeId","data-v-86efbf2e"]]);function Ww(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/*!
 * vue-svg-inline v1.0.0
 * (c) Olumide Olugbemiro
 * Released under the MIT License.
 */var Hw={props:{src:{type:String,required:!1},styleClass:{type:String,default:"myClass"},styleId:{type:String,default:"myId"}},created:function(){var e=this.$props;fetch(e.src).then(function(n){return n.text()}).then(function(n){var s=null;if(window.DOMParser){var i=new DOMParser;s=i.parseFromString(n,"application/xml")}else s=new ActiveXObject("Microsoft.XMLDOM"),s.async="false",s.loadXML(n);s.documentElement.setAttribute("class",e.styleClass),s.documentElement.setAttribute("id",e.styleId),document.getElementById("svg").replaceWith(s.documentElement)}).catch(function(n){return console.log(n)})}};function Vw(t,e,n,s,i,r,o,a,l,c){typeof o!="boolean"&&(l=a,a=o,o=!1);var u=typeof n=="function"?n.options:n;t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),s&&(u._scopeId=s);var h;if(r?(h=function(v){v=v||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!v&&typeof __VUE_SSR_CONTEXT__<"u"&&(v=__VUE_SSR_CONTEXT__),e&&e.call(this,l(v)),v&&v._registeredComponents&&v._registeredComponents.add(r)},u._ssrRegister=h):e&&(h=o?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(m){e.call(this,a(m))}),h)if(u.functional){var d=u.render;u.render=function(v,A){return h.call(A),d(v,A)}}else{var _=u.beforeCreate;u.beforeCreate=_?[].concat(_,h):[h]}return n}var jw=Vw,zw=Hw,Kw=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{attrs:{id:"svg"}})},qw=[],Gw=void 0,Yw=void 0,Qw=void 0,Jw=!1,Xw=jw({render:Kw,staticRenderFns:qw},Gw,zw,Yw,Jw,Qw,void 0,void 0),Zw={install:function(e,n){e.component("vue-svg-inline",Xw)}},eb=Zw;const tb=Ww(eb);var nb="firebase",sb="10.0.0";/**
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
 */Ft(nb,sb,"app");const ib={apiKey:"AIzaSyCY5kWWn1FgxwqQeHacq-ahovHFrGMkfpo",authDomain:"our-odyssey.firebaseapp.com",projectId:"our-odyssey",storageBucket:"our-odyssey.appspot.com",messagingSenderId:"959052027883",appId:"1:959052027883:web:45b0ef7a2baa88e37dabae",measurementId:"G-SEJXSNP0G6"};mh(ib);const If=rg($w);If.use(tb);If.mount("#app");
