/**
 * Simulando um Array usando um objeto
 */
const quaseArray = {
    0: 'Jeferson',
    1: 'Wilson',
    2: 'MC POZE'
}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString',{
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])
console.log(quaseArray.toString())
