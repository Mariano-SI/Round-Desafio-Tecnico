let axios = require("axios");

 async function getByCityName(city){
    let apiKey = "001f46a7087e786053602d3dbe579c9b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const response = await axios.get(url);
    let data = response.data;
    console.log(data);
    //let emJSON = JSON.stringify(data);
    //console.log(emJSON);
    return data;
}

async function getByLatAndLong(lat, long){
    let apiKey = "001f46a7087e786053602d3dbe579c9b";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    let data = response.data;
    console.log(data);
    return data;
}

//getByCityName("diamantina");
/* getByLatAndLong("45", "66") */

 
