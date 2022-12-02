const express = require('express')
const workouts = require('../models/workouts')
const { get, add, getAllItems } = require('../models/workoutitems')
const app = express.Router()
app
.get('/', (req, res) => {
    getAllItems()
    .then(x => res.status(200).send(x))
})
.get('/:userid', (req, res) => {
    get(req.params.userid)
    .then(x => res.status(200).send(x))
});

app.post('/', (req, res) => {
    console.log(req.body);
    const workoutItem = add(req.body).then(x => res.status(200).send(x));
});

module.exports = app