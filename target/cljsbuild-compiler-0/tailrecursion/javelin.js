goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){
var walk = (function walk(queue){
var temp__4092__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
}),null));
} else
{return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.do_STAR_ = (function() { 
var do_STAR___delegate = function (rest__5310_SHARP_){
return cljs.core.last.call(null,rest__5310_SHARP_);
};
var do_STAR_ = function (var_args){
var rest__5310_SHARP_ = null;
if (arguments.length > 0) {
  rest__5310_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return do_STAR___delegate.call(this, rest__5310_SHARP_);
};
do_STAR_.cljs$lang$maxFixedArity = 0;
do_STAR_.cljs$lang$applyTo = (function (arglist__5312){
var rest__5310_SHARP_ = cljs.core.seq(arglist__5312);
return do_STAR___delegate(rest__5310_SHARP_);
});
do_STAR_.cljs$core$IFn$_invoke$arity$variadic = do_STAR___delegate;
return do_STAR_;
})()
;
tailrecursion.javelin.throw_STAR_ = (function throw_STAR_(p1__5311_SHARP_){
if(cljs.core.string_QMARK_.call(null,p1__5311_SHARP_))
{return (new Error(p1__5311_SHARP_));
} else
{return p1__5311_SHARP_;
}
});
tailrecursion.javelin.if_STAR_ = (function() {
var if_STAR_ = null;
var if_STAR___2 = (function (pred,consequent){
if(cljs.core.truth_(pred))
{return consequent;
} else
{return null;
}
});
var if_STAR___3 = (function (pred,consequent,alternative){
if(cljs.core.truth_(pred))
{return consequent;
} else
{return alternative;
}
});
if_STAR_ = function(pred,consequent,alternative){
switch(arguments.length){
case 2:
return if_STAR___2.call(this,pred,consequent);
case 3:
return if_STAR___3.call(this,pred,consequent,alternative);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_STAR_.cljs$core$IFn$_invoke$arity$2 = if_STAR___2;
if_STAR_.cljs$core$IFn$_invoke$arity$3 = if_STAR___3;
return if_STAR_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.new_STAR_ = (function() {
var new_STAR_ = null;
var new_STAR___1 = (function (class$){
return (new class$());
});
var new_STAR___2 = (function (class$,a){
return (new class$(a));
});
var new_STAR___3 = (function (class$,a,b){
return (new class$(a,b));
});
var new_STAR___4 = (function (class$,a,b,c){
return (new class$(a,b,c));
});
var new_STAR___5 = (function (class$,a,b,c,d){
return (new class$(a,b,c,d));
});
var new_STAR___6 = (function (class$,a,b,c,d,e){
return (new class$(a,b,c,d,e));
});
var new_STAR___7 = (function (class$,a,b,c,d,e,f){
return (new class$(a,b,c,d,e,f));
});
var new_STAR___8 = (function (class$,a,b,c,d,e,f,g){
return (new class$(a,b,c,d,e,f,g));
});
var new_STAR___9 = (function (class$,a,b,c,d,e,f,g,h){
return (new class$(a,b,c,d,e,f,g,h));
});
var new_STAR___10 = (function (class$,a,b,c,d,e,f,g,h,i){
return (new class$(a,b,c,d,e,f,g,h,i));
});
var new_STAR___11 = (function() { 
var G__5313__delegate = function (class$,a,b,c,d,e,f,g,h,i,more){
throw (new Error("new w/more than 10 args not supported in formula".call(null)));
};
var G__5313 = function (class$,a,b,c,d,e,f,g,h,i,var_args){
var more = null;
if (arguments.length > 10) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 10),0);
} 
return G__5313__delegate.call(this, class$, a, b, c, d, e, f, g, h, i, more);
};
G__5313.cljs$lang$maxFixedArity = 10;
G__5313.cljs$lang$applyTo = (function (arglist__5314){
var class$ = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var a = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var b = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var c = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var d = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var e = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var f = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var g = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var h = cljs.core.first(arglist__5314);
arglist__5314 = cljs.core.next(arglist__5314);
var i = cljs.core.first(arglist__5314);
var more = cljs.core.rest(arglist__5314);
return G__5313__delegate(class$, a, b, c, d, e, f, g, h, i, more);
});
G__5313.cljs$core$IFn$_invoke$arity$variadic = G__5313__delegate;
return G__5313;
})()
;
new_STAR_ = function(class$,a,b,c,d,e,f,g,h,i,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return new_STAR___1.call(this,class$);
case 2:
return new_STAR___2.call(this,class$,a);
case 3:
return new_STAR___3.call(this,class$,a,b);
case 4:
return new_STAR___4.call(this,class$,a,b,c);
case 5:
return new_STAR___5.call(this,class$,a,b,c,d);
case 6:
return new_STAR___6.call(this,class$,a,b,c,d,e);
case 7:
return new_STAR___7.call(this,class$,a,b,c,d,e,f);
case 8:
return new_STAR___8.call(this,class$,a,b,c,d,e,f,g);
case 9:
return new_STAR___9.call(this,class$,a,b,c,d,e,f,g,h);
case 10:
return new_STAR___10.call(this,class$,a,b,c,d,e,f,g,h,i);
default:
return new_STAR___11.cljs$core$IFn$_invoke$arity$variadic(class$,a,b,c,d,e,f,g,h,i, cljs.core.array_seq(arguments, 10));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_STAR_.cljs$lang$maxFixedArity = 10;
new_STAR_.cljs$lang$applyTo = new_STAR___11.cljs$lang$applyTo;
new_STAR_.cljs$core$IFn$_invoke$arity$1 = new_STAR___1;
new_STAR_.cljs$core$IFn$_invoke$arity$2 = new_STAR___2;
new_STAR_.cljs$core$IFn$_invoke$arity$3 = new_STAR___3;
new_STAR_.cljs$core$IFn$_invoke$arity$4 = new_STAR___4;
new_STAR_.cljs$core$IFn$_invoke$arity$5 = new_STAR___5;
new_STAR_.cljs$core$IFn$_invoke$arity$6 = new_STAR___6;
new_STAR_.cljs$core$IFn$_invoke$arity$7 = new_STAR___7;
new_STAR_.cljs$core$IFn$_invoke$arity$8 = new_STAR___8;
new_STAR_.cljs$core$IFn$_invoke$arity$9 = new_STAR___9;
new_STAR_.cljs$core$IFn$_invoke$arity$10 = new_STAR___10;
new_STAR_.cljs$core$IFn$_invoke$arity$variadic = new_STAR___11.cljs$core$IFn$_invoke$arity$variadic;
return new_STAR_;
})()
;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,0);
tailrecursion.javelin.next_rank = (function next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(cell){
var queue = tailrecursion.priority_map.priority_map.call(null,cell,cell.rank);
while(true){
if(cljs.core.seq.call(null,queue))
{var next = cljs.core.key.call(null,cljs.core.peek.call(null,queue));
var value = next.thunk.call(null);
var continue_QMARK_ = cljs.core.not_EQ_.call(null,value,next.prev);
var reducer = ((function (queue,next,value,continue_QMARK_){
return (function (p1__5315_SHARP_,p2__5316_SHARP_){
return cljs.core.assoc.call(null,p1__5315_SHARP_,p2__5316_SHARP_,p2__5316_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;
var siblings = cljs.core.pop.call(null,queue);
var children = next.sinks;
if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__5317 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__5317;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function destroy_cell_BANG_(this$){
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;
var seq__5324 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));
var chunk__5325 = null;
var count__5326 = 0;
var i__5327 = 0;
while(true){
if((i__5327 < count__5326))
{var src = cljs.core._nth.call(null,chunk__5325,i__5327);
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__5328 = seq__5324;
var G__5329 = chunk__5325;
var G__5330 = count__5326;
var G__5331 = (i__5327 + 1);
seq__5324 = G__5328;
chunk__5325 = G__5329;
count__5326 = G__5330;
i__5327 = G__5331;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5324);
if(temp__4092__auto__)
{var seq__5324__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5324__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__5324__$1);
{
var G__5332 = cljs.core.chunk_rest.call(null,seq__5324__$1);
var G__5333 = c__3075__auto__;
var G__5334 = cljs.core.count.call(null,c__3075__auto__);
var G__5335 = 0;
seq__5324 = G__5332;
chunk__5325 = G__5333;
count__5326 = G__5334;
i__5327 = G__5335;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__5324__$1);
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__5336 = cljs.core.next.call(null,seq__5324__$1);
var G__5337 = null;
var G__5338 = 0;
var G__5339 = 0;
seq__5324 = G__5336;
chunk__5325 = G__5337;
count__5326 = G__5338;
i__5327 = G__5339;
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
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__5340){
var vec__5361 = p__5340;
var f = cljs.core.nth.call(null,vec__5361,0,null);
var sources = cljs.core.nth.call(null,vec__5361,1,null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__5362_5381 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));
var chunk__5363_5382 = null;
var count__5364_5383 = 0;
var i__5365_5384 = 0;
while(true){
if((i__5365_5384 < count__5364_5383))
{var source_5385 = cljs.core._nth.call(null,chunk__5363_5382,i__5365_5384);
source_5385.sinks = cljs.core.conj.call(null,source_5385.sinks,this$);
if((source_5385.rank > this$.rank))
{var seq__5366_5386 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__5362_5381,chunk__5363_5382,count__5364_5383,i__5365_5384,source_5385){
return (function (p1__5318_SHARP_){
return p1__5318_SHARP_.sinks;
});})(seq__5362_5381,chunk__5363_5382,count__5364_5383,i__5365_5384,source_5385))
,source_5385));
var chunk__5367_5387 = null;
var count__5368_5388 = 0;
var i__5369_5389 = 0;
while(true){
if((i__5369_5389 < count__5368_5388))
{var dep_5390 = cljs.core._nth.call(null,chunk__5367_5387,i__5369_5389);
dep_5390.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__5391 = seq__5366_5386;
var G__5392 = chunk__5367_5387;
var G__5393 = count__5368_5388;
var G__5394 = (i__5369_5389 + 1);
seq__5366_5386 = G__5391;
chunk__5367_5387 = G__5392;
count__5368_5388 = G__5393;
i__5369_5389 = G__5394;
continue;
}
} else
{var temp__4092__auto___5395 = cljs.core.seq.call(null,seq__5366_5386);
if(temp__4092__auto___5395)
{var seq__5366_5396__$1 = temp__4092__auto___5395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5366_5396__$1))
{var c__3075__auto___5397 = cljs.core.chunk_first.call(null,seq__5366_5396__$1);
{
var G__5398 = cljs.core.chunk_rest.call(null,seq__5366_5396__$1);
var G__5399 = c__3075__auto___5397;
var G__5400 = cljs.core.count.call(null,c__3075__auto___5397);
var G__5401 = 0;
seq__5366_5386 = G__5398;
chunk__5367_5387 = G__5399;
count__5368_5388 = G__5400;
i__5369_5389 = G__5401;
continue;
}
} else
{var dep_5402 = cljs.core.first.call(null,seq__5366_5396__$1);
dep_5402.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__5403 = cljs.core.next.call(null,seq__5366_5396__$1);
var G__5404 = null;
var G__5405 = 0;
var G__5406 = 0;
seq__5366_5386 = G__5403;
chunk__5367_5387 = G__5404;
count__5368_5388 = G__5405;
i__5369_5389 = G__5406;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__5407 = seq__5362_5381;
var G__5408 = chunk__5363_5382;
var G__5409 = count__5364_5383;
var G__5410 = (i__5365_5384 + 1);
seq__5362_5381 = G__5407;
chunk__5363_5382 = G__5408;
count__5364_5383 = G__5409;
i__5365_5384 = G__5410;
continue;
}
} else
{var temp__4092__auto___5411 = cljs.core.seq.call(null,seq__5362_5381);
if(temp__4092__auto___5411)
{var seq__5362_5412__$1 = temp__4092__auto___5411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5362_5412__$1))
{var c__3075__auto___5413 = cljs.core.chunk_first.call(null,seq__5362_5412__$1);
{
var G__5414 = cljs.core.chunk_rest.call(null,seq__5362_5412__$1);
var G__5415 = c__3075__auto___5413;
var G__5416 = cljs.core.count.call(null,c__3075__auto___5413);
var G__5417 = 0;
seq__5362_5381 = G__5414;
chunk__5363_5382 = G__5415;
count__5364_5383 = G__5416;
i__5365_5384 = G__5417;
continue;
}
} else
{var source_5418 = cljs.core.first.call(null,seq__5362_5412__$1);
source_5418.sinks = cljs.core.conj.call(null,source_5418.sinks,this$);
if((source_5418.rank > this$.rank))
{var seq__5370_5419 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__5362_5381,chunk__5363_5382,count__5364_5383,i__5365_5384,source_5418,seq__5362_5412__$1,temp__4092__auto___5411){
return (function (p1__5318_SHARP_){
return p1__5318_SHARP_.sinks;
});})(seq__5362_5381,chunk__5363_5382,count__5364_5383,i__5365_5384,source_5418,seq__5362_5412__$1,temp__4092__auto___5411))
,source_5418));
var chunk__5371_5420 = null;
var count__5372_5421 = 0;
var i__5373_5422 = 0;
while(true){
if((i__5373_5422 < count__5372_5421))
{var dep_5423 = cljs.core._nth.call(null,chunk__5371_5420,i__5373_5422);
dep_5423.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__5424 = seq__5370_5419;
var G__5425 = chunk__5371_5420;
var G__5426 = count__5372_5421;
var G__5427 = (i__5373_5422 + 1);
seq__5370_5419 = G__5424;
chunk__5371_5420 = G__5425;
count__5372_5421 = G__5426;
i__5373_5422 = G__5427;
continue;
}
} else
{var temp__4092__auto___5428__$1 = cljs.core.seq.call(null,seq__5370_5419);
if(temp__4092__auto___5428__$1)
{var seq__5370_5429__$1 = temp__4092__auto___5428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5370_5429__$1))
{var c__3075__auto___5430 = cljs.core.chunk_first.call(null,seq__5370_5429__$1);
{
var G__5431 = cljs.core.chunk_rest.call(null,seq__5370_5429__$1);
var G__5432 = c__3075__auto___5430;
var G__5433 = cljs.core.count.call(null,c__3075__auto___5430);
var G__5434 = 0;
seq__5370_5419 = G__5431;
chunk__5371_5420 = G__5432;
count__5372_5421 = G__5433;
i__5373_5422 = G__5434;
continue;
}
} else
{var dep_5435 = cljs.core.first.call(null,seq__5370_5429__$1);
dep_5435.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__5436 = cljs.core.next.call(null,seq__5370_5429__$1);
var G__5437 = null;
var G__5438 = 0;
var G__5439 = 0;
seq__5370_5419 = G__5436;
chunk__5371_5420 = G__5437;
count__5372_5421 = G__5438;
i__5373_5422 = G__5439;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__5440 = cljs.core.next.call(null,seq__5362_5412__$1);
var G__5441 = null;
var G__5442 = 0;
var G__5443 = 0;
seq__5362_5381 = G__5440;
chunk__5363_5382 = G__5441;
count__5364_5383 = G__5442;
i__5365_5384 = G__5443;
continue;
}
}
} else
{}
}
break;
}
var compute = (function (p1__5319_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__5319_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__5319_SHARP_)));
});
var thunk = ((function (compute){
return (function (){
var x = this$.state;
var y = compute.call(null,this$.sources);
var seq__5374_5444 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,"\uFDD0:tailrecursion.javelin/cell"));
var chunk__5375_5445 = null;
var count__5376_5446 = 0;
var i__5377_5447 = 0;
while(true){
if((i__5377_5447 < count__5376_5446))
{var vec__5378_5448 = cljs.core._nth.call(null,chunk__5375_5445,i__5377_5447);
var k_5449 = cljs.core.nth.call(null,vec__5378_5448,0,null);
var f_5450__$1 = cljs.core.nth.call(null,vec__5378_5448,1,null);
f_5450__$1.call(null,k_5449,this$,x,y);
{
var G__5451 = seq__5374_5444;
var G__5452 = chunk__5375_5445;
var G__5453 = count__5376_5446;
var G__5454 = (i__5377_5447 + 1);
seq__5374_5444 = G__5451;
chunk__5375_5445 = G__5452;
count__5376_5446 = G__5453;
i__5377_5447 = G__5454;
continue;
}
} else
{var temp__4092__auto___5455 = cljs.core.seq.call(null,seq__5374_5444);
if(temp__4092__auto___5455)
{var seq__5374_5456__$1 = temp__4092__auto___5455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5374_5456__$1))
{var c__3075__auto___5457 = cljs.core.chunk_first.call(null,seq__5374_5456__$1);
{
var G__5458 = cljs.core.chunk_rest.call(null,seq__5374_5456__$1);
var G__5459 = c__3075__auto___5457;
var G__5460 = cljs.core.count.call(null,c__3075__auto___5457);
var G__5461 = 0;
seq__5374_5444 = G__5458;
chunk__5375_5445 = G__5459;
count__5376_5446 = G__5460;
i__5377_5447 = G__5461;
continue;
}
} else
{var vec__5379_5462 = cljs.core.first.call(null,seq__5374_5456__$1);
var k_5463 = cljs.core.nth.call(null,vec__5379_5462,0,null);
var f_5464__$1 = cljs.core.nth.call(null,vec__5379_5462,1,null);
f_5464__$1.call(null,k_5463,this$,x,y);
{
var G__5465 = cljs.core.next.call(null,seq__5374_5456__$1);
var G__5466 = null;
var G__5467 = 0;
var G__5468 = 0;
seq__5374_5444 = G__5465;
chunk__5375_5445 = G__5466;
count__5376_5446 = G__5467;
i__5377_5447 = G__5468;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute))
;
var err_mesg = "formula cell can't be updated via swap! or reset!";
var watch_err = ((function (compute,thunk,err_mesg){
return (function (_,___$1,___$2,___$3){
throw (new Error(err_mesg));
});})(compute,thunk,err_mesg))
;
var watch_ok = ((function (compute,thunk,err_mesg,watch_err){
return (function (_,c,___$1,___$2){
return tailrecursion.javelin.propagate_BANG_.call(null,c);
});})(compute,thunk,err_mesg,watch_err))
;
cljs.core._add_watch.call(null,this$,"\uFDD0:tailrecursion.javelin/cell",(cljs.core.truth_(f)?watch_err:watch_ok));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:(function (){
return cljs.core.deref.call(null,this$);
}));
var G__5380 = this$;
tailrecursion.javelin.propagate_BANG_.call(null,G__5380);
return G__5380;
};
var set_formula_BANG_ = function (this$,var_args){
var p__5340 = null;
if (arguments.length > 1) {
  p__5340 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_formula_BANG___delegate.call(this, this$, p__5340);
};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__5469){
var this$ = cljs.core.first(arglist__5469);
var p__5340 = cljs.core.rest(arglist__5469);
return set_formula_BANG___delegate(this$, p__5340);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;
goog.provide('tailrecursion.javelin.Cell');

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.input_QMARK_ = input_QMARK_;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__2884__auto__,writer__2885__auto__,opt__2886__auto__){
return cljs.core._write.call(null,writer__2885__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__5470 = cljs.core.seq.call(null,self__.watches);
var chunk__5471 = null;
var count__5472 = 0;
var i__5473 = 0;
while(true){
if((i__5473 < count__5472))
{var vec__5474 = cljs.core._nth.call(null,chunk__5471,i__5473);
var key = cljs.core.nth.call(null,vec__5474,0,null);
var f = cljs.core.nth.call(null,vec__5474,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__5476 = seq__5470;
var G__5477 = chunk__5471;
var G__5478 = count__5472;
var G__5479 = (i__5473 + 1);
seq__5470 = G__5476;
chunk__5471 = G__5477;
count__5472 = G__5478;
i__5473 = G__5479;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5470);
if(temp__4092__auto__)
{var seq__5470__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5470__$1))
{var c__3075__auto__ = cljs.core.chunk_first.call(null,seq__5470__$1);
{
var G__5480 = cljs.core.chunk_rest.call(null,seq__5470__$1);
var G__5481 = c__3075__auto__;
var G__5482 = cljs.core.count.call(null,c__3075__auto__);
var G__5483 = 0;
seq__5470 = G__5480;
chunk__5471 = G__5481;
count__5472 = G__5482;
i__5473 = G__5483;
continue;
}
} else
{var vec__5475 = cljs.core.first.call(null,seq__5470__$1);
var key = cljs.core.nth.call(null,vec__5475,0,null);
var f = cljs.core.nth.call(null,vec__5475,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__5484 = cljs.core.next.call(null,seq__5470__$1);
var G__5485 = null;
var G__5486 = 0;
var G__5487 = 0;
seq__5470 = G__5484;
chunk__5471 = G__5485;
count__5472 = G__5486;
i__5473 = G__5487;
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
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
return this$.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
return cljs.core.write_all.call(null,writer,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});
tailrecursion.javelin.lift = (function lift(f){
return (function() { 
var G__5488__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,"\uFDD0:tailrecursion.javelin/none"),f,sources);
};
var G__5488 = function (var_args){
var sources = null;
if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5488__delegate.call(this, sources);
};
G__5488.cljs$lang$maxFixedArity = 0;
G__5488.cljs$lang$applyTo = (function (arglist__5489){
var sources = cljs.core.seq(arglist__5489);
return G__5488__delegate(sources);
});
G__5488.cljs$core$IFn$_invoke$arity$variadic = G__5488__delegate;
return G__5488;
})()
;
});
tailrecursion.javelin.cell = (function cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.ObjMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.ObjMap.EMPTY,null)));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){
if(cljs.core.truth_((function (){var and__3941__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3941__auto__))
{return c.input_QMARK_;
} else
{return and__3941__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){
c.state = x;
return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
