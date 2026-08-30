const express = require('express')

const Route = express()

// Controller Import 
const { ReadExcerise, AddExcerise } = require('../controller/Excerisecontroller.js')
const { authenticateToken } = require('../controller/Authcontroller.js')

// Router Part

Route.post('/addexcerise', authenticateToken, AddExcerise)

Route.get('/getexcerise', authenticateToken, ReadExcerise)



module.exports = Route      