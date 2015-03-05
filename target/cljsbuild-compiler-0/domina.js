goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_5696 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_5697 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_5698 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_5697,table_section_wrapper_5697,opt_wrapper_5696,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_5698,table_section_wrapper_5697,cell_wrapper_5698,opt_wrapper_5696,table_section_wrapper_5697,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_5697]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;
if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var seq__5703 = cljs.core.seq.call(null,tbody);
var chunk__5704 = null;
var count__5705 = 0;
var i__5706 = 0;
while(true){
if((i__5706 < count__5705))
{var child = cljs.core._nth.call(null,chunk__5704,i__5706);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__5707 = seq__5703;
var G__5708 = chunk__5704;
var G__5709 = count__5705;
var G__5710 = (i__5706 + 1);
seq__5703 = G__5707;
chunk__5704 = G__5708;
count__5705 = G__5709;
i__5706 = G__5710;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5703);
if(temp__4092__auto__)
{var seq__5703__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5703__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__5703__$1);
{
var G__5711 = cljs.core.chunk_rest.call(null,seq__5703__$1);
var G__5712 = c__3075__auto__;
var G__5713 = cljs.core.count.call(null,c__3075__auto__);
var G__5714 = 0;
seq__5703 = G__5711;
chunk__5704 = G__5712;
count__5705 = G__5713;
i__5706 = G__5714;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__5703__$1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__5715 = cljs.core.next.call(null,seq__5703__$1);
var G__5716 = null;
var G__5717 = 0;
var G__5718 = 0;
seq__5703 = G__5715;
chunk__5704 = G__5716;
count__5705 = G__5717;
i__5706 = G__5718;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__5720 = cljs.core.get.call(null,domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__5720,0,null);
var start_wrap = cljs.core.nth.call(null,vec__5720,1,null);
var end_wrap = cljs.core.nth.call(null,vec__5720,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__5721 = wrapper.lastChild;
var G__5722 = (level - 1);
wrapper = G__5721;
level = G__5722;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto__ = content;
if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2944__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto__ = nodeseq;
if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2944__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__5723){
var mesg = cljs.core.seq(arglist__5723);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__5724){
var mesg = cljs.core.seq(arglist__5724);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__5725){
var contents = cljs.core.seq(arglist__5725);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__5726_SHARP_){
return p1__5726_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__5727_SHARP_,p2__5728_SHARP_){
return goog.dom.insertChildAt(p1__5727_SHARP_,p2__5728_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__5730_SHARP_,p2__5729_SHARP_){
return goog.dom.insertSiblingBefore(p2__5729_SHARP_,p1__5730_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__5732_SHARP_,p2__5731_SHARP_){
return goog.dom.insertSiblingAfter(p2__5731_SHARP_,p1__5732_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__5734_SHARP_,p2__5733_SHARP_){
return goog.dom.replaceNode(p2__5733_SHARP_,p1__5734_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__5739_5743 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5740_5744 = null;
var count__5741_5745 = 0;
var i__5742_5746 = 0;
while(true){
if((i__5742_5746 < count__5741_5745))
{var n_5747 = cljs.core._nth.call(null,chunk__5740_5744,i__5742_5746);
goog.style.setStyle(n_5747,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5748 = seq__5739_5743;
var G__5749 = chunk__5740_5744;
var G__5750 = count__5741_5745;
var G__5751 = (i__5742_5746 + 1);
seq__5739_5743 = G__5748;
chunk__5740_5744 = G__5749;
count__5741_5745 = G__5750;
i__5742_5746 = G__5751;
continue;
}
} else
{var temp__4092__auto___5752 = cljs.core.seq.call(null,seq__5739_5743);
if(temp__4092__auto___5752)
{var seq__5739_5753__$1 = temp__4092__auto___5752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5739_5753__$1))
{var c__3075__auto___5754 = cljs.core.chunk_first.call(null,seq__5739_5753__$1);
{
var G__5755 = cljs.core.chunk_rest.call(null,seq__5739_5753__$1);
var G__5756 = c__3075__auto___5754;
var G__5757 = cljs.core.count.call(null,c__3075__auto___5754);
var G__5758 = 0;
seq__5739_5743 = G__5755;
chunk__5740_5744 = G__5756;
count__5741_5745 = G__5757;
i__5742_5746 = G__5758;
continue;
}
} else
{var n_5759 = cljs.core.first.call(null,seq__5739_5753__$1);
goog.style.setStyle(n_5759,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5760 = cljs.core.next.call(null,seq__5739_5753__$1);
var G__5761 = null;
var G__5762 = 0;
var G__5763 = 0;
seq__5739_5743 = G__5760;
chunk__5740_5744 = G__5761;
count__5741_5745 = G__5762;
i__5742_5746 = G__5763;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5764){
var content = cljs.core.first(arglist__5764);
arglist__5764 = cljs.core.next(arglist__5764);
var name = cljs.core.first(arglist__5764);
var value = cljs.core.rest(arglist__5764);
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__5769_5773 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5770_5774 = null;
var count__5771_5775 = 0;
var i__5772_5776 = 0;
while(true){
if((i__5772_5776 < count__5771_5775))
{var n_5777 = cljs.core._nth.call(null,chunk__5770_5774,i__5772_5776);
n_5777.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5778 = seq__5769_5773;
var G__5779 = chunk__5770_5774;
var G__5780 = count__5771_5775;
var G__5781 = (i__5772_5776 + 1);
seq__5769_5773 = G__5778;
chunk__5770_5774 = G__5779;
count__5771_5775 = G__5780;
i__5772_5776 = G__5781;
continue;
}
} else
{var temp__4092__auto___5782 = cljs.core.seq.call(null,seq__5769_5773);
if(temp__4092__auto___5782)
{var seq__5769_5783__$1 = temp__4092__auto___5782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5769_5783__$1))
{var c__3075__auto___5784 = cljs.core.chunk_first.call(null,seq__5769_5783__$1);
{
var G__5785 = cljs.core.chunk_rest.call(null,seq__5769_5783__$1);
var G__5786 = c__3075__auto___5784;
var G__5787 = cljs.core.count.call(null,c__3075__auto___5784);
var G__5788 = 0;
seq__5769_5773 = G__5785;
chunk__5770_5774 = G__5786;
count__5771_5775 = G__5787;
i__5772_5776 = G__5788;
continue;
}
} else
{var n_5789 = cljs.core.first.call(null,seq__5769_5783__$1);
n_5789.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5790 = cljs.core.next.call(null,seq__5769_5783__$1);
var G__5791 = null;
var G__5792 = 0;
var G__5793 = 0;
seq__5769_5773 = G__5790;
chunk__5770_5774 = G__5791;
count__5771_5775 = G__5792;
i__5772_5776 = G__5793;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__5794){
var content = cljs.core.first(arglist__5794);
arglist__5794 = cljs.core.next(arglist__5794);
var name = cljs.core.first(arglist__5794);
var value = cljs.core.rest(arglist__5794);
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__5799_5803 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5800_5804 = null;
var count__5801_5805 = 0;
var i__5802_5806 = 0;
while(true){
if((i__5802_5806 < count__5801_5805))
{var n_5807 = cljs.core._nth.call(null,chunk__5800_5804,i__5802_5806);
n_5807.removeAttribute(cljs.core.name.call(null,name));
{
var G__5808 = seq__5799_5803;
var G__5809 = chunk__5800_5804;
var G__5810 = count__5801_5805;
var G__5811 = (i__5802_5806 + 1);
seq__5799_5803 = G__5808;
chunk__5800_5804 = G__5809;
count__5801_5805 = G__5810;
i__5802_5806 = G__5811;
continue;
}
} else
{var temp__4092__auto___5812 = cljs.core.seq.call(null,seq__5799_5803);
if(temp__4092__auto___5812)
{var seq__5799_5813__$1 = temp__4092__auto___5812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5799_5813__$1))
{var c__3075__auto___5814 = cljs.core.chunk_first.call(null,seq__5799_5813__$1);
{
var G__5815 = cljs.core.chunk_rest.call(null,seq__5799_5813__$1);
var G__5816 = c__3075__auto___5814;
var G__5817 = cljs.core.count.call(null,c__3075__auto___5814);
var G__5818 = 0;
seq__5799_5803 = G__5815;
chunk__5800_5804 = G__5816;
count__5801_5805 = G__5817;
i__5802_5806 = G__5818;
continue;
}
} else
{var n_5819 = cljs.core.first.call(null,seq__5799_5813__$1);
n_5819.removeAttribute(cljs.core.name.call(null,name));
{
var G__5820 = cljs.core.next.call(null,seq__5799_5813__$1);
var G__5821 = null;
var G__5822 = 0;
var G__5823 = 0;
seq__5799_5803 = G__5820;
chunk__5800_5804 = G__5821;
count__5801_5805 = G__5822;
i__5802_5806 = G__5823;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__5825 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__5825,0,null);
var v = cljs.core.nth.call(null,vec__5825,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = k;
if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style))
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.ObjMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if("\uFDD0:else")
{return cljs.core.ObjMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__5826_SHARP_){
var attr = attrs__$1.item(p1__5826_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,null,value);
if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__5833_5839 = cljs.core.seq.call(null,styles);
var chunk__5834_5840 = null;
var count__5835_5841 = 0;
var i__5836_5842 = 0;
while(true){
if((i__5836_5842 < count__5835_5841))
{var vec__5837_5843 = cljs.core._nth.call(null,chunk__5834_5840,i__5836_5842);
var name_5844 = cljs.core.nth.call(null,vec__5837_5843,0,null);
var value_5845 = cljs.core.nth.call(null,vec__5837_5843,1,null);
domina.set_style_BANG_.call(null,content,name_5844,value_5845);
{
var G__5846 = seq__5833_5839;
var G__5847 = chunk__5834_5840;
var G__5848 = count__5835_5841;
var G__5849 = (i__5836_5842 + 1);
seq__5833_5839 = G__5846;
chunk__5834_5840 = G__5847;
count__5835_5841 = G__5848;
i__5836_5842 = G__5849;
continue;
}
} else
{var temp__4092__auto___5850 = cljs.core.seq.call(null,seq__5833_5839);
if(temp__4092__auto___5850)
{var seq__5833_5851__$1 = temp__4092__auto___5850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5833_5851__$1))
{var c__3075__auto___5852 = cljs.core.chunk_first.call(null,seq__5833_5851__$1);
{
var G__5853 = cljs.core.chunk_rest.call(null,seq__5833_5851__$1);
var G__5854 = c__3075__auto___5852;
var G__5855 = cljs.core.count.call(null,c__3075__auto___5852);
var G__5856 = 0;
seq__5833_5839 = G__5853;
chunk__5834_5840 = G__5854;
count__5835_5841 = G__5855;
i__5836_5842 = G__5856;
continue;
}
} else
{var vec__5838_5857 = cljs.core.first.call(null,seq__5833_5851__$1);
var name_5858 = cljs.core.nth.call(null,vec__5838_5857,0,null);
var value_5859 = cljs.core.nth.call(null,vec__5838_5857,1,null);
domina.set_style_BANG_.call(null,content,name_5858,value_5859);
{
var G__5860 = cljs.core.next.call(null,seq__5833_5851__$1);
var G__5861 = null;
var G__5862 = 0;
var G__5863 = 0;
seq__5833_5839 = G__5860;
chunk__5834_5840 = G__5861;
count__5835_5841 = G__5862;
i__5836_5842 = G__5863;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__5870_5876 = cljs.core.seq.call(null,attrs);
var chunk__5871_5877 = null;
var count__5872_5878 = 0;
var i__5873_5879 = 0;
while(true){
if((i__5873_5879 < count__5872_5878))
{var vec__5874_5880 = cljs.core._nth.call(null,chunk__5871_5877,i__5873_5879);
var name_5881 = cljs.core.nth.call(null,vec__5874_5880,0,null);
var value_5882 = cljs.core.nth.call(null,vec__5874_5880,1,null);
domina.set_attr_BANG_.call(null,content,name_5881,value_5882);
{
var G__5883 = seq__5870_5876;
var G__5884 = chunk__5871_5877;
var G__5885 = count__5872_5878;
var G__5886 = (i__5873_5879 + 1);
seq__5870_5876 = G__5883;
chunk__5871_5877 = G__5884;
count__5872_5878 = G__5885;
i__5873_5879 = G__5886;
continue;
}
} else
{var temp__4092__auto___5887 = cljs.core.seq.call(null,seq__5870_5876);
if(temp__4092__auto___5887)
{var seq__5870_5888__$1 = temp__4092__auto___5887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5870_5888__$1))
{var c__3075__auto___5889 = cljs.core.chunk_first.call(null,seq__5870_5888__$1);
{
var G__5890 = cljs.core.chunk_rest.call(null,seq__5870_5888__$1);
var G__5891 = c__3075__auto___5889;
var G__5892 = cljs.core.count.call(null,c__3075__auto___5889);
var G__5893 = 0;
seq__5870_5876 = G__5890;
chunk__5871_5877 = G__5891;
count__5872_5878 = G__5892;
i__5873_5879 = G__5893;
continue;
}
} else
{var vec__5875_5894 = cljs.core.first.call(null,seq__5870_5888__$1);
var name_5895 = cljs.core.nth.call(null,vec__5875_5894,0,null);
var value_5896 = cljs.core.nth.call(null,vec__5875_5894,1,null);
domina.set_attr_BANG_.call(null,content,name_5895,value_5896);
{
var G__5897 = cljs.core.next.call(null,seq__5870_5888__$1);
var G__5898 = null;
var G__5899 = 0;
var G__5900 = 0;
seq__5870_5876 = G__5897;
chunk__5871_5877 = G__5898;
count__5872_5878 = G__5899;
i__5873_5879 = G__5900;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__5905_5909 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5906_5910 = null;
var count__5907_5911 = 0;
var i__5908_5912 = 0;
while(true){
if((i__5908_5912 < count__5907_5911))
{var node_5913 = cljs.core._nth.call(null,chunk__5906_5910,i__5908_5912);
goog.dom.classes.add(node_5913,class$);
{
var G__5914 = seq__5905_5909;
var G__5915 = chunk__5906_5910;
var G__5916 = count__5907_5911;
var G__5917 = (i__5908_5912 + 1);
seq__5905_5909 = G__5914;
chunk__5906_5910 = G__5915;
count__5907_5911 = G__5916;
i__5908_5912 = G__5917;
continue;
}
} else
{var temp__4092__auto___5918 = cljs.core.seq.call(null,seq__5905_5909);
if(temp__4092__auto___5918)
{var seq__5905_5919__$1 = temp__4092__auto___5918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5905_5919__$1))
{var c__3075__auto___5920 = cljs.core.chunk_first.call(null,seq__5905_5919__$1);
{
var G__5921 = cljs.core.chunk_rest.call(null,seq__5905_5919__$1);
var G__5922 = c__3075__auto___5920;
var G__5923 = cljs.core.count.call(null,c__3075__auto___5920);
var G__5924 = 0;
seq__5905_5909 = G__5921;
chunk__5906_5910 = G__5922;
count__5907_5911 = G__5923;
i__5908_5912 = G__5924;
continue;
}
} else
{var node_5925 = cljs.core.first.call(null,seq__5905_5919__$1);
goog.dom.classes.add(node_5925,class$);
{
var G__5926 = cljs.core.next.call(null,seq__5905_5919__$1);
var G__5927 = null;
var G__5928 = 0;
var G__5929 = 0;
seq__5905_5909 = G__5926;
chunk__5906_5910 = G__5927;
count__5907_5911 = G__5928;
i__5908_5912 = G__5929;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__5934_5938 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5935_5939 = null;
var count__5936_5940 = 0;
var i__5937_5941 = 0;
while(true){
if((i__5937_5941 < count__5936_5940))
{var node_5942 = cljs.core._nth.call(null,chunk__5935_5939,i__5937_5941);
goog.dom.classes.remove(node_5942,class$);
{
var G__5943 = seq__5934_5938;
var G__5944 = chunk__5935_5939;
var G__5945 = count__5936_5940;
var G__5946 = (i__5937_5941 + 1);
seq__5934_5938 = G__5943;
chunk__5935_5939 = G__5944;
count__5936_5940 = G__5945;
i__5937_5941 = G__5946;
continue;
}
} else
{var temp__4092__auto___5947 = cljs.core.seq.call(null,seq__5934_5938);
if(temp__4092__auto___5947)
{var seq__5934_5948__$1 = temp__4092__auto___5947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5934_5948__$1))
{var c__3075__auto___5949 = cljs.core.chunk_first.call(null,seq__5934_5948__$1);
{
var G__5950 = cljs.core.chunk_rest.call(null,seq__5934_5948__$1);
var G__5951 = c__3075__auto___5949;
var G__5952 = cljs.core.count.call(null,c__3075__auto___5949);
var G__5953 = 0;
seq__5934_5938 = G__5950;
chunk__5935_5939 = G__5951;
count__5936_5940 = G__5952;
i__5937_5941 = G__5953;
continue;
}
} else
{var node_5954 = cljs.core.first.call(null,seq__5934_5948__$1);
goog.dom.classes.remove(node_5954,class$);
{
var G__5955 = cljs.core.next.call(null,seq__5934_5948__$1);
var G__5956 = null;
var G__5957 = 0;
var G__5958 = 0;
seq__5934_5938 = G__5955;
chunk__5935_5939 = G__5956;
count__5936_5940 = G__5957;
i__5937_5941 = G__5958;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__5963_5967 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5964_5968 = null;
var count__5965_5969 = 0;
var i__5966_5970 = 0;
while(true){
if((i__5966_5970 < count__5965_5969))
{var node_5971 = cljs.core._nth.call(null,chunk__5964_5968,i__5966_5970);
goog.dom.classes.toggle(node_5971,class$);
{
var G__5972 = seq__5963_5967;
var G__5973 = chunk__5964_5968;
var G__5974 = count__5965_5969;
var G__5975 = (i__5966_5970 + 1);
seq__5963_5967 = G__5972;
chunk__5964_5968 = G__5973;
count__5965_5969 = G__5974;
i__5966_5970 = G__5975;
continue;
}
} else
{var temp__4092__auto___5976 = cljs.core.seq.call(null,seq__5963_5967);
if(temp__4092__auto___5976)
{var seq__5963_5977__$1 = temp__4092__auto___5976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5963_5977__$1))
{var c__3075__auto___5978 = cljs.core.chunk_first.call(null,seq__5963_5977__$1);
{
var G__5979 = cljs.core.chunk_rest.call(null,seq__5963_5977__$1);
var G__5980 = c__3075__auto___5978;
var G__5981 = cljs.core.count.call(null,c__3075__auto___5978);
var G__5982 = 0;
seq__5963_5967 = G__5979;
chunk__5964_5968 = G__5980;
count__5965_5969 = G__5981;
i__5966_5970 = G__5982;
continue;
}
} else
{var node_5983 = cljs.core.first.call(null,seq__5963_5977__$1);
goog.dom.classes.toggle(node_5983,class$);
{
var G__5984 = cljs.core.next.call(null,seq__5963_5977__$1);
var G__5985 = null;
var G__5986 = 0;
var G__5987 = 0;
seq__5963_5967 = G__5984;
chunk__5964_5968 = G__5985;
count__5965_5969 = G__5986;
i__5966_5970 = G__5987;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_5996__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__5992_5997 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5993_5998 = null;
var count__5994_5999 = 0;
var i__5995_6000 = 0;
while(true){
if((i__5995_6000 < count__5994_5999))
{var node_6001 = cljs.core._nth.call(null,chunk__5993_5998,i__5995_6000);
goog.dom.classes.set(node_6001,classes_5996__$1);
{
var G__6002 = seq__5992_5997;
var G__6003 = chunk__5993_5998;
var G__6004 = count__5994_5999;
var G__6005 = (i__5995_6000 + 1);
seq__5992_5997 = G__6002;
chunk__5993_5998 = G__6003;
count__5994_5999 = G__6004;
i__5995_6000 = G__6005;
continue;
}
} else
{var temp__4092__auto___6006 = cljs.core.seq.call(null,seq__5992_5997);
if(temp__4092__auto___6006)
{var seq__5992_6007__$1 = temp__4092__auto___6006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5992_6007__$1))
{var c__3075__auto___6008 = cljs.core.chunk_first.call(null,seq__5992_6007__$1);
{
var G__6009 = cljs.core.chunk_rest.call(null,seq__5992_6007__$1);
var G__6010 = c__3075__auto___6008;
var G__6011 = cljs.core.count.call(null,c__3075__auto___6008);
var G__6012 = 0;
seq__5992_5997 = G__6009;
chunk__5993_5998 = G__6010;
count__5994_5999 = G__6011;
i__5995_6000 = G__6012;
continue;
}
} else
{var node_6013 = cljs.core.first.call(null,seq__5992_6007__$1);
goog.dom.classes.set(node_6013,classes_5996__$1);
{
var G__6014 = cljs.core.next.call(null,seq__5992_6007__$1);
var G__6015 = null;
var G__6016 = 0;
var G__6017 = 0;
seq__5992_5997 = G__6014;
chunk__5993_5998 = G__6015;
count__5994_5999 = G__6016;
i__5995_6000 = G__6017;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__6022_6026 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6023_6027 = null;
var count__6024_6028 = 0;
var i__6025_6029 = 0;
while(true){
if((i__6025_6029 < count__6024_6028))
{var node_6030 = cljs.core._nth.call(null,chunk__6023_6027,i__6025_6029);
goog.dom.setTextContent(node_6030,value);
{
var G__6031 = seq__6022_6026;
var G__6032 = chunk__6023_6027;
var G__6033 = count__6024_6028;
var G__6034 = (i__6025_6029 + 1);
seq__6022_6026 = G__6031;
chunk__6023_6027 = G__6032;
count__6024_6028 = G__6033;
i__6025_6029 = G__6034;
continue;
}
} else
{var temp__4092__auto___6035 = cljs.core.seq.call(null,seq__6022_6026);
if(temp__4092__auto___6035)
{var seq__6022_6036__$1 = temp__4092__auto___6035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6022_6036__$1))
{var c__3075__auto___6037 = cljs.core.chunk_first.call(null,seq__6022_6036__$1);
{
var G__6038 = cljs.core.chunk_rest.call(null,seq__6022_6036__$1);
var G__6039 = c__3075__auto___6037;
var G__6040 = cljs.core.count.call(null,c__3075__auto___6037);
var G__6041 = 0;
seq__6022_6026 = G__6038;
chunk__6023_6027 = G__6039;
count__6024_6028 = G__6040;
i__6025_6029 = G__6041;
continue;
}
} else
{var node_6042 = cljs.core.first.call(null,seq__6022_6036__$1);
goog.dom.setTextContent(node_6042,value);
{
var G__6043 = cljs.core.next.call(null,seq__6022_6036__$1);
var G__6044 = null;
var G__6045 = 0;
var G__6046 = 0;
seq__6022_6026 = G__6043;
chunk__6023_6027 = G__6044;
count__6024_6028 = G__6045;
i__6025_6029 = G__6046;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__6051_6055 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6052_6056 = null;
var count__6053_6057 = 0;
var i__6054_6058 = 0;
while(true){
if((i__6054_6058 < count__6053_6057))
{var node_6059 = cljs.core._nth.call(null,chunk__6052_6056,i__6054_6058);
goog.dom.forms.setValue(node_6059,value);
{
var G__6060 = seq__6051_6055;
var G__6061 = chunk__6052_6056;
var G__6062 = count__6053_6057;
var G__6063 = (i__6054_6058 + 1);
seq__6051_6055 = G__6060;
chunk__6052_6056 = G__6061;
count__6053_6057 = G__6062;
i__6054_6058 = G__6063;
continue;
}
} else
{var temp__4092__auto___6064 = cljs.core.seq.call(null,seq__6051_6055);
if(temp__4092__auto___6064)
{var seq__6051_6065__$1 = temp__4092__auto___6064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6051_6065__$1))
{var c__3075__auto___6066 = cljs.core.chunk_first.call(null,seq__6051_6065__$1);
{
var G__6067 = cljs.core.chunk_rest.call(null,seq__6051_6065__$1);
var G__6068 = c__3075__auto___6066;
var G__6069 = cljs.core.count.call(null,c__3075__auto___6066);
var G__6070 = 0;
seq__6051_6055 = G__6067;
chunk__6052_6056 = G__6068;
count__6053_6057 = G__6069;
i__6054_6058 = G__6070;
continue;
}
} else
{var node_6071 = cljs.core.first.call(null,seq__6051_6065__$1);
goog.dom.forms.setValue(node_6071,value);
{
var G__6072 = cljs.core.next.call(null,seq__6051_6065__$1);
var G__6073 = null;
var G__6074 = 0;
var G__6075 = 0;
seq__6051_6055 = G__6072;
chunk__6052_6056 = G__6073;
count__6053_6057 = G__6074;
i__6054_6058 = G__6075;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;
if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_6086 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__6082_6087 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6083_6088 = null;
var count__6084_6089 = 0;
var i__6085_6090 = 0;
while(true){
if((i__6085_6090 < count__6084_6089))
{var node_6091 = cljs.core._nth.call(null,chunk__6083_6088,i__6085_6090);
node_6091.innerHTML = value_6086;
{
var G__6092 = seq__6082_6087;
var G__6093 = chunk__6083_6088;
var G__6094 = count__6084_6089;
var G__6095 = (i__6085_6090 + 1);
seq__6082_6087 = G__6092;
chunk__6083_6088 = G__6093;
count__6084_6089 = G__6094;
i__6085_6090 = G__6095;
continue;
}
} else
{var temp__4092__auto___6096 = cljs.core.seq.call(null,seq__6082_6087);
if(temp__4092__auto___6096)
{var seq__6082_6097__$1 = temp__4092__auto___6096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6082_6097__$1))
{var c__3075__auto___6098 = cljs.core.chunk_first.call(null,seq__6082_6097__$1);
{
var G__6099 = cljs.core.chunk_rest.call(null,seq__6082_6097__$1);
var G__6100 = c__3075__auto___6098;
var G__6101 = cljs.core.count.call(null,c__3075__auto___6098);
var G__6102 = 0;
seq__6082_6087 = G__6099;
chunk__6083_6088 = G__6100;
count__6084_6089 = G__6101;
i__6085_6090 = G__6102;
continue;
}
} else
{var node_6103 = cljs.core.first.call(null,seq__6082_6097__$1);
node_6103.innerHTML = value_6086;
{
var G__6104 = cljs.core.next.call(null,seq__6082_6097__$1);
var G__6105 = null;
var G__6106 = 0;
var G__6107 = 0;
seq__6082_6087 = G__6104;
chunk__6083_6088 = G__6105;
count__6084_6089 = G__6106;
i__6085_6090 = G__6107;
continue;
}
}
} else
{}
}
break;
}
}catch (e6081){if((e6081 instanceof Error))
{var e_6108 = e6081;
domina.replace_children_BANG_.call(null,content,value_6086);
} else
{if("\uFDD0:else")
{throw e6081;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;
if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3943__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__6115_6119 = cljs.core.seq.call(null,children);
var chunk__6116_6120 = null;
var count__6117_6121 = 0;
var i__6118_6122 = 0;
while(true){
if((i__6118_6122 < count__6117_6121))
{var child_6123 = cljs.core._nth.call(null,chunk__6116_6120,i__6118_6122);
frag.appendChild(child_6123);
{
var G__6124 = seq__6115_6119;
var G__6125 = chunk__6116_6120;
var G__6126 = count__6117_6121;
var G__6127 = (i__6118_6122 + 1);
seq__6115_6119 = G__6124;
chunk__6116_6120 = G__6125;
count__6117_6121 = G__6126;
i__6118_6122 = G__6127;
continue;
}
} else
{var temp__4092__auto___6128 = cljs.core.seq.call(null,seq__6115_6119);
if(temp__4092__auto___6128)
{var seq__6115_6129__$1 = temp__4092__auto___6128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6115_6129__$1))
{var c__3075__auto___6130 = cljs.core.chunk_first.call(null,seq__6115_6129__$1);
{
var G__6131 = cljs.core.chunk_rest.call(null,seq__6115_6129__$1);
var G__6132 = c__3075__auto___6130;
var G__6133 = cljs.core.count.call(null,c__3075__auto___6130);
var G__6134 = 0;
seq__6115_6119 = G__6131;
chunk__6116_6120 = G__6132;
count__6117_6121 = G__6133;
i__6118_6122 = G__6134;
continue;
}
} else
{var child_6135 = cljs.core.first.call(null,seq__6115_6129__$1);
frag.appendChild(child_6135);
{
var G__6136 = cljs.core.next.call(null,seq__6115_6129__$1);
var G__6137 = null;
var G__6138 = 0;
var G__6139 = 0;
seq__6115_6119 = G__6136;
chunk__6116_6120 = G__6137;
count__6117_6121 = G__6138;
i__6118_6122 = G__6139;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6109_SHARP_,p2__6110_SHARP_){
return f.call(null,p1__6109_SHARP_,p2__6110_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto__ = obj;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3941__auto____$1)
{return obj.length;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6141 = list_thing;
if(G__6141)
{if((function (){var or__3943__auto__ = (G__6141.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__6141.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6141);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6142 = content;
if(G__6142)
{if((function (){var or__3943__auto__ = (G__6142.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__6142.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6142);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6142);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__6143 = content;
if(G__6143)
{if((function (){var or__3943__auto__ = (G__6143.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__6143.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6143.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6143);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6143);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0:default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
