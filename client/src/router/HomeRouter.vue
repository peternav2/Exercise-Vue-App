<template>
    <div class="box">
        <p>this is in home</p>
        <h1 class="title">Home</h1>
        <p class="subtitle">This is the home page for our exercise app!</p>
        <br>

        <p> {{ userName }}</p>
        <p>{{ fullName }}</p>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    props: ["userName", "fullName"],
    data() {
        return {};
    },
    methods: {
    },
});
</script>
