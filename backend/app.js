const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Router Import 

const Auth = require('./Routes/Auth.js')
const progress = require('./Routes/Logprogress.js')
const logfood = require('./Routes/Logfood.js')

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router

app.use('/auth', Auth)
app.use('/progress', progress)
app.use('/food', logfood)


//Start da app

app.listen(process.env.PORT, () => {
    console.log("Server is running ")
})