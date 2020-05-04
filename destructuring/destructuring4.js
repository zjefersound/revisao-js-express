/*  Exemplo com Vetor/Array
    Função para retornar um valor
    aleatório validado
 */

 function rand( [min=0, max=1000] ){
    if(min>max) [ min,max ] = [ max, min ]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
 }
 // !!!Lembrar de pôr os parênteses nas funções


 console.log(rand([,4]))