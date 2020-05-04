/*  Exemplo com OBJETO
    Função para retornar um número aleatório
    Irá usar um objeto para definir parãmetros
 */
function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max-min) +min;
    return Math.floor(valor);
}
console.log( rand({min:3,max:-1} ) );