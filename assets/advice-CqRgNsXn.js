import{R as D,r as J,j as x}from"./index-JVHuiLYc.js";var Le={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},we=D.createContext&&D.createContext(Le),ot=["attr","size","title"];function it(e,t){if(e==null)return{};var n=at(e,t),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function at(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ee(Object(n),!0).forEach(function(r){ct(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ct(e,t,n){return t=lt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lt(e){var t=ut(e,"string");return typeof t=="symbol"?t:t+""}function ut(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ue(e){return e&&e.map((t,n)=>D.createElement(t.tag,G({key:n},t.attr),Ue(t.child)))}function ft(e){return t=>D.createElement(dt,X({attr:G({},e.attr)},t),Ue(e.child))}function dt(e){var t=n=>{var{attr:r,size:s,title:o}=e,i=it(e,ot),c=s||n.size||"1em",f;return n.className&&(f=n.className),e.className&&(f=(f?f+" ":"")+e.className),D.createElement("svg",X({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:f,style:G(G({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&D.createElement("title",null,o),e.children)};return we!==void 0?D.createElement(we.Consumer,null,n=>t(n)):t(Le)}function pt(e){return ft({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(e)}function De(e,t){return function(){return e.apply(t,arguments)}}const{toString:ht}=Object.prototype,{getPrototypeOf:he}=Object,Y=(e=>t=>{const n=ht.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>Y(t)===e),ee=e=>t=>typeof t===e,{isArray:v}=Array,H=ee("undefined");function mt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=_("ArrayBuffer");function yt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const bt=ee("string"),C=ee("function"),ke=ee("number"),te=e=>e!==null&&typeof e=="object",wt=e=>e===!0||e===!1,V=e=>{if(Y(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Et=_("Date"),gt=_("File"),St=_("Blob"),Rt=_("FileList"),Ot=e=>te(e)&&C(e.pipe),Tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=Y(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},At=_("URLSearchParams"),[xt,Ct,_t,Nt]=["ReadableStream","Request","Response","Headers"].map(_),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),v(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const U=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!H(e)&&e!==U;function ce(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&ve(t,s)||s;V(t[o])&&V(r)?t[o]=ce(t[o],r):V(r)?t[o]=ce({},r):v(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const jt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&C(s)?e[o]=De(s,n):e[o]=s},{allOwnKeys:r}),e),Ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ut=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Dt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Bt=e=>{if(!e)return null;if(v(e))return e;let t=e.length;if(!ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),vt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},qt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zt=_("HTMLFormElement"),Ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),It=_("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Mt=e=>{ze(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},$t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return v(e)?r(e):r(String(e).split(t)),n},Jt=()=>{},Vt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Wt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kt=e=>{const t=new Array(10),n=(r,s)=>{if(te(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=v(r)?[]:{};return I(r,(i,c)=>{const f=n(i,s+1);!H(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Xt=_("AsyncFunction"),Gt=e=>e&&(te(e)||C(e))&&C(e.then)&&C(e.catch),He=((e,t)=>e?setImmediate:t?((n,r)=>(U.addEventListener("message",({source:s,data:o})=>{s===U&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),U.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(U.postMessage)),Qt=typeof queueMicrotask<"u"?queueMicrotask.bind(U):typeof process<"u"&&process.nextTick||He,a={isArray:v,isArrayBuffer:Be,isBuffer:mt,isFormData:Tt,isArrayBufferView:yt,isString:bt,isNumber:ke,isBoolean:wt,isObject:te,isPlainObject:V,isReadableStream:xt,isRequest:Ct,isResponse:_t,isHeaders:Nt,isUndefined:H,isDate:Et,isFile:gt,isBlob:St,isRegExp:It,isFunction:C,isStream:Ot,isURLSearchParams:At,isTypedArray:kt,isFileList:Rt,forEach:I,merge:ce,extend:jt,trim:Pt,stripBOM:Ft,inherits:Lt,toFlatObject:Ut,kindOf:Y,kindOfTest:_,endsWith:Dt,toArray:Bt,forEachEntry:vt,matchAll:qt,isHTMLForm:zt,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:ze,freezeMethods:Mt,toObjectSet:$t,toCamelCase:Ht,noop:Jt,toFiniteNumber:Vt,findKey:ve,global:U,isContextDefined:qe,isSpecCompliantForm:Wt,toJSONObject:Kt,isAsyncFn:Xt,isThenable:Gt,setImmediate:He,asap:Qt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ie=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty(Ie,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ie);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Zt=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function $e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=$e(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(le)}const en=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ne(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let w=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Yt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(w=a.toArray(p)))return y=$e(y),w.forEach(function(R,P){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Se([y],P,o):i===null?y:y+"[]",l(R))}),!1}return le(p)?!0:(t.append(Se(h,y,o),l(p)),!1)}const d=[],b=Object.assign(en,{defaultVisitor:u,convertValue:l,isVisitable:le});function g(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(w,S){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(S)?S.trim():S,y,b))===!0&&g(w,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function me(e,t){this._pairs=[],e&&ne(e,this,t)}const Je=me.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function tn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||tn;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Oe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nn=typeof URLSearchParams<"u"?URLSearchParams:me,rn=typeof FormData<"u"?FormData:null,sn=typeof Blob<"u"?Blob:null,on={isBrowser:!0,classes:{URLSearchParams:nn,FormData:rn,Blob:sn},protocols:["http","https","file","blob","url","data"]},ye=typeof window<"u"&&typeof document<"u",ue=typeof navigator=="object"&&navigator||void 0,an=ye&&(!ue||["ReactNative","NativeScript","NS"].indexOf(ue.product)<0),cn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ln=ye&&window.location.href||"http://localhost",un=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ye,hasStandardBrowserEnv:an,hasStandardBrowserWebWorkerEnv:cn,navigator:ue,origin:ln},Symbol.toStringTag,{value:"Module"})),O={...un,...on};function fn(e,t){return ne(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function dn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=pn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(dn(r),s,n,0)}),n}return null}function hn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return fn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return ne(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),hn(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const mn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&mn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Te=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function bn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const wn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function En(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function gn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let A=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=z(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=W(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!wn(t))i(yn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return bn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=W(s),delete n[o];return}const c=t?En(o):String(o).trim();c!==o&&delete n[o],n[c]=W(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Te]=this[Te]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=z(i);r[c]||(gn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function ie(e,t){const n=this||M,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function Ge(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,b=0;for(;d!==s;)b+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const g=u&&l-u;return g?Math.round(b*1e3/g):void 0}}function On(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const Q=(e,t,n=3)=>{let r=0;const s=Rn(50,250);return On(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ae=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xe=e=>(...t)=>a.asap(()=>e(...t)),Tn=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,An=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Cn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Qe(e,t,n){let r=!xn(t);return e&&r||n==!1?Cn(e,t):t}const Ce=e=>e instanceof A?{...e}:e;function k(e,t){t=t||{};const n={};function r(l,u,d,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d,b)}else return r(l,u,d,b)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(Ce(l),Ce(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==c||(n[u]=b)}),n}const Ze=e=>{const t=k({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Ve(Qe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Tn(t.url))){const l=s&&o&&An.read(o);l&&i.set(s,l)}return t},_n=typeof XMLHttpRequest<"u",Nn=_n&&function(e){return new Promise(function(n,r){const s=Ze(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,b,g,p;function y(){g&&g(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function w(){if(!h)return;const R=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:R,config:e,request:h};Ge(function(F){n(F),y()},function(F){r(F),y()},T),h=null}"onloadend"in h?h.onloadend=w:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(w)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||We;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new m(P,T.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(P,T){h.setRequestHeader(T,P)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=Q(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,g]=Q(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(u=R=>{h&&(r(!R||R.type?new q(null,e,h):R),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=Sn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Pn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new q(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},jn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Fn=async function*(e,t){for await(const n of Ln(e))yield*jn(n,t)},Ln=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},_e=(e,t,n,r)=>{const s=Fn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let b=o+=d;n(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},re=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ye=re&&typeof ReadableStream=="function",Un=re&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),et=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Dn=Ye&&et(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ne=64*1024,fe=Ye&&et(()=>a.isReadableStream(new Response("").body)),Z={stream:fe&&(e=>e.body)};re&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Z[t]&&(Z[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Bn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Un(e)).byteLength},kn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Bn(t)},vn=re&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:b}=Ze(e);l=l?(l+"").toLowerCase():"text";let g=Pn([s,o&&o.toAbortSignal()],i),p;const y=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let h;try{if(f&&Dn&&n!=="get"&&n!=="head"&&(h=await kn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(a.isFormData(r)&&(j=T.headers.get("content-type"))&&u.setContentType(j),T.body){const[F,$]=Ae(h,Q(xe(f)));r=_e(T.body,Ne,F,$)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...b,signal:g,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?d:void 0});let S=await fetch(p);const R=fe&&(l==="stream"||l==="response");if(fe&&(c||R&&y)){const T={};["status","statusText","headers"].forEach(be=>{T[be]=S[be]});const j=a.toFiniteNumber(S.headers.get("content-length")),[F,$]=c&&Ae(j,Q(xe(c),!0))||[];S=new Response(_e(S.body,Ne,F,()=>{$&&$(),y&&y()}),T)}l=l||"text";let P=await Z[a.findKey(Z,l)||"text"](S,e);return!R&&y&&y(),await new Promise((T,j)=>{Ge(T,j,{data:P,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}}),de={http:Zt,xhr:Nn,fetch:vn};a.forEach(de,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pe=e=>`- ${e}`,qn=e=>a.isFunction(e)||e===null||e===!1,tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!qn(n)&&(r=de[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Pe).join(`
`):" "+Pe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:de};function ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function je(e){return ae(e),e.headers=A.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||M.adapter)(e).then(function(r){return ae(e),r.data=ie.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Xe(r)||(ae(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const nt="1.8.1",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Fe={};se.transitional=function(t,n,r){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Fe[i]&&(Fe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};se.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function zn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const K={assertOptions:zn,validators:se},N=K.validators;let B=class{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&K.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:K.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),K.assertOptions(n,{baseUrl:N.spelling("baseURL"),withXsrfToken:N.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,b;if(!f){const p=[je.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);d<b;)u=u.then(p[d++],p[d++]);return u}b=c.length;let g=n;for(d=0;d<b;){const p=c[d++],y=c[d++];try{g=p(g)}catch(h){y.call(this,h);break}}try{u=je.call(this,g)}catch(p){return Promise.reject(p)}for(d=0,b=l.length;d<b;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=k(this.defaults,t);const n=Qe(t.baseURL,t.url,t.allowAbsoluteUrls);return Ve(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(k(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});let Hn=class rt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new rt(function(s){t=s}),cancel:t}}};function In(e){return function(n){return e.apply(null,n)}}function Mn(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function st(e){const t=new B(e),n=De(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return st(k(e,s))},n}const E=st(M);E.Axios=B;E.CanceledError=q;E.CancelToken=Hn;E.isCancel=Xe;E.VERSION=nt;E.toFormData=ne;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=In;E.isAxiosError=Mn;E.mergeConfig=k;E.AxiosHeaders=A;E.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=tt.getAdapter;E.HttpStatusCode=pe;E.default=E;const{Axios:Yn,AxiosError:er,CanceledError:tr,isCancel:nr,CancelToken:rr,VERSION:sr,all:or,Cancel:ir,isAxiosError:ar,spread:cr,toFormData:lr,AxiosHeaders:ur,HttpStatusCode:fr,formToJSON:dr,getAdapter:pr,mergeConfig:hr}=E,$n=E.create({headers:{"Content-Type":"application/json"},withCredentials:!1}),Jn="_advice_wnrkh_1",Vn="_delimitation_wnrkh_27",Wn="_horizontal_line_wnrkh_33",Kn="_vertical_line_wnrkh_40",Xn="_button_wnrkh_46",L={advice:Jn,delimitation:Vn,horizontal_line:Wn,vertical_line:Kn,button:Xn},mr=()=>{const[e,t]=J.useState(null),[n,r]=J.useState(!0),s=J.useCallback(async()=>{r(!0);try{const{data:o}=await $n.get("https://api.adviceslip.com/advice");t(o.slip)}catch(o){console.error(o)}finally{r(!1)}},[]);return J.useEffect(()=>{s()},[s]),x.jsxs("div",{className:L.advice,children:[n?x.jsx("h2",{children:"Loading..."}):e&&e.id?x.jsxs(x.Fragment,{children:[x.jsxs("h3",{children:["Advice #",e.id]}),x.jsxs("h2",{children:['"',e.advice,'"']}),x.jsxs("div",{className:L.delimitation,children:[x.jsx("div",{className:L.horizontal_line}),x.jsx("div",{className:L.vertical_line}),x.jsx("div",{className:L.vertical_line}),x.jsx("div",{className:L.horizontal_line})]})]}):null,x.jsx("div",{className:L.button,onClick:s,children:x.jsx(pt,{})})]})};export{mr as default};
