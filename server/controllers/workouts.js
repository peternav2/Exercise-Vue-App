const express = require('express');
const workouts = require('../models/workouts');

const app = express.Router();


app

    .get('/', (req,res,next) => {
        workouts.getWorkouts()
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req,res,next) => {
        workouts.getWorkout(+req.params.id)
        .then(workout => {
            if (workout) {
                res.status(200).send(workout);
            } else {
                res.status(404).send('Workout not found');
            }
        })
        .catch(next);
    })
    .post('/seed', (req,res,next) => {
        workouts.seed()
        .then(x => res.status(200).send(x))
        .catch(next);
    });

module.exports = app;
