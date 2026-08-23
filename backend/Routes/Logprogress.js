const express = require('express')

const Route = express()

// Controller Import 

const { UpdateUsergoal, CreateUsergoal, Updatecurrentprogress } = require("../controller/Logprogresscontroller.js")
const { authenticateToken } = require('../controller/Authcontroller.js')

// Router Part

Route.post('/CreateUsergoal', authenticateToken, CreateUsergoal)

Route.put('/UpdateUsergoal', authenticateToken, UpdateUsergoal)

Route.put('/Updateprogress', authenticateToken, Updatecurrentprogress)

module.exports = Route      