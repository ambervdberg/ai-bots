(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Rt="https://function-app-ai-bots.azurewebsites.net/api",N="code",J="auth_token",kt="access_token";class O{static async isAuthenticated(){const t=localStorage.getItem(J);if(!t)return localStorage.removeItem(N),!1;if(localStorage.getItem(N))return!0;try{const o=await fetch(`${Rt}/auth-google?access_token=${t}`);if(o.status!==200)return!1;const s=await o.text();return localStorage.setItem(N,s),!0}catch(o){return console.error("Authentication error:",o),!1}}static handleAuthResponse(){const e=new URLSearchParams(window.location.hash.substring(1)).get(kt);e&&(localStorage.setItem(J,e),O.isAuthenticated())}static logout(t){localStorage.removeItem(J),localStorage.removeItem(N),t&&(window.location.href=t)}static getCode(){return localStorage.getItem(N)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,nt=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),pt=new WeakMap;let At=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(nt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&pt.set(e,t))}return t}toString(){return this.cssText}};const Ht=r=>new At(typeof r=="string"?r:r+"",void 0,at),T=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new At(e,r,at)},zt=(r,t)=>{if(nt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=B.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,r.appendChild(o)}},dt=nt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Ht(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:It,defineProperty:jt,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Lt,getOwnPropertySymbols:Bt,getPrototypeOf:qt}=Object,y=globalThis,ut=y.trustedTypes,Wt=ut?ut.emptyScript:"",Z=y.reactiveElementPolyfillSupport,M=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ct=(r,t)=>!It(r,t),ft={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ft){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&jt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=Dt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);i.call(this,n),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ft}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,o=[...Lt(e),...Bt(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(dt(s))}else t!==void 0&&e.push(dt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var i;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:q).toAttribute(e,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:q;this._$Em=s,this[s]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??ct)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[M("elementProperties")]=new Map,S[M("finalized")]=new Map,Z==null||Z({ReactiveElement:S}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,W=R.trustedTypes,gt=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,xt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+m,Qt=`<${St}>`,A=document,k=()=>A.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Pt=Array.isArray,Vt=r=>Pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,$t=/>/g,v=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,yt=/"/g,Et=/^(?:script|style|textarea|title)$/i,Kt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=Kt(1),x=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),_t=new WeakMap,w=A.createTreeWalker(A,129);function Ct(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}const Yt=(r,t)=>{const e=r.length-1,o=[];let s,i=t===2?"<svg>":"",n=U;for(let c=0;c<e;c++){const a=r[c];let p,d,l=-1,b=0;for(;b<a.length&&(n.lastIndex=b,d=n.exec(a),d!==null);)b=n.lastIndex,n===U?d[1]==="!--"?n=bt:d[1]!==void 0?n=$t:d[2]!==void 0?(Et.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=v):d[3]!==void 0&&(n=v):n===v?d[0]===">"?(n=s??U,l=-1):d[1]===void 0?l=-2:(l=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?v:d[3]==='"'?yt:mt):n===yt||n===mt?n=v:n===bt||n===$t?n=U:(n=v,s=void 0);const $=n===v&&r[c+1].startsWith("/>")?" ":"";i+=n===U?a+Qt:l>=0?(o.push(p),a.slice(0,l)+xt+a.slice(l)+m+$):a+m+(l===-2?c:$)}return[Ct(r,i+(r[e]||"<?>")+(t===2?"</svg>":"")),o]};class z{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const c=t.length-1,a=this.parts,[p,d]=Yt(t,e);if(this.el=z.createElement(p,o),w.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=w.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(xt)){const b=d[n++],$=s.getAttribute(l).split(m),D=/([.?@])?(.*)/.exec(b);a.push({type:1,index:i,name:D[2],strings:$,ctor:D[1]==="."?Gt:D[1]==="?"?Jt:D[1]==="@"?Zt:K}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:i}),s.removeAttribute(l));if(Et.test(s.tagName)){const l=s.textContent.split(m),b=l.length-1;if(b>0){s.textContent=W?W.emptyScript:"";for(let $=0;$<b;$++)s.append(l[$],k()),w.nextNode(),a.push({type:2,index:++i});s.append(l[b],k())}}}else if(s.nodeType===8)if(s.data===St)a.push({type:2,index:i});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:i}),l+=m.length-1}i++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function P(r,t,e=r,o){var n,c;if(t===x)return t;let s=o!==void 0?(n=e._$Co)==null?void 0:n[o]:e._$Cl;const i=H(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(t=P(r,s._$AS(r,t.values),s,o)),t}class Ft{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);w.currentNode=s;let i=w.nextNode(),n=0,c=0,a=o[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new j(i,i.nextSibling,this,t):a.type===1?p=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(p=new Xt(i,this,t)),this._$AV.push(p),a=o[++c]}n!==(a==null?void 0:a.index)&&(i=w.nextNode(),n++)}return w.currentNode=A,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class j{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),H(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=z.createElement(Ct(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(e);else{const n=new Ft(s,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new z(t)),e}k(t){Pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new j(this.S(k()),this.S(k()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,s){const i=this.strings;let n=!1;if(i===void 0)t=P(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const c=t;let a,p;for(t=i[0],a=0;a<i.length-1;a++)p=P(this,c[o+a],e,a),p===x&&(p=this._$AH[a]),n||(n=!H(p)||p!==this._$AH[a]),p===h?t=h:t!==h&&(t+=(p??"")+i[a+1]),this._$AH[a]=p}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Gt extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Jt extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Zt extends K{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??h)===x)return;const o=this._$AH,s=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==h&&(o===h||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Xt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const tt=R.litHtmlPolyfillSupport;tt==null||tt(z,j),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.1.4");const te=(r,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const i=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new j(t.insertBefore(k(),i),i,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=te(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var wt;f._$litElement$=!0,f.finalized=!0,(wt=globalThis.litElementHydrateSupport)==null||wt.call(globalThis,{LitElement:f});const et=globalThis.litElementPolyfillSupport;et==null||et({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ct},se=(r=ee,t,e)=>{const{kind:o,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,r),o==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,r)},init(c){return c!==void 0&&this.P(n,void 0,r),c}}}if(o==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+o)};function g(r){return(t,e)=>typeof e=="object"?se(r,t,e):((o,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,i):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ot(r,t,e){return r?t(r):e==null?void 0:e(r)}const oe=T`
  :host {
    display: block;
    font-family: 'Arial', sans-serif;
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem 1.5rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #eaeaea;
  }

  h2 {
    font-size: 1.25rem;
    color: #222;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  #botContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    font-size: 0.875rem;
    color: #555;
    margin-bottom: 0.25rem;
  }

  input[type='text'] {
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background: #f9f9f9;
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

  .signin {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ie=r=>(...t)=>({_$litDirective$:r,values:t});class ne{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends ne{constructor(t){if(super(t),this.it=h,t.type!==re.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||t==null)return this._t=void 0,this.it=t;if(t===x)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}st.directiveName="unsafeHTML",st.resultType=1;const ae=ie(st),ce=T`
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
`;var le=Object.defineProperty,he=Object.getOwnPropertyDescriptor,Tt=(r,t,e,o)=>{for(var s=o>1?void 0:o?he(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&le(t,e,s),s};let Q=class extends f{constructor(){super(...arguments),this.response=""}render(){return u`
      ${Ot(this.response.length>0,()=>u`<div id="botResponse">${ae(this.response)}</div>`)}
    `}};Q.styles=ce;Tt([g({type:String})],Q.prototype,"response",2);Q=Tt([_("response-container")],Q);var pe=Object.defineProperty,de=Object.getOwnPropertyDescriptor,lt=(r,t,e,o)=>{for(var s=o>1?void 0:o?de(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&pe(t,e,s),s};let I=class extends f{constructor(){super(...arguments),this.name="",this.response=""}render(){return u`
      <h2 id="botName">${this.name}</h2>
      <div id="botContainer">
        <slot></slot>
        <response-container .response=${this.response}></response-container>
      </div>
    `}};I.styles=oe;lt([g({type:String})],I.prototype,"name",2);lt([g({type:String})],I.prototype,"response",2);I=lt([_("bot-container")],I);const vt={clientId:"428415279833-hfki5sa87n2pht2p0vd8pfiqi56qk7d2.apps.googleusercontent.com",scopes:"openid"},ue=T`
  :host {
    display: block;
    padding: 16px;
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
`;var fe=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,F=(r,t,e,o)=>{for(var s=o>1?void 0:o?ge(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&fe(t,e,s),s};let E=class extends f{constructor(){super(...arguments),this.name="Sign in",this.ms=!1,this.disabled=!1}render(){return u`
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
    `}};E.styles=ue;F([g({type:String})],E.prototype,"name",2);F([g({type:Boolean})],E.prototype,"ms",2);F([g({type:Boolean})],E.prototype,"disabled",2);E=F([_("login-button")],E);var be=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Nt=(r,t,e,o)=>{for(var s=o>1?void 0:o?$e(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&be(t,e,s),s};let ot=class extends f{constructor(){super(...arguments),this.name="Sign in with Google"}googleLogin(){const r=location.origin+location.pathname,t=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${vt.clientId}&redirect_uri=${r}&response_type=token&scope=${vt.scopes}`;window.location.href=t}render(){return u` <login-button .name=${this.name} @click=${this.googleLogin}>
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
    </login-button>`}};Nt([Y()],ot.prototype,"name",2);ot=Nt([_("signin-google")],ot);var me=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,Ut=(r,t,e,o)=>{for(var s=o>1?void 0:o?ye(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&me(t,e,s),s};let rt=class extends f{constructor(){super(...arguments),this.name="Logout"}render(){return u`
      <login-button
        .name=${this.name}
        @click="${()=>O.logout(location.origin+location.hash)}"
      >
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
    `}};Ut([Y()],rt.prototype,"name",2);rt=Ut([_("signout-button")],rt);var _e=Object.defineProperty,ve=(r,t,e,o)=>{for(var s=void 0,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=n(t,e,s)||s);return s&&_e(t,e,s),s};const we=r=>{class t extends r{constructor(...o){super(...o),this.isAuthenticated=!1,this.checkAuth=()=>{O.isAuthenticated().then(s=>{this.isAuthenticated=s,this.requestUpdate()})}}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.checkAuth()},0),window.addEventListener("storage",this.checkAuth)}}return ve([g({type:Boolean})],t.prototype,"isAuthenticated"),t};var Ae=Object.defineProperty,xe=(r,t,e,o)=>{for(var s=void 0,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=n(t,e,s)||s);return s&&Ae(t,e,s),s};class ht extends we(f){constructor(){super(...arguments),this.response="",this.apiUrl="https://function-app-ai-bots.azurewebsites.net/api",this.userQuestion={role:"user",content:""}}displayResponse(t){this.response=t.choices[0].message.content,this.requestUpdate()}displayResponseString(t){this.response=t,this.requestUpdate()}displayResponseStream(t){this.response+=t,this.requestUpdate()}setTypingMessage(t){this.stopTypingMessage();let e=1;const o=4,s=()=>{const i=".".repeat(e),n=`<span class="invisible">${i}</span>`;this.displayResponseString(`${n}<i>${t}${i}</i>`),e=e%o+1};this.typingInterval=window.setInterval(s,500)}stopTypingMessage(){this.typingInterval&&(clearInterval(this.typingInterval),this.typingInterval=void 0)}async processStream(t){try{const o=t.body.getReader(),s=new TextDecoder,i=async()=>{for(;;){const{done:n,value:c}=await o.read();if(n)break;const a=s.decode(c,{stream:!0});a&&this.displayResponseStream(a)}o.releaseLock()};this.stopTypingMessage(),this.displayResponseString(""),await i()}catch(e){console.error("Error reading the stream:",e),this.stopTypingMessage(),this.displayResponseString("An error occurred while processing the stream. Please try again.")}}}xe([g({type:String})],ht.prototype,"response");const Se=T`
  input[type='text'] {
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background: #f9f9f9;
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

  .signin {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;var Pe=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,G=(r,t,e,o)=>{for(var s=o>1?void 0:o?Ee(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Pe(t,e,s),s};let C=class extends ht{constructor(){super(),this.name="Notion bot",this.question="",this.workspaceName="",this.response=""}async start(){if(this.userQuestion.content=this.question,!this.question){this.displayResponseString("Please enter a question.");return}this.setTypingMessage("Asking Notion bot"),await fetch(`${this.apiUrl}/notion?code=${O.getCode()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.question,workspace:this.workspaceName})}).then(async r=>{if(r.status!==200){this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.");return}await this.processStream(r)}).catch(r=>{console.error("Error fetching response:",r),this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again later.")})}renderWorkspace(){return u` <div id="workspace-input-container" ?hidden=${!this.isAuthenticated}>
      <label for="workspaceName">Workspace Name (Optional):</label>
      <input
        type="text"
        id="workspaceName"
        .value=${this.workspaceName}
        placeholder="MyWorkSpace"
        @input=${r=>this.workspaceName=r.target.value}
      />
    </div>`}renderQuestion(){return u` <div id="question-input-container">
      <label for="question-input">Your question:</label>
      <input
        type="text"
        id="question-input"
        .value=${this.question}
        placeholder="What's on my todo list?"
        @input=${r=>this.question=r.target.value}
      />
    </div>`}renderQuestionButton(){return u`<button ?disabled=${!this.question} @click="${this.start}">Ask Notion Bot</button>`}render(){return u`
      <bot-container .name=${this.name} .response=${this.response}>
        <div class="signin">
          <signin-google ?hidden=${this.isAuthenticated}></signin-google>
          <signout-button ?hidden=${!this.isAuthenticated}></signout-button>
        </div>

        ${Ot(this.isAuthenticated,()=>u`
            ${this.renderWorkspace()} ${this.renderQuestion()} ${this.renderQuestionButton()}
          `)}
      </bot-container>
    `}};C.styles=Se;G([g({type:String})],C.prototype,"name",2);G([Y()],C.prototype,"question",2);G([Y()],C.prototype,"workspaceName",2);C=G([_("notion-bot")],C);const Ce=T`
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
`;var Oe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Mt=(r,t,e,o)=>{for(var s=o>1?void 0:o?Te(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Oe(t,e,s),s};let V=class extends ht{constructor(){super(),this.name="Poem bot",this.response=""}async start(){try{this.userQuestion.content=await this.createPrompt(),this.setTypingMessage("Poet is typing");const r=await fetch(`${this.apiUrl}/poem`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.userQuestion.content})});if(r.status!==200){this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.");return}await this.processStream(r)}catch(r){console.error("Error in start method:",r),this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.")}}async createPrompt(){return this.setTypingMessage("Generating subject"),(await fetch(`${this.apiUrl}/subject`)).text()}render(){return u`
      <bot-container .name=${this.name} .response=${this.response}>
        <button @click="${this.start}">Generate Poem</button>
        <p id="botQuestion">${this.userQuestion.content||"Subject will be generated..."}</p>
      </bot-container>
    `}};V.styles=Ce;Mt([g({type:String})],V.prototype,"name",2);V=Mt([_("poem-bot")],V);const Ne=T`
  :host {
    display: block;
    font-family: 'Roboto', sans-serif;
    padding: 16px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2980b9;
  }
`;var Ue=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Re=(r,t,e,o)=>{for(var s=o>1?void 0:o?Me(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Ue(t,e,s),s};const L={HOME:"",POEM:"#poem",NOTION:"#notion"};let it=class extends f{constructor(){super(...arguments),this.handleHashChange=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this.handleHashChange)}render(){return u`
      <div>
        <h1>OpenAI API Bots</h1>
        <div>
          <a href="./">Home</a>
          <a href="${L.POEM}">Poem Bot</a>
          <a href="${L.NOTION}">Notion Bot</a>

          ${location.hash===L.POEM?u`<poem-bot></poem-bot>`:""}
          ${location.hash===L.NOTION?u`<notion-bot></notion-bot>`:""}
        </div>
      </div>
    `}};it.styles=Ne;it=Re([_("ai-bot-app")],it);document.addEventListener("DOMContentLoaded",()=>{O.handleAuthResponse()});
