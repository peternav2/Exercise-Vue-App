<template>
    <div>
        <h1>workout day</h1>

        <button @click.prevent="addWorkoutItem(workouts[i], 4, 12,'monday'); load();"></button>
        <label>press to add</label>
        <button @click="i++"></button>
        <label>press to inc</label>
        <p>{{ DayOfWeek.Monday }}</p>

    </div>


     <div>
        <form @submit.prevent="submitItems">
        <label> Sets:</label>
        <input type="text" required v-model="sets">
        <label> Reps:</label>
        <input type="text" required v-model="reps">
        <label> Day of the week:</label>
        <input type="text" required v-model="day">
        <label> Workout Number:</label>
        <input type="text" required v-model="workoutNumber">
    </form>
    <button @click="submitItems" class="button is-danger"> submit items</button>
    </div> 
</template>

<script setup lang="ts">
import { getWorkouts, getWorkout, type Workout} from '../stores/workouts'
import { reactive, ref} from 'vue'
import { addWorkoutItem } from '../stores/workoutItem'
import { DayOfWeek } from '../stores/day';
import { load } from '../stores/workoutItem'

    const workouts = reactive([] as Workout[])
    getWorkouts().then( x => workouts.push(...x.workouts))
    let i = 0;


    const sets = ref("");
    const reps = ref("");
    const day = ref("");
    const workoutNumber = ref("");

    const submitItems = () => {
      addWorkoutItem(workouts[+workoutNumber.value], +sets.value, +reps.value, day.value);
      load();
    };

</script>

<style scoped>

</style>