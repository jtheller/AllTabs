(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[53],{212:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return o}));var r=n(8),a=n(25),c=n(55),o=function createSwipeBackGesture(t,e,n,o,i){var u=t.ownerDocument.defaultView,s=Object(a.a)(t),h=function getDeltaX(t){return s?-t.deltaX:t.deltaX};return Object(c.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function canStart(n){return s=Object(a.a)(t),function isAtEdge(t){var e=t.startX;return s?e>=u.innerWidth-50:e<=50}(n)&&e()},onStart:n,onMove:function onMove(t){var e=h(t)/u.innerWidth;o(e)},onEnd:function onEnd(t){var e=h(t),n=u.innerWidth,a=e/n,c=function getVelocityX(t){return s?-t.velocityX:t.velocityX}(t),o=c>=0&&(c>.2||e>n/2),l=(o?1-a:a)*n,d=0;if(l>5){var f=l/Math.abs(c);d=Math.min(f,540)}i(o,a<=0?.01:Object(r.h)(0,a,.9999),d)}})}}}]);