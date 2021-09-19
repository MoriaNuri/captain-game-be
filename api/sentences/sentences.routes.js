const express = require('express');
const { log } = require('../../middlewares/logger.middleware');
const { getSentences } = require('./sentences.controller');
const router = express.Router();

router.get('/', log, getSentences);

module.exports = router;
