<template>
    <div class="box">
        <p>this is in home</p>
        <h1 class="title">Home</h1>
        <p class="subtitle">This is the home page for our exercise app!</p>
        <br>
        <div v-for="workout in workouts" :key="workout.workoutId">
            <p>{{ workout.description }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from "vue";
import { getWorkout, getWorkouts, type Workout} from "@/stores/workouts";

const workouts = reactive([] as Workout[]);
getWorkouts().then( x => workouts.push(...x.workouts))

// export default defineComponent({
//     name: "Home",
// });
</script>
