<script setup lang="ts">
    import WorkoutItem, { addWorkoutItem } from '../stores/workoutItem'
    import { DayOfWeek } from '../stores/day';
    import { getWorkouts, getWorkout, type Workout} from '../stores/workouts'
    import  workoutsItems, { load }  from '../stores/workoutItem'
    const list = workoutsItems;
</script>

<template>
    <div>
        <h1>Workout day</h1>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="box" v-for="workoutItem, i in list" :id="i.toString()">
                        <h2 class="title is-4">{{ workoutItem.workout.name }}</h2>
                        <p>{{ workoutItem.sets }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
    
</style>