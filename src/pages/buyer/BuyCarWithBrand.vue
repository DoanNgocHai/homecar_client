<template>
  <div>
    <h1>BuyCar with brand: {{ brand }}</h1>
    <p>id: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'BuyCarWithBrand',
  data: () => {
    return {
      id: 1,
      brand: ''
    }
  },
  created() {
    this.brand = this.$route.params.brand
  }
}
</script>
