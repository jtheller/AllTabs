(this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]=this["webpackJsonpcom.jtworks.chrome-ext.alltabs"]||[]).push([[33],{132:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return s})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return E})),n.d(e,"ion_router_link",(function(){return L}));var r=n(2),o=n(8),i=n(19),a=n(22),u=n(166),s=function(){function Route(t){Object(o.q)(this,t),this.ionRouteDataChanged=Object(o.i)(this,"ionRouteDataChanged",7),this.url=""}return Route.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},Route.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},Route.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(Route,"watchers",{get:function get(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),Route}(),c=function(){function RouteRedirect(t){Object(o.q)(this,t),this.ionRouteRedirectChanged=Object(o.i)(this,"ionRouteRedirectChanged",7)}return RouteRedirect.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},RouteRedirect.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(RouteRedirect,"watchers",{get:function get(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),RouteRedirect}(),h=function generatePath(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},l=function parsePath(t){if(null==t)return[""];var e=t.split("?")[0].split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===e.length?[""]:e},f=function writeNavState(t,e,n,o,i,a){return void 0===i&&(i=!1),Object(r.a)(void 0,void 0,void 0,(function(){var u,s,c,h;return Object(r.c)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),u=b(t),o>=e.length||!u?[2,i]:[4,u.componentOnReady()];case 1:return r.sent(),s=e[o],[4,u.setRouteId(s.id,s.params,n,a)];case 2:return(c=r.sent()).changed&&(n="root",i=!0),[4,writeNavState(c.element,e,n,o+1,i,a)];case 3:return i=r.sent(),c.markVisible?[4,c.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,i];case 6:return h=r.sent(),console.error(h),[2,!1];case 7:return[2]}}))}))},d=function readNavState(t){return Object(r.a)(void 0,void 0,void 0,(function(){var e,n,o,i;return Object(r.c)(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return(n=b(o))?[4,n.getRouteId()]:[3,3];case 2:return(i=r.sent())?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},p=function waitUntilNavNode(){return b(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))},v=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",b=function searchNavNode(t){if(t){if(t.matches(v))return t;var e=t.querySelector(v);return e||void 0}},g=function routeRedirect(t,e){return e.find((function(e){return function matchesRedirect(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)}))},m=function matchesIDs(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},R=function matchesPath(t,e){for(var n,r=new O(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var u=0,s=a;u<s.length;u++){var c=s[u],h=r.next();if(":"===c[0]){if(""===h)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=h}else if(h!==c)return null}o=!1}}return!o||o===(""===r.next())?n?e.map((function(t,e){return{id:t.id,path:t.path,params:w(t.params,n[e])}})):e:null},w=function mergeParams(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0},y=function routerPathToChain(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=i[o],u=R(t,a);if(null!==u){var s=j(u);s>r&&(r=s,n=u)}}return n},j=function computePriority(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e},O=function(){function RouterSegments(t){this.path=t.slice()}return RouterSegments.prototype.next=function(){return this.path.length>0?this.path.shift():""},RouterSegments}(),C=function readRedirects(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=S(t,"to");return{from:l(S(t,"from")),to:null==e?void 0:l(e)}}))},P=function readRoutes(t){return k(_(t))},_=function readRouteNodes(t,e){return void 0===e&&(e=t),Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=S(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:l(S(e,"url")),id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:readRouteNodes(t,e)}}))},S=function readProp(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},k=function flattenRouterTree(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];N([],e,o)}return e},N=function flattenNode(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++){flattenNode(r,e,i[o])}else e.push(r)},E=function(){function class_1(t){Object(o.q)(this,t),this.ionRouteWillChange=Object(o.i)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o.i)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return class_1.prototype.componentWillLoad=function(){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.c)(this,(function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,p()];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}}))}))},class_1.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(a.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(a.e)(this.onRoutesChanged.bind(this),100))},class_1.prototype.onPopState=function(){return Object(r.a)(this,void 0,void 0,(function(){var t,e,n;return Object(r.c)(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:return!0!==(n=r.sent())?("object"===typeof n&&(e=l(n.redirect)),[2,!1]):(console.debug("[ion-router] URL changed -> update nav",e,t),[2,this.writeNavStateRoot(e,t)])}}))}))},class_1.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},class_1.prototype.canTransition=function(){return Object(r.a)(this,void 0,void 0,(function(){var t;return Object(r.c)(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return!0!==(t=e.sent())?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},class_1.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),Object(r.a)(this,void 0,void 0,(function(){var o,i,a;return Object(r.c)(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e),o=l(t),i=t.split("?")[1],[4,this.runGuards(o)];case 1:if(!0!==(a=r.sent())){if("object"!==typeof a)return[2,!1];o=l(a.redirect),i=a.redirect.split("?")[1]}return this.setPath(o,e,i),[2,this.writeNavStateRoot(o,e,n)]}}))}))},class_1.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},class_1.prototype.printDebug=function(){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.c)(this,(function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function printRoutes(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function _loop_1(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+h(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++){e(r[n])}console.groupEnd()}(P(this.el)),function printRedirects(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+h(r.from),"font-weight: bold"," TO: ","$c "+h(r.to),"font-weight: bold")}console.groupEnd()}(C(this.el)),[2]}))}))},class_1.prototype.navChanged=function(t){return Object(r.a)(this,void 0,void 0,(function(){var e,n,o,i,a,u;return Object(r.c)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,d(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=P(this.el),(a=function routerIDsToChain(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,a=e;i<a.length;i++){var u=a[i],s=m(o,u);s>r&&(n=u,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:w(e.params,t[n]&&t[n].params)}})):null}(n,i))?(u=function chainToPath(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=o.params&&o.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(a))?(console.debug("[ion-router] nav changed -> update URL",n,u),this.setPath(u,t),[4,this.safeWriteNavState(o,a,"root",u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},class_1.prototype.onRedirectChanged=function(){var t=this.getPath();t&&g(t,C(this.el))&&this.writeNavStateRoot(t,"root")},class_1.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},class_1.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?"forward":e<n?"back":"root"},class_1.prototype.writeNavStateRoot=function(t,e,n){return Object(r.a)(this,void 0,void 0,(function(){var o,i,a,u,s;return Object(r.c)(this,(function(r){return t?(o=C(this.el),i=g(t,o),a=null,i&&(this.setPath(i.to,e),a=i.from,t=i.to),u=P(this.el),(s=y(t,u))?[2,this.safeWriteNavState(document.body,s,e,t,a,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},class_1.prototype.safeWriteNavState=function(t,e,n,o,i,a,u){return void 0===a&&(a=0),Object(r.a)(this,void 0,void 0,(function(){var s,c,h;return Object(r.c)(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:s=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,a,u)];case 3:return c=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return s(),[2,c]}}))}))},class_1.prototype.lock=function(){return Object(r.a)(this,void 0,void 0,(function(){var t,e;return Object(r.c)(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},class_1.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),void 0===e&&(e=l(this.previousPath)),Object(r.a)(this,void 0,void 0,(function(){var n,o,i,a,u,s,c,h,l;return Object(r.c)(this,(function(r){switch(r.label){case 0:return t&&e?(n=P(this.el),o=y(t,n),i=y(e,n),a=o&&o[o.length-1].beforeEnter,(u=i&&i[i.length-1].beforeLeave)?[4,u()]:[3,2]):[2,!0];case 1:return c=r.sent(),[3,3];case 2:c=!0,r.label=3;case 3:return!1===(s=c)||"object"===typeof s?[2,s]:a?[4,a()]:[3,5];case 4:return l=r.sent(),[3,6];case 5:l=!0,r.label=6;case 6:return!1===(h=l)||"object"===typeof h?[2,h]:[2,!0]}}))}))},class_1.prototype.writeNavState=function(t,e,n,o,i,a,u){return void 0===a&&(a=0),Object(r.a)(this,void 0,void 0,(function(){var s,c;return Object(r.c)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(s=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(s),[4,f(t,e,n,a,!1,u)]);case 1:return c=r.sent(),this.busy=!1,c&&console.debug("[ion-router] route changed",o),s&&this.ionRouteDidChange.emit(s),[2,c]}}))}))},class_1.prototype.setPath=function(t,e,n){this.state++,function writePath(t,e,n,o,i,a,u){var s=h(Object(r.d)(l(e),o));n&&(s="#"+s),void 0!==u&&(s=s+"?"+u),"forward"===i?t.pushState(a,"",s):t.replaceState(a,"",s)}(window.history,this.root,this.useHash,t,e,this.state,n)},class_1.prototype.getPath=function(){return function readPath(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return function removePrefix(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(l(e),l(r))}(window.location,this.root,this.useHash)},class_1.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=h(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?h(e):null,to:r}},Object.defineProperty(class_1.prototype,"el",{get:function get(){return Object(o.m)(this)},enumerable:!1,configurable:!0}),class_1}(),L=function(){function RouterLink(t){var e=this;Object(o.q)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(u.d)(e.href,t,e.routerDirection,e.routerAnimation)}}return RouterLink.prototype.render=function(){var t,e=Object(i.b)(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o.l)(o.c,{onClick:this.onClick,class:Object(u.a)(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o.l)("a",Object.assign({},n),Object(o.l)("slot",null)))},RouterLink}();L.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},166:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}));var r=n(2),o=function hostContext(t,e){return null!==e.closest(t)},i=function createColorClasses(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-"+t]=!0,n),e):e},a=function getClassMap(t){var e={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},u=/^[a-z][a-z0-9+\-.]*:/,s=function openURL(t,e,n,o){return Object(r.a)(void 0,void 0,void 0,(function(){var i;return Object(r.c)(this,(function(r){return null!=t&&"#"!==t[0]&&!u.test(t)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);