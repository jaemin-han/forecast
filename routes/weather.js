const router = require('express').Router();
const jsonResults = (req, res) => res.json(res.weather || []);

router.route('/weather')
  .get(getAllMovies, jsonResults);

module.exports = router;
