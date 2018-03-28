// Hashing Function
let SHA256 = require('crypto-js/sha256');

// Nonce value generator
let uuidv4 = require('uuid/v4');

// Define A Block
module.exports = class Block {
	constructor(index, timestamp, data, previousHash) {
		this.index = index; // block height
		this.timestamp = timestamp;
		this.data = data; // can be anything.
		this.hash = this.calculateHash();
		this.previousHash = previousHash; // The Hash of the previous Block
	}
	// return the Hash of this block
	calculateHash() {
   	return SHA256(
			this.index +
			this.timestamp +
			JSON.stringify(this.data) +
			this.previousHash +
			uuidv4() // Ex. 'f64f2940-fae4-11e7-8c5f-ef356f279131'
		).toString();
	}
}
