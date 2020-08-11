const axios = require('axios');

const getClima =  async (lat, long) =>{


const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=29a54156101a3346471b563ecbb9c9f1&units=metric`);

return resp.data.main.temp;


}

module.exports = {
    getClima:getClima
}