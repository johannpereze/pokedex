(()=>{var t={757:(t,n,e)=>{t.exports=e(666)},666:t=>{var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function o(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{o({},"")}catch(t){o=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var a=n&&n.prototype instanceof _?n:_,i=Object.create(a.prototype),s=new P(r||[]);return i._invoke=function(t,n,e){var r=l;return function(a,i){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw i;return T()}for(e.method=a,e.arg=i;;){var s=e.delegate;if(s){var c=E(s,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var o=h(t,n,e);if("normal"===o.type){if(r=e.done?f:v,o.arg===p)continue;return{value:o.arg,done:e.done}}"throw"===o.type&&(r=f,e.method="throw",e.arg=o.arg)}}}(t,e,s),i}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",v="suspendedYield",d="executing",f="completed",p={};function _(){}function g(){}function m(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==e&&r.call(b,i)&&(y=b);var x=m.prototype=_.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(n){o(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function e(a,i,s,c){var o=h(t[a],t,i);if("throw"!==o.type){var u=o.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,s,c)}),(function(t){e("throw",t,s,c)})):n.resolve(l).then((function(t){u.value=t,s(u)}),(function(t){return e("throw",t,s,c)}))}c(o.arg)}var a;this._invoke=function(t,r){function i(){return new n((function(n,a){e(t,r,n,a)}))}return a=a?a.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=h(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:n,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=o(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,o(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[s]=function(){return this},t.AsyncIterator=L,t.async=function(n,e,r,a,i){void 0===i&&(i=Promise);var s=new L(u(n,e,r,a),i);return t.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},k(x),o(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return c.type="throw",c.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],c=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var o=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(o&&u){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;O(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";function t(t,n,e,r,a,i,s){try{var c=t[i](s),o=c.value}catch(t){return void e(t)}c.done?n(o):Promise.resolve(o).then(r,a)}function n(n){return function(){var e=this,r=arguments;return new Promise((function(a,i){var s=n.apply(e,r);function c(n){t(s,a,i,c,o,"next",n)}function o(n){t(s,a,i,c,o,"throw",n)}c(void 0)}))}}var r=e(757),a=e.n(r),i="https://pokeapi.co/api/v2/pokemon/";const s=function(){var t=n(a().mark((function t(n){var e,r,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/"===n&&(n=25),e=n?"".concat(i).concat(n):"".concat(i,25),t.prev=2,t.next=5,fetch(e);case 5:return r=t.sent,t.next=8,r.json();case 8:return s=t.sent,t.abrupt("return",s);case 12:t.prev=12,t.t0=t.catch(2),console.log("Error:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(n){return t.apply(this,arguments)}}(),c=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"},o=e.p+"0c51dad613966cded031acc2a94073d3.png",u=function(){var t=n(a().mark((function t(){var n,e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:return n=t.sent,t.next=5,s(n);case 5:return e=t.sent,r="/"===n?o:e.sprites.other["official-artwork"].front_default,i='\n  \n    <div class="header-ball">\n      <a href="#" class="back-arrow">'.concat("/"===n?"":'<img src="./assets/images/icons/arrow.svg" alt="back" class="back-arrow"></a> ','</a>\n      <div class="header-ball__artwork">\n          <img class="header-ball__artwork--img" src="').concat(r,'">\n          </div>\n          \n    </div><div class="header-ball__button">\n    <img src="').concat(e.sprites.versions["generation-v"]["black-white"].animated.front_default,'" alt="').concat(e.name,'">\n  </div>\n  \n  '),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();var h="https://pokeapi.co/api/v2/pokemon-species/";const l=function(){var t=n(a().mark((function t(n){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/"===n&&(n=25),e=n?"".concat(h).concat(n):"".concat(h,25),t.prev=2,t.next=5,fetch(e);case 5:return r=t.sent,t.next=8,r.json();case 8:return i=t.sent,t.abrupt("return",i);case 12:t.prev=12,t.t0=t.catch(2),console.log("Error:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=n(a().mark((function t(){var n,e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:return n=t.sent,t.next=5,s(n);case 5:return e=t.sent,t.next=8,l(n);case 8:return r=t.sent,console.log(e),console.log(r),i='\n  <div class="social-menu">\n    <div class="social-menu__favorites">\n      <img src="./assets/images/icons/favorite.svg" alt="favorite-button">\n    </div>\n    <div class="social-menu__share">\n      <img src="./assets/images/icons/share.svg" alt="share-button">\n    </div>\n  </div>\n  <div class="poke-info">\n    <div class="poke-info__name">\n      <h1>'.concat(e.name,'</h1>\n    </div>\n    <div class="poke-info__type">\n      <span><img src="" alt=""></span>\n      <h2>').concat(e.types[0].type.name,'</h2>\n    </div>\n  </div>\n  <div class="section__characteristics">\n    <div class="characteristics">\n      <div class="characteristics__container">\n        <span class="characteristics__container--icon1" style="background-image: url(').concat(o,');"></span>\n        <div class="characteristics__container--name"><h2>Height</h2></div>\n        <div class="characteristics__container--value"><h3>').concat(e.height/10,' m</h3></div>\n      </div>\n      <div class="characteristics__container">\n        <span class="characteristics__container--icon2"></span>\n        <div class="characteristics__container--name"><h2>Category</h2></div>\n        <div class="characteristics__container--value"><h3>').concat(r.genera[7].genus,'</h3></div>\n      </div>\n      <div class="characteristics__container">\n        <span class="characteristics__container--icon3"></span>\n        <div class="characteristics__container--name"><h2>Weight</h2></div>\n        <div class="characteristics__container--value"><h3>').concat(e.weight/10,' Kg</h3></div>\n      </div>\n      <div class="characteristics__container">\n        <span class="characteristics__container--icon4"></span>\n        <div class="characteristics__container--name"><h2>Gender</h2></div>\n        <div class="characteristics__container--value"><h3>').concat(e.name,'</h3></div>\n      </div>\n      <div class="characteristics__container">\n        <span class="characteristics__container--icon5"></span>\n        <div class="characteristics__container--name"><h2>Hability</h2></div>\n        <div class="characteristics__container--value"><h3>').concat(e.abilities[0].ability.name,'</h3></div>\n      </div>\n    </div>\n  </div>\n  \n  <div class="description">\n    <div class="description__title"><h2>Description</h2></div>\n    <div class="description__content"><p>').concat(r.flavor_text_entries[1].flavor_text,'</p></div>\n  </div>  \n<section class="section__stats">\n  <div class="stats">  \n    <div class="stats__title">\n      <h2>Statistics</h2>\n    </div>\n    <div class="stats__container"><div class="stats__name">\n      <h3>HP:</h3>\n      \n    </div><div class="stats__value">\n        <h3>').concat(e.stats[0].base_stat,'</h3>\n      </div></div>\n    <div class="stats__container"><div class="stats__name">\n      <h3>Attack:</h3>\n      \n    </div><div class="stats__value">\n        <h3>').concat(e.stats[1].base_stat,'</h3>\n      </div></div>\n    <div class="stats__container"><div class="stats__name">\n      <h3>Defense:</h3>\n      \n    </div><div class="stats__value">\n        <h3>').concat(e.stats[2].base_stat,'</h3>\n      </div></div>\n    <div class="stats__container"><div class="stats__name">\n      <h3>Special Attack:</h3>\n      \n    </div><div class="stats__value">\n        <h3>').concat(e.stats[3].base_stat,'</h3>\n      </div></div>\n    <div class="stats__container"><div class="stats__name">\n      <h3>Special Defense:</h3>\n      \n    </div><div class="stats__value">\n        <h3>').concat(e.stats[4].base_stat,'</h3>\n      </div></div>\n    <div class="stats__container"><div class="stats__name">\n      <h3>Speed:</h3>\n      \n    </div><div class="stats__value">\n        <h3>').concat(e.stats[5].base_stat,"</h3>\n      </div></div>    \n  </div>\n</section>\n    "),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){return'\n    <div class="error404">\n        <h2>Error 404</h2>\n    </div>\n    '},f=function(t){return t.length<=3?"/"===t?t:"/:id":"/".concat(t)};var p={"/":function(){var t=n(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Math.floor(649*Math.random());case 2:return n=t.sent,e='\n        <div class="social-menu">\n            <a href="https://github.com/johannpereze/" target="_blank"><img src="./assets/images/icons/github.svg" alt="github"></a><a href="https://www.youtube.com/c/JohannPerezE"  target="_blank"><img src="./assets/images/icons/youtube.svg" alt="youtube"></a><a href="https://www.instagram.com/johannpereze/" target="_blank"><img src="./assets/images/icons/instagram.svg" alt="instagram"></a>\n        </div>\n        <div class="home-menu">\n            <a href="#/'.concat(n,'/">\n                <div class="home-menu__card">\n                    <h2>Random Pokemon</h2>\n                    <h3>Discover a new one</h3>\n                </div>\n            </a>\n        </div>\n    '),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/:id":v};const _=function(){var t=n(a().mark((function t(){var n,e,r,i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("header"),e=document.getElementById("content"),r=c(),t.next=5,f(r);case 5:return i=t.sent,s=p[i]?p[i]:d,t.next=9,s();case 9:return e.innerHTML=t.sent,t.next=12,u();case 12:n.innerHTML=t.sent;case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("load",_),window.addEventListener("hashchange",_)})()})();