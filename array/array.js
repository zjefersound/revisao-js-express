/**
 * Visualize a diferença entre a função Array
 * new Array e um Array literal
 * 
 * Um vetor no JS é de fato um objeto
 */
console.log(typeof Array, typeof new Array, typeof [])

/** Em array é recomendado trabalhar com dados homogeneos,
 *  ou seja, do mesmo tipo. Porque como são listados por
 *  índices numericos, fica dificil saber como resgatar
 *  determinados dados 
 */

//instanciando com função array (não recomendado)
let aprovados = new Array('Bia','Jão','JOOJ')
console.log(aprovados)

//com notação literal (recomendado)
aprovados = ['Bia','Jão','Jooj']
console.log(aprovados)
console.log(aprovados[0])

//dá undefined
console.log(aprovados[3])

/** Para incluir mais valores num vetor usa-se:
 * vetor.push(valor)
 * ou
 * vetor[indice] = valor 
 */

//melhor pra substituir um q já existe
aprovados[3] = 'Marcelo'
//melhor pra incluir um novo
aprovados.push('Vit')
aprovados.push('Alek')

console.log(aprovados)
console.log(aprovados.length) 

aprovados[9] = 'Matheus'

console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

/**
 * Comando delete:
 * dá pra excluir tanto um item do vetor, 
 * como atributos de uma classe 
 */

delete aprovados[0]

console.log(aprovados)

/**
 * Função splice() serve para:
 *  -adicionar elementos
 *  -remover elementos de um array
 *  -os dois ao mesmo tempo
 */

aprovados = ['Nina','Tufão','Jorginho','Leleco']
/** splice(indice inicial, n de itens para deletar, novos valores ) */
aprovados.splice(0,0,'Martelo')
console.log(aprovados)