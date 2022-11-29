const { getWorkout } = require('./workouts');

const list = [];


const get = (id) => {
    return list
    .filter((workoutItem) => workoutItem.id === id)
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
    let workoutItem = list.find((workoutItem) => workoutItem.id === id
                            && workoutItem.workoutId === workoutId);
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
}