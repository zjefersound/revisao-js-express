//Olá, tudo bem? Aprenda JS!!!

const pessoa = {
    nome: "Ana",
    idade: 17,
    cor_da_pele: "moreno"
}

/*  Pra pegar apenas alguns atributos pode se usar:
    1 -  objeto.atributo
    2 -  com operador de desestruturação
*/

//jeito 1
console.log(pessoa.nome)

//jeito 2
const {nome, idade} = pessoa
console.log(nome,idade)

/*  Para chamar a variavel com outro nome
    usa-se:
    const {atributo: novo_nome} = objeto
 */
//Exemplo
const {nome: n, idade:i} = pessoa
console.log(n,i)

/*
    Para deixar um valor predefinido caso o valor não esteja
    definido no onjeto usa-se: 
    const {atributo = valor } = objeto
 */
//Exemplo

const { altura = 1.67} = pessoa

console.log(nome, altura)