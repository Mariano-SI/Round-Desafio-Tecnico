//functions
let byCity = require("./myFunctions/requestByCityName");
let byLatAndLong = require("./myFunctions/requestByLatAndLong");

//server
const express = require("express");
const app = express();

//Search by city name
app.get("/cityname", async function (req, res) {
  let name = req.query["name"].toLowerCase();
  //URL example: http://localhost:3000/cityname?name=(city name)
  try {
    let resposta = await byCity(name);
    res.send(resposta);
  } catch (error) {
    res.send({error: 'Cidade não encontrada, verifique sua busca'});
  }
});

//Search by lat and long
app.get("/geolocation", async function (req, res) {
  //URL example: http://localhost:3000/geolocation?lat=18&long=43
  let lat = req.query["lat"];
  let long = req.query["long"];
  try {
    let resposta = await byLatAndLong(lat, long);
    res.send(resposta);
  } catch (error) {
    res.send({error: 'Cidade não encontrada, verifique sua busca'});
  }
});

module.exports = app;
