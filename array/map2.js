const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

/** DESAFIO:    
 *  Fazer retonrar um array somente com os preços
 *  -usando os métodos map
 */
console.log(carrinho)

const converte_json = json => JSON.parse(json)
const get_preco = produto => produto.preco

const precos = carrinho.map(converte_json).map(get_preco)

console.log(precos)