function checar(){
    var par = document.getElementById('par')
    var res = document.getElementById('res')
    var checar = document.getElementById('checar')
    
    if(par.value.length == 0){
        window.alert('Impossivel calcular')
        res.innerHTML = 'Impossivel calcular'
    }
    else{
        let p = Number(par.value)
        if(p % 2 == 0){
            res.innerHTML = `O número ${p} é par`
            for(let con = 1;  c > 1; c--){
                let per = p *= con
            }
            res.innerHTML = `A permutação de ${p}! = ${per}`
        }else{
            res.innerHTML = `O número ${p} é impar`
            for(let con = 1;  c > 1; c--){
                let per = p *= con
            }
            res.innerHTML = `A permutação de ${p}! = ${per}`
        }
      
    }

    
}