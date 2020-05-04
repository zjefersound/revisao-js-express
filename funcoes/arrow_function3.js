/**
 * Testando this:
 *  - varios contextos
 *  - função normal vs função arrow
 */

//Função normal
console.log("Função normal:")

let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

//Arrow function
console.log("Arrow function:")
let comparaComThisArrow = (param) => {
    console.log(this === param)
}

/**
 * Perceba que a função não foi definida no global,
 * mas sim no documento atual
 */
comparaComThisArrow(global)

/**
 * Para referenciar o documento atual, usa-se
 * module.exports
 * (Sim igual na aula da Rocketseat quando vai retornar o Jsx)
 */
comparaComThisArrow(module.exports)

/**
 * Perceba q o bind não se aplica na arrow 
 * function e o this permanece o mesmo
 * 
 * ARROW: -Bind, você falhou com essa cidade!
 */
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

//Como previsto continua o module.exports
comparaComThisArrow(module.exports)