let axios = require("axios");
let rules = require("./rulesAndReturn");

let requestByLatAndLong = async function (lat, long){
    let apiKey = "001f46a7087e786053602d3dbe579c9b";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    let data = response.data;
    
    let myApiResponse = rules(data);
    return myApiResponse;
}
//getByLatAndLong(-18.2381,-43.611) teste com diamatina
module.exports = requestByLatAndLong;