const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    'hello': "hello"
  })
});


module.exports = router;
