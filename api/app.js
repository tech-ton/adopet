const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
})
const PORT = 3031;
app.listen(PORT, () =>{
    console.log(`server funcionando na porta ${PORT}`);
});