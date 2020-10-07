(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[50],{143:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return a}));var n=i(2),r=i(7),s=function createNode(t,e){var i=o(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},o=function getTemplate(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},l=function calcCells(t,e,i,n,r,s,o,l,a,h,c,u){for(var d=[],p=u+c,f=c;f<p;f++){var g,m=t[f];if(r)null!=(g=r(m,f,t))&&d.push({i:h++,type:"header",value:g,index:f,height:i?i(g,f):o,reads:i?0:2,visible:!!i});if(d.push({i:h++,type:"item",value:m,index:f,height:e?e(m,f):a,reads:e?0:2,visible:!!e}),s)null!=(g=s(m,f,t))&&d.push({i:h++,type:"footer",value:g,index:f,height:n?n(g,f):l,reads:n?0:2,visible:!!n})}return d},a=function(){function class_1(t){var e=this;Object(r.q)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return class_1.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},class_1.prototype.connectedCallback=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,e;return Object(n.c)(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):(console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[2]}}))}))},class_1.prototype.componentDidUpdate=function(){this.updateState()},class_1.prototype.disconnectedCallback=function(){this.scrollEl=void 0},class_1.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},class_1.prototype.positionForItem=function(t){return Promise.resolve(function positionForIndex(t,e,i){var n=e.find((function(e){return"item"===e.type&&e.index===t}));return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},class_1.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),Object(n.a)(this,void 0,void 0,(function(){var i,r,s;return Object(n.c)(this,(function(n){return this.items?(i=-1===e?this.items.length-t:e,r=function findCellIndex(t,e){var i=t.length>0?t[t.length-1].index:0;return 0===e?0:e===i+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,t),s=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=function inplaceUpdate(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,s,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},class_1.prototype.checkEnd=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},class_1.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r.j)(this.readVS.bind(this)),Object(r.g)(this.writeVS.bind(this)))},class_1.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.offsetParent;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},class_1.prototype.writeVS=function(){var t=this.indexDirty,e=function getViewport(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),i=this.getHeightIndex(),n=function getRange(t,e,i){for(var n=e.top,r=e.bottom,s=0;s<t.length&&!(t[s]>n);s++);for(var o=Math.max(s-i-1,0);s<t.length&&!(t[s]>=r);s++);return{offset:o,length:Math.min(s+i,t.length)-o}}(i,e,2);(function getShouldUpdate(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,n)&&(this.range=n,function updateVDom(t,e,i,n){for(var r=0,s=t;r<s.length;r++){var o=s[r];o.change=0,o.d=!0}for(var l=[],a=n.offset+n.length,h=function _loop_1(n){var r=i[n],s=t.find((function(t){return t.d&&t.cell===r}));if(s){var o=e[n];o!==s.top&&(s.top=o,s.change=1),s.d=!1}else l.push(r)},c=n.offset;c<a;c++)h(c);for(var u=t.filter((function(t){return t.d})),d=function _loop_2(i){var n=u.find((function(t){return t.d&&t.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},p=0,f=l;p<f.length;p++){d(f[p])}t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,i,this.cells,n),this.nodeRender?function doRender(t,e,i,n){for(var r,o=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),l=o.length,a=0;a<i.length;a++){var h=i[a],c=h.cell;if(2===h.change){if(a<l)e(r=o[a],c,a);else{var u=s(t,c.type);(r=e(u,c,a)||u).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=o[a];0!==h.change&&(r.style.transform="translate3d(0,"+h.top+"px,0)");var d=c.visible;h.visible!==d&&(d?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(n(c,r),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(r.n)(this))},class_1.prototype.updateCellHeight=function(t,e){var i=this,n=function update(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()},class_1.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},class_1.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},class_1.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},class_1.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},class_1.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},class_1.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function resizeBuffer(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function calcHeightIndex(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},class_1.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},class_1.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case"item":return this.renderItem(n,r);case"header":return this.renderHeader(n,r);case"footer":return this.renderFooter(n,r)}},class_1.prototype.render=function(){var t=this;return Object(r.l)(r.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(r.l)(h,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(class_1.prototype,"el",{get:function get(){return Object(r.m)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(class_1,"watchers",{get:function get(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!1,configurable:!0}),class_1}(),h=function VirtualProxy(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},s=r.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:s,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))};a.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);
//# sourceMappingURL=50.265cbffd.chunk.js.map