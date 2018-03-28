// Setup Express App
let express = require('express');
let app = express();

// Middleware
const path = require('path');
const bodyParser = require('body-parser'); //bodyparser + json + urlencoder
const morgan = require('morgan'); // logger

// Configuration
app.set('port', 3001); // Set Port Globally
app.listen(app.get('port')); // Define listening Port
app.use(bodyParser.urlencoded({extended: true})); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json

// Init Blockchain.
let BlockchainDB = require('./blockchain/blockchain.js');

// Routes
let routes = require('./routes.js')(app);

console.log('[SERVER] React-App API started on port ' + app.get('port'));
