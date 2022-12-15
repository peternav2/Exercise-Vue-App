const { getWorkout } = require('./workouts');
const { connect,  } = require('./mongo');
const COLLECTIONNAME = 'workoutitems';
const list = [];

async function collection() {
    const client = await connect();
    return client.db('WebHome').collection(COLLECTIONNAME);
}

/**
 * 
 * @param {string} userid 
 * @returns 
 */
 const get = async (userid) => {
    const db = await collection();
    // console.log(userid);
    const workoutItems = await db.find({userid: userid}).toArray();
    // console.log(workoutItems);
    return workoutItems;
};


const getAllItems = async () =>{
    const db = await collection();
    const workoutItems = await db.find().toArray();
    return workoutItems;
}
//these gets will give quite loaded objects, cant be directly mapped onto WorkoutItem in stores
//must do a mediary step where you selectively pick what you want from the object
// const get = (id) => {
//     return list
//         .filter((workoutItem) => workoutItem.id === id) // might be a bug with that workoutItem.id
//         .map((workoutItem) => ({
//             ...workoutItem,
//             workout: getWorkout(workoutItem.workoutId)
//         }));
// };


const add = async (workoutItem) => {
        const db = await collection();
        const result = await db.insertOne(workoutItem);
        workoutItem._id = result.insertedId;
        return workoutItem;
};

const remove = async(workoutItem) => {
    console.log(workoutItem);
    const db = await collection();
    const result = await db.deleteOne({userid: workoutItem.userid, workout: workoutItem.workout, sets: workoutItem.sets, reps: workoutItem.reps, day: workoutItem.day});
    return result;
};

module.exports = {get, add, getAllItems, remove}