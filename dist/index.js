!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tetris=t():e.tetris=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("bootstrap/dist/css/bootstrap.min.css")},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=(n(1),function(e){var t=e.content,n=void 0===t?"Sample button":t,r=e.theme,o=void 0===r?"primary":r,c=e.outline,i=void 0!==c&&c,u=e.size;return a.a.createElement("button",{className:"btn btn".concat(i?"-outline":"","-").concat(o," ").concat(u?"large"===u?"btn-lg":"small"===u?"btn-sm":"":"")},n)}),c=function(e){var t=e.content,n=void 0===t?"Sample heading":t,r=e.size,o=void 0===r?1:r;return function(){switch(o){case 1:return a.a.createElement("h1",null,n);case 2:return a.a.createElement("h2",null,n);case 3:return a.a.createElement("h3",null,n);case 4:return a.a.createElement("h4",null,n);case 5:return a.a.createElement("h5",null,n);case 6:return a.a.createElement("h6",null,n);default:return a.a.createElement("h1",null,n)}}()},i=function(e){var t=e.content,n=void 0===t?"Sample text":t,r=e.size;return a.a.createElement("p",{className:r<6?"h".concat(r):void 0}," ",n)},u=function(e){var t=e.source,n=e.size,r=e.rounded,o=void 0!==r&&r,c=e.height,i=e.width,u=e.classname;return a.a.createElement("img",{src:t,className:"".concat(o?"rounded":""," ").concat(n||""," ").concat(u||""),height:c&&i?c:void 0,width:c&&i?i:void 0})};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=e.content,n=void 0===t?"A simple primary alert—check it out!":t,o=e.theme,c=void 0===o?"primary":o,i=e.heading,u=e.close,s=l(Object(r.useState)(!0),2),d=s[0],m=s[1];return d&&a.a.createElement("div",{class:"alert alert-".concat(c," ").concat(u?"alert-dismissible fade show":""),role:"alert"},i&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{class:"alert-heading"},i),a.a.createElement("hr",null)),n,u&&a.a.createElement("button",{type:"button",class:"close","aria-label":"Close",onClick:function(){return m(!1)}},a.a.createElement("span",{"aria-hidden":"true"},"×")))},m=function(e){var t=e.content,n=void 0===t?"Sample badge":t,r=e.theme,o=void 0===r?"primary":r,c=e.rounded,i=void 0!==c&&c;return a.a.createElement("span",{className:"badge ".concat(i?"rounded-pill":null," bg-").concat(o)},n)},f=function(e){var t=e.type,n=e.content,r=e.theme,l=e.outline,s=e.size,d=e.muted,f=e.rounded,h=e.source,p=e.height,b=e.width;switch(t){case"button":return a.a.createElement(o,{theme:r,size:s,content:n,outline:l});case"heading":return a.a.createElement(c,{muted:d,size:s,content:n});case"text":return a.a.createElement(i,{size:s,content:n});case"image":return a.a.createElement(u,{rounded:f,size:s,source:h,height:p,width:b});case"badge":return a.a.createElement(m,{theme:r,content:n,rounded:f});case"card-image":return a.a.createElement(u,{rounded:f,size:s,source:h,height:p,width:b,classname:"card-img-top"})}},h=function(e){var t=e.tetromino,n=e.align;return a.a.createElement("div",{className:"card"},t.map((function(e){return"card-image"===e.type?f(e):null})),a.a.createElement("div",{className:"card-body".concat(n?" text-".concat(n):"")},t.map((function(e){return"card-image"!==e.type?f(e):null}))))},p=function(e){var t=e.type,n=e.content,r=e.theme,l=e.outline,s=e.size,f=e.muted,p=e.rounded,b=e.source,v=e.height,y=e.width,g=e.heading,E=e.close,w=e.align,x=e.tetromino;switch(t){case"button":return a.a.createElement(o,{theme:r,size:s,content:n,outline:l});case"heading":return a.a.createElement(c,{muted:f,size:s,content:n});case"text":return a.a.createElement(i,{size:s,content:n});case"image":return a.a.createElement(u,{rounded:p,size:s,source:b,height:v,width:y});case"alert":return a.a.createElement(d,{theme:r,content:n,heading:g,close:E});case"badge":return a.a.createElement(m,{theme:r,content:n,rounded:p});case"card":return a.a.createElement(h,{align:w,tetromino:x});default:return a.a.createElement(i,{size:s,content:"No component of this type found"})}};t.default=function(e){return p(e)}}])}));