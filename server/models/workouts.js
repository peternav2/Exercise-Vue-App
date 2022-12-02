//const data = require('../data/workouts.json');
const { connect } = require('./mongo');
const { ObjectId } = require('mongodb');

const COLLECTIONNAME = 'workouts';

async function collection() {
    const client = await connect();
    return client.db('WebHome').collection(COLLECTIONNAME);
}

async function getWorkouts() {
    const db = await collection();
    const workouts = await db.find().toArray();
    //console.log(workouts);
    return { limit: workouts.length, workouts };
}

async function getWorkout(workoutId) {
    const db = await collection();
    // const workout = await db.findOne({ _id: new ObjectId(workoutId) });
    const workout = await db.findOne({ workoutId: workoutId });
    // console.log(workout);
    return workout;
}

async function seed() {
    const db = await collection();
    await db.insertMany(data.workouts);
    return 'successfull seed';
}

module.exports = {
    seed,
    COLLECTIONNAME,
    collection,
    getWorkouts,
    getWorkout
};