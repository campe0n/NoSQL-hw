const router = require('express').Router();
const Exercise = require('../models/exercise');
const Workout = require('../models/workout');

router.get('/workouts', async (req, res) => {
    try {
        const workout = await Workout.find({}).populate("exercise");
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
        const workout = await Workout.create(body);
        
        workout.save();
        res.send(workout);
    } catch (err) {
        res.send(err);
    }
})

router.put('/workouts/:id', async (req, res) => {
    try {
        const newExercise = await Exercise.create(req.body);

        newExercise.aggregate([
            {$match: {}},
            {$group: {total: {$sum: "$duration"}}}
        ])
    } catch (err) {
        res.send(err);
    }
})

router.get('/workouts/range', async (req, res) => {
    try {
        const newExercise = await Exercise.create(req.body);

        const displayExercise = newExercise.aggregate([
            {$match: {}},
            {$group: {total: {$sum: "$duration"}}}
        ])

        res.send(displayExercise);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;