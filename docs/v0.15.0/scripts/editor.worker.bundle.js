(()=>{"use strict";var e,r,n,t={},o={};function i(e){var r=o[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=o[e]={id:e,loaded:!1,exports:{}};try{var c={id:e,module:n,factory:t[e],require:i};i.i.forEach((function(e){e(c)})),n=c.module,c.factory.call(n.exports,n,n.exports,c.require)}catch(e){throw n.error=e,e}return n.loaded=!0,n.exports}i.m=t,i.c=o,i.i=[],i.amdO={},e=[],i.O=(r,n,t,o)=>{if(!n){var c=1/0;for(l=0;l<e.length;l++){for(var[n,t,o]=e[l],d=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](n[a])))?n.splice(a--,1):(d=!1,o<c&&(c=o));d&&(e.splice(l--,1),r=t())}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,t,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var n in r)i.o(r,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},i.e=()=>Promise.resolve(),i.hu=e=>e+"."+i.h()+".hot-update.js",i.hmrF=()=>"editor_worker."+i.h()+".hot-update.json",i.h=()=>"9c9202bcaeab94bf3cb7",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="@himenon/openapi-typescript-code-generator-play:",i.l=(e,t,o,c)=>{if(r[e])r[e].push(t);else{var d,a;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){d=u;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var p=(n,t)=>{d.onerror=d.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),a&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=915,(()=>{var e,r,n,t,o={},c=i.c,d=[],a=[],l="idle";function s(e){l=e;for(var r=0;r<a.length;r++)a[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function p(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return s("check"),i.hmrM().then((function(t){if(!t)return s(v()?"ready":"idle"),null;s("prepare");var o=[];return r=[],n=[],Promise.all(Object.keys(i.hmrC).reduce((function(e,r){return i.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),o)}))}))}))}function f(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var c=function(e){o||(o=e)},d=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)d.push(r[n])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(d))}function v(){if(t)return n||(n=[]),Object.keys(i.hmrI).forEach((function(e){t.forEach((function(r){i.hmrI[e](r,n)}))})),t=void 0,!0}i.hmrD=o,i.i.push((function(h){var v,m,y,g=h.module,b=function(n,t){var o=c[t];if(!o)return n;var i=function(r){if(o.hot.active){if(c[r]){var i=c[r].parents;-1===i.indexOf(t)&&i.push(t)}else d=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else d=[];return n(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(i,p,a(p));return i.e=function(e){return function(e){switch(l){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);g.hot=(v=h.id,m=g,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==v,_requireSelf:function(){d=m.parents.slice(),e=v,i(v)},active:!0,accept:function(e,r,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=r||function(){},y._acceptedErrorHandlers[e[t]]=n;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":n=[],Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,n)})),s("ready");break;case"ready":Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:p,apply:f,status:function(e){if(!e)return l;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[v]},e=void 0,y),g.parents=d,g.children=[],d=[],h.require=b})),i.hmrC={},i.hmrI={}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e,r,n,t,o={915:0},c={};function d(e){return new Promise(((r,n)=>{c[e]=r;var t=i.p+i.hu(e),o=new Error;i.l(t,(r=>{if(c[e]){c[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function a(c){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),c=o.id,d=o.chain,l=i.c[c];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var s=0;s<l.parents.length;s++){var u=l.parents[s],p=i.c[u];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([u]),moduleId:c,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),a(n[u],[c])):(delete n[u],r.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}i.f&&delete i.f.jsonpHmr,e=void 0;var l={},s=[],u={},p=function(e){};for(var f in r)if(i.o(r,f)){var h,v=r[f],m=!1,y=!1,g=!1,b="";switch((h=v?d(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(m=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":c.onAccepted&&c.onAccepted(h),y=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(f in u[f]=v,a(s,h.outdatedModules),h.outdatedDependencies)i.o(h.outdatedDependencies,f)&&(l[f]||(l[f]=[]),a(l[f],h.outdatedDependencies[f]));g&&(a(s,[h.moduleId]),u[f]=p)}r=void 0;for(var _,E=[],w=0;w<s.length;w++){var O=s[w],I=i.c[O];I&&I.hot._selfAccepted&&u[O]!==p&&!I.hot._selfInvalidated&&E.push({module:O,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var c=t.pop(),d=i.c[c];if(d){var a={},u=d.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,a);for(i.hmrD[c]=a,d.hot.active=!1,delete i.c[c],delete l[c],w=0;w<d.children.length;w++){var p=i.c[d.children[w]];p&&((e=p.parents.indexOf(c))>=0&&p.parents.splice(e,1))}}}for(var f in l)if(i.o(l,f)&&(d=i.c[f]))for(_=l[f],w=0;w<_.length;w++)r=_[w],(e=d.children.indexOf(r))>=0&&d.children.splice(e,1)},apply:function(e){for(var r in u)i.o(u,r)&&(i.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](i);for(var o in l)if(i.o(l,o)){var d=i.c[o];if(d){_=l[o];for(var a=[],p=[],f=[],h=0;h<_.length;h++){var v=_[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),p.push(y),f.push(v)}}for(var g=0;g<a.length;g++)try{a[g].call(null,_)}catch(r){if("function"==typeof p[g])try{p[g](r,{moduleId:o,dependencyId:f[g]})}catch(n){c.onErrored&&c.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[g],error:n,originalError:r}),c.ignoreErrored||(e(n),e(r))}else c.onErrored&&c.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[g],error:r}),c.ignoreErrored||e(r)}}}for(var b=0;b<E.length;b++){var w=E[b],O=w.module;try{w.require(O)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:O,module:i.c[O]})}catch(n){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:O,error:n,originalError:r}),c.ignoreErrored||(e(n),e(r))}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:O,error:r}),c.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdate_himenon_openapi_typescript_code_generator_play=(e,n,o)=>{for(var d in n)i.o(n,d)&&(r[d]=n[d]);o&&t.push(o),c[e]&&(c[e](),c[e]=void 0)},i.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(a)),i.o(r,e)||(r[e]=i.m[e])},i.hmrC.jsonp=function(c,l,s,u,p,f){p.push(a),e={},n=l,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],c.forEach((function(r){i.o(o,r)&&void 0!==o[r]&&(u.push(d(r)),e[r]=!0)})),i.f&&(i.f.jsonpHmr=function(r,n){e&&!i.o(e,r)&&i.o(o,r)&&void 0!==o[r]&&(n.push(d(r)),e[r]=!0)})},i.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(i.p+i.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},i.O.j=e=>0===o[e];var l=(e,r)=>{var n,t,[c,d,a]=r,l=0;for(n in d)i.o(d,n)&&(i.m[n]=d[n]);for(a&&a(i),e&&e(r);l<c.length;l++)t=c[l],i.o(o,t)&&o[t]&&o[t][0](),o[c[l]]=0;i.O()},s=self.webpackChunk_himenon_openapi_typescript_code_generator_play=self.webpackChunk_himenon_openapi_typescript_code_generator_play||[];s.forEach(l.bind(null,0)),s.push=l.bind(null,s.push.bind(s))})();var c=i.O(void 0,[736],(()=>i(47560)));c=i.O(c)})();
//# sourceMappingURL=editor.worker.bundle.js.map