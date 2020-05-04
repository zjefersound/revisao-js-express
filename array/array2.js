const janela_da_rua = ['Nina','Rodrigo','Maria Paula', 'Larissa', 'Alissa']

//remove o ultimo item
janela_da_rua.pop()//Alissa tomou choque kk
console.log(janela_da_rua)

//inclui item no final
janela_da_rua.push('Frainer')
console.log(janela_da_rua)

//remove o primeiro item
janela_da_rua.shift()
console.log(janela_da_rua)

//inclui um item no inicio
janela_da_rua.unshift('Lucas')
console.log(janela_da_rua)

//Método Splice

//add
janela_da_rua.splice(2,0,'Alissa','Nina')
console.log(janela_da_rua)

//remove
janela_da_rua.splice(0,1)
console.log(janela_da_rua)

//add e remove
janela_da_rua.splice(2,1,'João careca')
console.log(janela_da_rua)

/**
 * Método slice(a)
 * cria um novo vetor a partir do indice do 
 * primeiro parâmetro até o valor do segundo
 * caso não tenha o segundo é até o ultimo item
 */
//Só 1 param 
const jovens1 = janela_da_rua.slice(1)
console.log(jovens1)

//Com 2 param
const jovens2 = janela_da_rua.slice(0,5)//vai até o 5 mas n inclui o 5
console.log(jovens2)
console.log(janela_da_rua.length)