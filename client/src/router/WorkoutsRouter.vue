<template>
    <div>
        <h1>workout day</h1>

        <button @click.prevent="addWorkoutItem(workouts[i], 4, 12, DayOfWeek.Monday ); load();"></button>
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
        <input type="text" required v-model="day">
        <label> Workout Number:</label>
        <input type="text" required v-model="workoutNumber">
        <label>Day Of The Week</label>
        <select v-model="dayofweek"> 
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
        </select>
    </form>
    <button @click="submitItems" class="button is-danger"> submit items</button>
    <hr>
    <p>{{ dayofweek }}</p>
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
    const dayofweek = ref("");

    const submitItems = () => {
      addWorkoutItem(workouts[+workoutNumber.value], +sets.value, +reps.value, dayofweek.value);
      load();
    };

   

</script>

<style scoped>

</style>