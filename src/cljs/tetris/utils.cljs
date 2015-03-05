(ns tetris.utils)

(def object-map [
  [{:x 0 :y 0}] ; dot
  [{:x 0 :y -1} {:x 0 :y 0}] ; two-dot
  [{:x 0 :y -3} {:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0}] ; stick
  [{:x 0 :y 0} {:x 0 :y -1} {:x -1 :y 0} {:x -1 :y -1}] ; square
  [{:x 0 :y -1} {:x -1 :y 0 } {:x 0 :y 0} {:x 1 :y 0}] ; small t-figure
  [{:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; L-figure
  [{:x -1 :y -1} {:x 1 :y -1} {:x -1 :y 0} {:x 0 :y 0} {:x 1 :y 0}] ; П-figure
  [{:x -1 :y -1} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; z-swipe-figure
  [{:x -1 :y -2} {:x 0 :y -2} {:x 0 :y -1} {:x 0 :y 0} {:x 1 :y 0}] ; Z-figure
])

; возвращает случайный цвет в hex
(defn random-color[]
  (str "#" (.toString (Math/round (* (Math/random) 0xFFFFFF)) 16)))

; вызывает fn count раз
(defn repeat![c f]
  (if (> c 0)  		
    (do (f c)
        (recur (dec c) f))
  nil))

; есть ли в векторе v значение value (значения сравниваются с помощью функции cmp)
(defn indexOf? [v value cmp]
	(> (count (filter #(cmp % value) v)) 0))

; всегда возвращает obj ячейку в деструктурированном виде
; TODO: подумать как избавиться от этой ерунды
(defn always![obj]
  (let [  result (mapv #(let [o (.-state %) 
          res {:x (:x o) :y (:y o)}] res) obj)] 
            (fn[] result)))
