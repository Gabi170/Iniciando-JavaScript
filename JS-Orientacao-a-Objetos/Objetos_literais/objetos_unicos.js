let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status(){
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)

let a = assinatura

console.log(a.descricao)

a.descricao = 'Internet + Tv + telefone'

console.log(assinatura.descricao)
console.log(a.descricao)