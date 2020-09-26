var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('This is giftbox');
});

router.post('/main', function (req, res, next) {
    try {
        if (req.body.password.replace(/ /g, "").toLowerCase() == "happybirthday") {
            res.status(200).json({
                result: true
            })
        } else {
            res.status(200).json({
                result: false
            })
        }

    } catch (error) {
        res.status(500).json({
            result: "error"
        })
    }

});

module.exports = router;
