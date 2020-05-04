//Operador destructuring

/* Para pegar um dado de um vetor usa-se:
    const [variavel] = [valor] 
    para mais valores
    const [variavel1,variavel2,] = [1,2]
*/
const [a] = [10]
console.log(a);

/*  Para definir um valor predefinido usa-se:
    const [variavel = valor predef] = []

*/
const [ b = 12 ] = []
console.log(b)

/*  Para pegar um valor de um array multidimensional
    usa-se:
    const [[variavel]]= [[20,2],1,2,3]
    (deve retornar 20)
*/
const [[c],d]= [[20,2],1,2,3]
console.log(c,d)