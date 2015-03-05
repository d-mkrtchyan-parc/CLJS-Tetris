goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = 0;
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__6734 = (i + class$.length);
start_from = G__6734;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;
return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;
var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;
return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___6759 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___6759))
{var class_list_6760 = temp__4090__auto___6759;
var seq__6747_6761 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__6748_6762 = null;
var count__6749_6763 = 0;
var i__6750_6764 = 0;
while(true){
if((i__6750_6764 < count__6749_6763))
{var class_6765 = cljs.core._nth.call(null,chunk__6748_6762,i__6750_6764);
class_list_6760.add(class_6765);
{
var G__6766 = seq__6747_6761;
var G__6767 = chunk__6748_6762;
var G__6768 = count__6749_6763;
var G__6769 = (i__6750_6764 + 1);
seq__6747_6761 = G__6766;
chunk__6748_6762 = G__6767;
count__6749_6763 = G__6768;
i__6750_6764 = G__6769;
continue;
}
} else
{var temp__4092__auto___6770 = cljs.core.seq.call(null,seq__6747_6761);
if(temp__4092__auto___6770)
{var seq__6747_6771__$1 = temp__4092__auto___6770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6747_6771__$1))
{var c__3075__auto___6772 = cljs.core.chunk_first.call(null,seq__6747_6771__$1);
{
var G__6773 = cljs.core.chunk_rest.call(null,seq__6747_6771__$1);
var G__6774 = c__3075__auto___6772;
var G__6775 = cljs.core.count.call(null,c__3075__auto___6772);
var G__6776 = 0;
seq__6747_6761 = G__6773;
chunk__6748_6762 = G__6774;
count__6749_6763 = G__6775;
i__6750_6764 = G__6776;
continue;
}
} else
{var class_6777 = cljs.core.first.call(null,seq__6747_6771__$1);
class_list_6760.add(class_6777);
{
var G__6778 = cljs.core.next.call(null,seq__6747_6771__$1);
var G__6779 = null;
var G__6780 = 0;
var G__6781 = 0;
seq__6747_6761 = G__6778;
chunk__6748_6762 = G__6779;
count__6749_6763 = G__6780;
i__6750_6764 = G__6781;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_6782 = elem__$1.className;
var seq__6751_6783 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__6752_6784 = null;
var count__6753_6785 = 0;
var i__6754_6786 = 0;
while(true){
if((i__6754_6786 < count__6753_6785))
{var class_6787 = cljs.core._nth.call(null,chunk__6752_6784,i__6754_6786);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6782,class_6787)))
{} else
{elem__$1.className = (((class_name_6782 === ""))?class_6787:[cljs.core.str(class_name_6782),cljs.core.str(" "),cljs.core.str(class_6787)].join(''));
}
{
var G__6788 = seq__6751_6783;
var G__6789 = chunk__6752_6784;
var G__6790 = count__6753_6785;
var G__6791 = (i__6754_6786 + 1);
seq__6751_6783 = G__6788;
chunk__6752_6784 = G__6789;
count__6753_6785 = G__6790;
i__6754_6786 = G__6791;
continue;
}
} else
{var temp__4092__auto___6792 = cljs.core.seq.call(null,seq__6751_6783);
if(temp__4092__auto___6792)
{var seq__6751_6793__$1 = temp__4092__auto___6792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6751_6793__$1))
{var c__3075__auto___6794 = cljs.core.chunk_first.call(null,seq__6751_6793__$1);
{
var G__6795 = cljs.core.chunk_rest.call(null,seq__6751_6793__$1);
var G__6796 = c__3075__auto___6794;
var G__6797 = cljs.core.count.call(null,c__3075__auto___6794);
var G__6798 = 0;
seq__6751_6783 = G__6795;
chunk__6752_6784 = G__6796;
count__6753_6785 = G__6797;
i__6754_6786 = G__6798;
continue;
}
} else
{var class_6799 = cljs.core.first.call(null,seq__6751_6793__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6782,class_6799)))
{} else
{elem__$1.className = (((class_name_6782 === ""))?class_6799:[cljs.core.str(class_name_6782),cljs.core.str(" "),cljs.core.str(class_6799)].join(''));
}
{
var G__6800 = cljs.core.next.call(null,seq__6751_6793__$1);
var G__6801 = null;
var G__6802 = 0;
var G__6803 = 0;
seq__6751_6783 = G__6800;
chunk__6752_6784 = G__6801;
count__6753_6785 = G__6802;
i__6754_6786 = G__6803;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__6804__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6755_6805 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__6756_6806 = null;
var count__6757_6807 = 0;
var i__6758_6808 = 0;
while(true){
if((i__6758_6808 < count__6757_6807))
{var c_6809 = cljs.core._nth.call(null,chunk__6756_6806,i__6758_6808);
add_class_BANG_.call(null,elem__$1,c_6809);
{
var G__6810 = seq__6755_6805;
var G__6811 = chunk__6756_6806;
var G__6812 = count__6757_6807;
var G__6813 = (i__6758_6808 + 1);
seq__6755_6805 = G__6810;
chunk__6756_6806 = G__6811;
count__6757_6807 = G__6812;
i__6758_6808 = G__6813;
continue;
}
} else
{var temp__4092__auto___6814 = cljs.core.seq.call(null,seq__6755_6805);
if(temp__4092__auto___6814)
{var seq__6755_6815__$1 = temp__4092__auto___6814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6755_6815__$1))
{var c__3075__auto___6816 = cljs.core.chunk_first.call(null,seq__6755_6815__$1);
{
var G__6817 = cljs.core.chunk_rest.call(null,seq__6755_6815__$1);
var G__6818 = c__3075__auto___6816;
var G__6819 = cljs.core.count.call(null,c__3075__auto___6816);
var G__6820 = 0;
seq__6755_6805 = G__6817;
chunk__6756_6806 = G__6818;
count__6757_6807 = G__6819;
i__6758_6808 = G__6820;
continue;
}
} else
{var c_6821 = cljs.core.first.call(null,seq__6755_6815__$1);
add_class_BANG_.call(null,elem__$1,c_6821);
{
var G__6822 = cljs.core.next.call(null,seq__6755_6815__$1);
var G__6823 = null;
var G__6824 = 0;
var G__6825 = 0;
seq__6755_6805 = G__6822;
chunk__6756_6806 = G__6823;
count__6757_6807 = G__6824;
i__6758_6808 = G__6825;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6804 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6804__delegate.call(this, elem, classes, more_classes);
};
G__6804.cljs$lang$maxFixedArity = 2;
G__6804.cljs$lang$applyTo = (function (arglist__6826){
var elem = cljs.core.first(arglist__6826);
arglist__6826 = cljs.core.next(arglist__6826);
var classes = cljs.core.first(arglist__6826);
var more_classes = cljs.core.rest(arglist__6826);
return G__6804__delegate(elem, classes, more_classes);
});
G__6804.cljs$core$IFn$_invoke$arity$variadic = G__6804__delegate;
return G__6804;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
{
var G__6827 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6827;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto___6836 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___6836))
{var class_list_6837 = temp__4090__auto___6836;
class_list_6837.remove(class$__$1);
} else
{var class_name_6838 = elem__$1.className;
var new_class_name_6839 = dommy.attrs.remove_class_str.call(null,class_name_6838,class$__$1);
if((class_name_6838 === new_class_name_6839))
{} else
{elem__$1.className = new_class_name_6839;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6840__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6832 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__6833 = null;
var count__6834 = 0;
var i__6835 = 0;
while(true){
if((i__6835 < count__6834))
{var c = cljs.core._nth.call(null,chunk__6833,i__6835);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__6841 = seq__6832;
var G__6842 = chunk__6833;
var G__6843 = count__6834;
var G__6844 = (i__6835 + 1);
seq__6832 = G__6841;
chunk__6833 = G__6842;
count__6834 = G__6843;
i__6835 = G__6844;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6832);
if(temp__4092__auto__)
{var seq__6832__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6832__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__6832__$1);
{
var G__6845 = cljs.core.chunk_rest.call(null,seq__6832__$1);
var G__6846 = c__3075__auto__;
var G__6847 = cljs.core.count.call(null,c__3075__auto__);
var G__6848 = 0;
seq__6832 = G__6845;
chunk__6833 = G__6846;
count__6834 = G__6847;
i__6835 = G__6848;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6832__$1);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__6849 = cljs.core.next.call(null,seq__6832__$1);
var G__6850 = null;
var G__6851 = 0;
var G__6852 = 0;
seq__6832 = G__6849;
chunk__6833 = G__6850;
count__6834 = G__6851;
i__6835 = G__6852;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6840 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6840__delegate.call(this, elem, class$, classes);
};
G__6840.cljs$lang$maxFixedArity = 2;
G__6840.cljs$lang$applyTo = (function (arglist__6853){
var elem = cljs.core.first(arglist__6853);
arglist__6853 = cljs.core.next(arglist__6853);
var class$ = cljs.core.first(arglist__6853);
var classes = cljs.core.rest(arglist__6853);
return G__6840__delegate(elem, class$, classes);
});
G__6840.cljs$core$IFn$_invoke$arity$variadic = G__6840__delegate;
return G__6840;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto___6854 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___6854))
{var class_list_6855 = temp__4090__auto___6854;
class_list_6855.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__6858){
var vec__6859 = p__6858;
var k = cljs.core.nth.call(null,vec__6859,0,null);
var v = cljs.core.nth.call(null,vec__6859,1,null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",120,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",120,"\uFDD0:column",11))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__6866_6872 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__6867_6873 = null;
var count__6868_6874 = 0;
var i__6869_6875 = 0;
while(true){
if((i__6869_6875 < count__6868_6874))
{var vec__6870_6876 = cljs.core._nth.call(null,chunk__6867_6873,i__6869_6875);
var k_6877 = cljs.core.nth.call(null,vec__6870_6876,0,null);
var v_6878 = cljs.core.nth.call(null,vec__6870_6876,1,null);
(style[cljs.core.name.call(null,k_6877)] = v_6878);
{
var G__6879 = seq__6866_6872;
var G__6880 = chunk__6867_6873;
var G__6881 = count__6868_6874;
var G__6882 = (i__6869_6875 + 1);
seq__6866_6872 = G__6879;
chunk__6867_6873 = G__6880;
count__6868_6874 = G__6881;
i__6869_6875 = G__6882;
continue;
}
} else
{var temp__4092__auto___6883 = cljs.core.seq.call(null,seq__6866_6872);
if(temp__4092__auto___6883)
{var seq__6866_6884__$1 = temp__4092__auto___6883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6866_6884__$1))
{var c__3075__auto___6885 = cljs.core.chunk_first.call(null,seq__6866_6884__$1);
{
var G__6886 = cljs.core.chunk_rest.call(null,seq__6866_6884__$1);
var G__6887 = c__3075__auto___6885;
var G__6888 = cljs.core.count.call(null,c__3075__auto___6885);
var G__6889 = 0;
seq__6866_6872 = G__6886;
chunk__6867_6873 = G__6887;
count__6868_6874 = G__6888;
i__6869_6875 = G__6889;
continue;
}
} else
{var vec__6871_6890 = cljs.core.first.call(null,seq__6866_6884__$1);
var k_6891 = cljs.core.nth.call(null,vec__6871_6890,0,null);
var v_6892 = cljs.core.nth.call(null,vec__6871_6890,1,null);
(style[cljs.core.name.call(null,k_6891)] = v_6892);
{
var G__6893 = cljs.core.next.call(null,seq__6866_6884__$1);
var G__6894 = null;
var G__6895 = 0;
var G__6896 = 0;
seq__6866_6872 = G__6893;
chunk__6867_6873 = G__6894;
count__6868_6874 = G__6895;
i__6869_6875 = G__6896;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6897){
var elem = cljs.core.first(arglist__6897);
var kvs = cljs.core.rest(arglist__6897);
return set_style_BANG___delegate(elem, kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",132,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",132,"\uFDD0:column",11))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6904_6910 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__6905_6911 = null;
var count__6906_6912 = 0;
var i__6907_6913 = 0;
while(true){
if((i__6907_6913 < count__6906_6912))
{var vec__6908_6914 = cljs.core._nth.call(null,chunk__6905_6911,i__6907_6913);
var k_6915 = cljs.core.nth.call(null,vec__6908_6914,0,null);
var v_6916 = cljs.core.nth.call(null,vec__6908_6914,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6915,[cljs.core.str(v_6916),cljs.core.str("px")].join(''));
{
var G__6917 = seq__6904_6910;
var G__6918 = chunk__6905_6911;
var G__6919 = count__6906_6912;
var G__6920 = (i__6907_6913 + 1);
seq__6904_6910 = G__6917;
chunk__6905_6911 = G__6918;
count__6906_6912 = G__6919;
i__6907_6913 = G__6920;
continue;
}
} else
{var temp__4092__auto___6921 = cljs.core.seq.call(null,seq__6904_6910);
if(temp__4092__auto___6921)
{var seq__6904_6922__$1 = temp__4092__auto___6921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6904_6922__$1))
{var c__3075__auto___6923 = cljs.core.chunk_first.call(null,seq__6904_6922__$1);
{
var G__6924 = cljs.core.chunk_rest.call(null,seq__6904_6922__$1);
var G__6925 = c__3075__auto___6923;
var G__6926 = cljs.core.count.call(null,c__3075__auto___6923);
var G__6927 = 0;
seq__6904_6910 = G__6924;
chunk__6905_6911 = G__6925;
count__6906_6912 = G__6926;
i__6907_6913 = G__6927;
continue;
}
} else
{var vec__6909_6928 = cljs.core.first.call(null,seq__6904_6922__$1);
var k_6929 = cljs.core.nth.call(null,vec__6909_6928,0,null);
var v_6930 = cljs.core.nth.call(null,vec__6909_6928,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6929,[cljs.core.str(v_6930),cljs.core.str("px")].join(''));
{
var G__6931 = cljs.core.next.call(null,seq__6904_6922__$1);
var G__6932 = null;
var G__6933 = 0;
var G__6934 = 0;
seq__6904_6910 = G__6931;
chunk__6905_6911 = G__6932;
count__6906_6912 = G__6933;
i__6907_6913 = G__6934;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6935){
var elem = cljs.core.first(arglist__6935);
var kvs = cljs.core.rest(arglist__6935);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6944 = dommy.template.__GT_node_like.call(null,elem);
(G__6944[cljs.core.name.call(null,k)] = v);
return G__6944;
} else
{var G__6945 = dommy.template.__GT_node_like.call(null,elem);
G__6945.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0:style"))?dommy.attrs.style_str.call(null,v):v));
return G__6945;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6952__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",166,"\uFDD0:column",19))),cljs.core.hash_map("\uFDD0:line",166,"\uFDD0:column",12))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6946_6953 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
var chunk__6947_6954 = null;
var count__6948_6955 = 0;
var i__6949_6956 = 0;
while(true){
if((i__6949_6956 < count__6948_6955))
{var vec__6950_6957 = cljs.core._nth.call(null,chunk__6947_6954,i__6949_6956);
var k_6958__$1 = cljs.core.nth.call(null,vec__6950_6957,0,null);
var v_6959__$1 = cljs.core.nth.call(null,vec__6950_6957,1,null);
set_attr_BANG_.call(null,elem__$1,k_6958__$1,v_6959__$1);
{
var G__6960 = seq__6946_6953;
var G__6961 = chunk__6947_6954;
var G__6962 = count__6948_6955;
var G__6963 = (i__6949_6956 + 1);
seq__6946_6953 = G__6960;
chunk__6947_6954 = G__6961;
count__6948_6955 = G__6962;
i__6949_6956 = G__6963;
continue;
}
} else
{var temp__4092__auto___6964 = cljs.core.seq.call(null,seq__6946_6953);
if(temp__4092__auto___6964)
{var seq__6946_6965__$1 = temp__4092__auto___6964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6946_6965__$1))
{var c__3075__auto___6966 = cljs.core.chunk_first.call(null,seq__6946_6965__$1);
{
var G__6967 = cljs.core.chunk_rest.call(null,seq__6946_6965__$1);
var G__6968 = c__3075__auto___6966;
var G__6969 = cljs.core.count.call(null,c__3075__auto___6966);
var G__6970 = 0;
seq__6946_6953 = G__6967;
chunk__6947_6954 = G__6968;
count__6948_6955 = G__6969;
i__6949_6956 = G__6970;
continue;
}
} else
{var vec__6951_6971 = cljs.core.first.call(null,seq__6946_6965__$1);
var k_6972__$1 = cljs.core.nth.call(null,vec__6951_6971,0,null);
var v_6973__$1 = cljs.core.nth.call(null,vec__6951_6971,1,null);
set_attr_BANG_.call(null,elem__$1,k_6972__$1,v_6973__$1);
{
var G__6974 = cljs.core.next.call(null,seq__6946_6965__$1);
var G__6975 = null;
var G__6976 = 0;
var G__6977 = 0;
seq__6946_6953 = G__6974;
chunk__6947_6954 = G__6975;
count__6948_6955 = G__6976;
i__6949_6956 = G__6977;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6952 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6952__delegate.call(this, elem, k, v, kvs);
};
G__6952.cljs$lang$maxFixedArity = 3;
G__6952.cljs$lang$applyTo = (function (arglist__6978){
var elem = cljs.core.first(arglist__6978);
arglist__6978 = cljs.core.next(arglist__6978);
var k = cljs.core.first(arglist__6978);
arglist__6978 = cljs.core.next(arglist__6978);
var v = cljs.core.first(arglist__6978);
var kvs = cljs.core.rest(arglist__6978);
return G__6952__delegate(elem, k, v, kvs);
});
G__6952.cljs$core$IFn$_invoke$arity$variadic = G__6952__delegate;
return G__6952;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:class",null,"\uFDD0:classes",null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__6987__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6983_6988 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__6984_6989 = null;
var count__6985_6990 = 0;
var i__6986_6991 = 0;
while(true){
if((i__6986_6991 < count__6985_6990))
{var k_6992__$1 = cljs.core._nth.call(null,chunk__6984_6989,i__6986_6991);
remove_attr_BANG_.call(null,elem__$1,k_6992__$1);
{
var G__6993 = seq__6983_6988;
var G__6994 = chunk__6984_6989;
var G__6995 = count__6985_6990;
var G__6996 = (i__6986_6991 + 1);
seq__6983_6988 = G__6993;
chunk__6984_6989 = G__6994;
count__6985_6990 = G__6995;
i__6986_6991 = G__6996;
continue;
}
} else
{var temp__4092__auto___6997 = cljs.core.seq.call(null,seq__6983_6988);
if(temp__4092__auto___6997)
{var seq__6983_6998__$1 = temp__4092__auto___6997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6983_6998__$1))
{var c__3075__auto___6999 = cljs.core.chunk_first.call(null,seq__6983_6998__$1);
{
var G__7000 = cljs.core.chunk_rest.call(null,seq__6983_6998__$1);
var G__7001 = c__3075__auto___6999;
var G__7002 = cljs.core.count.call(null,c__3075__auto___6999);
var G__7003 = 0;
seq__6983_6988 = G__7000;
chunk__6984_6989 = G__7001;
count__6985_6990 = G__7002;
i__6986_6991 = G__7003;
continue;
}
} else
{var k_7004__$1 = cljs.core.first.call(null,seq__6983_6998__$1);
remove_attr_BANG_.call(null,elem__$1,k_7004__$1);
{
var G__7005 = cljs.core.next.call(null,seq__6983_6998__$1);
var G__7006 = null;
var G__7007 = 0;
var G__7008 = 0;
seq__6983_6988 = G__7005;
chunk__6984_6989 = G__7006;
count__6985_6990 = G__7007;
i__6986_6991 = G__7008;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6987 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6987__delegate.call(this, elem, k, ks);
};
G__6987.cljs$lang$maxFixedArity = 2;
G__6987.cljs$lang$applyTo = (function (arglist__7009){
var elem = cljs.core.first(arglist__7009);
arglist__7009 = cljs.core.next(arglist__7009);
var k = cljs.core.first(arglist__7009);
var ks = cljs.core.rest(arglist__7009);
return G__6987__delegate(elem, k, ks);
});
G__6987.cljs$core$IFn$_invoke$arity$variadic = G__6987__delegate;
return G__6987;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__7011 = dommy.template.__GT_node_like.call(null,elem);
G__7011.style.display = ((show_QMARK_)?"":"none");
return G__7011;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__7013 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__7013,false);
return G__7013;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__7015 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__7015,true);
return G__7015;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__7017 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__7017["constructor"] = Object);
return G__7017;
})(),"\uFDD0:keywordize-keys",true);
});
