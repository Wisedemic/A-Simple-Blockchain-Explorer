// LevelDB
let level = require('level');

// Define a new Express Router
let express = require('express');
let chain = express.Router();

let BlockchainDB = level('./blockchain');

chain.get('/', function(req, res, next) {
	res.json({"yay": "woo"});
   next();
});

module.exports = chain;
