function calcular(){
    var num1 = document.querySelector('input#num1')
    var num2 = document.querySelector('input#num2')
    var operacao = document.querySelector('input#operacao')
    var res = document.querySelector('div#res')

    num1 = Number(num1.value)
    num2 = Number(num2.value)

    if(operacao.value == 'soma' || operacao.value == 'Soma'){
        
        operacao = num1 + num2
    }
    else if (operacao.value == 'subtração' || operacao.value == 'Subtração'){

        operacao = num1 - num2
    }
    else{
        operacao = 'Operação invalida'
    }



    res.innerHTML = `“O resultado é: ${operacao}`
}