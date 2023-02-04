//Arrey
/*
let arr = [1, 52, 987, 945]

function teste(a, b, c){
    console.log(a, b, c)
}

teste(arr)
*/

//objeto

let obj = {
    a: 41,
    b: 85,
    c: 52,
    d: 24,
}

function teste({a: x, b, d, e = 100}){
    console.log(x, b, d, e)
}

teste(obj)