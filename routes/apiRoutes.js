const router = require('express').Router();
const Exercise = require('../models/exercise');
const Workout = require('../models/workout');
const db = require('../models/workout')

router.get('/workouts', async (req, res) => {
    try {
        const workout = await Workout.find({}).populate('exercise');
        res.send(workout)
    } catch (err) {
        console.log(err);
    }
})

router.get('/exercise', async (req, res) => {
    try {
        const workout = await Exercise.find({});
        res.send(workout);
    } catch (err) {
        res.send(err);
    }
})

router.post('/workouts', async ({ body }, res) => {
    try {
        const workout = await Exercise.create(body);
        res.send(workout);
    } catch (err) {
        res.send(err);
    }
})


router.get('/workouts/range', async (req, res) => {
    try {
        const workout = await Workout.find({}).populate('exercise');
        res.send(workout)
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;