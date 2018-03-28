// LevelDB
let level = require('level-party');

// Define a new Express Router
let express = require('express');
let chain = express.Router();

let BlockchainDB = level('./blockchain');

chain.post('/', function(req, res, next) {
	BlockchainDB.get('blockchain', function(err, chain) {
		if (err) console.log(err);
		if (chain) {
			res.json(JSON.parse(chain).chain);
		} else {
			console.log('This shouldnt happen');
		}
	});
});

module.exports = chain;
