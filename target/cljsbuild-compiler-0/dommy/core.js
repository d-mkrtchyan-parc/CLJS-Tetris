goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var or__3943__auto__ = elem__$1.textContent;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__6199 = dommy.template.__GT_node_like.call(null,parent);
G__6199.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__6199;
});
var append_BANG___3 = (function() { 
var G__6204__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__6200_6205 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6201_6206 = null;
var count__6202_6207 = 0;
var i__6203_6208 = 0;
while(true){
if((i__6203_6208 < count__6202_6207))
{var c_6209 = cljs.core._nth.call(null,chunk__6201_6206,i__6203_6208);
append_BANG_.call(null,parent__$1,c_6209);
{
var G__6210 = seq__6200_6205;
var G__6211 = chunk__6201_6206;
var G__6212 = count__6202_6207;
var G__6213 = (i__6203_6208 + 1);
seq__6200_6205 = G__6210;
chunk__6201_6206 = G__6211;
count__6202_6207 = G__6212;
i__6203_6208 = G__6213;
continue;
}
} else
{var temp__4092__auto___6214 = cljs.core.seq.call(null,seq__6200_6205);
if(temp__4092__auto___6214)
{var seq__6200_6215__$1 = temp__4092__auto___6214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6200_6215__$1))
{var c__3075__auto___6216 = cljs.core.chunk_first.call(null,seq__6200_6215__$1);
{
var G__6217 = cljs.core.chunk_rest.call(null,seq__6200_6215__$1);
var G__6218 = c__3075__auto___6216;
var G__6219 = cljs.core.count.call(null,c__3075__auto___6216);
var G__6220 = 0;
seq__6200_6205 = G__6217;
chunk__6201_6206 = G__6218;
count__6202_6207 = G__6219;
i__6203_6208 = G__6220;
continue;
}
} else
{var c_6221 = cljs.core.first.call(null,seq__6200_6215__$1);
append_BANG_.call(null,parent__$1,c_6221);
{
var G__6222 = cljs.core.next.call(null,seq__6200_6215__$1);
var G__6223 = null;
var G__6224 = 0;
var G__6225 = 0;
seq__6200_6205 = G__6222;
chunk__6201_6206 = G__6223;
count__6202_6207 = G__6224;
i__6203_6208 = G__6225;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6204 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6204__delegate.call(this, parent, child, more_children);
};
G__6204.cljs$lang$maxFixedArity = 2;
G__6204.cljs$lang$applyTo = (function (arglist__6226){
var parent = cljs.core.first(arglist__6226);
arglist__6226 = cljs.core.next(arglist__6226);
var child = cljs.core.first(arglist__6226);
var more_children = cljs.core.rest(arglist__6226);
return G__6204__delegate(parent, child, more_children);
});
G__6204.cljs$core$IFn$_invoke$arity$variadic = G__6204__delegate;
return G__6204;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__6232 = dommy.template.__GT_node_like.call(null,parent);
G__6232.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__6232;
});
var prepend_BANG___3 = (function() { 
var G__6237__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__6233_6238 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6234_6239 = null;
var count__6235_6240 = 0;
var i__6236_6241 = 0;
while(true){
if((i__6236_6241 < count__6235_6240))
{var c_6242 = cljs.core._nth.call(null,chunk__6234_6239,i__6236_6241);
prepend_BANG_.call(null,parent__$1,c_6242);
{
var G__6243 = seq__6233_6238;
var G__6244 = chunk__6234_6239;
var G__6245 = count__6235_6240;
var G__6246 = (i__6236_6241 + 1);
seq__6233_6238 = G__6243;
chunk__6234_6239 = G__6244;
count__6235_6240 = G__6245;
i__6236_6241 = G__6246;
continue;
}
} else
{var temp__4092__auto___6247 = cljs.core.seq.call(null,seq__6233_6238);
if(temp__4092__auto___6247)
{var seq__6233_6248__$1 = temp__4092__auto___6247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6233_6248__$1))
{var c__3075__auto___6249 = cljs.core.chunk_first.call(null,seq__6233_6248__$1);
{
var G__6250 = cljs.core.chunk_rest.call(null,seq__6233_6248__$1);
var G__6251 = c__3075__auto___6249;
var G__6252 = cljs.core.count.call(null,c__3075__auto___6249);
var G__6253 = 0;
seq__6233_6238 = G__6250;
chunk__6234_6239 = G__6251;
count__6235_6240 = G__6252;
i__6236_6241 = G__6253;
continue;
}
} else
{var c_6254 = cljs.core.first.call(null,seq__6233_6248__$1);
prepend_BANG_.call(null,parent__$1,c_6254);
{
var G__6255 = cljs.core.next.call(null,seq__6233_6248__$1);
var G__6256 = null;
var G__6257 = 0;
var G__6258 = 0;
seq__6233_6238 = G__6255;
chunk__6234_6239 = G__6256;
count__6235_6240 = G__6257;
i__6236_6241 = G__6258;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6237 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6237__delegate.call(this, parent, child, more_children);
};
G__6237.cljs$lang$maxFixedArity = 2;
G__6237.cljs$lang$applyTo = (function (arglist__6259){
var parent = cljs.core.first(arglist__6259);
arglist__6259 = cljs.core.next(arglist__6259);
var child = cljs.core.first(arglist__6259);
var more_children = cljs.core.rest(arglist__6259);
return G__6237__delegate(parent, child, more_children);
});
G__6237.cljs$core$IFn$_invoke$arity$variadic = G__6237__delegate;
return G__6237;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null)),cljs.core.hash_map("\uFDD0:line",102,"\uFDD0:column",13))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4090__auto___6260 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___6260))
{var next_6261 = temp__4090__auto___6260;
parent.insertBefore(actual_node,next_6261);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null)),cljs.core.hash_map("\uFDD0:line",124,"\uFDD0:column",13))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__6263 = dommy.template.__GT_node_like.call(null,parent);
G__6263.innerHTML = "";
dommy.core.append_BANG_.call(null,G__6263,node_like);
return G__6263;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__6265 = elem__$1.parentNode;
G__6265.removeChild(elem__$1);
return G__6265;
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = cljs.core.string_QMARK_.call(null,data);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,data);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__6266_SHARP_){
return p1__6266_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__6267_SHARP_){
return !((p1__6267_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__6268){
var vec__6269 = p__6268;
var special_mouse_event = cljs.core.nth.call(null,vec__6269,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__6269,1,null);
return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;
if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:mouseenter","\uFDD0:mouseover","\uFDD0:mouseleave","\uFDD0:mouseout"], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;
event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this, elem, f, args);
};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6271){
var elem = cljs.core.first(arglist__6271);
arglist__6271 = cljs.core.next(arglist__6271);
var f = cljs.core.first(arglist__6271);
var args = cljs.core.rest(arglist__6271);
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__6270_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__6270_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)),cljs.core.hash_map("\uFDD0:line",256,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",256,"\uFDD0:column",11))))].join('')));
}
var vec__6295_6318 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6319 = cljs.core.nth.call(null,vec__6295_6318,0,null);
var selector_6320 = cljs.core.nth.call(null,vec__6295_6318,1,null);
var seq__6296_6321 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__6303_6322 = null;
var count__6304_6323 = 0;
var i__6305_6324 = 0;
while(true){
if((i__6305_6324 < count__6304_6323))
{var vec__6312_6325 = cljs.core._nth.call(null,chunk__6303_6322,i__6305_6324);
var orig_type_6326 = cljs.core.nth.call(null,vec__6312_6325,0,null);
var f_6327 = cljs.core.nth.call(null,vec__6312_6325,1,null);
var seq__6306_6328 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6326,cljs.core.PersistentArrayMap.fromArray([orig_type_6326,cljs.core.identity], true)));
var chunk__6308_6329 = null;
var count__6309_6330 = 0;
var i__6310_6331 = 0;
while(true){
if((i__6310_6331 < count__6309_6330))
{var vec__6313_6332 = cljs.core._nth.call(null,chunk__6308_6329,i__6310_6331);
var actual_type_6333 = cljs.core.nth.call(null,vec__6313_6332,0,null);
var factory_6334 = cljs.core.nth.call(null,vec__6313_6332,1,null);
var canonical_f_6335 = (cljs.core.truth_(selector_6320)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6319,selector_6320):cljs.core.identity).call(null,factory_6334.call(null,f_6327));
dommy.core.update_event_listeners_BANG_.call(null,elem_6319,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_6320,actual_type_6333,f_6327], true),canonical_f_6335);
if(cljs.core.truth_(elem_6319.addEventListener))
{elem_6319.addEventListener(cljs.core.name.call(null,actual_type_6333),canonical_f_6335);
} else
{elem_6319.attachEvent(cljs.core.name.call(null,actual_type_6333),canonical_f_6335);
}
{
var G__6336 = seq__6306_6328;
var G__6337 = chunk__6308_6329;
var G__6338 = count__6309_6330;
var G__6339 = (i__6310_6331 + 1);
seq__6306_6328 = G__6336;
chunk__6308_6329 = G__6337;
count__6309_6330 = G__6338;
i__6310_6331 = G__6339;
continue;
}
} else
{var temp__4092__auto___6340 = cljs.core.seq.call(null,seq__6306_6328);
if(temp__4092__auto___6340)
{var seq__6306_6341__$1 = temp__4092__auto___6340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6306_6341__$1))
{var c__3075__auto___6342 = cljs.core.chunk_first.call(null,seq__6306_6341__$1);
{
var G__6343 = cljs.core.chunk_rest.call(null,seq__6306_6341__$1);
var G__6344 = c__3075__auto___6342;
var G__6345 = cljs.core.count.call(null,c__3075__auto___6342);
var G__6346 = 0;
seq__6306_6328 = G__6343;
chunk__6308_6329 = G__6344;
count__6309_6330 = G__6345;
i__6310_6331 = G__6346;
continue;
}
} else
{var vec__6314_6347 = cljs.core.first.call(null,seq__6306_6341__$1);
var actual_type_6348 = cljs.core.nth.call(null,vec__6314_6347,0,null);
var factory_6349 = cljs.core.nth.call(null,vec__6314_6347,1,null);
var canonical_f_6350 = (cljs.core.truth_(selector_6320)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6319,selector_6320):cljs.core.identity).call(null,factory_6349.call(null,f_6327));
dommy.core.update_event_listeners_BANG_.call(null,elem_6319,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_6320,actual_type_6348,f_6327], true),canonical_f_6350);
if(cljs.core.truth_(elem_6319.addEventListener))
{elem_6319.addEventListener(cljs.core.name.call(null,actual_type_6348),canonical_f_6350);
} else
{elem_6319.attachEvent(cljs.core.name.call(null,actual_type_6348),canonical_f_6350);
}
{
var G__6351 = cljs.core.next.call(null,seq__6306_6341__$1);
var G__6352 = null;
var G__6353 = 0;
var G__6354 = 0;
seq__6306_6328 = G__6351;
chunk__6308_6329 = G__6352;
count__6309_6330 = G__6353;
i__6310_6331 = G__6354;
continue;
}
}
} else
{}
}
break;
}
{
var G__6355 = seq__6296_6321;
var G__6356 = chunk__6303_6322;
var G__6357 = count__6304_6323;
var G__6358 = (i__6305_6324 + 1);
seq__6296_6321 = G__6355;
chunk__6303_6322 = G__6356;
count__6304_6323 = G__6357;
i__6305_6324 = G__6358;
continue;
}
} else
{var temp__4092__auto___6359 = cljs.core.seq.call(null,seq__6296_6321);
if(temp__4092__auto___6359)
{var seq__6296_6360__$1 = temp__4092__auto___6359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6296_6360__$1))
{var c__3075__auto___6361 = cljs.core.chunk_first.call(null,seq__6296_6360__$1);
{
var G__6362 = cljs.core.chunk_rest.call(null,seq__6296_6360__$1);
var G__6363 = c__3075__auto___6361;
var G__6364 = cljs.core.count.call(null,c__3075__auto___6361);
var G__6365 = 0;
seq__6296_6321 = G__6362;
chunk__6303_6322 = G__6363;
count__6304_6323 = G__6364;
i__6305_6324 = G__6365;
continue;
}
} else
{var vec__6315_6366 = cljs.core.first.call(null,seq__6296_6360__$1);
var orig_type_6367 = cljs.core.nth.call(null,vec__6315_6366,0,null);
var f_6368 = cljs.core.nth.call(null,vec__6315_6366,1,null);
var seq__6297_6369 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6367,cljs.core.PersistentArrayMap.fromArray([orig_type_6367,cljs.core.identity], true)));
var chunk__6299_6370 = null;
var count__6300_6371 = 0;
var i__6301_6372 = 0;
while(true){
if((i__6301_6372 < count__6300_6371))
{var vec__6316_6373 = cljs.core._nth.call(null,chunk__6299_6370,i__6301_6372);
var actual_type_6374 = cljs.core.nth.call(null,vec__6316_6373,0,null);
var factory_6375 = cljs.core.nth.call(null,vec__6316_6373,1,null);
var canonical_f_6376 = (cljs.core.truth_(selector_6320)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6319,selector_6320):cljs.core.identity).call(null,factory_6375.call(null,f_6368));
dommy.core.update_event_listeners_BANG_.call(null,elem_6319,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_6320,actual_type_6374,f_6368], true),canonical_f_6376);
if(cljs.core.truth_(elem_6319.addEventListener))
{elem_6319.addEventListener(cljs.core.name.call(null,actual_type_6374),canonical_f_6376);
} else
{elem_6319.attachEvent(cljs.core.name.call(null,actual_type_6374),canonical_f_6376);
}
{
var G__6377 = seq__6297_6369;
var G__6378 = chunk__6299_6370;
var G__6379 = count__6300_6371;
var G__6380 = (i__6301_6372 + 1);
seq__6297_6369 = G__6377;
chunk__6299_6370 = G__6378;
count__6300_6371 = G__6379;
i__6301_6372 = G__6380;
continue;
}
} else
{var temp__4092__auto___6381__$1 = cljs.core.seq.call(null,seq__6297_6369);
if(temp__4092__auto___6381__$1)
{var seq__6297_6382__$1 = temp__4092__auto___6381__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6297_6382__$1))
{var c__3075__auto___6383 = cljs.core.chunk_first.call(null,seq__6297_6382__$1);
{
var G__6384 = cljs.core.chunk_rest.call(null,seq__6297_6382__$1);
var G__6385 = c__3075__auto___6383;
var G__6386 = cljs.core.count.call(null,c__3075__auto___6383);
var G__6387 = 0;
seq__6297_6369 = G__6384;
chunk__6299_6370 = G__6385;
count__6300_6371 = G__6386;
i__6301_6372 = G__6387;
continue;
}
} else
{var vec__6317_6388 = cljs.core.first.call(null,seq__6297_6382__$1);
var actual_type_6389 = cljs.core.nth.call(null,vec__6317_6388,0,null);
var factory_6390 = cljs.core.nth.call(null,vec__6317_6388,1,null);
var canonical_f_6391 = (cljs.core.truth_(selector_6320)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6319,selector_6320):cljs.core.identity).call(null,factory_6390.call(null,f_6368));
dommy.core.update_event_listeners_BANG_.call(null,elem_6319,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_6320,actual_type_6389,f_6368], true),canonical_f_6391);
if(cljs.core.truth_(elem_6319.addEventListener))
{elem_6319.addEventListener(cljs.core.name.call(null,actual_type_6389),canonical_f_6391);
} else
{elem_6319.attachEvent(cljs.core.name.call(null,actual_type_6389),canonical_f_6391);
}
{
var G__6392 = cljs.core.next.call(null,seq__6297_6382__$1);
var G__6393 = null;
var G__6394 = 0;
var G__6395 = 0;
seq__6297_6369 = G__6392;
chunk__6299_6370 = G__6393;
count__6300_6371 = G__6394;
i__6301_6372 = G__6395;
continue;
}
}
} else
{}
}
break;
}
{
var G__6396 = cljs.core.next.call(null,seq__6296_6360__$1);
var G__6397 = null;
var G__6398 = 0;
var G__6399 = 0;
seq__6296_6321 = G__6396;
chunk__6303_6322 = G__6397;
count__6304_6323 = G__6398;
i__6305_6324 = G__6399;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6400){
var elem_sel = cljs.core.first(arglist__6400);
var type_fs = cljs.core.rest(arglist__6400);
return listen_BANG___delegate(elem_sel, type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)),cljs.core.hash_map("\uFDD0:line",285,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",285,"\uFDD0:column",11))))].join('')));
}
var vec__6424_6447 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6448 = cljs.core.nth.call(null,vec__6424_6447,0,null);
var selector_6449 = cljs.core.nth.call(null,vec__6424_6447,1,null);
var seq__6425_6450 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__6432_6451 = null;
var count__6433_6452 = 0;
var i__6434_6453 = 0;
while(true){
if((i__6434_6453 < count__6433_6452))
{var vec__6441_6454 = cljs.core._nth.call(null,chunk__6432_6451,i__6434_6453);
var orig_type_6455 = cljs.core.nth.call(null,vec__6441_6454,0,null);
var f_6456 = cljs.core.nth.call(null,vec__6441_6454,1,null);
var seq__6435_6457 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6455,cljs.core.PersistentArrayMap.fromArray([orig_type_6455,cljs.core.identity], true)));
var chunk__6437_6458 = null;
var count__6438_6459 = 0;
var i__6439_6460 = 0;
while(true){
if((i__6439_6460 < count__6438_6459))
{var vec__6442_6461 = cljs.core._nth.call(null,chunk__6437_6458,i__6439_6460);
var actual_type_6462 = cljs.core.nth.call(null,vec__6442_6461,0,null);
var __6463 = cljs.core.nth.call(null,vec__6442_6461,1,null);
var keys_6464 = cljs.core.PersistentVector.fromArray([selector_6449,actual_type_6462,f_6456], true);
var canonical_f_6465 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6448),keys_6464);
dommy.core.update_event_listeners_BANG_.call(null,elem_6448,dommy.utils.dissoc_in,keys_6464);
if(cljs.core.truth_(elem_6448.removeEventListener))
{elem_6448.removeEventListener(cljs.core.name.call(null,actual_type_6462),canonical_f_6465);
} else
{elem_6448.detachEvent(cljs.core.name.call(null,actual_type_6462),canonical_f_6465);
}
{
var G__6466 = seq__6435_6457;
var G__6467 = chunk__6437_6458;
var G__6468 = count__6438_6459;
var G__6469 = (i__6439_6460 + 1);
seq__6435_6457 = G__6466;
chunk__6437_6458 = G__6467;
count__6438_6459 = G__6468;
i__6439_6460 = G__6469;
continue;
}
} else
{var temp__4092__auto___6470 = cljs.core.seq.call(null,seq__6435_6457);
if(temp__4092__auto___6470)
{var seq__6435_6471__$1 = temp__4092__auto___6470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6435_6471__$1))
{var c__3075__auto___6472 = cljs.core.chunk_first.call(null,seq__6435_6471__$1);
{
var G__6473 = cljs.core.chunk_rest.call(null,seq__6435_6471__$1);
var G__6474 = c__3075__auto___6472;
var G__6475 = cljs.core.count.call(null,c__3075__auto___6472);
var G__6476 = 0;
seq__6435_6457 = G__6473;
chunk__6437_6458 = G__6474;
count__6438_6459 = G__6475;
i__6439_6460 = G__6476;
continue;
}
} else
{var vec__6443_6477 = cljs.core.first.call(null,seq__6435_6471__$1);
var actual_type_6478 = cljs.core.nth.call(null,vec__6443_6477,0,null);
var __6479 = cljs.core.nth.call(null,vec__6443_6477,1,null);
var keys_6480 = cljs.core.PersistentVector.fromArray([selector_6449,actual_type_6478,f_6456], true);
var canonical_f_6481 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6448),keys_6480);
dommy.core.update_event_listeners_BANG_.call(null,elem_6448,dommy.utils.dissoc_in,keys_6480);
if(cljs.core.truth_(elem_6448.removeEventListener))
{elem_6448.removeEventListener(cljs.core.name.call(null,actual_type_6478),canonical_f_6481);
} else
{elem_6448.detachEvent(cljs.core.name.call(null,actual_type_6478),canonical_f_6481);
}
{
var G__6482 = cljs.core.next.call(null,seq__6435_6471__$1);
var G__6483 = null;
var G__6484 = 0;
var G__6485 = 0;
seq__6435_6457 = G__6482;
chunk__6437_6458 = G__6483;
count__6438_6459 = G__6484;
i__6439_6460 = G__6485;
continue;
}
}
} else
{}
}
break;
}
{
var G__6486 = seq__6425_6450;
var G__6487 = chunk__6432_6451;
var G__6488 = count__6433_6452;
var G__6489 = (i__6434_6453 + 1);
seq__6425_6450 = G__6486;
chunk__6432_6451 = G__6487;
count__6433_6452 = G__6488;
i__6434_6453 = G__6489;
continue;
}
} else
{var temp__4092__auto___6490 = cljs.core.seq.call(null,seq__6425_6450);
if(temp__4092__auto___6490)
{var seq__6425_6491__$1 = temp__4092__auto___6490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6425_6491__$1))
{var c__3075__auto___6492 = cljs.core.chunk_first.call(null,seq__6425_6491__$1);
{
var G__6493 = cljs.core.chunk_rest.call(null,seq__6425_6491__$1);
var G__6494 = c__3075__auto___6492;
var G__6495 = cljs.core.count.call(null,c__3075__auto___6492);
var G__6496 = 0;
seq__6425_6450 = G__6493;
chunk__6432_6451 = G__6494;
count__6433_6452 = G__6495;
i__6434_6453 = G__6496;
continue;
}
} else
{var vec__6444_6497 = cljs.core.first.call(null,seq__6425_6491__$1);
var orig_type_6498 = cljs.core.nth.call(null,vec__6444_6497,0,null);
var f_6499 = cljs.core.nth.call(null,vec__6444_6497,1,null);
var seq__6426_6500 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6498,cljs.core.PersistentArrayMap.fromArray([orig_type_6498,cljs.core.identity], true)));
var chunk__6428_6501 = null;
var count__6429_6502 = 0;
var i__6430_6503 = 0;
while(true){
if((i__6430_6503 < count__6429_6502))
{var vec__6445_6504 = cljs.core._nth.call(null,chunk__6428_6501,i__6430_6503);
var actual_type_6505 = cljs.core.nth.call(null,vec__6445_6504,0,null);
var __6506 = cljs.core.nth.call(null,vec__6445_6504,1,null);
var keys_6507 = cljs.core.PersistentVector.fromArray([selector_6449,actual_type_6505,f_6499], true);
var canonical_f_6508 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6448),keys_6507);
dommy.core.update_event_listeners_BANG_.call(null,elem_6448,dommy.utils.dissoc_in,keys_6507);
if(cljs.core.truth_(elem_6448.removeEventListener))
{elem_6448.removeEventListener(cljs.core.name.call(null,actual_type_6505),canonical_f_6508);
} else
{elem_6448.detachEvent(cljs.core.name.call(null,actual_type_6505),canonical_f_6508);
}
{
var G__6509 = seq__6426_6500;
var G__6510 = chunk__6428_6501;
var G__6511 = count__6429_6502;
var G__6512 = (i__6430_6503 + 1);
seq__6426_6500 = G__6509;
chunk__6428_6501 = G__6510;
count__6429_6502 = G__6511;
i__6430_6503 = G__6512;
continue;
}
} else
{var temp__4092__auto___6513__$1 = cljs.core.seq.call(null,seq__6426_6500);
if(temp__4092__auto___6513__$1)
{var seq__6426_6514__$1 = temp__4092__auto___6513__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6426_6514__$1))
{var c__3075__auto___6515 = cljs.core.chunk_first.call(null,seq__6426_6514__$1);
{
var G__6516 = cljs.core.chunk_rest.call(null,seq__6426_6514__$1);
var G__6517 = c__3075__auto___6515;
var G__6518 = cljs.core.count.call(null,c__3075__auto___6515);
var G__6519 = 0;
seq__6426_6500 = G__6516;
chunk__6428_6501 = G__6517;
count__6429_6502 = G__6518;
i__6430_6503 = G__6519;
continue;
}
} else
{var vec__6446_6520 = cljs.core.first.call(null,seq__6426_6514__$1);
var actual_type_6521 = cljs.core.nth.call(null,vec__6446_6520,0,null);
var __6522 = cljs.core.nth.call(null,vec__6446_6520,1,null);
var keys_6523 = cljs.core.PersistentVector.fromArray([selector_6449,actual_type_6521,f_6499], true);
var canonical_f_6524 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6448),keys_6523);
dommy.core.update_event_listeners_BANG_.call(null,elem_6448,dommy.utils.dissoc_in,keys_6523);
if(cljs.core.truth_(elem_6448.removeEventListener))
{elem_6448.removeEventListener(cljs.core.name.call(null,actual_type_6521),canonical_f_6524);
} else
{elem_6448.detachEvent(cljs.core.name.call(null,actual_type_6521),canonical_f_6524);
}
{
var G__6525 = cljs.core.next.call(null,seq__6426_6514__$1);
var G__6526 = null;
var G__6527 = 0;
var G__6528 = 0;
seq__6426_6500 = G__6525;
chunk__6428_6501 = G__6526;
count__6429_6502 = G__6527;
i__6430_6503 = G__6528;
continue;
}
}
} else
{}
}
break;
}
{
var G__6529 = cljs.core.next.call(null,seq__6425_6491__$1);
var G__6530 = null;
var G__6531 = 0;
var G__6532 = 0;
seq__6425_6450 = G__6529;
chunk__6432_6451 = G__6530;
count__6433_6452 = G__6531;
i__6434_6453 = G__6532;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this, elem_sel, type_fs);
};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6533){
var elem_sel = cljs.core.first(arglist__6533);
var type_fs = cljs.core.rest(arglist__6533);
return unlisten_BANG___delegate(elem_sel, type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)),cljs.core.hash_map("\uFDD0:line",300,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",300,"\uFDD0:column",11))))].join('')));
}
var vec__6541_6548 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6549 = cljs.core.nth.call(null,vec__6541_6548,0,null);
var selector_6550 = cljs.core.nth.call(null,vec__6541_6548,1,null);
var seq__6542_6551 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__6543_6552 = null;
var count__6544_6553 = 0;
var i__6545_6554 = 0;
while(true){
if((i__6545_6554 < count__6544_6553))
{var vec__6546_6555 = cljs.core._nth.call(null,chunk__6543_6552,i__6545_6554);
var type_6556 = cljs.core.nth.call(null,vec__6546_6555,0,null);
var f_6557 = cljs.core.nth.call(null,vec__6546_6555,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_6556,((function (seq__6542_6551,chunk__6543_6552,count__6544_6553,i__6545_6554,vec__6546_6555,type_6556,f_6557){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_6556,this_fn);
return f_6557.call(null,e);
});})(seq__6542_6551,chunk__6543_6552,count__6544_6553,i__6545_6554,vec__6546_6555,type_6556,f_6557))
);
{
var G__6558 = seq__6542_6551;
var G__6559 = chunk__6543_6552;
var G__6560 = count__6544_6553;
var G__6561 = (i__6545_6554 + 1);
seq__6542_6551 = G__6558;
chunk__6543_6552 = G__6559;
count__6544_6553 = G__6560;
i__6545_6554 = G__6561;
continue;
}
} else
{var temp__4092__auto___6562 = cljs.core.seq.call(null,seq__6542_6551);
if(temp__4092__auto___6562)
{var seq__6542_6563__$1 = temp__4092__auto___6562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6542_6563__$1))
{var c__3075__auto___6564 = cljs.core.chunk_first.call(null,seq__6542_6563__$1);
{
var G__6565 = cljs.core.chunk_rest.call(null,seq__6542_6563__$1);
var G__6566 = c__3075__auto___6564;
var G__6567 = cljs.core.count.call(null,c__3075__auto___6564);
var G__6568 = 0;
seq__6542_6551 = G__6565;
chunk__6543_6552 = G__6566;
count__6544_6553 = G__6567;
i__6545_6554 = G__6568;
continue;
}
} else
{var vec__6547_6569 = cljs.core.first.call(null,seq__6542_6563__$1);
var type_6570 = cljs.core.nth.call(null,vec__6547_6569,0,null);
var f_6571 = cljs.core.nth.call(null,vec__6547_6569,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_6570,((function (seq__6542_6551,chunk__6543_6552,count__6544_6553,i__6545_6554,vec__6547_6569,type_6570,f_6571,seq__6542_6563__$1,temp__4092__auto___6562){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_6570,this_fn);
return f_6571.call(null,e);
});})(seq__6542_6551,chunk__6543_6552,count__6544_6553,i__6545_6554,vec__6547_6569,type_6570,f_6571,seq__6542_6563__$1,temp__4092__auto___6562))
);
{
var G__6572 = cljs.core.next.call(null,seq__6542_6563__$1);
var G__6573 = null;
var G__6574 = 0;
var G__6575 = 0;
seq__6542_6551 = G__6572;
chunk__6543_6552 = G__6573;
count__6544_6553 = G__6574;
i__6545_6554 = G__6575;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6576){
var elem_sel = cljs.core.first(arglist__6576);
var type_fs = cljs.core.rest(arglist__6576);
return listen_once_BANG___delegate(elem_sel, type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__6577){
var vec__6579 = p__6577;
var update_event_BANG_ = cljs.core.nth.call(null,vec__6579,0,null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null)),cljs.core.hash_map("\uFDD0:line",319,"\uFDD0:column",11))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__6577 = null;
if (arguments.length > 2) {
  p__6577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__6577);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__6580){
var node = cljs.core.first(arglist__6580);
arglist__6580 = cljs.core.next(arglist__6580);
var event_type = cljs.core.first(arglist__6580);
var p__6577 = cljs.core.rest(arglist__6580);
return fire_BANG___delegate(node, event_type, p__6577);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
