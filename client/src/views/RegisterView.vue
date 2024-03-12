<script setup>
import AuthenticationService from '@/services/AuthenticationService';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

async function register() {
  const response = await AuthenticationService.register({
    username: username.value,
    password: password.value,
  });
  // Handle registration response here (e.g., success message, redirect)
  console.log(response.data);
}
</script>
<template>
    <div>
        <h1>Register</h1>
        <br>
        <input type="username" name="username" v-model="username" placeholder="Username">
        <br>
        <input type="password" name="password" v-model="password" placeholder="Password">
        <br>
        <button @click="register">Submit</button>
    </div>
</template>
<style scoped>

</style>