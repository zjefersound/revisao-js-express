/**
 * Simulando um forEach
 */
const generos_musicais = ['Rap','Reggae','Pop','House']

Object.defineProperty(generos_musicais, 'forEach2',{
    value: function( callback_function = () => {} ){
        for(let indice = 0; indice <= this.length - 1; indice ++ ){
            const name = this[indice]
            const index = indice
            const vetor = this
            callback_function(name,index,vetor)
        }
    },
    enumerable: false
})

generos_musicais.forEach2(function(name,index,array){
    console.log(`${index+1}) ${name}`)

})
generos_musicais.forEach(function(name,index,array){
    console.log(`${index+1}) ${name}`)

})