const mongoose = require("mongoose");
const exercise = require("./Exercise");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [exercise],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
