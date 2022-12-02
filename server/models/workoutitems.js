const { getWorkout } = require('./workouts');
const { connect,  } = require('./mongo');
const COLLECTIONNAME = 'workoutitems';
const list = [];

async function collection() {
    const client = await connect();
    return client.db('WebHome').collection(COLLECTIONNAME);
}


 const get = async (userId) => {
    const db = await collection();
    const workoutItems = await db.find({ userId }).toArray();
    return workoutItems.filter(x => x.userId === userId);
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

/**
 * 
 * @param {string} id 
 * @param {number} workoutId 
 * @param {number} sets 
 * @param {number} reps 
 * @param {string} day
 * @param {string} userId
 * @returns 
 */
const add = async (workoutItem) => {
        const db = await collection();
        const result = await db.insertOne(workoutItem);
        workoutItem._id = result.insertedId;
        return workoutItem;
};

module.exports = {get, add, getAllItems}