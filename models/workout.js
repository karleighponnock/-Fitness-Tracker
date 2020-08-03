//Create Model folder and add Model file (Workout.js)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Type of the exercise:"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of the exercise:"
        },
        duration: {
            type: Number,
            required: "Duration time:"
        },
        weight: {
            type: Number
        },
        reps:{
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// const WorkoutSchema = new Schema({
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     exercises: [
//         {
//             type: String,
//             name: String,
//             duration: Number,
//             weight: Number,
//             reps: Number,
//             set: Number,
//             distance: Number
//         }
//     ]
// })



// const Workout = mongoose.model("Workout", WorkoutSchema);

// module.exports = Workout;