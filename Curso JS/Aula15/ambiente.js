let num = [5,9,6,7,4]
num.push(8)
num.sort()
console.log(num)
console.log(`O total de numeros é ${num.length}`)
console.log(`O promeiro numero é ${num[0]}`)
console.log(`O ultimo numero é ${num[5]}`)
for(let push = 0; push < num.length; push++){
    console.log(`Numero ${push} = ${num[push]}`)
}


for(let pos in num){
    console.log(`Numero ${pos} = ${num[pos]}`)
}