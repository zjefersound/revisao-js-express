/**
 * Exemplo de herança no Javascript
 * 
 */
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
// Pai herda os atributos e eventos do Avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        //super é uma forma de chamar o construtor da classe pai
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva','Marceneiro')
    }
}

const filho = new Filho
console.log(filho)
