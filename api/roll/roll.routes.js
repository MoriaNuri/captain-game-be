const express = require('express');
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
// const { addReview } = require('../review/review.controller');
const {  rollDice } = require('./roll.controller');
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth);

router.get('/' );
router.post('/',rollDice );


module.exports = router;
