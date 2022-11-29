<script setup lang="ts">
    import { addWorkoutItem } from '../stores/workoutItem'
    import { DayOfWeek } from '../stores/day';

    const { day2 } = defineProps<{
        day2: Date;
    }>();
</script>

<template>
    <!-- <div>
        <h1>{{ day2.getDay() }}</h1>
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
    </div> -->
</template>



<style scoped>
    
</style>