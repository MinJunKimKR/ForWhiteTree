const express = require('express');
const router = express.Router();
const giftboxRouter = require('./giftbox');
const indexRouter = require('./index');

router.use('/', indexRouter);
router.use('/giftbox', giftboxRouter);

module.exports = router;
