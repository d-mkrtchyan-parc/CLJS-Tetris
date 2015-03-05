# FRP Tetris with ClojureScript

Simple DHTML based tetris game developed on ClojureScript. Used FRP library [Javelin](https://github.com/tailrecursion/javelin) and [Domina](https://github.com/levand/domina) for DOM. 

## Requierements 
 - [Leiningen](http://leiningen.org/)
 - [ClojureScript](https://github.com/clojure/clojureScript)
 - [dommy](https://github.com/prismatic/dommy)
 - [Domina](https://github.com/levand/domina)
 - [Javelin](https://github.com/tailrecursion/javelin)

## Compile 
```
cd ./CLJS-tetris
lein cljsbuild once
```
Output file to `public/main.js`

## Watch
```
lein cljsbuild auto
```
