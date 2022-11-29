<template>
    <div>
        <h1>workout day</h1>

        <button @click.prevent="addWorkoutItem(workouts[0], 4, 12, DayOfWeek.Monday)"></button>
        <p>{{( workouts[0])}}</p>
    </div>
</template>

<script setup lang="ts">
import { getWorkouts, getWorkout, type Workout} from '../stores/workouts'
import { reactive, ref} from 'vue'
import day, { addWorkoutItem } from '../stores/workoutItem'
import { DayOfWeek } from '../stores/day';


    const workouts = reactive([] as Workout[])
    getWorkouts().then( x => workouts.push(...x.workouts))

    // function addWorkoutToDay(workout: Workout) {
    //     addWorkoutToDay(workout)
    // }
</script>

<style scoped>

</style>