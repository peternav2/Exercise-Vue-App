const express = require('express')
const workouts = require('../models/workouts')
const { get, add, getAllItems } = require('../models/workoutitems')
const app = express.Router()
app
.get('/', (req, res) => {
    res.send(getAllItems())
})
.get('/:id', (req, res) => {
    res.send(get(req.params.id));
});

app.post('/', (req, res) => {
    console.log(req.body);
    const workoutItem = add(req.body).then(x => res.status(200).send(x));
});

module.exports = app