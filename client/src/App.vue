<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <v-tabs bg-color="indigo-darken-2" fixed-tabs>
    <v-tab to="/"> Home </v-tab>
    <v-tab to="/register"> Register </v-tab>
    <v-tab to="/about"> About </v-tab>
  </v-tabs>
  <RouterView />
</template>

<style scoped></style>
