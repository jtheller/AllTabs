(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[45],{100:function(t,i,o){"use strict";o.r(i),o.d(i,"ion_img",(function(){return r}));var e=o(7),n=o(18),r=function(){function Img(t){var i=this;Object(e.q)(this,t),this.ionImgWillLoad=Object(e.i)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.i)(this,"ionImgDidLoad",7),this.ionError=Object(e.i)(this,"ionError",7),this.onLoad=function(){i.ionImgDidLoad.emit()},this.onError=function(){i.ionError.emit()}}return Img.prototype.srcChanged=function(){this.addIO()},Img.prototype.componentDidLoad=function(){this.addIO()},Img.prototype.addIO=function(){var t=this;void 0!==this.src&&("undefined"!==typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(i){i[0].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))},Img.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},Img.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},Img.prototype.render=function(){return Object(e.l)(e.c,{class:Object(n.b)(this)},Object(e.l)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))},Object.defineProperty(Img.prototype,"el",{get:function get(){return Object(e.m)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(Img,"watchers",{get:function get(){return{src:["srcChanged"]}},enumerable:!1,configurable:!0}),Img}();r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);
//# sourceMappingURL=45.aa3d0b63.chunk.js.map