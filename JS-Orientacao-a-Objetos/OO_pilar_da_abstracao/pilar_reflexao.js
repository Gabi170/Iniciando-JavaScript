//Marcenaria

/*Paradigma procedural

let cadeiras = Array()

cadeira[0] = Array()
cadeira[0]['qtd_pernas'] = 4
cadeira[0]['giratoria'] = false
cadeira[0]['cor'] = 'azul'

cadeira[1] = Array()
cadeira[1]['qtd_pernas'] = 1
cadeira[1]['giratoria'] = true
cadeira[1]['cor'] = 'vermelha'

function girar_cadeira(indice){
    if(cadeira[indice]['giratoria'] === true){
        console.log(`A cadeira girou`)
    }
    else{
        console.log(`A cadeira não girou`)
    }
}

function adicionar_cadeiras(qtd_pernas, giratoria, cor){

    let cadeira = Array()

    cadeira[0]['qtd_pernas'] = qtd_pernas
    cadeira[0]['giratoria'] = giratoria
    cadeira[0]['cor'] = cor

    cadeira.push(cadeira)
}

adicionar_cadeiras(4, false, 'violeta')

console.log(cadeiras)


//Orientação a objetos

class Cadeira{
    constructor(qtdPernas, giratoria, cor){

        this.qtdPernas = qtdPernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {

        if(this.giratoria === true){
            console.log(`A cadeira girou`)
        }
        else{
            console.log(`A cadeira não girou`)
        }
    }
}

let cadeiras = Array()

cadeiras.push(new Cadeira(4, false, 'verde'))
cadeiras.push(new Cadeira(1, true, 'vaiolet'))
cadeiras.push(new Cadeira(3, true, 'laranja'))

console.log(cadeiras)
*/

//Desafio Sofa

class Sofa{
    constructor(qtdLugares, qtdPernas, reclinavel, tecido, cor){

        this.qtdLugares = qtdLugares
        this.qtdPernas = qtdPernas
        this.reclinavel = reclinavel
        this.tecido = tecido
        this.cor = cor 
    }

    sofaReclinavel() {
        
        if(this.reclinavel === true){
            console.log('Sofa reclinavel')
        }
        else{
            console.log('Sofa não reclinavel')
        }
    }
}

let sofa = new Sofa(3, 5, true, 'camursa', 'verde')
let sofa2 = new Sofa(2, 5, false, 'espuma', 'branco')

sofa2.sofaReclinavel()

console.log(sofa2)