/*  Observe que para contextos diferentes 
    o valor do this varia
 */

//Contexto do objeto pessoa
const pessoa = {
    saudacao: "MARCELO CARALHO ENFIA O PAXTELÃO NO CU",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
//Agora perceba: falar está recebendo apenas uma função, sem contexto
const falar = pessoa.falar
falar()
//No entanto se adicionar o comando bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()