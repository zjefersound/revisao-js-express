//Função normal de soma
const soma = function (x,y) {
    return x + y
}

//Função pra imprimir um resuldado de uma operação
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}
//Chamada simples da função
imprimirResultado(1, 2)

//Chamada com outra operação usando uma função anon
imprimirResultado(1, 2, function (x,y) {
    return x - y
})

//Chamada com arrow function
imprimirResultado(6, 4, (x,y) => {
    return x * y
})

const pessoa = {
    falar: function(){
        console.log('Olá')
    }
}
pessoa.falar()