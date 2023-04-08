const tutores = require('./tutoresRoutes');
const abrigos = require('./abrigosRoutes');
const bodyParser = require('body-parser');
module.exports = app =>{
    app.use(bodyParser.json());
    app.use([tutores, abrigos]);
}