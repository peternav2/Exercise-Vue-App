const express = require('express')
const workouts = require('../models/workouts')
const {get, add} = require('../models/workoutItems')

const app = express.Router()

app.get('/:id', (req, res) => {
    res.send(get(req.params.id))
});

app.post('/:id/:workoutId/:sets/:reps/:day', (req, res) => {
    res.send(add(req.params.id, req.params.workoutId, req.params.sets, req.params.reps))
});

module.exports = app