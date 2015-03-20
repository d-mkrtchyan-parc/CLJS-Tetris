; Объявлем неймспейс tetris.core
(ns tetris.core
  ; описываем все зависимости
  (:require   [clojure.browser.event :as event]
              [clojure.string :as string]
              [tailrecursion.javelin :refer [cell]]
              [tetris.utils :as utils]
              [dommy.core :as dommy])

  ; и способы их применения
  (:use   [cljs.reader :only [read-string]]
          [domina :only [add-class! by-id remove-class! set-text! set-styles! set-html! swap-content! single-node append!]]
          [domina.css :only [sel]]
          [domina.events :only [capture! listen!]]
          [domina.xpath :only [xpath]])

  ; и макросы из библиотек
  (:require-macros  [tailrecursion.javelin :refer [defc defc= cell=]]
                    [dommy.macros :refer [node]]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Служебные функции
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Замыкающая функция суммирования джвух аргументов
;(defn add[x] #(+ x %))
; Можно заменить всюду на (partial + x)

(defn op-vec [op v1 v2]
  (mapv op v1 v2))

(def add-vec (partial op-vec +))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Логика создания ячейки-объекта
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; создает новый полноценный объект
(defn create[w h]
  (let [center (dec (Math/ceil (/ w 2))) ; вычисляем центр поля
        object (nth utils/object-map (rand-int (count utils/object-map)))] ; и достаем объект из карты объектов с этим номером
    ; создаем hash с ключами color и blocks
    (hash-map 
      :color (utils/random-color)
      :blocks (mapv (partial add-vec [center 0]) object))))

; создает поле
(defn create-board![w h]
    (hash-map :current (create w h)
              :context []
              :overloaded false
              :width w
              :height h ))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Рисование
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn loose![width height]
  (do (set-html!
        (->
          (sel "#game")
          (add-class! "loosed")
          (set-styles! {:width (str (* width 16) "px") :height (str (* height 16) "px")}) )
        (str "<button class='btn btn-primary' onclick='tetris.core.start(" width "," height ")'>You loose!</button>"))
      (js/clearInterval ticks)))

; Draws a single cell in row
(defn draw-cell[x y color]
  (let [element (-> (sel (str "#game div.line:nth-child(" (inc y) ")"))
                    (sel (str "div.cell:nth-child(" (inc x) ")")))]
    (set-styles! element {:background-color color})))

; Перерисовывает поле board (fictive остался для создания формулы, не знаю как избавиться)
(defn redraw![board]
  (let [current (:current board)
        color (:color current)]
    (if (:overloaded board) (loose! (:width board) (:height board))
      (do
        (set-styles! (sel "div.cell") {:background-color "#eee"})  
        (mapv #(draw-cell (first %) (second %) (last %)) (:context board))
        (mapv #(draw-cell (first %) (second %) color) (:blocks current))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Игровая логика в алгоритмах
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Предикат [Map -> Map] -> Boolean
; Возвращает true если в @blocks поле @eb [Map {x y}] не заполнено
(defn filled?[cell board]
  "Does cell filled in board"
  (let [context (:context board)
        x (first cell)
        y (second cell)
        is-cell-filled? (some #(utils/contain? % cell) context)
        res (or (neg? x)
                (>= y (:height board))
                (>= x (:width board))
                is-cell-filled? )]
    res))

; Предикат, определяет можно ли переместить block в board на direction позиций по горизонтали
(defn locked? [direction board]
  (let [  blocks (:blocks (:current board))
          context (:context board)
          check-place (mapv (partial add-vec direction) blocks)
          filled-filter-fn #(filled? % board)]
    (some filled-filter-fn check-place)))

; предикат возвращает true, если блок можно перемещать в направлении direction
(defn allowed?[direction board]
  (let [locked (locked? direction board)]
    (if (not locked) direction false )))

; принимает параметр dir (направление) и возвращает функцию :: Board -> Board
(defn move-to[dir]
  (fn[board]
    (let [  block (:current board)
            blocks (:blocks block)]
      (assoc board 
        :current (assoc block 
          :blocks (mapv (partial add-vec dir) blocks))))))

(defn stack[board]
  (let [ {:keys [context height current width]} board
          color (:color current)
          cells (:blocks (assoc current :blocks (mapv #(assoc % 2 color) (:blocks current))))
          ncontext (into context cells)
          final-context ((fn[init seqlist]
                          (let [row (first seqlist)
                                filled-cells (filter #(= row (second %)) init)
                                previous-cells  (filter #(not (= row (second %))) init)
                                mapper (fn[cell](if (< (second cell) row) (assoc cell 1 (inc (second cell))) cell))]
                                (if (zero? row)
                                    init
                                    (if (= width (count filled-cells)) ; ежели строка row заполнена
                                          (recur (mapv mapper previous-cells) (rest seqlist))
                                          (recur init (rest seqlist)))))) ncontext (reverse (range height)))]

      (assoc board 
        :overloaded (if (some #(= 0 (second %)) cells) true false)
        :context final-context
        :current (create (:width board) (:height board)))))


; Деструктивные функции
(defn move![direction board]
    (if (allowed? direction @board)
        (swap! board (move-to direction)) nil))


(defn rotate[figure](assoc figure :color "black"))

(defn rotate![direction board]
  (swap! board #(assoc % :current (rotate (:current %)))))

; То что происходит по onload body
(defn ^:export start [width height]
  ; рисуем игровое поле
  (->
    (sel "#game")
    (remove-class! "loosed")
    (set-html! "")
    (set-styles! {:width "inherit" :height "inherit" }))
  (utils/repeat! height #(append! (sel "#game") "<div class='line'></div>"))
  (utils/repeat! width #(append! (sel ".line") "<div class='cell'></div>"))

  (defc board (create-board! width height))
  

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Логика вычислений и побочные действия

  ; Задаем прослушку
  (.addEventListener js/document "keydown" (fn[event]
    (let [  code (.-keyCode event)
            blocks (:blocks (:current @board))
            direction (if (utils/arrow? code) (utils/code->direction code) false)]

          (if (= direction [0 -1])
              (rotate! direction board)
              (move! direction board)))))

  ; Задаем такты
  (def ticks (js/setInterval #(let [direction [0 1]]
    (if (allowed? direction @board)
        (swap! board (move-to direction))
        (swap! board stack direction)))
        600))

  (cell= (redraw! board)))