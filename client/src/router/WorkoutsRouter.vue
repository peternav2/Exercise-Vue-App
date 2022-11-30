<template>
    <div>
        <h1>workout day</h1>

        <button @click.prevent="addWorkoutItem(workouts[i], 4, 12, DayOfWeek.Monday); load()"></button>
        <label>press to add</label>
        <button @click="i++"></button>
        <label>press to inc</label>
        <p>{{( workouts[0])}}</p>

    </div>
</template>

<script setup lang="ts">
import { getWorkouts, getWorkout, type Workout} from '../stores/workouts'
import { reactive, ref} from 'vue'
import { addWorkoutItem } from '../stores/workoutItem'
import { DayOfWeek } from '../stores/day';
import { load } from '../stores/workoutItem'

    let i = 0;
    const workouts = reactive([] as Workout[])
    getWorkouts().then( x => workouts.push(...x.workouts))


</script>

<style scoped>

</style>