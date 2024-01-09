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
function t(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,a))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,f=g.trustedTypes,m=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:a}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const o=r?.call(this);a.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),a=i.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=r,this[r]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,r=!1,a){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(r?a:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,b?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,A=_.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,S="?"+P,z=`<${S}>`,I=document,C=()=>I.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,L=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,B=/"/g,F=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),G=new WeakMap,V=I.createTreeWalker(I,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,r=[];let a,o=2===e?"<svg>":"",n=R;for(let s=0;s<i;s++){const e=t[s];let i,l,d=-1,c=0;for(;c<e.length&&(n.lastIndex=c,l=n.exec(e),null!==l);)c=n.lastIndex,n===R?"!--"===l[1]?n=q:void 0!==l[1]?n=L:void 0!==l[2]?(F.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=a??R,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,i=l[1],n=void 0===l[3]?D:'"'===l[3]?B:H):n===B||n===H?n=D:n===q||n===L?n=R:(n=D,a=void 0);const h=n===D&&t[s+1].startsWith("/>")?" ":"";o+=n===R?e+z:d>=0?(r.push(i),e.slice(0,d)+E+e.slice(d)+P+h):e+P+(-2===d?s:h)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class J{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let a=0,o=0;const n=t.length-1,s=this.parts,[l,d]=W(t,e);if(this.el=J.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=V.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=d[o++],i=r.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Y}),r.removeAttribute(t)}else t.startsWith(P)&&(s.push({type:6,index:a}),r.removeAttribute(t));if(F.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],C()),V.nextNode(),s.push({type:2,index:++a});r.append(t[e],C())}}}else if(8===r.nodeType)if(r.data===S)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)s.push({type:7,index:a}),t+=P.length-1}a++}}static createElement(t,e){const i=I.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,r){if(e===O)return e;let a=void 0!==r?i._$Co?.[r]:i._$Cl;const o=T(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=a:i._$Cl=a),void 0!==a&&(e=Z(t,a._$AS(t,e.values),a,r)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??I).importNode(e,!0);V.currentNode=r;let a=V.nextNode(),o=0,n=0,s=i[0];for(;void 0!==s;){if(o===s.index){let e;2===s.type?e=new Q(a,a.nextSibling,this,t):1===s.type?e=new s.ctor(a,s.name,s.strings,this,t):6===s.type&&(e=new rt(a,this,t)),this._$AV.push(e),s=i[++n]}o!==s?.index&&(a=V.nextNode(),o++)}return V.currentNode=I,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),T(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==O&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(I.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new X(r,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new J(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const a of t)r===e.length?e.push(i=new Q(this.k(C()),this.k(C()),this,this.options)):i=e[r],i._$AI(a),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(t,e=this,i,r){const a=this.strings;let o=!1;if(void 0===a)t=Z(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const r=t;let n,s;for(t=a[0],n=0;n<a.length-1;n++)s=Z(this,r[i+n],e,n),s===O&&(s=this._$AH[n]),o||=!T(s)||s!==this._$AH[n],s===j?t=j:t!==j&&(t+=(s??"")+a[n+1]),this._$AH[n]=s}o&&!r&&this.O(t)}O(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===j?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class it extends Y{constructor(t,e,i,r,a){super(t,e,i,r,a),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??j)===O)return;const i=this._$AH,r=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==j&&(i===j||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=_.litHtmlPolyfillSupport;at?.(J,Q),(_.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let a=r._$litPart$;if(void 0===a){const t=i?.renderBefore??null;r._$litPart$=a=new Q(e.insertBefore(C(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.2");
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
 */class dt extends lt{constructor(t){if(super(t),this.et=j,t.type!==st)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===j||null==t)return this.vt=void 0,this.et=t;if(t===O)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}dt.directiveName="unsafeHTML",dt.resultType=1;const ct=(t=>(...e)=>({_$litDirective$:t,values:e}))(dt),ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},ut=(t=ht,e,i)=>{const{kind:r,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,a,t)},init(e){return void 0!==e&&this.C(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const a=this[r];e.call(this,i),this.requestUpdate(r,a,t)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const gt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new n(i,t,a)})`.action-bar{border-bottom:var(--dr-container-border-width) solid var(--dr-container-border-color);display:flex;flex-basis:100%;padding:var(--dr-action-bar-padding-y) var(--dr-action-bar-padding-x)}.action-bar ul{display:flex;flex-wrap:wrap;gap:var(--dr-action-bar-gap);margin:0;padding:0}.action-bar input[type=checkbox]{clip:rect(1px,1px,1px,1px);border:0!important;height:44px;left:0;line-height:44px;margin:0;overflow:hidden;padding:0;position:absolute;width:1px}.action-bar input[type=checkbox]:checked+.toggle-track{background-color:var(--dr-action-bar-toggle-track-active-background);border-color:var(--dr-action-bar-toggle-track-active-border-color)}.action-bar input[type=checkbox]:checked+.toggle-track .toggle-indicator{transform:translateX(calc(var(--dr-action-bar-toggle-indicator-size)*2 - var(--dr-action-bar-toggle-indicator-size) - var(--dr-action-bar-toggle-track-border-width)*2))}.action-bar input[type=checkbox]:checked+.toggle-track .toggle-indicator .check-mark{opacity:1;transition:opacity .25s ease-in-out}.action-bar li{display:flex}.action-bar .action-item,.action-bar button{align-items:center;background-color:var(--dr-action-bar-item-background);background:none;border:none;border-radius:var(--dr-action-bar-item-border-radius);color:var(--dr-action-bar-button-color);cursor:pointer;display:flex;font-family:var(--dr-action-bar-item-font-family);font-size:var(--dr-action-bar-item-font-size);font-weight:var(--dr-action-bar-item-font-weight);gap:var(--dr-action-bar-item-gap);line-height:1;min-height:44px;padding:var(--dr-action-bar-item-padding-y) var(--dr-action-bar-item-padding-x);transition:all .225s ease}.action-bar .action-item:hover,.action-bar button:hover{background-color:var(--dr-action-bar-item-hover-background)}.action-bar .action-item:focus,.action-bar button:focus{outline-offset:var(--dr-action-bar-item-outline-offset)}.action-bar .action-item[disabled],.action-bar button[disabled]{background-color:#d3d3d3;color:gray;cursor:not-allowed}.action-bar button svg{stroke-width:var(--dr-action-bar-button-icon-stroke-width);flex-shrink:0;height:var(--dr-action-bar-button-icon-size);width:var(--dr-action-bar-button-icon-size)}.action-bar .action-item label{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;gap:var(--dr-action-bar-item-gap)}.action-bar .action-item .toggle-track{background-color:var(--dr-action-bar-toggle-track-background);border:var(--dr-action-bar-toggle-track-border-width) solid var(--dr-action-bar-toggle-track-border-color);border-radius:var(--dr-action-bar-toggle-track-border-radius);cursor:pointer;display:flex;height:calc(var(--dr-action-bar-toggle-indicator-size) + var(--dr-action-bar-toggle-track-border-width)*2);margin-right:var(--dr-action-bar-item-gap);position:relative;transition:all .25s ease-in-out;width:calc(var(--dr-action-bar-toggle-indicator-size)*2)}.action-bar .action-item .toggle-indicator{align-items:center;background:var(--dr-action-bar-toggle-indicator-background);border-radius:var(--dr-action-bar-toggle-indicator-border-radius);bottom:var(--dr-action-bar-toggle-track-border-width);display:flex;height:var(--dr-action-bar-toggle-indicator-size);justify-content:center;left:var(--dr-action-bar-toggle-track-border-width);position:absolute;transition:all .25s ease-in-out;width:var(--dr-action-bar-toggle-indicator-size)}.action-bar .action-item .check-mark{fill:var(--dr-action-bar-toggle-track-active-background);height:calc(var(--dr-action-bar-toggle-indicator-size)*.675);opacity:0;transition:opacity .25s ease-in-out;width:calc(var(--dr-action-bar-toggle-indicator-size)*.675)}.action-bar .action-item:focus-within{outline:var(--dr-focus-outline-width) solid var(--dr-focus-outline-color);outline-offset:var(--dr-action-bar-item-outline-offset);z-index:3}.action-bar .action-item>input:focus{outline-width:0}.title{font-family:var(--dr-title-font-family);font-size:var(--dr-title-font-size);font-weight:var(--dr-title-font-weight);line-height:var(--dr-title-line-height)}.insight,.title,.total{margin:0;padding:0 var(--dr-padding-x)}.insight,.total{font-family:var(--dr-insight-font-family);font-size:var(--dr-insight-font-size);font-weight:var(--dr-insight-font-weight);line-height:var(--dr-insight-line-height)}.plain-language{background-color:var(--dr-plain-language-background);border-bottom:var(--dr-container-border-width) solid var(--dr-container-border-color);color:var(--dr-plain-language-color);font-family:var(--dr-plain-language-font-family);font-size:var(--dr-plain-language-font-size);font-weight:var(--dr-plain-language-font-weight);line-height:var(--dr-plain-language-line-height);margin:calc(var(--dr-container-gap)*-1) 0 0;padding:var(--dr-plain-language-padding-y) var(--dr-plain-language-padding-x)}.plain-language h3{font-family:var(--dr-plain-language-title-font-family);font-size:var(--dr-plain-language-title-font-size);font-weight:var(--dr-plain-language-title-font-weight);line-height:var(--dr-plain-language-title-line-height);margin:0 0 var(--dr-container-gap)}ol.series{gap:var(--dr-series-group-gap);list-style:none;margin:0;padding:var(--dr-series-group-padding-y) var(--dr-series-group-padding-x)}ol.series,ol.series li{display:flex;flex-direction:column}ol.series li{align-items:flex-start;font-family:var(--dr-series-item-font-family);gap:var(--dr-series-item-gap);width:100%}ol.series li .label{font-size:var(--dr-series-label-font-size);font-weight:var(--dr-series-label-font-weight);line-height:var(--dr-series-label-line-height);margin:0}ol.series li .definition{font-size:var(--dr-series-definition-font-size);font-weight:var(--dr-series-definition-font-weight);line-height:var(--dr-series-definition-line-height);margin:0}ol.series li .bar-wrapper{display:flex;flex-direction:row;gap:var(--dr-series-item-gap);width:100%}ol.series li .bar-wrapper .bar{background:var(--dr-series-item-background);border-radius:var(--dr-series-item-border-radius);flex:var(--dr-series-item-flex-amount);min-width:var(--dr-series-item-min-width)}ol.series li .bar-wrapper .details{align-items:flex-start;display:flex;flex-direction:column;gap:calc(var(--dr-series-item-gap)/2)}ol.series li .bar-wrapper .details .percentage{background-color:var(--dr-series-percentage-background);font-family:var(--dr-numeral-font-family);font-size:var(--dr-series-percentage-font-size);font-weight:var(--dr-series-percentage-font-weight);line-height:var(--dr-series-percentage-line-height);margin:0;padding:0 calc(var(--dr-series-item-gap)/2)}ol.series li .bar-wrapper .details .value{font-family:var(--dr-numeral-font-family);font-size:var(--dr-series-value-font-size);font-weight:var(--dr-series-value-font-weight);line-height:var(--dr-series-value-line-height);margin:0}ol.series .content{display:flex;flex-direction:column;gap:calc(var(--dr-series-item-gap)/2)}ul{margin:0;padding:0}.modal{align-items:center;background-color:var(--dr-modal-background);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:var(--dr-modal-z-index)}.modal :focus,.modal :focus-visible{outline:var(--dr-focus-outline-width) solid var(--dr-focus-outline-color);outline-offset:var(--dr-focus-outline-offset);z-index:3}.modal[hidden]{display:none}.modal .dismisal{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;z-index:1}.modal-content{background-color:var(--dr-modal-content-background);border:var(--dr-modal-content-border-width) solid var(--dr-modal-content-border-color);border-radius:var(--dr-modal-content-border-radius);box-shadow:var(--dr-modal-content-box-shadow);color:var(--dr-modal-content-ink);display:flex;flex-direction:column;font-family:var(--dr-modal-content-font-family);font-size:var(--dr-modal-content-font-size);font-weight:var(--dr-modal-content-font-weight);gap:var(--dr-modal-content-gap);line-height:var(--dr-modal-content-line-height);max-height:var(--dr-modal-content-max-height);max-width:var(--dr-modal-content-max-width);min-width:var(--dr-modal-content-min-width);overflow:var(--dr-modal-content-overflow);padding:var(--dr-modal-content-padding-y) var(--dr-modal-content-padding-x);position:relative;z-index:var(--dr-modal-content-z-index);z-index:1}.modal-content button.close-modal{align-items:center;align-self:flex-end;background-color:var(--dr-modal-close-button-background);border:none;border-radius:var(--dr-modal-close-button-border-radius);color:var(--dr-modal-close-button-color);cursor:pointer;display:flex;font-family:var(--dr-modal-close-button-font-family);font-size:var(--dr-modal-close-button-font-size);font-weight:var(--dr-modal-close-button-font-weight);gap:var(--dr-modal-close-button-gap);line-height:1;margin-bottom:calc(var(--dr-modal-content-gap)*-1);min-height:44px;padding:var(--dr-modal-close-button-padding-y) var(--dr-modal-close-button-padding-x);transition:all .225s ease}.modal-content button.close-modal svg{stroke-width:var(--dr-modal-close-button-icon-stroke-width);flex-shrink:0;height:var(--dr-modal-close-button-icon-size);width:var(--dr-modal-close-button-icon-size)}.modal-content button.close-modal:hover{background-color:var(--dr-modal-close-button-hover-background);color:var(--dr-modal-close-button-hover-color)}.modal-content p.description{margin:0;max-width:60ch}.modal-content .modal-title{color:var(--dr-modal-heading-ink);font-size:var(--dr-modal-heading-font-size);font-weight:var(--dr-modal-heading-font-weight);line-height:var(--dr-modal-heading-line-height);margin:0}.data-table{background-color:var(--dr-table-background);border:var(--dr-table-border-width) solid var(--dr-table-border-color);border-collapse:collapse;border-radius:var(--dr-table-border-radius);color:var(--dr-table-ink);font-family:var(--dr-table-font-family);font-size:var(--dr-table-font-size);font-weight:var(--dr-table-font-weight);line-height:var(--dr-table-line-height);width:100%}.data-table td,.data-table th{border-bottom:var(--dr-table-border-width) solid var(--dr-table-border-color);padding:var(--dr-table-cell-padding-y) var(--dr-table-cell-padding-x);text-align:left}.data-table th{background-color:var(--dr-table-header-background);color:var(--dr-table-header-ink);font-size:var(--dr-table-header-font-size);font-weight:var(--dr-table-header-font-weight)}.data-table tr:nth-child(odd):not(.footer-row){background-color:var(--dr-table-stripe-background)}.data-table tr:last-child td{border-bottom:none}.data-table tr:focus{z-index:99}.data-table .label{flex-basis:60%}.data-table .percentage{flex-basis:12%}.data-table .percentage,.data-table .value{font-family:var(--dr-table-numeral-font-family)}.data-table .value{flex-basis:28%;text-align:right}.data-table tfoot tr{background-color:var(--dr-table-footer-background);color:var(--dr-table-footer-ink);font-size:var(--dr-table-footer-font-size);font-weight:var(--dr-table-footer-font-weight)}.data-table tfoot tr strong{font-family:var(--dr-table-numeral-font-family)}:host{display:inline-block}article.data-rep-wrapper{background:var(--dr-container-background);border:var(--dr-container-border-width) solid var(--dr-container-border-color);border-radius:var(--dr-container-border-radius);color:var(--dr-container-ink);display:flex;flex-direction:column;gap:var(--dr-container-gap);margin:var(--dr-container-margin-y) var(--dr-container-margin-x);max-width:var(--dr-container-max-width);padding:var(--dr-padding-y) 0}article.data-rep-wrapper :focus,article.data-rep-wrapper :focus-visible{outline:var(--dr-focus-outline-width) solid var(--dr-focus-outline-color);outline-offset:var(--dr-focus-outline-offset);z-index:3}
/*# sourceMappingURL=index.css.map */`;let ft;const mt=new Uint8Array(16);function bt(){if(!ft&&(ft="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ft))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ft(mt)}const vt=[];for(let xt=0;xt<256;++xt)vt.push((xt+256).toString(16).slice(1));var yt={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function $t(t,e,i){if(yt.randomUUID&&!e&&!t)return yt.randomUUID();const r=(t=t||{}).random||(t.rng||bt)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){i=i||0;for(let t=0;t<16;++t)e[i+t]=r[t];return e}return function(t,e=0){return vt[t[e+0]]+vt[t[e+1]]+vt[t[e+2]]+vt[t[e+3]]+"-"+vt[t[e+4]]+vt[t[e+5]]+"-"+vt[t[e+6]]+vt[t[e+7]]+"-"+vt[t[e+8]]+vt[t[e+9]]+"-"+vt[t[e+10]]+vt[t[e+11]]+vt[t[e+12]]+vt[t[e+13]]+vt[t[e+14]]+vt[t[e+15]]}(r)}let wt=class extends ot{constructor(){super(),this.uniqueIdPrefix="",this.header="Title",this.insight="Insights",this.data=[],this.useH1=!1,this.explanationMaxCount=5,this.localization=void 0,this.total=0,this.showExplanation=!1,this.explanation="",this.showGlossaryBtn=!1,this.showGlossary=!1,this.previouslyFocusedElement=null,this.firstFocusableElement=null,this.lastFocusableElement=null,this.focusableElementsString='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], li[tabindex="0"], li[tabindex="-1"], tr[tabindex="0"], tr[tabindex="-1"]',this.definitionIdsString="",this.handleTabFromPanel=t=>{const e=this.shadowRoot.getElementById(this.uniqueIdPrefix+"glossary-switch"),i=this.shadowRoot.getElementById(this.uniqueIdPrefix+"explanation-switch");"Tab"!==t.key||t.shiftKey?"Tab"===t.key&&t.shiftKey&&(t.preventDefault(),i.focus()):(t.preventDefault(),e.focus())},this.handleTabFromPlainLanguageBtn=t=>{const e=this.shadowRoot.getElementById(this.uniqueIdPrefix+"explanation-region");"Tab"!==t.key||t.shiftKey||(t.preventDefault(),e.focus())},this.handleTabFromGlossaryBtn=t=>{const e=this.shadowRoot.getElementById(this.uniqueIdPrefix+"explanation-region");"Tab"===t.key&&t.shiftKey&&(t.preventDefault(),e.focus())},this.getDeepActiveElement=()=>{let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t},this.trapTabKey=t=>{const e=this.getDeepActiveElement();"Tab"===t.key?t.shiftKey?e===this.firstFocusableElement&&(t.preventDefault(),this.lastFocusableElement.focus()):e===this.lastFocusableElement&&(t.preventDefault(),this.firstFocusableElement.focus()):"Escape"===t.key&&this.closeModal()},this.togglePlainLanguage=this.togglePlainLanguage.bind(this),this.toggleGlossary=this.toggleGlossary.bind(this),this.uniqueIdPrefix=$t().slice(0,9),this.showGlossaryBtn=!1,this.showGlossary=!1,this.showExplanation=!1,this.total=0,this.useH1=!1,this.localization=void 0,document.addEventListener("keydown",(t=>{"Escape"===t.key&&this.closeModal()}))}render(){var t,e,i,r;if(this.data.length){this.data[0].definition&&(this.showGlossaryBtn=!0),this.generateExplanation(),this.total=this.data.reduce(((t,e)=>t+e.value),0);const t=this.data.reduce(((t,e)=>Math.max(t,e.value)),this.data[0].value),e=[];this.data=this.data.map(((i,r)=>(i.percentage=i.value/this.total*100,i.largest=i.value===t,i.flexAmount=i.value/t,e.push(this.uniqueIdPrefix+"series-item-definition-"+r),i))),this.data.sort(((t,e)=>e.value-t.value)),this.definitionIdsString=e.join(" ")}return N`
      <article
        class="data-rep-wrapper"
        aria-labelledby="${this.uniqueIdPrefix}title"
        aria-describedby="${this.uniqueIdPrefix}insight ${this.uniqueIdPrefix}total"
      >
        ${this.useH1?N`<h1 id="${this.uniqueIdPrefix}title" class="title">
              ${this.header}
            </h1>`:N`<h2 id="${this.uniqueIdPrefix}title" class="title">
              ${this.header}
            </h2>`}
        <p id="${this.uniqueIdPrefix}insight" class="insight">
          ${this.isHtml(this.insight)?ct(this.insight):this.insight}
        </p>
        <div class="action-bar">
          <ul role="group">
            <li @click=${this.togglePlainLanguage}>
              <label
                class="action-item"
                for="${this.uniqueIdPrefix}explanation-switch"
              >
                <input
                  type="checkbox"
                  id="${this.uniqueIdPrefix}explanation-switch"
                  aria-controls="${this.uniqueIdPrefix}explanation-region"
                  value=${this.showExplanation}
                  .checked=${this.showExplanation}
                />
                <span class="toggle-track">
                  <span class="toggle-indicator">
                    <span class="check-mark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="${this.uniqueIdPrefix}explanation-svg-check"
                        role="presentation"
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                      >
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
                Explain
              </label>
            </li>
            <li hidden="${!this.showGlossaryBtn}" @click=${this.toggleGlossary}>
              <label
                class="action-item"
                for="${this.uniqueIdPrefix}glossary-switch"
              >
                <input
                  type="checkbox"
                  id="${this.uniqueIdPrefix}glossary-switch"
                  value=${this.showGlossary}
                  .checked=${this.showGlossary}
                  aria-controls="${this.definitionIdsString}"
                />
                <span class="toggle-track">
                  <span class="toggle-indicator">
                    <span class="check-mark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="${this.uniqueIdPrefix}glossary-svg-check"
                        role="presentation"
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                      >
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
                Glossary
              </label>
            </li>
            <li>
              <button
                id="${this.uniqueIdPrefix}data-modal-button"
                @click=${()=>this.openDataModal(this.uniqueIdPrefix+"data-modal")}
                aria-label="Open data modal"
                aria-controls="${this.uniqueIdPrefix}data-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-table"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
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
            </li>
            <li>
              <button
                aria-label="Open share modal"
                aria-controls="${this.uniqueIdPrefix}share-modal"
                disabled="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-share-3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"
                  ></path>
                </svg>
                Share
              </button>
            </li>
          </ul>

         
        </div>
        <div
          class="plain-language"
          id="${this.uniqueIdPrefix}explanation-region"
          aria-expanded="false"
          tabindex="-1"
          hidden="true"
          aria-label="Plain language summary"
        >
          <h3 class="plain-language-title">Plain language summary</h3>
          ${ct(null!==(t=this.explanation)&&void 0!==t?t:"Error generating plain language summary.")}
        </div>
        <ol
          id="${this.uniqueIdPrefix}series"
          class="series"
          aria-label="Data series"
        >
          ${this.data?this.data.map(((t,e)=>{var i;return N`
                  <li
                    tabindex="0"
                    id="${this.uniqueIdPrefix}series-item-${e}"
                    aria-describedby="${this.uniqueIdPrefix}series-item-label-${e} ${this.uniqueIdPrefix}-series-item-percentage-${e} ${this.uniqueIdPrefix}-series-item-value-${e}"
                  >
                    <span class="content">
                      <p
                        class="label"
                        id="${this.uniqueIdPrefix}series-item-label-${e}"
                      >
                        ${t.label}
                      </p>
                      <p
                        class="definition"
                        id="${this.uniqueIdPrefix}series-item-definition-${e}"
                        aria-expanded="false"
                        hidden="true"
                      >
                        ${ct(null!==(i=t.definition)&&void 0!==i?i:"Not defined.")}
                      </p>
                    </span>
                    <div class="bar-wrapper">
                      <div
                        class="bar"
                        style="--dr-series-item-flex-amount:${t.flexAmount}"
                        aria-hidden="true"
                      ></div>
                      <ul class="details">
                        <li
                          class="percentage"
                          id="${this.uniqueIdPrefix}series-item-percentage-${e}"
                        >
                          ${t.percentage?t.percentage.toLocaleString(this.localization,{minimumFractionDigits:2,maximumFractionDigits:2}):0}%
                        </li>
                        <li
                          class="value"
                          id="${this.uniqueIdPrefix}series-item-value-${e}"
                        >
                          ${t.value.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}
                        </li>
                      </ul>
                    </div>
                  </li>
                `})):null}
        </ol>
        <p class="total" tabindex="0" id="${this.uniqueIdPrefix}total">
          Total:
          <strong
            >${this.total.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}</strong
          >
        </p>
      </article>
      <article
        id="${this.uniqueIdPrefix}data-modal"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${this.uniqueIdPrefix}data-modal-title"
        hidden
      >
        <span class="dismisal" aria-hidden="true" @click=${this.closeModal}></span>
        <section class="modal-content" role="document">
          <button
            id="${this.uniqueIdPrefix}close-modal-button"
            class="close-modal"
            @click=${this.closeModal}
          >
            Close
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
          <h2 id="${this.uniqueIdPrefix}data-modal-title" class="modal-title">
            ${null!==(e=this.header)&&void 0!==e?e:"Title"}
          </h2>
          <p class="description">${ct(null!==(i=this.insight)&&void 0!==i?i:"Insights")}</p>
          <table
            class="data-table"
            aria-label="${null!==(r=this.header)&&void 0!==r?r:"Title"} data table"
          >
            <thead>
              <tr class="header-row">
                <th class="th percentage">%</th>
                <th class="th label">Label</th>
                <th class="th value">Value</th>
              </tr>
            </thead>
            <tbody>
              ${this.data?this.data.map((t=>N`
                      <tr tabindex="0" class="flex-row">
                        <td class="td percentage">
                          ${t.percentage?t.percentage.toLocaleString(this.localization,{minimumFractionDigits:2,maximumFractionDigits:2}):0}%
                        </td>
                        <td class="td label">${t.label}</td>
                        <td class="td value">
                          ${t.value.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}
                        </td>
                      </tr>
                    `)):null}
            </tbody>
            <tfoot>
              <tr class="footer-row" tabindex="0">
                <td colspan="3" class="tf">
                  Total:
                  <strong>
                    ${this.total.toLocaleString(this.localization,{minimumFractionDigits:0,maximumFractionDigits:0})}
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </article>
    `}isHtml(t){if(!t)return!1;const e=(new DOMParser).parseFromString(t,"text/html");return Array.from(e.body.childNodes).some((t=>1===t.nodeType))}generateExplanation(){const t=this.data.slice(0,this.explanationMaxCount).map((t=>{const e=(t.value/this.data.reduce(((t,e)=>t+e.value),0)*100).toFixed(2);return`${t.label} (${e}%)`}));let e="In the reported data, ";if(t.length>2){e+=`${t.slice(0,-1).join(", ")}, and ${t[t.length-1]}`}else 2===t.length?e+=`${t[0]} and ${t[1]}`:1===t.length&&(e+=`${t[0]}`);t.length>0?e+=" represent the top categories.":e+="No data available.",this.explanation=e}togglePlainLanguage(){const t=this.shadowRoot.getElementById(this.uniqueIdPrefix+"glossary-switch"),e=this.shadowRoot.getElementById(this.uniqueIdPrefix+"explanation-switch"),i=this.shadowRoot.getElementById(this.uniqueIdPrefix+"explanation-region");i.setAttribute("aria-expanded",e.checked.toString()),i.hidden=!e.checked,e.checked?(i.addEventListener("keydown",this.handleTabFromPanel),e.addEventListener("keydown",this.handleTabFromPlainLanguageBtn),t.addEventListener("keydown",this.handleTabFromGlossaryBtn)):(e.focus(),i.removeEventListener("keydown",this.handleTabFromPanel),e.removeEventListener("keydown",this.handleTabFromPlainLanguageBtn),t.removeEventListener("keydown",this.handleTabFromGlossaryBtn))}toggleGlossary(){const t=this.shadowRoot.getElementById(this.uniqueIdPrefix+"glossary-switch");this.shadowRoot.querySelectorAll(".definition").forEach((e=>{e.setAttribute("aria-expanded",t.checked.toString()),e.hidden=!t.checked}))}openDataModal(t){this.previouslyFocusedElement=this.shadowRoot.activeElement;const e=this.shadowRoot.getElementById(t),i=this.shadowRoot.getElementById(this.uniqueIdPrefix+"close-modal-button");e.hidden=!1;let r=e.querySelectorAll(this.focusableElementsString);this.firstFocusableElement=r[0],this.lastFocusableElement=r[r.length-1],i.focus(),e.addEventListener("keydown",this.trapTabKey)}closeModal(){this.shadowRoot.querySelectorAll(".modal").forEach((t=>{t.hidden=!0,t.removeEventListener("keydown",this.trapTabKey)})),this.previouslyFocusedElement.focus()}};wt.styles=[gt],t([pt(),e("design:type",String)],wt.prototype,"header",void 0),t([pt(),e("design:type",String)],wt.prototype,"insight",void 0),t([pt({converter:t=>t?JSON.parse(t):console.error("No data provided, or data is in an unrecognized format.")}),e("design:type",Array)],wt.prototype,"data",void 0),t([pt({type:Boolean}),e("design:type",Boolean)],wt.prototype,"useH1",void 0),t([pt(),e("design:type",Number)],wt.prototype,"explanationMaxCount",void 0),t([pt(),e("design:type",String)],wt.prototype,"localization",void 0),t([pt(),e("design:type",Boolean)],wt.prototype,"showExplanation",void 0),t([pt(),e("design:type",Boolean)],wt.prototype,"showGlossaryBtn",void 0),t([pt(),e("design:type",Boolean)],wt.prototype,"showGlossary",void 0),wt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */("data-rep"),e("design:paramtypes",[])],wt);export{wt as DataRep};
//# sourceMappingURL=bundle.js.map
