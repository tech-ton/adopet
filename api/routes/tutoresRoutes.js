const { Router } = require('express');
const controller = require('../controllers/TutoresController');

const route = Router();

route.get('/tutores',controller.PegaTodosTutores);
route.post('/tutores',controller.CriaUmTutor);
route.get('/tutores/:id',controller.PegaUmTutor);
route.put('/tutores/:id',controller.AtualizaUmTutor);
route.delete('/tutores/:id',controller.DeletaUmTutor);

module.exports = route;