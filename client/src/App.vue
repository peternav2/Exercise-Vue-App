
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'; // import the component

export default {
  name: 'App',
  data() {
    return {
      userName: '',
      fullName: '',
    };
    },
  components: {
    NavBar,
    RouterLink,
    RouterView,
  },
  methods: {
    saveLogin(userName: string, fullName: string) {
      this.userName = userName;
      this.fullName = fullName;
    }
  }
};
</script>
<template>
  <NavBar />
  <RouterView @saveLogin="saveLogin" :fullName="fullName" :userName="userName" />
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
