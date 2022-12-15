<template>
    <h1>workout day</h1>
    <div>
        <h1>Search For a Workout</h1>
        <section>
            <p class="content"><b>Selected:</b> {{ selected }}</p>
            <o-field label="Find a JS framework">
                <o-autocomplete
                    v-model="name"
                    rounded
                    expanded
                    placeholder="e.g. jQuery"
                    icon="search"
                    clearable
                    :data="data"
                    @select="(option:null) => (selected = option)"
                >
                    <template #empty>No results found</template>
                 </o-autocomplete>
            </o-field>
        </section>
    </div>
    <div>
        <form @submit.prevent="submitItems">

            <label>Workout</label>
            <select v-model="workoutNumber"> 
                <option v-for="(w,i) in workouts" :key="i" :value="i">{{ w.name }}</option>
            </select> 
            <label> Sets:</label>
            <input type="text" required v-model="sets">
            <label> Reps:</label>
            <input type="text" required v-model="reps">

            <label>Day Of The Week</label>
            <select v-model="dayofweek"> 
                <!-- <option v-for="(d,i) in workouts" :key="i" :value="DayOfWeek">Sunday</option> -->
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
    import { getWorkouts, getWorkout, getFilteredWorkouts, type Workout} from '../stores/workouts'
    import { reactive, ref, defineComponent, computed} from 'vue'
    import { addWorkoutItem } from '../stores/workoutItem'
    import { DayOfWeek } from '../stores/day';
    import { load } from '../stores/workoutItem'

    const name = ref("" as string);
    const selected = ref(null);
    const data = ref([] as string[]);

  //this was the function I was going to use to map the workouts to the data array
    function getFiltered() {
        return getFilteredWorkouts(name.value).then(x => data.value.push(...x.workouts.map(x => x.name)));
    };





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