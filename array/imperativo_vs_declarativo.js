/**
 * Imperativo Vs Declarativo
 */
const alunos = [
    {nome:"Samantha",nota: 9},
    {nome:"Genildo",nota: 8},
    {nome:"Cleverinonson",nota: 7}    
]

//imperativo
let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota / alunos.length
}
console.log(total)

//declarativo
const get_nota = a => a.nota 
const soma = (acum,atual) => acum + atual

const total2 = alunos.map(get_nota).reduce(soma)
console.log(total2/alunos.length)