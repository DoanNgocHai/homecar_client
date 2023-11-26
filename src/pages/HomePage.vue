<template>
  <div>
    <Carousel />
    <div class="flex my-5">
      <BuyCar />
      <SaleCar />
    </div>
    <ListCar />
  </div>
</template>

<script setup lang="ts">
import BuyCar from '../components/home/BuyCar.vue';
import Carousel from '../components/home/Carousel.vue'
import SaleCar from '../components/home/SaleCar.vue';
import ListCar from '../components/home/ListCar.vue';

</script>
