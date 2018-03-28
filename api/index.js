// Setup Express App
const express = require('express');
const app = express();

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
const BlockchainDB = require('./blockchain/blockchain.js')(function() {
  // Routes
  const routes = require('./routes.js')(app);
  console.log('[SERVER] React-App API started on port ' + app.get('port'));
});
