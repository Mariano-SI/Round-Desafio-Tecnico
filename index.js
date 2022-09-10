let byCity = require("./myFunctions/getByCityName");
let ByLatAndLong = require("./myFunctions/getByLatAndLong");

const express = require("express");

const app = express();

app.get("/", async function (req, res) {
  let cidade = req.query["cidade"];
  //URL example: http://localhost:3000/?cidade=(nome da cidade)
  try {
    let resposta = await byCity(cidade);
    res.send(resposta);
  } catch (error) {
    console.log(error);
  }
});

//corrigir rota, colocar parametros juntos
app.get("/geolocation", async function (req, res) {
  //URL example: http://localhost:3000/geolocation?lat=18&long=43
  let lat = req.query["lat"];
  let long = req.query["long"];
  try {
    let resposta = await ByLatAndLong(lat, long);
    res.send(resposta);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
