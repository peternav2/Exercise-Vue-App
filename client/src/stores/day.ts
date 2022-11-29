import { reactive, ref, watch } from 'vue'

import type {  Workout } from "./workouts"
import session, { api } from './session';


export interface WorkoutItem {
    sets: number;
    reps: number;
    workout: Workout;
}

const day = reactive([] as WorkoutItem[])

export default day as WorkoutItem[];

export function load() {
    api(`day/${session.user?.username}`).then((data) => {
        day.splice(0,day.length, ...data as WorkoutItem[]);
    });
}
watch(()=> session.user, load);

export function addWorkoutToDay(workout: Workout, sets: number, reps: number) {
    api(`day/${session.user?.username}`).then((data) => {
        const i = day.findIndex((item) => item.workout.id === workout.id);
        if (i >= 0) {
            day[i] = data as WorkoutItem;
        } else {
            day.unshift(data as WorkoutItem);
        }
    });
}

// export function removeWorkoutFromDay(workout: Workout) {
//     api(`day/${session.user?.username}`, {workout}.then(() => {}




