(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[58],{148:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return R}));var __spreadArrays=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<r;e++)for(var s=arguments[e],c=0,a=s.length;c<a;c++,n++)o[n]=s[c];return o},o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",n=new RegExp("(-shadowcsshost"+o,"gim"),s=new RegExp("(-shadowcsscontext"+o,"gim"),c=new RegExp("(-shadowcssslotted"+o,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,i=[/::shadow/g,/::content/g],l=/-shadowcsshost/gim,u=/:host/gim,h=/::slotted/gim,p=/:host-context/gim,f=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,g=/([{}])/g,v=function processRules(t,e){var r=S(t),o=0;return r.escapedString.replace(m,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var s=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=r.blocks[o++],a=a.substring("%BLOCK%".length+1),i="{");var l={selector:s,content:c},u=e(l);return""+t[1]+u.selector+t[3]+i+u.content+a}))},S=function escapeBlocks(t){for(var e=t.split(g),r=[],o=[],n=0,s=[],c=0;c<e.length;c++){var a=e[c];"}"===a&&n--,n>0?s.push(a):(s.length>0&&(o.push(s.join("")),r.push("%BLOCK%"),s=[]),r.push(a)),"{"===a&&n++}return s.length>0&&(o.push(s.join("")),r.push("%BLOCK%")),{escapedString:r.join(""),blocks:o}},w=function convertColonRule(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var o=t[2].split(","),n=[],s=0;s<o.length;s++){var c=o[s].trim();if(!c)break;n.push(r("-shadowcsshost-no-combinator",c,t[3]))}return n.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},x=function colonHostPartReplacer(t,e,r){return t+e.replace("-shadowcsshost","")+r},_=function colonHostContextPartReplacer(t,e,r){return e.indexOf("-shadowcsshost")>-1?x(t,e,r):t+e+r+", "+e+" "+t+r},b=function selectorNeedsScoping(t,e){return!function makeScopeMatcher(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},C=function applyStrictSelectorScope(t,e,r){for(var o,n="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),s=function _scopeSelectorPart(t){var o=t.trim();if(!o)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)o=function applySimpleSelectorScope(t,e,r){if(l.lastIndex=0,l.test(t)){var o="."+r;return t.replace(a,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,n){return e+o+r+n}))})).replace(l,o+" ")}return e+" "+t}(t,e,r);else{var s=t.replace(l,"");if(s.length>0){var c=s.match(/([^:]*)(:*)(.*)/);c&&(o=c[1]+n+c[2]+c[3])}}return o},c=function safeSelector(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,o){var n="__ph-"+r+"__";return e.push(o),r++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,o,n){var s="__ph-"+r+"__";return e.push(n),r++,o+s})),placeholders:e}}(t),i="",u=0,h=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(o=h.exec(t));){var f=o[1],d=t.slice(u,o.index).trim();i+=((p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?s(d):d)+" "+f+" ",u=h.lastIndex}var m=t.substring(u);return i+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?s(m):m,function restoreSafeSelector(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(c.placeholders,i)},O=function scopeSelectors(t,e,r,o,n){return v(t,(function(t){var n=t.selector,s=t.content;return"@"!==t.selector[0]?n=function scopeSelector(t,e,r,o){return t.split(",").map((function(t){return o&&t.indexOf("."+o)>-1?t.trim():b(t,e)?C(t,e,r).trim():t.trim()})).join(", ")}(t.selector,e,r,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(s=scopeSelectors(t.content,e,r,o)),{selector:n.replace(/\s{2,}/g," ").trim(),content:s}}))},k=function scopeCssText(t,e,r,o,a){var l=function convertColonSlotted(t,e){var r="."+e+" > ",o=[];return t=t.replace(c,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].trim(),s=t[3],c=r+n+s,a="",i=t[4]-1;i>=0;i--){var l=t[5][i];if("}"===l||","===l)break;a=l+a}var u=a+c,h=""+a.trimRight()+c.trim();if(u.trim()!==h.trim()){var p=h+", "+u;o.push({orgSelector:u,updatedSelector:p})}return c}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:o,cssText:t}}(t=function convertColonHostContext(t){return w(t,s,_)}(t=function convertColonHost(t){return w(t,n,x)}(t=function insertPolyfillHostInCssText(t){return t=t.replace(p,"-shadowcsscontext").replace(u,"-shadowcsshost").replace(h,"-shadowcssslotted")}(t))),o);return t=function convertShadowDOMSelectors(t){return i.reduce((function(t,e){return t.replace(e," ")}),t)}(t=l.cssText),e&&(t=O(t,e,r,o)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:l.selectors}},R=function scopeCss(t,e,r){var o=e+"-h",n=e+"-s",s=function extractCommentsWithHash(t){return t.match(d)||[]}(t);t=function stripComments(t){return t.replace(f,"")}(t);var c=[];if(r){var a=function processCommentedSelector_1(t){var e="/*!@___"+c.length+"___*/",r="/*!@"+t.selector+"*/";return c.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=v(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=v(t.content,a),t):t}))}var i=k(t,e,o,n);return t=__spreadArrays([i.cssText],s).join("\n"),r&&c.forEach((function(e){var r=e.placeholder,o=e.comment;t=t.replace(r,o)})),i.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);