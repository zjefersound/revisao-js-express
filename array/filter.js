/**
 * Método Filter:
 * mesmos 3 parametros q os outros + 1
 * thisArg (opcional)
 * retorna apenas o q atende a condição (true/false)
 */
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
const is_caro = produto => produto.preco >= 500
const is_fragil = produto => produto.fragil 

console.log(produtos.filter(function(produto){
    return true
}))

console.log(produtos.filter(is_caro).filter(is_fragil))