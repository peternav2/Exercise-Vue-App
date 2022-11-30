import { reactive, ref, watch } from 'vue'

import type {  Workout } from "./workouts"
import session, { api } from './session';
import { DayOfWeek } from './day';


export interface WorkoutItem {
    sets: number;
    reps: number;
    workout: Workout;
    date: string;
}

const workoutItems = reactive([] as WorkoutItem[])
export default workoutItems

export function load() {
    api(`workoutitems/${session.user?.username}`).then((data) => {
        workoutItems.splice(0,workoutItems.length, ...data as WorkoutItem[]);
    });
}

watch(()=> session.user, load);

export function addWorkoutItem(workout: Workout, sets: number, reps: number, date: string) {
    api(`workoutitems/${session.user?.username}`, { workoutId: workout.workoutId, sets, reps, date }).then((data) => {
        console.log("here3");
        workoutItems.push(data as WorkoutItem);
        console.log("here7");
        console.log(workoutItems);
    });
}



