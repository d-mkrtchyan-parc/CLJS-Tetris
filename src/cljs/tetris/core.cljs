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
(defn get-direction![code]( if (== code 39) 1 (if (== code 37) -1 nil)))

; Замыкающая функция суммирования джвух аргументов
(defn add[x] #(+ x %))

; всегда возвращает obj ячейку в деструктурированном виде
(defn always![obj]
	(let [result (mapv #(let [o (.-state %)
				x (get o :x)
				y (get o :y)
				res {:x x :y y}] res) obj)] (fn[] result)))


; ячейки
(def ticks (cell 0))
;(def block-x (cell 0))
;(def block-y (cell 0))
;(def block (cell= {:x block-x :y block-y}))
;(def before (cell {:x 0 :y -1}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; создаем объект
(def objectmap [
	[{:x 0 :y 0}]

	;two-dot
	[
		{:x 0 :y -1}
		{:x 0 :y 0}
	]

	;stick
	[
		{:x 0 :y -3}
		{:x 0 :y -2}
		{:x 0 :y -1}
		{:x 0 :y 0}
	]

	;square
	[
		{:x 0 :y 0}
		{:x 0 :y -1}
		{:x -1 :y 0}
		{:x -1 :y -1}
	]

	;L 
	[
		{:x 0 :y -2}
		{:x 0 :y -1}
		{:x 0 :y 0}
		{:x 1 :y 0}
	]])

(defn to-cell![blocks]
	(cell blocks))

; Создает новый объект на основе заданной ширины и высоты поля
(defn new-object[w h]
	(let [center (dec (Math/ceil (/ w 2))) 
				obj (nth objectmap (dec (Math/ceil (* 5 (Math/random)))))] 
		(to-cell! 
			(mapv #(let [x (get % :x)] {:x (+ x center) :y (get % :y)}) obj))))

(defn fall![obj]
	(mapv #(let [y (inc (get % :y))] {:x (get % :x) :y y}) obj))
	
(defn redraw-full[fictive]
	(set-styles! (sel "div.cell") {:background-color "#eee"}))
	
(defn redraw![block color]
	(mapv 
		#(let [col (get % :x)
					 row (get % :y)
					 el (->
								(sel (str "div.line:nth-child(" (inc row) ")"))
								(sel (str "div.cell:nth-child(" (inc col) ")")))]
			(set-styles! el {:background-color color})) block))


; То что происходит по onload body
(defn ^:export start [width height]

	; рисуем поле
	(gen! height #(append! (sel "#game") "<div class='line'></div>"))
	(gen! width #(append! (sel ".line") "<div class='cell'></div>"))
	
	; модель поля
	(defc lines [])
	(defc board [lines])
	
	(def block (new-object width height))
	
	; TODO надо поправить allowed?
	(defn allowed?[direction] direction)
;		#_(let [maxx (get-max-x block)  ;TODO сделать get-max
;					minx (get-min-x block) :TODO get-max
;			(if (and (>= newx 0) (< newx width)) direction false )))
;	
	(defn move-to! [dir]
		(fn[item]
			(mapv #(let [x (+ dir (get % :x))] {:x x :y (get % :y)}) item)))
	
	; Перемещает объект
	(defn move![obj]
		(let [code (.-keyCode obj),
					direction (if (move? code) (get-direction! code) false)]
			
			(if (allowed? direction)
				
				; вот здесь процесс изменения ячейки, который надо будет переписать, когда ячейки станут компаундными
				(do
					(swap! block (move-to! direction))) nil)))
	
	
	;;;;;;;;;;;;;;;;;;;;;;; side effects	
	
	; Задаем такты	
	(js/setInterval 
		#(do
			(swap! ticks (add 1000))
			(swap! block fall!)) 1000)
	
	; Задаем прослушку 
	(.addEventListener js/document "keydown" move!)
	
	; логируем такты
	(cell= (#(.log js/console ticks)))
	
	
	(cell= (redraw-full block))
	(cell= (redraw! block "#666")))
	