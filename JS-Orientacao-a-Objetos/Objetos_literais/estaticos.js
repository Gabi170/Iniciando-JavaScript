class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let notebook = new Produto('Notebook', 1800)
notebook.verDescricao()

let produtoLiteral = {

    descricao: 'Geladeira',
    preco: 2000,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()