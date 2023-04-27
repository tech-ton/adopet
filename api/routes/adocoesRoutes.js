const { Router } = require('express');
const controller = require('../controllers/AdocoesController');
const acesso = require('../middlewares/acesso')
const route = Router();

route.get('/adocoes',acesso.verificaSessao,controller.PegaTodasAdocoes);
route.post('/adocoes',acesso.verificaSessao,controller.CriaUmaAdocao);
route.get('/adocoes/:id',acesso.verificaSessao,controller.PegaUmaAdocao);
route.put('/adocoes/:id',acesso.verificaSessao,controller.AtualizaUmaAdocao);
route.delete('/adocoes/:id',acesso.verificaSessao,controller.DeletaUmaAdocao);

module.exports = route;