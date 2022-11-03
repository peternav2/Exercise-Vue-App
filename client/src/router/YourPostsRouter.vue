<template>
    <div class="box">
        <p>this is in your posts</p>
        <h1 class="title">Your Posts</h1>
        <p class="subtitle">This is the page for your posts!</p>
        <form>
        <label>Workout Type</label>
        <input type="text" v-model="workoutType">

        <label>Date</label>
        <input type="date" v-model="date">

        <label>Picture</label>
        <input type="file" ref="imageFile" @change="fileRead" />

        <label>location</label>
        <input type="text" v-model="location">

        </form>
        <button class="button" @click="submitForm"> submit picture</button>
    </div>
    <div class="box">
        <p>your posts</p>
        <!-- <img :src=imageFile alt=""> -->
        <!-- <div v-for="post in posts" :key="randomKey">
            <p>{{ userName }}</p>
            <p>{{ fullName }}</p>
            <p>{{ post.workoutType }}</p>
            <p>{{ post.date }}</p>
            <p>{{ post.location }}</p>
            <img :src=post.image alt="post picture">
        </div> -->
        <div class="card" v-for="post, x in posts" :key="x">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src=post.image alt="post picture">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                
                    <div class="media-content">
                        <p class="title is-4">{{}}</p>
                        <p class="subtitle is-6">@{userfullname}</p>
                    </div>
                </div>
                <div class="content">
                    <h3>Location: {{post.location}}</h3>
                    <p>{{post.workoutType}}</p>
                    <br>
                    <p>{{date}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="box">
    <p>{{user.fullName}}</p>
    <p>{{user.userName}}</p>
  </div>
</template>

<script lang="ts">
// i could not figure out how to upload an image with typescript so i had to enable javascript

import { defineComponent, ref } from "vue";
import { useUserStore } from "../stores/session"
import type Post from "../stores/post"
export default defineComponent({
    name: "YourPosts",
    setup() {
        const workoutType = ref("" as string);
        const date = ref("");
        const imageFile = ref("");
        const location = ref("");
        const user = useUserStore();
        const posts = ref([] as Post[]);
        const fileRead = (e: any) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                imageFile.value = reader.result as string;
            };
        };
        //make a function that will submit the form with typesafety
        const submitForm = () => {
            const post:Post = {
                id:0,
                workoutType: workoutType.value,
                date: date.value,
                image: imageFile.value,
                location: location.value,
            };
            posts.value.push(post);
            console.log(posts.value);
        };

        return {
            workoutType,
            date,
            imageFile,
            location,
            submitForm,
            fileRead,
            posts,
            user
        };

    },
});
// export default ({
//     name: "YourPosts",
//     data() {
//         return {
//             imageFile: '',
//             workoutType: '',
//             date: '',
//             location: '',
//             posts: [],
//         };
//     },
//     methods: {
//         fileRead() {
//             const file = this.$refs.imageFile.files[0];
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 this.imageFile = e.target.result;
//             };
//             reader.readAsDataURL(file);
//         },
//         submitForm(e) {
//             // imageFile = this.$refs.myFile.files[0]
//             // if(!file || file.type.indexOf('image/') !== 0) return
//             // const reader = new FileReader()
//             // reader.readAsDataURL(files[0])
//             // reader.onload = () => (this.imageFile = reader.result)
//             this.posts.push({
//                 workoutType: this.workoutType,
//                 date: this.date,
//                 location: this.location,
//                 image: this.imageFile,
//             })
//             this.imageFile = ''
//             this.workoutType = ''
//             this.date = ''
//             this.location = ''

//         },
//         randomKey() {
//             return (new Date()).getTime() + Math.floor(Math.random() * 10000).toString()
//         }
//     },
// });

</script>

<style scoped>
    img {
        width: 400px;
        height: 400px;
    }
</style>