<script setup lang="ts">
    import day, { addWorkoutToDay } from '../stores/day'

    const d = day
</script>

<template>
    <div>
        <h1>Workout day</h1>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="box" v-for="workout, i in day" :id="i.toString">
                        <h2 class="title is-4">{{ workout.workout }}</h2>
                        <p>{{ workout.sets }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
    
</style>