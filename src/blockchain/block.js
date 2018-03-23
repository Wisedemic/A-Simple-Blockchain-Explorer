var SHA256 = require('crypto-js');

module.exports = class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
    this.previousHash = previousHash;
  }
  calculateHash: () => {
    return SHA256().toString();
  }

}
