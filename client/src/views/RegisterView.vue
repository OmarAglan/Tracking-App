<script setup>
/**
 * Imports the AuthenticationService for handling user authentication.
 * Imports ref from Vue for using reactive variables.
*/
import AuthenticationService from '@/services/AuthenticationService';
import { ref } from 'vue';

/**
 * username: Reactive reference to the username input.
 * password: Reactive reference to the password input. 
 * error: Reactive reference to hold any error message.
*/
const username = ref('');
const password = ref('');
const error = ref(null);

/**
 * Registers a new user by calling the AuthenticationService.
 * Handles the response and any errors.
*/
async function register() {
  try {
    const response = await AuthenticationService.register({
      username: username.value,
      password: password.value,
    });
    // Handle successful registration (e.g., redirect)
    console.log('Registration successful!', response.data);
  } catch (err) {
    // Handle error
    error.value = err.response.data.error;
    /**
    * Sets a timeout to clear the error message after 6 seconds.
    * This avoids the error persisting on screen indefinitely after being handled.
    */
    setTimeout(() => {
      error.value = null;
    }, 6000); // hide after 6 seconds
  }
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
      <p v-if="error">{{ error }}</p>
      <button type="button" @click="register">Register</button>
    </div>
  </div>
</template>

<style scoped>
/* Base styles */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Fills viewport height */
}

.register-form {
  border: 1.5px solid #ddd;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  /* Use flexbox for responsive layout */
  flex-direction: column;
  /* Stack elements vertically */
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  /* Use flexbox for label & input alignment */
  align-items: center;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  flex: 0 0 30%;
  /* Fixed width for label */
}

.terms {
  margin-bottom: 15px;
}

.terms label {
  font-size: 0.8rem;
}

button {
  background-color: #4CAF50;
  /* Green */
  border: springgreen;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  /* Button takes full width */
}

/* Responsive Styles (for screens less than 768px wide) */
@media (max-width: 768px) {
  .register-form {
    width: 80%;
    /* Adjust form width for smaller screens */
  }

  .form-group label {
    flex: 0 0 25%;
    /* Adjust label width for smaller screens */
  }
}
</style>