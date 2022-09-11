let rulesAndReturn = function (obj) {
  let alerta = "";
  const temp = obj.main.temp;
  const humidity = obj.main.humidity;

  //Regras de Negócio
  if (temp >= 10 && temp <= 30 && humidity > 30) {
    alerta = "Nenhum risco eminente";
  } else if (humidity < 30 && temp > 30) {
    alerta = "Umidade baixa com risco de ensolação";
  } else if (temp < 10) {
    alerta = "Frio intenso";
  } else if (humidity <= 30 && temp < 30) {
    alerta = "Umidade baixa";
  } else if (temp > 30) {
    alerta = "Risco de ensolação";
  }

  let respostaFinal = {
    cidade: obj.name,
    temperatura: temp,
    umidade: humidity,
    status: alerta,
  };
  
  return respostaFinal;
};

module.exports = rulesAndReturn;
