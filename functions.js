!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/github-office-add-in/",r(r.s=126)}({122:function(e,t,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,t.default=n.fetch.bind(n),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},123:function(e,t,r){var n=r(128);function o(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function i(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=n(o),e.exports.strict=n(i),o.proto=o(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return o(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return i(this)},configurable:!0})})},124:function(e,t,r){"use strict";var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function c(e,t,r){return e.concat(t).map(function(e){return i(e,r)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function u(e,t,r){var n={};return r.isMergeableObject(e)&&a(e).forEach(function(t){n[t]=i(e[t],r)}),a(t).forEach(function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):n[o]=i(t[o],r)}),n}function s(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||c,r.isMergeableObject=r.isMergeableObject||n;var o=Array.isArray(t);return o===Array.isArray(e)?o?r.arrayMerge(e,t,r):u(e,t,r):i(t,r)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return s(e,r,t)},{})};var l=s;e.exports=l},125:function(e,t,r){e.exports=function(){function e(){}return e.prototype.encodeReserved=function(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")},e.prototype.encodeUnreserved=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})},e.prototype.encodeValue=function(e,t,r){return t="+"===e||"#"===e?this.encodeReserved(t):this.encodeUnreserved(t),r?this.encodeUnreserved(r)+"="+t:t},e.prototype.isDefined=function(e){return null!=e},e.prototype.isKeyOperator=function(e){return";"===e||"&"===e||"?"===e},e.prototype.getValues=function(e,t,r,n){var o=e[r],i=[];if(this.isDefined(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),n&&"*"!==n&&(o=o.substring(0,parseInt(n,10))),i.push(this.encodeValue(t,o,this.isKeyOperator(t)?r:null));else if("*"===n)Array.isArray(o)?o.filter(this.isDefined).forEach(function(e){i.push(this.encodeValue(t,e,this.isKeyOperator(t)?r:null))},this):Object.keys(o).forEach(function(e){this.isDefined(o[e])&&i.push(this.encodeValue(t,o[e],e))},this);else{var c=[];Array.isArray(o)?o.filter(this.isDefined).forEach(function(e){c.push(this.encodeValue(t,e))},this):Object.keys(o).forEach(function(e){this.isDefined(o[e])&&(c.push(this.encodeUnreserved(e)),c.push(this.encodeValue(t,o[e].toString())))},this),this.isKeyOperator(t)?i.push(this.encodeUnreserved(r)+"="+c.join(",")):0!==c.length&&i.push(c.join(","))}else";"===t?this.isDefined(o)&&i.push(this.encodeUnreserved(r)):""!==o||"&"!==t&&"?"!==t?""===o&&i.push(""):i.push(this.encodeUnreserved(r)+"=");return i},e.prototype.parse=function(e){var t=this,r=["+","#",".","/",";","?","&"];return{expand:function(n){return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(e,o,i){if(o){var c=null,a=[];if(-1!==r.indexOf(o.charAt(0))&&(c=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach(function(e){var r=/([^:\*]*)(?::(\d+)|(\*))?/.exec(e);a.push.apply(a,t.getValues(n,c,r[1],r[2]||r[3]))}),c&&"+"!==c){var u=",";return"?"===c?u="&":"#"!==c&&(u=c),(0!==a.length?c:"")+a.join(u)}return a.join(",")}return t.encodeReserved(i)})}}},new e}()},126:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function c(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(c,a)}u((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(127);CustomFunctions.associate("ISSUECOUNTFORREPO",function(e,t){return n(this,void 0,void 0,function(){return o(this,function(r){switch(r.label){case 0:return[4,i.searchIssuesForRepo(e,t)];case 1:return[2,r.sent()]}})})}),CustomFunctions.associate("ISSUECOUNTFORREPOWITHHYPERLINK",function(e,t){return n(this,void 0,void 0,function(){return o(this,function(e){return[2,"=HYPERLINK(https://google.com)"]})})})},127:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function c(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(c,a)}u((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this;Object.defineProperty(t,"__esModule",{value:!0});var c=r(320),a=r(129);t.GH=function(e){return n(i,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return"https://api.github.com/",{},[4,fetch("https://api.github.com/".concat(e))];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}})})},t.searchIssuesForRepo=function(e,t){return n(i,void 0,void 0,function(){var r,n,i,a,s;return o(this,function(o){switch(o.label){case 0:for(r="repo:OfficeDev/"+e,n=0,i=t;n<i.length;n++)a=i[n],r=r.concat(" "+a);return[4,u()];case 1:return s=o.sent(),[4,c.request("POST /graphql",{headers:{authorization:"token "+s},query:"\n      query ($q: String!) {\n        search(type: ISSUE, query: $q) {\n          issueCount\n        }\n      }\n      ",variables:{q:r}})];case 2:return[2,o.sent().data.data.search.issueCount]}})})};var u=function(){return n(i,void 0,void 0,function(){var e,t;return o(this,function(r){switch(r.label){case 0:return[4,OfficeRuntime.storage.getItem("token")];case 1:return(e=r.sent())?[2,e]:[3,2];case 2:return[4,a.getTokenViaDialog()];case 3:return t=r.sent(),OfficeRuntime.storage.setItem("token",t),[2,t]}})})}},128:function(e,t){e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw new TypeError("need wrapper function");Object.keys(t).forEach(function(e){n[e]=t[e]});return n;function n(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var n=t.apply(this,e),o=e[e.length-1];return"function"==typeof n&&n!==o&&Object.keys(o).forEach(function(e){n[e]=o[e]}),n}}},129:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(130),o=!1;t.getTokenViaDialog=function(){return new Promise(function(e,t){if(o)var r=0,i=setInterval(function(){++r>=5&&(t("Timeout while waiting for token"),clearInterval(i))},1e3);else o=!0,OfficeRuntime.displayWebDialog("https://github.com/login/oauth/authorize?client_id="+n.clientID+"&redirect_uri="+n.redirectURI,{height:"50%",width:"50%",onMessage:function(t,r){fetch("https://github-add-in-for-excel.azurewebsites.net/authenticate/"+t).then(function(t){t.json().then(function(t){return e(t.token)})}),r.close()},onRuntimeError:function(e,r){t(e)}}).catch(function(e){t(e)})})}},130:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clientID="22671e7be7c486334438",t.clientSecret="6a64eaa67fe5dfe1c7328122e19edfc9e1f5a24e",t.redirectURI="https://localhost:3000/dialog.html",t.stateString="lasnksvjowq23nf3039rtjflsdaoLAJNLF9ia9"},320:function(e,t,r){"use strict";r.r(t);var n=r(124),o=r.n(n);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function i(e){return!0==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var t}function c(e){var t,r;return!1!==i(e)&&("function"==typeof(t=e.constructor)&&(!1!==i(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")))}var a=r(125),u=r.n(a),s=r(60),l=r.n(s);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t,r){if("string"==typeof t){let e=f(t.split(" "),2),n=e[0],o=e[1];r=Object.assign(o?{method:n,url:o}:{url:n},r)}else r=t||{};var n;r.headers=(n=r.headers)?Object.keys(n).reduce((e,t)=>(e[t.toLowerCase()]=n[t],e),{}):{};const i=o.a.all([e,r].filter(Boolean),{isMergeableObject:c});return e&&e.mediaType.previews.length&&(i.mediaType.previews=e.mediaType.previews.filter(e=>!i.mediaType.previews.includes(e)).concat(i.mediaType.previews)),i.mediaType.previews=i.mediaType.previews.map(e=>e.replace(/-preview/,"")),i}const d=/\{[^}]+\}/g;function h(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function y(e,t){return Object.keys(e).filter(e=>!t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{})}function b(e){let t,r=e.method.toUpperCase(),n=e.url.replace(/:([a-z]\w+)/g,"{+$1}"),o=Object.assign({},e.headers),i=y(e,["method","baseUrl","url","headers","request","mediaType"]);const c=function(e){const t=e.match(d);return t?t.map(h).reduce((e,t)=>e.concat(t),[]):[]}(n);n=u.a.parse(n).expand(i),/^http/.test(n)||(n=e.baseUrl+n);const a=y(i,Object.keys(e).filter(e=>c.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(o.accept)&&(e.mediaType.format&&(o.accept=o.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,"application/vnd$1$2.".concat(e.mediaType.format))).join(",")),e.mediaType.previews.length)){const t=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=t.concat(e.mediaType.previews).map(t=>{const r=e.mediaType.format?".".concat(e.mediaType.format):"+json";return"application/vnd.github.".concat(t,"-preview").concat(r)}).join(",")}return["GET","HEAD"].includes(r)?n=function(e,t){const r=/\?/.test(e)?"&":"?",n=Object.keys(t);return 0===n.length?e:e+r+n.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):"".concat(e,"=").concat(encodeURIComponent(t[e]))).join("&")}(n,a):"data"in a?t=a.data:Object.keys(a).length?t=a:o["content-length"]=0,o["content-type"]||void 0===t||(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:n,headers:o},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}const v=function e(t,r){const n=p(t,r),o=function(e,t,r){return b(p(e,t,r))}.bind(null,n);return Object.assign(o,{DEFAULTS:n,defaults:e.bind(null,n),merge:p.bind(null,n),parse:b})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":"octokit-endpoint.js/".concat("0.0.0-development"," ").concat(l()())},mediaType:{format:"",previews:[]}});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function g(e){return!0==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var t}var m=r(122),w=r.n(m);class j extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}var O=r(123);const E=r.n(O)()(e=>console.warn(e));class T extends Error{constructor(e,t,r){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,Object.defineProperty(this,"code",{get:()=>(E(new j("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t)}),this.headers=r.headers;const n=Object.assign({},r.request);r.request.headers.authorization&&(n.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n}}r.d(t,"request",function(){return k});function S(e){var t,r,n;(!1!==g(t=e.body)&&"function"==typeof(r=t.constructor)&&!1!==g(n=r.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let o,i,c={};return(e.request&&e.request.fetch||w.a)(e.url,Object.assign({method:e.method,body:e.body,headers:e.headers,redirect:e.redirect},e.request)).then(t=>{i=t.url,o=t.status;for(const e of t.headers)c[e[0]]=e[1];if(204===o||205===o)return;if("HEAD"===e.method){if(o<400)return;throw new T(t.statusText,o,{headers:c,request:e})}if(304===o)throw new T("Not modified",o,{headers:c,request:e});if(o>=400)return t.text().then(t=>{const r=new T(t,o,{headers:c,request:e});try{Object.assign(r,JSON.parse(r.message))}catch(e){}throw r});const r=t.headers.get("content-type");return/application\/json/.test(r)?t.json():!r||/^text\/|charset=utf-8$/.test(r)?t.text():function(e){return e.arrayBuffer()}(t)}).then(e=>({status:o,url:i,headers:c,data:e})).catch(t=>{if(t instanceof T)throw t;throw new T(t.message,500,{headers:c,request:e})})}const k=function e(t,r){const n=t.defaults(r);return Object.assign(function(t,r){const o=n.merge(t,r);if(!o.request||!o.request.hook)return S(n.parse(o));const i=(e,t)=>S(n.parse(n.merge(e,t)));return Object.assign(i,{endpoint:n,defaults:e.bind(null,n)}),o.request.hook(i,o)},{endpoint:n,defaults:e.bind(null,n)})}(v,{headers:{"user-agent":`octokit-request.js/0.0.0-development ${l()()}`}})},60:function(e,t){e.exports=function(){return navigator.userAgent}}});
//# sourceMappingURL=functions.js.map