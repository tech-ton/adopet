require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes')

routes(app);

app.listen(process.env.PORT, () =>{
    console.log(`server funcionando na porta ${process.env.PORT}`);
});

module.exports = app;