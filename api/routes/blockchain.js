var express = require('express');
var chain = express.Router();

let blockchain

chain.get('/', function(req, res, next) {
	res.json({"yay": "woo"});
   next();
});

module.exports = chain;
