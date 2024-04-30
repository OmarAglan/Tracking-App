<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <!--Main-->
  <v-tabs bg-color="indigo-darken-2" fixed-tabs>
    <v-tab to="/"> Home </v-tab>
    <v-divider class="ms-4" inset vertical></v-divider>
    <v-tab to="/register"> Register </v-tab>
    <v-divider class="ms-4" inset vertical></v-divider>
    <v-tab to="/login"> Login </v-tab>
    <v-divider class="ms-4" inset vertical></v-divider>
    <v-tab to="/about"> About </v-tab>
  </v-tabs>
  <RouterView />
</template>

<style scoped></style>
