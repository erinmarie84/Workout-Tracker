const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: 'Enter the name of exercise.'
                },
                type: {
                    type: String,
                    trim: true,
                    required: 'Enter the type of exercise.'
                },
                duration: {
                    type: Number,
                    required: 'Enter the duration of exercise in minutes'
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
    );

workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;