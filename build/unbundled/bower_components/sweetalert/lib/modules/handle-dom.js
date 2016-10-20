"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var hasClass=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},addClass=function(e,t){hasClass(e,t)||(e.className+=" "+t)},removeClass=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(hasClass(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},escapeHtml=function(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},_show=function(e){e.style.opacity="",e.style.display="block"},show=function(e){if(e&&!e.length)return _show(e);for(var t=0;t<e.length;++t)_show(e[t])},_hide=function(e){e.style.opacity="",e.style.display="none"},hide=function(e){if(e&&!e.length)return _hide(e);for(var t=0;t<e.length;++t)_hide(e[t])},isDescendant=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},getTopMargin=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},fadeIn=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},fadeOut=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},fireClick=function(e){if("function"==typeof MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!1,!1),e.dispatchEvent(n)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},stopEventPropagation=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):window.event&&window.event.hasOwnProperty("cancelBubble")&&(window.event.cancelBubble=!0)};exports.hasClass=hasClass,exports.addClass=addClass,exports.removeClass=removeClass,exports.escapeHtml=escapeHtml,exports._show=_show,exports.show=show,exports._hide=_hide,exports.hide=hide,exports.isDescendant=isDescendant,exports.getTopMargin=getTopMargin,exports.fadeIn=fadeIn,exports.fadeOut=fadeOut,exports.fireClick=fireClick,exports.stopEventPropagation=stopEventPropagation;