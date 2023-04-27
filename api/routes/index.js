const tutores = require('./tutoresRoutes');
const abrigos = require('./abrigosRoutes');
const pets = require('./petsRoutes');
const adocoes = require('./adocoesRoutes');
const erros = require('../middlewares/erro');
const acesso = require('./acessoRoutes');
const bodyParser = require('body-parser');
module.exports = app =>{
    app.use(bodyParser.json());
    app.use([acesso, tutores, abrigos, pets, adocoes]);
    app.use(erros.erro404,erros.capturaErro);
}