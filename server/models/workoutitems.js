const { getWorkout } = require('./workouts');

const list = [];


const getAllItems = () =>{
    return list;
}
//these gets will give quite loaded objects, cant be directly mapped onto WorkoutItem in stores
//must do a mediary step where you selectively pick what you want from the object
const get = (id) => {
    return list
        .filter((workoutItem) => workoutItem.id === id) // might be a bug with that workoutItem.id
        .map((workoutItem) => ({
            ...workoutItem,
            workout: getWorkout(workoutItem.workoutId)
        }));
};

/**
 * 
 * @param {string} id 
 * @param {number} workoutId 
 * @param {number} sets 
 * @param {number} reps 
 * @param {string} day
 * @returns 
 */
const add = (id, workoutId, sets, reps, day) => {
    let workoutItem = list.find((workoutItem) => workoutItem.id === id && workoutItem.workoutId === workoutId);
    if (workoutItem) {
        workoutItem.sets = sets;
        workoutItem.reps = reps;
        workoutItem.day = day;
    } else {
        workoutItem = { id, workoutId, sets, reps, day };
        list.push(workoutItem);
    }
    return {
        ...workoutItem, workoutItem: getWorkout(workoutId)
    }
};

module.exports = {get, add, getAllItems}