(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[0],{171:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return o}));var n=r(22),a=(r(33),r(51)),o=function createSwipeBackGesture(t,e,r,o,c){var i=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function canStart(t){return t.startX<=50&&e()},onStart:r,onMove:function onMove(t){var e=t.deltaX/i.innerWidth;o(e)},onEnd:function onEnd(t){var e=t.deltaX,r=i.innerWidth,a=e/r,o=t.velocityX,s=r/2,u=o>=0&&(o>.2||t.deltaX>s),h=(u?1-a:a)*r,l=0;if(h>5){var d=h/Math.abs(o);l=Math.min(d,540)}c(u,a<=0?.01:Object(n.c)(0,a,.9999),l)}})}}}]);