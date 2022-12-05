import { reactive, ref, watch } from 'vue'

import type {  Workout } from "./workouts"
import session, { api } from './session';
import { DayOfWeek } from './day';


export interface WorkoutItem {
    sets: number;
    reps: number;
    workout: Workout;
    day: string;
}
export interface ListEnvelope<T> {
    workoutItems: T[];
  }

const workoutItems = reactive([] as WorkoutItem[]);
export default workoutItems

export function load() {

    api(`workoutitems/${session.user?.username}`).then((data) => {
        console.log(data);
        console.log(session.user?.username);
        //ive isolated the problem to this line below
        workoutItems.splice(0,workoutItems.length, ...data as WorkoutItem[]);
        //it says that data is not iterable
        //how do i make it iterable

        


    });
    
}

watch(()=> session.user, load);

export function addWorkoutItem(workout: Workout, sets: number, reps: number, day: string) {
    api(`workoutitems/`, { userid: session.user?.username, workout, sets, reps, day }).then((data) => {
        console.log("here3");
        workoutItems.push(data as WorkoutItem);
        console.log("here7");
        console.log(data);
    });
}

export function remove(workoutItem: WorkoutItem) {
    api(`workoutitems/`,{workoutItem}, 'DELETE').then(() => {
        const index = workoutItems.indexOf(workoutItem);
        workoutItems.splice(index, 1);
    });
}


