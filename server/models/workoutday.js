const { getWorkout } = require('./workout');

const day = [];

const get = (id) => {
    return day
    .find((day) => day.id === id);
    //in your code you use map and filter why?
};
/**
 * 
 * @param {string} id 
 * @param {number} workoutId 
 * @param {number} sets 
 * @param {number} reps 
 * @returns 
 */

const add = (id, workoutId, sets, reps) => {
    const workoutItem = day.find((workoutItem) => workoutItem.id === id
                                && workoutItem.workoutId === workoutId);
    if (workoutItem) {
        workoutItem.sets = sets;
        workoutItem.reps = reps;
    }
    else {
        workoutItem = { id: list.length + 1, workoutId, sets, reps };
        day.push(workoutItem);
    }
    return {...workoutItem, workout: getWorkout(workoutId)};
};

/**
 * 
 * @param {string} id 
 * @param {number} workoutId 
 * @returns 
 */
const remove = (id, workoutId) => {
    const workoutItem = day.find((workoutItem) => workoutItem.id === id
                                && workoutItem.workoutId === workoutId);
    if (workoutItem) {
        day = day.filter((workoutItem) => workoutItem.id !== id
                                        && workoutItem.workoutId !== workoutId);
    }
    return workoutItem;
};

module.exports = { get, add, remove };