function soma(...param){
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)

    return resultado
}

console.log(`O resultado da soma é:${soma(1,25,69,49,-85,85,331)}`)

console.log('----------------------------')

function multiplicar(m, ...p){
    console.log(m)
    let resultado = 0
    console.log(p)

    p.forEach(v => resultado += m * v)
    
    return resultado
}

console.log(`O resultado da multiplicação é:${multiplicar(52,68,47,32,5,9,448)}`)