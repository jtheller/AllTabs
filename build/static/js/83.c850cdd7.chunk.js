/*! For license information please see 83.c850cdd7.chunk.js.LICENSE.txt */
(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[83],{210:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return B}));var n=r(18),o="-shadowcsshost",c="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("("+o+a,"gim"),l=new RegExp("("+s+a,"gim"),u=new RegExp("("+c+a,"gim"),p=o+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,f=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,S=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_=/([{}])/g,C=/(^.*?[^\\])??((:+)(.*)|$)/,b="%BLOCK%",j=function processRules(t,e){var r=k(t),n=0;return r.escapedString.replace(w,(function(){var t=arguments.length<=2?void 0:arguments[2],o="",c=arguments.length<=4?void 0:arguments[4],s="";c&&c.startsWith("{"+b)&&(o=r.blocks[n++],c=c.substring(b.length+1),s="{");var a=e({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(a.content).concat(c)}))},k=function escapeBlocks(t){for(var e=t.split(_),r=[],n=[],o=0,c=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(n.push(c.join("")),r.push(b),c=[]),r.push(a)),"{"===a&&o++}return c.length>0&&(n.push(c.join("")),r.push(b)),{escapedString:r.join(""),blocks:n}},O=function convertColonRule(t,e,r){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){for(var o=e[2].split(","),c=[],s=0;s<o.length;s++){var a=o[s].trim();if(!a)break;c.push(r(p,a,e[3]))}return c.join(",")}return p+e[3]}))},R=function colonHostPartReplacer(t,e,r){return t+e.replace(o,"")+r},W=function colonHostContextPartReplacer(t,e,r){return e.indexOf(o)>-1?R(t,e,r):t+e+r+", "+e+" "+t+r},E=function selectorNeedsScoping(t,e){var r=function makeScopeMatcher(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!r.test(t)},H=function injectScopingSelector(t,e){return t.replace(C,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")}))},T=function applyStrictSelectorScope(t,e,r){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}));for(var n,o="."+e,c=function _scopeSelectorPart(t){var n=t.trim();if(!n)return"";if(t.indexOf(p)>-1)n=function applySimpleSelectorScope(t,e,r){if(g.lastIndex=0,g.test(t)){var n=".".concat(r);return t.replace(h,(function(t,e){return H(e,n)})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var c=t.replace(g,"");c.length>0&&(n=H(c,o))}return n},s=function safeSelector(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-".concat(r,"__");return e.push(n),r++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var c="__ph-".concat(r,"__");return e.push(o),r++,n+c})),placeholders:e}}(t),a="",i=0,l=/( |>|\+|~(?!=))\s*/g,u=!((t=s.content).indexOf(p)>-1);null!==(n=l.exec(t));){var f=n[1],d=t.slice(i,n.index).trim(),m=(u=u||d.indexOf(p)>-1)?c(d):d;a+="".concat(m," ").concat(f," "),i=l.lastIndex}var v=t.substring(i);return a+=(u=u||v.indexOf(p)>-1)?c(v):v,function restoreSafeSelector(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(s.placeholders,a)},y=function scopeSelectors(t,e,r,n,o){return j(t,(function(t){var o=t.selector,c=t.content;return"@"!==t.selector[0]?o=function scopeSelector(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():E(t,e)?T(t,e,r).trim():t.trim()})).join(", ")}(t.selector,e,r,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(c=scopeSelectors(t.content,e,r,n)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},P=function scopeCssText(t,e,r,n,a){var h=function convertColonSlotted(t,e){var r="."+e+" > ",n=[];return t=t.replace(u,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){for(var c=e[2].trim(),s=e[3],a=r+c+s,i="",l=e[4]-1;l>=0;l--){var u=e[5][l];if("}"===u||","===u)break;i=u+i}var h=i+a,f="".concat(i.trimRight()).concat(a.trim());if(h.trim()!==f.trim()){var g="".concat(f,", ").concat(h);n.push({orgSelector:h,updatedSelector:g})}return a}return p+e[3]})),{selectors:n,cssText:t}}(t=function convertColonHostContext(t){return O(t,l,W)}(t=function convertColonHost(t){return O(t,i,R)}(t=function insertPolyfillHostInCssText(t){return t.replace(v,s).replace(d,o).replace(m,c)}(t))),n);return t=function convertShadowDOMSelectors(t){return f.reduce((function(t,e){return t.replace(e," ")}),t)}(t=h.cssText),e&&(t=y(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}},B=function scopeCss(t,e,r){var o=e+"-h",c=e+"-s",s=function extractCommentsWithHash(t){return t.match(x)||[]}(t);t=function stripComments(t){return t.replace(S,"")}(t);var a=[];if(r){var i=function processCommentedSelector(t){var e="/*!@___".concat(a.length,"___*/"),r="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=j(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=j(t.content,i),t):t}))}var l=P(t,e,o,c);return t=[l.cssText].concat(Object(n.a)(s)).join("\n"),r&&a.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),l.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);