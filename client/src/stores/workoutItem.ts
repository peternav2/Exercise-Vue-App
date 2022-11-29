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
    api(`workoutitems/asdf`, { workoutId: workout.workoutId, sets, reps, date }).then((data) => {
        console.log("here3");
        
        // const i = workoutItems.findIndex((x) => +x.workout.workoutId === +workout.workoutId);
        // console.log("here4");
        // if (i != -1) {
        //     workoutItems[i] = data as WorkoutItem;
        //     console.log("here5");
            
        // } else {
        //     workoutItems.unshift(data as WorkoutItem);
        //     console.log("here6");
            
        // }
        workoutItems.unshift(data as WorkoutItem);
        console.log("here7");
        console.log(workoutItems);
    });
}
// /${workout.workoutId}/${sets}/${reps}/${date}
// {workoutId: workoutItem.workoutId, sets: workoutItem.sets, reps: workoutItem.reps, date: workoutItem.date}




