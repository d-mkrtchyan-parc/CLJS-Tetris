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


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Глобальные
(def objectmap utils/object-map)


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
(defn get-direction![code]
	(if (== code 39) 1 (if (== code 37) -1 nil)))

; Замыкающая функция суммирования джвух аргументов
(defn add[x] #(+ x %))

; всегда возвращает obj ячейку в деструктурированном виде
(defn always![obj]
	(let [result (mapv #(let [o (.-state %)
				x (get o :x)
				y (get o :y)
				res {:x x :y y}] res) obj)] (fn[] result)))

; достает экстремальный по функции cmp ключ (key-word) из объекта obj
(defn get-extremal[obj cmp key-word]
	(reduce
		(fn[a b] 
			(if (cmp 
						(get a key-word ) 
						(get b key-word ))
					a
					b)) (first obj) obj))

; есть ли в векторе v значение value (значения сравниваются с помощью функции cmp)
(defn indexOf? [v value cmp]
	(if (> (count (filter #(cmp % value) v)) 0) true false))

(defn compractor[o n]
	(if 
		(and 
			(== (get o :x) (get n :x))
			(== (get o :y) (get n :y)))
		true false))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Логика создания ячейки-объекта

; Создает новый объект на основе заданной ширины и высоты поля
(defn new-object[w h]
	(let [center (dec (Math/ceil (/ w 2))) 
				obj (nth objectmap (dec (Math/ceil (* 7 (Math/random)))))] 
		(cell (mapv #(let [x (get % :x)] {:x (+ x center) :y (get % :y)}) obj))))
	
	
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Рисование

; Рисует объект block цвета color
(defn redraw![block color]
	(mapv 
		#(let [col (get % :x)
					 row (get % :y)
					 el (->
								(sel (str "div.line:nth-child(" (inc row) ")"))
								(sel (str "div.cell:nth-child(" (inc col) ")")))]
			(set-styles! el {:background-color color})) block))

; Перерисовывает поле board (fictive остался для создания формулы, не знаю как избавиться)
(defn redraw-full[board fictive]
	(set-styles! (sel "div.cell") {:background-color "#eee"})
	(mapv #(redraw! % "#666") board))

(defn filled?[board eb]
	(let [results (filter (fn[block] (if (indexOf? block {:x (get eb :x)  :y (inc (get eb :y))} compractor) true false )) board)]
		(if (> (count results) 0) true false)))
		
(defn drown?[board obj maxh]
	(let [eb (get-extremal obj > :y),
				is-empty (not (filled? (.-state board) eb))]
		(if (and is-empty (< (get (get-extremal obj > :y) :y) maxh)) true false)))

(defn fall![obj]
	(mapv #(let [y (inc (get % :y))] {:x (get % :x) :y y}) obj))

(defn allowed?[direction block gmax]
		(let [maxx (get (get-extremal block > :x) :x),
					minx (get (get-extremal block < :x) :x),
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
		(if (drown? board (.-state block) (dec height))
			(swap! block fall!)
			(do
				(swap!  board (conjT (.-state block)))
				(reset! block (.-state (new-object width height)))))) 200)
	
	; Задаем прослушку 
	(.addEventListener js/document "keydown" move!)
		
	(cell= (redraw-full board block))
	(cell= (redraw! block "#666")))
	