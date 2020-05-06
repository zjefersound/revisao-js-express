const express = require('express')
const body_parser = require('body-parser')
const api_usuario = require('./controllers/UserController')
const api_produto = require('./controllers/ProductController')
//usa o router do express
const routes = express.Router()
//importando função middleware
const saudacao = require('./controllers/saudacao_mid')

api_produto(routes,'com param')

/** Funções middleware para interpretar varios tipos de dados */
routes.use(body_parser.text())
routes.use(body_parser.json())
routes.use(body_parser.urlencoded({ extended: true }))


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

routes.post('/usuario',api_usuario.salvar)
routes.get('/usuario',api_usuario.obter)

//Isso aqui é um query param
routes.get('/clientes/relatorio',(req,res) => {//essa func é mais especifica
    const completo = req.query.completo
    res.send(`O param completo é:${completo}`)
})

//Isso é um body request sem body parser
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
//Isso é um body request com body parser
routes.post('/corpo2',(req,res) => {
    res.send(req.body)
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