goog.provide('tetris.utils');
goog.require('cljs.core');
tetris.utils.object_map = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-3], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-2], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",-1], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",1,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-2], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",1,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",1,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",1,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",1,"\uFDD0:y",0], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",-1,"\uFDD0:y",-2], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-2], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",-1], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",0,"\uFDD0:y",0], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",1,"\uFDD0:y",0], true)], true)], true);
tetris.utils.random_color = (function random_color(){
return [cljs.core.str("#"),cljs.core.str(Math.round.call(null,(Math.random.call(null) * 16777215)).toString(16))].join('');
});
tetris.utils.repeat_BANG_ = (function repeat_BANG_(c,f){
while(true){
if((c > 0))
{f.call(null,c);
{
var G__3454 = (c - 1);
var G__3455 = f;
c = G__3454;
f = G__3455;
continue;
}
} else
{return null;
}
break;
}
});
tetris.utils.indexOf_QMARK_ = (function indexOf_QMARK_(v,value,cmp){
return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__3453_SHARP_){
return cmp.call(null,p1__3453_SHARP_,value);
}),v)) > 0);
});
tetris.utils.always_BANG_ = (function always_BANG_(obj){
var result = cljs.core.mapv.call(null,(function (p1__3456_SHARP_){
var o = p1__3456_SHARP_.state;
var res = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",(new cljs.core.Keyword("\uFDD0:x")).call(null,o),"\uFDD0:y",(new cljs.core.Keyword("\uFDD0:y")).call(null,o)], true);
return res;
}),obj);
return (function (){
return result;
});
});
