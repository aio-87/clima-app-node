const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=130891e40a1e0d5537a07233c22ca858&units=metric`);
    return resp.data.main.temp;

}


module.exports = {
    getClima
}