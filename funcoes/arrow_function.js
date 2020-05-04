/**
 * Formas de definir uma função:
 */

// função normal
let dobro = function(a){
    return 2 * a
}
// arrow function comum
dobro = (a) => {
    return 2 * a
}
/*  Arrow function reduzida
    Se o corpo da função for removido
    fica o return
 */
dobro = (a) => 2 * a

console.log(dobro(Math.PI))

/**
 * Exemplo de arrow function sem parâmetros
 */
//tipo 1
let ola = function(){
    return 'Olá'
}
//tipo 2
ola = () => 'Olá'
//tipo 3
ola = _ => 'Olá' //Possui um parâmetro

console.log(ola())
