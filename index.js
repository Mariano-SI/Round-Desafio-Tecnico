//routes
const app = require('./server');



const PORT = 3000;
const HOST = '0.0.0.0'

//server
app.listen(PORT, HOST, function () {
  console.log("Servidor rodando na porta 3000");
});
