<template>
    <div class="box">
        <p>this is in your posts</p>
        <h1 class="title">Your Posts</h1>
        <p class="subtitle">This is the page for your posts!</p>
        <form>
        <label>Workout Type</label>
        <input type="text" v-model="post.workoutType">

        <label>Date</label>
        <input type="date" v-model="post.date">

        <label>Picture</label>
        <input type="file" ref="imageFile" @change="fileRead" />

        <label>location</label>
        <input type="text" v-model="post.location">

        </form>
        <button class="button" @click="submitForm"> submit picture</button>
    </div>
    <div class="box">
        <p>your posts</p>
        <div class="card" v-for="post, x in posts" :key="x">
            <div class="workoutImage">
                <figure class="image workoutImage">
                    <img :src=post.image alt="post picture">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                
                    <div class="media-content">
                        <p class="title is-4">{{user.fullName}}</p>
                        <p class="subtitle is-6">@{{user.userName}}</p>
                    </div>
                </div>
                <div class="content">
                    <h3>Location: {{post.location}}</h3>
                    <p>{{post.workoutType}}</p>
                    <br>
                    <p>{{post.date}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="box">
    <p>{{user.fullName}}</p>
    <p>{{user.userName}}</p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "../stores/session"
import type Post from "../stores/post"

        const post = ref({} as Post)
        // const imageFile = ref("");
        const user = useUserStore();
        const posts = ref([] as Post[]);

        //this method reads the file on file change but this poses a problem when 
        //attempting to post two images in a row due to the @change
        //solution idea to empty image form after submit
        const fileRead = (e: any) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                post.value.image = reader.result as string;
            };
        };
        //make a function that will submit the form with typesafety
        const submitForm = () => {
            posts.value.push(post.value);
            post.value = {};
        };


</script>

<style scoped>
    .workoutImage {
        width: 480px;
        height: 640px;

        /* center this div */
        margin: 0 auto;
    }
</style>