
//var listaConvidados = ['Flavio', 'Beto', 'Serguei', 'Petrovia', 'Lara']

var listaConvidados = Array()

listaConvidados['a'] = 'Beto'
listaConvidados[false] = 'Flavio'
listaConvidados[7] = 'Serguei'
listaConvidados[-220] = 'Petrovia'
listaConvidados['virgula'] = 'Lara'

//console.log(listaConvidados)

for(var x in listaConvidados){
    console.log(`Indice ${x} valor ${listaConvidados[x]}`)
}