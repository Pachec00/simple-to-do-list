const express = require('express');
const app = express();
var router = express.Router();

app.use(express.static('public'));

var wiki = require('./routes/wiki.js');
app.use('/', wiki);



app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
