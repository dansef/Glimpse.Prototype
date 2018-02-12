!function(t){function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var e={};r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=15)}([function(t,r,e){"use strict";var n=e(13),i=function(){return"environment,user-identification,web-response,web-request,after-action-invoked,after-action-view-invoked,before-execute-command,after-execute-command,after-view-component"},o=document.getElementById("__glimpse_hud");t.exports={toCamelCase:function(t){return t.replace(camelCaseRegEx,function(t,r,e,n){return e?e.toUpperCase():r.toLowerCase()})},currentRequestId:function(){return o.getAttribute("data-request-id")},resolveClientUrl:function(t,r){return new n(o.getAttribute("data-client-template")).fill({requestId:t,follow:r,metadataUri:o.getAttribute("data-metadata-template")})},resolveContextUrl:function(t){var r=o.getAttribute("data-context-template"),e=t+"&types="+i(),n=r.replace("{contextId}{&types}",e);return encodeURI(n)}}},function(t,r,e){"use strict";t.exports={render:function(){return'\n            <a target="_glimpse" href="'+util.resolveClientUrl(util.currentRequestId(),!0)+'" class="glimpse-link">\n                \n    <svg class="glimpse-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">\n        <path class="glimpse-arrow-path" d="M1022,2H2046V1026H1918V221L91,2047,1,1957,1827,130H1022V2Z"/>\n    </svg>\n\n                <span>Open in Glimpse</span>\n            </a>\n        '}}},function(t,r,e){"use strict";function n(t,r,e){return Math.max(0,t[e]-t[r])}function i(t){return{network:n(t,"responseStart","responseEnd")+n(t,"navigationStart","requestStart"),server:n(t,"requestStart","responseEnd"),browser:n(t,"responseStart","loadEventEnd"),total:n(t,"navigationStart","loadEventEnd")}}var o=(window.performance||window.mozPerformanceperformance||window.msPerformanceperformance||window.webkitPerformanceperformance||{}).timing;t.exports={render:function(){return'\n            <div class="glimpse-section">\n                <span class="glimpse-section-label">\n                    Page load time\n                </span>\n                <span class="glimpse-section-duration">\n                    '+i(o).total+'\n                </span>\n                <span class="glimpse-section-suffix">\n                    ms\n                </span>\n            </div>\n        '}}},function(t,r,e){"use strict";function n(){try{var t=JSON.parse(localStorage.getItem("glimpseLatestVersion"));if(t.latestVersion&&t.latestVersion!==t.atTimeOfCheckVersion)return t.latestVersion}catch(t){return!1}return!1}t.exports={render:function(){var t=n();return t?'\n                <a class="glimpse-icon" title="New version available: '+t+'" href="https://www.npmjs.com/package/@glimpse/glimpse" target="_blank">\n                    \n    <svg viewBox="0 0 51 42" xmlns="http://www.w3.org/2000/svg">\n        <g fill="none" fill-rule="evenodd">\n            <path d="M18.906 1.057C12.596 3.594 6.146 6.167.73 8.333c-.414.086-.74.493-.73.917v22.916c-.004.396.28.777.66.888 6.303 2.82 12.698 5.708 18.09 8.136.314.175.73.195 1.03-.014l5.385-2.42L38.5 33.053V9.25c.005-.41-.302-.806-.702-.902l-18.19-7.276c-.123-.055-.25-.073-.372-.072-.122 0-.236.02-.33.057zm.344 1.834l15.855 6.346-6.688 2.678-15.856-6.33 6.69-2.693zm-9.167 3.682l15.856 6.345-6.69 2.664L3.395 9.25l6.688-2.678zm-8.25 4.024l16.5 6.603v21.784l-16.5-7.42V10.597zm34.834 21.318l-16.5 7.07V17.2l7.333-2.937v5.987c-.007.484.432.93.917.93.484 0 .923-.446.916-.93v-6.718l7.334-2.936v21.318z" fill="#FFF" fill-rule="nonzero"/><path fill="#FFF" d="M37.69 38.076l-5.51-9.16 4.592-8.627 6.148 4.646-3.182 11.828"/><path d="M48.992 33.706L41.27 20.33c-.688-1.19-1.968-1.93-3.342-1.93-1.373 0-2.653.74-3.34 1.93l-7.812 13.53c-.687 1.188-.686 2.667 0 3.856.687 1.19 1.967 1.93 3.34 1.93h15.661c2.112-.018 3.825-1.742 3.825-3.858 0-.743-.21-1.46-.61-2.082zm-11.06-10.54c.657 0 1.19.532 1.19 1.19l-.303 7.11c-.032.643-.532.887-.89.887-.4 0-.85-.21-.886-.887l-.305-7.11c0-.658.533-1.19 1.19-1.19zm1.075 12.792c-.283.283-.674.445-1.076.445-.4 0-.79-.162-1.077-.445-.284-.283-.445-.677-.445-1.08 0-.398.16-.79.445-1.075.286-.283.68-.448 1.078-.448.4 0 .793.165 1.077.448.286.284.448.677.448 1.076 0 .4-.162.794-.448 1.078z" fill="#D0011B" fill-rule="nonzero"/>\n        </g>\n    </svg>\n\n                </a>\n            ':""}}},function(t,r,e){var n=e(8);"string"==typeof n&&(n=[[t.i,n,""]]);e(11)(n,{});n.locals&&(t.exports=n.locals)},function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var r,e,i,o,s,a,f=t.length;s=n(t),a=new c(3*f/4-s),i=s>0?f-4:f;var u=0;for(r=0,e=0;r<i;r+=4,e+=3)o=l[t.charCodeAt(r)]<<18|l[t.charCodeAt(r+1)]<<12|l[t.charCodeAt(r+2)]<<6|l[t.charCodeAt(r+3)],a[u++]=o>>16&255,a[u++]=o>>8&255,a[u++]=255&o;return 2===s?(o=l[t.charCodeAt(r)]<<2|l[t.charCodeAt(r+1)]>>4,a[u++]=255&o):1===s&&(o=l[t.charCodeAt(r)]<<10|l[t.charCodeAt(r+1)]<<4|l[t.charCodeAt(r+2)]>>2,a[u++]=o>>8&255,a[u++]=255&o),a}function s(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}function a(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(s(n));return i.join("")}function f(t){for(var r,e=t.length,n=e%3,i="",o=[],s=16383,f=0,l=e-n;f<l;f+=s)o.push(a(t,f,f+s>l?l:f+s));return 1===n?(r=t[e-1],i+=u[r>>2],i+=u[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=u[r>>10],i+=u[r>>4&63],i+=u[r<<2&63],i+="="),o.push(i),o.join("")}r.byteLength=i,r.toByteArray=o,r.fromByteArray=f;for(var u=[],l=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,g=h.length;p<g;++p)u[p]=h[p],l[h.charCodeAt(p)]=p;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63},function(t,r,e){"use strict";(function(t){function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(i()<r)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=s.prototype):(null===t&&(t=new s(r)),t.length=r),t}function s(t,r,e){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return a(this,t,r,e)}function a(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?p(t,r,e,n):"string"==typeof r?c(t,r,e):g(t,r)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,r,e,n){return f(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function l(t,r){if(f(r),t=o(t,r<0?0:0|d(r)),!s.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function c(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!s.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e);t=o(t,n);var i=t.write(r,e);return i!==n&&(t=t.slice(0,i)),t}function h(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),s.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=s.prototype):t=h(t,r),t}function g(t,r){if(s.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Z(r.length)?o(t,0):h(t,r);if("Buffer"===r.type&&W(r.data))return h(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function m(t){return+t!=t&&(t=0),s.alloc(+t)}function v(t,r){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return $(t).length;default:if(n)return J(t).length;r=(""+r).toLowerCase(),n=!0}}function y(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,r,e);case"utf8":case"utf-8":return T(this,r,e);case"ascii":return C(this,r,e);case"latin1":case"binary":return I(this,r,e);case"base64":return S(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function b(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=s.from(r,n)),s.isBuffer(r))return 0===r.length?-1:A(t,r,e,n,i);if("number"==typeof r)return r&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):A(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function A(t,r,e,n,i){function o(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}var s=1,a=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;s=2,a/=2,f/=2,e/=2}var u;if(i){var l=-1;for(u=e;u<a;u++)if(o(t,u)===o(r,-1===l?0:u-l)){if(-1===l&&(l=u),u-l+1===f)return l*s}else-1!==l&&(u-=u-l),l=-1}else for(e+f>a&&(e=a-f),u=e;u>=0;u--){for(var c=!0,h=0;h<f;h++)if(o(t,u+h)!==o(r,h)){c=!1;break}if(c)return u}return-1}function E(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(r.substr(2*s,2),16);if(isNaN(a))return s;t[e+s]=a}return s}function R(t,r,e,n){return X(J(r,t.length-e),t,e,n)}function x(t,r,e,n){return X(H(r),t,e,n)}function U(t,r,e,n){return x(t,r,e,n)}function _(t,r,e,n){return X($(r),t,e,n)}function B(t,r,e,n){return X(G(r,t.length-e),t,e,n)}function S(t,r,e){return 0===r&&e===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(r,e))}function T(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=e){var f,u,l,c;switch(a){case 1:o<128&&(s=o);break;case 2:f=t[i+1],128==(192&f)&&(c=(31&o)<<6|63&f)>127&&(s=c);break;case 3:f=t[i+1],u=t[i+2],128==(192&f)&&128==(192&u)&&(c=(15&o)<<12|(63&f)<<6|63&u)>2047&&(c<55296||c>57343)&&(s=c);break;case 4:f=t[i+1],u=t[i+2],l=t[i+3],128==(192&f)&&128==(192&u)&&128==(192&l)&&(c=(15&o)<<18|(63&f)<<12|(63&u)<<6|63&l)>65535&&c<1114112&&(s=c)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=a}return P(n)}function P(t){var r=t.length;if(r<=tt)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return e}function C(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function I(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function O(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=q(t[o]);return i}function L(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function k(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,e,n,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function Y(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function j(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function D(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,i){return i||D(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,r,e,n,23,4),e+4}function z(t,r,e,n,i){return i||D(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,r,e,n,52,8),e+8}function F(t){if(t=V(t).replace(rt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function V(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function q(t){return t<16?"0"+t.toString(16):t.toString(16)}function J(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],s=0;s<n;++s){if((e=t.charCodeAt(s))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function H(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function G(t,r){for(var e,n,i,o=[],s=0;s<t.length&&!((r-=2)<0);++s)e=t.charCodeAt(s),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function $(t){return K.toByteArray(F(t))}function X(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function Z(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var K=e(5),Q=e(10),W=e(7);r.Buffer=s,r.SlowBuffer=m,r.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),r.kMaxLength=i(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,r,e){return a(null,t,r,e)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,r,e){return u(null,t,r,e)},s.allocUnsafe=function(t){return l(null,t)},s.allocUnsafeSlow=function(t){return l(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,r){if(!s.isBuffer(t)||!s.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,r){if(!W(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=s.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!s.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},s.byteLength=v,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):y.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,r,e,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,a=e-r,f=Math.min(o,a),u=this.slice(n,i),l=t.slice(r,e),c=0;c<f;++c)if(u[c]!==l[c]){o=u[c],a=l[c];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},s.prototype.indexOf=function(t,r,e){return b(this,t,r,e,!0)},s.prototype.lastIndexOf=function(t,r,e){return b(this,t,r,e,!1)},s.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return E(this,t,r,e);case"utf8":case"utf-8":return R(this,t,r,e);case"ascii":return x(this,t,r,e);case"latin1":case"binary":return U(this,t,r,e);case"base64":return _(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n;if(s.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=s.prototype;else{var i=r-t;n=new s(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},s.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||k(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},s.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||k(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},s.prototype.readUInt8=function(t,r){return r||k(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,r){return r||k(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,r){return r||k(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,r){return r||k(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,r){return r||k(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||k(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},s.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||k(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},s.prototype.readInt8=function(t,r){return r||k(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,r){r||k(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt16BE=function(t,r){r||k(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt32LE=function(t,r){return r||k(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,r){return r||k(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,r){return r||k(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,r){return r||k(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,r){return r||k(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,r){return r||k(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){M(this,t,r,e,Math.pow(2,8*e)-1,0)}var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},s.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){M(this,t,r,e,Math.pow(2,8*e)-1,0)}var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},s.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},s.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},s.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},s.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):j(this,t,r,!0),r+4},s.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):j(this,t,r,!1),r+4},s.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=0,s=1,a=0;for(this[r]=255&t;++o<e&&(s*=256);)t<0&&0===a&&0!==this[r+o-1]&&(a=1),this[r+o]=(t/s>>0)-a&255;return r+e},s.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=e-1,s=1,a=0;for(this[r+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[r+o+1]&&(a=1),this[r+o]=(t/s>>0)-a&255;return r+e},s.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},s.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},s.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},s.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):j(this,t,r,!0),r+4},s.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):j(this,t,r,!1),r+4},s.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},s.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},s.prototype.writeDoubleLE=function(t,r,e){return z(this,t,r,!0,e)},s.prototype.writeDoubleBE=function(t,r,e){return z(this,t,r,!1,e)},s.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},s.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var o;if("number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var a=s.isBuffer(t)?t:J(new s(t,n).toString()),f=a.length;for(o=0;o<e-r;++o)this[o+r]=a[o%f]}return this};var rt=/[^+\/0-9A-Za-z-_]/g}).call(r,e(14))},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},function(t,r,e){r=t.exports=e(9)(void 0),r.push([t.i,'@font-face{font-family:\'Selawik\';src:url("/glimpse/hud/assets/selawk.woff2") format("woff2"),url("/glimpse/hud/assets/selawk.woff") format("woff")}.glimpse-hud{display:-ms-flexbox !important;display:flex !important;height:40px !important;width:auto !important;-ms-flex-direction:row !important;flex-direction:row !important;-ms-flex-align:stretch !important;align-items:stretch !important;color:white !important;position:fixed !important;bottom:0 !important;right:0 !important;color:#f1f1f1 !important;font-size:15px !important;font-family:\'Selawik\', sans-serif !important;font-weight:300 !important}.glimpse-arrow{height:15px !important;width:15px !important;display:inline-block !important;margin-right:10px !important}.glimpse-arrow-path{fill:currentColor !important}.glimpse-link{color:#3399ff !important;border-right:1px solid #3399ff !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-direction:row !important;flex-direction:row !important;-ms-flex-align:center !important;align-items:center !important;height:100% !important;padding:0 15px !important;text-decoration:none !important;background-color:rgba(0,0,0,0.85) !important;transition:.3s ease !important;transition-property:background-color, color !important}.glimpse-link:hover{background-color:rgba(13,92,157,0.85) !important;color:inherit !important}.glimpse-section{display:-ms-flexbox !important;display:flex !important;-ms-flex-direction:row !important;flex-direction:row !important;-ms-flex-align:center !important;align-items:center !important;padding:0 15px !important;background-color:rgba(0,0,0,0.85) !important}.glimpse-section-duration{position:relative !important;font-size:20px !important;margin-left:5px !important;margin-right:1px !important;top:-2px !important;font-weight:600 !important}.glimpse-section-label,.glimpse-section-suffix{color:#999 !important}.glimpse-icon{display:-ms-flexbox !important;display:flex !important;-ms-flex-pack:center !important;justify-content:center !important;-ms-flex-align:center !important;align-items:center !important;background-color:rgba(0,0,0,0.85) !important;padding:0 15px !important;border-right:1px solid #3399ff !important}.glimpse-icon>svg{position:relative !important;left:2px !important;height:25px !important;width:25px !important}.glimpse-icon:hover{background-color:rgba(13,92,157,0.85) !important}\n',""])},function(t,r,e){(function(r){function e(t,r){var e=t[1]||"",i=t[3];if(!i)return e;if(r){var o=n(i);return[e].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[e].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new r(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var n=e(r,t);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),r.push(s))}},r}}).call(r,e(6).Buffer)},function(t,r){r.read=function(t,r,e,n,i){var o,s,a=8*i-n-1,f=(1<<a)-1,u=f>>1,l=-7,c=e?i-1:0,h=e?-1:1,p=t[r+c];for(c+=h,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+t[r+c],c+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+t[r+c],c+=h,l-=8);if(0===o)o=1-u;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=u}return(p?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var s,a,f,u=8*o-i-1,l=(1<<u)-1,c=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,s=l):(s=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-s))<1&&(s--,f*=2),r+=s+c>=1?h/f:h*Math.pow(2,1-c),r*f>=2&&(s++,f/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(r*f-1)*Math.pow(2,i),s+=c):(a=r*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[e+p]=255&a,p+=g,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[e+p]=255&s,p+=g,s/=256,u-=8);t[e+p-g]|=128*d}},function(t,r,e){function n(t,r){for(var e=0;e<t.length;e++){var n=t[e],i=g[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(l(n.parts[o],r))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(l(n.parts[o],r));g[n.id]={id:n.id,refs:1,parts:s}}}}function i(t){for(var r=[],e={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],a=i[2],f=i[3],u={css:s,media:a,sourceMap:f};e[o]?e[o].parts.push(u):r.push(e[o]={id:o,parts:[u]})}return r}function o(t,r){var e=v(),n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(r,n.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),b.push(r);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(r)}}function s(t){t.parentNode.removeChild(t);var r=b.indexOf(t);r>=0&&b.splice(r,1)}function a(t){var r=document.createElement("style");return t.attrs.type="text/css",u(r,t.attrs),o(t,r),r}function f(t){var r=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(r,t.attrs),o(t,r),r}function u(t,r){Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])})}function l(t,r){var e,n,i;if(r.singleton){var o=w++;e=y||(y=a(r)),n=c.bind(null,e,o,!1),i=c.bind(null,e,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(r),n=p.bind(null,e,r),i=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(r),n=h.bind(null,e),i=function(){s(e)});return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else i()}}function c(t,r,e,n){var i=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=E(r,i);else{var o=document.createTextNode(i),s=t.childNodes;s[r]&&t.removeChild(s[r]),s.length?t.insertBefore(o,s[r]):t.appendChild(o)}}function h(t,r){var e=r.css,n=r.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function p(t,r,e){var n=e.css,i=e.sourceMap,o=void 0===r.convertToAbsoluteUrls&&i;(r.convertToAbsoluteUrls||o)&&(n=A(n)),i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var g={},d=function(t){var r;return function(){return void 0===r&&(r=t.apply(this,arguments)),r}},m=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,w=0,b=[],A=e(12);t.exports=function(t,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},r.attrs="object"==typeof r.attrs?r.attrs:{},void 0===r.singleton&&(r.singleton=m()),void 0===r.insertAt&&(r.insertAt="bottom");var e=i(t);return n(e,r),function(t){for(var o=[],s=0;s<e.length;s++){var a=e[s],f=g[a.id];f.refs--,o.push(f)}if(t){n(i(t),r)}for(var s=0;s<o.length;s++){var f=o[s];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete g[f.id]}}}};var E=function(){var t=[];return function(r,e){return t[r]=e,t.filter(Boolean).join("\n")}}()},function(t,r){t.exports=function(t){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=r.protocol+"//"+r.host,n=e+r.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url *\( *(.+?) *\)/g,function(t,r){var i=r.replace(/^"(.*)"$/,function(t,r){return r}).replace(/^'(.*)'$/,function(t,r){return r});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,r,e){var n,i,o;!function(e,s){i=[],n=s,void 0!==(o="function"==typeof n?n.apply(r,i):n)&&(t.exports=o)}(0,function(){function t(t){return encodeURI(t).replace(/%25[0-9][0-9]/g,function(t){return"%"+t.substring(3)})}function r(t){return t=t.replace(/%../g,""),encodeURIComponent(t)===t}function e(e){var n="";i[e.charAt(0)]&&(n=e.charAt(0),e=e.substring(1));var s="",a="",f=!0,u=!1,l=!1;"+"==n?f=!1:"."==n?(a=".",s="."):"/"==n?(a="/",s="/"):"#"==n?(a="#",f=!1):";"==n?(a=";",s=";",u=!0,l=!0):"?"==n?(a="?",s="&",u=!0):"&"==n&&(a="&",s="&",u=!0);for(var c=[],h=e.split(","),p=[],g={},d=0;d<h.length;d++){var m=h[d],v=null;if(-1!=m.indexOf(":")){var y=m.split(":");m=y[0],v=parseInt(y[1])}for(var w={};o[m.charAt(m.length-1)];)w[m.charAt(m.length-1)]=!0,m=m.substring(0,m.length-1);var b={truncate:v,name:m,suffices:w};p.push(b),g[m]=b,c.push(m)}return{varNames:c,prefix:a,substitution:function(r){for(var e="",n=0,i=0;i<p.length;i++){var o=p[i],c=r(o.name);if(null==c||Array.isArray(c)&&0==c.length||"object"==typeof c&&0==Object.keys(c).length)n++;else if(e+=i==n?a:s||",",Array.isArray(c)){u&&(e+=o.name+"=");for(var h=0;h<c.length;h++)h>0&&(e+=o.suffices["*"]?s||",":",",o.suffices["*"]&&u&&(e+=o.name+"=")),e+=f?encodeURIComponent(c[h]).replace(/!/g,"%21"):t(c[h])}else if("object"==typeof c){u&&!o.suffices["*"]&&(e+=o.name+"=");var g=!0;for(var d in c)g||(e+=o.suffices["*"]?s||",":","),g=!1,e+=f?encodeURIComponent(d).replace(/!/g,"%21"):t(d),e+=o.suffices["*"]?"=":",",e+=f?encodeURIComponent(c[d]).replace(/!/g,"%21"):t(c[d])}else u&&(e+=o.name,l&&""==c||(e+="=")),null!=o.truncate&&(c=c.substring(0,o.truncate)),e+=f?encodeURIComponent(c).replace(/!/g,"%21"):t(c)}return e},unSubstitution:function(t,e,n){if(a&&(t=t.substring(a.length)),1==p.length&&p[0].suffices["*"]){for(var i=p[0],o=i.name,l=i.suffices["*"]?t.split(s||","):[t],c=f&&-1!=t.indexOf("="),h=1;h<l.length;h++){var t=l[h];c&&-1==t.indexOf("=")&&(l[h-1]+=(s||",")+t,l.splice(h,1),h--)}for(var h=0;h<l.length;h++){var t=l[h];f&&-1!=t.indexOf("=")&&(c=!0);var d=t.split(",");1==d.length?l[h]=d[0]:l[h]=d}if(u||c){for(var m=e[o]||{},v=0;v<l.length;v++){var y=t;if(!u||y){if("string"==typeof l[v]){var t=l[v],w=t.split("=",1)[0],t=t.substring(w.length+1);if(f){if(n&&!r(t))return;t=decodeURIComponent(t)}y=t}else{var t=l[v][0],w=t.split("=",1)[0],t=t.substring(w.length+1);if(f){if(n&&!r(t))return;t=decodeURIComponent(t)}l[v][0]=t,y=l[v]}if(f){if(n&&!r(w))return;w=decodeURIComponent(w)}void 0!==m[w]?Array.isArray(m[w])?m[w].push(y):m[w]=[m[w],y]:m[w]=y}}1==Object.keys(m).length&&void 0!==m[o]?e[o]=m[o]:e[o]=m}else{if(f)for(var v=0;v<l.length;v++){var d=l[v];if(Array.isArray(d))for(var b=0;b<d.length;b++){if(n&&!r(d[b]))return;d[b]=decodeURIComponent(d[b])}else{if(n&&!r(d))return;l[v]=decodeURIComponent(d)}}void 0!==e[o]?Array.isArray(e[o])?e[o]=e[o].concat(l):e[o]=[e[o]].concat(l):1!=l.length||i.suffices["*"]?e[o]=l:e[o]=l[0]}}else{for(var l=1==p.length?[t]:t.split(s||","),A={},h=0;h<l.length;h++){for(var E=0;E<p.length-1&&E<h&&!p[E].suffices["*"];E++);if(E!=h){for(var R=p.length-1;R>0&&p.length-R<l.length-h&&!p[R].suffices["*"];R--);p.length-R!=l.length-h?A[h]=E:A[h]=R}else A[h]=h}for(var h=0;h<l.length;h++){var t=l[h];if(t||!u){var d=t.split(","),c=!1;if(u){var t=d[0],o=t.split("=",1)[0],t=t.substring(o.length+1);d[0]=t;var i=g[o]||p[0]}else var i=p[A[h]],o=i.name;for(var v=0;v<d.length;v++)if(f){if(n&&!r(d[v]))return;d[v]=decodeURIComponent(d[v])}(u||i.suffices["*"])&&void 0!==e[o]?Array.isArray(e[o])?e[o]=e[o].concat(d):e[o]=[e[o]].concat(d):1!=d.length||i.suffices["*"]?e[o]=d:e[o]=d[0]}}}return 1}}}function n(t){if(!(this instanceof n))return new n(t);for(var r=t.split("{"),i=[r.shift()],o=[],s=[],a=[],f=[];r.length>0;){var u=r.shift(),l=u.split("}")[0],c=u.substring(l.length+1),h=e(l);s.push(h.substitution),a.push(h.unSubstitution),o.push(h.prefix),i.push(c),f=f.concat(h.varNames)}this.fill=function(t){if(t&&"function"!=typeof t){var r=t;t=function(t){return r[t]}}for(var e=i[0],n=0;n<s.length;n++){e+=(0,s[n])(t),e+=i[n+1]}return e},this.fromUri=function(t,r){r=r||{};for(var e={},n=0;n<i.length;n++){var s=i[n];if(t.substring(0,s.length)!==s)return;if(t=t.substring(s.length),n>=i.length-1){if(""==t)break;return}var f=o[n];if(!f||t.substring(0,f.length)===f){for(var u=i[n+1],l=n;;){if(l==i.length-2){var c=t.substring(t.length-u.length);if(c!==u)return;var h=t.substring(0,t.length-u.length);t=c}else if(u){var p=t.indexOf(u),h=t.substring(0,p);t=t.substring(p)}else if(o[l+1]){var p=t.indexOf(o[l+1]);-1===p&&(p=t.length);var h=t.substring(0,p);t=t.substring(p)}else{if(i.length>l+2){l++,u=i[l+1];continue}var h=t;t=""}break}if(!a[n](h,e,r.strict))return}}return e},this.varNames=f,this.template=t}var i={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},o={"*":!0};return n.prototype={toString:function(){return this.template},fillFromObject:function(t){return this.fill(t)},test:function(t,r){return!!this.fromUri(t,r)}},n})},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";function n(t){return'\n        <div class="glimpse-hud">\n            '+i.render()+"\n            "+o.render()+"\n            "+s.render()+"\n        </div>\n    "}e(4);var i=(e(0),e(3)),o=e(1),s=e(2),a=1,f=function t(){if("complete"===document.readyState){var r=document.createElement("div");r.innerHTML=n(),document.body.appendChild(r)}else setTimeout(t,a*=2)};setTimeout(f)}]);