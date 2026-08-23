const express = require('express')

const Route = express()

// Controller Import 

const { logfood } = require("../controller/Logfoodcontroller.js")
const { authenticateToken } = require('../controller/Authcontroller.js')


// Router Part

Route.post('/logfood', authenticateToken, logfood)

module.exports = Route