; Объявлем неймспейс tetris.core
(ns tetris.core
	; описываем все зависимости
  (:require [clojure.browser.event :as event]
            [clojure.string :as string]
            [tailrecursion.javelin :refer [cell]]
            [tetris.utils :as utils]
            [dommy.core :as dommy])
	
	; и способы их применения
  (:use [cljs.reader :only [read-string]]
        [domina :only [add-class! by-id remove-class! set-text! set-styles! set-html! swap-content! single-node append!]]
        [domina.css :only [sel]]
        [domina.events :only [capture! listen!]]
        [domina.xpath :only [xpath]])
	
	; и макросы из библиотек
  (:require-macros [tailrecursion.javelin :refer [defc defc= cell=]]
                   [dommy.macros :refer [node]]))

; вызывает fn count раз
(defn gen![count fn]
	(if (> count 0) 
		(do
			(fn count)
			(gen! (dec count) fn)) 
		nil))

; Предикат на проверку движения влево впрааво
(defn move? [code]
  (or (== code 37) (== code 39)))

; Направление движения
(defn direction[code]( if (== code 39) 1 (if (== code 37) -1 nil)))

; Замыкающая функция суммирования джвух аргументов
(defn add[x] #(+ x %))

; всегда возвращает obj ячейку в деструктурированном виде
(defn always![obj]
	(let [o (.-state obj)
				x (get o :x)
				y (get o :y)
				res {:x x :y y}] (fn[]res)))


; ячейки
(def ticks (cell 0))
(def block-x (cell 0))
(def block-y (cell 0))
(def block (cell= {:x block-x :y block-y}))
(def before (cell {:x 0 :y -1}))

;перерисовка
(defn redraw![element color]
	(let [col (get element :x)
				row (get element :y)
				el (->
					(sel (str "div.line:nth-child(" (inc row) ")"))
					(sel (str "div.cell:nth-child(" (inc col) ")")))]
		
		(set-styles! el {:background-color color})))

; То что происходит по onload body
(defn ^:export start [width height]
	; рисуем поле
	(gen! height #(append! (sel "#game") "<div class='line'></div>"))
	(gen! width #(append! (sel ".line") "<div class='cell'></div>"))
	
	(defc lines [])
	(defc board [lines])
	
	(defn allowed?[direction]
		(let [newx (+ direction (.-state block-x))]
			(if (and (>= newx 0) (< newx width)) direction false )))
	
	(defn move![obj]
		(let [code (.-keyCode obj)]
			(if (move? code) 
				(do
					(swap! before (always! block))
					(swap! block-x (add (allowed? (direction code)))) nil))))

	
	; side effects	
	
	; Задаем такты	
	(js/setInterval 
		#(do
			(swap! before (always! block))
			(swap! ticks (add 1000))
			(swap! block-y inc)) 1000)
	
	; Задаем прослушку 
	(.addEventListener js/document "keydown" move!)
	
	; логируем такты
	(cell= (#(.log js/console ticks)))
	
	(cell= (redraw! before "#eee"))
	(cell= (redraw! block "#666")))
	
	