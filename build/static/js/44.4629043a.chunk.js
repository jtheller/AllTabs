/*! For license information please see 44.4629043a.chunk.js.LICENSE.txt */
(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[44,70],{118:function(t,o,r){"use strict";r.r(o),r.d(o,"ion_checkbox",(function(){return s}));var i=r(35),n=r(30),c=r(22),a=r(88),s=function(){function e(t){var o=this;Object(i.r)(this,t),this.ionChange=Object(i.e)(this,"ionChange",7),this.ionFocus=Object(i.e)(this,"ionFocus",7),this.ionBlur=Object(i.e)(this,"ionBlur",7),this.ionStyle=Object(i.e)(this,"ionStyle",7),this.inputId="ion-cb-".concat(l++),this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(t){t.preventDefault(),o.setFocus(),o.checked=!o.checked,o.indeterminate=!1},this.onFocus=function(){o.ionFocus.emit()},this.onBlur=function(){o.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.setFocus=function(){this.focusEl&&this.focusEl.focus()},e.prototype.render=function(){var t,o=this,r=this,s=r.color,l=r.checked,h=r.disabled,d=r.el,b=r.indeterminate,u=r.inputId,p=r.name,k=r.value,m=Object(n.b)(this),g=Object(c.d)(d,u),f=g.label,x=g.labelId,v=g.labelText;Object(c.e)(!0,d,p,l?k:"",h);var y=b?Object(i.h)("path",{d:"M6 12L18 12",part:"mark"}):Object(i.h)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});return"md"===m&&(y=b?Object(i.h)("path",{d:"M2 12H22",part:"mark"}):Object(i.h)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})),Object(i.h)(i.H,{onClick:this.onClick,"aria-labelledby":f?x:null,"aria-checked":"".concat(l),"aria-hidden":h?"true":null,role:"checkbox",class:Object(a.c)(s,(t={},t[m]=!0,t["in-item"]=Object(a.h)("ion-item",d),t["checkbox-checked"]=l,t["checkbox-disabled"]=h,t["checkbox-indeterminate"]=b,t.interactive=!0,t))},Object(i.h)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},y),Object(i.h)("label",{htmlFor:u},v),Object(i.h)("input",{type:"checkbox","aria-checked":"".concat(l),disabled:h,id:u,onFocus:function onFocus(){return o.onFocus()},onBlur:function onBlur(){return o.onBlur()},ref:function ref(t){return o.focusEl=t}}))},Object.defineProperty(e.prototype,"el",{get:function get(){return Object(i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),e}(),l=0;s.style={ios:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}",md:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}},88:function(t,o,r){"use strict";r.r(o),r.d(o,"c",(function(){return c})),r.d(o,"g",(function(){return a})),r.d(o,"h",(function(){return n})),r.d(o,"o",(function(){return l}));var i=r(14),n=function hostContext(t,o){return null!==o.closest(t)},c=function createColorClasses(t,o){var r;return"string"===typeof t&&t.length>0?Object.assign(((r={"ion-color":!0})["ion-color-".concat(t)]=!0,r),o):o},a=function getClassMap(t){var o={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return o[t]=!0})),o},s=/^[a-z][a-z0-9+\-.]*:/,l=function openURL(t,o,r,n){return Object(i.a)(void 0,void 0,void 0,(function(){var c;return Object(i.c)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(c=document.querySelector("ion-router"))?(null!=o&&o.preventDefault(),[2,c.push(t,r,n)]):[2,!1]}))}))}}}]);