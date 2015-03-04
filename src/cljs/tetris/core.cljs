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


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Служебные функции

; вызывает fn count раз
(defn gen![count fn]
	(if (> count 0) 
		(do
			(fn count)
			(gen! (dec count) fn)) 
		nil))

; Предикат на проверку движения влево впрааво по keyCode ивента
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



;(def ticks (cell 0)) ; ячейка тактов

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; создаем объект
(def objectmap [
	[{:x 0 :y 0}] ; dot
	[{:x 0 :y -1} {:x 0 :y 0}] ; two-dot
	[{:x 0 :y -3} {:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0}] ; stick
	[{:x 0 :y 0} {:x 0 :y -1} {:x -1 :y 0} {:x -1 :y -1}] ; square
	[{:x 0 :y -1} {:x -1 :y 0 } {:x 0 :y 0} {:x 1 :y 0}] ; small t-figure								 
	[{:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; L-figure
	[{:x -1 :y -2} {:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; Z-figure							 
])

(defn to-cell![blocks]
	(cell blocks))

; Создает новый объект на основе заданной ширины и высоты поля
(defn new-object[w h]
	(let [center (dec (Math/ceil (/ w 2))) 
				obj (nth objectmap (dec (Math/ceil (* 7 (Math/random)))))] 
		(to-cell! 
			(mapv #(let [x (get % :x)] {:x (+ x center) :y (get % :y)}) obj))))
	
(defn redraw![block color]
	(mapv 
		#(let [col (get % :x)
					 row (get % :y)
					 el (->
								(sel (str "div.line:nth-child(" (inc row) ")"))
								(sel (str "div.cell:nth-child(" (inc col) ")")))]
			(set-styles! el {:background-color color})) block))

(defn redraw-full[board fictive]
	(set-styles! (sel "div.cell") {:background-color "#eee"})
	(mapv #(redraw! % "#666") board))


(defn get-max-cmp[obj cmp keycode]
	(reduce
		(fn[a b] 
			(if (cmp 
						(get a keycode ) 
						(get b keycode ))
					a
					b)) (first obj) obj))

(defn drown?[m obj]
	(if (< (get (get-max-cmp obj > :y) :y) m) true false))

(defn fall![obj]
	(mapv #(let [y (inc (get % :y))] {:x (get % :x) :y y}) obj))

(defn allowed?[direction block gmax]
		(let [maxx (get (get-max-cmp block > :x) :x),
					minx (get (get-max-cmp block < :x) :x),
					nmaxx (+ direction maxx),
					nminx (+ direction minx)]
			
			(if (and (>= nminx 0) (< nmaxx gmax)) direction false )))


(defn conjT[o] #(conj % o))

; То что происходит по onload body
(defn ^:export start [width height]

	; рисуем поле
	(gen! height #(append! (sel "#game") "<div class='line'></div>"))
	(gen! width #(append! (sel ".line") "<div class='cell'></div>"))
	
	; модель поля
	(defc board [])
	
	(def block (new-object width height))
		
	(defn move-to! [dir]
		(fn[item]
			(mapv #(let [x (+ dir (get % :x))] {:x x :y (get % :y)}) item)))
	
	; Перемещает объект
	(defn move![obj]
		(let [code (.-keyCode obj),
					direction (if (move? code) (get-direction! code) false)]
			
			(if (allowed? direction (.-state block) width)
					(swap! block (move-to! direction)) nil)))
	
	
	;;;;;;;;;;;;;;;;;;;;;;; side effects	
	
	; Задаем такты	
	(js/setInterval #(do
		(if (drown? (dec height) (.-state block))
			(swap! block fall!)
			(do
				(swap!  board (conjT (.-state block)))
				(reset! block (.-state (new-object width height)))))) 600)
	
	; Задаем прослушку 
	(.addEventListener js/document "keydown" move!)
	
	; логируем такты
	(cell= (#(.log js/console ticks)))
	
	
	(cell= (redraw-full board block))
	(cell= (redraw! block "#666")))
	