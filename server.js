//functions
let byCity = require("./myFunctions/requestByCityName");
let byLatAndLong = require("./myFunctions/requestByLatAndLong");

//for documentation
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

//server
const express = require("express");
const app = express();


//routes
app.get('/', (req, res)=>{
  res.send("Hello, World")
})



//Search by city name. URL example: http://localhost:3000/cityname?name=(city name)
app.get("/cityname", async function (req, res) {
  let name = req.query["name"].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); 
  //OpenWeather API only accepts lowercase letters and without accents.
  try {
    let resposta = await byCity(name);
    res.send(resposta);
  } catch (error) {
    
    res.send({error: 'Cidade não encontrada, verifique sua busca'});
  }
});

//Search by lat and long. URL example: http://localhost:3000/geolocation?lat=-18&long=-43
app.get("/geolocation", async function (req, res) {
  let lat = req.query["lat"];
  let long = req.query["long"];
  try {
    let resposta = await byLatAndLong(lat, long);
    res.send(resposta);
  } catch (error) {
    res.send({error: 'Cidade não encontrada, verifique sua busca'});
  }
});
//online documentation

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

module.exports = app;
