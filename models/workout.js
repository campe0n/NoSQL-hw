const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  duration: {
    type: Number,
    min: 0,
    max: 2000,
    trim: true,
    required: true
  },
  weigth: {
    type: Number,
    min: 0,
    max: 2000,
    trim: true,
    required: false
  },
  reps: {
    type: Number,
    min: 0,
    max: 2000,
    trim: true,
    required: false
  },
  sets: {
    type: Number,
    min: 0,
    max: 2000,
    trim: true,
    required: false
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
