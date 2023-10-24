<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    'navbar': NavbarComponent,
  }
}
</script>

<style>
#app {
  
}
</style>
