/**
 * Exemplo de como gaurdar o this em uma variável
 * 
 * Exemplo de como travar o this usando bind
 */
function Pessoa() {
    this.idade = 0

    //Não importa quem chama e função, o this é o msm
    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,2000)
}
new Pessoa
