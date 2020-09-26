var express = require('express');
var router = express.Router();
var giftboxRouter = require('./giftbox');

router.use('/giftbox', giftboxRouter);

module.exports = router;
