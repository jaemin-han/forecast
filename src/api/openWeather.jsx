// const axios = require('axios');
const fetch = require('node-fetch');
const API_KEY = process.env.WEATHER_API_KEY;

function search(req, res, next) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.cityName},us&units=imperial&cnt=16&APPID=${API_KEY}`)
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.forecast = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { search };


// const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`;

// module.exports = {

//     return axios.get(requestUrl).then(
//       function(res) {
//         if (res.data.cod && res.data.message){
//           throw new Error(res.data.message);
//         } else {
//           return res.data.main.temp;
//         }
//       },
//       function(res) {
//         throw new Error(res.data.message);
//       }
//     );
//   }
// }
