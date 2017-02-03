const router = require('express').Router();
const jsonResults = (req, res) => res.json(res.weather || []);
var fetch = require('node-fetch');
const API_KEY = process.env.WEATHER_API_KEY;

router.route('/weather')
  .get(jsonResults);

// router.get('/weather', jsonResults);
router.post('/weather', (req, res) => {
  console.log(req.body);
  // get weather info
  let zip = req.body.zip;
  console.log(zip);
  // fetch(url).then().then().catch()
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`)
  .then(r=>r.json())
  .then(weather => {
    console.log('in fetch weather', weather)
    res.json(weather); // send to frontend as json
  })
  .catch(() => res.status(500)) // internal error, no weather sorry
});


// router.get('/weather', (req, res) => {
//     // handling request from client for temperature info...

//     fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.value},us&appid=${API_KEY}`)
//     .then(r=>r.json())
//     .then(weather => {
//       console.log('in fetch weather', weather)
//       this. setState({
//         weatherCity: weather.name,
//         // weatherTemp:
//       });
//       console.log('in fetch states', this.state)
//     })
//     .catch(() => res.status(500)) // internal error, no weather sorry

//   })

module.exports = router;

