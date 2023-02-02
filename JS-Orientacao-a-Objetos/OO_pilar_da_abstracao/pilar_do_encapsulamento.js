//Encapsulamento

class Tv{
    constructor(){
        this.relacaoCanais = Array(2, 6, 5, 8, 92)
        this.canalAtivo = 5
        this.volume = 10
    }

    //gettes ans settes

    get canalAtivo(){
        return this.canalAtivo
    }

    set canalAtivo(canal){

        let x = this.relacaoCanais.indexOf(canal)
        console.log(x)
        this.canalAtivo = canal
    }
}

let tv = new Tv()
tv.canalAtivo(1)
console.log(tv.canalAtivo)