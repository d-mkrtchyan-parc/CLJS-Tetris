(ns tetris.utils
  (:require [clojure.browser.event :as event]
            [goog.History :as history]
            [goog.history.Html5History :as history5])
  (:use [domina :only [add-class! remove-class!]]))

(def object-map [
	[{:x 0 :y 0}] ; dot
	[{:x 0 :y -1} {:x 0 :y 0}] ; two-dot
	[{:x 0 :y -3} {:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0}] ; stick
	[{:x 0 :y 0} {:x 0 :y -1} {:x -1 :y 0} {:x -1 :y -1}] ; square
	[{:x 0 :y -1} {:x -1 :y 0 } {:x 0 :y 0} {:x 1 :y 0}] ; small t-figure								 
	[{:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; L-figure
	[{:x -1 :y -2} {:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; Z-figure							 
])
