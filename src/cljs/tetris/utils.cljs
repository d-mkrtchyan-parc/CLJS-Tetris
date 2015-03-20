(ns tetris.utils)

; вектор доступных объектов
(def object-map [
  [[0  0]] ; dot
  [[0  -1] [0  0]] ; two-dot
  [[0   0] [0  -1] [-1 0] ] ; Г-figure-small
  [[0  -3] [0  -2] [0 -1] [0   0]] ; stick
  [[0   0] [0  -1] [-1 0] [-1 -1]] ; square
  [[0  -1] [-1  0] [0  0] [1   0]] ; small t-figure
  [[0  -2] [0  -1] [0  0] [1   0]] ; L-figure
  [[1  -2] [0  -2] [0 -1] [0   0]] ; Г-figure
  [[-1 -1] [0  -1] [0  0] [1   0]] ; z-swipe-figure
  [[-1 -1] [1  -1] [-1 0] [0   0] [1 0]] ; П-figure
  [[-1 -2] [0  -2] [0 -1] [0   0] [1 0]] ; Z-figure
])

; вектор доступных цветов
(def color-map [
  "red" "green" "blue" "yellow"
  "cyan" "navy" "black" "pink"
  "orange" "magenta" ])

(defn random-color[]
  (nth color-map (rand-int (count color-map))))

; вызывает fn count раз
(defn repeat![c f]
  (if (> c 0)  		
    (do (f c)
        (recur (dec c) f))
  nil))

; есть ли в векторе v значение value (значения сравниваются с помощью функции cmp)
(defn indexOf? [v value cmp]
	(> (count (filter #(cmp % value) v)) 0))


; Предикат на проверку движения влево/вправо по keyCode ивента
(defn arrow? [code]
  (and (>= code 37) (<= code 40)))

; содержится ли объект block в blocks
(defn contain? [a b]
  (and  (= (first a) (first b))
        (= (second a) (second b))))

; принимает keyCode и возвращает Vecto2 в формате [x y] -> {x, y}
(defn code->direction[code]
  (let [diag (pos? (mod code 2))]
    (vector 
      (if diag (- code 38) 0)     ; x 
      (if diag 0 (- code 39)))))  ; y

(defn center[fig] ;where fig is vector of coors (e.g. [ [0 0] [0 1] [1 0] [1 1] ] ) 
  "Finds figure central coors" 
  (let [length (count fig) ; count of figure blocks 
        average #(/ (reduce + (mapv % fig)) length) ; average abstract function
        x (average first) ; x coor of center
        y (average second)] ; y coor of center
    (mapv Math/round (vector x y)))) ; result