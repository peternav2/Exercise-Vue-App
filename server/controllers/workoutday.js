const express = require('express');
const { get, add, remove } = require('../models/workoutday');

const app = express.Router();

app.get('/:id/:date', (req, res) => {
    res.send(get(req.params.id));
});

app.post('/:id', (req, res) => {
    res.send(add(req.params.id, +req.body.workoutId, +req.body.sets, +req.body.reps));
});

app.delete('/:id', (req, res) => {
    res.send(remove(req.params.id, +req.body.workoutId));
});