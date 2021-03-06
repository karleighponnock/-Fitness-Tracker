// Create all the routes to listen to the requests from the front end.
// Create all the routes to listen to the requests from the front end.
const app = require("express").Router();
const Workout = require("../models/workout.js");


// You will need at least Four (4) api routes:
// GET ( "/api/workouts" ) - Get all workouts
app.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.
// GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page.
app.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// POST ( "/api/workouts" ) - Create a new Workout
app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// PUT ( "/api/workouts/:id" ) - Update a Workout
app.put("/api/workouts/:id", (req, res) => {
    console.log("Hello!!")
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = app;