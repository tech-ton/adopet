const { Router } = require('express');
const controller = require('../controllers/PetsController');

const route = Router();

route.get('/pets',controller.PegaTodosPets);
route.get('/pets/adotados', controller.PegaTodosPetsAdotados); 
route.get('/pets/:id',controller.PegaUmPet);
route.post('/pets',controller.CriaUmPet);
route.put('/pets/:id',controller.AtualizaUmPet);
route.delete('/pets/:id',controller.DeletaUmPet);

module.exports = route;