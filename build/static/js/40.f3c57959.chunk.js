/*! For license information please see 40.f3c57959.chunk.js.LICENSE.txt */
(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[40,58],{108:function(t,o,n){"use strict";n.r(o),n.d(o,"ion_accordion",(function(){return d})),n.d(o,"ion_accordion_group",(function(){return u}));var i=n(14),r=n(35),a=n(90),s=n(30),c=n(22),d=function(){function e(t){var o=this;Object(r.r)(this,t),this.updateListener=function(){return o.updateState(!1)},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-".concat(l++),this.disabled=!1,this.readonly=!1,this.toggleIcon=a.l,this.toggleIconSlot="end",this.setItemDefaults=function(){var t=o.getSlottedHeaderIonItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=function(){var t=o.headerEl;if(t){var n=t.querySelector("slot");if(n&&void 0!==n.assignedElements)return n.assignedElements().find((function(t){return"ION-ITEM"===t.tagName}))}},this.setAria=function(t){void 0===t&&(t=!1);var n=o.getSlottedHeaderIonItem();if(n){var i=Object(c.g)(n).querySelector("button");i&&i.setAttribute("aria-expanded","".concat(t))}},this.slotToggleIcon=function(){var t=o.getSlottedHeaderIonItem();if(t){var n=o,i=n.toggleIconSlot,r=n.toggleIcon;if(!t.querySelector(".ion-accordion-toggle-icon")){var a=document.createElement("ion-icon");a.slot=i,a.lazy=!1,a.classList.add("ion-accordion-toggle-icon"),a.icon=r,a.setAttribute("aria-hidden","true"),t.appendChild(a)}}},this.expandAccordion=function(t){void 0===t&&(t=!1);var n=o,r=n.contentEl,a=n.contentElWrapper;t||void 0===r||void 0===a?o.state=4:4!==o.state&&(void 0!==o.currentRaf&&cancelAnimationFrame(o.currentRaf),o.shouldAnimate()?Object(c.r)((function(){o.state=8,o.currentRaf=Object(c.r)((function(){return Object(i.a)(o,void 0,void 0,(function(){var t,o;return Object(i.c)(this,(function(n){switch(n.label){case 0:return t=a.offsetHeight,o=Object(c.t)(r,2e3),r.style.setProperty("max-height","".concat(t,"px")),[4,o];case 1:return n.sent(),this.state=4,r.style.removeProperty("max-height"),[2]}}))}))}))})):o.state=4)},this.collapseAccordion=function(t){void 0===t&&(t=!1);var n=o.contentEl;t||void 0===n?o.state=1:1!==o.state&&(void 0!==o.currentRaf&&cancelAnimationFrame(o.currentRaf),o.shouldAnimate()?o.currentRaf=Object(c.r)((function(){return Object(i.a)(o,void 0,void 0,(function(){var t,o=this;return Object(i.c)(this,(function(r){return t=n.offsetHeight,n.style.setProperty("max-height","".concat(t,"px")),Object(c.r)((function(){return Object(i.a)(o,void 0,void 0,(function(){var t;return Object(i.c)(this,(function(o){switch(o.label){case 0:return t=Object(c.t)(n,2e3),this.state=2,[4,t];case 1:return o.sent(),this.state=1,n.style.removeProperty("max-height"),[2]}}))}))})),[2]}))}))})):o.state=1)},this.shouldAnimate=function(){return"undefined"!==typeof window&&(!matchMedia("(prefers-reduced-motion: reduce)").matches&&(!!s.c.get("animated",!0)&&!(o.accordionGroupEl&&!o.accordionGroupEl.animated)))},this.updateState=function(t){return void 0===t&&(t=!1),Object(i.a)(o,void 0,void 0,(function(){var o,n,r,a,s,c,d;return Object(i.c)(this,(function(i){return o=this.accordionGroupEl,n=this.value,o?(r=o.value,(Array.isArray(r)?r.includes(n):r===n)?(this.expandAccordion(t),this.isNext=this.isPrevious=!1):(this.collapseAccordion(t),a=this.getNextSibling(),void 0!==(s=null===a||void 0===a?void 0:a.value)&&(this.isPrevious=Array.isArray(r)?r.includes(s):r===s),c=this.getPreviousSibling(),void 0!==(d=null===c||void 0===c?void 0:c.value)&&(this.isNext=Array.isArray(r)?r.includes(d):r===d)),[2]):[2]}))}))},this.getNextSibling=function(){if(o.el){var t=o.el.nextElementSibling;if("ION-ACCORDION"===(null===t||void 0===t?void 0:t.tagName))return t}},this.getPreviousSibling=function(){if(o.el){var t=o.el.previousElementSibling;if("ION-ACCORDION"===(null===t||void 0===t?void 0:t.tagName))return t}}}return e.prototype.connectedCallback=function(){var t,o=this.accordionGroupEl=null===(t=this.el)||void 0===t?void 0:t.closest("ion-accordion-group");o&&(this.updateState(!0),Object(c.a)(o,"ionChange",this.updateListener))},e.prototype.disconnectedCallback=function(){var t=this.accordionGroupEl;t&&Object(c.b)(t,"ionChange",this.updateListener)},e.prototype.componentDidLoad=function(){var t=this;this.setItemDefaults(),this.slotToggleIcon(),Object(c.r)((function(){var o=4===t.state||8===t.state;t.setAria(o)}))},e.prototype.toggleExpanded=function(){var t=this,o=t.accordionGroupEl,n=t.value,i=t.state;if(o){var r=1===i||2===i;o.requestAccordionToggle(n,r)}},e.prototype.render=function(){var t,o=this,n=this.disabled,i=this.readonly,a=Object(s.b)(this),c=4===this.state||8===this.state,d=c?"header expanded":"header",l=c?"content expanded":"content";return this.setAria(c),Object(r.h)(r.H,{class:(t={},t[a]=!0,t["accordion-expanding"]=8===this.state,t["accordion-expanded"]=4===this.state,t["accordion-collapsing"]=2===this.state,t["accordion-collapsed"]=1===this.state,t["accordion-next"]=this.isNext,t["accordion-previous"]=this.isPrevious,t["accordion-disabled"]=n,t["accordion-readonly"]=i,t["accordion-animated"]=s.c.getBoolean("animated",!0),t)},Object(r.h)("div",{onClick:function onClick(){return o.toggleExpanded()},id:"header",part:d,"aria-controls":"content",ref:function ref(t){return o.headerEl=t}},Object(r.h)("slot",{name:"header"})),Object(r.h)("div",{id:"content",part:l,role:"region","aria-labelledby":"header",ref:function ref(t){return o.contentEl=t}},Object(r.h)("div",{id:"content-wrapper",ref:function ref(t){return o.contentElWrapper=t}},Object(r.h)("slot",{name:"content"}))))},Object.defineProperty(e,"delegatesFocus",{get:function get(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"el",{get:function get(){return Object(r.i)(this)},enumerable:!1,configurable:!0}),e}(),l=0;d.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};var u=function(){function e(t){Object(r.r)(this,t),this.ionChange=Object(r.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}return e.prototype.valueChanged=function(){var t=this.value;!this.multiple&&Array.isArray(t)?this.value=t[0]:this.ionChange.emit({value:this.value})},e.prototype.disabledChanged=function(){return Object(i.a)(this,void 0,void 0,(function(){var t,o,n,r;return Object(i.c)(this,(function(i){switch(i.label){case 0:return t=this.disabled,[4,this.getAccordions()];case 1:for(o=i.sent(),n=0,r=o;n<r.length;n++)r[n].disabled=t;return[2]}}))}))},e.prototype.readonlyChanged=function(){return Object(i.a)(this,void 0,void 0,(function(){var t,o,n,r;return Object(i.c)(this,(function(i){switch(i.label){case 0:return t=this.readonly,[4,this.getAccordions()];case 1:for(o=i.sent(),n=0,r=o;n<r.length;n++)r[n].readonly=t;return[2]}}))}))},e.prototype.onKeydown=function(t){return Object(i.a)(this,void 0,void 0,(function(){var o,n,r,a,s;return Object(i.c)(this,(function(i){switch(i.label){case 0:return(o=document.activeElement)&&(o.closest('ion-accordion [slot="header"]')&&(n="ION-ACCORDION"===o.tagName?o:o.closest("ion-accordion")))?n.closest("ion-accordion-group")!==this.el?[2]:[4,this.getAccordions()]:[2];case 1:return r=i.sent(),a=r.findIndex((function(t){return t===n})),-1===a?[2]:("ArrowDown"===t.key?s=this.findNextAccordion(r,a):"ArrowUp"===t.key?s=this.findPreviousAccordion(r,a):"Home"===t.key?s=r[0]:"End"===t.key&&(s=r[r.length-1]),void 0!==s&&s!==o&&s.focus(),[2])}}))}))},e.prototype.componentDidLoad=function(){return Object(i.a)(this,void 0,void 0,(function(){return Object(i.c)(this,(function(t){return this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),[2]}))}))},e.prototype.requestAccordionToggle=function(t,o){return Object(i.a)(this,void 0,void 0,(function(){var n,r,a,s,c,d,l,u;return Object(i.c)(this,(function(h){return r=(n=this).multiple,a=n.value,s=n.readonly,c=n.disabled,s||c||(o?r?(l=null!==a&&void 0!==a?a:[],u=Array.isArray(l)?l:[l],d=u.find((function(o){return o===t})),void 0===d&&void 0!==t&&(this.value=Object(i.e)(Object(i.e)([],u,!0),[t],!1))):this.value=t:r?(l=null!==a&&void 0!==a?a:[],u=Array.isArray(l)?l:[l],this.value=u.filter((function(o){return o!==t}))):this.value=void 0),[2]}))}))},e.prototype.findNextAccordion=function(t,o){var n=t[o+1];return void 0===n?t[0]:n},e.prototype.findPreviousAccordion=function(t,o){var n=t[o-1];return void 0===n?t[t.length-1]:n},e.prototype.getAccordions=function(){return Object(i.a)(this,void 0,void 0,(function(){return Object(i.c)(this,(function(t){return[2,Array.from(this.el.querySelectorAll(":scope > ion-accordion"))]}))}))},e.prototype.render=function(){var t,o=this,n=o.disabled,i=o.readonly,a=o.expand,c=Object(s.b)(this);return Object(r.h)(r.H,{class:(t={},t[c]=!0,t["accordion-group-disabled"]=n,t["accordion-group-readonly"]=i,t["accordion-group-expand-".concat(a)]=!0,t),role:"presentation"},Object(r.h)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function get(){return Object(r.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:!1,configurable:!0}),e}();u.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}},90:function(t,o,n){"use strict";n.r(o),n.d(o,"a",(function(){return i})),n.d(o,"b",(function(){return v})),n.d(o,"c",(function(){return l})),n.d(o,"d",(function(){return m})),n.d(o,"e",(function(){return A})),n.d(o,"f",(function(){return d})),n.d(o,"g",(function(){return f})),n.d(o,"h",(function(){return a})),n.d(o,"i",(function(){return r})),n.d(o,"j",(function(){return k})),n.d(o,"k",(function(){return j})),n.d(o,"l",(function(){return u})),n.d(o,"m",(function(){return g})),n.d(o,"n",(function(){return x})),n.d(o,"o",(function(){return h})),n.d(o,"p",(function(){return c})),n.d(o,"q",(function(){return s})),n.d(o,"r",(function(){return y})),n.d(o,"s",(function(){return O})),n.d(o,"t",(function(){return p})),n.d(o,"u",(function(){return b})),n.d(o,"v",(function(){return w}));var i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",j="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"}}]);