class Despesa{
    constructor(ano, mes, dia, tipo, valor, descricao){

        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }
}

function cadastrarDespesa(){

let ano = document.getElementById('ano')
let mes = document.getElementById('mes')
let dia = document.getElementById('dia')
let tipo = document.getElementById('tipo')
let valor = document.getElementById('valor')
let descricao = document.getElementById('descricao')

let despesa = new Despesa(
    ano.value,
    mes.value, 
    dia.value, 
    tipo.value, 
    valor.value, 
    descricao.value)

    gravar(despesa)
}

function gravar(d){
    localStorage.setItem('despesa', JSON.stringify(d))
}




