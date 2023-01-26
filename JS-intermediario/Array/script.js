var objetos = Array('Cadeira','Impressora','Garfo') 
var res = document.getElementById('res')

function adicionar(){

   var objeto = document.getElementById('objeto').value

   if(objeto != '') {
    //verifica se o valor já não foi inserido anteriormente
    //se sim, informa que valor já existe, se não insere novo valor
    if( objetos.indexOf(objeto) !== -1) {
    alert('Objeto já foi adicionado')
    }
}
    else{
        objetos.push(objeto)
        console.log(objetos)
        document.getElementById('objeto') = ''
    }
}

function ordernar(){

    objetos.short(adicionar())
    console.log(objeto.short(adicionar()))

    res.innerHTML = `${objeto.short(adicionar())}`
}