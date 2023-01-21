var numeros = []
let num = document.querySelector('input#fnum')
let sel = document.querySelector('select#caixa')
let res = document.querySelector('div#res')

function funciona () {
    let numV = Number(num.value)
    if (numeros.indexOf(numV) == -1 && numV > 0 && numV <= 100) {
        numeros.push(numV)
        let posi = numeros.indexOf(numV)
        let item = document.createElement('option')
        item.text = `Valor ${numeros[posi]} adicionado.`
        sel.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.focus()
    num.value = ''
    res.innerHTML = ''
}

function finalizar () {
    let maior = menor = numeros[0]
    let soma = media = 0
    let elementos = numeros.length     // Número de elementos

    if (elementos == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        for (let x in numeros) {     // Maior número digitado
        if (numeros[x] > maior) {
            maior = numeros[x]
        }
        if (numeros[x] < menor) {     // Menor número digitado
            menor = numeros[x]
        }
        soma += numeros[x]     // Soma entre os valores digitados
        }
    }

    media = soma / elementos      // Média entre os valores digitados

    res.innerHTML = `<p>Ao todo, temos ${elementos} números cadastrados.</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media}.</p>`
}