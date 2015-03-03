; Объявлем неймспейс tetris.core
(ns tetris.core
	; описываем все зависимости
  (:require [clojure.browser.event :as event]
            [clojure.string :as string]
            [tailrecursion.javelin]
            [tetris.utils :as utils]
            [dommy.core :as dommy])
	
	; и способы их применения
  (:use [cljs.reader :only [read-string]]
        [domina :only [add-class! by-id remove-class! set-text! set-styles! set-html! swap-content! single-node append!]]
        [domina.css :only [sel]]
        [domina.events :only [capture! listen!]]
        [domina.xpath :only [xpath]])
	
	; и макросы из библиотек
  (:require-macros [tailrecursion.javelin :refer [cell defc defc= cell=]]
                   [dommy.macros :refer [node]]))

; вызывает fn count раз
(defn gen![count fn]
	(if (> count 0) 
		(do
			(fn count)
			(gen! (dec count) fn)) 
		nil))

; предикат keyCode -> boolean
(defn arrow? [code]
  "Predicate to know does the keycode arrow button code"
  (and (>= code 37) (<= code 40)))


(defc current {:x -1 :y -1})
(defc ticks 0)

; Замыкающая функция суммирования дж
(defn add[x] #(+ x %))

(defn fall![coordinate dependency]
	(swap! coordinate inc))

; Задаем такты
(js/setInterval #(swap! ticks (add 1000)) 1000)

(defn redraw![element color]
	(let [col (get element :x)
				row (get element :y)]
		(set-styles! (->
			(xpath (str "//div[@class='line'][" row "]"))
			(xpath (str "div[@class='cell'][" col "]"))
		) {:background-color color})))

; То что происходит по onload body
(defn ^:export start [width height]
	; рисуем поле
	(gen! height #(append! (sel "#game") "<div class='line'></div>"))
	(gen! width #(append! (sel ".line") "<div class='cell'></div>"))
	
	(defc lines [])
	(defc board [lines])
	
	; Какой-то жесткий гемморой
	(def x (cell  0))
	(def y (cell 0))
	(def block (cell= {:x x :y y}))
	
	; side effects
	
	; логируем такты
	(cell= (#(.log js/console ticks)))
	(cell= (fall! y ticks))
	(cell= (redraw! block "#666")))
	
	