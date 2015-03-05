goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core');
goog.provide('tailrecursion.priority_map.PersistentPriorityMap');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__2884__auto__,writer__2885__auto__,opt__2886__auto__){
return cljs.core._write.call(null,writer__2885__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var h__2770__auto__ = self__.__hash;
if(!((h__2770__auto__ == null)))
{return h__2770__auto__;
} else
{var h__2770__auto____$1 = cljs.core.hash_imap.call(null,this$);
self__.__hash = h__2770__auto____$1;
return h__2770__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var temp__4090__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4090__auto__))
{var current_priority = temp__4090__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority))
{return this$;
} else
{var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__5515 = null;
var G__5515__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(this$,item);
});
var G__5515__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(this$,item,not_found);
});
G__5515 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__5515__2.call(this,self__,item);
case 3:
return G__5515__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5515;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args5490){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args5490.slice()));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return this$.cljs$core$IAssociative$_assoc$arity$3(this$,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.seq.call(null,(function (){var iter__3044__auto__ = (function iter__5491(s__5492){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5492__$1 = s__5492;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5492__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var vec__5498 = cljs.core.first.call(null,xs__4579__auto__);
var priority = cljs.core.nth.call(null,vec__5498,0,null);
var item_set = cljs.core.nth.call(null,vec__5498,1,null);
var iterys__3040__auto__ = ((function (s__5492__$1,vec__5498,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__5493(s__5494){
return (new cljs.core.LazySeq(null,false,((function (s__5492__$1,vec__5498,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__5494__$1 = s__5494;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5494__$1);
if(temp__4092__auto____$1)
{var s__5494__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5494__$2))
{var c__3042__auto__ = cljs.core.chunk_first.call(null,s__5494__$2);
var size__3043__auto__ = cljs.core.count.call(null,c__3042__auto__);
var b__5496 = cljs.core.chunk_buffer.call(null,size__3043__auto__);
if((function (){var i__5495 = 0;
while(true){
if((i__5495 < size__3043__auto__))
{var item = cljs.core._nth.call(null,c__3042__auto__,i__5495);
cljs.core.chunk_append.call(null,b__5496,cljs.core.PersistentVector.fromArray([item,priority], true));
{
var G__5516 = (i__5495 + 1);
i__5495 = G__5516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5496),iter__5493.call(null,cljs.core.chunk_rest.call(null,s__5494__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5496),null);
}
} else
{var item = cljs.core.first.call(null,s__5494__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([item,priority], true),iter__5493.call(null,cljs.core.rest.call(null,s__5494__$2)));
}
} else
{return null;
}
break;
}
});})(s__5492__$1,vec__5498,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__5492__$1,vec__5498,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;
var fs__3041__auto__ = cljs.core.seq.call(null,iterys__3040__auto__.call(null,item_set));
if(fs__3041__auto__)
{return cljs.core.concat.call(null,fs__3041__auto__,iter__5491.call(null,cljs.core.rest.call(null,s__5492__$1)));
} else
{{
var G__5517 = cljs.core.rest.call(null,s__5492__$1);
s__5492__$1 = G__5517;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3044__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__3044__auto__ = (function iter__5499(s__5500){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5500__$1 = s__5500;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5500__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var vec__5506 = cljs.core.first.call(null,xs__4579__auto__);
var priority = cljs.core.nth.call(null,vec__5506,0,null);
var item_set = cljs.core.nth.call(null,vec__5506,1,null);
var iterys__3040__auto__ = ((function (s__5500__$1,vec__5506,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__5501(s__5502){
return (new cljs.core.LazySeq(null,false,((function (s__5500__$1,vec__5506,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__5502__$1 = s__5502;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5502__$1);
if(temp__4092__auto____$1)
{var s__5502__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5502__$2))
{var c__3042__auto__ = cljs.core.chunk_first.call(null,s__5502__$2);
var size__3043__auto__ = cljs.core.count.call(null,c__3042__auto__);
var b__5504 = cljs.core.chunk_buffer.call(null,size__3043__auto__);
if((function (){var i__5503 = 0;
while(true){
if((i__5503 < size__3043__auto__))
{var item = cljs.core._nth.call(null,c__3042__auto__,i__5503);
cljs.core.chunk_append.call(null,b__5504,cljs.core.PersistentVector.fromArray([item,priority], true));
{
var G__5518 = (i__5503 + 1);
i__5503 = G__5518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5504),iter__5501.call(null,cljs.core.chunk_rest.call(null,s__5502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5504),null);
}
} else
{var item = cljs.core.first.call(null,s__5502__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([item,priority], true),iter__5501.call(null,cljs.core.rest.call(null,s__5502__$2)));
}
} else
{return null;
}
break;
}
});})(s__5500__$1,vec__5506,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__5500__$1,vec__5506,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;
var fs__3041__auto__ = cljs.core.seq.call(null,iterys__3040__auto__.call(null,item_set));
if(fs__3041__auto__)
{return cljs.core.concat.call(null,fs__3041__auto__,iter__5499.call(null,cljs.core.rest.call(null,s__5500__$1)));
} else
{{
var G__5519 = cljs.core.rest.call(null,s__5500__$1);
s__5500__$1 = G__5519;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3044__auto__.call(null,sets);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
return cljs.core.val.call(null,entry);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
return cljs.core.compare;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return cljs.core.seq.call(null,(function (){var iter__3044__auto__ = (function iter__5507(s__5508){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5508__$1 = s__5508;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5508__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var vec__5514 = cljs.core.first.call(null,xs__4579__auto__);
var priority = cljs.core.nth.call(null,vec__5514,0,null);
var item_set = cljs.core.nth.call(null,vec__5514,1,null);
var iterys__3040__auto__ = ((function (s__5508__$1,vec__5514,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__5509(s__5510){
return (new cljs.core.LazySeq(null,false,((function (s__5508__$1,vec__5514,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__5510__$1 = s__5510;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5510__$1);
if(temp__4092__auto____$1)
{var s__5510__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5510__$2))
{var c__3042__auto__ = cljs.core.chunk_first.call(null,s__5510__$2);
var size__3043__auto__ = cljs.core.count.call(null,c__3042__auto__);
var b__5512 = cljs.core.chunk_buffer.call(null,size__3043__auto__);
if((function (){var i__5511 = 0;
while(true){
if((i__5511 < size__3043__auto__))
{var item = cljs.core._nth.call(null,c__3042__auto__,i__5511);
cljs.core.chunk_append.call(null,b__5512,cljs.core.PersistentVector.fromArray([item,priority], true));
{
var G__5520 = (i__5511 + 1);
i__5511 = G__5520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5512),iter__5509.call(null,cljs.core.chunk_rest.call(null,s__5510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5512),null);
}
} else
{var item = cljs.core.first.call(null,s__5510__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([item,priority], true),iter__5509.call(null,cljs.core.rest.call(null,s__5510__$2)));
}
} else
{return null;
}
break;
}
});})(s__5508__$1,vec__5514,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__5508__$1,vec__5514,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;
var fs__3041__auto__ = cljs.core.seq.call(null,iterys__3040__auto__.call(null,item_set));
if(fs__3041__auto__)
{return cljs.core.concat.call(null,fs__3041__auto__,iter__5507.call(null,cljs.core.rest.call(null,s__5508__$1)));
} else
{{
var G__5521 = cljs.core.rest.call(null,s__5508__$1);
s__5508__$1 = G__5521;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3044__auto__.call(null,self__.priority__GT_set_of_items);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{return null;
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], true);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var priority = self__.item__GT_priority.call(null,item,"\uFDD0:tailrecursion.priority-map/not-found");
if(cljs.core._EQ_.call(null,priority,"\uFDD0:tailrecursion.priority-map/not-found"))
{return this$;
} else
{var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.ObjMap.EMPTY,cljs.core.ObjMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.ObjMap.EMPTY,cljs.core.ObjMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems))
{return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$)
{{
var G__5522 = cljs.core.nnext.call(null,in$);
var G__5523 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__5522;
out = G__5523;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return priority_map__delegate.call(this, keyvals);
};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__5524){
var keyvals = cljs.core.seq(arglist__5524);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$)
{{
var G__5525 = cljs.core.nnext.call(null,in$);
var G__5526 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__5525;
out = G__5526;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return priority_map_by__delegate.call(this, comparator, keyvals);
};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__5527){
var comparator = cljs.core.first(arglist__5527);
var keyvals = cljs.core.rest(arglist__5527);
return priority_map_by__delegate(comparator, keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
