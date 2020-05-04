/** Simulador Reduce */
Array.prototype.reduce2 = function(callback,inicial){
    const i_inicial = inicial? 0 : 1
    
    let acumulador = inicial || this[0]

    for(let i = i_inicial; i < this.length; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const alunos = [
    { nome: 'Alonso', nota: 7.3, bolsisita: false},
    { nome: 'Mabel', nota: 9.2, bolsisita: true},
    { nome: 'Joaquim', nota: 9.8, bolsisita: true},
    { nome: 'Fernanda', nota: 8.7, bolsisita: true}
]

const get_bolsista = elemento => elemento.bolsisita
const get_nota = elemento => elemento.nota

//Desafio 1: Todos são bolsistas?
const is_all_bolsista = (acumulador,atual) => acumulador && atual
console.log(alunos.map(get_bolsista).reduce2(is_all_bolsista))

//Desafio 2: Tem algum bolsista?
const is_some_bolsista = (acumulador,atual) => acumulador || atual 
console.log(alunos.map(get_bolsista).reduce2(is_some_bolsista))



//Retorna a soma das notas
console.log(alunos.map(get_nota).reduce2(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},10))

//Retorna os dados em um array
const resultado2 = alunos.map(get_nota).reduce2(function(acumulador,atual){
    console.log(acumulador,atual)
    acumulador.push(atual)
    return acumulador
},[])
console.log(resultado2)

