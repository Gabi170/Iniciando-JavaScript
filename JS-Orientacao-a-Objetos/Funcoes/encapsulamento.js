let Carro = function(){
    this.cor = 'verde'
    this.modelo = 'Uno'
    this.velocidadeAtual = 0
    this.velocidadeMAxima = 180 

    this.acelerar = function(){

        //this.velocidadeAtual += 10

        let velocidade = this.getVelocidadeAtual() + 50
        this.setVelocidadeAtual(velocidade)

        if(velocidade > this.velocidadeMAxima){
        velocidade = this.velocidadeMAxima
        }
        this.setVelocidadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual 
    }
    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)

carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)

console.log('----------------------------------------------------')

let Carro2 = function(){
    var velocidadeMAxima = 180 
    var quilometrosRodados = 0

    this.cor = 'verde'
    this.modelo = 'Uno'
    this.velocidadeAtual = 0
    

    this.acelerar = function(){

        //this.velocidadeAtual += 10

        let velocidade = this.getVelocidadeAtual() + 50
        this.setVelocidadeAtual(velocidade)

        if(velocidade > velocidadeMAxima){
        velocidade = velocidadeMAxima
        }
        this.setVelocidadeAtual(velocidade)

       setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
       
    }
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual 
    }
    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
    var setQuilometrosRodados = function(q){
        quilometrosRodados += q
    }
}

let carro2 = new Carro2()

console.log(`A velocidade atual é: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.getVelocidadeAtual()}`)