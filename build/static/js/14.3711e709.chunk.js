(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[14],{147:function(t,o){var s,h,f,m,_;(function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(o){var s=t.has(o);return o=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(o),!s&&o}function l(t){var o=t.isConnected;if(void 0!==o)return o;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function n(t,o){for(;o&&o!==t&&!o.nextSibling;)o=o.parentNode;return o&&o!==t?o.nextSibling:null}function p(t,o,s){s=void 0===s?new Set:s;for(var h=t;h;){if(h.nodeType===Node.ELEMENT_NODE){var f=h;o(f);var m=f.localName;if("link"===m&&"import"===f.getAttribute("rel")){if((h=f.import)instanceof Node&&!s.has(h))for(s.add(h),h=h.firstChild;h;h=h.nextSibling)p(h,o,s);h=n(t,f);continue}if("template"===m){h=n(t,f);continue}if(f=f.__CE_shadowRoot)for(f=f.firstChild;f;f=f.nextSibling)p(f,o,s)}h=h.firstChild?h.firstChild:n(t,h)}}function r(t,o,s){t[o]=s}function u(){this.a=new Map,this.g=new Map,this.c=[],this.f=[],this.b=!1}function v(t,o){t.b&&p(o,(function(o){return w(t,o)}))}function w(t,o){if(t.b&&!o.__CE_patched){o.__CE_patched=!0;for(var s=0;s<t.c.length;s++)t.c[s](o);for(s=0;s<t.f.length;s++)t.f[s](o)}}function x(t,o){var s=[];for(p(o,(function(t){return s.push(t)})),o=0;o<s.length;o++){var h=s[o];1===h.__CE_state?t.connectedCallback(h):y(t,h)}}function z(t,o){var s=[];for(p(o,(function(t){return s.push(t)})),o=0;o<s.length;o++){var h=s[o];1===h.__CE_state&&t.disconnectedCallback(h)}}function A(t,o,s){var h=(s=void 0===s?{}:s).u||new Set,f=s.i||function(o){return y(t,o)},m=[];if(p(o,(function(o){if("link"===o.localName&&"import"===o.getAttribute("rel")){var s=o.import;s instanceof Node&&(s.__CE_isImportDocument=!0,s.__CE_hasRegistry=!0),s&&"complete"===s.readyState?s.__CE_documentLoadHandled=!0:o.addEventListener("load",(function(){var s=o.import;if(!s.__CE_documentLoadHandled){s.__CE_documentLoadHandled=!0;var m=new Set(h);m.delete(s),A(t,s,{u:m,i:f})}}))}else m.push(o)}),h),t.b)for(o=0;o<m.length;o++)w(t,m[o]);for(o=0;o<m.length;o++)f(m[o])}function y(t,o){if(void 0===o.__CE_state){var s=o.ownerDocument;if((s.defaultView||s.__CE_isImportDocument&&s.__CE_hasRegistry)&&(s=t.a.get(o.localName))){s.constructionStack.push(o);var h=s.constructorFunction;try{try{if(new h!==o)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{s.constructionStack.pop()}}catch(_){throw o.__CE_state=2,_}if(o.__CE_state=1,o.__CE_definition=s,s.attributeChangedCallback)for(s=s.observedAttributes,h=0;h<s.length;h++){var f=s[h],m=o.getAttribute(f);null!==m&&t.attributeChangedCallback(o,f,null,m,null)}l(o)&&t.connectedCallback(o)}}}function B(t){var o=document;this.c=t,this.a=o,this.b=void 0,A(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(t){t.b&&t.b.disconnect()}function ea(){var t=this;this.b=this.a=void 0,this.c=new Promise((function(o){t.b=o,t.a&&o(t.a)}))}function D(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function E(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.g=[],this.o=new B(t)}u.prototype.connectedCallback=function(t){var o=t.__CE_definition;o.connectedCallback&&o.connectedCallback.call(t)},u.prototype.disconnectedCallback=function(t){var o=t.__CE_definition;o.disconnectedCallback&&o.disconnectedCallback.call(t)},u.prototype.attributeChangedCallback=function(t,o,s,h,f){var m=t.__CE_definition;m.attributeChangedCallback&&-1<m.observedAttributes.indexOf(o)&&m.attributeChangedCallback.call(t,o,s,h,f)},B.prototype.f=function(t){var o=this.a.readyState;for("interactive"!==o&&"complete"!==o||C(this),o=0;o<t.length;o++)for(var s=t[o].addedNodes,h=0;h<s.length;h++)A(this.c,s[h])},E.prototype.l=function(t,o){var s=this;if(!(o instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var h=function c(t){var o=f[t];if(void 0!==o&&!(o instanceof Function))throw Error("The '"+t+"' callback must be a function.");return o},f=o.prototype;if(!(f instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var m=h("connectedCallback"),_=h("disconnectedCallback"),N=h("adoptedCallback"),S=h("attributeChangedCallback"),T=o.observedAttributes||[]}catch(k){return}finally{this.c=!1}o={localName:t,constructorFunction:o,connectedCallback:m,disconnectedCallback:_,adoptedCallback:N,attributeChangedCallback:S,observedAttributes:T,constructionStack:[]},function ba(t,o,s){t.a.set(o,s),t.g.set(s.constructorFunction,s)}(this.a,t,o),this.g.push(o),this.b||(this.b=!0,this.f((function(){return function fa(t){if(!1!==t.b){t.b=!1;for(var o=t.g,s=[],h=new Map,f=0;f<o.length;f++)h.set(o[f].localName,[]);for(A(t.a,document,{i:function i(o){if(void 0===o.__CE_state){var f=o.localName,m=h.get(f);m?m.push(o):t.a.a.get(f)&&s.push(o)}}}),f=0;f<s.length;f++)y(t.a,s[f]);for(;0<o.length;){var m=o.shift();f=m.localName,m=h.get(m.localName);for(var _=0;_<m.length;_++)y(t.a,m[_]);(f=t.j.get(f))&&D(f)}}}(s)})))},E.prototype.i=function(t){A(this.a,t)},E.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},E.prototype.m=function(t){if(!g(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var o=this.j.get(t);return o||(o=new ea,this.j.set(t,o),this.a.a.get(t)&&!this.g.some((function(o){return o.localName===t}))&&D(o)),o.c},E.prototype.s=function(t){C(this.o);var o=this.f;this.f=function(s){return t((function(){return o(s)}))}},window.CustomElementRegistry=E,E.prototype.define=E.prototype.l,E.prototype.upgrade=E.prototype.i,E.prototype.get=E.prototype.get,E.prototype.whenDefined=E.prototype.m,E.prototype.polyfillWrapFlushCallback=E.prototype.s;var o=window.Document.prototype.createElement,s=window.Document.prototype.createElementNS,h=window.Document.prototype.importNode,f=window.Document.prototype.prepend,m=window.Document.prototype.append,_=window.DocumentFragment.prototype.prepend,N=window.DocumentFragment.prototype.append,S=window.Node.prototype.cloneNode,T=window.Node.prototype.appendChild,k=window.Node.prototype.insertBefore,O=window.Node.prototype.removeChild,j=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),M=window.Element.prototype.attachShadow,H=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),R=window.Element.prototype.getAttribute,P=window.Element.prototype.setAttribute,F=window.Element.prototype.removeAttribute,I=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,W=window.Element.prototype.removeAttributeNS,q=window.Element.prototype.insertAdjacentElement,$=window.Element.prototype.insertAdjacentHTML,J=window.Element.prototype.prepend,V=window.Element.prototype.append,X=window.Element.prototype.before,G=window.Element.prototype.after,K=window.Element.prototype.replaceWith,Q=window.Element.prototype.remove,Z=window.HTMLElement,tt=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),et=window.HTMLElement.prototype.insertAdjacentElement,nt=window.HTMLElement.prototype.insertAdjacentHTML,ot=new function(){};function Y(t,o,s){function c(o){return function(s){for(var h=[],f=0;f<arguments.length;++f)h[f]=arguments[f];f=[];for(var m=[],_=0;_<h.length;_++){var N=h[_];if(N instanceof Element&&l(N)&&m.push(N),N instanceof DocumentFragment)for(N=N.firstChild;N;N=N.nextSibling)f.push(N);else f.push(N)}for(o.apply(this,h),h=0;h<m.length;h++)z(t,m[h]);if(l(this))for(h=0;h<f.length;h++)(m=f[h])instanceof Element&&x(t,m)}}void 0!==s.h&&(o.prepend=c(s.h)),void 0!==s.append&&(o.append=c(s.append))}var rt=window.customElements;if(!rt||rt.forcePolyfill||"function"!=typeof rt.define||"function"!=typeof rt.get){var it=new u;!function xa(){var t=it;window.HTMLElement=function(){function b(){var s=this.constructor,h=t.g.get(s);if(!h)throw Error("The custom element being constructed was not registered with `customElements`.");var f=h.constructionStack;if(0===f.length)return f=o.call(document,h.localName),Object.setPrototypeOf(f,s.prototype),f.__CE_state=1,f.__CE_definition=h,w(t,f),f;var m=f[h=f.length-1];if(m===ot)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return f[h]=ot,Object.setPrototypeOf(m,s.prototype),w(t,m),m}return b.prototype=Z.prototype,Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b}),b}()}(),function ya(){var t=it;r(Document.prototype,"createElement",(function(s){if(this.__CE_hasRegistry){var h=t.a.get(s);if(h)return new h.constructorFunction}return s=o.call(this,s),w(t,s),s})),r(Document.prototype,"importNode",(function(o,s){return o=h.call(this,o,!!s),this.__CE_hasRegistry?A(t,o):v(t,o),o})),r(Document.prototype,"createElementNS",(function(o,h){if(this.__CE_hasRegistry&&(null===o||"http://www.w3.org/1999/xhtml"===o)){var f=t.a.get(h);if(f)return new f.constructorFunction}return o=s.call(this,o,h),w(t,o),o})),Y(t,Document.prototype,{h:f,append:m})}(),Y(it,DocumentFragment.prototype,{h:_,append:N}),function za(){function a(o,s){Object.defineProperty(o,"textContent",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function set(o){if(this.nodeType===Node.TEXT_NODE)s.set.call(this,o);else{var h=void 0;if(this.firstChild){var f=this.childNodes,m=f.length;if(0<m&&l(this)){h=Array(m);for(var _=0;_<m;_++)h[_]=f[_]}}if(s.set.call(this,o),h)for(o=0;o<h.length;o++)z(t,h[o])}}})}var t=it;r(Node.prototype,"insertBefore",(function(o,s){if(o instanceof DocumentFragment){var h=Array.prototype.slice.apply(o.childNodes);if(o=k.call(this,o,s),l(this))for(s=0;s<h.length;s++)x(t,h[s]);return o}return h=l(o),s=k.call(this,o,s),h&&z(t,o),l(this)&&x(t,o),s})),r(Node.prototype,"appendChild",(function(o){if(o instanceof DocumentFragment){var s=Array.prototype.slice.apply(o.childNodes);if(o=T.call(this,o),l(this))for(var h=0;h<s.length;h++)x(t,s[h]);return o}return s=l(o),h=T.call(this,o),s&&z(t,o),l(this)&&x(t,o),h})),r(Node.prototype,"cloneNode",(function(o){return o=S.call(this,!!o),this.ownerDocument.__CE_hasRegistry?A(t,o):v(t,o),o})),r(Node.prototype,"removeChild",(function(o){var s=l(o),h=O.call(this,o);return s&&z(t,o),h})),r(Node.prototype,"replaceChild",(function(o,s){if(o instanceof DocumentFragment){var h=Array.prototype.slice.apply(o.childNodes);if(o=j.call(this,o,s),l(this))for(z(t,s),s=0;s<h.length;s++)x(t,h[s]);return o}h=l(o);var f=j.call(this,o,s),m=l(this);return m&&z(t,s),h&&z(t,o),m&&x(t,o),f})),L&&L.get?a(Node.prototype,L):function ca(t,o){t.b=!0,t.c.push(o)}(t,(function(t){a(t,{enumerable:!0,configurable:!0,get:function get(){for(var t=[],o=0;o<this.childNodes.length;o++){var s=this.childNodes[o];s.nodeType!==Node.COMMENT_NODE&&t.push(s.textContent)}return t.join("")},set:function set(t){for(;this.firstChild;)O.call(this,this.firstChild);null!=t&&""!==t&&T.call(this,document.createTextNode(t))}})}))}(),function Ba(){function a(o,s){Object.defineProperty(o,"innerHTML",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function set(o){var h=this,f=void 0;if(l(this)&&(f=[],p(this,(function(t){t!==h&&f.push(t)}))),s.set.call(this,o),f)for(var m=0;m<f.length;m++){var _=f[m];1===_.__CE_state&&t.disconnectedCallback(_)}return this.ownerDocument.__CE_hasRegistry?A(t,this):v(t,this),o}})}function b(o,s){r(o,"insertAdjacentElement",(function(o,h){var f=l(h);return o=s.call(this,o,h),f&&z(t,h),l(o)&&x(t,h),o}))}function d(o,s){function e(o,s){for(var h=[];o!==s;o=o.nextSibling)h.push(o);for(s=0;s<h.length;s++)A(t,h[s])}r(o,"insertAdjacentHTML",(function(t,o){if("beforebegin"===(t=t.toLowerCase())){var h=this.previousSibling;s.call(this,t,o),e(h||this.parentNode.firstChild,this)}else if("afterbegin"===t)h=this.firstChild,s.call(this,t,o),e(this.firstChild,h);else if("beforeend"===t)h=this.lastChild,s.call(this,t,o),e(h||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");h=this.nextSibling,s.call(this,t,o),e(this.nextSibling,h)}}))}var t=it;M&&r(Element.prototype,"attachShadow",(function(o){o=M.call(this,o);var s=t;if(s.b&&!o.__CE_patched){o.__CE_patched=!0;for(var h=0;h<s.c.length;h++)s.c[h](o)}return this.__CE_shadowRoot=o})),H&&H.get?a(Element.prototype,H):tt&&tt.get?a(HTMLElement.prototype,tt):function da(t,o){t.b=!0,t.f.push(o)}(t,(function(t){a(t,{enumerable:!0,configurable:!0,get:function get(){return S.call(this,!0).innerHTML},set:function set(t){var o="template"===this.localName,h=o?this.content:this,f=s.call(document,this.namespaceURI,this.localName);for(f.innerHTML=t;0<h.childNodes.length;)O.call(h,h.childNodes[0]);for(t=o?f.content:f;0<t.childNodes.length;)T.call(h,t.childNodes[0])}})})),r(Element.prototype,"setAttribute",(function(o,s){if(1!==this.__CE_state)return P.call(this,o,s);var h=R.call(this,o);P.call(this,o,s),s=R.call(this,o),t.attributeChangedCallback(this,o,h,s,null)})),r(Element.prototype,"setAttributeNS",(function(o,s,h){if(1!==this.__CE_state)return U.call(this,o,s,h);var f=I.call(this,o,s);U.call(this,o,s,h),h=I.call(this,o,s),t.attributeChangedCallback(this,s,f,h,o)})),r(Element.prototype,"removeAttribute",(function(o){if(1!==this.__CE_state)return F.call(this,o);var s=R.call(this,o);F.call(this,o),null!==s&&t.attributeChangedCallback(this,o,s,null,null)})),r(Element.prototype,"removeAttributeNS",(function(o,s){if(1!==this.__CE_state)return W.call(this,o,s);var h=I.call(this,o,s);W.call(this,o,s);var f=I.call(this,o,s);h!==f&&t.attributeChangedCallback(this,s,h,f,o)})),et?b(HTMLElement.prototype,et):q?b(Element.prototype,q):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),nt?d(HTMLElement.prototype,nt):$?d(Element.prototype,$):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Y(t,Element.prototype,{h:J,append:V}),function Aa(t){function b(o){return function(s){for(var h=[],f=0;f<arguments.length;++f)h[f]=arguments[f];f=[];for(var m=[],_=0;_<h.length;_++){var N=h[_];if(N instanceof Element&&l(N)&&m.push(N),N instanceof DocumentFragment)for(N=N.firstChild;N;N=N.nextSibling)f.push(N);else f.push(N)}for(o.apply(this,h),h=0;h<m.length;h++)z(t,m[h]);if(l(this))for(h=0;h<f.length;h++)(m=f[h])instanceof Element&&x(t,m)}}var o=Element.prototype;void 0!==X&&(o.before=b(X)),void 0!==X&&(o.after=b(G)),void 0!==K&&r(o,"replaceWith",(function(o){for(var s=[],h=0;h<arguments.length;++h)s[h]=arguments[h];h=[];for(var f=[],m=0;m<s.length;m++){var _=s[m];if(_ instanceof Element&&l(_)&&f.push(_),_ instanceof DocumentFragment)for(_=_.firstChild;_;_=_.nextSibling)h.push(_);else h.push(_)}for(m=l(this),K.apply(this,s),s=0;s<f.length;s++)z(t,f[s]);if(m)for(z(t,this),s=0;s<h.length;s++)(f=h[s])instanceof Element&&x(t,f)})),void 0!==Q&&r(o,"remove",(function(){var o=l(this);Q.call(this),o&&z(t,this)}))}(t)}(),document.__CE_hasRegistry=!0;var at=new E(it);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:at})}}).call(self),"string"!==typeof document.baseURI&&Object.defineProperty(Document.prototype,"baseURI",{enumerable:!0,configurable:!0,get:function get(){var t=document.querySelector("base");return t&&t.href?t.href:document.URL}}),"function"!==typeof window.CustomEvent&&(window.CustomEvent=function(t,o){o=o||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),s},window.CustomEvent.prototype=window.Event.prototype),s=Event.prototype,h=document,f=window,s.composedPath||(s.composedPath=function(){if(this.path)return this.path;var t=this.target;for(this.path=[];null!==t.parentNode;)this.path.push(t),t=t.parentNode;return this.path.push(h,f),this.path}),"function"!==typeof(m=window.Element.prototype).matches&&(m.matches=m.msMatchesSelector||m.mozMatchesSelector||m.webkitMatchesSelector||function(t){t=(this.document||this.ownerDocument).querySelectorAll(t);for(var o=0;t[o]&&t[o]!==this;)++o;return!!t[o]}),"function"!==typeof m.closest&&(m.closest=function(t){for(var o=this;o&&1===o.nodeType;){if(o.matches(t))return o;o=o.parentNode}return null}),function(t){function b(t){return t&&t.parentNode?b(t.parentNode):t}"function"!==typeof t.getRootNode&&(t.getRootNode=function(t){return t&&t.composed?function d(t){return(t=b(t))&&11===t.nodeType?d(t.host):t}(this):b(this)})}(Element.prototype),function(t){"isConnected"in t||Object.defineProperty(t,"isConnected",{configurable:!0,enumerable:!0,get:function get(){var t=this.getRootNode({composed:!0});return t&&9===t.nodeType}})}(Element.prototype),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function value(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})),"classList"in(_=Element.prototype)||Object.defineProperty(_,"classList",{get:function get(){var t=this,o=(t.getAttribute("class")||"").replace(/^\s+|\s$/g,"").split(/\s+/g);function n(){o.length>0?t.setAttribute("class",o.join(" ")):t.removeAttribute("class")}return""===o[0]&&o.splice(0,1),o.toggle=function(t,s){void 0!==s?s?o.add(t):o.remove(t):-1!==o.indexOf(t)?o.splice(o.indexOf(t),1):o.push(t),n()},o.add=function(){for(var t=[].slice.call(arguments),s=0,h=t.length;s<h;s++)-1===o.indexOf(t[s])&&o.push(t[s]);n()},o.remove=function(){for(var t=[].slice.call(arguments),s=0,h=t.length;s<h;s++)-1!==o.indexOf(t[s])&&o.splice(o.indexOf(t[s]),1);n()},o.item=function(t){return o[t]},o.contains=function(t){return-1!==o.indexOf(t)},o.replace=function(t,s){-1!==o.indexOf(t)&&o.splice(o.indexOf(t),1,s),n()},o.value=t.getAttribute("class")||"",o}}),function(t){try{document.body.classList.add()}catch(_){var o=t.add,s=t.remove;t.add=function(){for(var t=0;t<arguments.length;t++)o.call(this,arguments[t])},t.remove=function(){for(var t=0;t<arguments.length;t++)s.call(this,arguments[t])}}}(DOMTokenList.prototype)},178:function(t,o){var s,h,f,m,_;(function(){"use strict";var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(o){var s=t.has(o);return o=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(o),!s&&o}function l(t){var o=t.isConnected;if(void 0!==o)return o;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function n(t,o){for(;o&&o!==t&&!o.nextSibling;)o=o.parentNode;return o&&o!==t?o.nextSibling:null}function p(t,o,s){s=void 0===s?new Set:s;for(var h=t;h;){if(h.nodeType===Node.ELEMENT_NODE){var f=h;o(f);var m=f.localName;if("link"===m&&"import"===f.getAttribute("rel")){if((h=f.import)instanceof Node&&!s.has(h))for(s.add(h),h=h.firstChild;h;h=h.nextSibling)p(h,o,s);h=n(t,f);continue}if("template"===m){h=n(t,f);continue}if(f=f.__CE_shadowRoot)for(f=f.firstChild;f;f=f.nextSibling)p(f,o,s)}h=h.firstChild?h.firstChild:n(t,h)}}function r(t,o,s){t[o]=s}function u(){this.a=new Map,this.g=new Map,this.c=[],this.f=[],this.b=!1}function v(t,o){t.b&&p(o,(function(o){return w(t,o)}))}function w(t,o){if(t.b&&!o.__CE_patched){o.__CE_patched=!0;for(var s=0;s<t.c.length;s++)t.c[s](o);for(s=0;s<t.f.length;s++)t.f[s](o)}}function x(t,o){var s=[];for(p(o,(function(t){return s.push(t)})),o=0;o<s.length;o++){var h=s[o];1===h.__CE_state?t.connectedCallback(h):y(t,h)}}function z(t,o){var s=[];for(p(o,(function(t){return s.push(t)})),o=0;o<s.length;o++){var h=s[o];1===h.__CE_state&&t.disconnectedCallback(h)}}function A(t,o,s){var h=(s=void 0===s?{}:s).u||new Set,f=s.i||function(o){return y(t,o)},m=[];if(p(o,(function(o){if("link"===o.localName&&"import"===o.getAttribute("rel")){var s=o.import;s instanceof Node&&(s.__CE_isImportDocument=!0,s.__CE_hasRegistry=!0),s&&"complete"===s.readyState?s.__CE_documentLoadHandled=!0:o.addEventListener("load",(function(){var s=o.import;if(!s.__CE_documentLoadHandled){s.__CE_documentLoadHandled=!0;var m=new Set(h);m.delete(s),A(t,s,{u:m,i:f})}}))}else m.push(o)}),h),t.b)for(o=0;o<m.length;o++)w(t,m[o]);for(o=0;o<m.length;o++)f(m[o])}function y(t,o){if(void 0===o.__CE_state){var s=o.ownerDocument;if((s.defaultView||s.__CE_isImportDocument&&s.__CE_hasRegistry)&&(s=t.a.get(o.localName))){s.constructionStack.push(o);var h=s.constructorFunction;try{try{if(new h!==o)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{s.constructionStack.pop()}}catch(_){throw o.__CE_state=2,_}if(o.__CE_state=1,o.__CE_definition=s,s.attributeChangedCallback)for(s=s.observedAttributes,h=0;h<s.length;h++){var f=s[h],m=o.getAttribute(f);null!==m&&t.attributeChangedCallback(o,f,null,m,null)}l(o)&&t.connectedCallback(o)}}}function B(t){var o=document;this.c=t,this.a=o,this.b=void 0,A(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(t){t.b&&t.b.disconnect()}function ea(){var t=this;this.b=this.a=void 0,this.c=new Promise((function(o){t.b=o,t.a&&o(t.a)}))}function D(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function E(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.g=[],this.o=new B(t)}u.prototype.connectedCallback=function(t){var o=t.__CE_definition;o.connectedCallback&&o.connectedCallback.call(t)},u.prototype.disconnectedCallback=function(t){var o=t.__CE_definition;o.disconnectedCallback&&o.disconnectedCallback.call(t)},u.prototype.attributeChangedCallback=function(t,o,s,h,f){var m=t.__CE_definition;m.attributeChangedCallback&&-1<m.observedAttributes.indexOf(o)&&m.attributeChangedCallback.call(t,o,s,h,f)},B.prototype.f=function(t){var o=this.a.readyState;for("interactive"!==o&&"complete"!==o||C(this),o=0;o<t.length;o++)for(var s=t[o].addedNodes,h=0;h<s.length;h++)A(this.c,s[h])},E.prototype.l=function(t,o){var s=this;if(!(o instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var h=function c(t){var o=f[t];if(void 0!==o&&!(o instanceof Function))throw Error("The '"+t+"' callback must be a function.");return o},f=o.prototype;if(!(f instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var m=h("connectedCallback"),_=h("disconnectedCallback"),N=h("adoptedCallback"),S=h("attributeChangedCallback"),T=o.observedAttributes||[]}catch(k){return}finally{this.c=!1}o={localName:t,constructorFunction:o,connectedCallback:m,disconnectedCallback:_,adoptedCallback:N,attributeChangedCallback:S,observedAttributes:T,constructionStack:[]},function ba(t,o,s){t.a.set(o,s),t.g.set(s.constructorFunction,s)}(this.a,t,o),this.g.push(o),this.b||(this.b=!0,this.f((function(){return function fa(t){if(!1!==t.b){t.b=!1;for(var o=t.g,s=[],h=new Map,f=0;f<o.length;f++)h.set(o[f].localName,[]);for(A(t.a,document,{i:function i(o){if(void 0===o.__CE_state){var f=o.localName,m=h.get(f);m?m.push(o):t.a.a.get(f)&&s.push(o)}}}),f=0;f<s.length;f++)y(t.a,s[f]);for(;0<o.length;){var m=o.shift();f=m.localName,m=h.get(m.localName);for(var _=0;_<m.length;_++)y(t.a,m[_]);(f=t.j.get(f))&&D(f)}}}(s)})))},E.prototype.i=function(t){A(this.a,t)},E.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},E.prototype.m=function(t){if(!g(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var o=this.j.get(t);return o||(o=new ea,this.j.set(t,o),this.a.a.get(t)&&!this.g.some((function(o){return o.localName===t}))&&D(o)),o.c},E.prototype.s=function(t){C(this.o);var o=this.f;this.f=function(s){return t((function(){return o(s)}))}},window.CustomElementRegistry=E,E.prototype.define=E.prototype.l,E.prototype.upgrade=E.prototype.i,E.prototype.get=E.prototype.get,E.prototype.whenDefined=E.prototype.m,E.prototype.polyfillWrapFlushCallback=E.prototype.s;var o=window.Document.prototype.createElement,s=window.Document.prototype.createElementNS,h=window.Document.prototype.importNode,f=window.Document.prototype.prepend,m=window.Document.prototype.append,_=window.DocumentFragment.prototype.prepend,N=window.DocumentFragment.prototype.append,S=window.Node.prototype.cloneNode,T=window.Node.prototype.appendChild,k=window.Node.prototype.insertBefore,O=window.Node.prototype.removeChild,j=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),M=window.Element.prototype.attachShadow,H=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),R=window.Element.prototype.getAttribute,P=window.Element.prototype.setAttribute,F=window.Element.prototype.removeAttribute,I=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,W=window.Element.prototype.removeAttributeNS,q=window.Element.prototype.insertAdjacentElement,$=window.Element.prototype.insertAdjacentHTML,J=window.Element.prototype.prepend,V=window.Element.prototype.append,X=window.Element.prototype.before,G=window.Element.prototype.after,K=window.Element.prototype.replaceWith,Q=window.Element.prototype.remove,Z=window.HTMLElement,tt=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),et=window.HTMLElement.prototype.insertAdjacentElement,nt=window.HTMLElement.prototype.insertAdjacentHTML,ot=new function(){};function Y(t,o,s){function c(o){return function(s){for(var h=[],f=0;f<arguments.length;++f)h[f]=arguments[f];f=[];for(var m=[],_=0;_<h.length;_++){var N=h[_];if(N instanceof Element&&l(N)&&m.push(N),N instanceof DocumentFragment)for(N=N.firstChild;N;N=N.nextSibling)f.push(N);else f.push(N)}for(o.apply(this,h),h=0;h<m.length;h++)z(t,m[h]);if(l(this))for(h=0;h<f.length;h++)(m=f[h])instanceof Element&&x(t,m)}}void 0!==s.h&&(o.prepend=c(s.h)),void 0!==s.append&&(o.append=c(s.append))}var rt=window.customElements;if(!rt||rt.forcePolyfill||"function"!=typeof rt.define||"function"!=typeof rt.get){var it=new u;!function xa(){var t=it;window.HTMLElement=function(){function b(){var s=this.constructor,h=t.g.get(s);if(!h)throw Error("The custom element being constructed was not registered with `customElements`.");var f=h.constructionStack;if(0===f.length)return f=o.call(document,h.localName),Object.setPrototypeOf(f,s.prototype),f.__CE_state=1,f.__CE_definition=h,w(t,f),f;var m=f[h=f.length-1];if(m===ot)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return f[h]=ot,Object.setPrototypeOf(m,s.prototype),w(t,m),m}return b.prototype=Z.prototype,Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b}),b}()}(),function ya(){var t=it;r(Document.prototype,"createElement",(function(s){if(this.__CE_hasRegistry){var h=t.a.get(s);if(h)return new h.constructorFunction}return s=o.call(this,s),w(t,s),s})),r(Document.prototype,"importNode",(function(o,s){return o=h.call(this,o,!!s),this.__CE_hasRegistry?A(t,o):v(t,o),o})),r(Document.prototype,"createElementNS",(function(o,h){if(this.__CE_hasRegistry&&(null===o||"http://www.w3.org/1999/xhtml"===o)){var f=t.a.get(h);if(f)return new f.constructorFunction}return o=s.call(this,o,h),w(t,o),o})),Y(t,Document.prototype,{h:f,append:m})}(),Y(it,DocumentFragment.prototype,{h:_,append:N}),function za(){function a(o,s){Object.defineProperty(o,"textContent",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function set(o){if(this.nodeType===Node.TEXT_NODE)s.set.call(this,o);else{var h=void 0;if(this.firstChild){var f=this.childNodes,m=f.length;if(0<m&&l(this)){h=Array(m);for(var _=0;_<m;_++)h[_]=f[_]}}if(s.set.call(this,o),h)for(o=0;o<h.length;o++)z(t,h[o])}}})}var t=it;r(Node.prototype,"insertBefore",(function(o,s){if(o instanceof DocumentFragment){var h=Array.prototype.slice.apply(o.childNodes);if(o=k.call(this,o,s),l(this))for(s=0;s<h.length;s++)x(t,h[s]);return o}return h=l(o),s=k.call(this,o,s),h&&z(t,o),l(this)&&x(t,o),s})),r(Node.prototype,"appendChild",(function(o){if(o instanceof DocumentFragment){var s=Array.prototype.slice.apply(o.childNodes);if(o=T.call(this,o),l(this))for(var h=0;h<s.length;h++)x(t,s[h]);return o}return s=l(o),h=T.call(this,o),s&&z(t,o),l(this)&&x(t,o),h})),r(Node.prototype,"cloneNode",(function(o){return o=S.call(this,!!o),this.ownerDocument.__CE_hasRegistry?A(t,o):v(t,o),o})),r(Node.prototype,"removeChild",(function(o){var s=l(o),h=O.call(this,o);return s&&z(t,o),h})),r(Node.prototype,"replaceChild",(function(o,s){if(o instanceof DocumentFragment){var h=Array.prototype.slice.apply(o.childNodes);if(o=j.call(this,o,s),l(this))for(z(t,s),s=0;s<h.length;s++)x(t,h[s]);return o}h=l(o);var f=j.call(this,o,s),m=l(this);return m&&z(t,s),h&&z(t,o),m&&x(t,o),f})),L&&L.get?a(Node.prototype,L):function ca(t,o){t.b=!0,t.c.push(o)}(t,(function(t){a(t,{enumerable:!0,configurable:!0,get:function get(){for(var t=[],o=0;o<this.childNodes.length;o++){var s=this.childNodes[o];s.nodeType!==Node.COMMENT_NODE&&t.push(s.textContent)}return t.join("")},set:function set(t){for(;this.firstChild;)O.call(this,this.firstChild);null!=t&&""!==t&&T.call(this,document.createTextNode(t))}})}))}(),function Ba(){function a(o,s){Object.defineProperty(o,"innerHTML",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function set(o){var h=this,f=void 0;if(l(this)&&(f=[],p(this,(function(t){t!==h&&f.push(t)}))),s.set.call(this,o),f)for(var m=0;m<f.length;m++){var _=f[m];1===_.__CE_state&&t.disconnectedCallback(_)}return this.ownerDocument.__CE_hasRegistry?A(t,this):v(t,this),o}})}function b(o,s){r(o,"insertAdjacentElement",(function(o,h){var f=l(h);return o=s.call(this,o,h),f&&z(t,h),l(o)&&x(t,h),o}))}function d(o,s){function e(o,s){for(var h=[];o!==s;o=o.nextSibling)h.push(o);for(s=0;s<h.length;s++)A(t,h[s])}r(o,"insertAdjacentHTML",(function(t,o){if("beforebegin"===(t=t.toLowerCase())){var h=this.previousSibling;s.call(this,t,o),e(h||this.parentNode.firstChild,this)}else if("afterbegin"===t)h=this.firstChild,s.call(this,t,o),e(this.firstChild,h);else if("beforeend"===t)h=this.lastChild,s.call(this,t,o),e(h||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");h=this.nextSibling,s.call(this,t,o),e(this.nextSibling,h)}}))}var t=it;M&&r(Element.prototype,"attachShadow",(function(o){o=M.call(this,o);var s=t;if(s.b&&!o.__CE_patched){o.__CE_patched=!0;for(var h=0;h<s.c.length;h++)s.c[h](o)}return this.__CE_shadowRoot=o})),H&&H.get?a(Element.prototype,H):tt&&tt.get?a(HTMLElement.prototype,tt):function da(t,o){t.b=!0,t.f.push(o)}(t,(function(t){a(t,{enumerable:!0,configurable:!0,get:function get(){return S.call(this,!0).innerHTML},set:function set(t){var o="template"===this.localName,h=o?this.content:this,f=s.call(document,this.namespaceURI,this.localName);for(f.innerHTML=t;0<h.childNodes.length;)O.call(h,h.childNodes[0]);for(t=o?f.content:f;0<t.childNodes.length;)T.call(h,t.childNodes[0])}})})),r(Element.prototype,"setAttribute",(function(o,s){if(1!==this.__CE_state)return P.call(this,o,s);var h=R.call(this,o);P.call(this,o,s),s=R.call(this,o),t.attributeChangedCallback(this,o,h,s,null)})),r(Element.prototype,"setAttributeNS",(function(o,s,h){if(1!==this.__CE_state)return U.call(this,o,s,h);var f=I.call(this,o,s);U.call(this,o,s,h),h=I.call(this,o,s),t.attributeChangedCallback(this,s,f,h,o)})),r(Element.prototype,"removeAttribute",(function(o){if(1!==this.__CE_state)return F.call(this,o);var s=R.call(this,o);F.call(this,o),null!==s&&t.attributeChangedCallback(this,o,s,null,null)})),r(Element.prototype,"removeAttributeNS",(function(o,s){if(1!==this.__CE_state)return W.call(this,o,s);var h=I.call(this,o,s);W.call(this,o,s);var f=I.call(this,o,s);h!==f&&t.attributeChangedCallback(this,s,h,f,o)})),et?b(HTMLElement.prototype,et):q?b(Element.prototype,q):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),nt?d(HTMLElement.prototype,nt):$?d(Element.prototype,$):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Y(t,Element.prototype,{h:J,append:V}),function Aa(t){function b(o){return function(s){for(var h=[],f=0;f<arguments.length;++f)h[f]=arguments[f];f=[];for(var m=[],_=0;_<h.length;_++){var N=h[_];if(N instanceof Element&&l(N)&&m.push(N),N instanceof DocumentFragment)for(N=N.firstChild;N;N=N.nextSibling)f.push(N);else f.push(N)}for(o.apply(this,h),h=0;h<m.length;h++)z(t,m[h]);if(l(this))for(h=0;h<f.length;h++)(m=f[h])instanceof Element&&x(t,m)}}var o=Element.prototype;void 0!==X&&(o.before=b(X)),void 0!==X&&(o.after=b(G)),void 0!==K&&r(o,"replaceWith",(function(o){for(var s=[],h=0;h<arguments.length;++h)s[h]=arguments[h];h=[];for(var f=[],m=0;m<s.length;m++){var _=s[m];if(_ instanceof Element&&l(_)&&f.push(_),_ instanceof DocumentFragment)for(_=_.firstChild;_;_=_.nextSibling)h.push(_);else h.push(_)}for(m=l(this),K.apply(this,s),s=0;s<f.length;s++)z(t,f[s]);if(m)for(z(t,this),s=0;s<h.length;s++)(f=h[s])instanceof Element&&x(t,f)})),void 0!==Q&&r(o,"remove",(function(){var o=l(this);Q.call(this),o&&z(t,this)}))}(t)}(),document.__CE_hasRegistry=!0;var at=new E(it);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:at})}}).call(self),"string"!==typeof document.baseURI&&Object.defineProperty(Document.prototype,"baseURI",{enumerable:!0,configurable:!0,get:function get(){var t=document.querySelector("base");return t&&t.href?t.href:document.URL}}),"function"!==typeof window.CustomEvent&&(window.CustomEvent=function(t,o){o=o||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),s},window.CustomEvent.prototype=window.Event.prototype),s=Event.prototype,h=document,f=window,s.composedPath||(s.composedPath=function(){if(this.path)return this.path;var t=this.target;for(this.path=[];null!==t.parentNode;)this.path.push(t),t=t.parentNode;return this.path.push(h,f),this.path}),"function"!==typeof(m=window.Element.prototype).matches&&(m.matches=m.msMatchesSelector||m.mozMatchesSelector||m.webkitMatchesSelector||function(t){t=(this.document||this.ownerDocument).querySelectorAll(t);for(var o=0;t[o]&&t[o]!==this;)++o;return!!t[o]}),"function"!==typeof m.closest&&(m.closest=function(t){for(var o=this;o&&1===o.nodeType;){if(o.matches(t))return o;o=o.parentNode}return null}),function(t){function b(t){return t&&t.parentNode?b(t.parentNode):t}"function"!==typeof t.getRootNode&&(t.getRootNode=function(t){return t&&t.composed?function d(t){return(t=b(t))&&11===t.nodeType?d(t.host):t}(this):b(this)})}(Element.prototype),function(t){"isConnected"in t||Object.defineProperty(t,"isConnected",{configurable:!0,enumerable:!0,get:function get(){var t=this.getRootNode({composed:!0});return t&&9===t.nodeType}})}(Element.prototype),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function value(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})),"classList"in(_=Element.prototype)||Object.defineProperty(_,"classList",{get:function get(){var t=this,o=(t.getAttribute("class")||"").replace(/^\s+|\s$/g,"").split(/\s+/g);function n(){o.length>0?t.setAttribute("class",o.join(" ")):t.removeAttribute("class")}return""===o[0]&&o.splice(0,1),o.toggle=function(t,s){void 0!==s?s?o.add(t):o.remove(t):-1!==o.indexOf(t)?o.splice(o.indexOf(t),1):o.push(t),n()},o.add=function(){for(var t=[].slice.call(arguments),s=0,h=t.length;s<h;s++)-1===o.indexOf(t[s])&&o.push(t[s]);n()},o.remove=function(){for(var t=[].slice.call(arguments),s=0,h=t.length;s<h;s++)-1!==o.indexOf(t[s])&&o.splice(o.indexOf(t[s]),1);n()},o.item=function(t){return o[t]},o.contains=function(t){return-1!==o.indexOf(t)},o.replace=function(t,s){-1!==o.indexOf(t)&&o.splice(o.indexOf(t),1,s),n()},o.value=t.getAttribute("class")||"",o}}),function(t){try{document.body.classList.add()}catch(_){var o=t.add,s=t.remove;t.add=function(){for(var t=0;t<arguments.length;t++)o.call(this,arguments[t])},t.remove=function(){for(var t=0;t<arguments.length;t++)s.call(this,arguments[t])}}}(DOMTokenList.prototype)}}]);