let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        marca: undefined,
        fabricante: 'pqw'
    }
}

//let {preco, detalhes} = produto

//let {preco: p, detalhes: d} = produto

//let {preco: p, detalhes: d , desconto} = produto

//let {preco: p = 100, detalhes: d, desconto = 5} = produto

let {detalhes: {fabricante: f, marca = 'Não informado'}} = produto

console.log(f, marca)