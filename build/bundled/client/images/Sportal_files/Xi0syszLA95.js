self.CavalryLogger&&CavalryLogger.start_js(["phu9G"]),__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],function(t,e,i,n,s,r){e.__markCompiled&&e.__markCompiled();var o={send:function(t,i){var n=(e("Form").getAttribute(t,"method")||"GET").toUpperCase();i=e("Parent").byTag(i,"button")||i;var s=e("Parent").byClass(i,"stat_elem")||t;if(e("CSS").hasClass(s,"async_saving"))return null;if(i&&(i.form!==t||"INPUT"!=i.nodeName&&"BUTTON"!=i.nodeName||"submit"!=i.type)){var r=e("DOMQuery").scry(t,".enter_submit_target")[0];r&&(i=r)}var o=e("Form").serialize(t,i);e("Form").setDisabled(t,!0);var a=e("Form").getAttribute(t,"ajaxify")||e("Form").getAttribute(t,"action"),h=!!e("Form").getAttribute(t,"data-cors");e("trackReferrer")(t,a);var u=(new(e("AsyncRequest"))).setAllowCrossOrigin(h).setURI(a).setData(o).setNectarModuleDataSafe(t).setReadOnly("GET"==n).setMethod(n).setRelativeTo(t).setStatusElement(s).setInitialHandler(e("Form").setDisabled.bind(null,t,!1)).setHandler(function(i){e("Event").fire(t,"success",{response:i})}).setErrorHandler(function(i){e("Event").fire(t,"error",{response:i})!==!1&&e("AsyncResponse").defaultErrorHandler(i)}).setFinallyHandler(e("Form").setDisabled.bind(null,t,!1));return u.send(),u}};s.exports=o},null),__d("WeakToken",["CSS","Token"],function(t,e,i,n,s,r){function o(){"use strict";a.apply(this,arguments)}var a,h;e.__markCompiled&&e.__markCompiled(),a=babelHelpers.inherits(o,e("Token")),h=a&&a.prototype,o.prototype.createElement=function(){"use strict";var t=h.createElement.call(this,!0,"UFIWeakReferenceIcon");return e("CSS").addClass(t,"uiTokenWeakReference"),t},s.exports=o},null),__d("Tokenizer",["Arbiter","ArbiterMixin","CSS","DataStore","DOM","DOMQuery","Event","Focus","Input","Keys","Parent","StickyPlaceholderInput","Style","TextMetrics","Token","UserAgent_DEPRECATED","WeakToken","createObjectFrom","emptyFunction","mixin"],function(t,e,i,n,s,r){function o(t,i,n){"use strict";h.constructor.call(this),this.element=t,this.typeahead=i,this.input=i.getCore().getElement(),n&&this.init(n.tokenarea,n.param_name,n.initial_info,n.options),e("DataStore").set(this.element,"Tokenizer",this)}var a,h;e.__markCompiled&&e.__markCompiled();var u=20;a=babelHelpers.inherits(o,e("mixin")(e("ArbiterMixin"))),h=a&&a.prototype,o.prototype.init=function(t,i,n,s){"use strict";this._handleEvents=this.handleEvents.bind(this),this.init=e("emptyFunction"),this.setTokenarea(t),this.paramName=i,this.placeholder||(this.placeholder=this.input.getAttribute("data-placeholder")||this.input.getAttribute("placeholder")||""),Object.assign(this,s),this.initEvents(),this.initTypeahead(),this.reset(n),this.initBehaviors(),setTimeout(this.adjustWidth.bind(this),0),e("Arbiter").inform("Tokenizer/init",this,e("Arbiter").BEHAVIOR_PERSISTENT),this.inform("init",{tokens:this.getTokens()})},o.prototype.reset=function(t){"use strict";this.tokens=[],this.unique={},t?this.populate(t):e("DOM").empty(this.tokenarea),this.updateTokenarea()},o.prototype.populate=function(t){"use strict";var i=[];this.tokens=this.getTokenElements().map(function(e,n){var s=t[n];return i.push(this._tokenKey(s)),this.createToken(s,e)},this),this.unique=e("createObjectFrom")(i,this.tokens)},o.prototype.setTokenarea=function(t){"use strict";var i=!this.tokenarea;if(t!==this.tokenarea){if(this.tokenarea){e("DOM").remove(this.tokenarea);for(var n in this._tokenareaListeners)this._tokenareaListeners[n].remove()}this._tokenareaListeners=e("Event").listen(t,{click:this._handleEvents,keydown:this._handleEvents}),this.tokenarea=t}i||this.reset()},o.prototype.getElement=function(){"use strict";return this.element},o.prototype.getTypeahead=function(){"use strict";return this.typeahead},o.prototype.getInput=function(){"use strict";return this.input},o.prototype.initBehaviors=function(){"use strict";if(this.behaviors=this.behaviors||[],this.behaviors instanceof Array)this.behaviors.forEach(function(t){t.behavior(this,t.config)}.bind(this));else for(var t in this.behaviors||{}){var e=window.TokenizerBehaviors&&window.TokenizerBehaviors[t];e.call(null,this,this.behaviors[t])}},o.prototype.initTypeahead=function(){"use strict";var t=this.typeahead.getCore();if(t.resetOnSelect=!0,t.setValueOnSelect=!1,t.preventFocusChangeOnTab=!0,this.inline){var i=this.typeahead.getView();e("CSS").addClass(i.getElement(),"uiInlineTokenizerView")}this.typeahead.subscribe("select",function(t,e){return this.handleSelect(e)}.bind(this)),this.typeahead.subscribe("blur",this.handleBlur.bind(this))},o.prototype.handleBlur=function(t){"use strict";this.inform("blur",{event:t}),this.updatePlaceholder()},o.prototype.handleSelect=function(t){"use strict";var e=t.selected;"uid"in e&&(this.updateInput(),this.addToken(this.createToken(e)))},o.prototype.initEvents=function(){"use strict";var t=e("UserAgent_DEPRECATED").firefox()<4?"keypress":"keydown";e("Event").listen(this.input,"paste",this.paste.bind(this)),e("Event").listen(this.input,t,this.keydown.bind(this))},o.prototype.handleEvents=function(t){"use strict";var i=t.getTarget(),n=i&&this.getTokenElementFromTarget(i);n&&("keydown"==t.type&&e("Event").getKeyCode(t)!=e("Keys").RETURN||this.processEvents(t,i,n))},o.prototype.processEvents=function(t,i,n){"use strict";if(e("Parent").byClass(i,"remove")){var s=n.nextSibling;s=s&&e("DOMQuery").scry(n.nextSibling,".remove")[0];var r=this.getTokenFromElement(n);r=this.addTokenData(r,i),this.removeToken(r),this.focusOnTokenRemoval(t,s),t.kill()}},o.prototype.focusOnTokenRemoval=function(t,i){"use strict";e("Focus").set("keydown"==t.type&&i||this.input)},o.prototype.addTokenData=function(t,e){"use strict";return t},o.prototype.keydown=function(t){"use strict";this.inform("keydown",{event:t});var i=e("Event").getKeyCode(t),n=this.input;if(this.inline&&i==e("Keys").BACKSPACE&&e("Input").isEmpty(n)){var s=this.getLastToken();s&&s.isRemovable()&&this.removeToken(s)}this.updateInput()},o.prototype.paste=function(t){"use strict";this.inform("paste",{event:t}),this.updateInput(!0)},o.prototype.focusInput=function(){"use strict";e("Focus").set(this.input)},o.prototype.updateInput=function(t){"use strict";this.inline&&(setTimeout(function(){this.adjustWidth(this.input.value),t&&(this.input.value=this.input.value)}.bind(this),20),e("StickyPlaceholderInput").setPlaceholderText(this.input,""),this.inform("resize"))},o.prototype.setPlaceholder=function(t){"use strict";this.placeholder=t,this.stickyPlaceholder&&e("StickyPlaceholderInput").setPlaceholderText(this.input,t),this.updatePlaceholder()},o.prototype.updatePlaceholder=function(){"use strict";if(this.inline&&!this.input.value){var t=!this.tokens.length,i="";t||this.stickyPlaceholder?(this.adjustWidth(this.placeholder),i=this.placeholder):this.adjustWidth(this.input.value),e("StickyPlaceholderInput").setPlaceholderText(this.input,i)}},o.prototype.adjustWidth=function(t){"use strict";if(this.inline&&this._getIsInDOM()){t||""!==this.input.value||(t=this.placeholder);var i=u;if(t!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var n=e("Style").getFloat(this.getElement(),"width"),s=this._getMetrics().measure(t);i=s.width+this._getWidthOffset()+10,i=i>=n?n:i}e("Style").set(this.input,"width",i+"px"),this.inform("resize"),e("Arbiter").inform("reflow")}},o.prototype.getToken=function(t){"use strict";return this.unique[t]||null},o.prototype.getTokens=function(){"use strict";return this.tokens||[]},o.prototype.getTokenElements=function(){"use strict";return e("DOMQuery").scry(this.tokenarea,"span.uiToken")},o.prototype.getTokenElementFromTarget=function(t){"use strict";return e("Parent").byClass(t,"uiToken")},o.prototype.getTokenFromElement=function(t){"use strict";return e("DataStore").get(t,"Token")},o.prototype.getTokenValues=function(){"use strict";return this.tokens?this.tokens.map(function(t){return t.getValue()}):[]},o.prototype.getFirstToken=function(){"use strict";return this.tokens[0]||null},o.prototype.getLastToken=function(){"use strict";return this.tokens[this.tokens.length-1]||null},o.prototype.hasMaxTokens=function(){"use strict";return this.maxTokens&&this.maxTokens<=this.tokens.length},o.prototype.createToken=function(t,i){"use strict";var n=this.getToken(this._tokenKey(t));return n||(n=t.weak_reference?new(e("WeakToken"))(t,this.paramName):new(e("Token"))(t,this.paramName)),i&&n.setElement(i),n},o.prototype.addToken=function(t){"use strict";if(!this.hasMaxTokens()){var i=this._tokenKey(t.getInfo());i in this.unique||(this.unique[i]=t,this.tokens.push(t),this.insertToken(t),this.updateTokenarea(),this.inform("addToken",t),this.inform("changeTokens"),e("Arbiter").inform("Form/change",{node:this.element}))}},o.prototype.insertToken=function(t){"use strict";e("DOM").appendContent(this.tokenarea,t.getElement())},o.prototype.removeToken=function(t){"use strict";if(t){var i=this.tokens.indexOf(t);0>i||(this.tokens.splice(this.tokens.indexOf(t),1),delete this.unique[this._tokenKey(t.getInfo())],e("DOM").remove(t.getElement()),this.updateTokenarea(),this.inform("removeToken",t),this.inform("changeTokens"),e("Arbiter").inform("Form/change",{node:this.element}))}},o.prototype.removeAllTokens=function(){"use strict";this.reset(),this.inform("changeTokens"),this.inform("removeAllTokens")},o.prototype.updateTokenarea=function(){"use strict";var t=this.typeahead.getCore(),i=this.getTokenValues();this.excludeDuplicates&&(this._exclusions||(this._exclusions=t.getExclusions()),t.setExclusions(i.concat(this._exclusions))),t.setEnabled(!this.hasMaxTokens()),this.updateTokenareaVisibility(),this.updatePlaceholder(),this.inform("resize"),e("Arbiter").inform("reflow")},o.prototype.updateTokenareaVisibility=function(){"use strict";e("CSS").conditionShow(this.tokenarea,0!==this.tokens.length)},o.prototype._tokenKey=function(t){"use strict";return t.uid+(t.freeform?":":"")},o.prototype._getWidthOffset=function(){"use strict";if(null===this._widthOffset){var t=this.input.clientWidth,i=e("Style").getFloat(this.input,"width");t==i?this._widthOffset=e("Style").getFloat(this.input,"paddingLeft")+e("Style").getFloat(this.input,"paddingRight"):this._widthOffset=0}return this._widthOffset},o.prototype._getMetrics=function(){"use strict";return this._metrics||(this._metrics=new(e("TextMetrics"))(this.input,this.inline)),this._metrics},o.prototype._getIsInDOM=function(){"use strict";return this._isInDOM||(this._isInDOM=e("DOMQuery").contains(document.body,this.input))},o.getInstance=function(t){"use strict";var i=e("Parent").byClass(t,"uiTokenizer");return i?e("DataStore").get(i,"Tokenizer"):null},o.init=function(t,e){"use strict";t.init(e.tokenarea,e.param_name,e.initial_info,e.options)},Object.assign(o.prototype,{inline:!1,maxTokens:null,excludeDuplicates:!0,placeholder:"",_widthOffset:null,_metrics:null}),s.exports=o},null);