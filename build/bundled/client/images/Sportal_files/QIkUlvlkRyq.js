self.CavalryLogger&&CavalryLogger.start_js(["qCa8/"]),__d("AdsNUXController",["invariant","AsyncRequest","React","ReactDOM","abstractMethod","cloneWithProps_DEPRECATED"],function(t,e,o,n,i,r,s){"use strict";function a(){this.$AdsNUXController1()}e.__markCompiled&&e.__markCompiled(),a.prototype.complete=function(t){var o=this.__getUnreadStories(),n=o[t];n||(n=this.$AdsNUXController2&&this.$AdsNUXController2[t]),n&&n.hide_uri&&(new(e("AsyncRequest"))).setURI(n.hide_uri).send(),delete o[t]},a.prototype.display=function(t){this.$AdsNUXController3&&(clearTimeout(this.$AdsNUXController3),this.$AdsNUXController3=null),this.__loadComponent(t.name,function(e){this.$AdsNUXController4=t,this.$AdsNUXController5=e,this.$AdsNUXController6=!0,this.$AdsNUXController7()}.bind(this));var e=this.__getUnreadStories();this.$AdsNUXController2||(this.$AdsNUXController2=[]),this.$AdsNUXController2[t.name]=t,delete e[t.name]},a.prototype.displayByName=function(t){var e=this.__getUnreadStories(),o=e[t]||{name:t};this.display(o)},a.prototype.hasSeen=function(t){var e=this.__getUnreadStories();return!e[t]},a.prototype.displayIfNotSeen=function(t,e){if(!this.hasSeen(t)){var o=this.__getUnreadStories(),n=o[t];e&&(n.onCompletedCallback=e),n?void 0:s(0),this.display(n)}},a.prototype.$AdsNUXController7=function(){var t=this.$AdsNUXController5;t?void 0:s(0);var o=e("React").createElement(t,{visible:this.$AdsNUXController6,onCompleted:this.$AdsNUXController8.bind(this),onHide:this.$AdsNUXController9.bind(this)}),n=this.__loadComponentProperties(this.$AdsNUXController4.name);n&&(o=e("cloneWithProps_DEPRECATED")(o,n)),e("ReactDOM").render(o,this.$AdsNUXController10,function(){this.__postComponentRender(this.$AdsNUXController4.name,this.$AdsNUXController6)}.bind(this))},a.prototype.$AdsNUXController8=function(){this.$AdsNUXController4&&(this.$AdsNUXController4.onCompletedCallback&&this.$AdsNUXController4.onCompletedCallback(),this.$AdsNUXController4.hide_uri&&(new(e("AsyncRequest"))).setURI(this.$AdsNUXController4.hide_uri).send())},a.prototype.$AdsNUXController9=function(){this.$AdsNUXController6=!1,this.$AdsNUXController7(),this.$AdsNUXController3=window.setTimeout(function(){e("ReactDOM").unmountComponentAtNode(this.$AdsNUXController10)}.bind(this),2e3)},a.prototype.$AdsNUXController1=function(){this.$AdsNUXController10=document.createElement("div"),this.$AdsNUXController10.id="nux_container",document.body.appendChild(this.$AdsNUXController10)},a.prototype.__loadComponent=function(t,o){e("abstractMethod")("AdsNUXController","__loadComponent")},a.prototype.__postComponentRender=function(t,e){},a.prototype.__loadComponentProperties=function(t){return null},a.prototype.__getUnreadStories=function(){e("abstractMethod")("AdsNUXController","__getUnreadStories")},i.exports=a},null),__d("AdsNUXTourConfig",[],function(t,e,o,n,i,r){"use strict";function s(t){this.$AdsNUXTourConfig1=!1,this.$AdsNUXTourConfig2=t,this.$AdsNUXTourConfig5=[],this.$AdsNUXTourConfig6=[]}e.__markCompiled&&e.__markCompiled(),s.prototype.getTourID=function(){return this.$AdsNUXTourConfig2},s.prototype.setLeaveTitle=function(t){return this.$AdsNUXTourConfig3=t,this},s.prototype.getLeaveTitle=function(){return this.$AdsNUXTourConfig3},s.prototype.setLeaveText=function(t){return this.$AdsNUXTourConfig4=t,this},s.prototype.getLeaveText=function(){return this.$AdsNUXTourConfig4},s.prototype.setIsLightweight=function(t){return this.$AdsNUXTourConfig1=t,this},s.prototype.isLightweight=function(){return this.$AdsNUXTourConfig1},s.prototype.addStep=function(t){return this.$AdsNUXTourConfig5.push(t),this},s.prototype.getTourSize=function(){return this.$AdsNUXTourConfig5.length},s.prototype.getLastStepIndex=function(){return this.getTourSize()-1},s.prototype.getCountedStepNumber=function(){var t=0;return this.$AdsNUXTourConfig5.forEach(function(e){e.getIsCounted()&&(t+=1)}),t},s.prototype.getStep=function(t){return this.$AdsNUXTourConfig5[t]||null},s.prototype.getAllSteps=function(){return this.$AdsNUXTourConfig5},s.prototype.setTerminalActions=function(t){return this.$AdsNUXTourConfig6=t,this},s.prototype.getTerminalActions=function(){return this.$AdsNUXTourConfig6},i.exports=s},null),__d("AdsNUXTourStepConfigBase",[],function(t,e,o,n,i,r){"use strict";function s(){this.__completeAction=null,this.__isCounted=!0,this.__verifyUIState=function(t){return!0},this.__setupAction=function(t){}}e.__markCompiled&&e.__markCompiled(),s.prototype.getCompleteAction=function(){return this.__completeAction},s.prototype.getIsCounted=function(){return this.__isCounted},s.prototype.__setCompleteAction=function(t){this.__completeAction=t},s.prototype.__setIsCounted=function(t){this.__isCounted=t},s.prototype.__setSetupAction=function(t){this.__setupAction=t},s.prototype.__setVerifyUIState=function(t){this.__verifyUIState=t},s.prototype.getSetupAction=function(){return this.__setupAction},s.prototype.getVerifyUIState=function(){return this.__verifyUIState},i.exports=s},null),__d("AdsNUXTourStepConfig",["AdsNUXTourStepConfigBase"],function(t,e,o,n,i,r){"use strict";function s(){l.constructor.call(this),this.$AdsNUXTourStepConfig1=null,this.$AdsNUXTourStepConfig2=null,this.$AdsNUXTourStepConfig3=null,this.$AdsNUXTourStepConfig5={},this.$AdsNUXTourStepConfig6=0,this.$AdsNUXTourStepConfig7=0,this.$AdsNUXTourStepConfig8=!1,this.$AdsNUXTourStepConfig9=null,this.$AdsNUXTourStepConfig10=!1,this.$AdsNUXTourStepConfig11=null,this.$AdsNUXTourStepConfig12={},this.$AdsNUXTourStepConfig13=null,this.__verifyUIState=p,this.__setupAction=u}var a,l;e.__markCompiled&&e.__markCompiled();var u=function(t){},p=function(t){return!0};a=babelHelpers.inherits(s,e("AdsNUXTourStepConfigBase")),l=a&&a.prototype,s.prototype.setContent=function(t){return this.$AdsNUXTourStepConfig2=t,this},s.prototype.getContent=function(){return this.$AdsNUXTourStepConfig2},s.prototype.setClassName=function(t){return this.$AdsNUXTourStepConfig4=t,this},s.prototype.getClassName=function(){return this.$AdsNUXTourStepConfig4},s.prototype.setContextSelector=function(t){return this.$AdsNUXTourStepConfig3=t,this},s.prototype.getContextSelector=function(){return this.$AdsNUXTourStepConfig3},s.prototype.setCustomLayerBehaviors=function(t){return this.$AdsNUXTourStepConfig5=t,this},s.prototype.getCustomLayerBehaviors=function(){return this.$AdsNUXTourStepConfig5},s.prototype.setDialogOffsetX=function(t){return this.$AdsNUXTourStepConfig6=t,this},s.prototype.getDialogOffsetX=function(){return this.$AdsNUXTourStepConfig6},s.prototype.setDialogOffsetY=function(t){return this.$AdsNUXTourStepConfig7=t,this},s.prototype.getDialogOffsetY=function(){return this.$AdsNUXTourStepConfig7},s.prototype.setAlignment=function(t){return this.$AdsNUXTourStepConfig1=t,this},s.prototype.getAlignment=function(){return this.$AdsNUXTourStepConfig1},s.prototype.setHasNextButton=function(t){return this.$AdsNUXTourStepConfig8=t,this},s.prototype.hasNextButton=function(){return this.$AdsNUXTourStepConfig8},s.prototype.setIsModal=function(t){return this.$AdsNUXTourStepConfig10=t,this},s.prototype.isModal=function(){return this.$AdsNUXTourStepConfig10},s.prototype.setInsertParent=function(t){return this.$AdsNUXTourStepConfig9=t,this},s.prototype.getInsertParent=function(){return this.$AdsNUXTourStepConfig9},s.prototype.setBlindPadding=function(t){return this.$AdsNUXTourStepConfig12=t,this},s.prototype.getBlindPadding=function(){return this.$AdsNUXTourStepConfig12},s.prototype.setPosition=function(t){return this.$AdsNUXTourStepConfig13=t,this},s.prototype.getPosition=function(){return this.$AdsNUXTourStepConfig13},s.prototype.setCompleteAction=function(t){return this.__setCompleteAction(t),this},s.prototype.setOnViewCallback=function(t){return this.$AdsNUXTourStepConfig11=t,this},s.prototype.getOnViewCallback=function(){return this.$AdsNUXTourStepConfig11},s.prototype.setIsCounted=function(t){return this.__setIsCounted(t),this},s.prototype.setSetupAction=function(t){return this.__setSetupAction(t),this},s.prototype.setVerifyUIState=function(t){return this.__setVerifyUIState(t),this},i.exports=s},null),__d("AdsNUXTourWelcomeStepConfig",["AdsNUXTourStepConfigBase"],function(t,e,o,n,i,r){"use strict";function s(){l.constructor.call(this),this.__verifyUIState=p,this.__setupAction=u}var a,l;e.__markCompiled&&e.__markCompiled();var u=function(t){},p=function(t){return!0};a=babelHelpers.inherits(s,e("AdsNUXTourStepConfigBase")),l=a&&a.prototype,s.prototype.setContentText=function(t){return this.$AdsNUXTourWelcomeStepConfig1=t,this},s.prototype.getContentText=function(){return this.$AdsNUXTourWelcomeStepConfig1},s.prototype.setTitleText=function(t){return this.$AdsNUXTourWelcomeStepConfig2=t,this},s.prototype.getTitleText=function(){return this.$AdsNUXTourWelcomeStepConfig2},s.prototype.setCompleteAction=function(t){return this.__setCompleteAction(t),this},s.prototype.setIsCounted=function(t){return this.__setIsCounted(t),this},s.prototype.setSetupAction=function(t){return this.__setSetupAction(t),this},s.prototype.setVerifyUIState=function(t){return this.__setVerifyUIState(t),this},s.prototype.getWelcomeDialogReactClass=function(){return this.$AdsNUXTourWelcomeStepConfig3},s.prototype.setWelcomeDialogReactClass=function(t){return this.$AdsNUXTourWelcomeStepConfig3=t,this},i.exports=s},null),__d("AdsNUXTourStore",["AdsActionTypes","AdsDispatcher","FluxStore","adsBaseStoreMixin"],function(t,e,o,n,i,r){"use strict";function s(){l.constructor.call(this,e("AdsDispatcher")),e("adsBaseStoreMixin")(this),this.$AdsNUXTourStoreClass1=0,this.$AdsNUXTourStoreClass2=0,this.$AdsNUXTourStoreClass3=null}var a,l;e.__markCompiled&&e.__markCompiled(),a=babelHelpers.inherits(s,e("FluxStore")),l=a&&a.prototype,s.prototype.getStoreName=function(){return"AdsNUXTourStore"},s.prototype.getCurrentCountedStepIndex=function(){return this.$AdsNUXTourStoreClass1},s.prototype.getCurrentStepIndex=function(){return this.$AdsNUXTourStoreClass2},s.prototype.getTourConfig=function(){return this.$AdsNUXTourStoreClass3},s.prototype.getCurrentStepConfig=function(){var t=this.$AdsNUXTourStoreClass3;return t?t.getStep(this.getCurrentStepIndex()):null},s.prototype.isTourOver=function(){return this.$AdsNUXTourStoreClass3?this.$AdsNUXTourStoreClass3.getTourSize()<=this.$AdsNUXTourStoreClass2:null},s.prototype.getCountedTourSize=function(){return this.$AdsNUXTourStoreClass3?this.$AdsNUXTourStoreClass3.getCountedStepNumber():null},s.prototype.getTourSize=function(){return this.$AdsNUXTourStoreClass3?this.$AdsNUXTourStoreClass3.getTourSize():null},s.prototype.__onDispatch=function(t){var o=t.action,n=this.getCurrentStepConfig(),i=n?n.getCompleteAction():null;if(this.$AdsNUXTourStoreClass4&&-1!==this.$AdsNUXTourStoreClass4.indexOf(o.type))return this.$AdsNUXTourStoreClass3=null,void this.__emitChange();if(n&&i&&o.type===i)return void this.$AdsNUXTourStoreClass5();switch(o.type){case e("AdsActionTypes").NUX_TOUR.STARTED:this.$AdsNUXTourStoreClass3=o.tourConfig,this.$AdsNUXTourStoreClass1=0,this.$AdsNUXTourStoreClass2=0,this.$AdsNUXTourStoreClass3&&(this.$AdsNUXTourStoreClass4=this.$AdsNUXTourStoreClass3.getTerminalActions()),this.$AdsNUXTourStoreClass6(),this.__emitChange();break;case e("AdsActionTypes").NUX_TOUR.NEXT_STEP_CLICKED:this.$AdsNUXTourStoreClass5();break;case e("AdsActionTypes").NUX_TOUR.FINISHED:case e("AdsActionTypes").NUX_TOUR.ABANDONED:this.$AdsNUXTourStoreClass3=null,this.__emitChange();break;case e("AdsActionTypes").NUX_TOUR.JUMP_TO_STEP:if(this.$AdsNUXTourStoreClass2=o.step,this.$AdsNUXTourStoreClass1=0,this.$AdsNUXTourStoreClass3){var r=this.$AdsNUXTourStoreClass3.getAllSteps();r&&r.forEach(function(t,e){e<this.$AdsNUXTourStoreClass2&&t.getIsCounted()&&(this.$AdsNUXTourStoreClass1+=1)}.bind(this))}this.__emitChange()}},s.prototype.$AdsNUXTourStoreClass5=function(){var t=this.getCurrentStepConfig();t&&t.getIsCounted()&&this.$AdsNUXTourStoreClass1++,this.$AdsNUXTourStoreClass2++,this.$AdsNUXTourStoreClass6(),this.__emitChange()},s.prototype.$AdsNUXTourStoreClass6=function(){var t=this.getCurrentStepConfig();if(t&&t.getOnViewCallback){var e=t.getOnViewCallback();e&&e()}};var u=new s;i.exports=u},null),__d("AdsNUXTourAction",["AdsActionTypes","AdsDispatcher","AdsNUXTourStore"],function(t,e,o,n,i,r){"use strict";e.__markCompiled&&e.__markCompiled();var s={startTour:function(t){e("AdsDispatcher").handleUpdateFromViewAction({type:e("AdsActionTypes").NUX_TOUR.STARTED,tourConfig:t,logData:{tour_id:t.getTourID()}})},nextStep:function(){e("AdsDispatcher").handleUpdateFromViewAction({type:e("AdsActionTypes").NUX_TOUR.NEXT_STEP_CLICKED,logData:s._getLogData()})},abandonCurrentTour:function(){e("AdsDispatcher").handleUpdateFromViewAction({type:e("AdsActionTypes").NUX_TOUR.ABANDONED,logData:s._getLogData()})},jumpToStep:function(t){e("AdsDispatcher").handleUpdateFromViewAction({type:e("AdsActionTypes").NUX_TOUR.JUMP_TO_STEP,step:t,logData:s._getLogData()})},finishTour:function(t){e("AdsDispatcher").handleUpdateFromViewAction({type:e("AdsActionTypes").NUX_TOUR.FINISHED,step:t,logData:s._getLogData()})},_getLogData:function(){var t=e("AdsNUXTourStore").getTourConfig();return{tour_id:t?t.getTourID():null,step:e("AdsNUXTourStore").getCurrentStepIndex()}}};i.exports=s},null),__d("FBMoreLink.react",["cx","fbt","ix","Image.react","Link.react","React"],function(t,e,o,n,i,r,s,a,l){"use strict";function u(){for(var t,e,o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];return t=(e=d.constructor).call.apply(e,[this].concat(n)),this.state={isCollapsed:null!=this.props.isInitiallyCollapsed?this.props.isInitiallyCollapsed:!0},this.onClick=function(){var t=this.$FBMoreLink1();this.setState({isCollapsed:!t}),this.props.onClick(!t)}.bind(this),this.$FBMoreLink1=function(){return null!=this.props.isCollapsed?this.props.isCollapsed:this.state.isCollapsed}.bind(this),t}var p,d;e.__markCompiled&&e.__markCompiled();var c=e("React").PropTypes;p=babelHelpers.inherits(u,e("React").Component),d=p&&p.prototype,u.prototype.render=function(){var t=this.$FBMoreLink1();if(!this.props.allowToggle&&!t)return e("React").createElement("div",null);var o=this.props.moreLabel,n=l("/images/ui/xhp/link/more/down_caret.gif");return t||(o=this.props.lessLabel,n=l("/images/ui/xhp/link/more/up_caret.gif")),e("React").createElement(e("Link.react"),babelHelpers["extends"]({},this.props,{onClick:this.onClick}),e("React").createElement("span",{className:"_554b"},o),e("React").createElement(e("Image.react"),{className:"_554d",src:n}))},u.propTypes={allowToggle:c.bool,moreLabel:c.node,lessLabel:c.node,isInitiallyCollapsed:c.bool,isCollapsed:c.bool,onClick:c.func.isRequired},u.defaultProps=function(){var t=a._("More"),e=a._("Less");return{allowToggle:!1,moreLabel:t,lessLabel:e}}(),i.exports=u},null),__d("DeveloperSiteSaveNotifier",["csx","cx","$","CSS","DOM","UIPagelet"],function(t,e,o,n,i,r,s,a){e.__markCompiled&&e.__markCompiled();var l={notifyAndReload:function(t,e,o,n){this.reloadPageletInRelativeElement(t,e,o,n),window.scrollTo(0,0),this.notify()},notify:function(){this.toggleSaveBannerWithTimeout(5e3)},reloadPageletInRelativeElement:function(t,o,n,i){this._reloadPagelet(t,e("DOM").find(o,n),i)},reloadPageletByID:function(t,o,n){this._reloadPagelet(t,e("$")(o),n)},_reloadPagelet:function(t,o,n){var i={usePipe:!0,subdomain:"developers",jsNonblock:!0};e("UIPagelet").loadFromEndpoint(t,o,n,i)},toggleSaveBanner:function(){e("CSS").toggleClass(e("DOM").find(document,"div._5kdv"),"_5kdw")},toggleSaveBannerWithTimeout:function(t){this.toggleSaveBanner(),setTimeout(this.toggleSaveBanner,t)}};i.exports=l},null),__d("AdNetworkOptimizationNuxWelcomeDialog.react",["cx","fbt","ix","Image.react","React","XUICloseButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react"],function(t,e,o,n,i,r,s,a,l){"use strict";function u(){for(var t,o,n=arguments.length,i=Array(n),r=0;n>r;r++)i[r]=arguments[r];return t=(o=d.constructor).call.apply(o,[this].concat(i)),this.$AdNetworkOptimizationNuxWelcomeDialog1=function(){return e("React").createElement("div",{className:"clearfix _4elr"},e("React").createElement(e("XUICloseButton.react"),{className:"_4els",onClick:this.props.onCancel}))}.bind(this),this.$AdNetworkOptimizationNuxWelcomeDialog2=function(){return e("React").createElement(e("XUIDialogFooter.react"),{className:"_4elt"},e("React").createElement(e("XUIDialogButton.react"),{className:"_4elu",use:"default",onClick:this.props.onCancel,label:a._("No Thanks")}),e("React").createElement(e("XUIDialogButton.react"),{className:"_4elv",use:"confirm",onClick:this.props.onConfirm,label:a._("Start Tour")}))}.bind(this),t}var p,d;e.__markCompiled&&e.__markCompiled();var c=e("React").PropTypes;p=babelHelpers.inherits(u,e("React").PureComponent),d=p&&p.prototype,u.prototype.render=function(){return e("React").createElement(e("XUIDialog.react"),{layerHideOnBlur:!1,shown:!0,width:800},e("React").createElement(e("XUIDialogBody.react"),{className:"_4elm",useCustomPadding:!0},this.$AdNetworkOptimizationNuxWelcomeDialog1(),e("React").createElement("div",{className:"_4eln"},e("React").createElement(e("Image.react"),{className:"_4elo",src:l("/images/devsite/app/audience_network/nux_graphic.png")})),e("React").createElement("div",{className:"_4elp"},a._("Optimize your Audience Network Performance")),e("React").createElement("div",{className:"_4elq"},a._("Introducing a new tool for publishers to control CPM and fill rate performance for individual placements."))),this.$AdNetworkOptimizationNuxWelcomeDialog2())},u.propTypes={onCancel:c.func.isRequired,onConfirm:c.func.isRequired},i.exports=u},null),__d("AdNetworkOptimizationNuxConfig",["csx","cx","fbt","ix","AdsNUXTourConfig","AdsNUXTourStepConfig","AdsNUXTourWelcomeStepConfig","AdNetworkOptimizationNuxWelcomeDialog.react","DeveloperSiteSaveNotifier","React","Image.react","URI"],function(t,e,o,n,i,r,s,a,l,u){"use strict";e.__markCompiled&&e.__markCompiled();var p=new(e("AdsNUXTourConfig"))("nux__ad_network_optimization_nux").setLeaveTitle(l._("Leave the tour?")).setLeaveText(l._("You're about to leave this tour of the new Audience Network Optimization feature.")).addStep((new(e("AdsNUXTourWelcomeStepConfig"))).setWelcomeDialogReactClass(e("AdNetworkOptimizationNuxWelcomeDialog.react")).setIsCounted(!1)).addStep((new(e("AdsNUXTourStepConfig"))).setContent(l._("The Performance Optimization tool is located under the Placements tab.")).setSetupAction(function(t){var o=e("URI").getRequestURI(),n=o.getPath().match("/apps/([0-9]+)/audience-network/?([a-z]+)?"),i=n[1],r=n[2];r&&"placements"==r||e("DeveloperSiteSaveNotifier").reloadPageletByID("DeveloperAppMonetizePageletX","monetize_body",{app_id:i,page:"audience-network",tab:"placements",optimization_nux:!0})}).setContextSelector("._1gle").setHasNextButton(!0).setIsModal(!0).setBlindPadding({paddingRight:-510,paddingLeft:20,paddingTop:68,paddingBottom:-23}).setPosition("below")).addStep((new(e("AdsNUXTourStepConfig"))).setContent(l._("This feature enables you to configure the CPM and fill rate performance for individual placements. Adjust placements for higher average CPM, higher fill rate, or a balance of both.")).setContextSelector("._1glf").setHasNextButton(!0).setIsModal(!0).setBlindPadding({paddingRight:-90}).setPosition("left")).addStep((new(e("AdsNUXTourStepConfig"))).setContent(l._("Select 'Optimize for CPM' to raise the price floor for this placement. This will increase the average revenue earned per impression, but will lower your fill rate.")).setContextSelector("._1glg").setHasNextButton(!0).setIsModal(!0).setBlindPadding({paddingRight:-15}).setPosition("above")).addStep((new(e("AdsNUXTourStepConfig"))).setContent(l._("To use Audience Network's default price floor, select 'Balance CPM and Fill.' This setting enables Audience Network to optimize the placement by dynamically adjusting the price floor for your audience. We recommend this setting for new placements.")).setContextSelector("._1glh").setHasNextButton(!0).setIsModal(!0).setBlindPadding({paddingRight:-8,paddingLeft:-8}).setPosition("above")).addStep((new(e("AdsNUXTourStepConfig"))).setContent(l._("Select 'Optimize for Fill' to remove the price floor for this placement. This will maximize your fill rate, but will lower your average CPM. This is the default setting for native placements and is recommended when using Audience Network exclusively.")).setContextSelector("._1gli").setHasNextButton(!0).setIsModal(!0).setBlindPadding({paddingRight:8,paddingLeft:-10}).setPosition("above")).addStep((new(e("AdsNUXTourStepConfig"))).setContent(e("React").createElement("div",null,l._("For placements with sufficient traffic, hover over any of the optimization settings to see CPM and fill rate estimates. Estimates are based on past placement performance. Actual changes in CPM and fill rate can differ from estimates if you make other adjustments, such as changing the position of the Audience Network in your monetization stack."),e("React").createElement(e("Image.react"),{className:"_1gld",src:u("/images/devsite/app/audience_network/optimization_hover.png")}))).setContextSelector("._1glh").setHasNextButton(!0).setIsModal(!0).setBlindPadding({paddingRight:-8,paddingLeft:-8}).setPosition("left")).addStep((new(e("AdsNUXTourStepConfig"))).setContent(l._("Adjust the optimization settings of a placement by using the edit tool.")).setContextSelector("._1glj").setHasNextButton(!0).setBlindPadding({paddingBottom:8}).setIsModal(!0).setPosition("left"));i.exports=p},null),__d("DevsiteNUXController",["AdNetworkOptimizationNuxConfig","AdsNUXController","AdsNUXTourAction","Bootloader"],function(t,e,o,n,i,r){"use strict";function s(){a.apply(this,arguments)}var a,l;e.__markCompiled&&e.__markCompiled(),a=babelHelpers.inherits(s,e("AdsNUXController")),l=a&&a.prototype,s.prototype.__loadComponent=function(t,o){switch(t){case"ad_network_optimization_nux":e("Bootloader").loadModules(["AdsNUXTourContainer.react"],o,"DevsiteNUXController")}},s.prototype.__postComponentRender=function(t,o){if(o)switch(t){case"ad_network_optimization_nux":e("AdsNUXTourAction").startTour(e("AdNetworkOptimizationNuxConfig"))}},s.prototype.__getUnreadStories=function(){return{ad_network_optimization_nux:{name:"ad_network_optimization_nux"}}},i.exports=new s},null),__d("AdNetworkOnboarding",["fbt","arrayContains","CSS","DevsiteNUXController","DOM","Event","FBMoreLink.react","RangeInput","React","ReactDOM"],function(t,e,o,n,i,r,s){function a(){}e.__markCompiled&&e.__markCompiled(),a.initTaxFormSelector=function(t,e,o,n){0!==n&&t.show(""+n),e.subscribe("change",function(e,n){"0"!==n.value?t.show(n.value):t.show(o)})},a.initRemoveButton=function(t,e){e.onclick=function(){t.show(e.value)}},a.initUploader=function(t,o,n){e("CSS").hide(t),o.onclick=function(){e("CSS").show(t),e("DOM").remove(n)}},a.initCorruptionToggle=function(t,o){var n=t.firstChild,i=t.lastChild;e("CSS").hide(i),e("CSS").hide(o),t.onclick=function(){e("CSS").toggle(o),e("CSS").toggle(n),e("CSS").toggle(i)}},a.registerPopup=function(t,o){e("Event").listen(t,"mouseenter",function(t){return o.show()}),e("Event").listen(t,"mouseleave",function(t){return o.hide()})},a.registerDisplayFormatToggleListener=function(t,o,n){var i=function(){return e("arrayContains")(n,t.getValue())?"block":"none"};o.style.display=i(),t.subscribe("change",function(){o.style.display=i()})},a.registerAdvancedFieldsToggle=function(t,o){var n=s._("Show advanced options"),i=s._("Hide advanced options");o.style.display="none",e("ReactDOM").render(e("React").createElement(e("FBMoreLink.react"),{allowToggle:!0,isInitiallyCollapsed:!0,lessLabel:i,moreLabel:n,onClick:function(t){o.style.display=t?"none":"block"}}),t)},a.registerSlider=function(t,o,n,i){n.setDismissHandler(function(){e("CSS").hide(n.getRoot())}),i.setDismissHandler(function(){e("CSS").hide(i.getRoot())}),o.subscribe("change",function(){"20"===o.getValue()?(e("RangeInput").setValue(t,1),e("CSS").hide(i.getRoot()),e("CSS").show(n.getRoot())):0!=e("DOM").find(t,"input").value&&"0"!==o.getValue()&&(e("RangeInput").setValue(t,0),e("CSS").hide(n.getRoot()),e("CSS").show(i.getRoot()))})},a.initNux=function(){e("DevsiteNUXController").displayIfNotSeen("ad_network_optimization_nux")},i.exports=a},null),__d("PlatformDialogStack",["CSS","ge"],function(t,e,o,n,i,r){function s(t,e){this._root=t,this._showing=e}e.__markCompiled&&e.__markCompiled(),Object.assign(s.prototype,{getRoot:function(){return this._root},getShowing:function(){return this._showing},show:function(t){return Array.from(this._root.childNodes).forEach(e("CSS").hide,e("CSS")),e("CSS").show(e("ge")(t,this._root)),this._showing=t,this}}),i.exports=s},null);