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

// * All other pages are sent to the homepage
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// * API Routes
app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body, params);
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
    )
        .then((dbWorkout) => {
            console.log({ dbWorkout });
            res.json(dbWorkout);
        })
        .catch((err) => {
            console.log({ err });
            res.json(err);
        });
});

// * Stats API
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});
// db.Workout.create()
//     .then((dbWorkout) => {
//         console.log(dbWorkout);
//     })
//     .catch(({ message }) => {
//         console.log(message);
//     });

// app.get("api/exercise", (req, res) => {
//     res.
//     // db.Exercise.find({})
//     //     .then((dbExercise) => {
//     //         res.json(dbExercise);
//     //     })
//     //     .catch((err) => {
//     //         res.json(err);
//     //     });
// });

// app.get("/populateduser", (req, res) => {
//     // TODO
//     // =====
//     // Write the query to grab the documents from the User collection,
//     // and populate them with any associated Notes.
//     // TIP: Check the models out to see how the Notes refers to the User
// });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
