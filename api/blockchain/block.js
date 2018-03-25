let SHA256 = require("crypto-js/sha256");

// Define A Block
module.exports = class Block {
	constructor(index, timestamp, data, previousHash) {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.hash = this.calculateHash();
		this.previousHash = previousHash;
	}

	calculateHash() {
   	return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
	}
}
