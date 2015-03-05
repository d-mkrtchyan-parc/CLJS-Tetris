goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('domina');
goog.require('domina.events');
goog.require('tailrecursion.javelin');
goog.require('clojure.browser.event');
goog.require('domina.events');
goog.require('clojure.string');
goog.require('domina.xpath');
goog.require('tetris.utils');
goog.require('domina');
goog.require('cljs.reader');
goog.require('dommy.core');
goog.require('domina.css');
tetris.core.objectmap = tetris.utils.object_map;
tetris.core.move_QMARK_ = (function move_QMARK_(code){
var or__3943__auto__ = (code === 37);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (code === 39);
}
});
tetris.core.get_direction = (function get_direction(code){
if((code === 39))
{return 1;
} else
{if((code === 37))
{return -1;
} else
{return null;
}
}
});
tetris.core.add = (function add(x){
return (function (p1__4441_SHARP_){
return (x + p1__4441_SHARP_);
});
});
tetris.core.get_extremal = (function get_extremal(obj,cmp,key_word){
return cljs.core.reduce.call(null,(function (a,b){
var comparsion_result = cmp.call(null,cljs.core.get.call(null,a,key_word),cljs.core.get.call(null,b,key_word));
if(cljs.core.truth_(comparsion_result))
{return a;
} else
{return b;
}
}),cljs.core.first.call(null,obj),obj);
});
tetris.core.get_extremals = (function get_extremals(obj,key_word){
return cljs.core.reduce.call(null,(function (res,cur){
var comparing = cljs.core.get.call(null,cljs.core.last.call(null,res),key_word);
var comparsion_result = (comparing - cljs.core.get.call(null,cur,key_word));
if(cljs.core._EQ_.call(null,0,comparsion_result))
{return cljs.core.conj.call(null,res,cur);
} else
{if((comparsion_result < 0))
{return cljs.core.PersistentVector.fromArray([cur], true);
} else
{return res;
}
}
}),cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,obj)], true),obj);
});
tetris.core.compractor = (function compractor(o,n){
var and__3941__auto__ = ((new cljs.core.Keyword("\uFDD0:x")).call(null,o) === (new cljs.core.Keyword("\uFDD0:x")).call(null,n));
if(and__3941__auto__)
{return ((new cljs.core.Keyword("\uFDD0:y")).call(null,o) === (new cljs.core.Keyword("\uFDD0:y")).call(null,n));
} else
{return and__3941__auto__;
}
});
tetris.core.move_to_BANG_ = (function move_to_BANG_(dir){
return (function (block){
var color = (new cljs.core.Keyword("\uFDD0:color")).call(null,block);
var blocks = (new cljs.core.Keyword("\uFDD0:blocks")).call(null,block);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",color,"\uFDD0:blocks",cljs.core.mapv.call(null,(function (p1__4442_SHARP_){
var x = (dir + (new cljs.core.Keyword("\uFDD0:x")).call(null,p1__4442_SHARP_));
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",x,"\uFDD0:y",(new cljs.core.Keyword("\uFDD0:y")).call(null,p1__4442_SHARP_)], true);
}),blocks)], true);
});
});
tetris.core.new_object = (function new_object(w,h,color){
var center = (Math.ceil.call(null,(w / 2)) - 1);
var number_in_map = (Math.ceil.call(null,(cljs.core.count.call(null,tetris.core.objectmap) * Math.random.call(null))) - 1);
var object = cljs.core.nth.call(null,tetris.core.objectmap,number_in_map);
var blocks_vector = cljs.core.mapv.call(null,((function (center,number_in_map,object){
return (function (p1__4443_SHARP_){
var x = (new cljs.core.Keyword("\uFDD0:x")).call(null,p1__4443_SHARP_);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",(x + center),"\uFDD0:y",(new cljs.core.Keyword("\uFDD0:y")).call(null,p1__4443_SHARP_)], true);
});})(center,number_in_map,object))
,object);
return tailrecursion.javelin.cell.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",color,"\uFDD0:blocks",blocks_vector], true));
});
tetris.core.create_BANG_ = (function create_BANG_(w,h){
return tetris.core.new_object.call(null,w,h,tetris.utils.random_color.call(null));
});
tetris.core.redraw_BANG_ = (function redraw_BANG_(block){
var map__4447 = block;
var map__4447__$1 = ((cljs.core.seq_QMARK_.call(null,map__4447))?cljs.core.apply.call(null,cljs.core.hash_map,map__4447):map__4447);
var color = cljs.core.get.call(null,map__4447__$1,"\uFDD0:color");
var blocks = cljs.core.get.call(null,map__4447__$1,"\uFDD0:blocks");
return cljs.core.mapv.call(null,(function (p1__4444_SHARP_){
var col = (new cljs.core.Keyword("\uFDD0:x")).call(null,p1__4444_SHARP_);
var row = (new cljs.core.Keyword("\uFDD0:y")).call(null,p1__4444_SHARP_);
var el = domina.css.sel.call(null,domina.css.sel.call(null,[cljs.core.str("#game div.line:nth-child("),cljs.core.str((row + 1)),cljs.core.str(")")].join('')),[cljs.core.str("div.cell:nth-child("),cljs.core.str((col + 1)),cljs.core.str(")")].join(''));
return domina.set_styles_BANG_.call(null,el,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:background-color",color], true));
}),blocks);
});
tetris.core.redraw_full = (function redraw_full(board,fictive){
domina.set_styles_BANG_.call(null,domina.css.sel.call(null,"div.cell"),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:background-color","#eee"], true));
return cljs.core.mapv.call(null,(function (p1__4445_SHARP_){
return tetris.core.redraw_BANG_.call(null,p1__4445_SHARP_);
}),(new cljs.core.Keyword("\uFDD0:context")).call(null,board));
});
tetris.core.filled_QMARK_ = (function filled_QMARK_(blocks,eb){
var results = cljs.core.filter.call(null,(function (block){
return tetris.utils.indexOf_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0:blocks")).call(null,block),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",(new cljs.core.Keyword("\uFDD0:x")).call(null,eb),"\uFDD0:y",((new cljs.core.Keyword("\uFDD0:y")).call(null,eb) + 1)], true),tetris.core.compractor);
}),blocks);
return (cljs.core.count.call(null,results) > 0);
});
tetris.core.stacked_QMARK_ = (function stacked_QMARK_(board,blocks){
var downs = tetris.core.get_extremals.call(null,blocks,"\uFDD0:y");
var fields = board.state;
var falling_filter_fn = ((function (downs,fields){
return (function (block){
var y = (new cljs.core.Keyword("\uFDD0:y")).call(null,block);
return (y < ((new cljs.core.Keyword("\uFDD0:height")).call(null,fields) - 1));
});})(downs,fields))
;
var filled_filter_fn = ((function (downs,fields,falling_filter_fn){
return (function (block){
return tetris.core.filled_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0:context")).call(null,fields),block);
});})(downs,fields,falling_filter_fn))
;
var is_place_to_fall = (cljs.core.count.call(null,cljs.core.filter.call(null,falling_filter_fn,downs)) > 0);
var is_place_filled = (cljs.core.count.call(null,cljs.core.filter.call(null,filled_filter_fn,downs)) > 0);
var or__3943__auto__ = is_place_filled;
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(is_place_to_fall);
}
});
tetris.core.fall_BANG_ = (function fall_BANG_(block){
var map__4450 = block;
var map__4450__$1 = ((cljs.core.seq_QMARK_.call(null,map__4450))?cljs.core.apply.call(null,cljs.core.hash_map,map__4450):map__4450);
var color = cljs.core.get.call(null,map__4450__$1,"\uFDD0:color");
var blocks = cljs.core.get.call(null,map__4450__$1,"\uFDD0:blocks");
var swapped = cljs.core.mapv.call(null,((function (map__4450,map__4450__$1,color,blocks){
return (function (p1__4448_SHARP_){
var y = ((new cljs.core.Keyword("\uFDD0:y")).call(null,p1__4448_SHARP_) + 1);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",(new cljs.core.Keyword("\uFDD0:x")).call(null,p1__4448_SHARP_),"\uFDD0:y",y], true);
});})(map__4450,map__4450__$1,color,blocks))
,blocks);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",color,"\uFDD0:blocks",swapped], true);
});
tetris.core.allowed_QMARK_ = (function allowed_QMARK_(direction,block,gmax){
var maxx = cljs.core.get.call(null,tetris.core.get_extremal.call(null,block,cljs.core._GT_,"\uFDD0:x"),"\uFDD0:x");
var minx = cljs.core.get.call(null,tetris.core.get_extremal.call(null,block,cljs.core._LT_,"\uFDD0:x"),"\uFDD0:x");
var nmaxx = (direction + maxx);
var nminx = (direction + minx);
if((function (){var and__3941__auto__ = (nminx >= 0);
if(and__3941__auto__)
{return (nmaxx < gmax);
} else
{return and__3941__auto__;
}
})())
{return direction;
} else
{return false;
}
});
tetris.core.toggle_BANG_ = (function toggle_BANG_(x){
return cljs.core.not.call(null,x);
});
tetris.core.conj_add = (function conj_add(block){
var st = block.state;
var blocks_struct = (new cljs.core.Keyword("\uFDD0:blocks")).call(null,st);
var object_blocks = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",(new cljs.core.Keyword("\uFDD0:color")).call(null,st),"\uFDD0:blocks",blocks_struct], true);
return (function (board){
var map__4452 = board;
var map__4452__$1 = ((cljs.core.seq_QMARK_.call(null,map__4452))?cljs.core.apply.call(null,cljs.core.hash_map,map__4452):map__4452);
var blocks = cljs.core.get.call(null,map__4452__$1,"\uFDD0:context");
var width = cljs.core.get.call(null,map__4452__$1,"\uFDD0:width");
var height = cljs.core.get.call(null,map__4452__$1,"\uFDD0:height");
var new_board = cljs.core.conj.call(null,blocks,object_blocks);
var res = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width",width,"\uFDD0:height",height,"\uFDD0:context",new_board], true);
return res;
});
});
tetris.core.move_BANG_ = (function move_BANG_(event,block,board){
var code = event.keyCode;
var blocks = (new cljs.core.Keyword("\uFDD0:blocks")).call(null,cljs.core.deref.call(null,block));
var width = (new cljs.core.Keyword("\uFDD0:width")).call(null,cljs.core.deref.call(null,board));
var direction = (cljs.core.truth_(tetris.core.move_QMARK_.call(null,code))?tetris.core.get_direction.call(null,code):false);
if(cljs.core.truth_((function (){var and__3941__auto__ = direction;
if(cljs.core.truth_(and__3941__auto__))
{return tetris.core.allowed_QMARK_.call(null,direction,blocks,width);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.swap_BANG_.call(null,block,tetris.core.move_to_BANG_.call(null,direction));
} else
{return null;
}
});
tetris.core.start = (function start(width,height){
domina.set_styles_BANG_.call(null,domina.set_html_BANG_.call(null,domina.remove_class_BANG_.call(null,domina.css.sel.call(null,"#game"),"loosed"),""),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width","inherit","\uFDD0:height","inherit"], true));
tetris.utils.repeat_BANG_.call(null,height,(function (){
return domina.append_BANG_.call(null,domina.css.sel.call(null,"#game"),"<div class='line'></div>");
}));
tetris.utils.repeat_BANG_.call(null,width,(function (){
return domina.append_BANG_.call(null,domina.css.sel.call(null,".line"),"<div class='cell'></div>");
}));
tetris.core.board = tailrecursion.javelin.cell.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:context",cljs.core.PersistentVector.EMPTY,"\uFDD0:width",width,"\uFDD0:height",height], true));
tetris.core.overloaded = tailrecursion.javelin.cell.call(null,false);
tetris.core.block = tetris.core.create_BANG_.call(null,width,height);
document.addEventListener("keydown",(function (p1__4453_SHARP_){
return tetris.core.move_BANG_.call(null,p1__4453_SHARP_,tetris.core.block,tetris.core.board);
}));
tetris.core.step_BANG_ = (function step_BANG_(){
if(cljs.core.truth_(tetris.core.stacked_QMARK_.call(null,tetris.core.board,(new cljs.core.Keyword("\uFDD0:blocks")).call(null,tetris.core.block.state))))
{if((cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__4454_SHARP_){
return ((new cljs.core.Keyword("\uFDD0:y")).call(null,p1__4454_SHARP_) < 0);
}),(new cljs.core.Keyword("\uFDD0:blocks")).call(null,cljs.core.deref.call(null,tetris.core.block)))) > 0))
{cljs.core.swap_BANG_.call(null,tetris.core.overloaded,tetris.core.toggle_BANG_);
} else
{}
cljs.core.swap_BANG_.call(null,tetris.core.board,tetris.core.conj_add.call(null,tetris.core.block));
return cljs.core.reset_BANG_.call(null,tetris.core.block,tetris.core.create_BANG_.call(null,(new cljs.core.Keyword("\uFDD0:width")).call(null,tetris.core.board.state),(new cljs.core.Keyword("\uFDD0:height")).call(null,tetris.core.board.state)).state);
} else
{return cljs.core.swap_BANG_.call(null,tetris.core.block,tetris.core.fall_BANG_);
}
});
tetris.core.ticks = setInterval(tetris.core.step_BANG_,200);
tetris.core.loose_BANG_ = (function loose_BANG_(over){
if(cljs.core.truth_(over))
{domina.set_html_BANG_.call(null,domina.set_styles_BANG_.call(null,domina.add_class_BANG_.call(null,domina.css.sel.call(null,"#game"),"loosed"),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width",[cljs.core.str((width * 16)),cljs.core.str("px")].join(''),"\uFDD0:height",[cljs.core.str((height * 16)),cljs.core.str("px")].join('')], true)),"<button class='btn btn-primary' onclick='tetris.core.start(10, 14)'>You loose!</button>");
return clearInterval(tetris.core.ticks);
} else
{return null;
}
});
tailrecursion.javelin.lift.call(null,(function (G__4462,G__4463){
return G__4462.call(null,G__4463);
})).call(null,tetris.core.loose_BANG_,tetris.core.overloaded);
tailrecursion.javelin.lift.call(null,(function (G__4464,G__4466,G__4465){
return G__4464.call(null,G__4465,G__4466);
})).call(null,tetris.core.redraw_full,tetris.core.block,tetris.core.board);
return tailrecursion.javelin.lift.call(null,(function (G__4467,G__4468){
return G__4467.call(null,G__4468);
})).call(null,tetris.core.redraw_BANG_,tetris.core.block);
});
goog.exportSymbol('tetris.core.start', tetris.core.start);
