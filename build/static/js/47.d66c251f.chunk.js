(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[47],{129:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_ripple_effect",(function(){return r}));var i=e(2),a=e(7),o=e(19),r=function(){function class_1(t){Object(a.q)(this,t),this.type="bounded"}return class_1.prototype.addRipple=function(t,n){return Object(i.a)(this,void 0,void 0,(function(){var e=this;return Object(i.c)(this,(function(i){return[2,new Promise((function(i){Object(a.j)((function(){var o=e.el.getBoundingClientRect(),r=o.width,f=o.height,m=Math.sqrt(r*r+f*f),u=Math.max(f,r),d=e.unbounded?u:m+c,p=Math.floor(u*l),b=d/p,w=t-o.left,h=n-o.top;e.unbounded&&(w=.5*r,h=.5*f);var y=w-.5*p,k=h-.5*p,g=.5*r-w,v=.5*f-h;Object(a.g)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=k+"px",n.left=y+"px",n.width=n.height=p+"px",n.setProperty("--final-scale",""+b),n.setProperty("--translate-end",g+"px, "+v+"px"),(e.el.shadowRoot||e.el).appendChild(t),setTimeout((function(){i((function(){s(t)}))}),325)}))}))}))]}))}))},Object.defineProperty(class_1.prototype,"unbounded",{get:function get(){return"unbounded"===this.type},enumerable:!1,configurable:!0}),class_1.prototype.render=function(){var t,n=Object(o.b)(this);return Object(a.l)(a.c,{role:"presentation",class:(t={},t[n]=!0,t.unbounded=this.unbounded,t)})},Object.defineProperty(class_1.prototype,"el",{get:function get(){return Object(a.m)(this)},enumerable:!1,configurable:!0}),class_1}(),s=function removeRipple(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},c=10,l=.5;r.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
//# sourceMappingURL=47.d66c251f.chunk.js.map