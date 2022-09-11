//functions
let byCity = require("./myFunctions/getByCityName");
let ByLatAndLong = require("./myFunctions/getByLatAndLong");

//server
const express = require("express");

const app = express();

//Search by city name 
app.get("/", async function (req, res) {
  let cidade = req.query["cidade"].toLowerCase();
  //OpenWeather api only accepts lowercase letters

  //URL example: http://localhost:3000/?cidade=(city name)
  try {
    let resposta = await byCity(cidade);
    res.send(resposta);
  } catch (error) {
    res.send("<h1>Cidade não encontrada, verifique sua busca</h1>");
  }
});

//Search by lat and long 
app.get("/geolocation", async function (req, res) {
  //URL example: http://localhost:3000/geolocation?lat=18&long=43
  let lat = req.query["lat"];
  let long = req.query["long"];
  try {
    let resposta = await ByLatAndLong(lat, long);
    res.send(resposta);
  } catch (error) {
    res.send("<h1>Cidade não encontrada, verifique sua busca</h1>");
  }
});

module.exports = app;