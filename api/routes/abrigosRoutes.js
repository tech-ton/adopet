const { Router } = require('express');
const controller = require('../controllers/AbrigosController');

const route = Router();

route.get('/abrigos',controller.PegaTodosAbrigos);
route.post('/abrigos',controller.CriaUmAbrigo);
route.get('/abrigos/:id',controller.PegaUmAbrigo);
route.put('/abrigos/:id',controller.AtualizaUmAbrigo);
route.delete('/abrigos/:id',controller.DeletaUmAbrigo);

module.exports = route;