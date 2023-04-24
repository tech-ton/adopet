const { Router } = require('express');
const controller = require('../controllers/AdocoesController');
const acesso = require('../middlewares/acesso')
const route = Router();

route.get('/adocoes',acesso.verificaDonoAbrigo,controller.PegaTodasAdocoes);
route.post('/adocoes',controller.CriaUmaAdocao);
route.get('/adocoes/:id',controller.PegaUmaAdocao);
route.put('/adocoes/:id',controller.AtualizaUmaAdocao);
route.delete('/adocoes/:id',acesso.verificaDonoAbrigo,controller.DeletaUmaAdocao);

module.exports = route;