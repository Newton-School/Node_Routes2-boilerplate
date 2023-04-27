const fs = require('fs');
const express = require('express');
const app = express();
//Aim: With the help of router, get all the users with router.GET request and create a user with router.POST request

//middleware
//write router middleware here

//Including users.json file
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/users.json`)
);

// Defining The Router
// Get all the users
router.get('/api/v1/users', (req, res) => {
  try {
    //Write your code here
  } catch (error) {
    res.status(400).json(error);
  }
});

//Create a new user
router.post('/api/v1/users', (req, res) => {
  try {
    //Write your code here
  } catch (error) {
    res.status(400).json(error);
  }
});

//Registering our Router
//Write here to register router

module.exports = app;