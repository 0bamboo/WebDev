const express = require('express')

// Create an instance of the router
const router = express.Router()

// Get all workouts :
router.get('/', (req, res) => {
	res.json({msg: 'Get all workouts'})
})

// Get a single workout :
router.get('/:id', (req, res) => {
	res.json({msg: 'Get a single workout'})
})

// Post a new workout
router.post('/', (req, res) => {
	console.log(req.headers)
	res.json({msg: ' Post a new workout'})
})

// Delete a workout
router.delete('/:id', (req, res) => {
	res.json({msg: ' Delete a workout'})
})

// Update a workout
router.patch('/:id', (req, res) => {
	res.json({msg: ' Update a workout'})
})

module.exports = router
