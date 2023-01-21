
// window.alert('Preencha os dados abaixo')

function verificar(){
    var nome = document.querySelector('input#name')
    var altura = document.querySelector('input#altura')
    var peso = document.querySelector('input#peso')
    var res = document.querySelector('div#resultado')

     altura = parseFloat(Number((altura.value)))
     peso = parseFloat(Number((peso.value)))

    altura = altura / 100

    var M = +(peso / (altura * altura).toFixed(2))

    var classificacao = ''; 
 
    if(M < 16){ 
     classificacao = 'Baixo peso muito grave'
    }     
    else if(M >= 16 && imc <= 16.99){ 
     classificacao = 'Baixo peso grave'
     
    } else if(M >= 17 && imc <= 18.49){ 
     classificacao = 'Baixo peso'
     
    } else if(M >= 18.50 && imc <= 24.99){ 
     classificacao = 'Peso normal' 
     
    } else if(M >= 25 && imc <= 29.99){ 
     classificacao = 'Sobrepeso'
     
    } else if(M >= 30 && imc <= 34.99){ 
     classificacao = 'Obesidade grau I' 
     
    } else if(M >= 35 && imc <= 39.99){ 
     classificacao = 'Obesidade grau II' 
     
    } else { //se não estiver enquadrado em nenhum critério acima, imc só pode ser maior que 40 
     classificacao = 'Obesidade grau III' 
    } 

    res.innerHTML = `<p>Olá ${nome.value} possui </p>
                     <p>índice de massa corporal igual a ${M},</p> 
                     <p>sendo classificado como: ${classificacao} <p>`
}