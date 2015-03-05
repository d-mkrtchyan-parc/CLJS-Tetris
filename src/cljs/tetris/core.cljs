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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Глобальные переменные
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def objectmap utils/object-map ) ; вектор возможных объектов


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Служебные функции
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Предикат на проверку движения влево/вправо по keyCode ивента
(defn move? [code]
  (or (== code 37) (== code 39)))

; Принимает keyCode возвращает направление движения по оси X
(defn get-direction[code]
  (if (== code 39) 1 (if (== code 37) -1 nil)))

; Замыкающая функция суммирования джвух аргументов
(defn add[x] #(+ x %))

; достает экстремальный по функции cmp ключ (key-word) из объекта obj
; TODO переписать так чтобы доставал массив экстремумов
(defn get-extremal[obj cmp key-word]
  (reduce (fn[a b]
    (let [comparsion-result (cmp (get a key-word ) (get b key-word ))]
      (if comparsion-result a b)))
    ; initial value
    (first obj)
    ; reduce object
    obj))

(defn get-extremals[obj key-word]
  (reduce (fn[res cur]
    (let [  comparing (get (last res) key-word )
            comparsion-result (- comparing (get cur key-word ))]

      (if (= 0 comparsion-result)
          (conj res cur) 
          (if (neg? comparsion-result) [cur] res ))))
    ; initial value
    [(first obj)]
    ; reduce object
    obj))

; компрактор двух объектов по ключевым словам x и y
(defn compractor[o n]
  (and 
    (== (:x o) (:x n))
    (== (:y o) (:y n))))

; принимает параметр dir (направление) и возвращает функцию :: Item -> Item
(defn move-to! [dir]
  (fn[block]
    (let [  color (:color block)
            blocks (:blocks block)]
      {:color color :blocks (mapv #(let [x (+ dir (:x %))] {:x x :y (:y %)}) blocks) })))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Логика создания ячейки-объекта
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Создает новый объект на основе заданной ширины и высоты поля
(defn new-object[w h color]
  (let [  center (dec (Math/ceil (/ w 2))) ; вычисляем центр поля
          number-in-map (dec (Math/ceil (* (count objectmap) (Math/random)))) ; генерим случайнй номер
          object (nth objectmap number-in-map) ; и достаем объект из карты объектов с этим номером
          blocks-vector (mapv #(let [x (:x %)] {:x (+ x center) :y (:y %)}) object)] ; создаем массив блоков 
    
    ; создаем cell с ключами color и blocks
    (cell {:color color :blocks blocks-vector })))

; создает новый полноценный объект
(defn create![w h]
  (new-object w h (utils/random-color)))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Рисование
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Рисует объект block цвета color
(defn redraw![block]
  (let [{color :color blocks :blocks} block]
    (mapv 
      #(let [ col (:x %)
              row (:y %)
              el (->
                (sel (str "#game div.line:nth-child(" (inc row) ")"))
                (sel (str "div.cell:nth-child(" (inc col) ")")))]
        (set-styles! el {:background-color color })) blocks)))

; Перерисовывает поле board (fictive остался для создания формулы, не знаю как избавиться)
(defn redraw-full[board fictive]
  (set-styles! (sel "div.cell") {:background-color "#eee"})
  (mapv #(redraw! %) (:context board)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Игровая логика в алгоритмах
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Предикат [Map -> Map] -> Boolean
; Возвращает true если в @board поле @eb [Map {x y}] не заполнено
(defn filled?[blocks eb]
  (let [results (filter (fn[block] (utils/indexOf? (:blocks block) {:x (:x eb) :y (inc (:y eb))} compractor)) blocks)]
    (> (count results) 0)))


; предикат [Map -> Map] -> Boolean возвращет true если block некуда падать
(defn stacked? [board blocks]
  (let [  downs (get-extremals blocks :y) ; экстремальный блок по оси Y ; TODO FIX надо будет сделать так, чтобы это было множество
          fields (.-state board) ; поля в board
          falling-filter-fn (fn[block](let [y (:y block)] (< y (dec (:height fields)))))
          filled-filter-fn (fn[block](filled? (:context fields) block))
          is-place-to-fall (> (count (filter falling-filter-fn downs)) 0) 
          is-place-filled (> (count (filter filled-filter-fn downs)) 0)]
    (or is-place-filled (not is-place-to-fall)))) ; результат: если нет места куда падать и место забито  

; принимает блок и выдает такой же блок со смещенной на 1 вниз координатой Y
(defn fall![block]
  (let [  {color :color blocks :blocks} block
          swapped (mapv #(let [y (inc (:y %))] {:x (:x %) :y y}) blocks)]
    {:color color :blocks swapped }))

; предикат возвращает true, если блок можно перемещать в направлении direction
(defn allowed?[direction block gmax]
  (let [  maxx (get (get-extremal block > :x) :x)
          minx (get (get-extremal block < :x) :x)
          nmaxx (+ direction maxx)
          nminx (+ direction minx)]
    (if (and (>= nminx 0) (< nmaxx gmax)) direction false )))

(defn toggle![x](not x))

; принимает блок и возвращает обработчки который засовывает в аргумент @board исходный блок
(defn conj-add[block]
  (let [  st (.-state block)
          blocks-struct  (:blocks st)
          object-blocks {:color (:color st) :blocks blocks-struct}]

    (fn[board]
      (let [  {blocks :context width :width height :height}  board
              new-board (conj blocks object-blocks)
              res {:width width :height height :context new-board}
        ]res))))

; Перемещает объект
(defn move![event block board]
  (let [  code (.-keyCode event)
          blocks (:blocks @block)
          width (:width @board)
          direction (if (move? code) (get-direction code) false)]

    (if (and direction (allowed? direction blocks width))
        (swap! block (move-to! direction)) 
        nil)))


; То что происходит по onload body
(defn ^:export start [width height]

  ; рисуем игровое поле
  (utils/repeat! height #(append! (sel "#game") "<div class='line'></div>"))
  (utils/repeat! width #(append! (sel ".line") "<div class='cell'></div>"))

  ; рисуем область NEXT
  (utils/repeat! 5 #(append! (sel "#next") "<div class='line'></div>"))
  (utils/repeat! 5 #(append! (sel "#next .line") "<div class='cell next'></div>"))

  ; модель поля ;FUTURE  переделать так, чтобы не пользоваться больше w h в коде

  (defc board {:context [] :width width :height height})
  (defc overloaded false)
  (def block (create! width height))

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Логика вычислений и побочные действия

  ; Задаем прослушку 
  (.addEventListener js/document "keydown" #(move! % block board))

  (defn step![]
    (if (stacked? board (:blocks (.-state block))) ; если объекту некуда двигаться, то 
      (do 
        (if (> (count (filter #(neg? (:y %)) (:blocks @block)))0) 
            (swap! overloaded toggle!)
            nil)
        (swap! board (conj-add block)) ; втыкаем в board текущий блок
        (reset! block (.-state (create! (:width (.-state board)) (:height (.-state board)))))) ; обновляем текущий block на новый созданный
      ;иначе
      (swap! block fall!)))

  ;;;;;;;;;;;;;;;;;;;;;;; side effects	

  ; Задаем такты	
  (def ticks (js/setInterval step! 200))
  
  (defn loose![over]
    (if over 
      (do 
        (set-html! (sel "#game") "You looooooooose!")
        (js/clearInterval ticks))  nil))

  (cell= (loose! overloaded))
  (cell= (redraw-full board block))
  (cell= (redraw! block)))
  