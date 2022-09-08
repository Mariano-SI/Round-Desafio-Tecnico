let axios = require("axios");
 
let apiKey = "001f46a7087e786053602d3dbe579c9b";
let city = '';
let lat = "13";
let long = "46";
let url;

//Tratando URL
if (city) {
     url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
}else if(lat && long){
     url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
}

async function teste(){
    const response = await axios.get(url);
    console.log(response.data);
}

teste();