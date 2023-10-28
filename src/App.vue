<template>
  <div>
    <Navbar />
    <div class="container w-full mx-auto py-6">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<style scoped>
.container {
  min-height: 70vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
