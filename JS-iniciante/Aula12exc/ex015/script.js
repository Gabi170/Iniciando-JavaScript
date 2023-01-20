function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
 
    if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var genero_masculino = document.getElementById('mas')
        var genero_feminino = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (genero_masculino.checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'criancaM.png')
            }
            else if(idade < 22){
                //JOVEM
                img.setAttribute('src', 'jovemM.png')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adultoM.png')
            }
            else{
                //IDOSO
                img.setAttribute('src', 'velhoM.png')
            }
        } else if (genero_feminino.checked) {
            var genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'criancaF.png')
            }
            else if (idade < 22){
                //JOVEM
                img.setAttribute('src', 'jovemF.png')
            }
            else if (idade < 50){
                //ADULTA
                img.setAttribute('src', 'adultoF.png')
            }
            else{
                //IDOSA
                img.setAttribute('src', 'velhoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
 }