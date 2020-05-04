function saudacao(nome){  
    //aqui vai retornar uma função middleware
    return (req,res,next) => {
        console.log(`Seja bem vindo, ${nome}`)
        next()
    }
}
module.exports = saudacao