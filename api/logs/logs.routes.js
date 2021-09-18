const express = require('express');
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
// const { addReview } = require('../review/review.controller');
const {addLogs } = require('./logs.controller');
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth);

router.get('/' );
router.post('/',addLogs );


module.exports = router;
