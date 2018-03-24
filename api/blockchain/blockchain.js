var SHA256 = require('crypto-js');

var Block = require('./block.js');

module.exports = class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock() {
    return new Block(0, date.now(), {message: 'Block 0 - The Genesis Block'}, '0x0');
  }
  addBlock(newBlock) {
    // Set this new blocks previousHash to the hash of the latest block in the chain
    newBlock.previousHash = this.chain[this.chain.length - 1].previousHash;
    // Calculate it's Hash
    newBlock.calculateHash();
    // Verify Block

      this.chain.push(newBlock);
    // if (this.verifyBlock(newBlock)) {
    //   this.chain.push(newBlock);
    // } else {
    //   return {error: 'Block Verification Failed!!'}
    // }
  }
  // verifyBlock(block) {
  //   if (!block.previousHash.length > 0) {
  //     return false;
  //   }
  //   this.chain.filter((block) => {
  //     if (block)
  //   });
  // }
}
