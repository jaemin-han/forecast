const router = require('express').Router();
const jsonResults = (req, res) => res.json(res.city || []);
var fetch = require('node-fetch');
const API_KEY = process.env.WEATHER_API_KEY;

router.route('/city')
  .get(jsonResults);

// Router.get('/city', jsonResults);
router.post('/city', (req, res) => {
  console.log(req.body);
  // Get weather info
  let cities = req.body.cities;
  console.log(cities);
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cities},us&appid=${API_KEY}`)
  .then(r=>r.json())
  .then(city => {
    console.log('in fetch city', city)
    res.json(city); // send to frontend as json
  })
  .catch(() => res.status(500)) // internal error, no city sorry
});

module.exports = router;

