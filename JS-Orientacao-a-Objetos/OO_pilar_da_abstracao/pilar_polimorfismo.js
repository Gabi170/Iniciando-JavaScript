class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
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
    constructor(falar, tamanho, cor, peso){
        super('Medio', tamanho, cor, peso)
        this.falar = true
    }

    SaberFalar(){
        console.log('Sabe falar')
    }
}

class Avestruz extends Passaro{
    constructor(){
        super('Grande', 'Branco, preto e marrom', 30, 1500)
    }
    enterrarCabeca(){
        console.log('Enterrar cabeça')
    }
    voar(){
        console.log('Não sabe voar')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio(true, 35, 'azul', 500)
let avestruz = new Avestruz()

console.log(papagaio)
console.log(cachorro)
console.log(passaro)
console.log(avestruz)

papagaio.voar()
avestruz.enterrarCabeca()
avestruz.voar()