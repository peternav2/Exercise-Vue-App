<template>
    <div class="box">
        <h1 class="title">Exercise Routine BuildeR</h1>
        <p class="subtitle"> Build your own workout routine by going to the Workouts section and addings a workout</p>
        <br>
        <p> From there You can view the routine in the Workout Week Tab</p>
        <br>
        

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
