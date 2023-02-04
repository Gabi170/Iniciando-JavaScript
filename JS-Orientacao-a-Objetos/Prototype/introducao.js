let a1 = {
    cor: 'Branco',
    modelo: 'Boing 503',
    levantarVoo: function(){console.log('Voo iniciado com susseso')}
}

let Aviaof = function(){
    this.cor = 'Braco'
    this.modelo = 'Boing 852'
    this.levantarVoo = function(){console.log('Voo iniciado com susseso')}
}

let a2 = new Aviaof()

class AviaoC{
    constructor(){
        this.cor = 'Braco'
        this.modelo = 'Airbus 852'
    }
    levantarVoo(){
        console.log('Voo iniciado com susseso')
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)

typeof a1
typeof a2
typeof a3