require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Express app
const app = express()

// The middleware (express.json()) for fetching a json type request 
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// routes
// app.get('/', (req, res) => {
// 	res.json({msg: `Welcome to the app`})
// })

// Routes
app.use('/api/workouts',workoutRoutes)

// Connecct to db
mongoose.connect(process.env.MONGO_URI)
	.then(()=> {
		console.log("Connect to db");
		// Then listen for requests
		app.listen(process.env.PORT, () => {
			console.log("Listening on port 4000!")
		})
	})
	.catch((error)=> {
		console.log(error)
	})


process.env

// npx nodemon server.js 