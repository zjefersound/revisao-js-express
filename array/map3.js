Array.prototype.map2 = function( callback = () => {} ){
    const new_array = []
    for(let i = 0; i <= this.length-1; i++){
        let valor = callback(this[i],i,this)
        new_array.push(valor)
    }
    return new_array
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
const converte_json = json => JSON.parse(json)
const get_preco = produto => produto.preco

const precos = carrinho.map(converte_json).map(get_preco)
const precos2 = carrinho.map2(converte_json).map2(get_preco)
console.log(precos)
console.log(precos2)