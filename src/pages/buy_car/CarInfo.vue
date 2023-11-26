<template>
    <div class="mt-16">
      <v-row>
        <v-col cols="8">
          <v-card class="ml-5">
            <v-img
              cover
              height="500"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
          </v-card>
        </v-col>
        <v-col >
          <v-card
          :loading="loading"
          max-width="470"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-item>
            <v-row>
              <v-col><v-btn size="small" class="button" color="#f5ec42">Chứng nhận Car</v-btn></v-col>
            </v-row>
            <div class="container-content py-5">
                  <span class="content-style">{{ data.title }}</span>
            </div>
            <p>Giá niêm yết:</p>
            <v-card-title><h2 class="title-size">{{ data.price }} Triệu <span class="font-size">Chỉ từ 2.9 triệu/tháng</span></h2></v-card-title>
            <div class="box-action">
              <v-row class="justify-center">
                <v-col class="px-0 text-center"> <!-- Thêm lớp text-center để căn giữa theo chiều ngang -->
                  <span class="icon">
                    <v-icon
                      color="#081f4d"
                      icon="mdi-heart"
                      size="small"
                    ></v-icon>
                  </span>
                  <span>Yêu thích</span>
                </v-col>
                <v-col class="text-center"> <!-- Thêm lớp text-center để căn giữa theo chiều ngang -->
                  <span class="icon">
                    <v-icon
                      color="#081f4d"
                      icon="mdi-heart"
                      size="small"
                    ></v-icon>
                  </span>
                  <span>So sánh</span>
                </v-col>
                <v-col class="text-center"> <!-- Thêm lớp text-center để căn giữa theo chiều ngang -->
                  <span class="icon">
                    <v-icon
                      color="#081f4d"
                      icon="mdi-heart"
                      size="small"
                    ></v-icon>
                  </span>
                  <span>Chia sẽ</span>
                </v-col>
              </v-row>
            </div>
          </v-card-item>

          <v-row class="card">
              <v-col cols="12">
                <div class="box">
                  <v-row>
                    <v-col style="padding-bottom: 0px;">
                      <div class="odo">
                      <span class="icon">
                        <v-icon
                          color="#081f4d"
                          icon="mdi-car-speed-limiter"
                          size="small"
                        ></v-icon>
                      </span>
                      <span>{{ data.odo }} km</span>
                    </div>
                    </v-col>
                    <v-col style="padding-bottom: 0px;">
                      <div class="odo">
                      <span class="icon">
                        <v-icon
                          color="#081f4d"
                          icon="mdi-car-back"
                          size="small"
                        ></v-icon>
                      </span>
                      <span>5 chỗ</span>
                    </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col style="padding-bottom: 0px; padding-top: 5px;">
                      <div class="odo">
                      <span class="icon">
                        <v-icon
                          color="#081f4d"
                          icon="mdi-tune-vertical"
                          size="small"
                        ></v-icon>
                      </span>
                      <span>Số sàn {{ data.gear_id }} cấp</span>
                    </div>
                    </v-col>
                    <v-col style="padding-bottom: 0px; padding-top: 5px;">
                      <div class="odo">
                      <span class="icon">
                        <v-icon
                          color="#081f4d"
                          icon="mdi-water-boiler"
                          size="small"
                        ></v-icon>
                      </span>
                      <span>36.399 km</span>
                    </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col style="padding-bottom: 0px; padding-top: 5px;">
                      <div class="odo">
                      <span class="icon">
                        <v-icon
                          color="#081f4d"
                          icon="mdi-card-account-details-outline"
                          size="small"
                        ></v-icon>
                      </span>
                      <span>{{ data.brand_id }}</span>
                    </div>
                    </v-col>
                    <v-col style="padding-bottom: 0px; padding-top: 5px;">
                      <div class="odo">
                      <span class="icon">
                        <v-icon
                          color="#081f4d"
                          icon="mdi-map-marker"
                          size="small"
                        ></v-icon>
                      </span>
                      <span>SX: {{ data.year }}</span>
                    </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
        </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script lang="ts">
import { getCarInfo } from '../../apis/user/car.js';
export default {
  data() {
    return {
      loading: false,
      selection: 1,
      currentId: '',
      data: []
    };
  },
  mounted() {
    console.log(this.$route.params.carId);
  },
  created(){
    this.getData();
    
  },
  methods: {
    async getData() {
      const data = await getCarInfo(this.$route.params.carId);
      if (data) {
        this.data = data;
        console.log(this.data);
      }
    },
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },

    convertNumtoPrice(number: any) {
      console.log(number?.slice(0, -6));
      return number?.slice(0, 2);
    }
  }
}
</script>

<style lang="scss" scoped>
.font-size {
  font-size: .875rem;
  color: #2e54a5;
  font-weight: 400;
  font-size: 1rem;
}

.title-size {
  font-weight: 700;
  margin-bottom: 7px;
  color: #1c2c5e;
  font-family: Roboto Black,sans-serif;
  font-size: 1.875rem;
    line-height: 2.25rem;
}

.container-content {
  overflow: hidden;
  text-overflow: ellipsis;
  border-top-style: dashed;
  border-top-width: thin;
}

.content-style {
  width: 100%;
  text-overflow: ellipsis;
  color: black !important;
  padding: 0px !important;
  font-family: SFProDisplay-Bold,Arial,sans-serif!important;
    font-weight: 600;
    font-size: 1.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    line-height: 2rem;
}

.button {
  font-weight: 550 !important;
  margin: 10px 0px 10px 3px;
  box-shadow: none !important;
}

.box {
  border-radius: 15px;
  background-color: #f2f4fa;
  margin: 0px 15px 0px 15px;
  height: 110px;
  padding: 10px 10px 20px 20px;
  color: #081f4d;
}

.box-action {
  border-radius: 15px;
  background-color: #f2f4fa;
  height: 35px;
  padding: 10px 10px 20px 20px;
  color: #081f4d;
}
.box-action .v-row{

}
.icon {
  position: relative;
  top: -3px;
  margin-right: 5px;
}

.card {
  padding-bottom: 30px;
}

</style>
