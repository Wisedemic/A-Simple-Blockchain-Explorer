// LevelDB
let level = require('level-party');

// Define a new Express Router
let express = require('express');
let chain = express.Router();

let Block = require ('../blockchain/block.js');
let Blockchain = require('../blockchain/blockchain.js');

let BlockchainDB = level('./blockchain', {valueEncoding: 'json'});

chain.post('/', function(req, res, next) {
	BlockchainDB.get('blockchain', function(err, chain) {
		if (err) console.log(err);
		if (chain) {
			res.json(chain);
		} else {
			console.log('This shouldnt happen');
		}
	});
});

chain.put('/add', function(req, res, next){
	//sanitize input
	//------------

	//------------
	BlockchainDB.get('blockchain', function(err, chain){
		if(err){
			res.status(500);
			res.send({error: err});
			return console.log(err);
		}
		if(!chain){
			res.status(500);
			res.send({error: 'blockchain wasnt found'});
			return console.log('blockchain wasnt found!');
		}
		
		const latestBlock = chain[chain.length-1];
		const newBlock = new Block(
			latestBlock.index+1, 
			Date.now(),
			{message: `Block ${latestBlock.index+1} - ${req.body.message}`},
			latestBlock.hash
		);
		chain.push(newBlock);
		BlockchainDB.put('blockchain', chain, function(err){
			if(err){
				res.status(500);
				res.send({error: 'problem pushing blockchain to database'});
				return console.log(err);
			}
			res.status(200);
			res.end();
			return console.log('added block to blockchain!');
		});
	});
});

module.exports = chain;
