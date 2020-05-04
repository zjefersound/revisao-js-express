/**
 * Criação de classes em Javascript
 * 
 * A classe é basicamente uma função
 */

class Lancamento {
    //método construtor
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // Esses 3 pontos permitem parâmetros variáveis
    addLancamento(...lancamentos) {
        /** Perceba que o forEach usa uma arror function */
        lancamentos.forEach(l => this.lancamentos.push(l))
        //Revisão: comando push serve pra adicionar um item no vetor
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário',45000)
const contaDeLuz = new Lancamento('Luz',-220)
const contaInternet = new Lancamento('Internet',-150)


const contas = new CicloFinanceiro(4,2020)
contas.addLancamento(salario,contaDeLuz,contaInternet)
console.log(contas.sumario())


