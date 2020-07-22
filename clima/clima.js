const axios = require("axios");

const getClima = async (lat,lng) => {
  
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f8be7323c6a8b8061dd9bc76e89a0780&units=metric`)

  return resp.data.main.temp;

};

module.exports = {
  getClima,
};
