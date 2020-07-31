module.exports = function (app) {

    app.get("/api/workouts/", function (req, res) {
        Workout.create({})
            .then(dbWorkout => {
                console.log(dbWorkout);
            })
            .catch(({ message }) => {
                console.log(message)
            });
    });
    app.get("/api/workouts/range", function (req, res) {
        Workout.find({}).limit(7)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });
    app.post("/api/workouts", function (req, res) {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        })
    });
    app.post("/api/workouts/:id", function (req, res) {


    });
}