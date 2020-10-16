(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[26],{119:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_item_option",(function(){return l})),e.d(i,"ion_item_options",(function(){return d})),e.d(i,"ion_item_sliding",(function(){return c}));var n=e(2),o=e(8),s=e(19),r=e(22),a=e(166),l=function(){function ItemOption(t){Object(o.q)(this,t),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()}}return ItemOption.prototype.render=function(){var t,i=this.disabled,e=this.expandable,n=void 0===this.href?"button":"a",r=Object(s.b)(this),l="button"===n?{type:this.type}:{download:this.download,href:this.href,target:this.target};return Object(o.l)(o.c,{onClick:this.onClick,class:Object(a.a)(this.color,(t={},t[r]=!0,t["item-option-disabled"]=i,t["item-option-expandable"]=e,t["ion-activatable"]=!0,t))},Object(o.l)(n,Object.assign({},l,{class:"button-native",part:"native",disabled:i}),Object(o.l)("span",{class:"button-inner"},Object(o.l)("slot",{name:"top"}),Object(o.l)("div",{class:"horizontal-wrapper"},Object(o.l)("slot",{name:"start"}),Object(o.l)("slot",{name:"icon-only"}),Object(o.l)("slot",null),Object(o.l)("slot",{name:"end"})),Object(o.l)("slot",{name:"bottom"})),"md"===r&&Object(o.l)("ion-ripple-effect",null)))},Object.defineProperty(ItemOption.prototype,"el",{get:function get(){return Object(o.m)(this)},enumerable:!1,configurable:!0}),ItemOption}();l.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"};var d=function(){function class_1(t){Object(o.q)(this,t),this.ionSwipe=Object(o.i)(this,"ionSwipe",7),this.side="end"}return class_1.prototype.fireSwipeEvent=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return this.ionSwipe.emit({side:this.side}),[2]}))}))},class_1.prototype.render=function(){var t,i=Object(s.b)(this),e=Object(r.i)(this.side);return Object(o.l)(o.c,{class:(t={},t[i]=!0,t["item-options-"+i]=!0,t["item-options-start"]=!e,t["item-options-end"]=e,t)})},Object.defineProperty(class_1.prototype,"el",{get:function get(){return Object(o.m)(this)},enumerable:!1,configurable:!0}),class_1}();d.style={ios:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"};var p,c=function(){function class_2(t){Object(o.q)(this,t),this.ionDrag=Object(o.i)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}return class_2.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},class_2.prototype.connectedCallback=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,i=this;return Object(n.c)(this,(function(n){switch(n.label){case 0:return this.item=this.el.querySelector("ion-item"),[4,this.updateOptions()];case 1:return n.sent(),t=this,[4,Promise.resolve().then(e.bind(null,51))];case 2:return t.gesture=n.sent().createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function canStart(t){return i.canStart(t)},onStart:function onStart(){return i.onStart()},onMove:function onMove(t){return i.onMove(t)},onEnd:function onEnd(t){return i.onEnd(t)}}),this.disabledChanged(),[2]}}))}))},class_2.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,p===this.el&&(p=void 0)},class_2.prototype.getOpenAmount=function(){return Promise.resolve(this.openAmount)},class_2.prototype.getSlidingRatio=function(){return Promise.resolve(this.getSlidingRatioSync())},class_2.prototype.open=function(t){return Object(n.a)(this,void 0,void 0,(function(){var i,e,o,s=this;return Object(n.c)(this,(function(n){return null===this.item?[2]:(i=this.getOptions(t))?(void 0===t&&(t=i===this.leftOptions?"start":"end"),t=Object(r.i)(t)?"end":"start",e=this.openAmount<0,o=this.openAmount>0,e&&i===this.leftOptions||o&&i===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame((function(){s.calculateOptsWidth();var i="end"===t?s.optsWidthRightSide:-s.optsWidthLeftSide;p=s.el,s.setOpenAmount(i,!1),s.state="end"===t?8:16}))),[2]):[2]}))}))},class_2.prototype.close=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return this.setOpenAmount(0,!0),[2]}))}))},class_2.prototype.closeOpened=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return void 0!==p?(p.close(),p=void 0,[2,!0]):[2,!1]}))}))},class_2.prototype.getOptions=function(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions},class_2.prototype.updateOptions=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,i,e,o;return Object(n.c)(this,(function(n){switch(n.label){case 0:t=this.el.querySelectorAll("ion-item-options"),i=0,this.leftOptions=this.rightOptions=void 0,e=0,n.label=1;case 1:return e<t.length?[4,t.item(e).componentOnReady()]:[3,4];case 2:o=n.sent(),"start"===(Object(r.i)(o.side)?"end":"start")?(this.leftOptions=o,i|=1):(this.rightOptions=o,i|=2),n.label=3;case 3:return e++,[3,1];case 4:return this.optsDirty=!0,this.sides=i,[2]}}))}))},class_2.prototype.canStart=function(t){if("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)return!1;return p&&p!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)},class_2.prototype.onStart=function(){p=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},class_2.prototype.onMove=function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+.55*(e-i):e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+.55*(e-i)),this.setOpenAmount(e,!1)},class_2.prototype.onEnd=function(t){var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide,n=this.openAmount>0===!(i<0),o=Math.abs(i)>.3,s=Math.abs(this.openAmount)<Math.abs(e/2);m(n,o,s)&&(e=0);var r=this.state;this.setOpenAmount(e,!0),0!==(32&r)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!==(64&r)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},class_2.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1},class_2.prototype.setOpenAmount=function(t,i){var e=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,i&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout((function(){e.state=2,e.tmr=void 0}),600),p=void 0,void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}},class_2.prototype.getSlidingRatioSync=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},class_2.prototype.render=function(){var t,i=Object(s.b)(this);return Object(o.l)(o.c,{class:(t={},t[i]=!0,t["item-sliding-active-slide"]=2!==this.state,t["item-sliding-active-options-end"]=0!==(8&this.state),t["item-sliding-active-options-start"]=0!==(16&this.state),t["item-sliding-active-swipe-end"]=0!==(32&this.state),t["item-sliding-active-swipe-start"]=0!==(64&this.state),t)})},Object.defineProperty(class_2.prototype,"el",{get:function get(){return Object(o.m)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(class_2,"watchers",{get:function get(){return{disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),class_2}(),m=function swipeShouldReset(t,i,e){return!i&&e||t&&i};c.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"},166:function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return o})),e.d(i,"d",(function(){return l}));var n=e(2),o=function hostContext(t,i){return null!==i.closest(t)},s=function createColorClasses(t,i){var e;return"string"===typeof t&&t.length>0?Object.assign(((e={"ion-color":!0})["ion-color-"+t]=!0,e),i):i},r=function getClassMap(t){var i={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return i[t]=!0})),i},a=/^[a-z][a-z0-9+\-.]*:/,l=function openURL(t,i,e,o){return Object(n.a)(void 0,void 0,void 0,(function(){var s;return Object(n.c)(this,(function(n){return null!=t&&"#"!==t[0]&&!a.test(t)&&(s=document.querySelector("ion-router"))?(null!=i&&i.preventDefault(),[2,s.push(t,e,o)]):[2,!1]}))}))}}}]);