class Animal{
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir(){
        console.log('Dormir')
    }   
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.orelhas= 'grandes e caidas'
    }

    comer(){
        console.log('Comer')
    }
    
    rosnar(){
        console.log('Ronar')
    }
}

class Passaro extends Animal{
    constructor(){
        super()
        this.pico = 'Pequeno'
    }

    comer(){
        console.log('Comer')
    }
    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro{
    constructor(){
        super()
        this.falar = true
    }

    SaberFalar(){
        console.log('Sabe falar')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

console.log(papagaio)
console.log(cachorro)
console.log(passaro)


