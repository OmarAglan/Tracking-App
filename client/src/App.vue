<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  #app {
    flex-direction: row;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 1rem;
  /* Example: add padding */
}
</style>
