/*! For license information please see 3.30bc58a9.chunk.js.LICENSE.txt */
(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[3],{106:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(22),o=function startTapClick(t){var e,n,o,w=10*-L,g=0,j=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),k=new WeakMap,O=function s(t){w=Object(i.u)(t),y(t)},R=function d(){o&&clearTimeout(o),o=void 0,e&&(B(!1),e=void 0)},x=function l(t){e||C(a(t),t)},y=function E(t){C(void 0,t)},C=function T(t,n){if(!t||t!==e){o&&clearTimeout(o),o=void 0;var a=Object(i.p)(n),u=a.x,b=a.y;if(e){if(k.has(e))throw new Error("internal error");e.classList.contains(m)||S(e,u,b),B(!0)}if(t){var L=k.get(t);L&&(clearTimeout(L),k.delete(t)),t.classList.remove(m);var w=function s(){S(t,u,b),o=void 0};r(t)?w():o=setTimeout(w,h)}e=t}},S=function A(t,e,i){if(g=Date.now(),t.classList.add(m),j){var o=u(t);null!==o&&(q(),n=o.addRipple(e,i))}},q=function p(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},B=function D(t){q();var n=e;if(n){var i=b-Date.now()+g;if(t&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(m),k.delete(n)}),b);k.set(n,o)}else n.classList.remove(m)}},J=document;J.addEventListener("ionGestureCaptured",R),J.addEventListener("touchstart",(function f(t){w=Object(i.u)(t),x(t)}),!0),J.addEventListener("touchcancel",O,!0),J.addEventListener("touchend",O,!0),J.addEventListener("pointercancel",R,!0),J.addEventListener("mousedown",(function c(t){if(2!==t.button){var e=Object(i.u)(t)-L;w<e&&x(t)}}),!0),J.addEventListener("mouseup",(function v(t){var e=Object(i.u)(t)-L;w<e&&y(t)}),!0)},a=function getActivatableTarget(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function isInstant(t){return t.classList.contains("ion-activatable-instant")},u=function getRippleEffect(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},m="ion-activated",h=200,b=200,L=2500}}]);