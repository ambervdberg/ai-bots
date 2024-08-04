(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const It="https://function-app-ai-bots.azurewebsites.net/api",N="code",J="auth_token",kt="access_token";class A{static async isAuthenticated(){const t=localStorage.getItem(J);if(!t)return localStorage.removeItem(N),!1;if(localStorage.getItem(N))return!0;try{const o=await fetch(`${It}/auth-google?access_token=${t}`);if(o.status!==200)return!1;const s=await o.text();return localStorage.setItem(N,s),!0}catch(o){return console.error("Authentication error:",o),!1}}static handleAuthResponse(){const e=new URLSearchParams(window.location.hash.substring(1)).get(kt);e&&(localStorage.setItem(J,e),A.isAuthenticated(),A.handleGoogleRedirect())}static handleGoogleRedirect(){const t=window.location.search;t&&(window.location.href=location.origin+location.pathname+"#"+t.replace("?",""))}static logout(){localStorage.removeItem(J),localStorage.removeItem(N),window.dispatchEvent(new Event("storage"))}static getCode(){return localStorage.getItem(N)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,at=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),dt=new WeakMap;let xt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(at&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&dt.set(e,t))}return t}toString(){return this.cssText}};const Ht=n=>new xt(typeof n=="string"?n:n+"",void 0,ct),P=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((o,s,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new xt(e,n,ct)},jt=(n,t)=>{if(at)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=L.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,n.appendChild(o)}},ut=at?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Ht(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zt,defineProperty:Bt,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Lt,getOwnPropertySymbols:qt,getPrototypeOf:Wt}=Object,y=globalThis,gt=y.trustedTypes,Qt=gt?gt.emptyScript:"",Z=y.reactiveElementPolyfillSupport,M=(n,t)=>n,q={toAttribute(n,t){switch(t){case Boolean:n=n?Qt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},lt=(n,t)=>!zt(n,t),ft={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ft){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Bt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=Dt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const c=s==null?void 0:s.call(this);i.call(this,r),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ft}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,o=[...Lt(e),...qt(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(ut(s))}else t!==void 0&&e.push(ut(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var i;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:q).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:q;this._$Em=s,this[s]=c.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??lt)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[M("elementProperties")]=new Map,E[M("finalized")]=new Map,Z==null||Z({ReactiveElement:E}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,W=I.trustedTypes,mt=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,St="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+v,Vt=`<${Pt}>`,x=document,k=()=>x.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",Et=Array.isArray,Gt=n=>Et(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",X=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,$t=/>/g,_=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,yt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),d=Yt(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),_t=new WeakMap,w=x.createTreeWalker(x,129);function Ot(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}const Kt=(n,t)=>{const e=n.length-1,o=[];let s,i=t===2?"<svg>":"",r=U;for(let c=0;c<e;c++){const a=n[c];let p,u,l=-1,m=0;for(;m<a.length&&(r.lastIndex=m,u=r.exec(a),u!==null);)m=r.lastIndex,r===U?u[1]==="!--"?r=bt:u[1]!==void 0?r=$t:u[2]!==void 0?(Ct.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=_):u[3]!==void 0&&(r=_):r===_?u[0]===">"?(r=s??U,l=-1):u[1]===void 0?l=-2:(l=r.lastIndex-u[2].length,p=u[1],r=u[3]===void 0?_:u[3]==='"'?yt:vt):r===yt||r===vt?r=_:r===bt||r===$t?r=U:(r=_,s=void 0);const $=r===_&&n[c+1].startsWith("/>")?" ":"";i+=r===U?a+Vt:l>=0?(o.push(p),a.slice(0,l)+St+a.slice(l)+v+$):a+v+(l===-2?c:$)}return[Ot(n,i+(n[e]||"<?>")+(t===2?"</svg>":"")),o]};class j{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,r=0;const c=t.length-1,a=this.parts,[p,u]=Kt(t,e);if(this.el=j.createElement(p,o),w.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=w.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(St)){const m=u[r++],$=s.getAttribute(l).split(v),D=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:D[2],strings:$,ctor:D[1]==="."?Jt:D[1]==="?"?Zt:D[1]==="@"?Xt:G}),s.removeAttribute(l)}else l.startsWith(v)&&(a.push({type:6,index:i}),s.removeAttribute(l));if(Ct.test(s.tagName)){const l=s.textContent.split(v),m=l.length-1;if(m>0){s.textContent=W?W.emptyScript:"";for(let $=0;$<m;$++)s.append(l[$],k()),w.nextNode(),a.push({type:2,index:++i});s.append(l[m],k())}}}else if(s.nodeType===8)if(s.data===Pt)a.push({type:2,index:i});else{let l=-1;for(;(l=s.data.indexOf(v,l+1))!==-1;)a.push({type:7,index:i}),l+=v.length-1}i++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function C(n,t,e=n,o){var r,c;if(t===S)return t;let s=o!==void 0?(r=e._$Co)==null?void 0:r[o]:e._$Cl;const i=H(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),i===void 0?s=void 0:(s=new i(n),s._$AT(n,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(t=C(n,s._$AS(n,t.values),s,o)),t}class Ft{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);w.currentNode=s;let i=w.nextNode(),r=0,c=0,a=o[0];for(;a!==void 0;){if(r===a.index){let p;a.type===2?p=new B(i,i.nextSibling,this,t):a.type===1?p=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(p=new te(i,this,t)),this._$AV.push(p),a=o[++c]}r!==(a==null?void 0:a.index)&&(i=w.nextNode(),r++)}return w.currentNode=x,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),H(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=j.createElement(Ot(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(e);else{const r=new Ft(s,this),c=r.u(this.options);r.p(e),this.T(c),this._$AH=r}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new j(t)),e}k(t){Et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new B(this.S(k()),this.S(k()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,s){const i=this.strings;let r=!1;if(i===void 0)t=C(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const c=t;let a,p;for(t=i[0],a=0;a<i.length-1;a++)p=C(this,c[o+a],e,a),p===S&&(p=this._$AH[a]),r||(r=!H(p)||p!==this._$AH[a]),p===h?t=h:t!==h&&(t+=(p??"")+i[a+1]),this._$AH[a]=p}r&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Jt extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Zt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Xt extends G{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??h)===S)return;const o=this._$AH,s=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==h&&(o===h||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class te{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const tt=I.litHtmlPolyfillSupport;tt==null||tt(j,B),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.1.4");const ee=(n,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const i=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new B(t.insertBefore(k(),i),i,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ee(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var At;g._$litElement$=!0,g.finalized=!0,(At=globalThis.litElementHydrateSupport)==null||At.call(globalThis,{LitElement:g});const et=globalThis.litElementPolyfillSupport;et==null||et({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:lt},oe=(n=se,t,e)=>{const{kind:o,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,n),o==="accessor"){const{name:r}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(r,a,n)},init(c){return c!==void 0&&this.P(r,void 0,n),c}}}if(o==="setter"){const{name:r}=e;return function(c){const a=this[r];t.call(this,c),this.requestUpdate(r,a,n)}}throw Error("Unsupported decorator location: "+o)};function f(n){return(t,e)=>typeof e=="object"?oe(n,t,e):((o,s,i)=>{const r=s.hasOwnProperty(i);return s.constructor.createProperty(i,r?{...o,wrapped:!0}:o),r?Object.getOwnPropertyDescriptor(s,i):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(n){return f({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tt(n,t,e){return n?t(n):e==null?void 0:e(n)}const ne=P`
  :host {
    text-align: center;
    max-width: 900px;
    display: block;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  .botContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=n=>(...t)=>({_$litDirective$:n,values:t});class ae{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends ae{constructor(t){if(super(t),this.it=h,t.type!==ie.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||t==null)return this._t=void 0,this.it=t;if(t===S)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}st.directiveName="unsafeHTML",st.resultType=1;const ce=re(st),le=P`
  #botResponse {
    margin-top: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #333;
    white-space: pre-wrap;
    text-align: center;
  }

  .invisible {
    opacity: 0;
  }
`;var he=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Nt=(n,t,e,o)=>{for(var s=o>1?void 0:o?pe(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&he(t,e,s),s};let Q=class extends g{constructor(){super(...arguments),this.response=""}render(){return d`
      ${Tt(this.response.length>0,()=>d`<div id="botResponse">${ce(this.response)}</div>`)}
    `}};Q.styles=le;Nt([f({type:String})],Q.prototype,"response",2);Q=Nt([b("response-container")],Q);var de=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,ht=(n,t,e,o)=>{for(var s=o>1?void 0:o?ue(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&de(t,e,s),s};let z=class extends g{constructor(){super(...arguments),this.name="",this.response=""}render(){return d`
      <h1 id="botName">${this.name}</h1>
      <div id="botContainer">
        <slot></slot>
        <response-container .response=${this.response}></response-container>
      </div>
    `}};z.styles=ne;ht([f({type:String})],z.prototype,"name",2);ht([f({type:String})],z.prototype,"response",2);z=ht([b("bot-container")],z);const wt={clientId:"428415279833-hfki5sa87n2pht2p0vd8pfiqi56qk7d2.apps.googleusercontent.com",scopes:"openid email"},ge=P`
  :host {
    padding: 16px;
    text-align: center;
  }

  .button {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    background-color: WHITE;
    background-image: none;
    border: 1px solid #747775;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #1f1f1f;
    cursor: pointer;
    font-family: 'Roboto', arial, sans-serif;
    font-size: 14px;
    height: 40px;
    letter-spacing: 0.25px;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-align: center;
    -webkit-transition:
      background-color 0.218s,
      border-color 0.218s,
      box-shadow 0.218s;
    transition:
      background-color 0.218s,
      border-color 0.218s,
      box-shadow 0.218s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    max-width: 400px;
    min-width: min-content;
  }

  .button .button-icon {
    height: 20px;
    margin-right: 12px;
    min-width: 20px;
    width: 20px;
  }

  .button .button-content-wrapper {
    -webkit-align-items: center;
    align-items: center;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .button .button-contents {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    font-family: 'Roboto', arial, sans-serif;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  .button .button-state {
    -webkit-transition: opacity 0.218s;
    transition: opacity 0.218s;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .button:disabled {
    cursor: default;
    background-color: #ffffff61;
    border-color: #1f1f1f1f;
  }

  .button:disabled .button-contents {
    opacity: 38%;
  }

  .button:disabled .button-icon {
    opacity: 38%;
  }

  .button:not(:disabled):active .button-state,
  .button:not(:disabled):focus .button-state {
    background-color: #303030;
    opacity: 12%;
  }

  .button:not(:disabled):hover {
    -webkit-box-shadow:
      0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
    box-shadow:
      0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  .button:not(:disabled):hover .button-state {
    background-color: #303030;
    opacity: 8%;
  }
`;var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,K=(n,t,e,o)=>{for(var s=o>1?void 0:o?me(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&fe(t,e,s),s};let O=class extends g{constructor(){super(...arguments),this.name="Sign in",this.ms=!1,this.disabled=!1}render(){return d`
      <button class="button" ?disabled=${this.disabled}>
        <div class="button-state"></div>
        <div class="button-content-wrapper">
          <div class="button-icon">
            <slot></slot>
          </div>
          <span class="button-contents">${this.name}</span>
          <span style="display: none;">${this.name}</span>
        </div>
      </button>
    `}};O.styles=ge;K([f({type:String})],O.prototype,"name",2);K([f({type:Boolean})],O.prototype,"ms",2);K([f({type:Boolean})],O.prototype,"disabled",2);O=K([b("login-button")],O);var be=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Ut=(n,t,e,o)=>{for(var s=o>1?void 0:o?$e(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&be(t,e,s),s};let ot=class extends g{constructor(){super(...arguments),this.name="Sign in with Google"}googleLogin(){const n=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${wt.clientId}&redirect_uri=${this.getRedirectURI()}&response_type=token&scope=${encodeURI(wt.scopes)}`;window.location.href=n}getRedirectURI(){const n=location.hash.replace("#","?");return location.origin+location.pathname+n}render(){return d` <login-button .name=${this.name} @click=${this.googleLogin}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="display: block;"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        ></path>
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        ></path>
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        ></path>
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        ></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
    </login-button>`}};Ut([Y()],ot.prototype,"name",2);ot=Ut([b("signin-google")],ot);var ve=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,Rt=(n,t,e,o)=>{for(var s=o>1?void 0:o?ye(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&ve(t,e,s),s};let nt=class extends g{constructor(){super(...arguments),this.name="Logout"}render(){return d`
      <login-button .name=${this.name} @click="${A.logout}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="21px"
          width="21px"
          viewBox="0 0 490.3 490.3"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
                s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
                c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
                C27.9,58.95,0,86.75,0,121.05z"
              />
              <path
                d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
                c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
                C380.6,325.15,380.6,332.95,385.4,337.65z"
              />
            </g>
          </g>
        </svg>
      </login-button>
    `}};Rt([Y()],nt.prototype,"name",2);nt=Rt([b("signout-button")],nt);var _e=Object.defineProperty,we=(n,t,e,o)=>{for(var s=void 0,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=r(t,e,s)||s);return s&&_e(t,e,s),s};const Ae=n=>{class t extends n{constructor(...o){super(...o),this.isAuthenticated=!1,this.checkAuth=()=>{A.isAuthenticated().then(s=>{this.isAuthenticated=s,this.requestUpdate()})}}connectedCallback(){super.connectedCallback(),super.updateComplete.then(()=>(this.checkAuth(),!0)),window.addEventListener("storage",this.checkAuth)}}return we([f({type:Boolean})],t.prototype,"isAuthenticated"),t};var xe=Object.defineProperty,Se=(n,t,e,o)=>{for(var s=void 0,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=r(t,e,s)||s);return s&&xe(t,e,s),s};class pt extends Ae(g){constructor(){super(...arguments),this.response="",this.apiUrl="https://function-app-ai-bots.azurewebsites.net/api",this.userQuestion={role:"user",content:""}}displayResponse(t){this.response=t.choices[0].message.content,this.requestUpdate()}displayResponseString(t){this.response=t,this.requestUpdate()}displayResponseStream(t){this.response+=t,this.requestUpdate()}setTypingMessage(t){this.stopTypingMessage();let e=1;const o=4,s=()=>{const i=".".repeat(e),r=`<span class="invisible">${i}</span>`;this.displayResponseString(`${r}<i>${t}${i}</i>`),e=e%o+1};this.typingInterval=window.setInterval(s,500)}stopTypingMessage(){this.typingInterval&&(clearInterval(this.typingInterval),this.typingInterval=void 0)}async processStream(t){try{const o=t.body.getReader(),s=new TextDecoder,i=async()=>{for(;;){const{done:r,value:c}=await o.read();if(r)break;const a=s.decode(c,{stream:!0});a&&this.displayResponseStream(a)}o.releaseLock()};this.stopTypingMessage(),this.displayResponseString(""),await i()}catch(e){console.error("Error reading the stream:",e),this.stopTypingMessage(),this.displayResponseString("An error occurred while processing the stream. Please try again.")}}}Se([f({type:String})],pt.prototype,"response");const Pe=P`
  input[type='text'] {
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background: #f9f9f9;
    margin: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
    align-self: center;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  .signin {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;var Ee=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,F=(n,t,e,o)=>{for(var s=o>1?void 0:o?Ce(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&Ee(t,e,s),s};let T=class extends pt{constructor(){super(),this.name="Notion bot",this.question="",this.workspaceName="",this.response=""}async start(){if(this.userQuestion.content=this.question,!this.question){this.displayResponseString("Please enter a question.");return}this.setTypingMessage("Asking Notion bot"),await fetch(`${this.apiUrl}/notion?code=${A.getCode()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.question,workspace:this.workspaceName})}).then(async n=>{if(n.status!==200){this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.");return}await this.processStream(n)}).catch(n=>{console.error("Error fetching response:",n),this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again later.")})}renderWorkspace(){return d` <div id="workspace-input-container" ?hidden=${!this.isAuthenticated}>
      <label for="workspaceName">Workspace Name (Optional):</label>
      <input
        type="text"
        id="workspaceName"
        .value=${this.workspaceName}
        placeholder="MyWorkSpace"
        @input=${n=>this.workspaceName=n.target.value}
      />
    </div>`}renderQuestion(){return d` <div id="question-input-container">
      <label for="question-input">Your question:</label>
      <input
        type="text"
        id="question-input"
        .value=${this.question}
        placeholder="What's on my todo list?"
        @input=${n=>this.question=n.target.value}
      />
    </div>`}renderQuestionButton(){return d`<button ?disabled=${!this.question} @click="${this.start}">Ask Notion Bot</button>`}render(){return d`
      <bot-container .name=${this.name} .response=${this.response}>
        <div class="signin">
          <signin-google ?hidden=${this.isAuthenticated}></signin-google>
          <signout-button ?hidden=${!this.isAuthenticated}></signout-button>
        </div>

        ${Tt(this.isAuthenticated,()=>d`
            ${this.renderWorkspace()} ${this.renderQuestion()} ${this.renderQuestionButton()}
          `)}
      </bot-container>
    `}};T.styles=Pe;F([f({type:String})],T.prototype,"name",2);F([Y()],T.prototype,"question",2);F([Y()],T.prototype,"workspaceName",2);T=F([b("notion-bot")],T);const Oe=P`
  #botQuestion {
    font-size: 0.875rem;
    color: #555;
    margin-top: 2rem;
    text-align: center;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
    align-self: center;
  }

  button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;var Te=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Mt=(n,t,e,o)=>{for(var s=o>1?void 0:o?Ne(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&Te(t,e,s),s};let V=class extends pt{constructor(){super(),this.name="Poem bot",this.response=""}async start(){try{this.userQuestion.content=await this.createPrompt(),this.setTypingMessage("Poet is typing");const n=await fetch(`${this.apiUrl}/poem`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.userQuestion.content})});if(n.status!==200){this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.");return}await this.processStream(n)}catch(n){console.error("Error in start method:",n),this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.")}}async createPrompt(){return this.setTypingMessage("Generating subject"),(await fetch(`${this.apiUrl}/subject`)).text()}render(){return d`
      <bot-container .name=${this.name} .response=${this.response}>
        <button @click="${this.start}">Generate Poem</button>
        <p id="botQuestion">${this.userQuestion.content||"Subject will be generated..."}</p>
      </bot-container>
    `}};V.styles=Oe;Mt([f({type:String})],V.prototype,"name",2);V=Mt([b("poem-bot")],V);const Ue=P`
  :host {
    max-width: 900px;
    display: block;
    margin: auto;
  }

  h1 {
    text-align: center;
  }
`;var Re=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Ie=(n,t,e,o)=>{for(var s=o>1?void 0:o?Me(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&Re(t,e,s),s};let it=class extends g{render(){return d`
      <h1>About</h1>
      <p>
        This project contains AI Bots. I have created this project to be able to experiment with AI
        integration.
      </p>

      <section>
        <h2>Bots</h2>
        <p>
          The following bots are implemented. You can navigate between the bots using the menu
          above.
        </p>
      </section>

      <section>
        <h3>Poem Bot</h3>
        <p>The Poem Bot generates software-related poems using the OpenAI API.</p>
        <div>
          <strong>API Endpoints:</strong>
          <ul>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/subject.ts"
                target="_blank"
              >
                Create a poem subject
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/poem.ts"
                target="_blank"
              >
                Create a poem
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Notion.so Bot</h3>
        <p>
          The Notion Bot answers questions using content from your Notion workspaces. It combines
          the OpenAI API and the Notion API to fetch and generate answers.
        </p>
        <p>
          <strong>Note:</strong> This functionality is not available in the live demo, since I don't
          want to expose my Notion.so data to you 😉. You can implement your own integration by
          following the instructions
          <a href="https://github.com/ambervdberg/azure-function-bots/tree/main" target="_blank"
            >here</a
          >.
        </p>
        <div>
          <strong>API Endpoints:</strong>
          <ul>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/notion.ts"
                target="_blank"
              >
                Answer questions with Notion content
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/auth-google.ts"
                target="_blank"
              >
                Check user authorization
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>The Code</h2>
        <ul>
          <li>
            Client:
            <a href="https://github.com/ambervdberg/ai-bots" target="_blank"
              >https://github.com/ambervdberg/ai-bots</a
            >
          </li>
          <li>
            Backend:
            <a href="https://github.com/ambervdberg/azure-function-bots" target="_blank"
              >https://github.com/ambervdberg/azure-function-bots</a
            >
          </li>
        </ul>
      </section>
    `}};it.styles=Ue;it=Ie([b("home-component")],it);const ke=P`
  :host {
    display: block;
    margin: auto;
    max-width: 1400px;
  }

  header {
    background: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }

  h1,
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  header h1 {
    margin-bottom: 10px;
  }

  header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  header nav ul li {
    margin: 0 15px;
  }

  header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  main {
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem 2rem 2rem;
    text-align: left;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    main {
      margin-top: 0;
    }
  }

  footer {
    text-align: center;
    padding: 20px 0;
    background: #333;
    color: #fff;
  }
`;var He=Object.defineProperty,je=Object.getOwnPropertyDescriptor,ze=(n,t,e,o)=>{for(var s=o>1?void 0:o?je(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(s=(o?r(t,e,s):r(s))||s);return o&&s&&He(t,e,s),s};const R={HOME:"",POEM:"#poem",NOTION:"#notion"};let rt=class extends g{constructor(){super(...arguments),this.handleHashChange=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this.handleHashChange)}render(){return d`
      <header>
        <h1>OpenAI API Bots</h1>
        <nav>
          <ul>
            <li><a href="./">About</a></li>
            <li><a href="${R.POEM}">Poem Bot</a></li>
            <li><a href="${R.NOTION}">Notion Bot</a></li>
          </ul>
        </nav>
      </header>
      <main>
        ${location.hash===R.HOME?d`<home-component></home-component>`:""}
        ${location.hash===R.POEM?d`<poem-bot></poem-bot>`:""}
        ${location.hash===R.NOTION?d`<notion-bot></notion-bot>`:""}
      </main>
    `}};rt.styles=ke;rt=ze([b("ai-bot-app")],rt);document.addEventListener("DOMContentLoaded",()=>{A.handleAuthResponse()});
