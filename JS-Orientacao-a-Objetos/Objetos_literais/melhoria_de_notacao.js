let nome = 'Gaby'
let idade = 20
let sexo = 'feminino'
let profissao = 'Programadora'

let objeto = {

    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome} tem ${this.idade} anos e é ${profissao}`)
    }

}

console.log(objeto)
objeto.exibirResumo()

let objeto2 = {

   nome,
   idade,
   sexo,
   profissao,
    exibirResumo(){
        console.log(`${this.nome} tem ${this.idade} anos e é ${profissao}`)
    }

}

console.log(objeto2)
objeto2.exibirResumo()