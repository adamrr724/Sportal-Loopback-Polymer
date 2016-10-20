(function(e){function t(e){return e&&e.Object===Object?e:null}var s={"function":!0,object:!0},r=s[typeof exports]&&exports&&!exports.nodeType?exports:null,i=s[typeof module]&&module&&!module.nodeType?module:null,n=t(r&&i&&"object"==typeof global&&global),o=t(s[typeof self]&&self),u=t(s[typeof window]&&window),c=(i&&i.exports===r?r:null,t(s[typeof this]&&this)),l=n||u!==(c&&c.window)&&u||o||c||Function("return this")();"function"==typeof define&&define.amd?define(["./rx.virtualtime","exports"],function(t,s){return l.Rx=e(l,s,t),l.Rx}):"object"==typeof module&&module&&module.exports===r?module.exports=e(l,module.exports,require("./rx")):l.Rx=e(l,{},l.Rx)}).call(this,function(e,t,s,r){function i(e){this.predicate=e}function n(e){this.predicate=e}function o(e,t){var s=this;this.scheduler=e,this.messages=t,this.subscriptions=[],this.observers=[];for(var r=0,i=this.messages.length;i>r;r++){var n=this.messages[r],o=n.value;!function(t){e.scheduleAbsolute(null,n.time,function(){for(var e=s.observers.slice(0),r=0,i=e.length;i>r;r++)t.accept(e[r]);return a})}(o)}}var u=s.Observer,c=s.Observable,l=s.Notification,h=s.VirtualTimeScheduler,p=s.Disposable,a=p.empty,b=p.create,d=s.CompositeDisposable,f=s.internals.inherits,v=s.internals.isEqual;i.prototype.equals=function(e){return e===this?!0:null==e?!1:"N"!==e.kind?!1:this.predicate(e.value)},n.prototype.equals=function(e){return e===this?!0:null==e?!1:"E"!==e.kind?!1:this.predicate(e.error)};var m=s.ReactiveTest={created:100,subscribed:200,disposed:1e3,onNext:function(e,t){return"function"==typeof t?new y(e,new i(t)):new y(e,l.createOnNext(t))},onError:function(e,t){return"function"==typeof t?new y(e,new n(t)):new y(e,l.createOnError(t))},onCompleted:function(e){return new y(e,l.createOnCompleted())},subscribe:function(e,t){return new w(e,t)}},y=s.Recorded=function(e,t,s){this.time=e,this.value=t,this.comparer=s||v};y.prototype.equals=function(e){return this.time===e.time&&this.comparer(this.value,e.value)},y.prototype.toString=function(){return this.value.toString()+"@"+this.time};var w=s.Subscription=function(e,t){this.subscribe=e,this.unsubscribe=t||Number.MAX_VALUE};w.prototype.equals=function(e){return this.subscribe===e.subscribe&&this.unsubscribe===e.unsubscribe},w.prototype.toString=function(){return"("+this.subscribe+", "+(this.unsubscribe===Number.MAX_VALUE?"Infinite":this.unsubscribe)+")"};var g=s.MockDisposable=function(e){this.scheduler=e,this.disposes=[],this.disposes.push(this.scheduler.clock)};g.prototype.dispose=function(){this.disposes.push(this.scheduler.clock)};var x=function(e){function t(t){e.call(this),this.scheduler=t,this.messages=[]}f(t,e);var s=t.prototype;return s.onNext=function(e){this.messages.push(new y(this.scheduler.clock,l.createOnNext(e)))},s.onError=function(e){this.messages.push(new y(this.scheduler.clock,l.createOnError(e)))},s.onCompleted=function(){this.messages.push(new y(this.scheduler.clock,l.createOnCompleted()))},t}(u);o.prototype.then=function(e,t){var i=this;this.subscriptions.push(new w(this.scheduler.clock));var n,u=this.subscriptions.length-1,c=s.Observer.create(function(t){var l=e(t);if(l&&"function"==typeof l.then)n=l;else{var h=i.scheduler.clock;n=new o(i.scheduler,[s.ReactiveTest.onNext(h,r),s.ReactiveTest.onCompleted(h)])}var p=i.observers.indexOf(c);i.observers.splice(p,1),i.subscriptions[u]=new w(i.subscriptions[u].subscribe,i.scheduler.clock)},function(e){t(e);var s=i.observers.indexOf(c);i.observers.splice(s,1),i.subscriptions[u]=new w(i.subscriptions[u].subscribe,i.scheduler.clock)});return this.observers.push(c),n||new o(this.scheduler,this.messages)};var k=function(e){function t(t,s){e.call(this);var r,i,n=this;this.scheduler=t,this.messages=s,this.subscriptions=[],this.observers=[];for(var o=0,u=this.messages.length;u>o;o++)r=this.messages[o],i=r.value,function(e){t.scheduleAbsolute(null,r.time,function(){for(var t=n.observers.slice(0),s=0,r=t.length;r>s;s++)e.accept(t[s]);return a})}(i)}return f(t,e),t.prototype._subscribe=function(e){var t=this;this.observers.push(e),this.subscriptions.push(new w(this.scheduler.clock));var s=this.subscriptions.length-1;return b(function(){var r=t.observers.indexOf(e);t.observers.splice(r,1),t.subscriptions[s]=new w(t.subscriptions[s].subscribe,t.scheduler.clock)})},t}(c),A=function(e){function t(t,s){e.call(this),this.scheduler=t,this.messages=s,this.subscriptions=[]}return f(t,e),t.prototype._subscribe=function(e){var t,s,r=this;this.subscriptions.push(new w(this.scheduler.clock));for(var i=this.subscriptions.length-1,n=new d,o=0,u=this.messages.length;u>o;o++)t=this.messages[o],s=t.value,function(s){n.add(r.scheduler.scheduleRelative(null,t.time,function(){return s.accept(e),a}))}(s);return b(function(){r.subscriptions[i]=new w(r.subscriptions[i].subscribe,r.scheduler.clock),n.dispose()})},t}(c);return s.TestScheduler=function(e){function t(e,t){return e>t?1:t>e?-1:0}function r(){e.call(this,0,t)}return f(r,e),r.prototype.scheduleAbsolute=function(t,s,r){return s<=this.clock&&(s=this.clock+1),e.prototype.scheduleAbsolute.call(this,t,s,r)},r.prototype.add=function(e,t){return e+t},r.prototype.toAbsoluteTime=function(e){return new Date(e).getTime()},r.prototype.toRelativeTime=function(e){return e},r.prototype.startScheduler=function(e,t){t||(t={}),null==t.created&&(t.created=m.created),null==t.subscribed&&(t.subscribed=m.subscribed),null==t.disposed&&(t.disposed=m.disposed);var s,r,i=this.createObserver();return this.scheduleAbsolute(null,t.created,function(){return s=e(),a}),this.scheduleAbsolute(null,t.subscribed,function(){return r=s.subscribe(i),a}),this.scheduleAbsolute(null,t.disposed,function(){return r.dispose(),a}),this.start(),i},r.prototype.createHotObservable=function(){var e,t=arguments.length;if(Array.isArray(arguments[0]))e=arguments[0];else{e=new Array(t);for(var s=0;t>s;s++)e[s]=arguments[s]}return new k(this,e)},r.prototype.createColdObservable=function(){var e,t=arguments.length;if(Array.isArray(arguments[0]))e=arguments[0];else{e=new Array(t);for(var s=0;t>s;s++)e[s]=arguments[s]}return new A(this,e)},r.prototype.createResolvedPromise=function(e,t){return new o(this,[s.ReactiveTest.onNext(e,t),s.ReactiveTest.onCompleted(e)])},r.prototype.createRejectedPromise=function(e,t){return new o(this,[s.ReactiveTest.onError(e,t)])},r.prototype.createObserver=function(){return new x(this)},r}(h),s});