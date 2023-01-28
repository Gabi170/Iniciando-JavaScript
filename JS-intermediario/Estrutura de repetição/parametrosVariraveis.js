function soma(){
    var resultado = 0
    for(var i in arguments){
        resultado += arguments[i]
    }
    return resultado
}

console.log(soma(10, 14,165,1246,125,-200, 'Valor'))