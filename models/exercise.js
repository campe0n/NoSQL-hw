const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: 'Enter type of exercise',
  },
  name: {
    type: String,
    trim: true,
    required: 'Enter naem of exercise'
  },
  duration: {
    type: Number,
    trim: true,
    required: 'Enter duration'
  },
  weigth: {
    type: Number,
    trim: true,
    required: 'Enter weigth amount'
  },
  reps: {
    type: Number,
    trim: true,
    required: 'Enter amount of reps'
  },
  sets: {
    type: Number,
    trim: true,
    required: 'Enter amount of sets'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
