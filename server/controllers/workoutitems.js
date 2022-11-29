const express = require('express')
const workouts = require('../models/workouts')
const { get, add } = require('../models/workoutitems')
const app = express.Router()
app
// .get('/', (req, res) => {
//     res.send(get(req.params.id))
// })
.get('/:id', (req, res) => {
    res.send(get(req.params.id));
});

app.post('/:id', (req, res) => {
    res.send(add(req.params.id, +req.body.workoutId, +req.body.sets, +req.body.reps));
});

module.exports = app