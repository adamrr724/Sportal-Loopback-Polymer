!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.page=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return i(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){(function(n){"use strict";function r(e,t){if("function"==typeof e)return r("*",e);if("function"==typeof t)for(var n=new s(e),i=1;i<arguments.length;++i)r.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?r["string"==typeof t?"redirect":"show"](e,t):r.start(e)}function i(e){if(!e.handled){var t;t=y?g+v.hash.replace("#!",""):v.pathname+v.search,t!==e.canonicalPath&&(r.stop(),e.handled=!1,v.href=e.canonicalPath)}}function o(e){return"string"!=typeof e?e:m?decodeURIComponent(e.replace(/\+/g," ")):e}function a(e,t){"/"===e[0]&&0!==e.indexOf(g)&&(e=g+(y?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(g,"")||"/",y&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?o(e.slice(n+1)):"",this.pathname=o(~n?e.slice(0,n):e),this.params={},this.hash="",!y){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=r[0],this.hash=o(r[1])||"",this.querystring=this.querystring.split("#")[0]}}function s(e,t){t=t||{},this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=p(this.path,this.keys=[],t.sensitive,t.strict)}function u(e){if(1===c(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!==t.nodeName;)t=t.parentNode;if(t&&"A"===t.nodeName&&!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var i=t.getAttribute("href");if((y||t.pathname!==v.pathname||!t.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!t.target&&f(t.href)){var o=t.pathname+t.search+(t.hash||"");"undefined"!=typeof n&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o;0===o.indexOf(g)&&(o=o.substr(g.length)),y&&(o=o.replace("#!","")),g&&a===o||(e.preventDefault(),r.show(a))}}}}function c(e){return e=e||window.event,null===e.which?e.button:e.which}function f(e){var t=v.protocol+"//"+v.hostname;return v.port&&(t+=":"+v.port),e&&0===e.indexOf(t)}var p=e("path-to-regexp");t.exports=r;var h,d,l="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",v="undefined"!=typeof window&&(window.history.location||window.location),w=!0,m=!0,g="",y=!1;r.callbacks=[],r.exits=[],r.current="",r.len=0,r.base=function(e){return 0===arguments.length?g:void(g=e)},r.start=function(e){if(e=e||{},!h&&(h=!0,!1===e.dispatch&&(w=!1),!1===e.decodeURLComponents&&(m=!1),!1!==e.popstate&&window.addEventListener("popstate",x,!1),!1!==e.click&&document.addEventListener(l,u,!1),!0===e.hashbang&&(y=!0),w)){var t=y&&~v.hash.indexOf("#!")?v.hash.substr(2)+v.search:v.pathname+v.search+v.hash;r.replace(t,null,!0,w)}},r.stop=function(){h&&(r.current="",r.len=0,h=!1,document.removeEventListener(l,u,!1),window.removeEventListener("popstate",x,!1))},r.show=function(e,t,n,i){var o=new a(e,t);return r.current=o.path,!1!==n&&r.dispatch(o),!1!==o.handled&&!1!==i&&o.pushState(),o},r.back=function(e,t){r.len>0?(history.back(),r.len--):e?setTimeout(function(){r.show(e,t)}):setTimeout(function(){r.show(g,t)})},r.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&r(e,function(e){setTimeout(function(){r.replace(t)},0)}),"string"==typeof e&&"undefined"==typeof t&&setTimeout(function(){r.replace(e)},0)},r.replace=function(e,t,n,i){var o=new a(e,t);return r.current=o.path,o.init=n,o.save(),!1!==i&&r.dispatch(o),o},r.dispatch=function(e){function t(){var e=r.exits[s++];return e?void e(o,t):n()}function n(){var t=r.callbacks[a++];return e.path!==r.current?void(e.handled=!1):t?void t(e,n):i(e)}var o=d,a=0,s=0;d=e,o?t():n()},r.exit=function(e,t){if("function"==typeof e)return r.exit("*",e);for(var n=new s(e),i=1;i<arguments.length;++i)r.exits.push(n.middleware(arguments[i]))},r.Context=a,a.prototype.pushState=function(){r.len++,history.pushState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},a.prototype.save=function(){history.replaceState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},r.Route=s,s.prototype.middleware=function(e){var t=this;return function(n,r){return t.match(n.path,n.params)?e(n,r):void r()}},s.prototype.match=function(e,t){var n=this.keys,r=e.indexOf("?"),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;for(var s=1,u=a.length;u>s;++s){var c=n[s-1],f=o(a[s]);void 0===f&&hasOwnProperty.call(t,c.name)||(t[c.name]=f)}return!0};var x=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e)if(t.state){var n=t.state.path;r.replace(n,t.state)}else r.show(v.pathname+v.hash,void 0,void 0,!1)}}();r.sameOrigin=f}).call(this,e("_process"))},{_process:2,"path-to-regexp":3}],2:[function(e,t,n){function r(){}var i=t.exports={};i.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.MutationObserver,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var r=[];if(t){var i=document.createElement("div"),o=new MutationObserver(function(){var e=r.slice();r.length=0,e.forEach(function(e){e()})});return o.observe(i,{attributes:!0}),function(e){r.length||i.setAttribute("yes","no"),r.push(e)}}return n?(window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(e){r.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),i.title="browser",i.browser=!0,i.env={},i.argv=[],i.on=r,i.addListener=r,i.once=r,i.off=r,i.removeListener=r,i.removeAllListeners=r,i.emit=r,i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],3:[function(e,t,n){function r(e){for(var t,n=[],r=0,i=0,o="";null!=(t=w.exec(e));){var a=t[0],u=t[1],c=t.index;if(o+=e.slice(i,c),i=c+a.length,u)o+=u[1];else{o&&(n.push(o),o="");var f=t[2],p=t[3],h=t[4],d=t[5],l=t[6],v=t[7],m="+"===l||"*"===l,g="?"===l||"*"===l,y=f||"/",x=h||d||(v?".*":"[^"+y+"]+?");n.push({name:p||r++,prefix:f||"",delimiter:y,optional:g,repeat:m,pattern:s(x)})}}return i<e.length&&(o+=e.substr(i)),o&&n.push(o),n}function i(e){return o(r(e))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(n){for(var r="",i=n||{},o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var s,u=i[a.name];if(null==u){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(v(u)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+u+'"');if(0===u.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<u.length;c++){if(s=encodeURIComponent(u[c]),!t[o].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=(0===c?a.prefix:a.delimiter)+s}}else{if(s=encodeURIComponent(u),!t[o].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=a.prefix+s}}else r+=a}return r}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function c(e){return e.sensitive?"":"i"}function f(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return u(e,t)}function p(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(l(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",c(n));return u(o,t)}function h(e,t,n){for(var i=r(e),o=d(i,n),a=0;a<i.length;a++)"string"!=typeof i[a]&&t.push(i[a]);return u(o,t)}function d(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,i="",o=e[e.length-1],s="string"==typeof o&&/\/$/.test(o),u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)i+=a(f);else{var p=a(f.prefix),h=f.pattern;f.repeat&&(h+="(?:"+p+h+")*"),h=f.optional?p?"(?:"+p+"("+h+"))?":"("+h+")?":p+"("+h+")",i+=h}}return n||(i=(s?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=r?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+i,c(t))}function l(e,t,n){return t=t||[],v(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?f(e,t,n):v(e)?p(e,t,n):h(e,t,n)}var v=e("isarray");t.exports=l,t.exports.parse=r,t.exports.compile=i,t.exports.tokensToFunction=o,t.exports.tokensToRegExp=d;var w=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:4}],4:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}]},{},[1])(1)});