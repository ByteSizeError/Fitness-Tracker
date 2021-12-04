const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
// * Routes

app.get("/exercise", (req, res) => {
    res.sendFile(__dirname + "/public/exercise.html");
});

app.get("/stats", (req, res) => {
    res.sendFile(__dirname + "/public/stats.html");
});

// * API Routes

app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
            },
        },
    ])
        .then((dbWorkout) => {
            console.log({ dbWorkout });
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
            },
        },
    ])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
