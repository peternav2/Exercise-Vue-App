const data = require('../data/workouts.json');
const { connect } = require('./mongo');

async function collection() {
    const client = await connect();
    return client.db('WebHome').collection('workouts');
}

async function getWorkouts() {
    const db = await collection();
    const workouts = await db.find().toArray();
    console.log(workouts);
    return workouts;
}

async function getWorkout(workoutId) {
    const db = await collection();
    const workout = await db.find({ workoutId: workoutId })
    return workout;
}

module.exports = {
    collection,
    getWorkouts,
    getWorkout
};