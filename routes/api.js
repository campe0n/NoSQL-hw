const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.get('/stats', (req, res) => {
    res.render('../public/stats');
});

module.exports = router;