const express = require('express');
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
const { log } = require('../../middlewares/logger.middleware');
const { getSentences } = require('./sentences.controller');
const router = express.Router();


// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getSentences);
// router.post('/', requireAuth);

module.exports = router;
