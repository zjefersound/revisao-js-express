/**
 * Comando forEach:
 */
const generos_musicais = ['Rap','Reggae','Pop','House']

/** Para cada item do array, vai executar uma função 
 *  O primeiro parâmetro é o nome e o segundo o indice 
 */
generos_musicais.forEach(function(name,index){
    console.log(`${index+1}) ${name}`)
})

/** É possivel passar apenas 1 parâmetro na função */

generos_musicais.forEach(name => console.log(`Genero: ${name}`))

/** Também é possível passar uma função separada
 */
const exibir_generos = name => console.log(name)
generos_musicais.forEach(exibir_generos)

/** Existe um 3 parâmetro q é o proprio array
 * veja:
 */
const exibir_tudo = (name,index,array) => { 
    console.log(`${index}) ${name}`)
    console.log(array) 
}
generos_musicais.forEach(exibir_tudo)