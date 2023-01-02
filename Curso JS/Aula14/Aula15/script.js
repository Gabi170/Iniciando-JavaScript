function resultado(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Coloque os valores corretamente')
        res.innerHTML += `Impossivel contar` 
    }
    else{
       res.innerHTML = 'Contando: <br>'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       if(p == 0){
        window.alert('[ERRO] Iremos considerar Passo = 1')
        p = 1
       }
       
       if(i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} 👉`
        } 
    }else{
        for(let c = i; c >= f; c-=p){
            res.innerHTML += `${c} 👉`
        }
    }

       res.innerHTML += `🏴`
    }
   
}