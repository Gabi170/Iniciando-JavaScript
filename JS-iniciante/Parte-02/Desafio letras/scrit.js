function acionaCampo(){
    document.getElementById('caixa').style.background = 'yellow'
}

function validaCampo() {
    var valorCampo = document.getElementById('campo').value
    if(valorCampo.length < 3) {
    document.getElementById('campo').style.background = "red"
    } else {
    document.getElementById('campo').style.background = "green"
    }
    }
   