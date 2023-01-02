var idade = 12
console.log(`Sua idade é de ${idade}`)
if (idade < 16){
    console.log('Você ainda não pode votar')
}
else if (idade < 18 || idade > 67){
    console.log('Seu voto é opcional')
}
else {
    console.log('Seu voto é obrigatorio')
}