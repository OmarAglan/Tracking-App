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
<div class="register-container">
  <div class="register-form">
    <h1>Register</h1>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" v-model="username" placeholder="Username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="password" placeholder="Password">
    </div>
    <div class="terms">
      <input type="checkbox" id="terms" name="terms">
      <label for="terms"> By Registering You Accept the terms</label>
    </div>
    <button type="button" @click="register">Register</button>
  </div>
  <div class="photo-holder">

  </div>
</div>
</template>

<style scoped>
.register-container {
  display: flex; /* Make the container elements horizontal */
}
.register-form {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.terms {
  margin-bottom: 15px;
}

.terms label {
  font-size: 0.8rem;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}
.photo-holder {
  width: 150px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  border: 1px dashed #ccc; /* Add a dashed border for placeholder effect */
  margin-left: 20px; /* Add spacing between form and photo holder */
  text-align: center; /* Center content within the holder */
  line-height: 150px; /* Center text vertically within the holder */
}

.photo-holder:before {
  content: "Add Photo"; /* Text displayed inside the photo holder */
  color: #ddd;
  font-size: 0.8rem;
}
</style>