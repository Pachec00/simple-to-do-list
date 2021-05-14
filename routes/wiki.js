// wiki.js - Modulo de rutas Wiki

var express = require('express');
var router = express.Router();
const app = express();
app.use(express.static('public'));

// Home page route
router.get('/', function(req, res) {
  res.sendFile('index.html');
});

// About page route
router.get('/about', function(req, res) {
  res.send('Acerca de esta wiki');
});

module.exports = router;
