/** Comando Map: 
 *  -Passa 3 parâmetros:
 *      -elemento atual
 *      -inidice
 *      -vetor inteiro 
 */
const nums = [1,2,3,4,5]
console.log(nums)

let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
//para dinheiro, estilo Badass
const paraDinheiro = e => e.toLocaleString('pt-BR',{ style: 'currency', currency:'BRL' })
//para dinheiro, estilo Palmole
const paraDinheiro2 = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}` 

//É possível fazer varias alterações no vetor com sequencia de maps
resultado = nums.map(triplo).map(soma10).map(paraDinheiro2)
console.log(resultado)