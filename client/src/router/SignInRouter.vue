
<template>
  <div class="box">
    <form @submit.prevent="submitItems">
        <label> Username:</label>
        <input type="text" required v-model="userName">
        <label> Full Name:</label>
        <input type="text" required v-model="fullName">
    </form>
    <button @click="submitItems" class="button is-danger"> submit items</button>
  </div>

</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "../stores/session"

export default {
  name: "SignIn",
  setup() {
    const userName = ref("");
    const fullName = ref("");
    const user = useUserStore();
    const submitItems = () => {
      user.setNames(userName.value, fullName.value);
    };
    return {
      userName,
      fullName,
      submitItems,
    };
  },
}
// export default defineComponent({
//   name: "SignIn",
//   data() {

//     return {
//       userName: ref(''),
//       fullName: ref(''),
    
//     };
//   },
//   methods: {
//     submitItems() {
//       console.log("submitted");
//       useUserStore.
//     },
//     handleSubmit() {
//       console.log("submit handled");
//     },
//   },
// });
</script>
<style>
form {
  max-width: 400px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  width: 100%;
  padding: 10px 6px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.8em;
  color: #555;
}

</style>
