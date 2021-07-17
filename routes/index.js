const router = require("express").Router();
//const Exercise = require('../models/exercise');

router.get('/exercise', (req, res) => {
    res.sendFile('exercise.html', {root: 'public'});
})

router.get('/stats', (req, res) => {
    res.sendFile('stats.html', {root: 'public'});
})

module.exports = router;