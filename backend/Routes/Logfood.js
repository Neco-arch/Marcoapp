const express = require('express')

const Route = express()

// Controller Import 

const { logfood, readfood } = require("../controller/Logfoodcontroller.js")
const { authenticateToken } = require('../controller/Authcontroller.js')


// Router Part

Route.post('/logfood', authenticateToken, logfood)

Route.get('/readfood', authenticateToken, readfood)

module.exports = Route