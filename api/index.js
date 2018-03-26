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

// Grab Blockchain Constructors.
const Blockchain = require('./blockchain/blockchain.js');
const Block = require('./blockchain/block.js');

// Construct the chain.
let blockchain = new Blockchain();

// Routes
let routes = require('./routes.js')(app);

console.log('[SERVER] React-App API started on port ' + app.get('port'));
