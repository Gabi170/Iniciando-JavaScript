//Conta Bancario

class ContaBancaria{
    //agencia
    //numero
    //saldo
    //limite
    constructor(){
        this.agencia = 1500
        this.numero = 521562
        this.saldo = 50000
        this.limite = 18000
    }

    depositar(valorDeposito){

        this.saldo += valorDeposito
    }
    sacar(valorSaque){

        this.saldo -= valorSaque
    }
    consultarSaldo(){

        return this.saldo
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo())
x.depositar(456)
console.log(x.consultarSaldo())
x.sacar(44560)
console.log(x.consultarSaldo())

console.log(y.consultarSaldo())