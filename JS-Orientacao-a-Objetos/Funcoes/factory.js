let Bicicleta = {
    cor: 'Azul',
    marcha: 'unica',
    aro: 12,
    pedalar(){console.log('Medodo pedalar excutado com susseso')}
}

let Bicicleta2 = {
    cor: 'Verde',
    marcha: '12',
    aro: 18,
    pedalar(){console.log('Medodo pedalar excutado com susseso')}
}

console.log(Bicicleta)
Bicicleta.pedalar()
console.log(Bicicleta2)
Bicicleta2.pedalar()


console.log('----------------------------------------------------')

let BicicletaFactory = function(cor, marcha, aro){

    return{
    cor,
    marcha,
    aro,
    pedalar(){console.log('Medodo pedalar excutado com susseso')}
    }
}

let Bicicleta3 = BicicletaFactory()
console.log(Bicicleta3)

console.log(`Cor: ${Bicicleta3.cor}`)
Bicicleta3.pedalar()