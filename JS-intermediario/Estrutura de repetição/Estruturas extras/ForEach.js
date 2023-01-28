var listaFuncionarios = ['Viviam', 'Luana', 'Mario', 'Camila', 'Gio']

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)


/*
console.log(listaFuncionarios)
console.log('--------------------------')

listaFuncionarios.forEach(function(valor, indice, array){

    console.log(`Indice: ${indice} | valor: ${valor}`)

    if(valor == 'Luana'){
      array[indice] = 'Jupiter'
    }
})
console.log('--------------------------')
console.log(listaFuncionarios)
*/