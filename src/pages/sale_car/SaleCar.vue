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
    <div class="card card-compact w-2/4 bg-base-100 shadow-xl card-bordered">
      <div class="card-body pa-10">
        <h2 class="card-title">Bán xe</h2>
        <form action="" class="form-control w-full">
          <div class="form-control w-full mb-2">
            <label class="label">
              <span class="label-text">Tên Xe / Title</span>
            </label>
            <v-text-field v-model="form.title" label="Nhập Tên/Title" variant="outlined"></v-text-field>
          </div>
          <div class="d-flex mb-1">
            <div class="form-control w-full mb-2 pr-5">
              <label class="label">
                <span class="label-text">Hãng xe</span>
              </label>
              <v-select
                v-model="form.selectedBrand"
                :items="brands"
                item-title="name"
                item-value="id"
                placeholder="Chọn hãng xe"
                variant="outlined"
                clearable
              ></v-select>
            </div>
            <div class="form-control w-full mb-2">
              <label class="label">
                <span class="label-text">Dòng xe</span>
              </label>
              <v-select
                v-model="form.selectedFigure"
                :items="figures"
                item-title="name"
                item-value="id"
                placeholder="Chọn dòng xe"
                variant="outlined"
                clearable
              ></v-select>
            </div>  
          </div>
          
          <div class="d-flex mb-1">
            <div class="form-control w-full mb-2 pr-5">
              <label class="label">
                <span class="label-text">Năm sản xuất</span>
              </label>
              <v-select
                v-model="form.selectedYear"
                :items="years"
                placeholder="Chọn năm sản xuất"
                variant="outlined"
                clearable
              ></v-select>
            </div>
            <div class="form-control w-full mb-2">
              <label class="label">
                <span class="label-text">ODO</span>
              </label>
              <v-text-field v-model="form.odo" suffix="Km" label="Nhập số km đã chạy" variant="outlined"></v-text-field>
            </div>  
          </div>
          <div class="d-flex mb-1">
            <div class="form-control w-full mb-2 pr-5">
              <label class="label">
                <span class="label-text">Hộp số</span>
              </label>
              <v-select
                v-model="form.selectedGear"
                :items="gears"
                item-title="name"
                item-value="id"
                placeholder="Chọn hộp số"
                variant="outlined"
                clearable
              ></v-select>
            </div>
            <div class="form-control w-full mb-2">
              <label class="label">
                <span class="label-text">Màu sắc</span>
              </label>
              <v-select
                v-model="form.selectedColor"
                :items="colors"
                item-title="name"
                item-value="id"
                placeholder="Chọn màu sắc"
                variant="outlined"
                clearable
              ></v-select>
            </div>  
          </div>
          <div class="d-flex mb-1">
            <div class="form-control w-full mb-2 pr-5">
              <label class="label">
                <span class="label-text">Giá cả</span>
              </label>
              <v-text-field
                v-model="form.price"
                label="Nhập số tiền muốn bán"
                type="number"
                prefix="Vnđ"
                variant="outlined"
              ></v-text-field>
            </div>
            <div class="form-control w-full mb-2">
              <label class="label">
                <span class="label-text">Thông tin thêm</span>
              </label>
              <v-text-field
                v-model="form.description"
                label="Nhập thông tin"
                variant="outlined"
              ></v-text-field>
            </div>  
          </div>
          <div class="form-control w-full mt-2">
            <button @click.prevent="submitInfo" class="btn">Gửi thông tin</button>
          </div>
        </form>
      </div>
    </div>
      <div class="product-card">
    <img alt="Product image" class="product-image">
    <div class="product-info">
      <h2 class="product-name">product.name </h2>
      <div class="product-price">
        <span class="price">product.price</span>
        <span class="monthly-payment">Chỉ từ produc</span>
      </div>
      <div class="product-status">product.status </div>
      <div class="product-features">
        <span class="feature">feature</span>
      </div>
      <div class="product-id">
        <span class="product-id">product.id </span>
        <button class="compare-button">So sánh</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userSaleCar, CreateCarDto } from '../../apis/user/car'
import { useRouter } from 'vue-router';
import { useToast } from "vue-toastification";

import {
  getBrands,
  BrandsResponse,
  Brand,

  Figures,
  FiguresResponse,
  getFigures,

  Gears,
  GearsResponse,
  getGears,

  Colors,
  ColorsResponse,
  getColors,

} from '../../apis/taxonomy';

export default defineComponent({
  setup() {
    const router = useRouter();
    const toast = useToast();

    return {
      router,
      toast
    }
  },
  data() {
    return {
      brands: [] as Brand[],
      // selectedBrand: null as number | null,

      figures: [] as Figures[],
      // selectedFigure: null as number | null,

      years: [
        '2009' , '2010' ,'2011' , '2012' ,'2013' , '2014' ,'2015' , '2016' , '2017' , '2018' ,'2019' , '2020' ,'2021' , '2022' ,'2023'
      ],
      // selectedYear: null as string | null,
      
      gears: [] as Gears[],
      // selectedGears: null as number | null,

      colors: [] as Colors[],
      // selectedColor: null as number | null,
      form: {
        title:'',
        selectedBrand: null as string | null,
        selectedFigure: null as string | null,
        selectedYear: null as string | null,
        selectedGear: null as string | null,
        selectedColor: null as string | null,
        odo: '',
        price: '',
        description:''
      },
      
    };

  },
  
  methods: {
    async fetchBrands() {
      try {
        const response: BrandsResponse = await getBrands();
        console.log(response.data.data);
        
        this.brands = response.data.data;
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async fetchFigures() {
      try {
        const response: FiguresResponse = await getFigures();
        console.log(response.data.data);
        this.figures = response.data.data;
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async fetchColors() {
      try {
        const response: ColorsResponse = await getColors();
        console.log(response.data.data);
        this.colors = response.data.data;
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async fetchGears() {
      try {
        const response: GearsResponse = await getGears();
        console.log(response.data.data);
        this.gears = response.data.data;
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async submitInfo() {
      const { title, selectedBrand, selectedFigure, selectedYear, selectedGear, selectedColor, odo, price, description } = this.form;
      
      const createCarDto: CreateCarDto = {
        title,
        brand_id: selectedBrand || '',
        figure_id: selectedFigure || '',
        year: selectedYear || '',
        odo,
        gear_id: selectedGear || '',
        color_id: selectedColor || '',
        price: +price,
        description,
      };

      try {
        const data = await userSaleCar(createCarDto);
        if (data) {
          // this.router.push('/account/history-sale-car');
          this.toast.success("Thêm mới xe thành công, vui lòng đợi xét duyệt!!");
        }
      } catch (error) {
        // Xử lý lỗi một cách thích hợp, ví dụ in ra console
        this.toast.success("Thêm mới xe thất bại!!");
        console.error('Error submitting car info:', error);
      }
    },
  },
  computed: {
  },
  created() {
    this.fetchBrands();
    this.fetchFigures();
    this.fetchGears();
    this.fetchColors();

  },
});
</script>

<style lang="scss" scoped>
</style>
../../apis/CarTaxonomy