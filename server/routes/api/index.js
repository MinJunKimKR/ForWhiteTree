const express = require('express');
const router = express.Router();
const giftboxRouter = require('./giftbox');

router.use('/giftbox', giftboxRouter);

module.exports = router;
