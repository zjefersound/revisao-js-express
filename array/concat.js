/**
 * Método concat:
 * serve pra concatenar arrays e valores
 * Exemplo:
 */
const filhas = ['Roberta','Genoveva']
const filhos = ['Fagne','Valdomiro']
const cachorros = ['Spyke']

const total_filhos = filhas.concat(filhos,cachorros,'Rico')
console.log(total_filhos)

// pode ser assim também. Fica mais legível:
const total_filhos2 = [].concat(filhas,filhos,cachorros,'Rico')
console.log(total_filhos2)