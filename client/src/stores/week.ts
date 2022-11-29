import { reactive, ref, watch } from 'vue'
import type { Workout } from "./workouts"

export interface WorkoutItem {
    sets: number;
    reps: number;
}

const workoutWeek = reactive([] as WorkoutItem[])// why is this unknown as WorkoutItem?

