class Despesa{
    constructor(ano, mes, dia, tipo, valor, descricao){

        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }

    validarDados(){

        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }

        return true
    }
}

class Bd{

    constructor(){
       let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProcimoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d){
        let id = this.getProcimoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){

        let despesas = Array()
        
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){

            let despesa = JSON.parse(localStorage.getItem(i))
            console.log(i, despesa)

            if(despesa == null){
                continue
            }

            despesas.push(despesa)
        }
        return despesas
    }

  
}

let bd = new Bd()

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
        descricao.value
    )

    if(despesa.validarDados()){
    //dialog de susseso

        bd.gravar(despesa)
        $('#registrarDespesa').modal('show')

        document.getElementById('title').innerHTML = "Formulario enviado"
        document.getElementById('frase').innerHTML = ' Formulario inserido com susseso, obrigado por usar nosso site.<br>😁😁😁'
        document.getElementById('buttam').innerHTML = 'Voltar'
        document.getElementById('buttam').className = 'btn btn-success'
        document.getElementById('title').className = 'modal-header text-success'
        ano.value = ''
        mes.value = '' 
        dia.value = '' 
        tipo.value = '' 
        valor.value = ''
        descricao.value = ''
    }
    else{
    //dialog de erro  
      $('#registrarDespesa').modal('show')

      document.getElementById('title').innerHTML = "Erro ao enviar formulario"
      document.getElementById('frase').innerHTML = 'Todos os campos são abrigatorios, tenha certeza de ter preenchido todos.<br>😰😰😰'
      document.getElementById('buttam').innerHTML = 'Voltar e corrigir'  
      document.getElementById('buttam').className = 'btn btn-danger'  
      document.getElementById('title').className = 'modal-header text-danger'
      
    }
}

function carregaListaDespesa(){

    let despesas = Array()

    despesas = bd.recuperarTodosRegistros()

    let listaDespesas = document.querySelector('tbody#listaDespesas')

    despesas.forEach(function(d) {
        
        console.log(despesas)

        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        
        switch(d.tipo){

            case '1': d.tipo = 'Alimentação'
                break

            case '2': d.tipo = 'Educação'
                break    

            case '3': d.tipo = 'Lazer'
                break

            case '4': d.tipo = 'Saúde'
                break

            case '5': d.tipo = 'Transporte'
                break
        }

        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    });

    
}

function pesquisarDespesa(){

    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let valor = document.getElementById('valor').value
    let descricao = document.getElementById('descricao').value

    let despesa = new Despesa(ano, mes, dia, tipo, valor, descricao)

    console.log(despesa)

}




