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
    return workout;
}
//this function isnt getting filtered results,
//it is getting none of the workouts from the search in the request
async function getFiltered(name) {
    const db = await collection();
    const filtered = await db.find({ name: name }).toArray();
    console.log(filtered);
    return filtered;
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
    getWorkout,
    getFiltered
};