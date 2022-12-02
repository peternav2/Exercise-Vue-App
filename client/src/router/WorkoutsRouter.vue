<template>
    <h1>workout day</h1>
    
     <div>
        <form @submit.prevent="submitItems">
            <label>Workout</label>
            <select v-model="workoutNumber"> 
                <option v-for="(w,i) in workouts" :key="i" :value="i">{{ w.name }}</option>
            </select> 
            <label> Sets:</label>
            <input type="text" required v-model="sets">
            <label> Reps:</label>
            <input type="text" required v-model="day">

            <label>Day Of The Week</label>
            <select v-model="dayofweek"> 
                <!-- <option v-for="(d,i) in workouts" :key="i" :value="DayOfWeek">Sunday</option> -->
                <option value="sunday">Monday</option>
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
    };

   

</script>

<style scoped>

</style>