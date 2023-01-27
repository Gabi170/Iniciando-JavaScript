/***** Laço simples *****/

for(var soma = 1; soma <= 10; soma++){

    console.log(`1 x ${soma} = ${1 * soma}`)
    console.log(`----------------------------------------------`)
}

/***** Laço escadeado */

for(var x = 1; x <=10; x++){

    for(var soma = 1; soma <= 10; soma++){

        console.log(`${x} x ${soma} = ${x * soma}`)
    }

    console.log(`----------------------------------------------`)
}