const axios = require('axios');


 let getByCityName = async function (city){
    let apiKey = "001f46a7087e786053602d3dbe579c9b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const response = await axios.get(url);
    let data = JSON.stringify(response.data);
    //console.log(data);
    return data;
    //console.log(data);
    //let emJSON = JSON.stringify(data);
    //console.log(emJSON);
} 


getByCityName('gouveia')
module.exports = getByCityName;


