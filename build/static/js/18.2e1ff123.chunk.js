(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[18],{106:function(t,r,n){"use strict";n.r(r),n.d(r,"ion_avatar",(function(){return e})),n.d(r,"ion_badge",(function(){return d})),n.d(r,"ion_thumbnail",(function(){return s}));var o=n(8),i=n(19),a=n(166),e=function(){function Avatar(t){Object(o.q)(this,t)}return Avatar.prototype.render=function(){return Object(o.l)(o.c,{class:Object(i.b)(this)},Object(o.l)("slot",null))},Avatar}();e.style={ios:":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}",md:":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}"};var d=function(){function Badge(t){Object(o.q)(this,t)}return Badge.prototype.render=function(){var t,r=Object(i.b)(this);return Object(o.l)(o.c,{class:Object(a.a)(this.color,(t={},t[r]=!0,t))},Object(o.l)("slot",null))},Badge}();d.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}"};var s=function(){function Thumbnail(t){Object(o.q)(this,t)}return Thumbnail.prototype.render=function(){return Object(o.l)(o.c,{class:Object(i.b)(this)},Object(o.l)("slot",null))},Thumbnail}();s.style=":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"},166:function(t,r,n){"use strict";n.d(r,"a",(function(){return a})),n.d(r,"b",(function(){return e})),n.d(r,"c",(function(){return i})),n.d(r,"d",(function(){return s}));var o=n(2),i=function hostContext(t,r){return null!==r.closest(t)},a=function createColorClasses(t,r){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-"+t]=!0,n),r):r},e=function getClassMap(t){var r={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return r[t]=!0})),r},d=/^[a-z][a-z0-9+\-.]*:/,s=function openURL(t,r,n,i){return Object(o.a)(void 0,void 0,void 0,(function(){var a;return Object(o.c)(this,(function(o){return null!=t&&"#"!==t[0]&&!d.test(t)&&(a=document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[2,a.push(t,n,i)]):[2,!1]}))}))}}}]);