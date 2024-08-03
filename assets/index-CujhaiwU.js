(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const kt="https://function-app-ai-bots.azurewebsites.net/api",D="code",ve="auth_token",zt="access_token";class j{static async isAuthenticated(){const e=localStorage.getItem(ve);if(!e)return localStorage.removeItem(D),!1;if(localStorage.getItem(D))return!0;try{const n=await fetch(`${kt}/auth-google?access_token=${e}`);if(n.status!==200)return!1;const i=await n.text();return localStorage.setItem(D,i),!0}catch(n){return console.error("Authentication error:",n),!1}}static handleAuthResponse(){const t=new URLSearchParams(window.location.hash.substring(1)).get(zt);t&&(localStorage.setItem(ve,t),j.isAuthenticated())}static logout(e){localStorage.removeItem(ve),localStorage.removeItem(D),e&&(window.location.href=e)}static getCode(){return localStorage.getItem(D)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,Ce=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),je=new WeakMap;let ht=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ce&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&je.set(t,e))}return e}toString(){return this.cssText}};const Ft=r=>new ht(typeof r=="string"?r:r+"",void 0,Te),H=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new ht(t,r,Te)},qt=(r,e)=>{if(Ce)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=Z.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},He=Ce?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ft(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:Wt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Qt,getOwnPropertySymbols:Gt,getPrototypeOf:Jt}=Object,E=globalThis,Be=E.trustedTypes,Yt=Be?Be.emptyScript:"",ye=E.reactiveElementPolyfillSupport,z=(r,e)=>r,ne={toAttribute(r,e){switch(e){case Boolean:r=r?Yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ue=(r,e)=>!Vt(r,e),De={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class U extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=De){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Wt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=Kt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??De}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=Jt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const t=this.properties,n=[...Qt(t),...Gt(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(He(i))}else e!==void 0&&t.push(He(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:ne).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:ne;this._$Em=i,this[i]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ue)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[z("elementProperties")]=new Map,U[z("finalized")]=new Map,ye==null||ye({ReactiveElement:U}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,ie=F.trustedTypes,ke=ie?ie.createPolicy("lit-html",{createHTML:r=>r}):void 0,ut="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,dt="?"+w,Xt=`<${dt}>`,O=document,V=()=>O.createComment(""),W=r=>r===null||typeof r!="object"&&typeof r!="function",pt=Array.isArray,Zt=r=>pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",$e=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Fe=/>/g,x=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ve=/"/g,ft=/^(?:script|style|textarea|title)$/i,er=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=er(1),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),We=new WeakMap,R=O.createTreeWalker(O,129);function gt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(e):e}const tr=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":"",o=k;for(let l=0;l<t;l++){const a=r[l];let c,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===k?h[1]==="!--"?o=ze:h[1]!==void 0?o=Fe:h[2]!==void 0?(ft.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=x):h[3]!==void 0&&(o=x):o===x?h[0]===">"?(o=i??k,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?x:h[3]==='"'?Ve:qe):o===Ve||o===qe?o=x:o===ze||o===Fe?o=k:(o=x,i=void 0);const p=o===x&&r[l+1].startsWith("/>")?" ":"";s+=o===k?a+Xt:u>=0?(n.push(c),a.slice(0,u)+ut+a.slice(u)+w+p):a+w+(u===-2?l:p)}return[gt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class K{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[c,h]=tr(e,t);if(this.el=K.createElement(c,n),R.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=R.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(ut)){const d=h[o++],p=i.getAttribute(u).split(w),S=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:S[2],strings:p,ctor:S[1]==="."?nr:S[1]==="?"?ir:S[1]==="@"?sr:de}),i.removeAttribute(u)}else u.startsWith(w)&&(a.push({type:6,index:s}),i.removeAttribute(u));if(ft.test(i.tagName)){const u=i.textContent.split(w),d=u.length-1;if(d>0){i.textContent=ie?ie.emptyScript:"";for(let p=0;p<d;p++)i.append(u[p],V()),R.nextNode(),a.push({type:2,index:++s});i.append(u[d],V())}}}else if(i.nodeType===8)if(i.data===dt)a.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(w,u+1))!==-1;)a.push({type:7,index:s}),u+=w.length-1}s++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}}function N(r,e,t=r,n){var o,l;if(e===C)return e;let i=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const s=W(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=N(r,i._$AS(r,e.values),i,n)),e}class rr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??O).importNode(t,!0);R.currentNode=i;let s=R.nextNode(),o=0,l=0,a=n[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new J(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new or(s,this,e)),this._$AV.push(c),a=n[++l]}o!==(a==null?void 0:a.index)&&(s=R.nextNode(),o++)}return R.currentNode=O,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class J{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),W(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Zt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==f&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=K.createElement(gt(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const o=new rr(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new K(e)),t}k(e){pt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new J(this.S(V()),this.S(V()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(e,t=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=N(this,e,t,0),o=!W(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=N(this,l[n+a],t,a),c===C&&(c=this._$AH[a]),o||(o=!W(c)||c!==this._$AH[a]),c===f?e=f:e!==f&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class nr extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class ir extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class sr extends de{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??f)===C)return;const n=this._$AH,i=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==f&&(n===f||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class or{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const we=F.litHtmlPolyfillSupport;we==null||we(K,J),(F.litHtmlVersions??(F.litHtmlVersions=[])).push("3.1.4");const ar=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new J(e.insertBefore(V(),s),s,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ar(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}}var lt;y._$litElement$=!0,y.finalized=!0,(lt=globalThis.litElementHydrateSupport)==null||lt.call(globalThis,{LitElement:y});const Ae=globalThis.litElementPolyfillSupport;Ae==null||Ae({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Ue},lr=(r=cr,e,t)=>{const{kind:n,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(t.name,r),n==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(n==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+n)};function _(r){return(e,t)=>typeof t=="object"?lr(r,e,t):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(r){return _({...r,state:!0,attribute:!1})}function se(r){return r=r||[],Array.isArray(r)?r:[r]}function v(r){return`[Vaadin.Router] ${r}`}function hr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const oe="module",ae="nomodule",Pe=[oe,ae];function Ke(r){if(!r.match(/.+\.[m]?js$/))throw new Error(v(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function _t(r){if(!r||!b(r.path))throw new Error(v('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!T(r.action)&&!Array.isArray(r.children)&&!T(r.children)&&!ce(e)&&!t.some(n=>b(r[n])))throw new Error(v(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(b(e))Ke(e);else if(Pe.some(n=>n in e))Pe.forEach(n=>n in e&&Ke(e[n]));else throw new Error(v('Expected route bundle to include either "'+ae+'" or "'+oe+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(v(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Qe(r){se(r).forEach(e=>_t(e))}function Ge(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===oe?t.setAttribute("type",oe):e===ae&&t.setAttribute(ae,""),t.async=!0),new Promise((n,i)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),i(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function ur(r){return b(r)?Ge(r):Promise.race(Pe.filter(e=>e in r).map(e=>Ge(r[e],e)))}function q(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ce(r){return typeof r=="object"&&!!r}function T(r){return typeof r=="function"}function b(r){return typeof r=="string"}function mt(r){const e=new Error(v(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const M=new class{};function dr(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function Je(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||dr(e))!==window.location.origin)return;const{pathname:i,search:s,hash:o}=e;q("go",{pathname:i,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const pr={activate(){window.document.addEventListener("click",Je)},inactivate(){window.document.removeEventListener("click",Je)}},fr=/Trident/.test(navigator.userAgent);fr&&!T(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ye(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;q("go",{pathname:e,search:t,hash:n})}const gr={activate(){window.addEventListener("popstate",Ye)},inactivate(){window.removeEventListener("popstate",Ye)}};var B=At,_r=Me,mr=$r,br=yt,vr=wt,bt="/",vt="./",yr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Me(r,e){for(var t=[],n=0,i=0,s="",o=e&&e.delimiter||bt,l=e&&e.delimiters||vt,a=!1,c;(c=yr.exec(r))!==null;){var h=c[0],u=c[1],d=c.index;if(s+=r.slice(i,d),i=d+h.length,u){s+=u[1],a=!0;continue}var p="",S=r[i],Lt=c[2],It=c[3],jt=c[4],Y=c[5];if(!a&&s.length){var be=s.length-1;l.indexOf(s[be])>-1&&(p=s[be],s=s.slice(0,be))}s&&(t.push(s),s="",a=!1);var Ht=p!==""&&S!==void 0&&S!==p,Bt=Y==="+"||Y==="*",Dt=Y==="?"||Y==="*",Le=p||o,Ie=It||jt;t.push({name:Lt||n++,prefix:p,delimiter:Le,optional:Dt,repeat:Bt,partial:Ht,pattern:Ie?wr(Ie):"[^"+$(Le)+"]+?"})}return(s||i<r.length)&&t.push(s+r.substr(i)),t}function $r(r,e){return yt(Me(r,e))}function yt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,i){for(var s="",o=i&&i.encode||encodeURIComponent,l=0;l<r.length;l++){var a=r[l];if(typeof a=="string"){s+=a;continue}var c=n?n[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(h=o(c[u],a),!e[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=o(String(c),a),!e[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function $(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function wr(r){return r.replace(/([=!:$/()])/g,"\\$1")}function $t(r){return r&&r.sensitive?"":"i"}function Ar(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Er(r,e,t){for(var n=[],i=0;i<r.length;i++)n.push(At(r[i],e,t).source);return new RegExp("(?:"+n.join("|")+")",$t(t))}function Pr(r,e,t){return wt(Me(r,t),e,t)}function wt(r,e,t){t=t||{};for(var n=t.strict,i=t.start!==!1,s=t.end!==!1,o=$(t.delimiter||bt),l=t.delimiters||vt,a=[].concat(t.endsWith||[]).map($).concat("$").join("|"),c=i?"^":"",h=r.length===0,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string")c+=$(d),h=u===r.length-1&&l.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+$(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?c+=$(d.prefix)+"("+p+")?":c+="(?:"+$(d.prefix)+"("+p+"))?":c+=$(d.prefix)+"("+p+")"}}return s?(n||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(n||(c+="(?:"+o+"(?="+a+"))?"),h||(c+="(?="+o+"|"+a+")")),new RegExp(c,$t(t))}function At(r,e,t){return r instanceof RegExp?Ar(r,e):Array.isArray(r)?Er(r,e,t):Pr(r,e,t)}B.parse=_r;B.compile=mr;B.tokensToFunction=br;B.tokensToRegExp=vr;const{hasOwnProperty:Sr}=Object.prototype,Se=new Map;Se.set("|false",{keys:[],pattern:/(?:)/});function Xe(r){try{return decodeURIComponent(r)}catch{return r}}function xr(r,e,t,n,i){t=!!t;const s=`${r}|${t}`;let o=Se.get(s);if(!o){const c=[];o={keys:c,pattern:B(r,c,{end:t,strict:r===""})},Se.set(s,o)}const l=o.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let c=1;c<l.length;c++){const h=o.keys[c-1],u=h.name,d=l[c];(d!==void 0||!Sr.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(Xe):[]:a[u]=d&&Xe(d))}return{path:l[0],keys:(n||[]).concat(o.keys),params:a}}function Et(r,e,t,n,i){let s,o,l=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=xr(a,e,!h,n,i),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;l<h.length;){if(!o){const d=h[l];d.parent=r;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Et(d,e.substr(p),t,s.keys,s.params)}const u=o.next(c);if(!u.done)return{done:!1,value:u.value};o=null,l++}return{done:!0}}}}function Rr(r){if(T(r.route.action))return r.route.action(r)}function Or(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Cr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Tr(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const i={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class Q{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Rr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Qe(e);const t=[...se(e)];this.root.__children=t}addRoutes(e){return Qe(e),this.root.__children.push(...se(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,b(e)?{pathname:e}:e),n=Et(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let s=null,o=null,l=t;function a(c,h=s.value.route,u){const d=u===null&&s.value.route;return s=o||n.next(d),o=null,!c&&(s.done||!Or(h,s.value.route))?(o=s,Promise.resolve(M)):s.done?Promise.reject(mt(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,s.value),Tr(l,s.value),Promise.resolve(i(l)).then(p=>p!=null&&p!==M?(l.result=p.result||p,l):a(c,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=Cr(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}Q.pathToRegexp=B;const{pathToRegexp:Ze}=Q,et=new Map;function Pt(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.parent=e,Pt(r,s,s.__children||s.children)}}function tt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function rt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ur(r,e={}){if(!(r instanceof Q))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,i)=>{let s=tt(t,n);if(!s&&(t.clear(),Pt(t,r.root,r.root.__children),s=tt(t,n),!s))throw new Error(`Route "${n}" not found`);let o=et.get(s.fullPath);if(!o){let a=rt(s),c=s.parent;for(;c;){const p=rt(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=Ze.parse(a),u=Ze.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)b(h[p])||(d[h[p].name]=!0);o={toPath:u,keys:d},et.set(a,o),s.fullPath=a}let l=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},c=Object.keys(i);for(let u=0;u<c.length;u++){const d=c[u];o.keys[d]||(a[d]=i[d])}const h=e.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let nt=[];function Mr(r){nt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),nt=r}const Nr=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Lr=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function it(r,e){return r.classList.add(e),new Promise(t=>{if(Nr(r)){const n=r.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Lr(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Ir=256;function Ee(r){return r!=null}function jr(r){const e=Object.assign({},r);return delete e.next,e}function m({pathname:r="",search:e="",hash:t="",chain:n=[],params:i={},redirectFrom:s,resolver:o},l){const a=n.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(c={})=>te(A.pathToRegexp.compile(St(a))(Object.assign({},i,c)),o)}}function st(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Hr(r,e){e.location=m(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function ee(r,e,t){if(T(r))return r.apply(t,e)}function ot(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return ee(t[r],e,t)}}function Br(r,e){if(!Array.isArray(r)&&!ce(r))throw new Error(v(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=se(r);for(let n=0;n<t.length;n++)_t(t[n]),e.__children.push(t[n])}function X(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function te(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function St(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class A extends Q{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&Q.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=A.NavigationTrigger;A.setTriggers.apply(A,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=m({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();T(t.children)&&(n=n.then(()=>t.children(jr(e))).then(s=>{!Ee(s)&&!T(t.children)&&(s=t.children),Br(s,t)}));const i={redirect:s=>st(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return ee(t.action,[e,i],t)}).then(s=>{if(Ee(s)&&(s instanceof HTMLElement||s.redirect||s===M))return s;if(b(t.redirect))return i.redirect(t.redirect);if(t.bundle)return ur(t.bundle).then(()=>{},()=>{throw new Error(v(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Ee(s))return s;if(b(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},b(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=m(s),t&&this.__updateBrowserHistory(s,n===1),q("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const l=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),l.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),X(this.__outlet&&this.__outlet.children),this.location=m(Object.assign(i,{resolver:this})),q("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,l=te(St(n.chain),n.resolver)===n.pathname,a=(c,h=c.route,u)=>c.next(void 0,h,u).then(d=>d===null||d===M?l?c:h.parent!==null?a(c,h.parent,d):d:d);return a(n).then(c=>{if(c===null||c===M)throw mt(s);return c&&c!==M&&c!==n?this.__fullyResolveChain(s,c):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Hr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(v(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${hr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),l=a=>st(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:l},i[a]),n[a].element.location=m(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=m(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:l},i[a]),i[a].element&&(i[a].element.location=m(e,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const s=m(t);return e.then(o=>{if(this.__isLatestRender(t))return ot("onBeforeLeave",[s,n,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,i){const s=m(t,i.route);return e.then(o=>{if(this.__isLatestRender(t))return ot("onBeforeEnter",[s,n,this],i.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Ir)throw new Error(v(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(v(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const s=t&&t.chain[i].element;if(s)if(s.parentNode===n)e.chain[i].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let i=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===n&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&X(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(X(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const s=m(e);ee(i.onAfterLeave,[s,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&X(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=m(e,e.chain[t].route);ee(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],s=e.chain;let o;for(let l=s.length;l>0;l--)if(s[l-1].route.animate){o=s[l-1].route.animate;break}if(t&&n&&o){const l=ce(o)&&o.leave||"leaving",a=ce(o)&&o.enter||"entering";i.push(it(t,l)),i.push(it(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;b(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){Mr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ur(this)),te(this.__urlForName(e,t),this)}urlForPath(e,t){return te(A.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=b(e)?this.__createUrl(e,"http://a"):e;return q("go",{pathname:t,search:n,hash:i})}}const Dr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,re=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function kr(){function r(){return!0}return xt(r)}function zr(){try{return Fr()?!0:qr()?re?!Vr():!kr():!1}catch{return!1}}function Fr(){return localStorage.getItem("vaadin.developmentmode.force")}function qr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Vr(){return!!(re&&Object.keys(re).map(e=>re[e]).filter(e=>e.productionMode).length>0)}function xt(r,e){if(typeof r!="function")return;const t=Dr.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const at=function(r,e){if(window.Vaadin.developmentMode)return xt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=zr());function Wr(){}const Kr=function(){if(typeof at=="function")return at(Wr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Kr();A.NavigationTrigger={POPSTATE:gr,CLICK:pr};const Qr=document.getElementById("outlet"),fe=new A(Qr);fe.setRoutes([{path:"/ai-bots/",children:[{path:"/",component:"home-component"},{path:"/poem",component:"poet-bot",title:"Poem Bot"},{path:"/notion",component:"notion-bot",title:"Notion Bot"},{path:"(.*)",component:"not-found",action:()=>console.debug("Not found",location.pathname)}]},{path:"(.*)",redirect:"/ai-bots/",action:()=>console.debug("Not found",location.pathname)}]);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(r,e,t){return r?e(r):t==null?void 0:t(r)}const Gr=H`
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
 */const Jr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yr=r=>(...e)=>({_$litDirective$:r,values:e});class Xr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xe extends Xr{constructor(e){if(super(e),this.it=f,e.type!==Jr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this._t=void 0,this.it=e;if(e===C)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}xe.directiveName="unsafeHTML",xe.resultType=1;const Zr=Yr(xe),en=H`
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
`;var tn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Ot=(r,e,t,n)=>{for(var i=n>1?void 0:n?rn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&tn(e,t,i),i};let le=class extends y{constructor(){super(...arguments),this.response=""}render(){return g`
      ${Rt(this.response.length>0,()=>g`<div id="botResponse">${Zr(this.response)}</div>`)}
    `}};le.styles=en;Ot([_({type:String})],le.prototype,"response",2);le=Ot([P("response-container")],le);var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Ne=(r,e,t,n)=>{for(var i=n>1?void 0:n?sn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&nn(e,t,i),i};let G=class extends y{constructor(){super(...arguments),this.name="",this.response=""}render(){return g`
      <h2 id="botName">${this.name}</h2>
      <div id="botContainer">
        <slot></slot>
        <response-container .response=${this.response}></response-container>
      </div>
    `}};G.styles=Gr;Ne([_({type:String})],G.prototype,"name",2);Ne([_({type:String})],G.prototype,"response",2);G=Ne([P("bot-container")],G);const ct={clientId:"428415279833-hfki5sa87n2pht2p0vd8pfiqi56qk7d2.apps.googleusercontent.com",scopes:"openid email profile"},on=H`
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
`;var an=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,ge=(r,e,t,n)=>{for(var i=n>1?void 0:n?cn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&an(e,t,i),i};let L=class extends y{constructor(){super(...arguments),this.name="Sign in",this.ms=!1,this.disabled=!1}render(){return g`
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
    `}};L.styles=on;ge([_({type:String})],L.prototype,"name",2);ge([_({type:Boolean})],L.prototype,"ms",2);ge([_({type:Boolean})],L.prototype,"disabled",2);L=ge([P("login-button")],L);var ln=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,Ct=(r,e,t,n)=>{for(var i=n>1?void 0:n?hn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ln(e,t,i),i};let Re=class extends y{constructor(){super(...arguments),this.name="Sign in with Google"}googleLogin(){const r=location.origin+location.pathname,e=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${ct.clientId}&redirect_uri=${r}&response_type=token&scope=${ct.scopes}`;window.location.href=e}render(){return g` <login-button .name=${this.name} @click=${this.googleLogin}>
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
    </login-button>`}};Ct([pe()],Re.prototype,"name",2);Re=Ct([P("signin-google")],Re);var un=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,Tt=(r,e,t,n)=>{for(var i=n>1?void 0:n?dn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&un(e,t,i),i};let Oe=class extends y{constructor(){super(...arguments),this.name="Logout"}render(){return g`
      <login-button
        .name=${this.name}
        @click="${()=>j.logout(location.origin+location.pathname)}"
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
    `}};Tt([pe()],Oe.prototype,"name",2);Oe=Tt([P("signout-button")],Oe);var pn=Object.defineProperty,fn=(r,e,t,n)=>{for(var i=void 0,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(e,t,i)||i);return i&&pn(e,t,i),i};const gn=r=>{class e extends r{constructor(...n){super(...n),this.isAuthenticated=!1,this.checkAuth=()=>{j.isAuthenticated().then(i=>{this.isAuthenticated=i,this.requestUpdate()})}}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.checkAuth()},0),window.addEventListener("storage",this.checkAuth)}}return fn([_({type:Boolean})],e.prototype,"isAuthenticated"),e};var _n=Object.defineProperty,Ut=(r,e,t,n)=>{for(var i=void 0,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(e,t,i)||i);return i&&_n(e,t,i),i};class _e extends gn(y){constructor(){super(...arguments),this.response="",this.apiUrl="https://function-app-ai-bots.azurewebsites.net/api",this.userQuestion={role:"user",content:""}}firstUpdated(){this.location=fe.location}displayResponse(e){this.response=e.choices[0].message.content,this.requestUpdate()}displayResponseString(e){this.response=e,this.requestUpdate()}displayResponseStream(e){this.response+=e,this.requestUpdate()}setTypingMessage(e){this.stopTypingMessage();let t=1;const n=4,i=()=>{const s=".".repeat(t),o=`<span class="invisible">${s}</span>`;this.displayResponseString(`${o}<i>${e}${s}</i>`),t=t%n+1};this.typingInterval=window.setInterval(i,500)}stopTypingMessage(){this.typingInterval&&(clearInterval(this.typingInterval),this.typingInterval=void 0)}async processStream(e){try{const n=e.body.getReader(),i=new TextDecoder,s=async()=>{for(;;){const{done:o,value:l}=await n.read();if(o)break;const a=i.decode(l,{stream:!0});a&&this.displayResponseStream(a)}n.releaseLock()};this.stopTypingMessage(),this.displayResponseString(""),await s()}catch(t){console.error("Error reading the stream:",t),this.stopTypingMessage(),this.displayResponseString("An error occurred while processing the stream. Please try again.")}}}Ut([_({type:String})],_e.prototype,"response");Ut([_({type:Object})],_e.prototype,"location");const mn=H`
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
`;var bn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,me=(r,e,t,n)=>{for(var i=n>1?void 0:n?vn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&bn(e,t,i),i};let I=class extends _e{constructor(){super(),this.name="Notion bot",this.question="",this.workspaceName="",this.response=""}async start(){if(this.userQuestion.content=this.question,!this.question){this.displayResponseString("Please enter a question.");return}this.setTypingMessage("Asking Notion bot"),await fetch(`${this.apiUrl}/notion?code=${j.getCode()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.question,workspace:this.workspaceName})}).then(async r=>{if(r.status!==200){this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.");return}await this.processStream(r)}).catch(r=>{console.error("Error fetching response:",r),this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again later.")})}renderWorkspace(){return g` <div id="workspace-input-container" ?hidden=${!this.isAuthenticated}>
      <label for="workspaceName">Workspace Name (Optional):</label>
      <input
        type="text"
        id="workspaceName"
        .value=${this.workspaceName}
        placeholder="MyWorkSpace"
        @input=${r=>this.workspaceName=r.target.value}
      />
    </div>`}renderQuestion(){return g` <div id="question-input-container">
      <label for="question-input">Your question:</label>
      <input
        type="text"
        id="question-input"
        .value=${this.question}
        placeholder="What's on my todo list?"
        @input=${r=>this.question=r.target.value}
      />
    </div>`}renderQuestionButton(){return g`<button ?disabled=${!this.question} @click="${this.start}">Ask Notion Bot</button>`}render(){return g`
      <bot-container .name=${this.name} .response=${this.response}>
        <div class="signin">
          <signin-google ?hidden=${this.isAuthenticated}></signin-google>
          <signout-button ?hidden=${!this.isAuthenticated}></signout-button>
        </div>

        ${Rt(this.isAuthenticated,()=>g`
            ${this.renderWorkspace()} ${this.renderQuestion()} ${this.renderQuestionButton()}
          `)}
      </bot-container>
    `}};I.styles=mn;me([_({type:String})],I.prototype,"name",2);me([pe()],I.prototype,"question",2);me([pe()],I.prototype,"workspaceName",2);I=me([P("notion-bot")],I);const yn=H`
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
`;var $n=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,Mt=(r,e,t,n)=>{for(var i=n>1?void 0:n?wn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&$n(e,t,i),i};let he=class extends _e{constructor(){super(),this.name="Poet bot",this.response=""}firstUpdated(){this.location=fe.location}async start(){try{this.userQuestion.content=await this.createPrompt(),this.setTypingMessage("Poet is typing");const r=await fetch(`${this.apiUrl}/poem`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.userQuestion.content})});if(r.status!==200){this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.");return}await this.processStream(r)}catch(r){console.error("Error in start method:",r),this.stopTypingMessage(),this.displayResponseString("An error occurred. Please try again.")}}async createPrompt(){return this.setTypingMessage("Generating subject"),(await fetch(`${this.apiUrl}/subject`)).text()}render(){return g`
      <bot-container .name=${this.name} .response=${this.response}>
        <button @click="${this.start}">Generate Poem</button>
        <p id="botQuestion">${this.userQuestion.content||"Subject will be generated..."}</p>
      </bot-container>
    `}};he.styles=yn;Mt([_({type:String})],he.prototype,"name",2);he=Mt([P("poet-bot")],he);const An=H`
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

  poet-bot {
    margin-top: 20px;
  }
`;var En=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,Nt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Pn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&En(e,t,i),i};let ue=class extends y{constructor(){super(),this.location=fe.location}render(){return g`
      <div>
        <h1>OpenAI API Bots</h1>
        <div>
          <a href="./">Home</a>
          <a href="./poem">Poem Bot</a>
          <a href="./notion">Notion Bot</a>
        </div>
      </div>
    `}};ue.styles=An;Nt([_({type:Object})],ue.prototype,"location",2);ue=Nt([P("my-menu")],ue);document.addEventListener("DOMContentLoaded",()=>{j.handleAuthResponse()});console.log(location.pathname);
