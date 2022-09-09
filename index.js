let byCity = require("./myFunctions/getByCityName");
let ByLatAndLong = require("./myFunctions/getByLatAndLong");

const express = require("express");

const app = express();



app.get("/:cidade", async function (req, res) {
  
    let resposta = await byCity(req.params.cidade);
    res.send(resposta);
 
});


//corrigir rota, colocar parametros juntos
app.get("/:lat/:long", async function (req, res) {
  let resposta = await ByLatAndLong(req.params.lat, req.params.long);
  res.send(resposta);
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
