const { Router } = require('express');
const controller = require('../controllers/AdocoesController');

const route = Router();

route.get('/adocoes',controller.PegaTodasAdocoes);
route.post('/adocoes',controller.CriaUmaAdocao);
route.get('/adocoes/:id',controller.PegaUmaAdocao);
route.put('/adocoes/:id',controller.AtualizaUmaAdocao);
route.delete('/adocoes/:id',controller.DeletaUmaAdocao);

module.exports = route;