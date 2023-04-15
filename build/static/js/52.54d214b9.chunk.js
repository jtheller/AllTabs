/*! For license information please see 52.54d214b9.chunk.js.LICENSE.txt */
(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[52,70],{152:function(e,i,a){"use strict";a.r(i),a.d(i,"ion_textarea",(function(){return s}));var n=a(14),o=a(35),r=a(30),d=a(22),l=a(88),s=function(){function t(e){var i=this;Object(o.r)(this,e),this.ionChange=Object(o.e)(this,"ionChange",7),this.ionInput=Object(o.e)(this,"ionInput",7),this.ionStyle=Object(o.e)(this,"ionStyle",7),this.ionBlur=Object(o.e)(this,"ionBlur",7),this.ionFocus=Object(o.e)(this,"ionFocus",7),this.inputId="ion-textarea-".concat(c++),this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(e){i.nativeInput&&(i.value=i.nativeInput.value),i.emitStyle(),i.ionInput.emit(e)},this.onFocus=function(e){i.hasFocus=!0,i.focusChange(),i.fireFocusEvents&&i.ionFocus.emit(e)},this.onBlur=function(e){i.hasFocus=!1,i.focusChange(),i.fireFocusEvents&&i.ionBlur.emit(e)},this.onKeyDown=function(){i.checkClearOnEdit()}}return t.prototype.debounceChanged=function(){this.ionChange=Object(d.h)(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var e=this.nativeInput,i=this.getValue();e&&e.value!==i&&(e.value=i),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:i})},t.prototype.connectedCallback=function(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))},t.prototype.disconnectedCallback=function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))},t.prototype.componentWillLoad=function(){this.inheritedAttributes=Object.assign(Object.assign({},Object(d.i)(this.el)),Object(d.j)(this.el,["data-form-type","title","tabindex"]))},t.prototype.componentDidLoad=function(){this.runAutoGrow()},t.prototype.setFocus=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(e){return this.nativeInput&&this.nativeInput.focus(),[2]}))}))},t.prototype.setBlur=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(e){return this.nativeInput&&this.nativeInput.blur(),[2]}))}))},t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})},t.prototype.runAutoGrow=function(){var e=this;this.nativeInput&&this.autoGrow&&Object(o.c)((function(){var i;e.textareaWrapper&&(e.textareaWrapper.dataset.replicatedValue=null!==(i=e.value)&&void 0!==i?i:"")}))},t.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)},t.prototype.focusChange=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()},t.prototype.hasValue=function(){return""!==this.getValue()},t.prototype.getValue=function(){return this.value||""},t.prototype.render=function(){var e,i=this,a=Object(r.b)(this),n=this.getValue(),s=this.inputId+"-lbl",c=Object(d.k)(this.el);return c&&(c.id=s),Object(o.h)(o.H,{"aria-disabled":this.disabled?"true":null,class:Object(l.c)(this.color,(e={},e[a]=!0,e))},Object(o.h)("div",{class:"textarea-wrapper",ref:function ref(e){return i.textareaWrapper=e}},Object(o.h)("textarea",Object.assign({class:"native-textarea","aria-labelledby":c?s:null,ref:function ref(e){return i.nativeInput=e},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},this.inheritedAttributes),n)))},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(o.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!1,configurable:!0}),t}(),c=0;s.style={ios:'.sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.textarea-wrapper.sc-ion-textarea-ios::after{white-space:pre-wrap;content:attr(data-replicated-value) " ";visibility:hidden}.native-textarea.sc-ion-textarea-ios,.textarea-wrapper.sc-ion-textarea-ios::after{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;grid-area:1/1/2/2;word-break:break-word}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios,.textarea-wrapper.sc-ion-textarea-ios::after{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios:not(.cloned-input){opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.cloned-input.sc-ion-textarea-ios:disabled{opacity:1}[auto-grow=true].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{height:100%}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}[auto-grow=true].sc-ion-textarea-ios-h .native-textarea.sc-ion-textarea-ios{overflow:hidden}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}',md:'.sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.textarea-wrapper.sc-ion-textarea-md::after{white-space:pre-wrap;content:attr(data-replicated-value) " ";visibility:hidden}.native-textarea.sc-ion-textarea-md,.textarea-wrapper.sc-ion-textarea-md::after{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;grid-area:1/1/2/2;word-break:break-word}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md,.textarea-wrapper.sc-ion-textarea-md::after{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md:not(.cloned-input){opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.cloned-input.sc-ion-textarea-md:disabled{opacity:1}[auto-grow=true].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{height:100%}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}[auto-grow=true].sc-ion-textarea-md-h .native-textarea.sc-ion-textarea-md{overflow:hidden}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}'}},88:function(e,i,a){"use strict";a.r(i),a.d(i,"c",(function(){return r})),a.d(i,"g",(function(){return d})),a.d(i,"h",(function(){return o})),a.d(i,"o",(function(){return s}));var n=a(14),o=function hostContext(e,i){return null!==i.closest(e)},r=function createColorClasses(e,i){var a;return"string"===typeof e&&e.length>0?Object.assign(((a={"ion-color":!0})["ion-color-".concat(e)]=!0,a),i):i},d=function getClassMap(e){var i={};return function getClassList(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return i[e]=!0})),i},l=/^[a-z][a-z0-9+\-.]*:/,s=function openURL(e,i,a,o){return Object(n.a)(void 0,void 0,void 0,(function(){var r;return Object(n.c)(this,(function(n){return null!=e&&"#"!==e[0]&&!l.test(e)&&(r=document.querySelector("ion-router"))?(null!=i&&i.preventDefault(),[2,r.push(e,a,o)]):[2,!1]}))}))}}}]);