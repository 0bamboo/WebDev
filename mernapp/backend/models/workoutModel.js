const mongoose = require('mongoose')

// Schema defines the structure of a document inside the db
const Schema = mongoose.Schema

const workoutSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	reps: {
		type: Number,
		required: true
	},
	load: {
		type: Number,
		required: true
	}
}, {timestamps: true})


// Module 

module.exports = mongoose.model('Workout', workoutSchema)

// get all the workout within the workout collection
// Workout.find()