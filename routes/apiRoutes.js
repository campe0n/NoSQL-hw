const router = require('express').Router();
const Workout = require('../models/workout')

router.post('/workouts', (req, res) => {
    const type = req.body.type;
    const name = req.body.name;
    const duration = req.body.duration;
    const weight = req.body.weight;
    const reps = req.body.reps;
    const sets = req.body.sets;

    const newWorkout = new Workout({
        type,
        name,
        duration,
        weight,
        reps,
        sets,
    });

    newWorkout.save()
    .then(() => res.json('Workout Added'))
    .catch( err => res.status(400).json(err))
})

router.get('/stats', async (req, res) => {
    const workout = await Workout.find()
    res.send(workout);
})

router.get('/workouts', async (req, res) => {
    const workout = await Workout.find()
    res.send(workout);
});

router.get('/workouts/range', async (req, res) => {
    const workout = await Workout.find()
    res.send(workout);
});


router.put('/workouts/:id', async (req, res) => {
    const type = req.body.type;
    const name = req.body.name;
    const duration = req.body.duration;
    const weight = req.body.weight;
    const reps = req.body.reps;
    const sets = req.body.sets;

    const newWorkout = new Workout({
        type,
        name,
        duration,
        weight,
        reps,
        sets,
    });

    newWorkout.save()
    .then(() => res.json('Workout Added'))
    .catch( err => res.status(400).json(err))
});

module.exports = router;