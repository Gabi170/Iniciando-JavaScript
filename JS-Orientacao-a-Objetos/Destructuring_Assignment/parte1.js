/* let frutas = ['Meça', 'Pera', 'Mexerica', 'Pessego']

let[a, b, ,c] = frutas

console.log(a,b,c)
*/

let frutas = ['Maça', 'Pera', 'Mexerica', 'Pessego']

let[ a, b = 'banana', , c, d = 'Abacaxi'] = frutas

console.log(a,b,c,d)

let coisas = [['Mirtilo', 'Amora', 'Cereja', 'Jabutucaba'], ['Pedro', 'Fabia']]

let [[, ,n2]] = coisas

console.log(n2)