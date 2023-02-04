let tituloG = 'Como usar o operador Spread e Rest'

console.log(tituloG)
console.log(...tituloG)
console.log([...tituloG])

console.log('----------------------------')

let ListaCurso1 = ['Noções de Node.js', 'Aplicação em Angular4', 'TypeScripe Completo']
let ListaCurso2 = ['Multiplataforma Aphone/Androde', 'ES6', 'Introdução a GNU/Linux']
let ListaCursoCompleto = ['Web Completo', 'Introdução a Pyton', ...ListaCurso1, ...ListaCurso2]

console.log(ListaCursoCompleto)

console.log('----------------------------')

let pessoa = {nome: 'Merlin', idade:100}
let clone = {endereço:'Inglaterra de 1200', ...pessoa}

console.log(clone)