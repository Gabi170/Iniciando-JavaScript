console.log('Atividade 1)')
var lista_frutas = Array('Pera', 'Abacaxi', 'Limão', 'Jabuticaba', 'Melancia')


for(var y = 0; y < lista_frutas.length; y++){

    console.log(lista_frutas[y])

}

console.log('---------------------------------------')

console.log('Atividade 2)')

var y = 1

while(y <= 10){

var x = 1

while(x <= 10){
    console.log(`${y} x ${x} = ${y * x++}`)
}
y++
console.log('---------------------------------------')
}