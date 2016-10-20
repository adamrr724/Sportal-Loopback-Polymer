(function(e){function t(e){return e&&e.Object===Object?e:null}var s={"function":!0,object:!0},i=s[typeof exports]&&exports&&!exports.nodeType?exports:null,n=s[typeof module]&&module&&!module.nodeType?module:null,r=t(i&&n&&"object"==typeof global&&global),o=t(s[typeof self]&&self),u=t(s[typeof window]&&window),c=(n&&n.exports===i?i:null,t(s[typeof this]&&this)),h=r||u!==(c&&c.window)&&u||o||c||Function("return this")();"function"==typeof define&&define.amd?define(["./rx"],function(t,s){return e(h,s,t)}):"object"==typeof module&&module&&module.exports===i?module.exports=e(h,module.exports,require("./rx")):h.Rx=e(h,{},h.Rx)}).call(this,function(e,t,s,i){function n(e){return function(){try{return e.apply(this,arguments)}catch(t){return N.e=t,N}}}function r(e,t,s){return new c(function(i){function n(e,t){if(h[t]=e,o[t]=!0,u||(u=o.every(x))){if(r)return i.onError(r);var n=j(s).apply(null,h);if(n===N)return i.onError(n.e);i.onNext(n)}c&&h[1]&&i.onCompleted()}var r,o=[!1,!1],u=!1,c=!1,h=new Array(2);return new l(e.subscribe(function(e){n(e,0)},function(e){h[1]?i.onError(e):r=e},function(){c=!0,h[1]&&i.onCompleted()}),t.subscribe(function(e){n(e,1)},function(e){i.onError(e)},function(){c=!0,n(!0,1)}))},e)}var o=s.Observable,u=o.prototype,c=s.AnonymousObservable,h=s.internals.AbstractObserver,l=(s.CompositeDisposable,s.BinaryDisposable),p=s.NAryDisposable,a=s.Notification,d=s.Subject,b=s.Observer,f=s.Disposable.empty,y=s.Disposable.create,v=s.internals.inherits,m=s.internals.addProperties,q=s.Scheduler["default"],w=s.Scheduler.currentThread,x=s.helpers.identity,C=s.Scheduler.isScheduler,D=s.helpers.isFunction,N=(s.Disposable.checkDisposed,{e:{}}),j=s.internals.tryCatch=function(e){if(!D(e))throw new TypeError("fn must be a function");return n(e)};s.Pauser=function(e){function t(){e.call(this)}return v(t,e),t.prototype.pause=function(){this.onNext(!1)},t.prototype.resume=function(){this.onNext(!0)},t}(d);var E=function(e){function t(t,s){this.source=t,this.controller=new d,this.paused=!0,s&&s.subscribe?this.pauser=this.controller.merge(s):this.pauser=this.controller,e.call(this)}return v(t,e),t.prototype._subscribe=function(e){var t=this.source.publish(),s=t.subscribe(e),i=f,n=this.pauser.startWith(!this.paused).distinctUntilChanged().subscribe(function(e){e?i=t.connect():(i.dispose(),i=f)});return new p([s,i,n])},t.prototype.pause=function(){this.paused=!0,this.controller.onNext(!1)},t.prototype.resume=function(){this.paused=!1,this.controller.onNext(!0)},t}(o);u.pausable=function(e){return new E(this,e)};var F=function(e){function t(t,s){this.source=t,this.controller=new d,this.paused=!0,s&&s.subscribe?this.pauser=this.controller.merge(s):this.pauser=this.controller,e.call(this)}return v(t,e),t.prototype._subscribe=function(e){function t(){for(;n.length>0;)e.onNext(n.shift())}var s,n=[],o=r(this.source,this.pauser.startWith(!this.paused).distinctUntilChanged(),function(e,t){return{data:e,shouldFire:t}}).subscribe(function(r){s!==i&&r.shouldFire!==s?(s=r.shouldFire,r.shouldFire&&t()):(s=r.shouldFire,r.shouldFire?e.onNext(r.data):n.push(r.data))},function(s){t(),e.onError(s)},function(){t(),e.onCompleted()});return o},t.prototype.pause=function(){this.paused=!0,this.controller.onNext(!1)},t.prototype.resume=function(){this.paused=!1,this.controller.onNext(!0)},t}(o);u.pausableBuffered=function(e){return new F(this,e)};var g=function(e){function t(t,s,i){e.call(this),this.subject=new R(s,i),this.source=t.multicast(this.subject).refCount()}return v(t,e),t.prototype._subscribe=function(e){return this.source.subscribe(e)},t.prototype.request=function(e){return this.subject.request(null==e?-1:e)},t}(o),R=function(e){function t(t,s){null==t&&(t=!0),e.call(this),this.subject=new d,this.enableQueue=t,this.queue=t?[]:null,this.requestedCount=0,this.requestedDisposable=null,this.error=null,this.hasFailed=!1,this.hasCompleted=!1,this.scheduler=s||w}return v(t,e),m(t.prototype,b,{_subscribe:function(e){return this.subject.subscribe(e)},onCompleted:function(){this.hasCompleted=!0,this.enableQueue&&0!==this.queue.length?this.queue.push(a.createOnCompleted()):(this.subject.onCompleted(),this.disposeCurrentRequest())},onError:function(e){this.hasFailed=!0,this.error=e,this.enableQueue&&0!==this.queue.length?this.queue.push(a.createOnError(e)):(this.subject.onError(e),this.disposeCurrentRequest())},onNext:function(e){this.requestedCount<=0?this.enableQueue&&this.queue.push(a.createOnNext(e)):(0===this.requestedCount--&&this.disposeCurrentRequest(),this.subject.onNext(e))},_processRequest:function(e){if(this.enableQueue)for(;this.queue.length>0&&(e>0||"N"!==this.queue[0].kind);){var t=this.queue.shift();t.accept(this.subject),"N"===t.kind?e--:(this.disposeCurrentRequest(),this.queue=[])}return e},request:function(e){this.disposeCurrentRequest();var t=this;return this.requestedDisposable=this.scheduler.schedule(e,function(e,s){var i=t._processRequest(s),n=t.hasCompleted||t.hasFailed;return!n&&i>0?(t.requestedCount=i,y(function(){t.requestedCount=0})):void 0}),this.requestedDisposable},disposeCurrentRequest:function(){this.requestedDisposable&&(this.requestedDisposable.dispose(),this.requestedDisposable=null)}}),t}(o);u.controlled=function(e,t){return e&&C(e)&&(t=e,e=!0),null==e&&(e=!0),new g(this,e,t)};var S=function(e){function t(t){e.call(this),this.source=t}function s(e,t){return t.source.request(1)}v(t,e),t.prototype._subscribe=function(e){return this.subscription=this.source.subscribe(new i(e,this,this.subscription)),new l(this.subscription,q.schedule(this,s))};var i=function(e){function t(t,s,i){e.call(this),this.observer=t,this.observable=s,this.cancel=i,this.scheduleDisposable=null}function s(e,t){return t.observable.source.request(1)}return v(t,e),t.prototype.completed=function(){this.observer.onCompleted(),this.dispose()},t.prototype.error=function(e){this.observer.onError(e),this.dispose()},t.prototype.next=function(e){this.observer.onNext(e),this.scheduleDisposable=q.schedule(this,s)},t.dispose=function(){this.observer=null,this.cancel&&(this.cancel.dispose(),this.cancel=null),this.scheduleDisposable&&(this.scheduleDisposable.dispose(),this.scheduleDisposable=null),e.prototype.dispose.call(this)},t}(h);return t}(o);g.prototype.stopAndWait=function(){return new S(this)};var O=function(e){function t(t,s){e.call(this),this.source=t,this.windowSize=s}function s(e,t){return t.source.request(t.windowSize)}v(t,e),t.prototype._subscribe=function(e){return this.subscription=this.source.subscribe(new i(e,this,this.subscription)),new l(this.subscription,q.schedule(this,s))};var i=function(e){function t(t,s,i){this.observer=t,this.observable=s,this.cancel=i,this.received=0,this.scheduleDisposable=null,e.call(this)}function s(e,t){return t.observable.source.request(t.observable.windowSize)}return v(t,e),t.prototype.completed=function(){this.observer.onCompleted(),this.dispose()},t.prototype.error=function(e){this.observer.onError(e),this.dispose()},t.prototype.next=function(e){this.observer.onNext(e),this.received=++this.received%this.observable.windowSize,0===this.received&&(this.scheduleDisposable=q.schedule(this,s))},t.prototype.dispose=function(){this.observer=null,this.cancel&&(this.cancel.dispose(),this.cancel=null),this.scheduleDisposable&&(this.scheduleDisposable.dispose(),this.scheduleDisposable=null),e.prototype.dispose.call(this)},t}(h);return t}(o);return g.prototype.windowed=function(e){return new O(this,e)},u.pipe=function(e){function t(){s.resume()}var s=this.pausableBuffered();return e.addListener("drain",t),s.subscribe(function(t){!e.write(t)&&s.pause()},function(t){e.emit("error",t)},function(){!e._isStdio&&e.end(),e.removeListener("drain",t)}),s.resume(),e},s});