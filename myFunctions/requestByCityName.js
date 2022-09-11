const axios = require('axios');
let rules = require("./rulesAndReturn");

 let requestByCityName = async function (city){
    
    
    let apiKey = "001f46a7087e786053602d3dbe579c9b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const response = await axios.get(url);
    let data = response.data;
    
    let myApiResponse = rules(data);
    
    return myApiResponse;

} 

module.exports = requestByCityName;


