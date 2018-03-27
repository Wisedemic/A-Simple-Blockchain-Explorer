// Setup Express App
let express = require('express');
let app = express();

// Middleware
const path = require('path');
const bodyParser = require('body-parser'); //bodyparser + json + urlencoder
const morgan = require('morgan'); // logger

// Configuration
app.set('port', 3001);
app.listen(app.get('port'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// Parse application/json
app.use(bodyParser.json());

// Routes
let routes = require('./routes.js')(app);

// Init Blockchain.
let blockchain = require('./blockchain/blockchain.js');

console.log('[SERVER] React-App API started on port ' + app.get('port'));
