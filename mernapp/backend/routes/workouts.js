const express = require('express')
const Workout = require('../models/workoutModel')
const {
	createWorkout,
	getWorkout,
	getWorkouts,
	deleteWorkout,
	updateWorkout
} = require('../controllers/workroutController')

// Create an instance of the router
const router = express.Router()

/**
	router.route('path').requestMethod1().requestMethod2()
*/

// Get all workouts :
router.get('/', getWorkouts)


// Get a single workout :
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout) // createWorkout is a controller

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router
