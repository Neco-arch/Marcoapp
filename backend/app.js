const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { rateLimit } = require('express-rate-limit')

const app = express()

// Rate Limit
const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 100,
    message: 'Too many requests, please try again later.'
})

app.use(limiter)

// Router Import 

const Auth = require('./Routes/Auth.js')
const progress = require('./Routes/Logprogress.js')
const logfood = require('./Routes/Logfood.js')
const excerise = require('./Routes/Excerise.js')

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router

app.use('/auth', Auth)
app.use('/progress', progress)
app.use('/food', logfood)
app.use('/excerise', excerise)


//Start da app

app.listen(process.env.PORT, () => {
    console.log("Server is running ")
})