function resultado(){
    var num = document.getElementById('num')
    var tab = document.getElementById('res')
    var number = Number(num.value)
    
    if(num.value.length  == 0){
        window.alert(`[ERRO] Tente novamente com um numero`)
        res.innerHTML = `Impossivel calcular`        
    }
    else{
        let n = Number(num.value)
        let con = 1
        res.innerHTML = ``
        while(con <= 10){
            let item = document.createElement('option')
            item.txt = `${n} x ${con} = ${n * con}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }

    }

}