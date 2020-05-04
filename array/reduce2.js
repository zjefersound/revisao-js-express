/**Simulando um reduce
 * 
 */
const alunos = [
    { nome: 'Alonso', nota: 7.3, bolsisita: false},
    { nome: 'Mabel', nota: 9.5, bolsisita: true},
    { nome: 'Joaquim', nota: 9.8, bolsisita: true},
    { nome: 'Fernanda', nota: 8.7, bolsisita: true}
]

const get_bolsista = elemento => elemento.bolsisita
//Desafio 1: Todos são bolsistas?
const is_all_bolsista = (acumulador,atual) => acumulador && atual
//Desafio 2: Tem algum bolsista?
const is_some_bolsista = (acumulador,atual) => acumulador || atual 

console.log(alunos.map(get_bolsista).reduce(is_all_bolsista))
console.log(alunos.map(get_bolsista).reduce(is_some_bolsista))

