/**
 * Arquivo: server.js
 * Descricao: 
 * Autor:
 * Data de criacao: 17/11/2021 11:00
 * 
 */
//configurar o setup da App:

//chamadas dos pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configuracao da variavel app para usar com bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//definindo a porta que sera usada na nossa app
var port = process.env.port || 8000;
var router = express.Router();

//criando uma instancia das rotas via express
router.get( '/', function(req, res){
    res.json({mensage: 'Beleza! Bem vinda a nossa loja BCF'})
});

//definindo um padrao das toas prefixadas: '/api'
app.use('/api', router);

//iniciando a aplicacao (servidor)
app.listen(port);
console.log("iniciando a app na porta " + port);