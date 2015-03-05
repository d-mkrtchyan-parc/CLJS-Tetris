goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__2944__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__2944__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,0);
var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":(("\uFDD0:else")?node_str:null)));
var node = document.createElement(tag);
if((base_idx >= 0))
{var str_6586 = node_str.substring(base_idx);
while(true){
var next_idx_6587 = dommy.template.next_css_index.call(null,str_6586,1);
var frag_6588 = (((next_idx_6587 >= 0))?str_6586.substring(0,next_idx_6587):str_6586);
var G__6585_6589 = frag_6588.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__6585_6589))
{node.setAttribute("id",frag_6588.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__6585_6589))
{dommy.attrs.add_class_BANG_.call(null,node,frag_6588.substring(1));
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_6588.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_6587 >= 0))
{{
var G__6590 = str_6586.substring(next_idx_6587);
str_6586 = G__6590;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__6596 = data;
if(G__6596)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6596.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6596.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6596);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6596);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6597_6601 = cljs.core.seq.call(null,data);
var chunk__6598_6602 = null;
var count__6599_6603 = 0;
var i__6600_6604 = 0;
while(true){
if((i__6600_6604 < count__6599_6603))
{var child_6605 = cljs.core._nth.call(null,chunk__6598_6602,i__6600_6604);
__GT_document_fragment.call(null,result_frag,child_6605);
{
var G__6606 = seq__6597_6601;
var G__6607 = chunk__6598_6602;
var G__6608 = count__6599_6603;
var G__6609 = (i__6600_6604 + 1);
seq__6597_6601 = G__6606;
chunk__6598_6602 = G__6607;
count__6599_6603 = G__6608;
i__6600_6604 = G__6609;
continue;
}
} else
{var temp__4092__auto___6610 = cljs.core.seq.call(null,seq__6597_6601);
if(temp__4092__auto___6610)
{var seq__6597_6611__$1 = temp__4092__auto___6610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6597_6611__$1))
{var c__3075__auto___6612 = cljs.core.chunk_first.call(null,seq__6597_6611__$1);
{
var G__6613 = cljs.core.chunk_rest.call(null,seq__6597_6611__$1);
var G__6614 = c__3075__auto___6612;
var G__6615 = cljs.core.count.call(null,c__3075__auto___6612);
var G__6616 = 0;
seq__6597_6601 = G__6613;
chunk__6598_6602 = G__6614;
count__6599_6603 = G__6615;
i__6600_6604 = G__6616;
continue;
}
} else
{var child_6617 = cljs.core.first.call(null,seq__6597_6611__$1);
__GT_document_fragment.call(null,result_frag,child_6617);
{
var G__6618 = cljs.core.next.call(null,seq__6597_6611__$1);
var G__6619 = null;
var G__6620 = 0;
var G__6621 = 0;
seq__6597_6601 = G__6618;
chunk__6598_6602 = G__6619;
count__6599_6603 = G__6620;
i__6600_6604 = G__6621;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if("\uFDD0:else")
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__6623 = data;
if(G__6623)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6623.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6623.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6623);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6623);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__6624){
var vec__6643 = p__6624;
var tag_name = cljs.core.nth.call(null,vec__6643,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__6643,1,null);
var children = cljs.core.nthnext.call(null,vec__6643,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__6644 = maybe_attrs;
if(G__6644)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6644.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6644.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6644);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6644);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__6645_6661 = cljs.core.seq.call(null,attrs);
var chunk__6646_6662 = null;
var count__6647_6663 = 0;
var i__6648_6664 = 0;
while(true){
if((i__6648_6664 < count__6647_6663))
{var vec__6649_6665 = cljs.core._nth.call(null,chunk__6646_6662,i__6648_6664);
var k_6666 = cljs.core.nth.call(null,vec__6649_6665,0,null);
var v_6667 = cljs.core.nth.call(null,vec__6649_6665,1,null);
var G__6650_6668 = k_6666;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__6650_6668))
{var seq__6651_6669 = cljs.core.seq.call(null,v_6667);
var chunk__6652_6670 = null;
var count__6653_6671 = 0;
var i__6654_6672 = 0;
while(true){
if((i__6654_6672 < count__6653_6671))
{var c_6673 = cljs.core._nth.call(null,chunk__6652_6670,i__6654_6672);
dommy.attrs.add_class_BANG_.call(null,n,c_6673);
{
var G__6674 = seq__6651_6669;
var G__6675 = chunk__6652_6670;
var G__6676 = count__6653_6671;
var G__6677 = (i__6654_6672 + 1);
seq__6651_6669 = G__6674;
chunk__6652_6670 = G__6675;
count__6653_6671 = G__6676;
i__6654_6672 = G__6677;
continue;
}
} else
{var temp__4092__auto___6678 = cljs.core.seq.call(null,seq__6651_6669);
if(temp__4092__auto___6678)
{var seq__6651_6679__$1 = temp__4092__auto___6678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6651_6679__$1))
{var c__3075__auto___6680 = cljs.core.chunk_first.call(null,seq__6651_6679__$1);
{
var G__6681 = cljs.core.chunk_rest.call(null,seq__6651_6679__$1);
var G__6682 = c__3075__auto___6680;
var G__6683 = cljs.core.count.call(null,c__3075__auto___6680);
var G__6684 = 0;
seq__6651_6669 = G__6681;
chunk__6652_6670 = G__6682;
count__6653_6671 = G__6683;
i__6654_6672 = G__6684;
continue;
}
} else
{var c_6685 = cljs.core.first.call(null,seq__6651_6679__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_6685);
{
var G__6686 = cljs.core.next.call(null,seq__6651_6679__$1);
var G__6687 = null;
var G__6688 = 0;
var G__6689 = 0;
seq__6651_6669 = G__6686;
chunk__6652_6670 = G__6687;
count__6653_6671 = G__6688;
i__6654_6672 = G__6689;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__6650_6668))
{dommy.attrs.add_class_BANG_.call(null,n,v_6667);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_6666,v_6667);
} else
{}
}
}
{
var G__6690 = seq__6645_6661;
var G__6691 = chunk__6646_6662;
var G__6692 = count__6647_6663;
var G__6693 = (i__6648_6664 + 1);
seq__6645_6661 = G__6690;
chunk__6646_6662 = G__6691;
count__6647_6663 = G__6692;
i__6648_6664 = G__6693;
continue;
}
} else
{var temp__4092__auto___6694 = cljs.core.seq.call(null,seq__6645_6661);
if(temp__4092__auto___6694)
{var seq__6645_6695__$1 = temp__4092__auto___6694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6645_6695__$1))
{var c__3075__auto___6696 = cljs.core.chunk_first.call(null,seq__6645_6695__$1);
{
var G__6697 = cljs.core.chunk_rest.call(null,seq__6645_6695__$1);
var G__6698 = c__3075__auto___6696;
var G__6699 = cljs.core.count.call(null,c__3075__auto___6696);
var G__6700 = 0;
seq__6645_6661 = G__6697;
chunk__6646_6662 = G__6698;
count__6647_6663 = G__6699;
i__6648_6664 = G__6700;
continue;
}
} else
{var vec__6655_6701 = cljs.core.first.call(null,seq__6645_6695__$1);
var k_6702 = cljs.core.nth.call(null,vec__6655_6701,0,null);
var v_6703 = cljs.core.nth.call(null,vec__6655_6701,1,null);
var G__6656_6704 = k_6702;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__6656_6704))
{var seq__6657_6705 = cljs.core.seq.call(null,v_6703);
var chunk__6658_6706 = null;
var count__6659_6707 = 0;
var i__6660_6708 = 0;
while(true){
if((i__6660_6708 < count__6659_6707))
{var c_6709 = cljs.core._nth.call(null,chunk__6658_6706,i__6660_6708);
dommy.attrs.add_class_BANG_.call(null,n,c_6709);
{
var G__6710 = seq__6657_6705;
var G__6711 = chunk__6658_6706;
var G__6712 = count__6659_6707;
var G__6713 = (i__6660_6708 + 1);
seq__6657_6705 = G__6710;
chunk__6658_6706 = G__6711;
count__6659_6707 = G__6712;
i__6660_6708 = G__6713;
continue;
}
} else
{var temp__4092__auto___6714__$1 = cljs.core.seq.call(null,seq__6657_6705);
if(temp__4092__auto___6714__$1)
{var seq__6657_6715__$1 = temp__4092__auto___6714__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6657_6715__$1))
{var c__3075__auto___6716 = cljs.core.chunk_first.call(null,seq__6657_6715__$1);
{
var G__6717 = cljs.core.chunk_rest.call(null,seq__6657_6715__$1);
var G__6718 = c__3075__auto___6716;
var G__6719 = cljs.core.count.call(null,c__3075__auto___6716);
var G__6720 = 0;
seq__6657_6705 = G__6717;
chunk__6658_6706 = G__6718;
count__6659_6707 = G__6719;
i__6660_6708 = G__6720;
continue;
}
} else
{var c_6721 = cljs.core.first.call(null,seq__6657_6715__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_6721);
{
var G__6722 = cljs.core.next.call(null,seq__6657_6715__$1);
var G__6723 = null;
var G__6724 = 0;
var G__6725 = 0;
seq__6657_6705 = G__6722;
chunk__6658_6706 = G__6723;
count__6659_6707 = G__6724;
i__6660_6708 = G__6725;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__6656_6704))
{dommy.attrs.add_class_BANG_.call(null,n,v_6703);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_6702,v_6703);
} else
{}
}
}
{
var G__6726 = cljs.core.next.call(null,seq__6645_6695__$1);
var G__6727 = null;
var G__6728 = 0;
var G__6729 = 0;
seq__6645_6661 = G__6726;
chunk__6646_6662 = G__6727;
count__6647_6663 = G__6728;
i__6648_6664 = G__6729;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
}catch (e6730){if((e6730 instanceof ReferenceError))
{var __6731 = e6730;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0:else")
{throw e6730;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__6733 = data;
if(G__6733)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6733.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6733.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6733);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6733);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
