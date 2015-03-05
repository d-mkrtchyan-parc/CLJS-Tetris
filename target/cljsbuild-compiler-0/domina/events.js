goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__2944__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__2944__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__2944__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__2944__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__2944__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__2944__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t5531))
{goog.provide('domina.events.t5531');

/**
* @constructor
*/
domina.events.t5531 = (function (evt,f,create_listener_function,meta5532){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta5532 = meta5532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t5531.cljs$lang$type = true;
domina.events.t5531.cljs$lang$ctorStr = "domina.events/t5531";
domina.events.t5531.cljs$lang$ctorPrWriter = (function (this__2884__auto__,writer__2885__auto__,opt__2886__auto__){
return cljs.core._write.call(null,writer__2885__auto__,"domina.events/t5531");
});
domina.events.t5531.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t5531.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t5531.prototype.domina$events$Event$ = true;
domina.events.t5531.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t5531.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t5531.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t5531.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t5531.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t5531.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t5531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5533){
var self__ = this;
return self__.meta5532;
});
domina.events.t5531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5533,meta5532__$1){
var self__ = this;
return (new domina.events.t5531(self__.evt,self__.f,self__.create_listener_function,meta5532__$1));
});
} else
{}
return (new domina.events.t5531(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__3044__auto__ = (function iter__5538(s__5539){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5539__$1 = s__5539;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5539__$1);
if(temp__4092__auto__)
{var s__5539__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5539__$2))
{var c__3042__auto__ = cljs.core.chunk_first.call(null,s__5539__$2);
var size__3043__auto__ = cljs.core.count.call(null,c__3042__auto__);
var b__5541 = cljs.core.chunk_buffer.call(null,size__3043__auto__);
if((function (){var i__5540 = 0;
while(true){
if((i__5540 < size__3043__auto__))
{var node = cljs.core._nth.call(null,c__3042__auto__,i__5540);
cljs.core.chunk_append.call(null,b__5541,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__5542 = (i__5540 + 1);
i__5540 = G__5542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5541),iter__5538.call(null,cljs.core.chunk_rest.call(null,s__5539__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5541),null);
}
} else
{var node = cljs.core.first.call(null,s__5539__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__5538.call(null,cljs.core.rest.call(null,s__5539__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3044__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__5551 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5552 = null;
var count__5553 = 0;
var i__5554 = 0;
while(true){
if((i__5554 < count__5553))
{var node = cljs.core._nth.call(null,chunk__5552,i__5554);
goog.events.removeAll(node);
{
var G__5559 = seq__5551;
var G__5560 = chunk__5552;
var G__5561 = count__5553;
var G__5562 = (i__5554 + 1);
seq__5551 = G__5559;
chunk__5552 = G__5560;
count__5553 = G__5561;
i__5554 = G__5562;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5551);
if(temp__4092__auto__)
{var seq__5551__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5551__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__5551__$1);
{
var G__5563 = cljs.core.chunk_rest.call(null,seq__5551__$1);
var G__5564 = c__3075__auto__;
var G__5565 = cljs.core.count.call(null,c__3075__auto__);
var G__5566 = 0;
seq__5551 = G__5563;
chunk__5552 = G__5564;
count__5553 = G__5565;
i__5554 = G__5566;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5551__$1);
goog.events.removeAll(node);
{
var G__5567 = cljs.core.next.call(null,seq__5551__$1);
var G__5568 = null;
var G__5569 = 0;
var G__5570 = 0;
seq__5551 = G__5567;
chunk__5552 = G__5568;
count__5553 = G__5569;
i__5554 = G__5570;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__5555 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5556 = null;
var count__5557 = 0;
var i__5558 = 0;
while(true){
if((i__5558 < count__5557))
{var node = cljs.core._nth.call(null,chunk__5556,i__5558);
goog.events.removeAll(node,type__$1);
{
var G__5571 = seq__5555;
var G__5572 = chunk__5556;
var G__5573 = count__5557;
var G__5574 = (i__5558 + 1);
seq__5555 = G__5571;
chunk__5556 = G__5572;
count__5557 = G__5573;
i__5558 = G__5574;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5555);
if(temp__4092__auto__)
{var seq__5555__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5555__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__5555__$1);
{
var G__5575 = cljs.core.chunk_rest.call(null,seq__5555__$1);
var G__5576 = c__3075__auto__;
var G__5577 = cljs.core.count.call(null,c__3075__auto__);
var G__5578 = 0;
seq__5555 = G__5575;
chunk__5556 = G__5576;
count__5557 = G__5577;
i__5558 = G__5578;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5555__$1);
goog.events.removeAll(node,type__$1);
{
var G__5579 = cljs.core.next.call(null,seq__5555__$1);
var G__5580 = null;
var G__5581 = 0;
var G__5582 = 0;
seq__5555 = G__5579;
chunk__5556 = G__5580;
count__5557 = G__5581;
i__5558 = G__5582;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;
{
var G__5583 = parent;
var G__5584 = cljs.core.cons.call(null,parent,so_far);
n = G__5583;
so_far = G__5584;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__5593_5601 = cljs.core.seq.call(null,ancestors);
var chunk__5594_5602 = null;
var count__5595_5603 = 0;
var i__5596_5604 = 0;
while(true){
if((i__5596_5604 < count__5595_5603))
{var n_5605 = cljs.core._nth.call(null,chunk__5594_5602,i__5596_5604);
if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5605;
goog.events.fireListeners(n_5605,evt.type,true,evt);
}
{
var G__5606 = seq__5593_5601;
var G__5607 = chunk__5594_5602;
var G__5608 = count__5595_5603;
var G__5609 = (i__5596_5604 + 1);
seq__5593_5601 = G__5606;
chunk__5594_5602 = G__5607;
count__5595_5603 = G__5608;
i__5596_5604 = G__5609;
continue;
}
} else
{var temp__4092__auto___5610 = cljs.core.seq.call(null,seq__5593_5601);
if(temp__4092__auto___5610)
{var seq__5593_5611__$1 = temp__4092__auto___5610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5593_5611__$1))
{var c__3075__auto___5612 = cljs.core.chunk_first.call(null,seq__5593_5611__$1);
{
var G__5613 = cljs.core.chunk_rest.call(null,seq__5593_5611__$1);
var G__5614 = c__3075__auto___5612;
var G__5615 = cljs.core.count.call(null,c__3075__auto___5612);
var G__5616 = 0;
seq__5593_5601 = G__5613;
chunk__5594_5602 = G__5614;
count__5595_5603 = G__5615;
i__5596_5604 = G__5616;
continue;
}
} else
{var n_5617 = cljs.core.first.call(null,seq__5593_5611__$1);
if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5617;
goog.events.fireListeners(n_5617,evt.type,true,evt);
}
{
var G__5618 = cljs.core.next.call(null,seq__5593_5611__$1);
var G__5619 = null;
var G__5620 = 0;
var G__5621 = 0;
seq__5593_5601 = G__5618;
chunk__5594_5602 = G__5619;
count__5595_5603 = G__5620;
i__5596_5604 = G__5621;
continue;
}
}
} else
{}
}
break;
}
var seq__5597_5622 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__5598_5623 = null;
var count__5599_5624 = 0;
var i__5600_5625 = 0;
while(true){
if((i__5600_5625 < count__5599_5624))
{var n_5626 = cljs.core._nth.call(null,chunk__5598_5623,i__5600_5625);
if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5626;
goog.events.fireListeners(n_5626,evt.type,false,evt);
}
{
var G__5627 = seq__5597_5622;
var G__5628 = chunk__5598_5623;
var G__5629 = count__5599_5624;
var G__5630 = (i__5600_5625 + 1);
seq__5597_5622 = G__5627;
chunk__5598_5623 = G__5628;
count__5599_5624 = G__5629;
i__5600_5625 = G__5630;
continue;
}
} else
{var temp__4092__auto___5631 = cljs.core.seq.call(null,seq__5597_5622);
if(temp__4092__auto___5631)
{var seq__5597_5632__$1 = temp__4092__auto___5631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5597_5632__$1))
{var c__3075__auto___5633 = cljs.core.chunk_first.call(null,seq__5597_5632__$1);
{
var G__5634 = cljs.core.chunk_rest.call(null,seq__5597_5632__$1);
var G__5635 = c__3075__auto___5633;
var G__5636 = cljs.core.count.call(null,c__3075__auto___5633);
var G__5637 = 0;
seq__5597_5622 = G__5634;
chunk__5598_5623 = G__5635;
count__5599_5624 = G__5636;
i__5600_5625 = G__5637;
continue;
}
} else
{var n_5638 = cljs.core.first.call(null,seq__5597_5632__$1);
if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5638;
goog.events.fireListeners(n_5638,evt.type,false,evt);
}
{
var G__5639 = cljs.core.next.call(null,seq__5597_5632__$1);
var G__5640 = null;
var G__5641 = 0;
var G__5642 = 0;
seq__5597_5622 = G__5639;
chunk__5598_5623 = G__5640;
count__5599_5624 = G__5641;
i__5600_5625 = G__5642;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3941__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto__))
{return o.dispatchEvent;
} else
{return and__3941__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__5649_5655 = cljs.core.seq.call(null,evt_map);
var chunk__5650_5656 = null;
var count__5651_5657 = 0;
var i__5652_5658 = 0;
while(true){
if((i__5652_5658 < count__5651_5657))
{var vec__5653_5659 = cljs.core._nth.call(null,chunk__5650_5656,i__5652_5658);
var k_5660 = cljs.core.nth.call(null,vec__5653_5659,0,null);
var v_5661 = cljs.core.nth.call(null,vec__5653_5659,1,null);
(evt[k_5660] = v_5661);
{
var G__5662 = seq__5649_5655;
var G__5663 = chunk__5650_5656;
var G__5664 = count__5651_5657;
var G__5665 = (i__5652_5658 + 1);
seq__5649_5655 = G__5662;
chunk__5650_5656 = G__5663;
count__5651_5657 = G__5664;
i__5652_5658 = G__5665;
continue;
}
} else
{var temp__4092__auto___5666 = cljs.core.seq.call(null,seq__5649_5655);
if(temp__4092__auto___5666)
{var seq__5649_5667__$1 = temp__4092__auto___5666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5649_5667__$1))
{var c__3075__auto___5668 = cljs.core.chunk_first.call(null,seq__5649_5667__$1);
{
var G__5669 = cljs.core.chunk_rest.call(null,seq__5649_5667__$1);
var G__5670 = c__3075__auto___5668;
var G__5671 = cljs.core.count.call(null,c__3075__auto___5668);
var G__5672 = 0;
seq__5649_5655 = G__5669;
chunk__5650_5656 = G__5670;
count__5651_5657 = G__5671;
i__5652_5658 = G__5672;
continue;
}
} else
{var vec__5654_5673 = cljs.core.first.call(null,seq__5649_5667__$1);
var k_5674 = cljs.core.nth.call(null,vec__5654_5673,0,null);
var v_5675 = cljs.core.nth.call(null,vec__5654_5673,1,null);
(evt[k_5674] = v_5675);
{
var G__5676 = cljs.core.next.call(null,seq__5649_5667__$1);
var G__5677 = null;
var G__5678 = 0;
var G__5679 = 0;
seq__5649_5655 = G__5676;
chunk__5650_5656 = G__5677;
count__5651_5657 = G__5678;
i__5652_5658 = G__5679;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__5680_SHARP_){
return goog.events.getListeners(p1__5680_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
