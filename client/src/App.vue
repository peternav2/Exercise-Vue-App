<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from "./stores/session"
import NavBar from './components/NavBar.vue'; // import the component

export default defineComponent({
    name: 'App',
    components: {
        NavBar,
        RouterLink,
        RouterView
    },
    setup() {
        const user = useUserStore();
        return {
          user
        }
    }
});
</script>

<template>
  <NavBar />
  <RouterView/>
  <div class="box">
    @{{user.userName}}
    <br>
    {{user.fullName}}
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
