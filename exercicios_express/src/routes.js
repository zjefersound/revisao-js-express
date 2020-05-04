const express = require('express')
//usa o router do express
const routes = express.Router()
//importando função middleware
const saudacao = require('./controllers/saudacao_mid')

//Aqui vão as requisições
routes.use(saudacao('Jeff'))
/**
 * A ORDEM DAS FUNÇÕES IMPORTA
 */ 
//Exemplo função middleware
routes.use((req,res,next) => {
    console.log('Antes...')
    next()/** Sem esse next a proxima função não executa */
})

//Isso aqui é um query param
routes.get('/clientes/relatorio',(req,res) => {//essa func é mais especifica
    const completo = req.query.completo
    res.send(`O param completo é:${completo}`)
})

//Isso é um body request
routes.post('/corpo',(req,res) => {
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    }) 
    req.on('end', function(){
        res.send(corpo)
    })
    /** 
    req.on('end',function(){
        res.json(JSON.parse(corpo))
    })
    */
})

//Isso aqui é um ROUTE PARAM
routes.get('/clientes/:id',(req,res) => {//essa é mais generica
    const id = req.params.id
    res.send(id)
})

routes.get('/opa',(req,res,next) => {
    res.json({
        data: [
            {
                name: 'iPad',
                price: 1989.99,
                discount: 0.3
            },{
                name: 'iPad',
                price: 1989.99,
                discount: 0.3
            },{
                name: 'iPad',
                price: 1989.99,
                discount: 0.3
            }
        ],
        count: 15, //total no banco
        skip: 0, //quantos já passaram
        limit: 3, //limite por página
        status: 200 //resposta q deu certo
    })
    next()
})
routes.use((req,res) => {
    console.log('Depois...')
})


module.exports = routes