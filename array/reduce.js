/**
 * Método reduce:
 * possui 2 parâmetros:
 *  Callback:
 *  -Acumulador
 *  -Elemento inicial
 *  -Indice 
 *  -Array
 *  Valor inicial:
 *  -valor q começa 
 */
const alunos = [
    { nome: 'Alonso', nota: 7.3, bolsisita: false},
    { nome: 'Mabel', nota: 9.5, bolsisita: true},
    { nome: 'Joaquim', nota: 9.8, bolsisita: false},
    { nome: 'Fernanda', nota: 8.7, bolsisita: false}
]

const resultado = alunos.map(e => e.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0)
console.log(resultado)

const resultado2 = alunos.map(e => e.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    acumulador.push(atual)
    return acumulador
},[])
console.log(resultado2)
