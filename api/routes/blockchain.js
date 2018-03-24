var express = require('express');
var blockchain = express.Router();

blockchain.get('/', function(req, res, next) {
	 res.json({"yay": "woo"});
   next();
});

module.exports = blockchain;
