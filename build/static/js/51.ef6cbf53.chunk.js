(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[51],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"KEYBOARD_DID_CLOSE",(function(){return r})),n.d(t,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(t,"copyVisualViewport",(function(){return v})),n.d(t,"keyboardDidClose",(function(){return y})),n.d(t,"keyboardDidOpen",(function(){return p})),n.d(t,"keyboardDidResize",(function(){return b})),n.d(t,"resetKeyboardAssist",(function(){return d})),n.d(t,"setKeyboardClose",(function(){return h})),n.d(t,"setKeyboardOpen",(function(){return f})),n.d(t,"startKeyboardAssist",(function(){return u})),n.d(t,"trackViewportChanges",(function(){return g}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},s={},a=!1,d=function resetKeyboardAssist(){o={},s={},a=!1},u=function startKeyboardAssist(e){c(e),e.visualViewport&&(s=v(e.visualViewport),e.visualViewport.onresize=function(){g(e),p()||b(e)?f(e):y(e)&&h(e)})},c=function startNativeListeners(e){e.addEventListener("keyboardDidShow",(function(t){return f(e,t)})),e.addEventListener("keyboardDidHide",(function(){return h(e)}))},f=function setKeyboardOpen(e,t){w(e,t),a=!0},h=function setKeyboardClose(e){l(e),a=!1},p=function keyboardDidOpen(){var e=(o.height-s.height)*s.scale;return!a&&o.width===s.width&&e>150},b=function keyboardDidResize(e){return a&&!y(e)},y=function keyboardDidClose(e){return a&&s.height===e.innerHeight},w=function fireKeyboardOpenEvent(e,t){var n=t?t.keyboardHeight:e.innerHeight-s.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(r)},l=function fireKeyboardCloseEvent(e){var t=new CustomEvent(r);e.dispatchEvent(t)},g=function trackViewportChanges(e){o=Object.assign({},s),s=v(e.visualViewport)},v=function copyVisualViewport(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=51.ef6cbf53.chunk.js.map