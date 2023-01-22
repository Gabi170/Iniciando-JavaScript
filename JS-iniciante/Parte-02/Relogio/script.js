var horas = document.querySelector('div#horas')
var h = new Date()
var oras = h.getHours()

var minutos = document.querySelector('div#minutos')
var m = new Date()
var min = m.getMinutes()

var segundos = document.querySelector('div#segundos')
var s = new Date()
var seg = s.getSeconds()

horas.innerHTML = oras
minutos.innerHTML = min
segundos.innerHTML = seg