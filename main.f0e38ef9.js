parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c,u=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){a=!0,c=t},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw c}}}}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n,e){var o=document.createElement("div");o.classList.add(t);var c=document.createElement("h3");c.textContent=n,o.append(c);var u=document.createElement("ul");if("object"===r(e)){var a=document.createElement("li");a.textContent=e.id,u.appendChild(a)}for(var i=0;i<e.length;i++){var f=document.createElement("li");f.appendChild(document.createTextNode(e[i].toUpperCase())),u.appendChild(f)}o.append(u),document.body.append(o)}var c="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",u="https://mate-academy.github.io/phone-catalogue-static/api/phones/";function a(t){return new Promise(function(n,e){fetch(t).then(function(t){return t.json()}).then(function(t){return n(t)}),setTimeout(function(){return e(new Error("end"))},5e3)})}function i(t){var n=t.map(function(t){return fetch("".concat(u).concat(t,".json"))});return o("all-successful","All Successful",t),Promise.all(n)}function f(t){var n=t.map(function(t){return fetch("".concat(u).concat(t,".json"))});return Promise.race(n).then(function(t){return t.json()}).then(function(t){return o("first-received","First Received",t)})}var l=[];function s(t){f(t),i(t)}a(c).then(function(n){var e,r=t(n);try{for(r.s();!(e=r.n()).done;){var o=e.value;l.push(o.id)}}catch(c){r.e(c)}finally{r.f()}return l}).then(function(t){return s(t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f0e38ef9.js.map