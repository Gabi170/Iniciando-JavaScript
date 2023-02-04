Object.prototype.attr50 = 'r' //cuidado obj sera utilizado em tds os objs a seguir

let animal = {attr1: 'a'}
let vertebrado = {__proto__:animal, attr2: 'v'}
let aves = {__proto__:vertebrado, attr3:'i', attr2:'s'}

console.log(aves.attr2, aves.attr1, aves.attr3, aves.attr50)