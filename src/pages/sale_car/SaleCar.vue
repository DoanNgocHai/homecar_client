<template>
  <div class="bg-yellow pa-6 d-flex justify-space-around mb-6">
    <div>
      <v-img
        :width="400"
        aspect-ratio="16/9"
        cover
        src="../../../public/images/car-bg.png"
      ></v-img>
      <p class="font-weight-bold text-center text-h5">
        Bán xe của bạn với giá tốt nhất
      </p>
    </div>
    <div class="card card-compact w-1/3 bg-base-100 shadow-xl card-bordered">
      <div class="card-body">
        <h2 class="card-title">Bán xe</h2>
        <form action="">
          <div class="form-control w-full mb-2">
            <label class="label">
              <span class="label-text">Hãng xe</span>
            </label>
            <v-select
              v-model="selectedBrand"
              :items="brands"
              item-title="name"
              item-value="id"
              placeholder="Chọn hãng xe"
              variant="outlined"
              clearable
            ></v-select>
            <select class="select select-bordered" v-model="selectedBrand">
              <option disabled selected>Chọn hãng xe</option>
              <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
            </select>
          </div>
          <div class="form-control w-full mb-2">
            <label class="label">
              <span class="label-text">Dòng xe</span>
            </label>
            <select class="select select-bordered">
              <option disabled selected>Chọn dòng xe</option>
            </select>
          </div>
          <div class="form-control w-full mt-2">
            <button @click.prevent="submitInfo" class="btn">Gửi thông tin</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getBrands, BrandsResponse, Brand } from '../../apis/CarAttributes';

export default defineComponent({
  data() {
    return {
      brands: [] as Brand[],
      selectedBrand: null as number | null,
    };
  },
  methods: {
    async fetchBrands() {
      try {
        const response: BrandsResponse = await getBrands();
        this.brands = response.data;
      } catch (error) {
        console.error('Error fetching brands:', error.message);
      }
    },
    submitInfo() {
      // Handle form submission here
    },
  },
  computed: {
  },
  created() {
    this.fetchBrands();
  },
});
</script>

<style lang="scss" scoped>
</style>
