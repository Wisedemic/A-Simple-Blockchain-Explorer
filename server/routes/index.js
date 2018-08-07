const express = require('express');

// Grab all our routes
const blockchain = require('./blockchain');

const router = express.Router();

// // Define Routes
router.use('/blockchain', blockchain);

module.exports = router;
