(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{384:function(t,e,n){"use strict";n.r(e);n(146),n(147),n(47),n(101),n(18),n(24),n(39),n(19),n(25),n(9),n(10),n(15),n(30),n(46),n(59),n(4),n(38);function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),r=o((function(t){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)})),s=(r.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),c=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t},a=function(t){try{return!!t()}catch(t){return!0}},u=!a((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),l=i.document,f=s(l)&&s(l.createElement),h=!u&&!a((function(){return 7!=Object.defineProperty(("div",f?l.createElement("div"):{}),"a",{get:function(){return 7}}).a})),p=Object.defineProperty,d={f:u?Object.defineProperty:function(t,e,n){if(c(t),e=function(t,e){if(!s(t))return t;var n,o;if("function"==typeof(n=t.toString)&&!s(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!s(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}(e),c(n),h)try{return p(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},v=u?function(t,e,n){return d.f(t,e,function(t,e){return{enumerable:!1,configurable:!0,writable:!0,value:e}}(0,n))}:function(t,e,n){return t[e]=n,t},y={}.hasOwnProperty,m=function(t,e){return y.call(t,e)},g=0,w=Math.random(),b=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++g+w).toString(36))},E=o((function(t){var e=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),x=E("native-function-to-string",Function.toString),T=o((function(t){var e=b("src"),n=(""+x).split("toString");r.inspectSource=function(t){return x.call(t)},(t.exports=function(t,o,r,s){var c="function"==typeof r;c&&(m(r,"name")||v(r,"name",o)),t[o]!==r&&(c&&(m(r,e)||v(r,e,t[o]?""+t[o]:n.join(String(o)))),t===i?t[o]=r:s?t[o]?t[o]=r:v(t,o,r):(delete t[o],v(t,o,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[e]||x.call(this)}))})),O=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}},S=function t(e,n,o){var s,c,a,u,l=e&t.F,f=e&t.G,h=e&t.P,p=e&t.B,d=f?i:e&t.S?i[n]||(i[n]={}):(i[n]||{}).prototype,y=f?r:r[n]||(r[n]={}),m=y.prototype||(y.prototype={});for(s in f&&(o=n),o)a=((c=!l&&d&&void 0!==d[s])?d:o)[s],u=p&&c?O(a,i):h&&"function"==typeof a?O(Function.call,a):a,d&&T(d,s,a,e&t.U),y[s]!=a&&v(y,s,u),h&&m[s]!=a&&(m[s]=a)};i.core=r,S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128;var B,k=S,F={}.toString,_=function(t){return F.call(t).slice(8,-1)},j=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==_(t)?t.split(""):Object(t)},L=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},C=function(t){return j(L(t))},M=Math.ceil,A=Math.floor,P=function(t){return isNaN(t=+t)?0:(t>0?A:M)(t)},H=Math.min,D=Math.max,I=Math.min,N=function(t){return function(e,n,o){var i,r,s=C(e),c=(i=s.length)>0?H(P(i),9007199254740991):0,a=function(t,e){return(t=P(t))<0?D(t+e,0):I(t,e)}(o,c);if(t&&n!=n){for(;c>a;)if((r=s[a++])!=r)return!0}else for(;c>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}},K=E("keys"),z=N(!1),q=K[B="IE_PROTO"]||(K[B]=b(B)),R="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),G=Object.keys||function(t){return function(t,e){var n,o=C(t),i=0,r=[];for(n in o)n!=q&&m(o,n)&&r.push(n);for(;e.length>i;)m(o,n=e[i++])&&(~z(r,n)||r.push(n));return r}(t,R)},J={f:Object.getOwnPropertySymbols},U={f:{}.propertyIsEnumerable},W=Object.assign,X=!W||a((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=W({},t)[n]||Object.keys(W({},e)).join("")!=o}))?function(t,e){for(var n=Object(L(t)),o=arguments.length,i=1,r=J.f,s=U.f;o>i;)for(var c,a=j(arguments[i++]),l=r?G(a).concat(r(a)):G(a),f=l.length,h=0;f>h;)c=l[h++],u&&!s.call(a,c)||(n[c]=a[c]);return n}:W;k(k.S+k.F,"Object",{assign:X});var Y=o((function(t){var e=E("wks"),n=i.Symbol,o="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=o&&n[t]||(o?n:b)("Symbol."+t))}).store=e})),Q=Y("unscopables"),V=Array.prototype;null==V[Q]&&v(V,Q,{});var Z=N(!0);k(k.P,"Array",{includes:function(t){return Z(this,t,arguments.length>1?arguments[1]:void 0)}}),V[Q].includes=!0;var $=Y("match"),tt=function(t,e,n){if(s(o=e)&&(void 0!==(i=o[$])?i:"RegExp"==_(o)))throw TypeError("String#"+n+" doesn't accept regex!");var o,i;return String(L(t))},et=Y("match");function nt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}k(k.P+k.F*function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[et]=!1,!"/./"[t](e)}catch(t){}}return!0}("includes"),"String",{includes:function(t){return!!~tt(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var ot=d.f,it=Function.prototype,rt=/^\s*function ([^ (]*)/;"name"in it||u&&ot(it,"name",{configurable:!0,get:function(){try{return(""+this).match(rt)[1]}catch(o){return""}}}),e.default=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.scopedEl,this.focusBox,this.previousTarget,this.nextTarget,this.timeout=0,this.inScope=!1,this.transitionEvent=function(){var t=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}(),this.options=function(){for(var t,e,n,o=arguments[0]||{},i=1,r=arguments.length;i<r;i++)if(null!==(t=arguments[i]))for(e in t)o!==(n=t[e])&&void 0!==n&&(o[e]=n);return o}({class:"focus-overlay",activeClass:"focus-overlay-active",animatingClass:"focus-overlay-animating",targetClass:"focus-overlay-target",zIndex:9001,duration:500,inactiveAfterDuration:!1,triggerKeys:[9,36,37,38,39,40,13,32,16,17,18,27],inactiveOnNonTriggerKey:!0,inactiveOnClick:!0,alwaysActive:!1,watchTransitionEnd:!0,onInit:function(){},onBeforeMove:function(){},onAfterMove:function(){},onDestroy:function(){}},n||{}),e instanceof Element?this.scopedEl=e:"string"==typeof e||e instanceof String?this.scopedEl=document.querySelector(e):this.scopedEl=document.querySelector("body"),this.onKeyDownHandler=this.onKeyDownHandler.bind(this),this.onFocusHandler=this.onFocusHandler.bind(this),this.moveFocusBox=this.moveFocusBox.bind(this),this.stop=this.stop.bind(this),this.init()}var e,n;return e=t,(n=[{key:"init",value:function(){this.options.alwaysActive?(this.active=!0,window.addEventListener("focusin",this.onFocusHandler,!0)):(window.addEventListener("keydown",this.onKeyDownHandler,!1),this.options.inactiveOnClick&&window.addEventListener("mousedown",this.stop,!1)),this._createFocusBox(),this.options.onInit(this)}},{key:"onKeyDownHandler",value:function(t){var e=this,n=t.which;this.options.triggerKeys.includes(n)?(!1===this.active&&(this.active=!0,window.addEventListener("focusin",this.onFocusHandler,!0)),setTimeout((function(){var t=document.activeElement;t instanceof HTMLIFrameElement&&e.scopedEl.contains(t)&&!0===e.active&&e.moveFocusBox(t)}),5)):this.options.inactiveOnNonTriggerKey&&this.stop()}},{key:"_createFocusBox",value:function(){this.focusBox=document.createElement("div"),this.focusBox.setAttribute("aria-hidden","true"),this.focusBox.classList.add(this.options.class),Object.assign(this.focusBox.style,{position:"absolute",zIndex:this.options.zIndex,pointerEvents:"none"}),this.scopedEl.insertAdjacentElement("beforeend",this.focusBox)}},{key:"_cleanup",value:function(){null!=this.nextTarget&&(this.previousTarget=this.nextTarget,this.previousTarget.classList.remove(this.options.targetClass),this.previousTarget.removeEventListener(this.transitionEvent,this.moveFocusBox))}},{key:"onFocusHandler",value:function(t){var e=t.target;if(this._cleanup(),this.scopedEl.contains(e)){var n=this.nextTarget;if(this.inScope=!0,null!==e.getAttribute("data-focus")){var o=e.getAttribute("data-focus");this.nextTarget=document.querySelector("[data-focus='".concat(o,"']"))}else if(null!==e.getAttribute("data-focus-label")){var i=document.querySelector("[for='".concat(e.id,"']"));null===i&&(i=e.closest("label")),this.nextTarget=i}else{if(null!==e.getAttribute("data-focus-ignore"))return;this.nextTarget=e}clearTimeout(this.timeout),this.transitionEvent&&this.options.watchTransitionEnd&&this.nextTarget.addEventListener(this.transitionEvent,this.moveFocusBox),this.options.onBeforeMove(n,this.nextTarget,this),this.moveFocusBox(this.nextTarget)}else this.options.alwaysActive?this.inScope=!1:(this.inScope=!1,this.stop())}},{key:"stop",value:function(){this.active=!1,window.removeEventListener("focusin",this.onFocusHandler,!0),this._cleanup(),this.focusBox.classList.remove(this.options.activeClass)}},{key:"moveFocusBox",value:function(t){var e=this;if(t instanceof Event&&(t=document.activeElement),t.classList.add(this.options.targetClass),document.body.contains(t)&&t instanceof Element){var n=function(t){var e=document,n=window,o=e.body,i=void 0!==n.pageXOffset?n.pageXOffset:(e.documentElement||o.parentNode||o).scrollLeft,r=void 0!==n.pageYOffset?n.pageYOffset:(e.documentElement||o.parentNode||o).scrollTop,s=t.getBoundingClientRect();if(t!==o)for(var c=t.parentNode;c!==o&&c;)i+=c.scrollLeft,r+=c.scrollTop,c=c.parentNode;return{bottom:s.bottom+r,height:s.height,left:s.left+i,right:s.right+i,top:s.top+r,width:s.width}}(t),o="".concat(n.width,"px"),i="".concat(n.height,"px"),r="".concat(n.left,"px"),s="".concat(n.top,"px");this.focusBox.classList.add(this.options.animatingClass),this.focusBox.classList.add(this.options.activeClass),Object.assign(this.focusBox.style,{width:o,height:i,left:r,top:s}),this.timeout=setTimeout((function(){e.focusBox.classList.remove(e.options.animatingClass),e.options.inactiveAfterDuration&&e.focusBox.classList.remove(e.options.activeClass),e.options.onAfterMove(e.previousTarget,t,e)}),this.options.duration)}else this._cleanup()}},{key:"destroy",value:function(){this.focusBox.parentNode.removeChild(this.focusBox),null!=this.previousTarget&&this.previousTarget.classList.remove(this.options.targetClass),null!=this.nextTarget&&this.nextTarget.classList.remove(this.options.targetClass),window.removeEventListener("focusin",this.onFocusHandler,!0),window.removeEventListener("keydown",this.onKeyDownHandler,!1),window.removeEventListener("mousedown",this.stop,!1),this.options.onDestroy(this)}}])&&nt(e.prototype,n),t}()}}]);
//# sourceMappingURL=focus-overlay-8ba63f44653f67db2c9a.js.map