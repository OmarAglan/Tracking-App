<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <v-app>
    <v-app-bar app color="indigo-darken-2" dark>
      <v-toolbar
        image= "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light-atom.png"
        dark
        prominent
        elevation="5"
      >
        <v-toolbar-title>Tasky</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tabs>
          <v-tab to="/"> Home </v-tab>
          <v-tab to="/register"> Register </v-tab>
          <v-tab to="/login"> Login </v-tab>
          <v-tab to="/about"> About </v-tab>
        </v-tabs>
      </v-toolbar>

    </v-app-bar>
    <v-main>
      <v-container class="mt-5">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  background-color: #4772c1;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
