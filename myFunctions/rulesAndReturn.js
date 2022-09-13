let rulesAndReturn = function (obj) {
  let alert = "";
  const temp = obj.main.temp;
  const humidity = obj.main.humidity;

  //Regras de Negócio
  if (temp >= 10 && temp <= 30 && humidity > 30) {
    alert = "Nenhum risco eminente";
  } else if (humidity < 30 && temp > 30) {
    alert = "Umidade baixa com risco de ensolação";
  } else if (temp < 10) {
    alert = "Frio intenso";
  } else if (humidity <= 30 && temp < 30) {
    alert = "Umidade baixa";
  } else if (temp > 30) {
    alert = "Risco de ensolação";
  }

  let weatherInfo = {
    cidade: obj.name,
    temperatura: temp,
    umidade: humidity,
    status: alert,
  };
  
  return weatherInfo;
};

module.exports = rulesAndReturn;
