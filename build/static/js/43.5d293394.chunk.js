(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[43],{108:function(o,t,a){"use strict";a.r(t),a.d(t,"ion_backdrop",(function(){return i}));var r=a(8),n=a(19),c=a(33),i=function(){function Backdrop(o){Object(r.q)(this,o),this.ionBackdropTap=Object(r.i)(this,"ionBackdropTap",7),this.blocker=c.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return Backdrop.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},Backdrop.prototype.disconnectedCallback=function(){this.blocker.unblock()},Backdrop.prototype.onMouseDown=function(o){this.emitTap(o)},Backdrop.prototype.emitTap=function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},Backdrop.prototype.render=function(){var o,t=Object(n.b)(this);return Object(r.l)(r.c,{tabindex:"-1",class:(o={},o[t]=!0,o["backdrop-hide"]=!this.visible,o["backdrop-no-tappable"]=!this.tappable,o)})},Backdrop}();i.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);