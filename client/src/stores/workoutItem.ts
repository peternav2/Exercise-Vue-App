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

const day = reactive([] as WorkoutItem[])
export default day as WorkoutItem[];

export function load(date: string) {
    api(`day/${session.user?.username}/${date}`).then((data) => {
        day.splice(0,day.length, ...data as WorkoutItem[]);
    });
}

watch(()=> session.user, ()=> load(new Date().getDay.toString()));

export function addWorkoutItem(workout: Workout, sets: number, reps: number, date: string) {
    api(`workoutItems/${session.user?.username}/${workout.workoutId}/${sets}/${reps}/${date}`).then((data) => {
        const i = day.findIndex((item) => item.workout.workoutId === workout.workoutId);
        if (i >= 0) {
            day[i] = data as WorkoutItem;
        } else {
            day.unshift(data as WorkoutItem);
        }
    });
}






