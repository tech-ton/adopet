require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
})
app.listen(process.env.PORT, () =>{
    console.log(`server funcionando na porta ${process.env.PORT}`);
});