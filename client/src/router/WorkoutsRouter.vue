<template>
    <div>
        <h1>workout day</h1>

        <button @click.prevent="addWorkoutToDay(workouts[0], 4, 12)"></button>
        <p>{{( workouts[0])}}</p>
    </div>
</template>

<script setup lang="ts">
import { getWorkouts, getWorkout, type Workout} from '../stores/workouts'
import { reactive, ref} from 'vue'
import day, { addWorkoutToDay } from '../stores/day'

    const workouts = reactive([] as Workout[])
    getWorkouts().then( x => workouts.push(...x.workouts))

    // function addWorkoutToDay(workout: Workout) {
    //     addWorkoutToDay(workout)
    // }
</script>

<style scoped>

</style>