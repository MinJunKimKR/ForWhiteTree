const express = require('express');
const router = express.Router();

const { passwordChecker } = require('../../utils/utils')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('This is giftbox');
});

router.post('/main', function (req, res, next) {
    try {
        res.status(200).json({
            result: passwordChecker(req.body.password, 'main')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            result: "error"
        })
    }
});

router.post('/1', function (req, res, next) {
    try {
        res.status(200).json({
            result: passwordChecker(req.body.password, '1')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            result: "error"
        })
    }
});
router.post('/2', function (req, res, next) {
    try {
        res.status(200).json({
            result: passwordChecker(req.body.password, '2')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            result: "error"
        })
    }
});
router.post('/3', function (req, res, next) {
    try {
        res.status(200).json({
            result: passwordChecker(req.body.password, '3')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            result: "error"
        })
    }
});
router.post('/4', function (req, res, next) {
    try {
        res.status(200).json({
            result: passwordChecker(req.body.password, '4')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            result: "error"
        })
    }
});

module.exports = router;
