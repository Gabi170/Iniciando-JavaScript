var horas = document.querySelector('span#horas')
var minutos = document.querySelector('span#minutos')
var segundos = document.querySelector('span#segundos')


const relogio = setInterval(function time() {
  let dateToday = new Date()
    var h = dateToday.getHours()
    var m = dateToday.getMinutes()
    var s = dateToday.getSeconds()

    if(h < 10){h = '0' + h}

    if(m < 10){m = '0' + m}

    if(s < 10){s = '0' + s}

    horas.innerHTML = h
    minutos.innerHTML = m
    segundos.innerHTML = s

})

