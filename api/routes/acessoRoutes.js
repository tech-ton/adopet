const { Router } = require('express');
const acesso = require('../middlewares/acesso');

const route = Router();

route.post('/login',acesso.login);
route.post('/logout',acesso.logout);

module.exports = route;