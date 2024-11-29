////////////////////////////////////////////
// BEGIN ASSET BooksDesignSystemWebBuzzAssets@BaseAssets-1.0.2043.0
/////////////////////////
// BEGIN FILE bds-hns-integration.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.enableHNSIntegration = true;
/////////////////////////
// END FILE bds-hns-integration.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-qv-sf-experiment.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.isBDSStarRatingEnabledOnStorefront = false;
/////////////////////////
// END FILE bds-qv-sf-experiment.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-qv-typ-experiment.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.isBDSStarRatingEnabledOnTYP = false;
/////////////////////////
// END FILE bds-qv-typ-experiment.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-qv-cc-experiment.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.isBDSStarRatingEnabledOnYourBooks = false;
/////////////////////////
// END FILE bds-qv-cc-experiment.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-base-assets.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
!function(e){function t(e,t,i,a){var o,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}function i(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t,i,a,o,s,r){try{var n=e[s](r),l=n.value}catch(e){return void i(e)}n.done?t(l):Promise.resolve(l).then(a,o)}function r(e){return function(){var t=this,i=arguments;return new Promise((function(a,o){var r=e.apply(t,i);function n(e){s(r,a,o,n,l,"next",e)}function l(e){s(r,a,o,n,l,"throw",e)}n(void 0)}))}}function n(e,t,i){return(t=o(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */"function"==typeof SuppressedError&&SuppressedError;var l=window,d=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),c=new WeakMap;class b{constructor(e,t,i){if(this._$cssResult$=!0,i!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){var e=this.o,t=this.t;if(d&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(t,e))}return e}toString(){return this.cssText}}var h,g,p=e=>new b("string"==typeof e?e:e+"",void 0,u),v=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var o=1===e.length?e[0]:i.reduce(((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new b(o,e,u)},m=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{var t="";for(var i of e.cssRules)t+=i.cssText;return p(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,_=window,y=_.trustedTypes,f=y?y.emptyScript:"",k=_.reactiveElementPolyfillSupport,w={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>t!==e&&(t==t||e==e),T={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x},$="finalized";class P extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();var e=[];return this.elementProperties.forEach(((t,i)=>{var a=this._$Ep(i,t);void 0!==a&&(this._$Ev.set(a,i),e.push(a))})),e}static createProperty(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){var o=this[e];this[t]=a,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||T}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;var e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){var t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(var a of i)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){var t=[];if(Array.isArray(e)){var i=new Set(e.flat(1/0).reverse());for(var a of i)t.unshift(m(a))}else void 0!==e&&t.push(m(e));return t}static _$Ep(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{d?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{var i=document.createElement("style"),a=l.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T,o=this.constructor._$Ep(e,a);if(void 0!==o&&!0===a.reflect){var s=(void 0!==(null===(i=a.converter)||void 0===i?void 0:i.toAttribute)?a.converter:w).toAttribute(t,a.type);this._$El=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var i,a=this.constructor,o=a._$Ev.get(e);if(void 0!==o&&this._$El!==o){var s=a.getPropertyOptions(o),r="function"==typeof s.converter?{fromAttribute:s.converter}:void 0!==(null===(i=s.converter)||void 0===i?void 0:i.fromAttribute)?s.converter:w;this._$El=o,this[o]=r.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){var a=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||x)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}_$Ej(){var e=this;return r((function*(){e.isUpdatePending=!0;try{yield e._$E_}catch(t){Promise.reject(t)}var t=e.scheduleUpdate();return null!=t&&(yield t),!e.isUpdatePending}))()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(this.isUpdatePending){this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);var t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}P[$]=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},null==k||k({ReactiveElement:P}),(null!==(h=_.reactiveElementVersions)&&void 0!==h?h:_.reactiveElementVersions=[]).push("1.6.3");var C=window,S=C.trustedTypes,B=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",I="lit$".concat((Math.random()+"").slice(9),"$"),z="?"+I,L="<".concat(z,">"),R=document,O=()=>R.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,E="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,V=RegExp(">|".concat(E,"(?:([^\\s\"'>=/]+)(").concat(E,"*=").concat(E,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),N=/'/g,j=/"/g,W=/^(?:script|style|textarea|title)$/i,G=(e=>function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return{_$litType$:e,strings:t,values:a}})(1),Q=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Y=new WeakMap,Z=R.createTreeWalker(R,129,null,!1);function q(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==B?B.createHTML(t):t}var K=(e,t)=>{for(var i,a=e.length-1,o=[],s=2===t?"<svg>":"",r=U,n=0;n<a;n++){for(var l=e[n],d=void 0,u=void 0,c=-1,b=0;b<l.length&&(r.lastIndex=b,null!==(u=r.exec(l)));)b=r.lastIndex,r===U?"!--"===u[1]?r=H:void 0!==u[1]?r=D:void 0!==u[2]?(W.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=V):void 0!==u[3]&&(r=V):r===V?">"===u[0]?(r=null!=i?i:U,c=-1):void 0===u[1]?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=void 0===u[3]?V:'"'===u[3]?j:N):r===j||r===N?r=V:r===H||r===D?r=U:(r=V,i=void 0);var h=r===V&&e[n+1].startsWith("/>")?" ":"";s+=r===U?l+L:c>=0?(o.push(d),l.slice(0,c)+A+l.slice(c)+I+h):l+I+(-2===c?(o.push(void 0),n):h)}return[q(e,s+(e[a]||"<?>")+(2===t?"</svg>":"")),o]};class J{constructor(e,t){var i,{strings:a,_$litType$:o}=e;this.parts=[];var s=0,r=0,n=a.length-1,l=this.parts,[d,u]=K(a,o);if(this.el=J.createElement(d,t),Z.currentNode=this.el.content,2===o){var c=this.el.content,b=c.firstChild;b.remove(),c.append(...b.childNodes)}for(;null!==(i=Z.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes()){var h=[];for(var g of i.getAttributeNames())if(g.endsWith(A)||g.startsWith(I)){var p=u[r++];if(h.push(g),void 0!==p){var v=i.getAttribute(p.toLowerCase()+A).split(I),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:m[2],strings:v,ctor:"."===m[1]?oe:"?"===m[1]?re:"@"===m[1]?ne:ae})}else l.push({type:6,index:s})}for(var _ of h)i.removeAttribute(_)}if(W.test(i.tagName)){var y=i.textContent.split(I),f=y.length-1;if(f>0){i.textContent=S?S.emptyScript:"";for(var k=0;k<f;k++)i.append(y[k],O()),Z.nextNode(),l.push({type:2,index:++s});i.append(y[f],O())}}}else if(8===i.nodeType)if(i.data===z)l.push({type:2,index:s});else for(var w=-1;-1!==(w=i.data.indexOf(I,w+1));)l.push({type:7,index:s}),w+=I.length-1;s++}}static createElement(e,t){var i=R.createElement("template");return i.innerHTML=e,i}}function ee(e,t){var i,a,o,s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,n=arguments.length>3?arguments[3]:void 0;if(t===Q)return t;var l=void 0!==n?null===(i=r._$Co)||void 0===i?void 0:i[n]:r._$Cl,d=F(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(e))._$AT(e,r,n),void 0!==n?(null!==(o=(s=r)._$Co)&&void 0!==o?o:s._$Co=[])[n]=l:r._$Cl=l),void 0!==l&&(t=ee(e,l._$AS(e,t.values),l,n)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t,{el:{content:i},parts:a}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:R).importNode(i,!0);Z.currentNode=o;for(var s=Z.nextNode(),r=0,n=0,l=a[0];void 0!==l;){if(r===l.index){var d=void 0;2===l.type?d=new ie(s,s.nextSibling,this,e):1===l.type?d=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(d=new le(s,this,e)),this._$AV.push(d),l=a[++n]}r!==(null==l?void 0:l.index)&&(s=Z.nextNode(),r++)}return Z.currentNode=R,o}v(e){var t=0;for(var i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ie{constructor(e,t,i,a){var o;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cp=null===(o=null==a?void 0:a.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){var e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=ee(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),F(e)?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==Q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>M(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==X&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){var t,{values:i,_$litType$:a}=e,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=J.createElement(q(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(i);else{var s=new te(o,this),r=s.u(this.options);s.v(i),this.$(r),this._$AH=s}}_$AC(e){var t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new J(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());var t,i=this._$AH,a=0;for(var o of e)a===i.length?i.push(t=new ie(this.k(O()),this.k(O()),this,this.options)):t=i[a],t._$AI(o),a++;a<i.length&&(this._$AR(t&&t._$AB.nextSibling,a),i.length=a)}_$AR(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){var a=t.nextSibling;t.remove(),t=a}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class ae{constructor(e,t,i,a,o){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=this.strings,s=!1;if(void 0===o)e=ee(this,e,t,0),(s=!F(e)||e!==this._$AH&&e!==Q)&&(this._$AH=e);else{var r,n,l=e;for(e=o[0],r=0;r<o.length-1;r++)(n=ee(this,l[i+r],t,r))===Q&&(n=this._$AH[r]),s||(s=!F(n)||n!==this._$AH[r]),n===X?e=X:e!==X&&(e+=(null!=n?n:"")+o[r+1]),this._$AH[r]=n}s&&!a&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class oe extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}var se=S?S.emptyScript:"";class re extends ae{constructor(){super(...arguments),this.type=4}j(e){e&&e!==X?this.element.setAttribute(this.name,se):this.element.removeAttribute(this.name)}}class ne extends ae{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e){var t;if((e=null!==(t=ee(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:X)!==Q){var i=this._$AH,a=e===X&&i!==X||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==X&&(i===X||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}var de=C.litHtmlPolyfillSupport;null==de||de(J,ie),(null!==(g=C.litHtmlVersions)&&void 0!==g?g:C.litHtmlVersions=[]).push("2.8.0");var ue,ce;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class be extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t,i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){var t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var a,o,s=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,r=s._$litPart$;if(void 0===r){var n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new ie(t.insertBefore(O(),n),n,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Q}}be.finalized=!0,be._$litElement$=!0,null===(ue=globalThis.litElementHydrateSupport)||void 0===ue||ue.call(globalThis,{LitElement:be});var he=globalThis.litElementPolyfillSupport;null==he||he({LitElement:be}),(null!==(ce=globalThis.litElementVersions)&&void 0!==ce?ce:globalThis.litElementVersions=[]).push("3.3.3");
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class ge extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class pe{constructor(e,t,i,a){var o;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){var s=t;this.context=s.context,this.callback=s.callback,this.subscribe=null!==(o=s.subscribe)&&void 0!==o&&o}else this.context=t,this.callback=i,this.subscribe=null!=a&&a;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ge(this.context,this.t,this.subscribe))}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class ve{constructor(e){this.disposers=new Map,this.updateObservers=()=>{for(var[e,t]of this.disposers)e(this.o,t)},void 0!==e&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]||!Object.is(e,this.o);this.o=e,t&&this.updateObservers()}addCallback(e,t){if(t){this.disposers.has(e)||this.disposers.set(e,(()=>{this.disposers.delete(e)}));var i=this.disposers.get(e);e(this.value,i)}else e(this.value)}clearCallbacks(){this.disposers.clear()}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class me extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class _e extends ve{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{e.context===this.context&&e.composedPath()[0]!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,e.subscribe))},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new me(this.context))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2022 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function ye(e){var{context:t,subscribe:i}=e;return(e=>{var{finisher:t,descriptor:i}=e;return(e,o)=>{var s;if(void 0===o){var r=null!==(s=e.originalKey)&&void 0!==s?s:e.key,n=null!=i?{kind:"method",placement:"prototype",key:r,descriptor:i(e.key)}:a(a({},e),{},{key:r});return null!=t&&(n.finisher=function(e){t(e,r)}),n}var l=e.constructor;void 0!==i&&Object.defineProperty(e,o,i(o)),null==t||t(l,o)}})({finisher:(e,a)=>{e.addInitializer((e=>{new pe(e,{context:t,callback:t=>{e[a]=t},subscribe:i})}))}})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var fe,ke=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?a(a({},t),{},{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},we=(e,t,i)=>{t.constructor.createProperty(i,e)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function xe(e){return(t,i)=>void 0!==i?we(e,t,i):ke(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Te(e){return xe(a(a({},e),{},{state:!0}))}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */null===(fe=window.HTMLSlotElement)||void 0===fe||fe.prototype.assignedElements;const $e="render-context",Pe="asin-metadata-context",Ce=e=>customElements.get(e)?(console.warn(`BDS Custom Element '${e}' already defined, will not re-define`),()=>{}):(e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{var{kind:i,elements:a}=t;return{kind:i,elements:a,finisher(t){customElements.define(e,t)}}})(e,t))(e);function Se(e){return function(){const e=document.documentElement;return e.classList.contains("a-mobile")||e.classList.contains("a-tablet")}()&&!function(e){return"iOS"===e.operatingsystem&&"tablet"===e.devicetype&&"detailPage"===e.pagetype}(e)&&!("UICTFontTextStyleBody"===window.getComputedStyle(document.documentElement).getPropertyValue("font-family"))}var Be;e.RenderContextProvider=Be=class extends be{constructor(){super(...arguments),this.marketplace="default",this.devicetype="default",this.operatingsystem="default",this.hostapplication="default",this.pagetype="default",this.theme="light",this.locale="en-US",this.renderContext=new _e(this,{context:$e,initialValue:{marketplace:this.marketplace,devicetype:this.devicetype,operatingsystem:this.operatingsystem,hostapplication:this.hostapplication,pagetype:this.pagetype,theme:this.theme,locale:this.locale,widgetid:this.widgetid}}),this.asinMetadataContext=new _e(this,{context:Pe,initialValue:{asinMetadataCallbacks:[]}})}willUpdate(){this.renderContext.setValue({marketplace:this.marketplace,devicetype:this.devicetype,operatingsystem:this.operatingsystem,hostapplication:this.hostapplication,pagetype:this.pagetype,theme:this.theme,locale:this.locale,widgetid:this.widgetid})}render(){return Se(this.renderContext.value)?this.classList.add(Be.AUIMobileTabletRootFontSizeClass):this.classList.remove(Be.AUIMobileTabletRootFontSizeClass),G`<slot></slot>`}},e.RenderContextProvider.AUIMobileTabletRootFontSizeClass="aui-mobile-tablet-root-font-size",t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"marketplace",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"devicetype",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"operatingsystem",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"hostapplication",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"pagetype",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"theme",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"locale",void 0),t([xe({type:String,reflect:!0})],e.RenderContextProvider.prototype,"widgetid",void 0),e.RenderContextProvider=Be=t([Ce("bds-render-context-provider")],e.RenderContextProvider),e.AsinMetadataContextProvider=class extends be{constructor(){super(...arguments),this.asinMetadataContext=new _e(this,{context:Pe,initialValue:{asinMetadataCallbacks:[]}})}render(){return G`<slot></slot>`}},e.AsinMetadataContextProvider=t([Ce("bds-asin-metadata-context-provider")],e.AsinMetadataContextProvider);const Ae="books-design-system-web";var Ie;function ze(e,t,i="jpg",a,o,s=Ie.HEIGHT,r=500){return[1,1.5,2,3,4].filter(((e,i)=>e*t<=r||0===i)).map((r=>function(e,t,i="jpg",a,o,s=Ie.HEIGHT){return a?`https://m.media-amazon.com/images/I/${e}.${a}_U${s}${t}${o?`_FM${o}_`:""}.${i}?aicid=${Ae}`:`https://m.media-amazon.com/images/I/${e}._AC_U${s}${t}${o?`_FM${o}_`:""}.${i}?aicid=${Ae}`}(e,t*r,i,a,o,s)+` ${r}x`)).join(", ")}function Le(e){return`https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/icons/${e}`}!function(e){e.HEIGHT="Y",e.WIDTH="X"}(Ie||(Ie={}));var Re=v`
    .coverImageWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: var(--bds-size-spacing-micro);
    }

    .programBadge {
        max-width: 100%;
    }

    .coverImage {
        display: block;
    }

    .coverImageWrapper.contained .coverImage,
    .coverImageWrapper.containedBaseline .coverImage {
        max-width: 100%;
        object-fit: contain;
    }

    .coverImageWrapper.blurredBackdrop {
        margin: 0;
    }

    .coverImageWrapper.blurredBackdrop .coverImageWithBackdrop {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .coverImageWrapper.blurredBackdrop .blurredCoverImageWrapper {
        overflow: hidden;
        background: var(--bds-color-background-light);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        position: relative;
    }

    .coverImageWrapper.blurredBackdrop.dark .blurredCoverImageWrapper::after {
        opacity: 0.2;
    }

    .coverImageWrapper.blurredBackdrop .blurredCoverImageWrapper picture {
        width: 113%;
        height: 113%;
        min-width: 113%;
        min-height: 113%;
        display: flex;
        background: rgba(0, 0, 0, 3%);
    }

    .coverImageWrapper.blurredBackdrop.dark .blurredCoverImageWrapper picture {
        background: rgba(0, 0, 0, 20%);
    }

    .coverImageWrapper.blurredBackdrop .blurredCoverImage {
        filter: blur(7px);
        min-width: 100%;
        min-height: 100%;
        opacity: 0.6;
        object-fit: cover;
    }

    .coverImageWrapper.blurredBackdrop .coverImage {
        position: absolute;
        max-width: calc(100% - 2 * var(--bds-size-spacing-base));
        object-fit: contain;
        left: 50%;
        transform: translateX(-50%);
    }

    .coverImageWrapper.blurredBackdrop bds-program-badge {
        position: absolute;
        display: flex;
        justify-content: center;
        max-width: calc(100% - 2 * var(--bds-size-spacing-base));
        object-fit: contain;
        top: var(--bds-size-spacing-small);
        left: 50%;
        transform: translateX(-50%);
    }

    /* TODO update below with design tokens when available and remove fallbacks after tokenv2 migration */
    .grid.coverImageWrapper .coverImageContainer {
        border-radius: 0 0 var(--bds-size-radius-small, 8px) var(--bds-size-radius-small, 8px);
        overflow: hidden;
        padding: var(--bds-size-spacing-none, 0)
            var(--bds-size-spacing-x-small, var(--bds-size-spacing-small))
            var(--bds-size-spacing-x-small, var(--bds-size-spacing-small))
            var(--bds-size-spacing-x-small, var(--bds-size-spacing-small));
        position: relative;
    }

    .grid.coverImageWrapper .coverImageContainer::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 3%);
        pointer-events: none;
    }

    .responsive.coverImageWrapper img {
        display: flex;
        justify-content: center;
        object-fit: contain;
        align-items: center;
        margin: auto;
        width: 100%;
    }

    .grid.coverImageWrapper img {
        aspect-ratio: 1 / 1.25;
    }

    .responsive.coverImageWrapper {
        display: block;
    }
`;const Oe=["layout","theme","pagetype","devicetype","operatingsystem","hostapplication","locale","marketplace"];function Fe(e,t,i){if(!t||!i)return e;let a=Object.assign({},e);return t.filter((e=>function(e,t){return Object.keys(e).every((i=>e[i]===t[i]))}(e.targeting,i))).sort(((e,t)=>function(e,t){const i=Object.keys(e.targeting).length-Object.keys(t.targeting).length;if(0!==i)return i;let a=0,o=0,s=0;const r=Object.keys(e.targeting),n=Object.keys(t.targeting);for(let e=0;e<r.length;e++){const t=Oe.indexOf(r[e]),i=Oe.indexOf(n[e]);a+=t-i,o=t>o?t:o,s=i>s?i:s}return 0===a?o-s:a}(e,t))).forEach((e=>{a=Object.assign(Object.assign({},a),e.overrides)})),a}class Me extends be{getRenderConfiguration(e){return Fe(this.getDefaultConfiguration(),this.getConfigurationOverrides(),e?Object.assign(Object.assign({},this.renderContext),{layout:e}):this.renderContext)}}t([ye({context:$e,subscribe:!0})],Me.prototype,"renderContext",void 0);
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Ee=(e,t,i)=>{for(var a of t)if(a[0]===e)return(0,a[1])();return null==i?void 0:i()},Ue=1,He=2,De=e=>function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return{_$litDirective$:e,values:i}};
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Ve{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var Ne=(e,t)=>{var i,a,o=e._$AN;if(void 0===o)return!1;for(var s of o)null===(a=(i=s)._$AO)||void 0===a||a.call(i,t,!1),Ne(s,t);return!0},je=e=>{var t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===(null==i?void 0:i.size))},We=e=>{for(var t;t=e._$AM;e=t){var i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Xe(t)}};function Ge(e){void 0!==this._$AN?(je(this),this._$AM=e,We(this)):this._$AM=e}function Qe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(a))for(var s=i;s<a.length;s++)Ne(a[s],!1),je(a[s]);else null!=a&&(Ne(a,!1),je(a));else Ne(this,e)}var Xe=e=>{var t,i,a,o;e.type==He&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=Qe),null!==(i=(o=e)._$AQ)&&void 0!==i||(o._$AQ=Ge))};class Ye extends Ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),We(this),this.isConnected=e._$AU}_$AO(e){var t,i,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),a&&(Ne(this,e),je(this))}setValue(e){if((e=>void 0===e.strings)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */(this._$Ct))this._$Ct._$AI(e,this);else{var t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var Ze=()=>new qe;class qe{}var Ke,Je=new WeakMap,et=De(class extends Ye{render(e){return X}update(e,t){var i,[a]=t,o=a!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=a,this.dt=null===(i=e.options)||void 0===i?void 0:i.host,this.ot(this.lt=e.element)),X}ot(e){var t;if("function"==typeof this.G){var i=null!==(t=this.dt)&&void 0!==t?t:globalThis,a=Je.get(i);void 0===a&&(a=new WeakMap,Je.set(i,a)),void 0!==a.get(this.G)&&this.G.call(this.dt,void 0),a.set(this.G,e),void 0!==e&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,i;return"function"==typeof this.G?null===(t=Je.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(i=this.G)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),tt=e=>null!=e?e:X,it=v`
    :host {
        line-height: 0;
    }
`
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function at(e,t,i){return e?t():null==i?void 0:i()}e.ProgramBadge=Ke=class extends be{constructor(){super(...arguments),this.badgeExtension=Ke.DEFAULT_BADGE_EXTENSION,this.badgeImageHeightPx=14}shouldRenderBadge(){return!!this.badgePhysicalId}renderBadge(){var e,t,i;return this.badgePhysicalId?G`<img
            style="height: ${this.badgeImageHeightPx}px;"
            class="programBadge"
            alt="${null!==(e=this.badgeAltText)&&void 0!==e?e:""}"
            src="${t=this.badgePhysicalId,i=this.badgeExtension||Ke.DEFAULT_BADGE_EXTENSION,`https://m.media-amazon.com/images/I/${t}.${i}?aicid=${Ae}`}" />`:X}render(){return at(this.shouldRenderBadge(),(()=>this.renderBadge()))}},e.ProgramBadge.styles=it,e.ProgramBadge.DEFAULT_BADGE_EXTENSION="svg",t([xe({type:String})],e.ProgramBadge.prototype,"badgePhysicalId",void 0),t([xe({type:String})],e.ProgramBadge.prototype,"badgeAltText",void 0),t([xe({type:String})],e.ProgramBadge.prototype,"badgeExtension",void 0),t([xe({type:Number})],e.ProgramBadge.prototype,"badgeImageHeightPx",void 0),e.ProgramBadge=Ke=t([Ce("bds-program-badge")],e.ProgramBadge);const ot=(e,t=!1)=>p(`\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: ${t?"-webkit-inline-box":"-webkit-box"};\n        -webkit-line-clamp: ${e};\n        -webkit-box-orient: vertical;\n    `),st=new Set(["responsiveToContainer","grid"]),rt={coverImageHeightPx:266,coverImageWidthPx:void 0,wrapperHeight:266,wrapperWidth:void 0,badgeImageHeightPx:14,badgeMarginSizePx:4,disableProgramBadge:!1},nt=[{targeting:{layout:"contained"},overrides:{coverImageHeightPx:180,wrapperHeight:180,wrapperWidth:150}},{targeting:{layout:"containedBaseline"},overrides:{coverImageHeightPx:200,wrapperHeight:200,wrapperWidth:194}},{targeting:{layout:"blurredBackdrop"},overrides:{coverImageHeightPx:170,wrapperHeight:190,wrapperWidth:(e=>{try{return e/parseInt(getComputedStyle(document.documentElement).fontSize)}catch(t){return e/16}})(150)}},{targeting:{layout:"grid"},overrides:{coverImageHeightPx:247.5,wrapperHeight:void 0,wrapperWidth:void 0,disableProgramBadge:!0}},{targeting:{layout:"responsiveToContainer"},overrides:{coverImageHeightPx:247.5,wrapperHeight:void 0,wrapperWidth:void 0,disableProgramBadge:!0}},{targeting:{layout:"fixedWidth"},overrides:{coverImageHeightPx:312,coverImageWidthPx:200,disableProgramBadge:!0}},{targeting:{layout:"fixedWidth",devicetype:"mobile"},overrides:{coverImageHeightPx:226,coverImageWidthPx:142,disableProgramBadge:!0}},{targeting:{devicetype:"mobile"},overrides:{badgeImageHeightPx:10}},{targeting:{pagetype:"kindleHome"},overrides:{badgeImageHeightPx:11}},{targeting:{layout:"fixedHeight",devicetype:"tablet"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",devicetype:"mobile"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",pagetype:"kindleHome"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",pagetype:"detailPage"},overrides:{badgeImageHeightPx:11,coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"fixedHeight",pagetype:"detailPage",devicetype:"mobile"},overrides:{badgeImageHeightPx:11,coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"fixedHeight",pagetype:"detailPage",devicetype:"tablet"},overrides:{badgeImageHeightPx:11,coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"fixedHeight",pagetype:"detailPage",devicetype:"desktop"},overrides:{badgeImageHeightPx:11,coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"contained",pagetype:"kindleHome"},overrides:{wrapperWidth:130}},{targeting:{layout:"containedBaseline",pagetype:"kindleHome"},overrides:{wrapperWidth:130}},{targeting:{layout:"list"},overrides:{coverImageWidthPx:100,wrapperWidth:100,wrapperHeight:180,coverImageHeightPx:180,disableProgramBadge:!0}}];e.BookCoverImage=class extends Me{constructor(){super(...arguments),this.imageRef=Ze(),this.layout="fixedHeight",this.badgeExtension=e.ProgramBadge.DEFAULT_BADGE_EXTENSION,this.useNoMetadataLayout=!1}getImageSource(){var e;return null===(e=this.imageRef.value)||void 0===e?void 0:e.currentSrc}getDefaultConfiguration(){return rt}getConfigurationOverrides(){return nt}shouldRenderBadge(e){return!!this.badgePhysicalId&&!e.disableProgramBadge}getImageRenderHeight(e){return e.coverImageHeightPx-(this.shouldRenderBadge(e)?e.badgeImageHeightPx+e.badgeMarginSizePx:0)}getResponsiveImageCssClass(){return st.has(this.layout)?"responsive":void 0}renderProgramBadge(e){return at(this.shouldRenderBadge(e),(()=>G` <bds-program-badge
                badgePhysicalId=${tt(this.badgePhysicalId)}
                badgeAltText=${tt(this.badgeAltText)}
                badgeExtension=${this.badgeExtension}
                badgeImageHeightPx=${e.badgeImageHeightPx}
                style="margin-bottom: ${e.badgeMarginSizePx}px">
            </bds-program-badge>`))}renderCoverImageWithBlurredBackdrop(e){var t;const i=ze(this.coverImagePhysicalId,e.coverImageHeightPx,"jpg",this.imageStyleCode,"webp"),a=ze(this.coverImagePhysicalId,e.coverImageHeightPx,this.imageStyleCode),o=this.useNoMetadataLayout?this.renderProgramBadge(e):"",s=o?`(${e.badgeImageHeightPx}px + var(--bds-size-spacing-mini-plus))`:"0px",r=o?"var(--bds-size-spacing-small)":"var(--bds-size-spacing-base)",n=this.useNoMetadataLayout?"var(--bds-size-spacing-base)":"var(--bds-size-spacing-small)",l=`calc(100% - ${r} - ${s} - ${n})`,d=`calc(${r} + ${s})`,u="var(--bds-size-spacing-small)",c=o?`(${r} + ${s} + ${u})`:"0px",b=`calc(100% - ${c} - ${this.useNoMetadataLayout?"0px":`(${n} + ${u})`})`;return G`
            <div
                class="coverImageWithBackdrop"
                style="${this.useNoMetadataLayout?"align-content: end;":""}">
                ${o}
                <div
                    class="blurredCoverImageWrapper"
                    aria-hidden="true"
                    style="height: ${b}; margin-top: calc(${c})">
                    <picture>
                        <source srcset="${i}" type="image/webp" />
                        <img srcset="${a}" class="blurredCoverImage" />
                    </picture>
                </div>
                <picture>
                    <source srcset="${i}" type="image/webp" />
                    <img
                        ${et(this.imageRef)}
                        srcset="${a}"
                        class="coverImage"
                        style="height: ${l}; top: ${d};"
                        alt="${null!==(t=this.coverImageAltText)&&void 0!==t?t:""}" />
                </picture>
            </div>
        `}getCoverImageStyle(e){switch(this.layout){case"grid":return`min-height: ${e/2}px;`;case"fixedWidth":return`max-height: ${e}px;`;case"list":return`max-height: ${e}px; width: auto;`;default:return`max-height: ${e}px; min-height: ${e/2}px;`}}renderCoverImage(e,t){var i;const a=("fixedWidth"==this.layout||"list"==this.layout)&&t,o=a?t:e,s=a?Ie.WIDTH:Ie.HEIGHT;return G`<picture>
            <source
                srcset="
                    ${ze(this.coverImagePhysicalId,o,"jpg",this.imageStyleCode,"webp",s)}
                "
                type="image/webp" />
            <img
                ${et(this.imageRef)}
                srcset="
                    ${ze(this.coverImagePhysicalId,o,"jpg",this.imageStyleCode,void 0,s)}
                "
                style="${this.getCoverImageStyle(e)}"
                height="${tt("fixedHeight"==this.layout?e:void 0)}"
                width="${tt("fixedWidth"==this.layout?t:void 0)}"
                class="coverImage ${this.getResponsiveImageCssClass()}"
                alt="${null!==(i=this.coverImageAltText)&&void 0!==i?i:""}" />
        </picture>`}renderDefaultCoverImage(e){return G`
            ${this.renderProgramBadge(e)}
            ${this.renderCoverImage(this.getImageRenderHeight(e),e.coverImageWidthPx)}
        `}renderGridCoverImage(e){return G`
            <div class="coverImageBlock">
                <div class="coverImageContainer">
                    ${this.renderCoverImage(e.coverImageHeightPx)}
                </div>
            </div>
        `}getCoverImageWrapperStyles(e){switch(this.layout){case"contained":return`\n                    height: ${e.wrapperHeight}px;\n                    width: ${e.wrapperWidth}px;\n                    align-items: ${this.useNoMetadataLayout?"center":"flex-start"};\n                `;case"containedBaseline":return`\n                    height: ${e.wrapperHeight}px;\n                    width: ${e.wrapperWidth}px;\n                    align-items: center;\n                    justify-content: flex-end;\n                `;case"blurredBackdrop":return`\n                    height: ${e.wrapperHeight}px;\n                    width: ${e.wrapperWidth}rem;\n                    min-width: 100%;\n                `;case"grid":case"fixedWidth":case"responsiveToContainer":return;case"list":return`\n                    width: ${e.wrapperWidth}px;\n                    max-height: ${e.wrapperHeight}px;\n                    align-items: center;\n                    justify-content: flex-start;\n                `;default:return`height: ${e.wrapperHeight}px;`}}render(){var e;const t=this.getRenderConfiguration(this.layout);return G` <div
            class="coverImageWrapper ${this.layout} ${null===(e=this.renderContext)||void 0===e?void 0:e.theme} ${this.getResponsiveImageCssClass()}"
            style="${tt(this.getCoverImageWrapperStyles(t))}">
            ${Ee(this.layout,[["blurredBackdrop",()=>this.renderCoverImageWithBlurredBackdrop(t)],["grid",()=>this.renderGridCoverImage(t)],["list",()=>this.renderDefaultCoverImage(t)]],(()=>this.renderDefaultCoverImage(t)))}
        </div>`}},e.BookCoverImage.styles=Re,t([xe({type:String})],e.BookCoverImage.prototype,"layout",void 0),t([xe({type:String})],e.BookCoverImage.prototype,"coverImagePhysicalId",void 0),t([xe({type:String})],e.BookCoverImage.prototype,"coverImageAltText",void 0),t([xe({type:String})],e.BookCoverImage.prototype,"badgePhysicalId",void 0),t([xe({type:String})],e.BookCoverImage.prototype,"badgeAltText",void 0),t([xe({type:String})],e.BookCoverImage.prototype,"badgeExtension",void 0),t([xe({type:Boolean})],e.BookCoverImage.prototype,"useNoMetadataLayout",void 0),t([xe({type:String})],e.BookCoverImage.prototype,"imageStyleCode",void 0),e.BookCoverImage=t([Ce("bds-book-cover-image")],e.BookCoverImage);class lt{constructor(e,t){var{target:i,config:a,callback:o,skipInitial:s}=t;this.t=new Set,this.o=!1,this.i=!1,this.h=e,null!==i&&this.t.add(null!=i?i:e),this.o=null!=s?s:this.o,this.callback=o,window.IntersectionObserver?(this.u=new IntersectionObserver((e=>{var t=this.i;this.i=!1,this.o&&t||(this.handleChanges(e),this.h.requestUpdate())}),a),e.addController(this)):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(e){var t;this.value=null===(t=this.callback)||void 0===t?void 0:t.call(this,e,this.u)}hostConnected(){for(var e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}hostUpdated(){var e=this;return r((function*(){var t=e.u.takeRecords();t.length&&e.handleChanges(t)}))()}observe(e){this.t.add(e),this.u.observe(e),this.i=!0}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const dt=()=>v`
        .offscreen {
            position: absolute;
            z-index: -1;
            opacity: 0;
            clip: rect(0, 0, 0, 0);
            transform: translateX(-100%);
        }

        [dir="rtl"] .offscreen {
            transform: translateX(100%);
        }
    `;var ut=[v`
    :host {
        color: var(--bds-color-font-primary);
        font-size: var(--bds-size-font-base);
        font-weight: var(--bds-weight-font-base);
        line-height: var(--bds-size-line-height-base);
        max-width: 100%;
    }

    .unified-book-faceout {
        width: min-content;
        min-width: 140px;
        display: flex;
        flex-direction: row;
    }

    .unified-book-faceout a {
        text-decoration: none;
        cursor: pointer;
    }

    .ubf-book-info {
        position: relative;
        z-index: 0;
    }

    .ubf-color-block,
    .ubf-color-block-bottom {
        padding: var(--bds-size-utils-padding-10, var(--bds-size-spacing-small-plus));
    }

    .ubf-color-block-bottom {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-utils-padding-10, var(--bds-size-spacing-small-plus));
    }

    .series-overlay {
        position: absolute;
        top: 22px;
        right: 3px;
    }

    .star-rating {
        margin: var(--bds-size-spacing-mini) 0;
    }

    /* stylelint-disable selector-class-pattern */
    .unified-book-faceout.blurred-backdrop {
        border-radius: 4px;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 25%);
        overflow: hidden;
        background: var(--bds-color-background-base);
        height: 100%;
    }

    .unified-book-faceout.blurred-backdrop.dark {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 75%);
    }

    .unified-book-faceout.blurred-backdrop.no-metadata-layout {
        height: auto;
        background: var(--bds-color-background-base);
    }

    .unified-book-faceout.blurred-backdrop.dark.no-metadata-layout {
        background: #232323;
    }

    .unified-book-faceout.blurred-backdrop .ubf-book-info a {
        outline-offset: -2px;
    }

    /* TODO remove fallbacks when token v2 migration is complete */
    .unified-book-faceout.list .ubf-metadata {
        padding-left: var(--bds-size-spacing-small);
    }

    .unified-book-faceout.blurred-backdrop .ubf-metadata {
        padding: 0 var(--bds-size-spacing-small) var(--bds-size-spacing-small);
    }

    .unified-book-faceout.metadata-only {
        width: auto;
    }

    .mosaic.unified-book-faceout {
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(200, 200, 200, 50%);
        flex-direction: column;
        width: 100%;
    }

    .mosaic .book-metadata-badge {
        margin-left: calc(
            var(--bds-size-utils-padding-10, var(--bds-size-spacing-small-plus)) * -1
        );
        margin-bottom: var(--bds-size-utils-padding-10, var(--bds-size-spacing-small-plus));
    }

    .mosaic .book-format {
        margin-top: var(--bds-size-utils-padding-10, var(--bds-size-spacing-small-plus));
        margin-bottom: 14px;
        font-size: var(--bds-size-font-functional-body-small, var(--bds-size-font-small));
    }

    .grid .star-rating,
    .mosaic .star-rating {
        margin: 0;
    }

    .grid.unified-book-faceout {
        flex-direction: column;
        width: 100%;
    }

    .grid-metadata-badge-slot {
        height: 28px;
        background: rgba(0, 0, 0, 3%);
        border-radius: var(--bds-size-spacing-x-small, var(--bds-size-border-radius-medium))
            var(--bds-size-spacing-x-small, var(--bds-size-border-radius-medium)) 0 0;
        overflow: hidden;
    }

    .grid-program-badge-container {
        height: 20px;
        display: flex;
        align-items: center;
    }

    bds-savings-percentage-overlay {
        position: absolute;
        margin-left: -14px;
        margin-top: -14px;
    }

    /* stylelint-enable selector-class-pattern */
`,dt()],ct=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .sponsored {
        color: var(--bds-color-font-secondary);
        font-size: var(--bds-size-font-small);
        line-height: var(--bds-size-line-height-base);
    }

    .info-icon {
        margin-left: var(--bds-size-spacing-mini);
    }

    .mobile .info-icon,
    .tablet .info-icon {
        display: none;
    }
`;e.BookSponsored=class extends be{constructor(){super(...arguments),this.isSponsored=!1}render(){return at(this.isSponsored,(()=>{var e;return G`<div class="sponsored ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">
                Sponsored
                <img
                    class="info-icon"
                    alt=""
                    src="https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/info.svg" />
            </div>`}))}},e.BookSponsored.styles=ct,t([xe({type:Boolean})],e.BookSponsored.prototype,"isSponsored",void 0),t([ye({context:$e,subscribe:!0})],e.BookSponsored.prototype,"renderContext",void 0),e.BookSponsored=t([Ce("bds-book-sponsored")],e.BookSponsored);var bt=[v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .bookTitleContent {
        min-width: min(140px, 100%);
    }

    a {
        text-decoration: none;
    }

    .primaryText,
    .primaryText a {
        color: var(--bds-color-font-primary);
    }

    .primaryText {
        font-size: var(--bds-size-font-base);
        line-height: var(--bds-size-line-height-base);

        ${ot(2)};
    }

    .secondaryText,
    .tertiaryText {
        color: var(--bds-color-font-secondary);
        font-size: var(--bds-size-font-small);
        line-height: var(--bds-size-line-height-base);

        ${ot(2)};
    }

    .secondaryText a,
    .tertiaryText a {
        color: var(--bds-color-font-link);
    }

    .secondaryText a:hover,
    .tertiaryText a:hover {
        text-decoration: underline;
    }

    /* TODO remove fallbacks when token v2 migration is complete */
    .compact.primaryText,
    .compact.secondaryText {
        font-size: var(--bds-size-font-functional-body-small, var(--bds-size-font-small));

        ${ot(1)};
    }

    .compact.primaryText {
        font-weight: bold;
        color: var(--bds-color-functional-neutral-on-surface, var(--bds-color-font-primary));
    }

    .compact.secondaryText {
        color: var(
            --bds-color-functional-neutral-on-surface-variant,
            var(--bds-color-font-secondary)
        );
    }

    .compact.primaryText.primaryTextOnly {
        ${ot(2)};
    }

    :is(h1, h2, h3, h4, h5, h6) {
        all: inherit;
    }
`,dt()];e.BookTitleContent=class extends be{constructor(){super(...arguments),this.suppressPrimaryAria=!1,this.suppressSecondaryAria=!1,this.suppressTertiaryAria=!1,this.layout="regular"}renderTitleSlot(e,t,i=!1){if(!this.hasValidTitleContent(t))return X;const a=t.map(((e,a)=>{const o=a<(null==t?void 0:t.length)-1?", ":"";return this.getTitleContentWrapper(e,o,i,e.headingLevel)}));return G`<div class="${e} ${this.layout}">${a}</div>`}getTitleContentWrapper(e,t,i,a){const o=G`${e.displayText}${at(e.appendedInlineContent,(()=>G`${e.appendedInlineContent}`))}${t}`,s=e.enableLink&&e.url;let r;switch(a){case 1:r=G`<h1 aria-hidden=${i}>${o}</h1>`;break;case 2:r=G`<h2 aria-hidden=${i}>${o}</h2>`;break;case 3:r=G`<h3 aria-hidden=${i}>${o}</h3>`;break;case 4:r=G`<h4 aria-hidden=${i}>${o}</h4>`;break;case 5:r=G`<h5 aria-hidden=${i}>${o}</h5>`;break;case 6:r=G`<h6 aria-hidden=${i}>${o}</h6>`;break;default:r=G`<span aria-hidden="${i}">${o}</span>`}return at(e.displayText,(()=>s?G`<a
                      @click=${e.handleClick}
                      href="${e.url}"
                      aria-hidden="${i}"
                      tabindex="${i?-1:0}">
                      ${r}</a
                  >`:r))}hasValidTitleContent(e){return!(!Array.isArray(e)||!e.length)}getPrimaryTextCssClass(){let e="primaryText";return"compact"!==this.layout||this.hasValidTitleContent(this.secondaryTitleContent)||(e+=" primaryTextOnly"),e}render(){var e;return this.primaryTitleContent||this.secondaryTitleContent||this.tertiaryTitleContent?G`<div class="bookTitleContent ${tt(null===(e=this.renderContext)||void 0===e?void 0:e.devicetype)}">
                ${this.renderTitleSlot(this.getPrimaryTextCssClass(),this.primaryTitleContent,this.suppressPrimaryAria)}
                ${this.renderTitleSlot("secondaryText",this.secondaryTitleContent,this.suppressSecondaryAria)}
                ${this.renderTitleSlot("tertiaryText",this.tertiaryTitleContent,this.suppressTertiaryAria)}
            </div> `:X}},e.BookTitleContent.styles=bt,t([xe({type:Array,attribute:!1})],e.BookTitleContent.prototype,"primaryTitleContent",void 0),t([xe({type:Array,attribute:!1})],e.BookTitleContent.prototype,"secondaryTitleContent",void 0),t([xe({type:Array,attribute:!1})],e.BookTitleContent.prototype,"tertiaryTitleContent",void 0),t([xe({type:Boolean})],e.BookTitleContent.prototype,"suppressPrimaryAria",void 0),t([xe({type:Boolean})],e.BookTitleContent.prototype,"suppressSecondaryAria",void 0),t([xe({type:Boolean})],e.BookTitleContent.prototype,"suppressTertiaryAria",void 0),t([xe({type:String})],e.BookTitleContent.prototype,"layout",void 0),t([ye({context:$e,subscribe:!0})],e.BookTitleContent.prototype,"renderContext",void 0),e.BookTitleContent=t([Ce("bds-book-title-content")],e.BookTitleContent);var ht=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .stars-container {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .rating {
        color: var(--bds-color-font-primary);
    }

    .stars {
        align-items: center;
        display: flex;
        flex-shrink: 0;
    }

    .starRatingLinkDisabled,
    .starRatingLink {
        text-decoration: none;
        align-items: center;
        display: flex;
    }

    .starRatingLink:hover {
        text-decoration: underline;
        text-decoration-color: var(--bds-color-font-link);
    }

    .halfStar:dir(rtl) {
        transform: scaleX(-1);
    }

    .numberOfReviews {
        color: var(--bds-color-font-secondary);
    }

    .starRatingLink .numberOfReviews {
        color: var(--bds-color-font-link);
    }
`,gt={resources:{bds_audible_sample_button_label:"Audible Sample",bds_author_follow_label:"✓ Following",bds_author_unfollow_label:"+ Follow",bds_download_sample_label:"Download Sample",bds_blurb_read_full_article_label:"Read Full Article",bds_ubf_book_single_other_format_label:"Other format:",bds_ubf_book_other_formats_label:"Other formats:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} more",sample_text:"Sample text here",sample_button:"Click sample {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} reviews",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Add to list",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Add to list",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"see all details",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Read now",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Discover new stories",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"shuffle",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"with {savingsPercentage} savings",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},pt={resources:{bds_audible_sample_button_label:"Ejemplo de Audible",bds_author_follow_label:"✓ Siguiendo",bds_author_unfollow_label:"+ Seguir",bds_download_sample_label:"Descargar fragmento",bds_blurb_read_full_article_label:"Leer artículo completo",bds_ubf_book_single_other_format_label:"Otro formato:",bds_ubf_book_other_formats_label:"Otros formatos:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} más",sample_text:"Fragmento aquí",sample_button:"Haz clic en el fragmento {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} reseñas",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Añadir a la lista",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Añadir a la lista",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"ver todos los detalles",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Leer ahora",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Descubrir nuevas historias",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"modo aleatorio",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},vt={resources:{bds_audible_sample_button_label:"Extrait du livre audio Audible",bds_author_follow_label:"✓ Suivi",bds_author_unfollow_label:"+ Suivre",bds_download_sample_label:"Télécharger l’extrait",bds_blurb_read_full_article_label:"Lire l'article dans son intégralité",bds_ubf_book_single_other_format_label:"Autre format :",bds_ubf_book_other_formats_label:"Autres formats :",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} supplémentaires",sample_text:"Vous trouverez ici un extrait",sample_button:"Cliquez sur un extrait {stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} évaluations",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Ajouter à la liste",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Ajouter à la liste",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"afficher toutes les informations",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Commencez dès maintenant votre lecture",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Découvrez de nouveaux récits",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"résultats aléatoires",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},mt={resources:{bds_audible_sample_button_label:"Amostra do Audible",bds_author_follow_label:"✓ Seguindo",bds_author_unfollow_label:"+ Seguir",bds_download_sample_label:"Fazer download da amostra",bds_blurb_read_full_article_label:"Leia o artigo completo",bds_ubf_book_single_other_format_label:"Outro formato:",bds_ubf_book_other_formats_label:"Outros formatos:",bds_ubf_book_other_formats_more_text:"+ outros {numberOfFormats} formatos",sample_text:"Texto da amostra aqui",sample_button:"Clique na amostra {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} avaliações",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Adicionar à lista",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Adicionar à lista",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"ver todos os detalhes",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Ler agora",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Descobrir novas histórias",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"ordem aleatória",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}};const _t={"ar-AE":{resources:{bds_audible_sample_button_label:"عيّنة Audible",bds_author_follow_label:"✓ جارية المتابعة",bds_author_unfollow_label:"+ متابعة",bds_download_sample_label:"تنزيل العيّنة",bds_blurb_read_full_article_label:"اقرأ المقال كاملاً",bds_ubf_book_single_other_format_label:"تنسيق آخر:",bds_ubf_book_other_formats_label:"تنسيقات أخرى:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} من التنسيقات الإضافية",sample_text:"العيّنة النصية هنا",sample_button:"انقر فوق العيّنة {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}، {numberOfReviews} من المراجعات",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"الإضافة إلى القائمة",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"الإضافة إلى القائمة",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"اطلع على كل التفاصيل",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"اقرأ الآن",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"اكتشف قصصًا جديدة",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"خلط",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"مع {savingsPercentage} من التوفيرات",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"bn-IN":{resources:{bds_audible_sample_button_label:"Audible নমুনা",bds_author_follow_label:"✓ অনুসরণ করছেন",bds_author_unfollow_label:"+ অনুসরণ করুন",bds_download_sample_label:"নমুনা ডাউনলোড করুন",bds_blurb_read_full_article_label:"সম্পূর্ণ নিবন্ধ পড়ুন",bds_ubf_book_single_other_format_label:"অন্যান্য ফর্ম্যাট:",bds_ubf_book_other_formats_label:"অন্যান্য ফর্ম্যাট:",bds_ubf_book_other_formats_more_text:"+ আরও {numberOfFormats}",sample_text:"এখানে নমুনা সংক্রান্ত পাঠ্য",sample_button:"নমুনা {stringText}{numberValue}{stringText} এ ক্লিক করুন",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} রিভিউ",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"তালিকায় যোগ করুন",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"তালিকায় যোগ করুন",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"সমস্ত বিবরণ দেখুন",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"এখনই পড়ুন",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"নতুন গল্প খুঁজে পান",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"অদলবদল করুন",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} সাশ্রয় সহ",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"cs-CZ":{resources:{bds_audible_sample_button_label:"Ukázka Audible",bds_author_follow_label:"✓ Sledovaný",bds_author_unfollow_label:"+ Sledovat",bds_download_sample_label:"Stáhnout ukázku",bds_blurb_read_full_article_label:"Přečíst celý článek",bds_ubf_book_single_other_format_label:"Jiný formát:",bds_ubf_book_other_formats_label:"Jiné formáty:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} další",sample_text:"Ukázkový text zde",sample_button:"Ukázka ke kliknutí {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, počet recenzí:{numberOfReviews}",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Přidat do seznamu",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Přidat do seznamu",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"Zobrazit všechny podrobnosti",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Přečíst hned",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Prozkoumat nové příběhy",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"Náhodný výběr",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"−{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"de-DE":{resources:{bds_audible_sample_button_label:"Audible-Hörprobe",bds_author_follow_label:"✓ Abonniert",bds_author_unfollow_label:"+ Abonnieren",bds_download_sample_label:"Leseprobe herunterladen",bds_blurb_read_full_article_label:"Vollständigen Artikel lesen",bds_ubf_book_single_other_format_label:"Anderes Format:",bds_ubf_book_other_formats_label:"Andere Formate:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} weitere",sample_text:"Beispieltext hier",sample_button:"Leseprobe anklicken{stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} Rezensionen",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Zur Liste hinzufügen",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Zur Liste hinzufügen",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"Alle Details anzeigen",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Jetzt lesen",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Neue Geschichten entdecken",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"Zufällig anordnen",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"−{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"en-AE":gt,"en-AU":gt,"en-CA":gt,"en-GB":gt,"en-IN":gt,"en-NG":gt,"en-SG":gt,"en-US":gt,"en-ZA":gt,"es-ES":pt,"es-MX":pt,"es-US":pt,"fr-BE":vt,"fr-CA":vt,"fr-FR":vt,"he-IL":{resources:{bds_audible_sample_button_label:"דוגמית של Audible",bds_author_follow_label:"✓ עוקבים",bds_author_unfollow_label:"+ מעקב",bds_download_sample_label:"הורדת דוגמית",bds_blurb_read_full_article_label:"קרא את המאמר המלא",bds_ubf_book_single_other_format_label:"פורמט אחר:",bds_ubf_book_other_formats_label:"פורמטים אחרים:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} נוספים",sample_text:"טקסט לדוגמה כאן",sample_button:"יש ללחוץ על דוגמית {stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} ביקורות",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"הוספה לרשימה",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"הוספה לרשימה",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"ראה את כל הפרטים",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"לקרוא עכשיו",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"גלה סיפורים חדשים",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"ערבוב",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label}{basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"עם {savingsPercentage} חיסכון",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"hi-IN":{resources:{bds_audible_sample_button_label:"ऑडिबल सैम्पल",bds_author_follow_label:"फ़ॉलो कर रहे हैं",bds_author_unfollow_label:"+ फॉलो करें",bds_download_sample_label:"नमूना डाउनलोड करें",bds_blurb_read_full_article_label:"पूरा लेख पढ़ें",bds_ubf_book_single_other_format_label:"अन्य फ़ॉर्मेट:",bds_ubf_book_other_formats_label:"अन्य प्रारूप:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} अधिक",sample_text:"सैम्पल टेक्स्ट यहां",sample_button:"सैम्पल {stringText} {numberValue} {stringText}पर क्लिक करें",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} समीक्षाएं",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"सूची में जोड़ें",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"सूची में जोड़ें",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"सभी जानकारी देखें",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"अभी पढ़ें",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"नई कहानियां ढूंढें",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"शफ़ल करें",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} बचत के साथ",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"it-IT":{resources:{bds_audible_sample_button_label:"Estratto Audible",bds_author_follow_label:"✓ Storie seguite",bds_author_unfollow_label:"+ Segui",bds_download_sample_label:"Scarica estratto",bds_blurb_read_full_article_label:"Leggi l'articolo completo",bds_ubf_book_single_other_format_label:"Altro formato:",bds_ubf_book_other_formats_label:"Altri formati:",bds_ubf_book_other_formats_more_text:"+ altri {numberOfFormats}",sample_text:"Testo dell'estratto qui",sample_button:"Fai clic su un estratto {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recensioni",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Aggiungi all’elenco",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Aggiungi all’elenco",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"visualizza tutti i dettagli",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Leggi ora",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Scopri nuove storie",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"ordine casuale",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"con un risparmio del {savingsPercentage}",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"ja-JP":{resources:{bds_audible_sample_button_label:"Audible サンプル",bds_author_follow_label:"✓ フォロー",bds_author_unfollow_label:"+ フォロー",bds_download_sample_label:"サンプルのダウンロード",bds_blurb_read_full_article_label:"記事の全文を読む",bds_ubf_book_single_other_format_label:"その他のフォーマット:",bds_ubf_book_other_formats_label:"その他のフォーマット:",bds_ubf_book_other_formats_more_text:"{numberOfFormats} 以上",sample_text:"サンプル テキストはこちら",sample_button:"サンプル {stringText} {numberValue} {stringText} をクリック",bds_star_rating_review_count_summary:{value:"{ratingSummary} ({numberOfReviews} 件のレビュー)",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"リストに追加",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"リストに追加",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"すべての詳細を表示",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"今すぐ読む",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"新しいストーリーを見つける",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"シャッフル",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} 割引",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"kn-IN":{resources:{bds_audible_sample_button_label:"Audible ಮಾದರಿ",bds_author_follow_label:"✓ ಈ ಕೆಳಗಿನ",bds_author_unfollow_label:"+ ಅನುಸರಿಸಿ",bds_download_sample_label:"ಮಾದರಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",bds_blurb_read_full_article_label:"ಪೂರ್ಣ ಲೇಖನವನ್ನು ಓದಿ",bds_ubf_book_single_other_format_label:"ಇತರ ಫಾರ್ಮ್ಯಾಟ್:",bds_ubf_book_other_formats_label:"ಇತರ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} ಇನ್ನಷ್ಟು",sample_text:"ಮಾದರಿ ಪಠ್ಯ ಇಲ್ಲಿದೆ",sample_button:"ಮಾದರಿಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} ವಿಮರ್ಶೆಗಳು",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ನೋಡಿ",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"ಈಗಲೇ ಓದಿ",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"ಹೊಸ ಕಥೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"ಷಫಲ್ ಮಾಡಿ",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} ಉಳಿತಾಯಗಳೊಂದಿಗೆ",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"ko-KR":{resources:{bds_audible_sample_button_label:"Audible 샘플",bds_author_follow_label:"✓ 팔로우하는 중",bds_author_unfollow_label:"+ 팔로우",bds_download_sample_label:"샘플 다운로드",bds_blurb_read_full_article_label:"전체 기사 읽기",bds_ubf_book_single_other_format_label:"기타 형식:",bds_ubf_book_other_formats_label:"기타 형식:",bds_ubf_book_other_formats_more_text:"+{numberOfFormats}개 더 보기",sample_text:"샘플 텍스트 위치",sample_button:"샘플 클릭 {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews}개의 리뷰",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"목록에 추가",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"목록에 추가",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"세부 정보 모두 보기",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"지금 읽기",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"새 스토리 검색",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"셔플",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"ml-IN":{resources:{bds_audible_sample_button_label:"Audible സാമ്പിൾ",bds_author_follow_label:"✓ പിന്തുടരുന്നു",bds_author_unfollow_label:"+ പിന്തുടരുക",bds_download_sample_label:"സാമ്പിൾ ഡൗൺലോഡുചെയ്യുക",bds_blurb_read_full_article_label:"മുഴുവൻ ലേഖനവും വായിക്കുക",bds_ubf_book_single_other_format_label:"മറ്റ് ഫോർമാറ്റ്:",bds_ubf_book_other_formats_label:"മറ്റ് ഫോർമാറ്റുകൾ:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} കൂടുതൽ",sample_text:"സാമ്പിൾ ടെക്‌സ്‌റ്റ് ഇവിടെ നൽകുക",sample_button:"സാമ്പിൾ ക്ലിക്ക് ചെയ്യുക {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} അവലോകനങ്ങൾ",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"ലിസ്റ്റിൽ ചേർക്കുക",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"ലിസ്റ്റിൽ ചേർക്കുക",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"എല്ലാ വിശദാംശങ്ങളും കാണുക",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"ഇപ്പോൾ വായിക്കുക",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"പുതിയ കഥകൾ കണ്ടെത്തൂ",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"ഷഫിൾ ചെയ്യൂ",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} ലാഭത്തോടെ",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"mr-IN":{resources:{bds_audible_sample_button_label:"Audible नमुना",bds_author_follow_label:"✓ खालील",bds_author_unfollow_label:"+ फॉलो करा",bds_download_sample_label:"नमुना डाउनलोड करा",bds_blurb_read_full_article_label:"संपूर्ण लेख वाचा",bds_ubf_book_single_other_format_label:"इतर स्वरूप:",bds_ubf_book_other_formats_label:"इतर स्वरूपने:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} अधिक",sample_text:"येथे नमुना मजकूर",sample_button:"{stringText} {numberValue} {stringText} नमुना क्लिक करा",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} पुनरावलोकने",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"यादीमध्ये जोडा",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"यादीमध्ये जोडा",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"सर्व तपशील पहा",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"आता वाचा",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"नवीन कथा शोधा",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"शफल",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} बचतीसह",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"nl-NL":{resources:{bds_audible_sample_button_label:"Audible-fragment",bds_author_follow_label:"✓ Volgend",bds_author_unfollow_label:"+ Volgen",bds_download_sample_label:"Fragment downloaden",bds_blurb_read_full_article_label:"Het volledige artikel lezen",bds_ubf_book_single_other_format_label:"Andere indeling:",bds_ubf_book_other_formats_label:"Andere uitvoeringen:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} meer",sample_text:"Tekst van fragment hier",sample_button:"Klik op fragment {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recensies",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Toevoegen aan lijst",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Toevoegen aan lijst",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"alle details bekijken",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Nu lezen",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Nieuwe verhalen ontdekken",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"shuffle",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay}{savingsPercentage}{audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"met korting van {savingsPercentage}",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"pl-PL":{resources:{bds_audible_sample_button_label:"Fragment z Audible",bds_author_follow_label:"✓ Obserwujesz",bds_author_unfollow_label:"+ Obserwuj",bds_download_sample_label:"Pobierz fragment",bds_blurb_read_full_article_label:"Przeczytaj cały artykuł",bds_ubf_book_single_other_format_label:"Inny format:",bds_ubf_book_other_formats_label:"Inne formaty:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} więcej",sample_text:"Fragment tekstu tutaj",sample_button:"Kliknij fragment {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recenzje",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Dodaj do listy",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Dodaj do listy",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"zobacz wszystkie szczegóły",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Czytaj teraz",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Poznaj nowe historie",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"przemieszaj",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"pt-BR":mt,"pt-PT":mt,"sv-SE":{resources:{bds_audible_sample_button_label:"Hörbart prov",bds_author_follow_label:"Följer",bds_author_unfollow_label:"+ Följ",bds_download_sample_label:"Ladda ned prov",bds_blurb_read_full_article_label:"Läs hela artikeln",bds_ubf_book_single_other_format_label:"Annat format:",bds_ubf_book_other_formats_label:"Andra format:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} till",sample_text:"Textprov här",sample_button:"Klicka på prov{stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recensioner",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Lägg till i lista",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Lägg till i lista",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"se all information",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Läs nu",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Upptäck nya berättelser",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"blanda",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"med en besparing på {savingsPercentage}",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"–{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"ta-IN":{resources:{bds_audible_sample_button_label:"கேட்கக்கூடிய மாதிரி",bds_author_follow_label:"✓ பின்பற்றுதல்",bds_author_unfollow_label:"+ பின்பற்றவும்",bds_download_sample_label:"மாடலை பதிவிறக்குக",bds_blurb_read_full_article_label:"முழு கட்டுரையைப் படிக்கவும்",bds_ubf_book_single_other_format_label:"பிற வடிவம்:",bds_ubf_book_other_formats_label:"பிற வடிவங்கள்:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} மேலும்",sample_text:"மாடல் உரை இங்கே உள்ளது",sample_button:"{stringText} {numberValue} {stringText}மாதிரியைக் கிளிக் செய்க",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} மதிப்புரைகள்",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"பட்டியலில் சேர்க்கவும்",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"பட்டியலில் சேர்க்கவும்",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"அனைத்து விவரங்களையும் காண்க",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"இப்போதே படிக்கவும்",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"புதிய கதைகளைக் கண்டறியவும்",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"மாற்றி வைத்தல்",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} சேமிப்புடன்",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"te-IN":{resources:{bds_audible_sample_button_label:"వినదగిన నమూనా",bds_author_follow_label:"✓ అనుసరిస్తున్నారు",bds_author_unfollow_label:"+ అనుసరించండి",bds_download_sample_label:"నమూనాను డౌన్‌లోడ్ చేయండి",bds_blurb_read_full_article_label:"పూర్తి కథనాన్ని చదవండి",bds_ubf_book_single_other_format_label:"మరో ఫార్మాట్:",bds_ubf_book_other_formats_label:"ఇతర ఫార్మాట్‌లలో:",bds_ubf_book_other_formats_more_text:"మరో + {numberOfFormats}",sample_text:"నమూనా టెక్స్ట్ ఇక్కడ ఉంది",sample_button:"నమూనాని క్లిక్ చేయండి {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} సమీక్షలు",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"జాబితాకు జోడించండి",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"జాబితాకు జోడించండి",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"అన్ని వివరాలను చూడండి",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"ఇప్పుడు చదవండి",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"కొత్త కథలను కనుగొనండి",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"షఫుల్ చేయి",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} పొదుపుతో",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"tr-TR":{resources:{bds_audible_sample_button_label:"Audible Örneği",bds_author_follow_label:"✓ Takip ediliyor",bds_author_unfollow_label:"+ Takip et",bds_download_sample_label:"Örnek Parça İndir",bds_blurb_read_full_article_label:"Makalenin Tamamını Oku",bds_ubf_book_single_other_format_label:"Diğer biçim:",bds_ubf_book_other_formats_label:"Diğer biçimler:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} daha",sample_text:"Örnek metin buraya gelecek",sample_button:"Örneğe tıklayın {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} değerlendirme",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"Listeye ekle",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"Listeye ekle",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"tüm ayrıntıları görün",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"Şimdi okuyun",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"Yeni hikayeleri keşfedin",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"karıştır",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"zh-CN":{resources:{bds_audible_sample_button_label:"Audible 样章",bds_author_follow_label:"✓ 已关注",bds_author_unfollow_label:"+ 关注",bds_download_sample_label:"下载样章",bds_blurb_read_full_article_label:"阅读全文",bds_ubf_book_single_other_format_label:"其他格式：",bds_ubf_book_other_formats_label:"其他格式：",bds_ubf_book_other_formats_more_text:"更多 {numberOfFormats} 个格式",sample_text:"此处为样章文本",sample_button:"单击样章 {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}，{numberOfReviews} 条评论",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"添加至列表",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"添加至列表",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"查看所有详细信息",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"立即阅读",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"发现新故事",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"随机推荐",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"节省 {savingsPercentage}",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}},"zh-TW":{resources:{bds_audible_sample_button_label:"Audible 試讀本",bds_author_follow_label:"✓ 正在關注",bds_author_unfollow_label:"+ 關注",bds_download_sample_label:"下載試讀本",bds_blurb_read_full_article_label:"閱讀完整文章",bds_ubf_book_single_other_format_label:"其他格式：",bds_ubf_book_other_formats_label:"其他格式：",bds_ubf_book_other_formats_more_text:"+ 多 {numberOfFormats} 個",sample_text:"試讀本文字於此",sample_button:"按一下試讀本 {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}，{numberOfReviews} 則評論",note:"This text is used as an ARIA a11y label after the star rating, e.g. '{3 out of 5 stars}, {50 reviews}' when focusing an ASIN's review stars component"},bds_add_to_list_button_common_label:{value:"加入清單",note:"This text is used to add a book to a users reading list"},bds_add_to_library_button_common_label:{value:"加入清單",note:"This text is used to add a book to a users library"},bds_see_details_button_common_label:{value:"查看所有詳細資料",note:"This text is used in a button to allow users to see the details of a product"},bds_read_now_button_label:{value:"立即閱讀",note:"This text is used in a button to allow user to read the book"},bds_discover_new_stories_button_rare_label:{value:"探索新故事",note:"used on a button to allow users to find other relevant books"},bds_shuffle_button_rare_label:{value:"隨機排列",note:"Used on a button to shuffle recommendation results"},bds_basis_price_text:{value:"{label} {basisPrice}",note:"This text is used to display original list price with strikethrough when a book has a deal price"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings or 1 credit"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents with Z percent savings"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}",note:"This text is used to read out the best price/deal customer can get on this item. It will read out in en locale similar to: 'X dollars and Y cents or 1 credit"},bds_savings_percentage_aria_text:{value:"省下 {savingsPercentage}",note:"This text is used when there is a deal on a price to describe how much savings the customer is getting"},bds_savings_percentage_text:{value:"-{savingsPercentage}",note:"This text is used to display to customers how much savings percentage will get with a '-' symbol"}}}},yt="en-US";function ft(e,t,i){var a,o,s;const r=(null===(o=null===(a=_t[null!=t?t:yt])||void 0===a?void 0:a.resources)||void 0===o?void 0:o[e])||(null===(s=_t[yt].resources)||void 0===s?void 0:s[e])||"";return void 0===i?kt(r):function(e,t){for(const i in t){const a=new RegExp("{"+i+"}","g");e=e.replace(a,t[i])}return e}(kt(r),i)}function kt(e){return"object"==typeof e?e.value:e}function wt(){return"rtl"===window.document.dir}var xt;e.StarRating=xt=class extends Me{constructor(){super(...arguments),this.hideEmptyStars=!1,this.layout="small",this.onClick=e=>{this.handleClick&&(e.preventDefault(),this.handleClick())}}getDefaultConfiguration(){return{starIconHeight:16,starIconWidth:15,starFullIconUrl:Le("starFullSmall.svg"),starHalfIconUrl:Le("starHalfSmall.svg"),starEmptyIconUrl:Le("starEmptySmall.svg"),fontSizeToken:"var(--bds-size-font-base-plus)",lineHeightToken:"var(--bds-size-line-height-base)",paddingStartToken:"2px",paddingEndToken:"4px",paddingBottomToken:"1px"}}getConfigurationOverrides(){return[{targeting:{layout:"small",theme:"dark"},overrides:{starFullIconUrl:Le("starFullSmallDark.svg"),starHalfIconUrl:Le("starHalfSmallDark.svg"),starEmptyIconUrl:Le("starEmptySmallDark.svg")}},{targeting:{layout:"small",devicetype:"desktop"},overrides:{fontSizeToken:"var(--bds-size-font-small)"}},{targeting:{layout:"mini"},overrides:{starIconHeight:12,starIconWidth:11,starFullIconUrl:Le("starFullMini.svg"),starHalfIconUrl:Le("starHalfMini.svg"),starEmptyIconUrl:Le("starEmptyMini.svg"),fontSizeToken:"var(--bds-size-font-small)",lineHeightToken:"var(--bds-size-line-height-base)",paddingBottomToken:"0"}},{targeting:{layout:"mini",theme:"dark"},overrides:{starFullIconUrl:Le("starFullMiniDark.svg"),starHalfIconUrl:Le("starHalfMiniDark.svg"),starEmptyIconUrl:Le("starEmptyMiniDark.svg")}},{targeting:{layout:"mini",devicetype:"desktop"},overrides:{fontSizeToken:"var(--bds-size-font-mini)",lineHeightToken:"var(--bds-size-line-height-mini)"}},{targeting:{layout:"medium"},overrides:{starIconHeight:19,starIconWidth:18,starFullIconUrl:Le("starFullMedium.svg"),starHalfIconUrl:Le("starHalfMedium.svg"),starEmptyIconUrl:Le("starEmptyMedium.svg")}},{targeting:{layout:"medium",theme:"dark"},overrides:{starFullIconUrl:Le("starFullMediumDark.svg"),starHalfIconUrl:Le("starHalfMediumDark.svg"),starEmptyIconUrl:Le("starEmptyMediumDark.svg")}},{targeting:{layout:"medium",devicetype:"desktop"},overrides:{fontSizeToken:"var(--bds-size-font-small)"}}]}getNumberofReviewsDisplayString(){var e,t;return this.numberOfReviewsDisplayString?this.numberOfReviewsDisplayString:null===(e=this.numberOfReviews)||void 0===e?void 0:e.toLocaleString(null===(t=this.renderContext)||void 0===t?void 0:t.locale)}getAriaLabel(){var e;const t=this.getNumberofReviewsDisplayString();return this.altText&&t?ft("bds_star_rating_review_count_summary",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{ratingSummary:this.altText,numberOfReviews:t})||`${this.altText}, ${t}`:this.altText?this.altText:t||""}renderReviewStarAndCount(){const e=this.getRenderConfiguration(this.layout),t=[];for(let i=0;i<this.numberOfStars;i++)t.push(G`<img
                    class="fullStar"
                    alt=""
                    src="${e.starFullIconUrl}"
                    width="${e.starIconWidth}"
                    height="${e.starIconHeight}" />`);if(this.hasHalfStar&&t.push(G`<img
                    class="halfStar"
                    alt=""
                    src="${e.starHalfIconUrl}"
                    width="${e.starIconWidth}"
                    height="${e.starIconHeight}" />`),!this.hideEmptyStars){const i=xt.MAX_REVIEW_STARS-this.numberOfStars-(this.hasHalfStar?1:0);for(let a=0;a<i;a++)t.push(G`<img
                        class="emptyStar"
                        alt=""
                        src="${e.starEmptyIconUrl}"
                        width="${e.starIconWidth}"
                        height="${e.starIconHeight}" />`)}return G`
            <span
                class="stars-container"
                style="font-size: ${e.fontSizeToken}; line-height: ${e.lineHeightToken}">
                ${at(this.shortDisplayString,(()=>G`
                        <span class="rating" aria-hidden="true"> ${this.shortDisplayString} </span>
                    `))}
                <span
                    class="stars"
                    style="padding: 0 ${e.paddingEndToken} ${e.paddingBottomToken} ${this.shortDisplayString?e.paddingStartToken:"0"}">
                    ${t}
                </span>
                ${at(this.numberOfReviewsDisplayString||this.numberOfReviews&&this.numberOfReviews>0,(()=>G`
                        <span class="numberOfReviews" aria-hidden="true">
                            ${this.getNumberofReviewsDisplayString()}
                        </span>
                    `))}
            </span>
        `}render(){return G`<div class="starRating">
            ${this.reviewUrl&&this.enableReviewsLink||this.handleClick?G`
                      <a
                          href="${tt(this.reviewUrl&&this.enableReviewsLink?this.reviewUrl:void 0)}"
                          @click=${this.onClick}
                          class="starRatingLink"
                          role="${this.handleClick?"button":"link"}"
                          aria-label=${tt(this.getAriaLabel())}>
                          ${this.renderReviewStarAndCount()}
                      </a>
                  `:G`
                      <span
                          class="starRatingLinkDisabled"
                          aria-label=${tt(this.getAriaLabel())}
                          role="text">
                          ${this.renderReviewStarAndCount()}
                      </span>
                  `}
        </div>`}},e.StarRating.MAX_REVIEW_STARS=5,e.StarRating.styles=ht,t([xe({type:Number})],e.StarRating.prototype,"numberOfStars",void 0),t([xe({type:Boolean})],e.StarRating.prototype,"hasHalfStar",void 0),t([xe({type:String})],e.StarRating.prototype,"numberOfReviewsDisplayString",void 0),t([xe({type:Number})],e.StarRating.prototype,"numberOfReviews",void 0),t([xe({type:String})],e.StarRating.prototype,"reviewUrl",void 0),t([xe({type:Boolean})],e.StarRating.prototype,"enableReviewsLink",void 0),t([xe({type:Boolean})],e.StarRating.prototype,"hideEmptyStars",void 0),t([xe({type:String})],e.StarRating.prototype,"layout",void 0),t([xe({type:String})],e.StarRating.prototype,"altText",void 0),t([xe({type:String})],e.StarRating.prototype,"shortDisplayString",void 0),t([xe()],e.StarRating.prototype,"handleClick",void 0),t([ye({context:$e,subscribe:!0})],e.StarRating.prototype,"renderContext",void 0),e.StarRating=xt=t([Ce("bds-star-rating")],e.StarRating);var Tt=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .badge-container {
        white-space: nowrap;
        font-size: var(--bds-size-font-small);
        line-height: var(--bds-size-line-height-base-plus);
    }

    .badge {
        background-color: var(--bds-color-background-badge);
        color: var(--bds-color-font-badge);
        margin-bottom: var(--bds-size-spacing-mini);
        padding: 0 5px;
        vertical-align: top;

        /**
         * This max-width is to prevent the badge from overflowing the container in grid UBF
         * Calculation details:
         * 100% (parent container) - 10px (badge padding) - 9px (stylized-edge width) - 8px (border radius of grid badge container)
         */
        max-width: calc(100% - 10px - 9px - 8px);

        ${ot(1,!0)};

        /**
         * This is required for the line clamp ellipses truncation
         */
        display: inline-block;
    }

    .stylized-edge {
        border-top: var(--bds-size-line-height-base-plus) solid var(--bds-color-background-badge);
        border-right: 9px solid transparent;
        display: inline-block;
        vertical-align: top;
    }

    /* TODO update with design token when available */
    .TOP_SELLER .badge {
        background-color: #d14900;
    }

    /* TODO update with design token when available */
    .TOP_SELLER .stylized-edge {
        border-top-color: #d14900;
    }

    .stylized-edge:dir(rtl) {
        transform: scaleX(-1);
    }

    .secondaryText {
        color: #11100f;
        font-family: var(--bds-font-family-body);
    }
`;e.BookMetadataBadge=class extends be{render(){return at(this.giftGuideBadgeLabel,(()=>G`<div class="badge-container ${this.badgeType}">
                <span class="badge">${this.giftGuideBadgeLabel}</span><span class="stylized-edge"></span> ${at(this.secondaryText,(()=>G`<span class="secondaryText">${this.secondaryText}</span>`))}
            </div>`))}},e.BookMetadataBadge.styles=Tt,t([xe({type:String})],e.BookMetadataBadge.prototype,"giftGuideBadgeLabel",void 0),t([xe({type:String})],e.BookMetadataBadge.prototype,"secondaryText",void 0),t([xe({type:String})],e.BookMetadataBadge.prototype,"badgeType",void 0),e.BookMetadataBadge=t([Ce("bds-book-metadata-badge")],e.BookMetadataBadge);var $t=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .format {
        color: var(--bds-color-font-secondary);
        font-size: var(--bds-size-font-base);
        font-weight: var(--bds-weight-font-base);
        line-height: var(--bds-size-line-height-base);
        ${ot(1)};
    }

    .format-container {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-mini);
        margin-bottom: var(--bds-size-spacing-mini);
    }

    /* TODO remove fallbacks when token v2 migration is complete */
    .secondary-compact .format {
        font-size: var(--bds-size-font-functional-body-small, var(--bds-size-font-small));
        color: var(
            --bds-color-functional-neutral-on-surface-variant,
            var(--bds-color-font-secondary)
        );
    }

    .secondary-compact.format-container,
    .primary.format-container {
        margin-bottom: 0;
    }

    .primary .format {
        color: var(--bds-color-functional-neutral-on-surface, var(--bds-color-font-primary));
    }
`;e.BookFormat=class extends be{constructor(){super(...arguments),this.layout="secondary"}render(){return at(this.format,(()=>{var e;return G`
                <div class="format-container ${this.layout}">
                    ${this.secondaryBadge&&Pt(this.secondaryBadge)}
                    <div class="format ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">${this.format}</div>
                </div>
            `}))}},e.BookFormat.styles=$t,t([xe({type:String})],e.BookFormat.prototype,"format",void 0),t([xe({type:Object})],e.BookFormat.prototype,"secondaryBadge",void 0),t([xe({type:String})],e.BookFormat.prototype,"layout",void 0),t([ye({context:$e,subscribe:!0})],e.BookFormat.prototype,"renderContext",void 0),e.BookFormat=t([Ce("bds-book-format")],e.BookFormat);const Pt=e=>G`
        <bds-program-badge
            badgePhysicalId=${tt(e.badgePhysicalId)}
            badgeAltText=${tt(e.badgeAltText)}
            badgeExtension=${tt(e.badgeExtension)}
            badgeImageHeightPx=${tt(e.badgeImageHeightPx)}>
        </bds-program-badge>
    `;var Ct=[v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .price {
        color: var(--bds-color-font-primary);
        display: inline-block;
        margin-bottom: var(--bds-size-spacing-mini);
        font-size: var(--bds-size-font-base-plus);
        line-height: var(--bds-size-line-height-base);
    }

    .price.you-pay .promotion-message {
        color: var(--bds-color-font-secondary);
        margin-bottom: var(--bds-size-spacing-mini);
        font-size: var(--bds-size-font-small);
        line-height: var(--bds-size-line-height-small);
    }

    .price-field {
        display: inline-block;
    }

    /* stylelint-disable-next-line selector-class-pattern */
    .currencySymbol {
        font-size: var(--bds-size-font-mini);
        line-height: var(--bds-size-font-mini);
        vertical-align: 20%;
    }

    .membership-message {
        color: var(--bds-color-font-primary);
        margin-bottom: var(--bds-size-spacing-mini);
        font-size: var(--bds-size-font-small);
        line-height: var(--bds-size-line-height-small);
    }

    .basis-price {
        color: var(--bds-color-font-primary);
        font-size: var(--bds-size-font-small);
        line-height: var(--bds-size-line-height-small);
    }

    .basis-price .basis-price-display-string {
        text-decoration: line-through;
    }

    .price.inline {
        display: flex;
        column-gap: 24px;
        align-items: baseline;
        flex-flow: row wrap;
    }

    .price-format-parts-wrapper {
        display: inline;
    }

    /* TODO remove fallbacks below once tokenv2 migration is completed */
    .rio.price,
    .price.inline {
        margin-bottom: 0;
    }

    .price .deal-percentage {
        color: var(--bds-color-functional-supplemental-discount, #d60d0d);
        font-family: var(
            --bds-price-block-discount-percent-font-family,
            var(--bds-font-family-body)
        );
        font-size: var(--bds-price-block-discount-percent-size-font, var(--bds-size-font-medium));
        font-weight: var(--bds-price-block-discount-percent-font-weight, 300);
        line-height: var(
            --bds-price-block-discount-percent-size-line-height,
            var(--bds-size-line-height-small)
        );
    }

    .price .price-to-pay-message {
        font-size: var(--bds-size-font-functional-body-small, var(--bds-size-font-small));
        color: var(
            --bds-color-functional-neutral-on-surface-variant,
            var(--bds-color-font-secondary)
        );
    }

    .rio-format.price-field.currencySymbol,
    .rio-format.price-field.fractionalValue,
    .rio-format.price-field.integerValue {
        font-family: var(--bds-price-block-item-price-font-family, var(--bds-font-family-body));
        font-weight: var(--bds-price-block-item-price-font-weight, var(--bds-weight-font-base));
    }

    .rio-format.price-field.currencySymbol,
    .rio-format.price-field.fractionalValue {
        font-size: var(
            --bds-price-block-item-price-size-font-superscript,
            var(--bds-size-font-micro)
        );
        line-height: var(
            --bds-price-block-item-price-size-line-height-superscript,
            var(--bds-size-line-height-micro)
        );
        vertical-align: text-top;
    }

    .rio-format.price-field.integerValue {
        font-size: var(--bds-price-block-item-price-size-font-main, var(--bds-size-font-medium));
        line-height: var(
            --bds-price-block-item-price-size-line-height-main,
            var(--bds-size-line-height-medium)
        );
    }

    .rio-format.price-field.decimalSeparator {
        display: none;
    }
`,dt()];e.BookPrice=class extends be{constructor(){super(...arguments),this.layout="multiline"}isValidPriceFormatParts(e){var t,i;return!!((null==e?void 0:e.displayString)&&(null==e?void 0:e.displayFieldOrder)&&(null===(t=null==e?void 0:e.displayFields)||void 0===t?void 0:t.currencySymbol)&&(null===(i=null==e?void 0:e.displayFields)||void 0===i?void 0:i.integerValue))}renderPriceFormatParts(e,t,i){var a,o;let s=[...e.displayFieldOrder];wt()&&(null==e?void 0:e.displayFieldOrder)&&(null===(o=null===(a=this.priceFormatParts)||void 0===a?void 0:a.displayFields)||void 0===o?void 0:o.currencySymbol)&&(s=[...e.displayFieldOrder].filter((e=>"currencySymbol"!==e)),s.unshift("currencySymbol"));const r=s.filter((t=>{var i;return!!(null===(i=null==e?void 0:e.displayFields)||void 0===i?void 0:i[t])})).map((t=>{const a="currencySymbol"===t&&wt()?"rtl":void 0;return G`<div
                    class="price-field ${t} ${this.layout} ${i}"
                    aria-hidden="true"
                    dir="${tt(a)}">
                    ${null==e?void 0:e.displayFields[t]}
                </div>`}));return G`
            ${at(r,(()=>G`<div class="price-format-parts-wrapper" dir="ltr">${r}</div>`))}
            ${at(t&&(null==e?void 0:e.displayString),(()=>G`<span class="offscreen">${null==e?void 0:e.displayString}</span>`))}
        `}getPriceAmountAriaLabel(e){var t,i,a;const o=this.savingsPercentageDisplayString&&ft("bds_savings_percentage_aria_text",null===(t=this.renderContext)||void 0===t?void 0:t.locale,{savingsPercentage:this.savingsPercentageDisplayString})||"",s=(null===(i=this.audiblePromotion)||void 0===i?void 0:i.audibleMemberMessage)||"";if(!e||!o&&!s)return;let r;return r=o&&s?"bds_price_amount_with_savings_percentage_with_audible_message_aria_text":o?"bds_price_amount_with_savings_percentage_aria_text":"bds_price_amount_with_audible_message_aria_text",ft(r,null===(a=this.renderContext)||void 0===a?void 0:a.locale,{priceToPay:e,audibleMessage:s,savingsPercentage:o})}render(){var e,t,i,a;if(this.youPayPromotion&&this.youPayPromotion.youPayAmount&&this.youPayPromotion.basePrice&&this.youPayPromotion.promotionMessage)return G`
                <div class="price you-pay">
                    <div class="amount">${this.youPayPromotion.youPayAmount}</div>
                    <div class="promotion-message">
                        ${this.youPayPromotion.basePrice} ${this.youPayPromotion.promotionMessage}
                    </div>
                </div>
            `;const o=null!==(t=null===(e=this.priceFormatParts)||void 0===e?void 0:e.displayString)&&void 0!==t?t:this.unstylizedPrice,s=this.getPriceAmountAriaLabel(o||""),r="inline"===this.layout||"rio"===this.layout?"rio-format":void 0;return G`
            <div class="price ${this.layout} ${r}">
                <div class="amount">
                    ${at(this.savingsPercentageDisplayString&&this.basisPriceDisplayString,(()=>{var e;const t=this.savingsPercentageDisplayString&&ft("bds_savings_percentage_text",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{savingsPercentage:this.savingsPercentageDisplayString});return at(!!t,(()=>G`<span class="deal-percentage" aria-hidden="true">
                                    ${t}
                                </span>`))}))}
                    ${at(this.isValidPriceFormatParts(this.priceFormatParts),(()=>this.renderPriceFormatParts(this.priceFormatParts,!s,r)),(()=>at(!!o,(()=>G`<span aria-hidden=${!!s}
                                        >${o}</span
                                    >`))))}
                    ${at("inline"!==this.layout&&(null===(i=this.audiblePromotion)||void 0===i?void 0:i.audibleMemberMessage),(()=>{var e;return G`
                            <span class="membership-message" aria-hidden="true">
                                ${null===(e=this.audiblePromotion)||void 0===e?void 0:e.audibleMemberMessage}
                            </span>
                        `}))}
                    ${at(!!s,(()=>G`<span class="offscreen"> ${s} </span>`))}
                </div>

                ${at(this.basisPriceDisplayString,(()=>G` <span class="basis-price" aria-hidden="true">
                        ${at(this.basisPriceLabel&&"inline"!==this.layout,(()=>G`<span class="basis-price-label" aria-hidden="true">
                                    ${this.basisPriceLabel}
                                </span>`))}
                        ${at(this.basisPriceDisplayString,(()=>G`<span class="basis-price-display-string" aria-hidden="true">
                                    ${this.basisPriceDisplayString}
                                </span>`))}
                    </span>`))}
                ${at(this.basisPriceDisplayString,(()=>{var e;const t=!(!this.basisPriceDisplayString||!this.basisPriceLabel)&&ft("bds_basis_price_text",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{label:this.basisPriceLabel,basisPrice:this.basisPriceDisplayString});return at(!!t,(()=>G`<span class="offscreen"> ${t} </span>`))}))}
                ${at("inline"===this.layout&&(null===(a=this.audiblePromotion)||void 0===a?void 0:a.audibleMemberMessage),(()=>{var e;return G`
                        <span class="membership-message" aria-hidden="true">
                            ${null===(e=this.audiblePromotion)||void 0===e?void 0:e.audibleMemberMessage}
                        </span>
                    `}))}
                ${at(this.priceToPayMessage,(()=>G`<div class="price-to-pay-message">${this.priceToPayMessage}</div>`))}
            </div>
        `}},e.BookPrice.styles=Ct,t([ye({context:$e,subscribe:!0})],e.BookPrice.prototype,"renderContext",void 0),t([xe({type:String})],e.BookPrice.prototype,"unstylizedPrice",void 0),t([xe({type:Object})],e.BookPrice.prototype,"priceFormatParts",void 0),t([xe({type:Object})],e.BookPrice.prototype,"youPayPromotion",void 0),t([xe({type:Object})],e.BookPrice.prototype,"audiblePromotion",void 0),t([xe({type:String})],e.BookPrice.prototype,"basisPriceDisplayString",void 0),t([xe({type:String})],e.BookPrice.prototype,"basisPriceLabel",void 0),t([xe({type:String})],e.BookPrice.prototype,"layout",void 0),t([xe({type:String})],e.BookPrice.prototype,"savingsPercentageDisplayString",void 0),t([xe({type:String})],e.BookPrice.prototype,"priceToPayMessage",void 0),e.BookPrice=t([Ce("bds-book-price")],e.BookPrice);var St=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .points {
        color: var(--bds-color-font-secondary);
        font-size: var(--bds-size-font-base);
        font-weight: var(--bds-weight-font-base);
        line-height: var(--bds-size-line-height-base);
        margin-bottom: var(--bds-size-spacing-mini);

        ${ot(1)};
    }
`;e.BookPoints=class extends be{getPointsDisplay(){var e;return(null===(e=this.pointsV2)||void 0===e?void 0:e.displayString)?this.pointsV2.displayString:this.points?this.points:""}render(){var e;return this.points||this.pointsV2?G`<div class="points ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">
                ${this.getPointsDisplay()}
            </div>`:X}},e.BookPoints.styles=St,t([xe({type:String})],e.BookPoints.prototype,"points",void 0),t([xe({type:Object})],e.BookPoints.prototype,"pointsV2",void 0),t([ye({context:$e,subscribe:!0})],e.BookPoints.prototype,"renderContext",void 0),e.BookPoints=t([Ce("bds-book-points")],e.BookPoints);var Bt=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .formats {
        color: var(--bds-color-font-secondary);
        font-weight: var(--bds-weight-font-base);
        margin-bottom: var(--bds-size-spacing-mini);
        line-height: var(--bds-size-line-height-base);
        font-size: var(--bds-size-font-base);
    }

    .formats.larger-text {
        font-size: var(--bds-size-font-base-plus);
        line-height: var(--bds-size-line-height-base-plus);
    }

    .formats a {
        color: var(--bds-color-font-secondary);
        font-weight: var(--bds-weight-font-base);
        margin-bottom: var(--bds-size-spacing-mini);
        line-height: var(--bds-size-line-height-base);
        font-size: var(--bds-size-font-base);
    }

    .formats.larger-text a {
        font-size: var(--bds-size-font-base-plus);
        line-height: var(--bds-size-line-height-base-plus);
    }
`;e.BookOtherFormats=class extends Me{getDefaultConfiguration(){return{enableLargerText:!1,disableIndividualFormatLinks:!1}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{disableIndividualFormatLinks:!0}},{targeting:{devicetype:"tablet"},overrides:{disableIndividualFormatLinks:!0}},{targeting:{devicetype:"desktop"},overrides:{enableLargerText:!0}}]}render(){var e,t;const i=this.getRenderConfiguration();if(!Array.isArray(this.allFormats)||!this.allFormats.length)return X;let a=[];const o=Math.min(this.allFormats.length,void 0!==this.numFormatsToShow?this.numFormatsToShow:3);if(a=[...this.allFormats].splice(0,o).map((e=>i.disableIndividualFormatLinks?e.displayString:G`<a href="${e.detailUrl}"> ${e.displayString} </a>`)),this.allFormats.length>o){const t=this.allFormats.length-o,s=ft("bds_ubf_book_other_formats_more_text",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{numberOfFormats:t});!i.disableIndividualFormatLinks&&this.detailPage?a.push(G`<a href="${this.detailPage}"> ${s} </a>`):a.push(G`${s}`)}const s=
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function*(e,t){var i="function"==typeof t;if(void 0!==e){var a=-1;for(var o of e)a>-1&&(yield i?t(a):t),a++,yield o}}(a,G`<span aria-hidden="true">, </span>`),r=ft(1===o?"bds_ubf_book_single_other_format_label":"bds_ubf_book_other_formats_label",null===(t=this.renderContext)||void 0===t?void 0:t.locale);return G`<div class="formats ${i.enableLargerText?"larger-text":""}">
            ${r}
            ${i.disableIndividualFormatLinks&&this.detailPage?G`<a href="${this.detailPage}"> ${s} </a>`:s}
        </div>`}},e.BookOtherFormats.styles=Bt,t([xe({type:String})],e.BookOtherFormats.prototype,"detailPage",void 0),t([xe({type:Number})],e.BookOtherFormats.prototype,"numFormatsToShow",void 0),t([xe({type:Array,attribute:!1})],e.BookOtherFormats.prototype,"allFormats",void 0),e.BookOtherFormats=t([Ce("bds-book-other-formats")],e.BookOtherFormats);var At=v`
    .blurb-wrapper {
        min-height: 295px;
        min-width: 231px;
        width: min-content;
        display: grid;
        grid-template-columns: 11px auto;
        box-sizing: border-box;
        word-wrap: break-word;
        word-break: break-word;
        font-family: var(--bds-font-family-body);
        color: var(--bds-color-font-primary);
        padding-left: var(--bds-size-spacing-mini);
    }

    .blurb-wrapper.compact {
        min-height: 295px;
        min-width: 160px;
    }

    .blurb-container {
        display: flex;
        flex-direction: column;
        position: relative;
        border-style: solid;
        padding: var(--bds-size-spacing-small-plus);
        line-height: var(--bds-size-line-height-base);
        border-width: var(--bds-size-border-thin);
        border-color: var(--bds-color-border-medium);
        border-left-width: var(--bds-size-border-extra-thick);
        border-left-color: #28a7dd;
    }

    .compact .blurb-container {
        padding: var(--bds-size-spacing-mini-plus);
        line-height: var(--bds-size-line-height-small);
    }

    .pointer-arrow {
        clip-path: polygon(
            0px 105px,
            10px 114px,
            10px 100%,
            11px 100%,
            11px 96px,
            11px 0%,
            10px 0%,
            10px 96px,
            0px 105px
        );
        background: #28a7dd;
    }

    a.blurb-container-link {
        color: unset;
        text-decoration: none;
        height: 100%;
    }

    .blurb-quote {
        display: block;
        align-self: flex-start;
        border: 0;
        height: 35px;
    }

    .compact .blurb-quote {
        height: 23px;
    }

    .blurb-text-container {
        margin-bottom: var(--bds-size-spacing-mini-plus);
    }

    .blurb-text {
        position: relative;
        font-size: var(--bds-size-font-base);
        padding-top: var(--bds-size-spacing-mini);
        margin-top: 0;
    }

    .blurb-text::after {
        content: '';
        position: absolute;
        pointer-events: none;
        height: var(--bds-size-spacing-medium);
        background: linear-gradient(to bottom, transparent, var(--bds-color-background-base));
        visibility: var(--fade-out-overlay-visibility, hidden);
        left: 0;
        bottom: 0;
        width: 100%;
    }

    a.read-full-article-link {
        text-decoration: none;
        cursor: pointer;
        display: block;
        color: var(--bds-color-font-link);
    }

    a.read-full-article-link:hover {
        text-decoration: underline;
    }

    .blurb-author-bottom-align {
        margin-top: auto;
    }

    .blurb-card-line {
        height: 5px;
        width: 45px;
        background-color: #28a7dd;
    }

    .compact .blurb-card-line {
        width: 35px;
    }

    .blurb-contributor-container {
        display: flex;
        padding-block: var(--bds-size-spacing-small);
        font-size: var(--bds-size-font-base-plus);
        min-height: 45px;
    }

    .compact .blurb-contributor-container {
        display: block;
        padding-block: var(--bds-size-spacing-mini-plus);
    }

    .blurb-contributor-details {
        padding-left: var(--bds-size-spacing-small);
    }

    .compact .blurb-contributor-details {
        padding-left: 0;
    }

    .blurb-contributor-image {
        position: relative;
        vertical-align: top;
        height: 45px;
        width: 45px;
        border-radius: 50%;
    }

    .compact .blurb-contributor-image {
        vertical-align: top;
        height: 34px;
        width: 34px;
    }

    .blurb-contributor-head {
        color: var(--bds-color-font-secondary);
    }

    a.blurb-contributor-subhead {
        text-decoration: none;
        font-weight: var(--bds-weight-font-heavy);
        color: var(--bds-color-font-selected);
    }

    a.blurb-contributor-subhead:hover {
        text-decoration: underline;
    }
`;let It=class extends Me{getDefaultConfiguration(){return{displayMode:"default"}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{displayMode:"compact"}}]}firstUpdated(){this.updateBlurbContextOnOverflow()}updated(e){e.has("blurbMetadata")&&this.updateBlurbContextOnOverflow()}updateBlurbContextOnOverflow(){const e=this.renderRoot.querySelector(".blurb-text");e instanceof HTMLElement&&(e.scrollHeight>e.clientHeight?e.style.setProperty("--fade-out-overlay-visibility","visible"):e.style.setProperty("--fade-out-overlay-visibility","hidden"))}shouldRenderBlurb(){var e,t;const i=!!(null===(e=this.blurbMetadata)||void 0===e?void 0:e.blurbText);return!!(null===(t=this.blurbMetadata)||void 0===t?void 0:t.blurbRefUrl)&&i}renderBlurbTextContainer(){var e,t;const i=function(e){if("string"!=typeof e)return!1;try{return new URL(e).protocol.startsWith("http")}catch(e){return!1}}(null===(e=this.blurbMetadata)||void 0===e?void 0:e.articleRefUrl);return G` <div class="blurb-text-container">
            <div class="blurb-text" .style="${at(i,(()=>ot(7)))}">
                ${null===(t=this.blurbMetadata)||void 0===t?void 0:t.blurbText}
            </div>
            ${at(i,(()=>{var e,t;return G`<a
                    href="${tt(null===(e=this.blurbMetadata)||void 0===e?void 0:e.articleRefUrl)}"
                    class="read-full-article-link"
                    >${ft("bds_blurb_read_full_article_label",null===(t=this.renderContext)||void 0===t?void 0:t.locale)}</a
                >`}))}
        </div>`}renderContributorContainer(){var e,t,i;const a=!!(null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorImageUrl),o=!!(null===(t=this.blurbMetadata)||void 0===t?void 0:t.contributorSubHeading);return at(!!(null===(i=this.blurbMetadata)||void 0===i?void 0:i.contributorHeading),(()=>{var e;return G` <div class="blurb-contributor-container">
                ${at(a,(()=>{var e;return G` <div aria-hidden="true" class="blurb-contributor-image-container">
                        <img
                            alt=""
                            src="${tt(null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorImageUrl)}"
                            class="blurb-contributor-image" />
                    </div>`}))}
                <div class="blurb-contributor-details">
                    <div>
                        <span class="blurb-contributor-head"
                            >${null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorHeading}</span
                        >
                    </div>
                    ${at(o,(()=>{var e,t;return G` <div>
                            <a
                                class="blurb-contributor-subhead"
                                href="${tt(null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorRefUrl)}">
                                ${null===(t=this.blurbMetadata)||void 0===t?void 0:t.contributorSubHeading}</a
                            >
                        </div>`}))}
                </div>
            </div>`}))}render(){const e=this.getRenderConfiguration();return G` ${at(this.shouldRenderBlurb(),(()=>{var t;return G` <div class="blurb-wrapper ${e.displayMode}">
                <div class="pointer-arrow"></div>
                <div class="blurb-container">
                    <img
                        alt=""
                        class="blurb-quote"
                        src="https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/blurbQuote.svg"
                        aria-hidden="true" />
                    <a
                        class="blurb-container-link"
                        href="${tt(null===(t=this.blurbMetadata)||void 0===t?void 0:t.blurbRefUrl)}">
                        ${this.renderBlurbTextContainer()}
                    </a>
                    <div class="blurb-author-bottom-align">
                        <div class="blurb-card-line"></div>
                        ${this.renderContributorContainer()}
                    </div>
                </div>
            </div>`}))}`}};It.styles=At,t([xe({type:Object})],It.prototype,"blurbMetadata",void 0),It=t([Ce("bds-book-blurb")],It);var zt=v`
    :host {
        font-family: var(--bds-font-family-body);
    }

    .delivery-badge {
        display: flex;
        align-items: center;
    }

    .delivery-message {
        font-size: var(--bds-size-font-mini);
        font-weight: var(--bds-weight-font-base);
        line-height: var(--bds-size-line-height-mini);
    }

    .delivery-fragment-strong {
        font-weight: var(--bds-weight-font-heavy);
    }

    .delivery-fragment-nowrap {
        white-space: nowrap;
    }

    .delivery-promise-wrapper.spaced {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;e.DeliveryPromise=class extends be{render(){var e,t,i;return at((null===(e=this.deliveryInfo)||void 0===e?void 0:e.deliveryBadge)&&(null===(i=null===(t=this.deliveryInfo)||void 0===t?void 0:t.deliveryMessageFragmentList)||void 0===i?void 0:i.length),(()=>{var e,t,i,a;return G`
                <div class="delivery-promise-wrapper ${this.layout}">
                    <div class="delivery-badge ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">
                        ${(null===(t=this.deliveryInfo)||void 0===t?void 0:t.deliveryBadge)&&Lt(this.deliveryInfo.deliveryBadge)}
                    </div>
                    ${at(null===(a=null===(i=this.deliveryInfo)||void 0===i?void 0:i.deliveryMessageFragmentList)||void 0===a?void 0:a.length,(()=>{var e;return G`<div class="delivery-message">
                            ${Rt(null===(e=this.deliveryInfo)||void 0===e?void 0:e.deliveryMessageFragmentList)}
                        </div>`}))}
                </div>
            `}))}},e.DeliveryPromise.styles=zt,t([xe({type:Object})],e.DeliveryPromise.prototype,"deliveryInfo",void 0),t([ye({context:$e,subscribe:!0})],e.DeliveryPromise.prototype,"renderContext",void 0),t([xe({type:String})],e.DeliveryPromise.prototype,"layout",void 0),e.DeliveryPromise=t([Ce("bds-delivery-promise")],e.DeliveryPromise);const Lt=e=>G`
        <bds-program-badge
            badgePhysicalId=${tt(e.badgePhysicalId)}
            badgeAltText=${tt(e.badgeAltText)}
            badgeExtension=${tt(e.badgeExtension)}
            badgeImageHeightPx=${tt(e.badgeImageHeightPx)}>
        </bds-program-badge>
    `,Rt=e=>void 0===e?X:e.map((e=>{var t,i;return e.text?G`
            <span
                class="${(null===(t=e.style)||void 0===t?void 0:t.strong)?"delivery-fragment-strong":""} ${(null===(i=e.style)||void 0===i?void 0:i.noWrap)?"delivery-fragment-nowrap":""}">
                ${e.text}
            </span>
        `:X}));var Ot=v`
    .overlay-container {
        border: 1px solid;
        height: 23px;
        line-height: 23px;
        font-size: var(--bds-size-font-base);
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        background: white;
        width: max-content;
        padding: 1px 5px;
        margin-right: 2px;
        margin-top: 1px;
        color: black;
        box-shadow: 0.5px 0.5px;
    }
`;e.SeriesOverlay=class extends Me{getDefaultConfiguration(){return{textLineHeight:"--bds-size-line-height-small",fontSize:"--bds-size-font-small"}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile",marketplace:"A1VC38T7YXB528"},overrides:{textLineHeight:"--bds-size-line-height-small",fontSize:"--bds-size-font-small"}},{targeting:{devicetype:"tablet",marketplace:"A1VC38T7YXB528"},overrides:{textLineHeight:"--bds-size-line-height-small",fontSize:"--bds-size-font-small"}}]}render(){const e=this.getRenderConfiguration();return G`<div
            class="overlay-container"
            style="line-height: var(${e.textLineHeight}); font-size: var(${e.fontSize});">
            <p>${this.label}</p>
        </div>`}},e.SeriesOverlay.styles=Ot,t([xe({type:String})],e.SeriesOverlay.prototype,"label",void 0),e.SeriesOverlay=t([Ce("bds-series-overlay")],e.SeriesOverlay);const Ft=[{targeting:{pagetype:"primeReadingStorefront",devicetype:"desktop"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0}}},{targeting:{pagetype:"primeReadingStorefront",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"primeReadingStorefront",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}}],Mt=[{targeting:{pagetype:"kuStorefront",devicetype:"desktop"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0}}},{targeting:{pagetype:"kuStorefront",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1}}},{targeting:{pagetype:"kuStorefront",devicetype:"mobile",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookTitleContentConfiguration:void 0}},{targeting:{pagetype:"kuStorefront",devicetype:"mobile",operatingsystem:"android",hostapplication:"kindle"},overrides:{bookTitleContentConfiguration:{primaryText:"author",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0}}},{targeting:{pagetype:"kuStorefront",devicetype:"tablet",hostapplication:"default"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0}}},{targeting:{pagetype:"kuStorefront",devicetype:"tablet",operatingsystem:"iOS"},overrides:{bookTitleContentConfiguration:void 0}},{targeting:{pagetype:"kuStorefront",devicetype:"tablet",hostapplication:"mShop",operatingsystem:"android"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1}}},{targeting:{pagetype:"kuStorefront",devicetype:"tablet",hostapplication:"kindle",operatingsystem:"android"},overrides:{bookTitleContentConfiguration:void 0}}],Et=[{targeting:{pagetype:"eBooksTYP"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0,enableProgramBadge:!0}},{targeting:{pagetype:"eBooksTYP",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"eBooksTYP",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"eBooksTYP",devicetype:"desktop"},overrides:{enableBookFormat:!0}},{targeting:{pagetype:"eBooksTYP",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}},{targeting:{pagetype:"eBooksTYP",operatingsystem:"iOS",hostapplication:"mShop"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}}],Ut=[{targeting:{pagetype:"limber"},overrides:{bookTitleContentConfiguration:{primaryText:"headline",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!0,tertiaryText:void 0,enableTertiaryLink:!0,suppressTertiaryAria:!1,enableQuickView:!1},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},enableBookPoints:!1,enableBookMetadataBadge:!0}}],Ht=[{targeting:{layout:"metadata-only"},overrides:{bookCoverImageConfiguration:{disableBookCoverImage:!0,enableQuickView:!1},enableProgramBadgeInMetadataBlock:!0}},{targeting:{layout:"blurred-backdrop"},overrides:{layoutConfiguration:{bookCoverImageLayout:"blurredBackdrop",starRatingLayout:"mini"},enableProgramBadgeInMetadataBlock:!0}},{targeting:{layout:"contained"},overrides:{layoutConfiguration:{bookCoverImageLayout:"contained",starRatingLayout:void 0}}},{targeting:{layout:"containedBaseline"},overrides:{layoutConfiguration:{bookCoverImageLayout:"containedBaseline",starRatingLayout:void 0}}},{targeting:{layout:"grid"},overrides:{layoutConfiguration:{bookCoverImageLayout:"grid",starRatingLayout:void 0,bookTitleContentLayout:"compact",priceLayout:"rio",bookFormatLayout:"secondary-compact"},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!0,enableQuickView:!0},enableProgramBadgeInMetadataBlock:!0,enableProgramBadge:!0,enableBookMetadataBadge:!0,enableDeliveryPromise:!0,enableBookFormat:!0}},{targeting:{layout:"grid",devicetype:"mobile"},overrides:{enableStarRatingPrimaryTapAction:!0,starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{layout:"grid",devicetype:"tablet"},overrides:{enableStarRatingPrimaryTapAction:!0,starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{layout:"mosaic"},overrides:{layoutConfiguration:{bookCoverImageLayout:"responsiveToContainer",starRatingLayout:"mini",priceLayout:"inline",bookFormatLayout:"primary"},starRatingConfiguration:{enableReviewsLink:!0},enableBookFormat:!0,enableProgramBadge:!0,enableProgramBadgeInMetadataBlock:!0,enableBookMetadataBadge:!0,bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableDeliveryPromise:!0}},{targeting:{layout:"mosaic",devicetype:"mobile"},overrides:{enableStarRatingPrimaryTapAction:!0,starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{layout:"mosaic",devicetype:"tablet"},overrides:{enableStarRatingPrimaryTapAction:!0,starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{layout:"list"},overrides:{layoutConfiguration:{bookCoverImageLayout:"list",starRatingLayout:void 0,bookTitleContentLayout:"compact",priceLayout:"rio",bookFormatLayout:"secondary-compact"},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!0,enableQuickView:!1},enableProgramBadgeInMetadataBlock:!0,enableProgramBadge:!0,enableBookMetadataBadge:!1,enableBookFormat:!0}},{targeting:{layout:"list",devicetype:"mobile"},overrides:{enableStarRatingPrimaryTapAction:!0,starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{layout:"list",devicetype:"tablet"},overrides:{enableStarRatingPrimaryTapAction:!0,starRatingConfiguration:{enableReviewsLink:!1}}}],Dt=[{targeting:{marketplace:"AAHKV2X7AFYLW"},overrides:{fontFamilyCSSVariable:"--bds-font-family-china"}},{targeting:{marketplace:"A1VC38T7YXB528"},overrides:{fontFamilyCSSVariable:"--bds-font-family-japan",enableBookPoints:!0}},{targeting:{devicetype:"mobile"},overrides:{seriesOverlayConfiguration:{topOffsetPx:18}}}].concat([{targeting:{pagetype:"storefront"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0,enableBookMetadataBadge:!0,enableProgramBadge:!0,enableBookFormat:!0}},{targeting:{pagetype:"storefront",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"storefront",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"storefront",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}},{targeting:{pagetype:"storefront",operatingsystem:"iOS",hostapplication:"mShop"},overrides:{bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0}}]).concat([{targeting:{pagetype:"multiFormatConfig"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!0,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},enableBookFormat:!0,enableBookMetadataBadge:!0,enableBookPoints:!0,bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookSponsored:!1,enableBookFormats:!0,enableBookBlurb:!0}},{targeting:{pagetype:"multiFormatConfig",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"multiFormatConfig",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"multiFormatConfig",hostapplication:"mShop",operatingsystem:"iOS"},overrides:{enableBookPoints:!1,bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1}}},{targeting:{pagetype:"multiFormatConfig",hostapplication:"kindle",operatingsystem:"iOS"},overrides:{enableBookPoints:!1,bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1}}}]).concat(Ft).concat(Mt).concat(Et).concat([{targeting:{pagetype:"detailPage"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!0,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0,enableBookFormat:!0,enableBookFormats:!1,enableDeliveryPromise:!0}},{targeting:{pagetype:"detailPage",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"detailPage",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"detailPage",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}}]).concat([{targeting:{pagetype:"kindleHome"},overrides:{enableMetadataBlock:!1}}]).concat(Ut).concat(Ht),Vt="bds-";var Nt;!function(e){e.FATAL="FATAL",e.ERROR="ERROR",e.WARN="WARN"}(Nt||(Nt={}));class jt{static logCountMetric(...e){var t;const i=this.getMetricName(e);null===(t=window.ue)||void 0===t||t.count(i,1)}static getMetricName(e){return Vt.concat(e.join("-"))}static logJSErrorMetric(e,t,i,a){var o;const s={logLevel:t,attribution:Vt.concat(i),message:a};null===(o=window.ue)||void 0===o||o.ueLogError(e,s)}}const Wt=()=>window.WebViewWidget,Gt=()=>{var e;return null===(e=window.webkit)||void 0===e?void 0:e.messageHandlers},Qt={openWebPage:(e,t,i,a=!1)=>{var o,s,r,n;if(Wt()){const n=(e=>{try{return new URL(e),!0}catch(e){return!1}})(e)?e:new URL(e,"localhost"===window.location.hostname?"https://www.amazon.com":window.location.origin).href;(null===(o=Wt())||void 0===o?void 0:o.openWebUrl)?null===(s=Wt())||void 0===s||s.openWebUrl(n,t||void 0,i||"",a):null===(r=Wt())||void 0===r||r.openWebPage(n,t||void 0,i||"")}else if(Gt()){const a={url:e};t&&(a.viewTitle=t),i&&(a.reftag=i),null===(n=Gt())||void 0===n||n.openWebPage.postMessage(a)}},isOpenWebPageAvailable:()=>{var e,t,i;return!!((null===(e=Wt())||void 0===e?void 0:e.openWebPage)||(null===(t=Wt())||void 0===t?void 0:t.openWebUrl)||(null===(i=Gt())||void 0===i?void 0:i.openWebPage))},isNativeBridgeAvailable:()=>!(!Wt()&&!Gt()),reportActionMetric:(e,t)=>{var i,a,o,s;(null===(i=Wt())||void 0===i?void 0:i.reportActionMetric)?null===(a=Wt())||void 0===a||a.reportActionMetric(e,t):(null===(o=Gt())||void 0===o?void 0:o.reportActionMetric)&&(null===(s=Gt())||void 0===s||s.reportActionMetric.postMessage({action:e,actionType:t}))},isLaunchQuickViewAvailable:()=>{var e,t,i;return!!((null===(e=Wt())||void 0===e?void 0:e.launchQuickViewIfEnabledAsync)||(null===(t=Wt())||void 0===t?void 0:t.launchQuickViewIfEnabled)||(null===(i=Gt())||void 0===i?void 0:i.launchQuickViewIfEnabled))},launchQuickViewIfEnabled:(e,t,i=void 0,a=void 0)=>{var o,s,r,n,l,d;Qt.reportActionMetric("tap","QUICKVIEW"),(null===(o=Wt())||void 0===o?void 0:o.launchQuickViewIfEnabledAsync)?null===(s=Wt())||void 0===s||s.launchQuickViewIfEnabledAsync(e,JSON.stringify(t),i,a):(null===(r=Wt())||void 0===r?void 0:r.launchQuickViewIfEnabled)?null===(n=Wt())||void 0===n||n.launchQuickViewIfEnabled(e,JSON.stringify(t),i,a):(null===(l=Gt())||void 0===l?void 0:l.launchQuickViewIfEnabled)&&(null===(d=Gt())||void 0===d||d.launchQuickViewIfEnabled.postMessage({initialIndex:e,asins:t,title:i,reftag:a}))}},Xt={openWebPage:e=>{Qt.isNativeBridgeAvailable()&&Qt.isOpenWebPageAvailable()?Qt.openWebPage(e):window.location.assign(e)},isQuickViewEnabled:()=>{var e,t,i;if(Qt.isNativeBridgeAvailable()&&Qt.isLaunchQuickViewAvailable())return!0;return"true"===(null!==(t=null===(e=document.querySelector("meta[name='x-feature-quickview-enabled']"))||void 0===e?void 0:e.getAttribute("content"))&&void 0!==t?t:void 0)&&!!(null===(i=window.qv)||void 0===i?void 0:i.launchQuickView)},openQuickView:(e=0,t,i,a,o)=>{var s,r;if(0===t.asinMetadataCallbacks.length||e<0||e>=t.asinMetadataCallbacks.length||!Xt.isQuickViewEnabled())return jt.logCountMetric("quickview-error"),void Xt.openWebPage(i);const n=t.asinMetadataCallbacks.map((e=>e()));jt.logCountMetric("quickview-launched");const l=JSON.stringify({qvPageClient:"ubf-page",widgetName:a||"ubf"});Qt.isNativeBridgeAvailable()&&Qt.isLaunchQuickViewAvailable()?Qt.launchQuickViewIfEnabled(e,n,o,l):null===(r=null===(s=window.qv)||void 0===s?void 0:s.launchQuickView)||void 0===r||r.call(s,{initialIndex:e,asins:n,title:o,csaContext:l})}},Yt=new Set(["kindle_edition","kindle_edition_av","kindle_single","kindle_edition_active"]),Zt=new Set(["digital_audiobook","audible_audiobook","audio_download"]);function qt(e,t){const i="iOS"===(null==t?void 0:t.operatingsystem)&&"kindle"===(null==t?void 0:t.hostapplication),a="iOS"===(null==t?void 0:t.operatingsystem)&&"mShop"===(null==t?void 0:t.hostapplication);return!(function(e){return!e||Yt.has(e)||Zt.has(e)}(e)&&(a||i))}e.UnifiedBookFaceout=class extends Me{getDefaultConfiguration(){return{enableBookFormat:!1,enableProgramBadge:!1,enableProgramBadgeInMetadataBlock:!1,enableBookMetadataBadge:!1,enableBookPoints:!1,enableBookSponsored:!1,enableBookFormats:!1,enableBookBlurb:!1,enableMetadataBlock:!0,enableStarRatingPrimaryTapAction:!1,bookTitleContentConfiguration:void 0,starRatingConfiguration:void 0,bookCoverImageConfiguration:void 0,bookPriceConfiguration:void 0,fontFamilyCSSVariable:"--bds-font-family-body",seriesOverlayConfiguration:{topOffsetPx:this.shouldRenderBadge()?22:7},enableDeliveryPromise:!1,layoutConfiguration:{bookCoverImageLayout:void 0,starRatingLayout:void 0,bookFormatLayout:"secondary"}}}constructor(){var e;super(),this.asinIndex=0,this.bookImageRef=Ze(),this.intersectionController=new lt(this,{config:{threshold:.5},callback:e=>{if(void 0===this.elementVisibleStartTime)return this.elementVisibleStartTime=Date.now(),e[0].isIntersecting;return((e,t,i,...a)=>Date.now()-e>t&&(i(...a),!0))(this.elementVisibleStartTime,1e3,this.handleCsaCustomEvent,"impressed","UBF")||(this.elementVisibleStartTime=void 0),e[0].isIntersecting}}),this.elementVisibleStartTime=void 0,this.metricsEmitted=new Set,this.position=0,this.isSponsored=!1,this.hasHalfStar=!1,this.ffoIsEnabled=!1,this.handleClick=e=>{var t,i;this.handleCsaCustomEvent("click","UBF");const a=e;a.altKey||a.ctrlKey||a.shiftKey||a.metaKey||(e.preventDefault(),this.shouldEnableQuickView()&&this.asinContext&&this.detailPageUrl?Xt.openQuickView(this.asinIndex,this.asinContext,this.detailPageUrl,null===(t=this.renderContext)||void 0===t?void 0:t.widgetid):this.detailPageUrl&&Xt.openWebPage(this.detailPageUrl),null===(i=this.handleNavigation)||void 0===i||i.call(this,this.asin))},this.getCsaEventDetails=(e,t)=>{var i,a,o,s,r,n,l,d;return{schemaId:"BEE.BDSWebClientSideEvent.3",asin:this.asin||"NULL",preFFOAsin:this.preFFOAsin||"NULL",eventType:e,eventValue:t,widgetId:(null===(i=this.metricsMetadata)||void 0===i?void 0:i.widgetId)||"NULL",widgetGroup:(null===(a=this.metricsMetadata)||void 0===a?void 0:a.widgetGroup)||"NULL",strategyId:(null===(o=this.metricsMetadata)||void 0===o?void 0:o.strategyId)||"NULL",creativeId:(null===(s=this.metricsMetadata)||void 0===s?void 0:s.creativeId)||"NULL",binding:this.format||"NULL",deviceType:(null===(r=this.renderContext)||void 0===r?void 0:r.devicetype)||"NULL",operatingSystem:(null===(n=this.renderContext)||void 0===n?void 0:n.operatingsystem)||"NULL",hostApplication:(null===(l=this.renderContext)||void 0===l?void 0:l.hostapplication)||"NULL",locale:(null===(d=this.renderContext)||void 0===d?void 0:d.locale)||"NULL"}},this.handleCsaCustomEvent=(e,t,i={ent:{page:["pageType","subPageType","requestId"]}})=>{var a;this.metricsEmitted.has(e)||(null===(a=this.csaEventInstance)||void 0===a||a.call(this,"log",this.getCsaEventDetails(e,t),i),this.metricsEmitted.add(e))},this.csaEventInstance=null===(e=window.csa)||void 0===e?void 0:e.call(window,"Events",{producerId:"bee"})}getConfigurationOverrides(){const e=Dt;return e.forEach((e=>{"mobile"===e.targeting.devicetype&&e.overrides.seriesOverlayConfiguration&&(this.shouldRenderBadge()?e.overrides.seriesOverlayConfiguration.topOffsetPx=18:e.overrides.seriesOverlayConfiguration.topOffsetPx=7)})),e}shouldRenderBadge(){return!!this.badgePhysicalId}firstUpdated(){var e;this.setAsinContextForQuickView(),this.ffoIsEnabled&&this.handleCsaCustomEvent("widgetIsFFOEnabled","UBF"),jt.logCountMetric("ubf-displayed"),jt.logCountMetric("ubf-displayed",`${null===(e=this.renderContext)||void 0===e?void 0:e.pagetype}`)}disconnectedCallback(){if(super.disconnectedCallback(),this.elementVisibleStartTime){Date.now()-this.elementVisibleStartTime>1e3&&this.handleCsaCustomEvent("impressed","UBF")}}get badgeLabel(){return this.giftGuideBadgeLabel}set badgeLabel(e){this.giftGuideBadgeLabel=e}getTitleContentForSlot(e,t){var i,a,o,s,r,n,l,d,u,c,b,h;switch(e){case"title":return this.bookTitle?[{displayText:this.bookTitle,url:this.detailPageUrl,enableLink:t,appendedInlineContent:this.getAppendedInlineTitleContent(),headingLevel:this.getPrimaryTextHeadingLevel(),handleClick:this.handleClick}]:void 0;case"headline":return this.bookHeadline?[{displayText:this.bookHeadline,url:this.detailPageUrl,enableLink:t}]:void 0;case"author":{const e=this.byLineV2?(b=this.byLineV2,h=null!=t&&t,b.contributors.map((e=>{var t;return{displayText:e.name,url:null===(t=e.links.find((e=>"authorPageUrl"===e.rel)))||void 0===t?void 0:t.url,enableLink:h}}))):void 0;return e||[{displayText:null!==(i=this.bookAuthor)&&void 0!==i?i:"",url:null!==(a=this.bookAuthorLinkUrl)&&void 0!==a?a:this.detailPageUrl,enableLink:t}]}case"seriesBullet":return[{displayText:null!==(d="mobile"===(null===(o=this.renderContext)||void 0===o?void 0:o.devicetype)?null===(r=null===(s=this.seriesBullet)||void 0===s?void 0:s.message)||void 0===r?void 0:r.shortMessage:null===(l=null===(n=this.seriesBullet)||void 0===n?void 0:n.message)||void 0===l?void 0:l.longMessage)&&void 0!==d?d:"",url:null===(c=null===(u=this.seriesBullet)||void 0===u?void 0:u.link)||void 0===c?void 0:c.url,enableLink:t}];default:return}}getAppendedInlineTitleContent(){return at("grid"===this.layout&&this.giftGuideBadgeLabel,(()=>G`<span class="offscreen">${this.giftGuideBadgeLabel}</span>`))}getPrimaryTextHeadingLevel(){var e;return"grid"===this.layout?null!==(e=this.primaryTextHeadingLevel)&&void 0!==e?e:3:void 0}getTitleContentConfiguration(e){var t,i,a,o,s,r;return{primaryTitleContent:this.getTitleContentForSlot(null===(t=e.bookTitleContentConfiguration)||void 0===t?void 0:t.primaryText,null===(i=e.bookTitleContentConfiguration)||void 0===i?void 0:i.enablePrimaryLink),secondaryTitleContent:this.getTitleContentForSlot(null===(a=e.bookTitleContentConfiguration)||void 0===a?void 0:a.secondaryText,null===(o=e.bookTitleContentConfiguration)||void 0===o?void 0:o.enableSecondaryLink),tertiaryTitleContent:this.getTitleContentForSlot(null===(s=e.bookTitleContentConfiguration)||void 0===s?void 0:s.tertiaryText,null===(r=e.bookTitleContentConfiguration)||void 0===r?void 0:r.enableTertiaryLink)}}getBookCoverImageAriaLabel(){return this.badgePhysicalId&&this.badgeAltText&&this.coverImageAltText?this.badgeAltText+", "+this.coverImageAltText:this.coverImageAltText?this.coverImageAltText:""}getSeriesOverlay(e){var t;return G`<div
            class="series-overlay"
            style="top: ${null===(t=e.seriesOverlayConfiguration)||void 0===t?void 0:t.topOffsetPx}px">
            <bds-series-overlay label=${tt(this.seriesCollectionText)}> </bds-series-overlay>
        </div>`}renderBookCoverImage(e){return G`
            <bds-book-cover-image
                coverImagePhysicalId=${this.coverImagePhysicalId}
                imageStyleCode=${tt(this.imageStyleCodes)}
                coverImageAltText=${this.coverImageAltText}
                layout=${tt(e.layoutConfiguration.bookCoverImageLayout)}
                badgePhysicalId=${tt(this.badgePhysicalId)}
                badgeAltText=${tt(this.badgeAltText)}
                badgeExtension=${tt(this.badgeExtension)}
                ?useNoMetadataLayout=${!e.enableMetadataBlock}
                ${et(this.bookImageRef)}>
            </bds-book-cover-image>
        `}onHoverHandler(e){!function(e,t,i){if("desktop"===(null==t?void 0:t.devicetype)&&"primeReadingStorefront"===(null==t?void 0:t.pagetype)&&i){const t={detail:{event:i},bubbles:!0,composed:!0};e.dispatchEvent(new CustomEvent("hoverEventOnKuAndPRRDesktop",t))}}(this,this.renderContext,e)}setAsinContextForQuickView(){var e;this.asin&&(null===(e=this.asinContext)||void 0===e?void 0:e.asinMetadataCallbacks)&&(this.asinIndex=this.asinContext.asinMetadataCallbacks.length,this.asinContext.asinMetadataCallbacks.push(this.getQuickViewMetadata.bind(this)))}getQuickViewMetadata(){var e,t;const i=(null===(e=this.byLineV2)||void 0===e?void 0:e.contributors)?this.byLineV2.contributors.map((e=>e.name)).join(", "):this.bookAuthor;return{asin:this.asin||"",physicalId:this.coverImagePhysicalId,title:this.bookTitle,imageUrl:null===(t=this.bookImageRef.value)||void 0===t?void 0:t.getImageSource(),authors:i||"",detailPageLink:this.detailPageUrl,binding:this.format,reviewStars:this.numberOfStars,reviewCount:this.numberOfReviews}}shouldEnableQuickView(){var e;return!!(Xt.isQuickViewEnabled()&&(null===(e=this.asinContext)||void 0===e?void 0:e.asinMetadataCallbacks)&&this.detailPageUrl)}renderMetadataBlock(e){return G` <div class="ubf-metadata">
            ${at(e.enableBookSponsored,(()=>G`
                    <bds-book-sponsored ?isSponsored=${this.isSponsored}></bds-book-sponsored>
                `))}
            ${at(e.bookTitleContentConfiguration,(()=>this.renderBookTitleContentBlock(e)))}
            ${this.renderStarRating(e)}
            ${at("grid"!==this.layout,(()=>this.renderBookMetadataBadge(e)))}
            ${this.renderProgramBadge(e)} ${this.renderBookFormat(e)}
            ${this.renderBookPrice(e)} ${this.renderDeliveryPromise(e)}
            ${at(e.enableBookPoints&&function(e,t){return!e||!Zt.has(e)&&qt(e,t)}(this.bindingSymbol,this.renderContext),(()=>G`
                        <bds-book-points
                            points=${tt(this.points)}
                            .pointsV2=${this.pointsV2}></bds-book-points>
                    `))}
            ${at(e.enableBookFormats,(()=>G` <bds-book-other-formats
                    .allFormats=${this.formats}
                    detailPage=${tt(this.detailPageUrl)}
                    numFormatsToShow=${tt(this.numFormatsToShow)}></bds-book-other-formats>`))}
        </div>`}setLayoutForBackwardCompatibilty(){const e={fixedHeight:"standard",contained:"contained",containedBaseline:"containedBaseline",blurredBackdrop:"blurred-backdrop",grid:"grid",fixedWidth:"mosaic",responsiveToContainer:"mosaic",list:"list"};this.coverImageLayout&&!this.layout&&(this.layout=e[this.coverImageLayout])}renderBookTitleContentBlock(e){var t,i,a;const o=this.getTitleContentConfiguration(e);return G` <bds-book-title-content
            layout=${tt(e.layoutConfiguration.bookTitleContentLayout)}
            .primaryTitleContent=${o.primaryTitleContent}
            ?suppressPrimaryAria=${null===(t=e.bookTitleContentConfiguration)||void 0===t?void 0:t.suppressPrimaryAria}
            .secondaryTitleContent=${o.secondaryTitleContent}
            ?suppressSecondaryAria=${null===(i=e.bookTitleContentConfiguration)||void 0===i?void 0:i.suppressSecondaryAria}
            .tertiaryTitleContent=${o.tertiaryTitleContent}
            ?suppressTertiaryAria=${null===(a=e.bookTitleContentConfiguration)||void 0===a?void 0:a.suppressTertiaryAria}></bds-book-title-content>`}renderCoverImageBlock(e){var t;return at(!(null===(t=e.bookCoverImageConfiguration)||void 0===t?void 0:t.disableBookCoverImage),(()=>this.detailPageUrl?G`<a
                      href=${this.detailPageUrl}
                      role=${this.shouldEnableQuickView()?"button":"link"}
                      tabindex="${"grid"===this.layout?-1:0}"
                      @click=${this.handleClick}
                      aria-label=${this.getBookCoverImageAriaLabel()}
                      aria-hidden=${"grid"===this.layout}>
                      ${this.renderBookCoverImage(e)}
                      ${at(this.seriesCollectionText,(()=>this.getSeriesOverlay(e)))}
                  </a>`:G`<div
                      aria-label=${this.getBookCoverImageAriaLabel()}
                      aria-hidden=${"grid"===this.layout}>
                      ${this.renderBookCoverImage(e)}
                  </div>`))}renderProgramBadge(e){return at(e.enableProgramBadge&&e.enableProgramBadgeInMetadataBlock&&this.badgePhysicalId,(()=>{const e="grid"===this.layout?13:void 0,t=G`
                    <bds-program-badge
                        badgePhysicalId=${tt(this.badgePhysicalId)}
                        badgeAltText=${tt(this.badgeAltText)}
                        badgeExtension=${tt(this.badgeExtension)}
                        badgeImageHeightPx=${tt(e)}>
                    </bds-program-badge>
                `;return"grid"===this.layout?G`<div class="grid-program-badge-container">${t}</div>`:t}))}renderBookMetadataBadge(e){const t="mosaic"===this.layout&&this.savingsPercentageDisplayString;return at(e.enableBookMetadataBadge&&this.giftGuideBadgeLabel&&!t,(()=>G`
                <div class="book-metadata-badge">
                    <bds-book-metadata-badge
                        giftGuideBadgeLabel=${tt(this.giftGuideBadgeLabel)}
                        badgeType=${tt(this.metadataBadgeType)}>
                    </bds-book-metadata-badge>
                </div>
            `))}renderBookFormat(e){const t="grid"===this.layout?this.handleClick:void 0;return at(e.enableBookFormat,(()=>G`
                <div class="book-format">
                    <bds-book-format
                        layout=${tt(e.layoutConfiguration.bookFormatLayout)}
                        format=${tt(this.format)}
                        .secondaryBadge=${this.secondaryBadge}
                        @click=${t}>
                    </bds-book-format>
                </div>
            `))}renderBookPrice(e){var t;const i="grid"===this.layout?this.handleClick:void 0,a="mosaic"===this.layout?void 0:this.savingsPercentageDisplayString;return at((null===(t=e.bookPriceConfiguration)||void 0===t?void 0:t.enableBookPrice)&&qt(this.bindingSymbol,this.renderContext),(()=>G`
                <bds-book-price
                    unstylizedPrice=${tt(this.unstylizedPrice)}
                    .priceFormatParts=${this.priceFormatParts}
                    .youPayPromotion=${this.youPayPromotion}
                    .audiblePromotion=${this.audiblePromotion}
                    layout=${tt(e.layoutConfiguration.priceLayout)}
                    basisPriceDisplayString=${tt(this.basisPriceDisplayString)}
                    basisPriceLabel=${tt(this.basisPriceLabel)}
                    savingsPercentageDisplayString=${tt(a)}
                    priceToPayMessage=${tt(this.priceToPayMessage)}
                    @click=${i}>
                </bds-book-price>
            `))}renderDeliveryPromise(e){var t,i,a,o;return at(e.enableDeliveryPromise&&(null===(i=null===(t=this.deliveryInfo)||void 0===t?void 0:t.deliveryBadge)||void 0===i?void 0:i.badgePhysicalId)&&(null===(o=null===(a=this.deliveryInfo)||void 0===a?void 0:a.deliveryMessageFragmentList)||void 0===o?void 0:o.length),(()=>{const e="mosaic"===this.layout?"spaced":void 0;return G`<bds-delivery-promise
                    .deliveryInfo=${this.deliveryInfo}
                    layout=${tt(e)}></bds-delivery-promise>`}),(()=>X))}renderStarRating(e){const t=e.enableStarRatingPrimaryTapAction?this.handleClick:void 0;return at(e.starRatingConfiguration&&this.numberOfReviews&&this.numberOfReviews>0,(()=>{var i;return G`
                <div class="star-rating">
                    <bds-star-rating
                        numberOfStars=${tt(this.numberOfStars)}
                        ?hasHalfStar=${this.hasHalfStar}
                        numberOfReviews=${tt(this.numberOfReviews)}
                        reviewUrl=${tt(this.reviewUrl)}
                        ?enableReviewsLink=${null===(i=e.starRatingConfiguration)||void 0===i?void 0:i.enableReviewsLink}
                        altText=${tt(this.starRatingAltText)}
                        shortDisplayString=${tt(this.starRatingShortDisplayString)}
                        layout="${tt(e.layoutConfiguration.starRatingLayout)}"
                        @click=${t}>
                    </bds-star-rating>
                </div>
            `}))}renderSavingsPercentageOverlay(){return at("mosaic"===this.layout&&this.savingsPercentageDisplayString,(()=>G` <bds-savings-percentage-overlay
                savingsPercentageDisplayString=${tt(this.savingsPercentageDisplayString)}>
            </bds-savings-percentage-overlay>`))}renderColorBlock(e){const t=[at(!(e.enableDeliveryPromise&&this.deliveryInfo),(()=>this.renderProgramBadge(e))),this.renderDeliveryPromise(e),this.renderStarRating(e)];return G`
            <div class="ubf-color-block" style="background-color: ${this.backgroundColor}">
                ${this.renderSavingsPercentageOverlay()} ${this.renderBookMetadataBadge(e)}
                ${this.renderCoverImageBlock(e)} ${this.renderBookFormat(e)}
                ${this.renderBookPrice(e)}
            </div>
            ${at(t.filter((e=>e)).length,(()=>G`<div class="ubf-color-block-bottom">${t}</div>`))}
        `}renderGridBlock(e){return G`
            <div class="grid-cover-image-block">
                <div class="grid-metadata-badge-slot" aria-hidden="true">
                    ${this.renderBookMetadataBadge(e)}
                </div>
                ${this.renderCoverImageBlock(e)}
            </div>
            ${this.renderMetadataBlock(e)}
        `}renderListBlock(e){return G` ${this.renderCoverImageBlock(e)} ${this.renderMetadataBlock(e)} `}renderDefaultBlock(e){return G`<div class="ubf-book-info">
                ${this.renderCoverImageBlock(e)}
                ${at(e.enableMetadataBlock,(()=>this.renderMetadataBlock(e)))}
            </div>
            ${at(e.enableBookBlurb,(()=>G` <bds-book-blurb .blurbMetadata=${this.blurbMetadata}></bds-book-blurb>`))}`}render(){var e;this.intersectionController.value||void 0===this.elementVisibleStartTime||this.metricsEmitted.has("impressed")||(this.elementVisibleStartTime=void 0),jt.logCountMetric("ubf-rendered"),this.setLayoutForBackwardCompatibilty();const t=this.getRenderConfiguration(this.layout);return G`
            <div
                class="unified-book-faceout ${this.layout} ${null===(e=this.renderContext)||void 0===e?void 0:e.theme}
                    ${t.enableMetadataBlock?"":"no-metadata-layout"}"
                style="font-family: var(${t.fontFamilyCSSVariable})"
                @mouseenter=${e=>this.onHoverHandler(e)}
                data-csa-c-type="${"item"}"
                data-csa-c-item-type="${"asin"}"
                data-csa-c-item-id="${tt(this.asin)}">
                ${Ee(this.layout,[["mosaic",()=>this.renderColorBlock(t)],["grid",()=>this.renderGridBlock(t)],["list",()=>this.renderListBlock(t)]],(()=>this.renderDefaultBlock(t)))}
            </div>
        `}},e.UnifiedBookFaceout.styles=ut,t([ye({context:Pe,subscribe:!0})],e.UnifiedBookFaceout.prototype,"asinContext",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"detailPageUrl",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"asin",void 0),t([xe({type:Number})],e.UnifiedBookFaceout.prototype,"position",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"coverImagePhysicalId",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"coverImageAltText",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"coverImageLayout",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"layout",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"badgePhysicalId",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"badgeAltText",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"badgeExtension",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"secondaryBadge",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"bookTitle",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"bookHeadline",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"bookAuthor",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"bookAuthorLinkUrl",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"byLineV2",void 0),t([xe({type:Boolean})],e.UnifiedBookFaceout.prototype,"isSponsored",void 0),t([xe({type:Number})],e.UnifiedBookFaceout.prototype,"numberOfStars",void 0),t([xe({type:Boolean})],e.UnifiedBookFaceout.prototype,"hasHalfStar",void 0),t([xe({type:Number})],e.UnifiedBookFaceout.prototype,"numberOfReviews",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"starRatingAltText",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"starRatingShortDisplayString",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"reviewUrl",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"giftGuideBadgeLabel",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"unstylizedPrice",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"priceFormatParts",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"basisPriceDisplayString",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"basisPriceLabel",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"savingsPercentageDisplayString",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"priceToPayMessage",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"metadataBadgeType",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"youPayPromotion",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"points",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"pointsV2",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"format",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"bindingSymbol",void 0),t([xe({type:String,reflect:!0})],e.UnifiedBookFaceout.prototype,"cel_widget_id",void 0),t([xe({type:String,reflect:!0})],e.UnifiedBookFaceout.prototype,"class",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"blurbMetadata",void 0),t([xe({type:Array})],e.UnifiedBookFaceout.prototype,"formats",void 0),t([xe({type:Number})],e.UnifiedBookFaceout.prototype,"numFormatsToShow",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"seriesBullet",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"backgroundColor",void 0),t([xe()],e.UnifiedBookFaceout.prototype,"handleNavigation",void 0),t([xe()],e.UnifiedBookFaceout.prototype,"badgeLabel",null),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"metricsMetadata",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"preFFOAsin",void 0),t([xe({type:Boolean})],e.UnifiedBookFaceout.prototype,"ffoIsEnabled",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"audiblePromotion",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"seriesCollectionText",void 0),t([xe({type:String})],e.UnifiedBookFaceout.prototype,"imageStyleCodes",void 0),t([xe({type:Object})],e.UnifiedBookFaceout.prototype,"deliveryInfo",void 0),t([xe({type:Number})],e.UnifiedBookFaceout.prototype,"primaryTextHeadingLevel",void 0),e.UnifiedBookFaceout=t([Ce("bds-unified-book-faceout")],e.UnifiedBookFaceout);var Kt=v`
    .buy.filled {
        color: var(--bds-color-functional-neutral-on-surface, #0f1111);
        background: var(--bds-rio-color-orange-700-buy-now, #ffa41c);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-orange-palette-600-blaze, #ff8f00);
        outline: none;
    }

    .buy.filled:active {
        background: var(--bds-rio-color-orange-palette-300-ignition, #eb7b13);
    }

    .buy.filled:focus {
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-blue-palette-400-pacific, #007185);
        box-shadow: 0 0 0 0.1875rem #fff inset, 0 0 0 0.1875rem #c8f3fa,
            0 0.125rem 0.3125rem 0 rgba(213, 217, 217, 0.5);
    }

    .buy.filled:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive, #6f7373);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-orange-palette-1200-vent, #ffd894);
        background: var(--bds-rio-color-orange-palette-1500-spark, #fff8e5);
    }
    .buy.filled:hover {
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-orange-palette-400-vulcan, #f78307);
        background: var(--bds-rio-color-orange-palette-500-molten, #fa8900);
    }
`,Jt=v`
    .order.filled {
        color: var(--bds-color-functional-neutral-on-surface, #0f1111);
        background: var(--bds-rio-color-yellow-900-add-to-cart, #ffd814);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-yellow-800-solar, #fcd200);
        outline: none;
    }

    .order.filled:active {
        background: var(--bds-rio-color-yellow-500-supergiant, #f0b800);
    }

    .order.filled:focus {
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-blue-palette-400-pacific, #007185);
        box-shadow: 0 0 0 0.1875rem #fff inset, 0 0 0 0.1875rem #c8f3fa,
            0 0.125rem 0.3125rem 0 rgba(213, 217, 217, 0.5);
    }

    .order.filled:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive, #6f7373);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-yellow-1200-sirius, #ffed94);
        background: var(--bds-rio-color-yellow-palette-1500-Luna, #fffae0);
    }
    .order.filled:hover {
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-rio-color-yellow-600-arcturus, #f2c200);
        background: var(--bds-rio-color-yellow-700-venus, #f7ca00);
    }
`,ei=v`
    .common.filled {
        background: var(--bds-color-functional-core-secondary, #232f3e);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-core-secondary, #232f3e);
    }

    .common.outlined {
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-neutral-outline, #747678);
    }
`,ti=v`
    .rare.filled {
        background: var(
            --bds-color-functional-gradients-electric-unicorn,
            linear-gradient(226deg, #0274e6 -0.01%, #5e5cd1 41.89%, #cc0285 97.94%)
        );
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-gradients-electric-unicorn, #0274e6);
    }

    .rare.outlined {
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-gradients-electric-unicorn, #0274e6);
    }
`,ii=v`
    .reading.filled {
        background: var(--bds-color-functional-core-primary, #0274e6);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-core-primary, #0274e6);
    }

    .reading.outlined {
        border: var(--bds-size-line-weight-small, 0.0625rem) solid
            var(--bds-color-functional-core-primary, #0274e6);
    }
`,ai=v`
    :host > button {
        font-family: var(--bds-font-family-functional-body, 'Amazon Ember'), sans-serif;
        user-select: none;
        display: inline-flex;
        position: relative;
        gap: var(--bds-size-spacing-x-small, 8px);
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 9999px;
        width: 100%;
        max-width: 500px; /* max width for button for large screens and tablet view */
        min-width: var(--bds-size-tap-target-minimum, 24px);
        min-height: var(--bds-size-tap-target-minimum, 24px);
        box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 50%);
        font-style: normal;
        font-weight: 400;
        outline: none;
    }

    :hover {
        cursor: pointer;
    }

    .common.filled,
    .rare.filled,
    .reading.filled {
        color: var(--bds-color-functional-core-on-secondary, #fff);
    }

    .common.outlined,
    .rare.outlined,
    .reading.outlined {
        color: var(--bds-color-functional-neutral-on-surface, #0f1111);
        background: var(--bds-color-functional-core-on-secondary, #fff);
    }

    .common:focus,
    .rare:focus,
    .reading:focus {
        box-shadow: 0 0 0 0.1875rem #fff inset, 0 0 0 0.1875rem #c8f3fa,
            0 0.125rem 0.3125rem 0 rgba(213, 217, 217, 50%);
    }

    .common.filled:disabled,
    .rare.filled:disabled,
    .reading.filled:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive, #6f7373);
        background: var(--bds-color-functional-utils-surface-inactive, #e1e2e3);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-utils-outline-inactive, #e3e6e6);
    }

    .common.outlined:disabled,
    .rare.outlined:disabled,
    .reading.outlined:disabled {
        color: var(--bds-color-functional-utils-on-outline-inactive, #6f7373);
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-neutral-outline-variant, #e1e2e3);
    }

    .common.filled:hover:after,
    .rare.filled:hover:after,
    .reading.filled:hover:after {
        background: var(
            --bds-color-functional-utils-overlay-alpha-2-inverse,
            rgba(255, 255, 255, 15%)
        );
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-utils-overlay-alpha-2-inverse, rgba(255, 255, 255, 15%));
    }

    .common.filled:active:after,
    .rare.filled:active:after,
    .reading.filled:active:after {
        background: var(
            --bds-color-functional-utils-overlay-alpha-1-inverse,
            rgba(255, 255, 255, 10%)
        );
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-utils-overlay-alpha-1-inverse, rgba(255, 255, 255, 10%));
    }

    .common.outlined:hover:after,
    .rare.outlined:hover:after,
    .reading.outlined:hover:after {
        background: var(--bds-color-functional-utils-overlay-alpha-2, rgba(0, 0, 0, 15%));
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-utils-overlay-alpha-2, rgba(0, 0, 0, 15%));
    }

    .common.outlined:active:after,
    .rare.outlined:active:after,
    .reading.outlined:active:after {
        background: var(--bds-color-functional-utils-overlay-alpha-1, rgba(0, 0, 0, 10%));
        border: var(--bds-size-line-weight-small, 1px) solid
            var(--bds-color-functional-utils-overlay-alpha-1, rgba(0, 0, 0, 10%));
    }

    .common:hover:after,
    .rare:hover:after,
    .reading:hover:after,
    .common:active:after,
    .rare:active:after,
    .reading:active:after {
        border-radius: var(--bds-size-radius-circle, 1000px);
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .base {
        padding: 6px var(--bds-size-spacing-medium, 16px);
        font-size: var(--bds-size-font-functional-label-medium, 0.875rem);
        line-height: var(--bds-size-line-height-functional-label-medium, 1.25rem); /* 142.857% */
    }

    .small {
        padding: 2px var(--bds-size-spacing-small, 12px);
        font-size: var(--bds-size-font-functional-label-small, 0.75rem);
        line-height: var(--bds-size-line-height-functional-label-small, 1rem); /* 133.333% */
    }

    .inner-border {
        position: absolute;
        inset: 0;
        border-radius: 9999px;
        display: none;
    }
`;e.Button=class extends be{constructor(){super(...arguments),this.isInactive=!1}static get styles(){return[ai,Kt,ei,Jt,ti,ii]}onClickHandler(){jt.logCountMetric(`bds-button-clicked-${this.category}-${this.emphasis}`),this.handleClick()}render(){var e,t;return G` <button
            aria-label=${tt(this.accessibilityLabel)}
            @click=${this.onClickHandler}
            class="${this.category} ${this.emphasis} ${this.size} ${null!==(t=null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&void 0!==t?t:""}"
            ?disabled=${this.isInactive}>
            ${this.content}
        </button>`}},t([xe({type:String})],e.Button.prototype,"accessibilityLabel",void 0),t([xe({type:String})],e.Button.prototype,"category",void 0),t([xe({type:String})],e.Button.prototype,"content",void 0),t([xe({type:String})],e.Button.prototype,"emphasis",void 0),t([xe({type:String})],e.Button.prototype,"size",void 0),t([xe()],e.Button.prototype,"handleClick",void 0),t([xe({type:Boolean})],e.Button.prototype,"isInactive",void 0),t([ye({context:$e,subscribe:!0})],e.Button.prototype,"renderContext",void 0),e.Button=t([Ce("bds-button")],e.Button),e.RareButton=class extends be{constructor(){super(...arguments),this.size="base",this.isInactive=!1}render(){return G` <bds-button
            accessibilityLabel=${tt(this.accessibilityLabel)}
            content=${this.content}
            category="rare"
            emphasis=${this.emphasis}
            size=${tt(this.size)}
            .handleClick=${this.handleClick}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([xe({type:String})],e.RareButton.prototype,"accessibilityLabel",void 0),t([xe({type:String})],e.RareButton.prototype,"content",void 0),t([xe({type:String})],e.RareButton.prototype,"emphasis",void 0),t([xe({type:String})],e.RareButton.prototype,"size",void 0),t([xe()],e.RareButton.prototype,"handleClick",void 0),t([xe({type:Boolean})],e.RareButton.prototype,"isInactive",void 0),e.RareButton=t([Ce("bds-rare-button")],e.RareButton),e.ReadingButton=class extends be{constructor(){super(...arguments),this.size="base",this.isInactive=!1}render(){var e;return G` <bds-button
            accessibilityLabel=${tt(this.accessibilityLabel)}
            content=${ft("bds_read_now_button_label",null===(e=this.renderContext)||void 0===e?void 0:e.locale)}
            category="reading"
            emphasis=${this.emphasis}
            size=${tt(this.size)}
            .handleClick=${this.handleClick}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([xe({type:String})],e.ReadingButton.prototype,"accessibilityLabel",void 0),t([xe({type:String})],e.ReadingButton.prototype,"emphasis",void 0),t([xe({type:String})],e.ReadingButton.prototype,"size",void 0),t([xe()],e.ReadingButton.prototype,"handleClick",void 0),t([xe({type:Boolean})],e.ReadingButton.prototype,"isInactive",void 0),t([ye({context:$e,subscribe:!0})],e.ReadingButton.prototype,"renderContext",void 0),e.ReadingButton=t([Ce("bds-reading-button")],e.ReadingButton),e.CommonButton=class extends be{constructor(){super(...arguments),this.size="base",this.isInactive=!1}render(){return G` <bds-button
            accessibilityLabel=${tt(this.accessibilityLabel)}
            content=${this.content}
            category="common"
            emphasis=${this.emphasis}
            size=${tt(this.size)}
            .handleClick=${this.handleClick}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([xe({type:String})],e.CommonButton.prototype,"accessibilityLabel",void 0),t([xe({type:String})],e.CommonButton.prototype,"content",void 0),t([xe({type:String})],e.CommonButton.prototype,"emphasis",void 0),t([xe({type:String})],e.CommonButton.prototype,"size",void 0),t([xe()],e.CommonButton.prototype,"handleClick",void 0),t([xe({type:Boolean})],e.CommonButton.prototype,"isInactive",void 0),e.CommonButton=t([Ce("bds-common-button")],e.CommonButton),e.BuyButton=class extends be{constructor(){super(...arguments),this.category="buy",this.size="base",this.isInactive=!1}render(){return G` <bds-button
            accessibilityLabel=${tt(this.accessibilityLabel)}
            content=${this.content}
            category=${tt(this.category)}
            emphasis=${this.emphasis}
            size=${tt(this.size)}
            .handleClick=${this.handleClick}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([xe({type:String})],e.BuyButton.prototype,"accessibilityLabel",void 0),t([xe({type:String})],e.BuyButton.prototype,"category",void 0),t([xe({type:String})],e.BuyButton.prototype,"content",void 0),t([xe({type:String})],e.BuyButton.prototype,"emphasis",void 0),t([xe({type:String})],e.BuyButton.prototype,"size",void 0),t([xe()],e.BuyButton.prototype,"handleClick",void 0),t([xe({type:Boolean})],e.BuyButton.prototype,"isInactive",void 0),e.BuyButton=t([Ce("bds-buy-button")],e.BuyButton);var oi=v`
    :host {
        display: inline-block;
    }
`;e.Icon=class extends be{constructor(){super(...arguments),this.iconColor="var(--bds-color-functional-neutral-outline-bright, var(--bds-color-font-primary)",this.iconSize="24px"}render(){return G`
            <div
                style="
                    width: ${this.iconSize};
                    height: ${this.iconSize};
                    mask: url(${Le(this.iconName)}) no-repeat center;
                    mask-size: 100%;
                    background-color: ${this.iconColor}
                "></div>
        `}},e.Icon.styles=oi,t([xe({type:String})],e.Icon.prototype,"iconName",void 0),t([xe({type:String})],e.Icon.prototype,"iconColor",void 0),t([xe({type:String})],e.Icon.prototype,"iconSize",void 0),e.Icon=t([Ce("bds-icon")],e.Icon);var si=v`
    :host {
        display: block;
        margin: 0;
    }

    .divider {
        border-bottom-style: solid;
        border-bottom-color: var(
            --bds-color-functional-neutral-outline-variant,
            var(--bds-color-border-light)
        );
        box-sizing: border-box;
        margin: 0;
    }

    .divider.small {
        border-bottom-width: var(--bds-size-line-weight-small, 1px);
    }

    .divider.medium {
        border-bottom-width: var(--bds-size-line-weight-medium, 2px);
    }
`;e.Divider=class extends be{constructor(){super(...arguments),this.size="small"}render(){return G`<div class="divider ${this.size}"></div>`}},e.Divider.styles=si,t([xe({type:String})],e.Divider.prototype,"size",void 0),e.Divider=t([Ce("bds-divider")],e.Divider);var ri=v`
    .savings-percentage-overlay {
        background-color: var(--bds-mosaic-faceout-color-deal-percent-background);
        border: 1px solid var(--bds-mosaic-faceout-color-deal-percent-border);
        border-radius: var(--bds-mosaic-faceout-size-deal-percent-border-radius);
        color: var(--bds-mosaic-faceout-color-deal-percent-text);
        font-family: var(--bds-mosaic-faceout-font-family-deal-percent-text);
        font-size: var(--bds-mosaic-faceout-size-deal-percent-text);
        font-weight: var(--bds-mosaic-faceout-font-weight-deal-percent-text);
        line-height: var(--bds-mosaic-faceout-size-deal-percent-line-height);
        padding: 1px 8px;
        text-decoration: var(--bds-mosaic-faceout-font-decoration-deal-percent-text);
    }
`;e.SavingsPercentageOverlay=class extends be{render(){return G`<span class="savings-percentage-overlay">
            ${this.savingsPercentageDisplayString}
        </span>`}},e.SavingsPercentageOverlay.styles=ri,t([xe({type:String})],e.SavingsPercentageOverlay.prototype,"savingsPercentageDisplayString",void 0),e.SavingsPercentageOverlay=t([Ce("bds-savings-percentage-overlay")],e.SavingsPercentageOverlay);var ni=[v`
    .card-header .card-title {
        color: var(--bds-color-functional-neutral-on-surface, var(--bds-color-font-primary));
        font-family: var(
            --bds-font-family-functional-title,
            var(--bds-font-family-body, 'Amazon Ember')
        );
        font-size: var(--bds-size-font-functional-title-large, var(--bds-size-font-medium));
        font-style: normal;
        font-weight: var(--bds-font-weight-functional-title, 600);
        line-height: var(
            --bds-size-line-height-functional-title-large,
            var(--bds-size-line-height-medium, 24px)
        );

        ${ot(1)};
    }

    .card-header .card-why-line {
        color: var(--bds-color-functional-neutral-on-surface, var(--bds-color-font-secondary));
        font-family: var(
            --bds-font-family-functional-title,
            var(--bds-font-family-body, 'Amazon Ember')
        );
        font-size: var(--bds-size-font-functional-title-small, var(--bds-size-font-small));
        font-style: normal;
        font-weight: var(--bds-weight-font-base, 400);
        line-height: var(
            --bds-size-line-height-functional-title-small,
            var(--bds-size-line-height-small, 18px)
        );

        ${ot(1)};
    }

    :is(h1, h2, h3, h4, h5, h6) {
        all: inherit;
    }
`,dt()];e.CardHeader=class extends be{constructor(){super(...arguments),this.titleTextHeadingLevel=2}renderCardHeader(e,t,i){let a;switch(i){case 1:a=G`<h1 class=${tt(t)} role="heading">
                    ${e}
                </h1>`;break;case 2:a=G`<h2 class=${tt(t)} role="heading">
                    ${e}
                </h2>`;break;case 3:a=G`<h3 class=${tt(t)} role="heading">
                    ${e}
                </h3>`;break;case 4:a=G`<h4 class=${tt(t)} role="heading">
                    ${e}
                </h4>`;break;case 5:a=G`<h5 class=${tt(t)} role="heading">
                    ${e}
                </h5>`;break;case 6:a=G`<h6 class=${tt(t)} role="heading">
                    ${e}
                </h6>`;break;default:a=G`<span class=${tt(t)} role="text"
                    >${e}</span
                >`}return a}render(){return this.titleText||this.whyLineText?G`
            <div class="card-header">
                ${at(this.titleText,(()=>this.renderCardHeader(this.titleText,"card-title",this.titleTextHeadingLevel)))}
                ${at(this.whyLineText,(()=>this.renderCardHeader(this.whyLineText,"card-why-line",this.whyLineTextHeadingLevel)))}
            </div>
        `:X}},e.CardHeader.styles=ni,t([xe({type:String})],e.CardHeader.prototype,"titleText",void 0),t([xe({type:Number})],e.CardHeader.prototype,"titleTextHeadingLevel",void 0),t([xe({type:String})],e.CardHeader.prototype,"whyLineText",void 0),t([xe({type:Number})],e.CardHeader.prototype,"whyLineTextHeadingLevel",void 0),e.CardHeader=t([Ce("bds-card-header")],e.CardHeader);var li=[v`
    .card-footer {
        color: var(--bds-color-functional-supplemental-link, var(--bds-color-font-link));
        font-family: var(
            --bds-font-family-functional-body,
            var(--bds-font-family-body, 'Amazon Ember')
        );
        font-size: var(--bds-size-font-functional-body-small, var(--bds-size-font-base));
        font-style: normal;
        font-weight: 400;
        line-height: var(
            --bds-size-line-height-functional-body-small,
            var(--bds-size-line-height-medium, 24px)
        );
        text-decoration: none;

        ${ot(1)};
    }
`,dt()];e.CardFooter=class extends be{render(){return this.label?this.linkUrl?G` <div>
                <a href="${this.linkUrl}" class="card-footer" role="link"> ${this.label} </a>
            </div>`:G` <div class="card-footer" role="text" aria-label="${this.label}">
                ${this.label}
            </div>`:X}},e.CardFooter.styles=li,t([xe({type:String})],e.CardFooter.prototype,"label",void 0),t([xe({type:String})],e.CardFooter.prototype,"linkUrl",void 0),e.CardFooter=t([Ce("bds-card-footer")],e.CardFooter);var di=[v`
    :host {
        font-family: var(--bds-font-family-functional-label, var(--bds-font-family-body));
    }

    .rich-content-link {
        display: inline-block; /* Setting display to inline-block to remove trailing underline that goes beyond link */
        color: var(--bds-color-functional-neutral-on-surface, var(--bds-color-font-primary));
    }
`,dt()];const ui=e=>{const t=e.semanticContent;if(!t)return X;const i=!!t.strong,a=!!t.emphasized,o=!!t.underlined,s=!!t.quoted,r=t.content.text;let n=r?G`${r}`:G`<bds-rich-content .content=${t.content}></bds-rich-content>`;return i&&(n=G`<b>${n}</b>`),a&&(n=G`<i>${n}</i>`),o&&(n=G`<u>${n}</u>`),s&&(n=G`<q>${n}</q>`),i||a||o||s?n:G`<bds-rich-content .content=${t.content}></bds-rich-content>`},ci=e=>{const t=e.paragraph;return t?G`
        <p>
            <bds-rich-content .content=${t}></bds-rich-content>
        </p>
    `:X},bi=e=>{const t=e.heading||e.headingContent;if(!t)return X;const i=t.content.text;let a=t.level;a<1&&(a=1),a>6&&(a=6);const o=i?G`${t.content.text}`:G`<bds-rich-content .content=${t.content}></bds-rich-content>`;switch(a){case 1:return G`<h1>${o}</h1>`;case 2:return G`<h2>${o}</h2>`;case 3:default:return G`<h3>${o}</h3>`;case 4:return G`<h4>${o}</h4>`;case 5:return G`<h5>${o}</h5>`;case 6:return G`<h6>${o}</h6>`}},hi=e=>{const t=e.link;return t&&t.url&&t.content?G`
        <a href=${t.url} class="rich-content-link">
            <bds-rich-content .content=${t.content}></bds-rich-content>
        </a>
    `:X};e.RichContent=class extends be{render(){var e,t;const{content:i}=this;return i?i.text?G`<span>${i.text}</span>`:i.fragments&&i.fragments.length>0?G`${null===(e=null==i?void 0:i.fragments)||void 0===e?void 0:e.map((e=>G`<bds-rich-content .content=${e}></bds-rich-content>`))}`:(null===(t=i.semanticContent)||void 0===t?void 0:t.content)?ui(i):i.heading||i.headingContent?bi(i):i.paragraph?ci(i):i.link?hi(i):X:X}},e.RichContent.styles=di,t([xe({type:Object})],e.RichContent.prototype,"content",void 0),e.RichContent=t([Ce("bds-rich-content")],e.RichContent);
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var gi=De(class extends Ve{constructor(e){var t;if(super(e),e.type!==Ue||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var i,a,[o]=t;if(void 0===this.it){for(var s in this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),o)o[s]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(s))&&this.it.add(s);return this.render(o)}var r=e.element.classList;for(var n in this.it.forEach((e=>{e in o||(r.remove(e),this.it.delete(e))})),o){var l=!!o[n];l===this.it.has(n)||(null===(a=this.nt)||void 0===a?void 0:a.has(n))||(l?(r.add(n),this.it.add(n)):(r.remove(n),this.it.delete(n)))}return Q}}),pi=v`
    .tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: var(--bds-size-border-thin) solid;
        font-size: var(--bds-size-font-small);
        font-family: var(--bds-font-family-body);
        white-space: nowrap;
        height: var(--bds-size-tag-pill-height);
        border-radius: var(--bds-size-tag-pill-height);
        padding: var(--bds-size-spacing-mini-plus) var(--bds-size-spacing-base-plus);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        /* A quick fix for a strange display issue on iOS web browsers https://sim.amazon.com/issues/BSX-Storefront-611 */
        margin-bottom: 1px;
    }

    .tag.circular {
        width: var(--bds-size-tag-pill-height);
        border-radius: 50%;
    }

    .selectedIconContainer {
        max-width: 0;
        display: inline-flex;
        align-items: center;
    }

    .selectedIconContainer img {
        max-width: inherit;
        height: var(--bds-size-tag-pill-selected-icon-height);
    }

    .selectedIconContainer.visible {
        max-width: var(--bds-size-tag-pill-selected-icon-container-width);
        margin-right: var(--bds-size-spacing-small);
    }

    .selectedIconContainer,
    .selectedIconContainer.visible {
        transition: max-width, margin-right;
        transition-duration: 200ms;
    }

    @media screen and (prefers-reduced-motion) {
        .selectedIconContainer,
        .selectedIconContainer.visible {
            transition: max-width, margin-right;
            transition-duration: 0;
        }
    }

    .endIconContainer {
        margin-bottom: var(--bds-size-spacing-nano);
        margin-left: var(--bds-size-spacing-small-plus);
    }

    .endIconContainer.dropdown {
        margin-bottom: var(--bds-size-spacing-mini);
    }

    .tagContent {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: var(--bds-size-spacing-small);
    }

    /* Per UX team: offset the text by 1px to make it look more centered */
    .tagText {
        padding-bottom: var(--bds-size-spacing-pico);
    }

    .programLogo {
        height: var(--bds-size-tag-pill-program-logo-height);
    }

    .endIcon {
        width: var(--bds-size-tag-pill-end-icon-width);
    }

    /* Light mode styling */
    .tag.light {
        border-color: #a2a6a6;
        background-color: #fff;
        color: #0f1111;
    }

    /* Prevent hover effects from showing up on touch devices after tag deselection */
    @media (hover: hover) {
        .tag.light:hover {
            border-color: #0f1111;
            box-shadow: var(--bds-size-border-medium) var(--bds-size-border-medium)
                var(--bds-size-border-extra-thick) rgba(86, 86, 86, 0.2);
        }
    }

    .tag.light:focus-visible {
        outline: none;
        border: var(--bds-size-border-thick) solid #0f1111;
        box-shadow: var(--bds-size-border-medium) var(--bds-size-border-medium)
            var(--bds-size-border-extra-thick) rgba(86, 86, 86, 0.2);
    }

    .tag.light.selected {
        border: var(--bds-size-border-thick) solid #007185;
        box-shadow: inset 0 var(--bds-size-border-thin) var(--bds-size-border-medium)
            var(--bds-size-border-thin) rgba(1, 67, 79, 0.1);
        font-weight: var(--bds-weight-font-heavy);
    }

    .tag.light.selected:focus-visible {
        border-color: #0f1111;
    }

    .tag.light.selected.textBased {
        background-color: #edfdff;
    }

    .tag.light.inactive,
    .tag.light.inactive.textBased {
        border: var(--bds-size-border-thin) solid #bbbfbf;
        background-color: #f0f2f2;
        box-shadow: none;
        color: #565959;
        font-weight: var(--bds-weight-font-base);
    }

    /* Dark mode styling */
    .tag.dark {
        border-color: #d5d9d9;
        background-color: #0f1111;
        color: #fff;
    }

    /* Prevent hover effects from showing up on touch devices after tag deselection */
    @media (hover: hover) {
        .tag.dark:hover {
            border-color: #f7feff;
            box-shadow: var(--bds-size-border-medium) var(--bds-size-border-medium)
                var(--bds-size-border-extra-thick) rgba(86, 86, 86, 0.2);
        }
    }

    .tag.dark:focus-visible {
        outline: none;
        border: var(--bds-size-border-thick) solid #f7feff;
        box-shadow: var(--bds-size-border-medium) var(--bds-size-border-medium)
            var(--bds-size-border-extra-thick) rgba(86, 86, 86, 0.2);
    }

    .tag.dark.selected {
        border: var(--bds-size-border-thick) solid #c8f3fa;
        box-shadow: inset 0 var(--bds-size-border-thin) var(--bds-size-border-medium)
            var(--bds-size-border-thin) rgba(1, 67, 79, 0.1);
        font-weight: var(--bds-weight-font-heavy);
    }

    .tag.dark.selected:focus-visible {
        border-color: #f7feff;
    }

    .tag.dark.selected.textBased {
        background-color: #054b59;
    }

    .tag.dark.inactive,
    .tag.dark.inactive.textBased {
        border: var(--bds-size-border-thin) solid #888c8c;
        background-color: #303333;
        box-shadow: 0 0 var(--bds-size-border-medium) var(--bds-size-border-thin)
            rgba(86, 86, 86, 0.1);
        color: #bbbfbf;
        font-weight: var(--bds-weight-font-base);
    }

    /* Custom displays */
    .starRatingDisplay {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-small);
        line-height: 100%;
    }
`;e.TagPill=class extends be{constructor(){super(...arguments),this.tagId="",this.tagName="",this.selectionMode="multi",this.ariaLabel="",this.darkMode=!1,this.selected=!1,this.inactive=!1,this.circular=!1,this.noSelectionChange=!1,this.visibilityThreshold=-1,this.prefixIcons=[],this.suffixIcons=[],this.renderByDisplayParams=(e,t)=>{if("star_rating"===e.displayId&&e.numberOfStars)return G`
                <span role="group" aria-label=${t} class="starRatingDisplay">
                    <span aria-hidden="true">
                        <bds-star-rating
                            numberOfStars=${e.numberOfStars}
                            ?hasHalfStar=${e.hasHalfStar}>
                        </bds-star-rating>
                    </span>
                    ${at(e.additionalText,(()=>G` <span aria-hidden="true"> ${e.additionalText} </span> `))}
                </span>
            `}}get onVisibilityChange(){return this.handleVisibilityChange}set onVisibilityChange(e){this.handleVisibilityChange=e}get onClick(){return this.handleClick}set onClick(e){this.handleClick=e}updated(e){var t;if(e.has("visibilityThreshold")&&this.visibilityThreshold>=0){const e=this.renderRoot.querySelector("button");if(!e)return;null===(t=this.visibilityObserver)||void 0===t||t.unobserve(e),this.visibilityObserver=new IntersectionObserver((e=>{e.forEach((e=>{var t;null===(t=this.handleVisibilityChange)||void 0===t||t.call(this,e.target.id,e.isIntersecting&&"hidden"!==window.getComputedStyle(e.target).visibility)}))}),{threshold:this.visibilityThreshold}),this.visibilityObserver.observe(e)}}onClickHandler(){var e;this.noSelectionChange||(this.selected=!this.selected);const t={tagId:this.tagId,selected:this.selected};null===(e=this.handleClick)||void 0===e||e.call(this,t)}renderIcons(e){return null==e?void 0:e.map((e=>G`<img
                src=${e.src}
                alt=${tt(e.altText)}
                aria-hidden=${!e.altText}
                class=${tt(e.class)}
                draggable="false" />`))}render(){const e="multi"===this.selectionMode&&this.selected&&!this.inactive,t={src:this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/selected-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/selected-light.svg"},i=((e,t,i)=>{switch(e){case"Kindle Unlimited":case"Kindle Unlimited Eligible":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-light.svg";case"Kindle Unlimited Audio":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-light.svg";case"Prime Reading":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/PRR_Dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/PRR_Light.svg";case"Prime Eligible":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-light.svg";case"Comixology":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-light.svg";case"Kids+":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/amazonkidsplusdark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/amazonkidsplus.svg";case"Audible Plus":return"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/audible-plus-light.png"}return""})(this.programType,this.darkMode,this.inactive),a=((e,t)=>{switch(e){case"deselect":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/deselect-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/deselect-light.svg";case"dropdown":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/dropdown-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/dropdown-light.svg"}return""})(this.endIconType,this.darkMode),o=this.ariaRole||("multi"===this.selectionMode?"checkbox":"radio"),s="checkbox"===o||"radio"===o?this.selected:void 0;let r;return i?r=this.renderIcons([{src:i,altText:this.tagName,class:"programLogo"}]):this.displayParameters?r=this.renderByDisplayParams(this.displayParameters,this.tagName):this.tagName&&(r=G`<span class="tagText">${this.tagName}</span>`),G`
            <button
                id=${this.tagId}
                name=${this.tagName}
                aria-label=${this.ariaLabel||this.tagName}
                ?disabled=${this.inactive}
                role=${o}
                aria-checked=${tt(s)}
                class=${gi({tag:!0,light:!this.darkMode,dark:this.darkMode,textBased:!this.programType,selected:this.selected,inactive:this.inactive,circular:this.circular})}
                @click=${this.onClickHandler}>
                <div
                    class=${gi({selectedIconContainer:!0,visible:e})}>
                    ${this.renderIcons([t])}
                </div>
                <div class="tagContent">
                    ${this.renderIcons(this.prefixIcons)} ${r}
                    ${this.renderIcons(this.suffixIcons)}
                </div>
                ${at(this.endIconType,(()=>G`
                            <div
                                class=${gi({endIconContainer:!0,dropdown:"dropdown"===this.endIconType})}>
                                ${this.renderIcons([{src:a,class:"endIcon"}])}
                            </div>
                        `))}
            </button>
        `}},e.TagPill.styles=pi,t([xe()],e.TagPill.prototype,"tagId",void 0),t([xe()],e.TagPill.prototype,"tagName",void 0),t([xe()],e.TagPill.prototype,"programType",void 0),t([xe()],e.TagPill.prototype,"selectionMode",void 0),t([xe()],e.TagPill.prototype,"ariaRole",void 0),t([xe()],e.TagPill.prototype,"ariaLabel",void 0),t([xe({type:Boolean})],e.TagPill.prototype,"darkMode",void 0),t([xe({type:Boolean})],e.TagPill.prototype,"selected",void 0),t([xe({type:Boolean})],e.TagPill.prototype,"inactive",void 0),t([xe({type:Boolean})],e.TagPill.prototype,"circular",void 0),t([xe()],e.TagPill.prototype,"handleClick",void 0),t([xe({type:Boolean})],e.TagPill.prototype,"noSelectionChange",void 0),t([xe({type:Number})],e.TagPill.prototype,"visibilityThreshold",void 0),t([xe()],e.TagPill.prototype,"handleVisibilityChange",void 0),t([xe({type:Array})],e.TagPill.prototype,"prefixIcons",void 0),t([xe({type:Array})],e.TagPill.prototype,"suffixIcons",void 0),t([xe()],e.TagPill.prototype,"endIconType",void 0),t([xe({type:Object})],e.TagPill.prototype,"displayParameters",void 0),t([xe()],e.TagPill.prototype,"onVisibilityChange",null),t([xe()],e.TagPill.prototype,"onClick",null),e.TagPill=t([Ce("tag-pill")],e.TagPill);var vi=v`
    .tagsRows {
        display: grid;
        flex-direction: column;
        padding: 0;
        row-gap: var(--bds-size-spacing-base);
        overflow-x: scroll;

        /* Hide scroll bar */
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
    }

    /* Chrome & Safari */
    .tagsRows::-webkit-scrollbar {
        display: none;
    }

    .tagsRow {
        all: unset;
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-small);
    }

    /* Used to add a fake padding that will disappear on scroll at the beginning of the tag rows */
    .tagsRow.addPseudoPadding::before,
    .tagsRow.addPseudoPadding::after {
        content: '';
        display: inline-block;
        min-width: var(--bds-size-spacing-base-plus);
    }

    .tagsRow.addPseudoPaddingRight::after {
        content: '';
        display: inline-block;
        min-width: var(--bds-size-spacing-base-plus);
    }
`;class mi extends be{constructor(){super(...arguments),this.tags=[],this.selectionMode="multi",this.noSelectionChange=!1,this.darkMode=!1,this.ariaLabel=""}renderTag(e){return G`
            <li style="all: unset" role="listitem">
                <tag-pill
                    tagId=${e.id}
                    tagName=${e.name}
                    programType=${tt(e.programType)}
                    selectionMode=${this.selectionMode}
                    ariaLabel=${tt(e.ariaLabel)}
                    ?darkMode=${this.darkMode}
                    ?noSelectionChange=${e.noSelectionChange||this.noSelectionChange}
                    ?selected=${e.selected}
                    ?inactive=${e.inactive}
                    visibilityThreshold=${tt(this.tagVisibilityThreshold)}
                    .handleClick=${e=>this.onTagClickCallback(e)}
                    .handleVisibilityChange=${this.handleTagVisibilityChange}
                    .prefixIcons=${e.prefixIcons}
                    .suffixIcons=${e.suffixIcons}
                    .endIconType=${e.endIconType}
                    .displayParameters=${e.displayParameters}>
                </tag-pill>
            </li>
        `}renderTags(){var e,t;return null!==(t=null===(e=this.tags)||void 0===e?void 0:e.map((e=>this.renderTag(e))))&&void 0!==t?t:X}onTagClickCallback(e){var t;"single"===this.selectionMode&&(this.tags=this.tags.map((t=>Object.assign(Object.assign({},t),{selected:t.id===e.tagId&&e.selected})))),null===(t=this.handleTagClick)||void 0===t||t.call(this,e)}get onTagClick(){return this.handleTagClick}set onTagClick(e){this.handleTagClick=e}get onTagVisibilityChange(){return this.handleTagVisibilityChange}set onTagVisibilityChange(e){this.handleTagVisibilityChange=e}}t([xe({type:Array})],mi.prototype,"tags",void 0),t([xe()],mi.prototype,"selectionMode",void 0),t([xe({type:Boolean})],mi.prototype,"noSelectionChange",void 0),t([xe({type:Boolean})],mi.prototype,"darkMode",void 0),t([xe()],mi.prototype,"ariaLabel",void 0),t([xe()],mi.prototype,"handleTagClick",void 0),t([xe({type:Number})],mi.prototype,"tagVisibilityThreshold",void 0),t([xe()],mi.prototype,"handleTagVisibilityChange",void 0),t([xe()],mi.prototype,"onTagClick",null),t([xe()],mi.prototype,"onTagVisibilityChange",null),e.TagsRows=class extends mi{constructor(){super(...arguments),this.numRows=1,this.addPseudoPadding=!1,this.addPseudoPaddingRight=!1,this.renderTagsRows=e=>{const t=[];for(let i=0;i<this.numRows;i+=1){const a=e.filter(((e,t)=>t%this.numRows===i)).map((e=>this.renderTag(e)));t.push(G`
                <ul
                    aria-label=${this.ariaLabel}
                    tabindex="0"
                    role="list"
                    class=${gi({tagsRow:!0,addPseudoPadding:this.addPseudoPadding,addPseudoPaddingRight:this.addPseudoPaddingRight})}>
                    ${a}
                </ul>
            `)}return t}}render(){return G` <div class="tagsRows">${this.renderTagsRows(this.tags)}</div> `}},e.TagsRows.styles=vi,t([xe({type:Number})],e.TagsRows.prototype,"numRows",void 0),t([xe({type:Boolean})],e.TagsRows.prototype,"addPseudoPadding",void 0),t([xe({type:Boolean})],e.TagsRows.prototype,"addPseudoPaddingRight",void 0),e.TagsRows=t([Ce("tags-rows")],e.TagsRows);var _i=v`
    .tagsScroller {
        display: flex;
        align-items: center;
        position: relative;
    }

    .tagsContainer {
        all: unset;
        display: inline-flex;
        align-items: center;
        gap: var(--bds-size-spacing-small);
        padding: 0 var(--bds-size-spacing-extra-large-plus);
    }

    .scrollingContent {
        width: 100%;
        border-radius: var(--bds-size-border-radius-medium);
        overflow: scroll;

        /* Hide scroll bar */
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
    }

    /* Chrome & Safari */
    .scrollingContent::-webkit-scrollbar {
        display: none;
    }

    .navArrowContainer {
        height: var(--bds-size-tag-pill-height);
        width: var(--bds-size-tag-pill-height);
        border-radius: var(--bds-size-border-radius-medium);
        position: absolute;
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: var(--bds-size-border-thin) solid #d5d9d9;
        background-color: #fff;
        box-shadow: 0 var(--bds-size-border-medium) var(--bds-size-border-extra-extra-thick)
            rgba(0, 0, 0, 0.15);
        cursor: pointer;
        user-select: none;
    }

    .navArrowContainer.left {
        left: 0;
    }

    .navArrowContainer.right {
        right: 0;
    }

    .navArrowContainer.dark {
        border-color: #d5d9d9;
        background-color: #0f1111;
    }

    .navArrowContainer.inactive {
        box-shadow: none;
        cursor: default;
    }

    .navArrowContainer:not(.inactive):hover {
        background-color: #f8f8f8;
    }

    .navArrowContainer.dark:not(.inactive):hover {
        background-color: #262828;
    }
`;e.TagsScroller=class extends mi{constructor(){super(...arguments),this.scrollingContentRef=Ze(),this.BUFFER_WIDTH=1,this.DURATION_FOR_TAG_UPDATE_MS=360,this.scrollPercentage=.75,this.showLeftArrow=!1,this.showRightArrow=!1}updateNavArrows(){const e=this.scrollingContentRef.value;e&&(this.showLeftArrow=e.scrollLeft>0,this.showRightArrow=Math.abs(e.scrollWidth-e.clientWidth-e.scrollLeft)>=this.BUFFER_WIDTH)}firstUpdated(){if(this.updateNavArrows(),this.scrollingContentRef.value){new ResizeObserver((()=>this.updateNavArrows())).observe(this.scrollingContentRef.value)}}scrollContent(e){const t=this.scrollingContentRef.value;if(!t)return;const i=Math.round(t.clientWidth*this.scrollPercentage);"left"===e&&t.scrollTo({left:Math.max(0,t.scrollLeft-i),behavior:"smooth"}),"right"===e&&t.scrollTo({left:Math.min(t.scrollLeft+i,t.scrollWidth-t.clientWidth+this.BUFFER_WIDTH),behavior:"smooth"})}scrollContentTo(e){var t;null===(t=this.scrollingContentRef.value)||void 0===t||t.scrollTo({left:e,behavior:"smooth"})}onTagClickCallback(e){super.onTagClickCallback(e),setTimeout((()=>{this.updateNavArrows()}),this.DURATION_FOR_TAG_UPDATE_MS)}render(){return G`
            <div class="tagsScroller">
                <div
                    class=${gi({navArrowContainer:!0,left:!0,inactive:!this.showLeftArrow,dark:this.darkMode})}
                    @click=${()=>this.scrollContent("left")}
                    aria-hidden="true">
                    <img
                        src=${this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/left-arrow-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/left-arrow-light.svg"}
                        role="presentation" />
                </div>
                <div
                    class="scrollingContent"
                    @scroll=${this.updateNavArrows}
                    ${et(this.scrollingContentRef)}>
                    <ul class="tagsContainer" tabindex="0" aria-label=${this.ariaLabel} role="list">
                        ${this.renderTags()}
                    </ul>
                </div>
                <div
                    class=${gi({navArrowContainer:!0,right:!0,inactive:!this.showRightArrow,dark:this.darkMode})}
                    @click=${()=>this.scrollContent("right")}
                    aria-hidden="true">
                    <img
                        src=${this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/right-arrow-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/right-arrow-light.svg"}
                        role="presentation" />
                </div>
            </div>
        `}},e.TagsScroller.styles=_i,t([xe({type:Number})],e.TagsScroller.prototype,"scrollPercentage",void 0),t([Te()],e.TagsScroller.prototype,"showLeftArrow",void 0),t([Te()],e.TagsScroller.prototype,"showRightArrow",void 0),e.TagsScroller=t([Ce("tags-scroller")],e.TagsScroller);var yi=v`
    :host {
        box-sizing: border-box;
    }

    .tagFiltersSection {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-base);
        font-family: var(--bds-font-family-body);
        color: #0f1111;
    }

    .header {
        all: unset;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: var(--bds-size-spacing-mini);
        font-weight: var(--bds-weight-font-heavy);
        color: var(--bds-color-font-primary);
    }

    .header.main {
        font-size: var(--bds-size-font-large);
        line-height: var(--bds-size-line-height-base-plus);
    }

    .header.secondary {
        font-size: var(--bds-size-font-medium);
        line-height: var(--bds-size-line-height-small);
    }

    .header.expandable {
        cursor: pointer;
    }

    .header.expandable:focus {
        outline: revert;
    }

    .tagsContainer {
        all: unset;
        display: inline-flex;
        flex-wrap: wrap;
        row-gap: var(--bds-size-spacing-base);
        column-gap: var(--bds-size-spacing-small);
    }
`;e.TagFiltersSection=class extends mi{constructor(){super(...arguments),this.header="",this.headerSize="main",this.expandable=!1,this.expanded=!1}renderExpanderIcon(e){const t=this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-down-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-down-light.svg",i=this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-up-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-up-light.svg";return G`<img src=${e?i:t} aria-hidden="true" />`}renderHeader(){return this.expandable?G`
                <button
                    class=${gi({header:!0,main:"main"===this.headerSize,secondary:"secondary"===this.headerSize,expandable:!0})}
                    aria-expanded=${this.expanded}
                    @click=${this.onHeaderClick}>
                    <span>${this.header}</span>
                    ${this.renderExpanderIcon(this.expanded)}
                </button>
            `:G`
            <div
                class=${gi({header:!0,main:"main"===this.headerSize,secondary:"secondary"===this.headerSize,expandable:!1})}
                role="heading"
                aria-level="3">
                ${this.header}
            </div>
        `}onHeaderClick(){this.expanded=!this.expanded}render(){if(this.tags.length)return G`
            <div class="tagFiltersSection">
                ${at(this.header&&this.headerSize,(()=>this.renderHeader()))}
                ${at(!this.expandable||this.expanded,(()=>G`
                        <ul
                            class="tagsContainer"
                            aria-label=${this.ariaLabel}
                            tabindex="0"
                            role="list">
                            ${this.renderTags()}
                        </ul>
                    `))}
            </div>
        `}},e.TagFiltersSection.styles=yi,t([xe()],e.TagFiltersSection.prototype,"header",void 0),t([xe()],e.TagFiltersSection.prototype,"headerSize",void 0),t([xe({type:Boolean})],e.TagFiltersSection.prototype,"expandable",void 0),t([xe({type:Boolean})],e.TagFiltersSection.prototype,"expanded",void 0),e.TagFiltersSection=t([Ce("tag-filters-section")],e.TagFiltersSection);var fi=v`
    .tagLabels, .tagLabelContainer {
        all: unset;
        display: inline-flex;
        align-items: center;
        font-family: var(--bds-font-family-body);
        line-height: var(--bds-size-line-height-base);
    }

    .tagLabels {
        flex-wrap: wrap;
    }

    .tagLabels.navigational {
        row-gap: var(--bds-size-spacing-mini);
    }

    .tagLabel {
        font-size: var(--bds-size-font-mini);
        color: var(--bds-color-font-primary);
        white-space: nowrap;
    }

    .tagLabel.navigational {
        color: var(--bds-color-font-link);
        font-weight: bold;
        text-decoration: none;
    }

    .tagLabel.navigational:hover {
        text-decoration: underline;
    }

    .tagLabel.navigational.light:hover {
        color: #c7511f;
    }

    .tagLabel.navigational.dark:hover {
        color: #ffaf38;
    }

    .tagLabelIcon {
        margin-right: var(--bds-size-spacing-mini-plus);
    }

    .dividerDot {
        font-size: var(--bds-size-font-small);
        margin: 0 var(--bds-size-spacing-small);
    }

    .dividerDot.light {
        color: #1196ab;
    }

    .dividerDot.dark {
        color: #c8f3fa;
    }

    .dividerDot.navigational.light {
        color: var(--bds-color-border-medium);
    }

    .dividerDot.navigational.dark {
        color: var(--bds-color-border-light);
    }
`;e.TagLabels=class extends be{constructor(){super(...arguments),this.tags=[],this.darkMode=!1,this.ariaLabel=""}renderTagLabel(e,t){const i=!!e.link,a=i?G`
                <a
                    href=${tt(e.link)}
                    target="_blank"
                    aria-label=${tt(e.ariaLabel)}
                    class=${gi({tagLabel:!0,navigational:!0,light:!this.darkMode,dark:this.darkMode})}>
                    ${e.displayText}
                </a>
            `:G`
                <span
                    aria-label=${tt(e.ariaLabel)}
                    class=${gi({tagLabel:!0,navigational:!1,light:!this.darkMode,dark:this.darkMode})}>
                    ${e.displayText}
                </span>
            `;return G`
            <li class="tagLabelContainer" role="listitem">
                ${this.renderIcons(e.prefixIcons)}
                ${a}
                ${at(t,(()=>G`
                            <span
                                aria-hidden="true"
                                class=${gi({dividerDot:!0,navigational:i,light:!this.darkMode,dark:this.darkMode})}>
                                •
                            </span>
                        `))}
            </li>
        `}renderIcons(e){return null==e?void 0:e.map((e=>G`
                <span class="tagLabelIcon">
                    <img
                        src=${e.src}
                        alt=${tt(e.altText)}
                        aria-hidden=${!e.altText}
                        class=${tt(e.class)}
                        draggable="false" />
                </span>
            `))}render(){var e,t;return G`
            <ul
                class=${gi({tagLabels:!0,navigational:this.tags.some((e=>e.link))})}
                aria-label=${tt(this.ariaLabel)}
            >
                ${null!==(t=null===(e=this.tags)||void 0===e?void 0:e.map(((e,t)=>this.renderTagLabel(e,t!==this.tags.length-1))))&&void 0!==t?t:X}
            </ul>
        `}},e.TagLabels.styles=fi,t([xe({type:Array})],e.TagLabels.prototype,"tags",void 0),t([xe({type:Boolean})],e.TagLabels.prototype,"darkMode",void 0),t([xe()],e.TagLabels.prototype,"ariaLabel",void 0),e.TagLabels=t([Ce("tag-labels")],e.TagLabels),e.handleHeading=bi,e.handleLink=hi,e.handleParagraph=ci,e.handleSemanticContent=ui,Object.defineProperty(e,"__esModule",{value:!0})}({});
/////////////////////////
// END FILE bds-base-assets.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-global-config.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
// Custom event to signal when BDS Global Config is available
window.dispatchEvent(new Event('BooksDesignSystemGlobalsUpdated'));
/////////////////////////
// END FILE bds-global-config.js
/////////////////////////

// END ASSET BooksDesignSystemWebBuzzAssets@BaseAssets-1.0.2043.0
////////////////////////////////////////////