/**
 * Exemplo flatmap:
 */
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome:'Guilherme',
        nota: 8.5
    },{
        nome:'Larissa',
        nota: 8.7
    }]

}, {
    nome: 'Turma M2',
    alunos : [{
        nome:'Jiromel',
        nota: 9.5
    },{
        nome:'Helena',
        nota: 9.2
    },{
        nome:'Jurema',
        nota: 5.2
    }]

}]

const get_nota_aluno = aluno => aluno.nota
const get_nota_turma = turma => turma.alunos.map(get_nota_aluno)
//Minha solução:

const todas_notas = (acumulador,atual) => acumulador.concat(atual)

const notas = escola.map(get_nota_turma).reduce(todas_notas,[])
console.log(notas)

//Solução do curso:
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}
const notas2 = escola.flatMap(get_nota_turma)
console.log(notas2)