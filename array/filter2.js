Array.prototype.filter2 = function(callback) {
    const new_array = []
    
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){
            new_array.push(this[i])
        }
    }
    return new_array
}
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
const is_caro = produto => produto.preco >= 500
const is_fragil = produto => produto.fragil 

console.log(produtos.filter(is_caro).filter(is_fragil))
console.log(produtos.filter2(is_caro).filter2(is_fragil))
