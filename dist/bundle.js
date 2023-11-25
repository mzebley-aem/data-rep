/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}}const s=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,u=globalThis,v=u.trustedTypes,f=v?v.emptyScript:"",m=u.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const a=o?.call(this);r.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...c(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(o?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[b("elementProperties")]=new Map,_[b("finalized")]=new Map,m?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,M="?"+S,z=`<${M}>`,C=document,T=()=>C.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,D="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,U=/>/g,N=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,L=/"/g,F=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),K=new WeakMap,V=C.createTreeWalker(C,129);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,o=[];let r,a=2===e?"<svg>":"",n=B;for(let e=0;e<i;e++){const i=t[e];let s,l,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===B?"!--"===l[1]?n=H:void 0!==l[1]?n=U:void 0!==l[2]?(F.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=r??B,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?N:'"'===l[3]?L:O):n===L||n===O?n=N:n===H||n===U?n=B:(n=N,r=void 0);const c=n===N&&t[e+1].startsWith("/>")?" ":"";a+=n===B?i+z:d>=0?(o.push(s),i.slice(0,d)+k+i.slice(d)+S+c):i+S+(-2===d?e:c)}return[W(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class J{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,a=0;const n=t.length-1,s=this.parts,[l,d]=q(t,e);if(this.el=J.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=V.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(k)){const e=d[a++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Y}),o.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:r}),o.removeAttribute(t));if(F.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),V.nextNode(),s.push({type:2,index:++r});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===M)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)s.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,o){if(e===j)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=P(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??C).importNode(e,!0);V.currentNode=o;let r=V.nextNode(),a=0,n=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new X(r,r.nextSibling,this,t):1===s.type?e=new s.ctor(r,s.name,s.strings,this,t):6===s.type&&(e=new ot(r,this,t)),this._$AV.push(e),s=i[++n]}a!==s?.index&&(r=V.nextNode(),a++)}return V.currentNode=C,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),P(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==G&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new J(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new X(this.k(T()),this.k(T()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,o){const r=this.strings;let a=!1;if(void 0===r)t=Z(this,t,e,0),a=!P(t)||t!==this._$AH&&t!==j,a&&(this._$AH=t);else{const o=t;let n,s;for(t=r[0],n=0;n<r.length-1;n++)s=Z(this,o[i+n],e,n),s===j&&(s=this._$AH[n]),a||=!P(s)||s!==this._$AH[n],s===G?t=G:t!==G&&(t+=(s??"")+r[n+1]),this._$AH[n]=s}a&&!o&&this.O(t)}O(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===G?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class it extends Y{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??G)===j)return;const i=this._$AH,o=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(J,X),(x.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new X(e.insertBefore(T(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=2;class lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class dt extends lt{constructor(t){if(super(t),this.et=G,t.type!==st)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===G||null==t)return this.vt=void 0,this.et=t;if(t===j)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}dt.directiveName="unsafeHTML",dt.resultType=1;const ht=(t=>(...e)=>({_$litDirective$:t,values:e}))(dt),ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},pt=(t=ct,e,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const ut=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,r)})`.action-bar{border-bottom:var(--dr-container-border-width) solid var(--dr-container-border-color);display:flex;flex-basis:100%;flex-wrap:wrap;gap:var(--dr-action-bar-gap);padding:var(--dr-action-bar-padding-y) var(--dr-action-bar-padding-x)}.action-bar button{align-items:center;background-color:unset;background:none;border:none;border-radius:var(--dr-action-button-border-radius);color:var(--dr-action-button-color);cursor:pointer;display:flex;font-family:var(--dr-action-button-font-family);font-size:var(--dr-action-button-font-size);font-weight:var(--dr-action-button-font-weight);gap:var(--dr-action-button-gap);line-height:1;min-height:44px;padding:var(--dr-action-button-padding-y) var(--dr-action-button-padding-x);transition:all .225s ease}.action-bar button:hover{background-color:var(--dr-action-button-hover-background)}.action-bar button svg{stroke-width:var(--dr-action-button-icon-stroke-width);flex-shrink:0;height:var(--dr-action-button-icon-size);width:var(--dr-action-button-icon-size)}.action-bar #active-toggle{stroke:var(--dr-container-background);fill:var(--dr-container-background)}.heading{font-family:var(--dr-heading-font-family);font-size:var(--dr-heading-font-size);font-weight:var(--dr-heading-font-weight);line-height:var(--dr-heading-line-height)}.heading,.insight,.total{margin:0;padding:0 var(--dr-padding-x)}.insight,.total{font-family:var(--dr-insight-font-family);font-size:var(--dr-insight-font-size);font-weight:var(--dr-insight-font-weight);line-height:var(--dr-insight-line-height)}.plain-language{background-color:var(--dr-plain-language-background);border-bottom:var(--dr-container-border-width) solid var(--dr-container-border-color);color:var(--dr-plain-language-color);font-family:var(--dr-plain-language-font-family);font-size:var(--dr-plain-language-font-size);font-weight:var(--dr-plain-language-font-weight);line-height:var(--dr-plain-language-line-height);margin:calc(var(--dr-container-gap)*-1) 0 0;padding:var(--dr-plain-language-padding-y) var(--dr-plain-language-padding-x)}ol{display:flex;flex-direction:column;gap:var(--dr-series-group-gap);list-style:none;padding:var(--dr-series-group-padding-y) var(--dr-series-group-padding-x)}ol,ul{margin:0}ul{padding:0}ol li{align-items:flex-start;font-family:var(--dr-series-item-font-family);gap:var(--dr-series-item-gap);width:100%}.content,ol li{display:flex;flex-direction:column}.content{gap:calc(var(--dr-series-item-gap)/2)}ol li .label{font-size:var(--dr-series-label-font-size);font-weight:var(--dr-series-label-font-weight);line-height:var(--dr-series-label-line-height);margin:0}ol li .definition{font-size:var(--dr-series-definition-font-size);font-weight:var(--dr-series-definition-font-weight);line-height:var(--dr-series-definition-line-height);margin:0}.bar-wrapper{display:flex;flex-direction:row;gap:var(--dr-series-item-gap);width:100%}.bar-wrapper .bar{background:var(--dr-series-item-background);border-radius:var(--dr-series-item-border-radius);flex:var(--dr-series-item-flex-amount);min-width:var(--dr-series-item-min-width)}.bar-wrapper .details{align-items:flex-start;display:flex;flex-direction:column;gap:calc(var(--dr-series-item-gap)/2)}.bar-wrapper .details .percentage{background-color:var(--dr-series-percentage-background);font-family:var(--dr-numeral-font-family);font-size:var(--dr-series-percentage-font-size);font-weight:var(--dr-series-percentage-font-weight);line-height:var(--dr-series-percentage-line-height);margin:0;padding:0 calc(var(--dr-series-item-gap)/2)}.bar-wrapper .details .value{font-family:var(--dr-numeral-font-family);font-size:var(--dr-series-value-font-size);font-weight:var(--dr-series-value-font-weight);line-height:var(--dr-series-value-line-height);margin:0}.modal{align-items:center;background-color:var(--dr-modal-background);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:var(--dr-modal-z-index)}.modal[hidden]{display:none}.modal-content{background-color:var(--dr-modal-content-background);border:var(--dr-modal-content-border-width) solid var(--dr-modal-content-border-color);border-radius:var(--dr-modal-content-border-radius);box-shadow:var(--dr-modal-content-box-shadow);color:var(--dr-modal-content-ink);display:flex;flex-direction:column;font-family:var(--dr-modal-content-font-family);font-size:var(--dr-modal-content-font-size);font-weight:var(--dr-modal-content-font-weight);gap:var(--dr-modal-content-gap);line-height:var(--dr-modal-content-line-height);max-height:var(--dr-modal-content-max-height);max-width:var(--dr-modal-content-max-width);min-width:var(--dr-modal-content-min-width);overflow:var(--dr-modal-content-overflow);padding:var(--dr-modal-content-padding-y) var(--dr-modal-content-padding-x);z-index:var(--dr-modal-content-z-index)}.modal-content button#closeModalButton{align-items:center;align-self:flex-end;background-color:var(--dr-modal-content-close-button-background);border:none;border-radius:var(--dr-modal-content-close-button-border-radius);color:var(--dr-modal-content-close-button-color);cursor:pointer;display:flex;font-family:var(--dr-modal-content-close-button-font-family);font-size:var(--dr-modal-content-close-button-font-size);font-weight:var(--dr-modal-content-close-button-font-weight);gap:var(--dr-modal-content-close-button-gap);line-height:1;margin-bottom:calc(var(--dr-modal-content-gap)*-1);min-height:44px;padding:var(--dr-modal-content-close-button-padding-y) var(--dr-modal-content-close-button-padding-x);transition:all .225s ease}.modal-content button#closeModalButton svg{stroke-width:var(--dr-modal-content-close-button-icon-stroke-width);flex-shrink:0;height:var(--dr-modal-content-close-button-icon-size);width:var(--dr-modal-content-close-button-icon-size)}.modal-content button#closeModalButton:hover{background-color:var(--dr-modal-content-close-button-hover-background);color:var(--dr-modal-content-close-button-hover-color)}.modal-content p.description{margin:0;max-width:60ch}#dataModalTitle{color:var(--dr-modal-heading-ink);font-size:var(--dr-modal-content-heading-font-size);font-weight:var(--dr-modal-content-heading-font-weight);line-height:var(--dr-modal-content-heading-line-height);margin:0}.data-table{background-color:var(--dr-table-background);border:var(--dr-table-border-width) solid var(--dr-table-border-color);border-radius:var(--dr-table-border-radius);color:var(--dr-table-ink);display:flex;flex-direction:column;font-family:var(--dr-table-font-family);font-size:var(--dr-table-font-size);font-weight:var(--dr-table-font-weight);gap:var(--dr-table-row-gap);line-height:var(--dr-table-line-height)}.data-table .flex-row{align-items:center;border-bottom:var(--dr-table-border-width) solid var(--dr-table-border-color);display:flex;flex:1;flex-direction:row;gap:var(--dr-table-col-gap)}.data-table .flex-row:nth-child(odd){background-color:var(--dr-table-stripe-background);color:var(--dr-table-stripe-ink)}.data-table .flex-row:last-child{border-bottom:none}.data-table .flex-row.header-row{background-color:var(--dr-table-header-background);border-radius:calc(var(--dr-table-border-radius) - var(--dr-table-border-width)) calc(var(--dr-table-border-radius) - var(--dr-table-border-width)) 0 0;color:var(--dr-table-header-ink);font-size:var(--dr-table-header-font-size);font-weight:var(--dr-table-header-font-weight);line-height:var(--dr-table-header-line-height)}.data-table .flex-row.footer-row{background-color:var(--dr-table-footer-background);border-radius:0 0 calc(var(--dr-table-border-radius) - var(--dr-table-border-width)) calc(var(--dr-table-border-radius) - var(--dr-table-border-width));color:var(--dr-table-footer-ink);font-size:var(--dr-table-footer-font-size);font-weight:var(--dr-table-footer-font-weight);justify-content:flex-end;line-height:var(--dr-table-footer-line-height);padding:var(--dr-table-footer-padding-y) var(--dr-table-footer-padding-x)}.data-table .flex-row.footer-row strong{font-family:var(--dr-table-numeral-font-family)}.data-table .th{padding:var(--dr-table-header-padding-y) var(--dr-table-header-padding-x)}.data-table .td{padding:var(--dr-table-cell-padding-y) var(--dr-table-cell-padding-x)}.data-table .td.label,.data-table .th.label{flex:1;flex-basis:60%}.data-table .td.percentage,.data-table .th.percentage{flex-basis:12%;text-align:right}.data-table .td.percentage{font-family:var(--dr-table-numeral-font-family)}.data-table .td.value,.data-table .th.value{flex-basis:28%;text-align:right}.data-table .td.value{font-family:var(--dr-table-numeral-font-family)}:host{display:inline-block}article{background:var(--dr-container-background);border:var(--dr-container-border-width) solid var(--dr-container-border-color);border-radius:var(--dr-container-border-radius);color:var(--dr-container-ink);display:flex;flex-direction:column;gap:var(--dr-container-gap);margin:var(--dr-container-margin-y) var(--dr-container-margin-x);max-width:var(--dr-container-max-width);padding:var(--dr-padding-y) 0}
/*# sourceMappingURL=index.css.map */`;let vt=class extends at{constructor(){super(),this.header="Title",this.insight="Insights",this.data=[],this.useH1=!1,this.explanationMaxCount=5,this.localization=void 0,this.total=0,this.showExplanation=!1,this.explanation="",this.showGlossaryBtn=!1,this.showGlossary=!1,this.previouslyFocusedElement=null,this.firstFocusableElement=null,this.lastFocusableElement=null,this.focusableElementsString='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',this.handleTabFromPanel=t=>{const e=this.shadowRoot.getElementById("glossarySwitchDisability"),i=this.shadowRoot.getElementById("explainSwitchDisability");"Tab"!==t.key||t.shiftKey?"Tab"===t.key&&t.shiftKey&&(t.preventDefault(),i.focus()):(t.preventDefault(),e.focus())},this.handleTabFromPlainLanguageBtn=t=>{const e=this.shadowRoot.getElementById("explainRegionDisability");"Tab"!==t.key||t.shiftKey||(t.preventDefault(),e.focus())},this.handleTabFromGlossaryBtn=t=>{const e=this.shadowRoot.getElementById("explainRegionDisability");"Tab"===t.key&&t.shiftKey&&(t.preventDefault(),e.focus())},this.trapTabKey=t=>{"Tab"===t.key?t.shiftKey?document.activeElement===this.firstFocusableElement&&(t.preventDefault(),this.lastFocusableElement.focus()):document.activeElement===this.lastFocusableElement&&(t.preventDefault(),this.firstFocusableElement.focus()):"Escape"===t.key&&this.closeModal()},this.showGlossaryBtn=!1,this.showGlossary=!1,this.showExplanation=!1,this.total=0,this.useH1=!1,this.localization=void 0,document.addEventListener("keydown",(t=>{"Escape"===t.key&&this.closeModal()}))}render(){if(this.data.length){this.data[0].definition&&(this.showGlossaryBtn=!0),this.generateExplanation(),this.total=this.data.reduce(((t,e)=>t+e.value),0);const t=this.data.reduce(((t,e)=>Math.max(t,e.value)),this.data[0].value);this.data=this.data.map((e=>(e.percentage=e.value/this.total*100,e.largest=e.value===t,e.flexAmount=e.value/t,e))),this.data.sort(((t,e)=>e.value-t.value))}return I`
      <article>
        ${this.useH1?I`<h1 class="heading">${this.header}</h1>`:I`<h2 class="heading">${this.header}</h2>`}
        <p class="insight">
          ${this.isHtml(this.insight)?ht(this.insight):this.insight}
        </p>
        <div class="action-bar">
          <button
            @click=${this.togglePlainLanguage}
            id="explainSwitchDisability"
            aria-pressed="false"
            aria-controls="explainRegionDisability"
          >
            ${this.showExplanation?I`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-toggle-right"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                  ></path>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                    id="active-toggle"
                  ></path>
                </svg>`:I`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-toggle-left"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path
                    d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                  ></path>
                </svg>`}
            <label for="explainSwitchDisability">Explain</label>
          </button>
          <button
          @click=${this.toggleGlossary}
          id="glossarySwitchDisability"
          aria-pressed="false"
          hidden="${!this.showGlossaryBtn}"
        >
          ${this.showGlossary?I`<svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-toggle-right"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                ></path>
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                ></path>
                <path
                  d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                  id="active-toggle"
                ></path>
              </svg>`:I`<svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-toggle-left"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                ></path>
                <path
                  d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                ></path>
                <path
                  d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                ></path>
              </svg>`}
              <label for="glossarySwitchDisability">Glossary</label>
        </button>
          <button id="data-modal-button" @click=${this.openDataModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-table"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"
              ></path>
              <path d="M3 10h18"></path>
              <path d="M10 3v18"></path>
            </svg>
            Data
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-share-3"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"
              ></path>
            </svg>
            Share
          </button>
        </div>
        <div
          class="plain-language"
          id="explainRegionDisability"
          aria-expanded="false"
          tabindex="-1"
          hidden="true"
        >
          ${ht(this.explanation??"Error generating plain language summary.")}
        </div>
        <ol>
          ${this.data?this.data.map((t=>I`
                  <li tabindex="0">
                    <div class="content">
                      <p class="label">${t.label}</p>
                      <p class="definition" aria-expanded="false" hidden="true">
                        ${ht(t.definition??"Not defined.")}
                      </p>
                    </div>
                    <div class="bar-wrapper">
                      <div
                        class="bar"
                        style="--dr-series-item-flex-amount:${t.flexAmount}"
                      ></div>
                      <ul class="details">
                        <li class="percentage">
                          ${t.percentage?t.percentage.toLocaleString(this.localization,{minimumFractionDigits:2,maximumFractionDigits:2}):0}%
                        </li>
                        <li class="value">
                          ${t.value.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}
                        </li>
                      </ul>
                    </div>
                  </li>
                `)):null}
        </ol>
        <p class="total">
          Total:
          <strong
            >${this.total.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}</strong
          >
        </p>
      </article>
      <section
        id="data-modal"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dataModalTitle"
        hidden
      >
        <div class="modal-content" role="document">
          <button id="closeModalButton" @click=${this.closeModal}>
            Close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <h2 id="dataModalTitle">${this.header??"Title"}</h2>
          <p class="description">${ht(this.insight??"Insights")}</p>
          <div
            class="data-table"
            role="table"
            aria-label="Descriptive Table Name"
          >
            <div role="row" class="flex-row header-row">
              <div role="columnheader" class="th label">Label</div>
              <div role="columnheader" class="th percentage">%</div>
              <div role="columnheader" class="th value">Value</div>
            </div>
            ${this.data?this.data.map((t=>I` <div role="row" class="flex-row">
                    <div role="cell" class="td label">${t.label}</div>
                    <div role="cell" class="td percentage">
                      ${t.percentage?t.percentage.toLocaleString(this.localization,{minimumFractionDigits:2,maximumFractionDigits:2}):0}%
                    </div>
                    <div role="cell" class="td value">
                      <strong
                        >${t.value.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}</strong
                      >
                    </div>
                  </div>`)):null}
            <div role="row" class="flex-row footer-row">
              <div role="tablefooter" class="tf">
                Total:
                <strong
                  >${this.total.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}</strong
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    `}isHtml(t){if(!t)return!1;const e=(new DOMParser).parseFromString(t,"text/html");return Array.from(e.body.childNodes).some((t=>1===t.nodeType))}generateExplanation(){const t=this.data.slice(0,this.explanationMaxCount).map((t=>{const e=(t.value/this.data.reduce(((t,e)=>t+e.value),0)*100).toFixed(2);return`${t.label} (${e}%)`}));let e="In the reported data, ";if(t.length>2){e+=`${t.slice(0,-1).join(", ")}, and ${t[t.length-1]}`}else 2===t.length?e+=`${t[0]} and ${t[1]}`:1===t.length&&(e+=`${t[0]}`);t.length>0?e+=" represent the top categories.":e+="No data available.",this.explanation=e}togglePlainLanguage(){this.showExplanation=!this.showExplanation;const t=this.shadowRoot.getElementById("glossarySwitchDisability"),e=this.shadowRoot.getElementById("explainSwitchDisability"),i=this.shadowRoot.getElementById("explainRegionDisability");e.setAttribute("aria-pressed",this.showExplanation.toString()),i.setAttribute("aria-expanded",this.showExplanation.toString()),i.hidden=!this.showExplanation,this.showExplanation?(i.addEventListener("keydown",this.handleTabFromPanel),e.addEventListener("keydown",this.handleTabFromPlainLanguageBtn),t.addEventListener("keydown",this.handleTabFromGlossaryBtn)):(e.focus(),i.removeEventListener("keydown",this.handleTabFromPanel),e.removeEventListener("keydown",this.handleTabFromPlainLanguageBtn),t.removeEventListener("keydown",this.handleTabFromGlossaryBtn))}toggleGlossary(){this.showGlossary=!this.showGlossary;this.shadowRoot.getElementById("glossarySwitchDisability").setAttribute("aria-pressed",this.showGlossary.toString());this.shadowRoot.querySelectorAll(".definition").forEach((t=>{t.setAttribute("aria-expanded",this.showGlossary.toString()),t.hidden=!this.showGlossary}))}openDataModal(){this.previouslyFocusedElement=this.shadowRoot.activeElement;const t=this.shadowRoot.getElementById("data-modal"),e=this.shadowRoot.getElementById("closeModalButton");t.hidden=!1;let i=t.querySelectorAll(this.focusableElementsString);this.firstFocusableElement=i[0],this.lastFocusableElement=i[i.length-1],e.focus(),t.addEventListener("keydown",this.trapTabKey)}closeModal(){const t=this.shadowRoot.getElementById("data-modal");t.hidden=!0,this.previouslyFocusedElement.focus(),t.removeEventListener("keydown",this.trapTabKey)}};vt.styles=[ut],t([gt(),e("design:type",String)],vt.prototype,"header",void 0),t([gt(),e("design:type",String)],vt.prototype,"insight",void 0),t([gt({converter:t=>t?JSON.parse(t):console.error("No data provided, or data is in an unrecognized format.")}),e("design:type",Array)],vt.prototype,"data",void 0),t([gt({type:Boolean}),e("design:type",Boolean)],vt.prototype,"useH1",void 0),t([gt(),e("design:type",Number)],vt.prototype,"explanationMaxCount",void 0),t([gt(),e("design:type",String)],vt.prototype,"localization",void 0),t([gt(),e("design:type",Boolean)],vt.prototype,"showExplanation",void 0),t([gt(),e("design:type",Boolean)],vt.prototype,"showGlossaryBtn",void 0),t([gt(),e("design:type",Boolean)],vt.prototype,"showGlossary",void 0),vt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */("data-rep"),e("design:paramtypes",[])],vt);export{vt as DataRep};
//# sourceMappingURL=bundle.js.map
