module.exports = (cb) => {

	// LevelDB
	const level = require('level-party'); // -party allows multithreading
	// Hash functions
	const SHA256 = require('crypto-js');
	// Define a Block
	let Block = require('./block.js');

	// Define the Blockhain
	const Blockchain = class Blockchain {
		// Build the blockchain.
		constructor() {
			this.chain = [this.createGenesisBlock()];
		}

		createGenesisBlock() {
			return new Block(0, Date.now(), {message: 'Block 0 - The Genesis Block'}, '0x0');
		}

		// Returns the latest block.
		getLatestBlock() {
			return this.chain[this.chain.length - 1];
		}

		addBlock(newBlock) {
			// Set this new blocks previousHash to the hash of the latest block in the chain
			newBlock.previousHash = this.getLatestBlock().hash;

			// Calculate it's Hash
			newBlock.calculateHash();

			// Verify it
			if (this.verifyBlock(newBlock)) {
				this.chain.push(newBlock);
			} else {
				return {error: 'Block Verification Failed!!'}
			}
		}

		verifyBlock(block) {
			console.log('[BLOCKCHAIN] -  New Block Verification Requested!');

			// Must have a previousHash.
			if (!block.previousHash.length > 0) return false;

			// New block previoushHash must = last blocks hash.
			if (block.previousHash !== this.getLatestBlock().hash) return false;

			// For the length of the chain, check hashs are = allthroughout.
			for(var i = this.chain.length - 1; i > 0; i--) {
				if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
					console.log('[BLOCKCHAIN] -  Block Failed Verification!', block);
					return false;
				}
			}
			return true;
		}
	}

	// After defining our chain. Attach it to our DB.
	let db = level('./blockchain', {valueEncoding: 'json'});
	console.log('[DB] -- Grabbing Blockchain from DB');

	// Grab the chain if it exists
	db.get('blockchain', function(err, chain) {
		// if no chain in db.
		if (!chain) {
			let blockchain = new Blockchain().chain;
			db.put('blockchain', blockchain, function(err) {
				if (err) console.log(err);
				console.log('[DB] -- NO BLOCKCHAIN DETECTED!');
				console.log('[DB] -- New Blockchain Created!');
				console.log('[DB] -- Blockchain DB Initialized. App is ready to start!');
				cb();
			});
		} else {
			console.log('[DB] -- Expected: Blockchain Already Exists!');
			console.log('[DB] -- Blockchain DB Initialized. App is ready to start!');
			cb();
		}
	});
}
