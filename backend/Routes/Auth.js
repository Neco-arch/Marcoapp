const express = require("express");

const Route = express();

// Controller Import
const { signupuser, userlogin } = require("../controller/Authcontroller.js");

// Router Part

Route.post("/login", userlogin);

Route.post("/signup", signupuser, userlogin);

module.exports = Route;
