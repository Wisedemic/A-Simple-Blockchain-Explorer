var SHA256 = require('crypto-js');

var Block = require('./block.js');

// Define a chain.
module.exports = class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
	}

	createGenesisBlock() {
		return new Block(0, Date.now(), {message: 'Block 0 - The Genesis Block'}, '0x0');
	}
	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}
	addBlock(newBlock) {
		// Set this new blocks previousHash to the hash of the latest block in the chain
		newBlock.previousHash = this.getLatestBlock().hash;

		// Calculate it's Hash
		newBlock.calculateHash();

		// Verify Block
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

		// For the length of the chain, check hashs are = all throughout.
		for(var i = this.chain.length - 1; i > 0; i--) {
			if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
				console.log('[BLOCKCHAIN] -  Block Failed Verification!', block);
				return false;
			}
		}

		return true;
	}
}
