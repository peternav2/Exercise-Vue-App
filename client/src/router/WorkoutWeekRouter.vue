<script setup lang="ts">
    import { addWorkoutItem } from '../stores/workoutItem'
    import type WorkoutItem  from '../stores/workoutItem'
    import { DayOfWeek } from '../stores/day';
    import { getWorkouts, getWorkout, type Workout} from '../stores/workouts'
    import  workoutsItems, { load }  from '../stores/workoutItem'
    import { computed, reactive } from 'vue';
    const list = workoutsItems;

    const Monday = computed(() => list.filter(x => x.day === DayOfWeek.Monday));
    const Tuesday = computed(() => list.filter(x => x.day === DayOfWeek.Tuesday));
    const Wednesday = computed(() => list.filter(x => x.day === DayOfWeek.Wednesday));
    const Thursday = computed(() => list.filter(x => x.day === DayOfWeek.Thursday));
    const Friday = computed(() => list.filter(x => x.day === DayOfWeek.Friday));
    const Saturday = computed(() => list.filter(x => x.day === DayOfWeek.Saturday));
    const Sunday = computed(() => list.filter(x => x.day === DayOfWeek.Sunday)); 



</script>



<template>
    <div>
        <h1>Workout Week</h1>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Monday</h2>
                        <p v-for="item in Monday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                        </p>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Tuesday</h2>
                        <p v-for="item in Tuesday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                        </p>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Wednesday</h2>
                        <p v-for="item in Wednesday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Thursday</h2>
                        <p v-for="item in Thursday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                        </p>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Friday</h2>
                        <p v-for="item in Friday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                            
                        </p>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Saturday</h2>
                        <p v-for="item in Saturday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-third">
                    <div class="box">
                        <h2 class="title is-4">Sunday</h2>
                        <p v-for="item in Sunday" :key="item.workout.workoutId">
                            <hr>
                            {{ item.workout.name }}
                            <br>
                            Sets: {{ item.sets }}
                            <br>
                            Reps: {{ item.reps }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>