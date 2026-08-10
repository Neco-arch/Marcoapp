const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Router Import 

const Auth = require('./Routes/Auth')

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router

app.use('/auth', Auth)



//Startdaapp

app.listen(process.env.PORT, () => {
    console.log("Server is running ")
})