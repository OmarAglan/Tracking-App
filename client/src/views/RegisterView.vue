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
  <!-- Register -->
  <div>
    <v-img class="mx-auto my-6" max-width="228" src="../assets/images/register.jpg" alt="Register">

    </v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">User Name</div>

      <v-text-field density="compact" placeholder="User Name" prepend-inner-icon="mdi-account-outline"
        variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will
          be temporarily locked for three hours. If you must login now, you can
          also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
  <!-- This is a reference snippet of code from client\src\views\RegisterView.vue: -->
  <v-form v-model="valid">
    <v-container>
      <v-row align="center" style="height: 500px" no-gutters>
        <v-col>
          <v-text-field v-model="username" :counter="10" :rules="nameRules" label="User Name" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="password" :counter="10" :rules="passwordRules" label="Password"
            required></v-text-field>
        </v-col>
      </v-row>
      <v-btn block variant="tonal">Register</v-btn>
    </v-container>

  </v-form>
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
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.register-form {
  border: 1.5px solid #ddd;
  padding: 30px;
  border-radius: 5px;
  display: flex;

  flex-direction: column;

}

.form-group {
  margin-bottom: 15px;
  display: flex;

  align-items: center;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  flex: 0 0 30%;

}

button {
  background-color: #4CAF50;

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
}


@media (max-width: 768px) {
  .register-form {
    width: 80%;

  }

  .form-group label {
    flex: 0 0 25%;

  }
}
</style>