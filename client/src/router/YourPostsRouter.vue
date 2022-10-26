<template>
    <div class="box">
        <p>this is in your posts</p>
        <h1 class="title">Your Posts</h1>
        <p class="subtitle">This is the page for your posts!</p>
        <br>
        <p>{{ userName }}</p>
        <p>{{ fullName }}</p>

        <form>
        <label>Workout Type</label>
        <input type="text" v-model="workoutType">

        <label>Date</label>
        <input type="date" v-model="date">

        <label>Picture</label>
        <input type="file" @change="submitForm" />

        <label>location</label>
        <input type="text">

        </form>
        <button class="button" @click="submitForm"> submit picture</button>
    </div>
    <div class="box">
        <p>your posts</p>
        <div v-for="post in posts" :key="randomKey">
            <p>{{ post.workoutType }}</p>
            <p>{{ post.date }}</p>
            <p>{{ post.location }}</p>
            <img :src=post.image alt="post picture">
            <img :src=imageFile alt="asdf">

        </div>
    </div>


</template>

<script>
// i could not figure out how to upload an image with typescript so i had to enable javascript
export default ({
    name: "YourPosts",
    props: ["userName", "fullName"],
    data() {
        return {
            imageFile: '',
            images: [],
            workoutType: '',
            workouts: [],
            date: '',
            dates: [],
            location: '',
            locations: [],
            posts: [],
        };
    },
    methods: {
        submitForm(e) {
            const files = e.target.files
            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => (this.imageFile = reader.result)
            this.images.push(this.imageFile)
            this.workouts.push(this.workoutType)
            this.dates.push(this.date)
            this.locations.push(this.location)
            this.posts.push({
                workoutType: this.workoutType,
                date: this.date,
                location: this.location,
                image: this.imageFile,
            })
            this.imageFile = ''
            this.workoutType = ''
            this.date = ''
            this.location = ''

        },
        randomKey() {
            return (new Date()).getTime() + Math.floor(Math.random() * 10000).toString()
        }
    },
});

</script>

<style scoped>
    img {
        width: 400px;
        height: 400px;
    }
</style>