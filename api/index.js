// Setup Express api
const express = require('express');
const api = express();

// Middleware
const bodyParser = require('body-parser'); //bodyparser + json + urlencoder
const morgan = require('morgan'); // logger

// Configuration
api.set('port', 3001); // Set Port Globally
api.listen(api.get('port')); // Define listening Port
api.use(bodyParser.urlencoded({extended: true})); // Parse application/x-www-form-urlencoded
api.use(bodyParser.json()); // Parse application/json

// Init Blockchain before init express routes.
const BlockchainDB = require('./blockchain/blockchain.js')(function() {
  // Routes
  const routes = require('./routes.js')(api);
  console.log('[SERVER] React-api API started on port ' + api.get('port'));
});
