function carregar (){
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora <=12){
        //BOM DIA !!
        img.src = 'prantasCirculo.png'
        document.body.style.background =  '#7391a1'
    }
    else if(hora > 12 && hora <= 19){
    // BOA TERDE !!
         img.src = 'nuvensCirculo.png'
         document.body.style.background = '#e9895b'
    }
    else{
        // BOA NOITE !!
        img.src = 'ceuCirculo.png'
        document.body.style.background =  '#778394'
    }
}