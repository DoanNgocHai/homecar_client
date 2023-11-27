<template>
    <div>
      <v-row class="px-8">
        <v-col class="py" cols="4" v-for="(item, index) in data" :key="index">
          <v-card
          :loading="loading"
          max-width="500"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <a @click="getCarInfo(item?.id)" >
          <v-img
            cover
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-item>
            <v-row>
              <v-col><v-btn size="small" class="button" color="#f5ec42">Chứng nhận Car</v-btn></v-col>
            </v-row>
            
            <v-card-title><h2 class="title-size">{{ item.price }} Triệu <span class="font-size">Chỉ từ 2.9 triệu/tháng</span></h2></v-card-title>

            <div>
              <v-row >
                <v-col cols="10" class="container-content">
                  <span class="content-style">{{ item.title }}</span>
                </v-col>
                <v-col cols="2">
                  <span class="me-1">
                    <v-icon
                      color="#000000"
                      icon="mdi-heart-outline"
                      size="large"
                    ></v-icon>
                  </span>
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
                      <span>{{ item.odo }} km</span>
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
                      <span>{{ item.gear.name }}</span>
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
                      <span>{{ item.brand_id }}</span>
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
                      <span>SX: {{ item.year }}</span>
                    </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </a>
        </v-card>
        </v-col>
      </v-row>
      <v-btn v-if="isLastPage" @click="loadMore">xem thêm</v-btn>
    </div>
</template>

<script lang="ts">
import { listCar } from '../../apis/user/car';
export default {
  data() {
    return {
      loading: false,
      selection: 1,
      data: [],
      perPage: 1,
      isLastPage: false
    };
  },
  created(){
    this.getData();
  },
  methods: {
    async getData() {
      const data = await listCar();
      if (data) {
        this.data = data?.data;
        this.isLastPage = this.perPage < data.last_page;
      }
    },
    async loadMore() {
      this.perPage++;
      const data = await listCar(this.perPage);
      if (data && this.isLastPage) {
        this.isLastPage = this.perPage < data.last_page;
        data?.data.forEach((item:any) => {
          this.data.push(item);
        });
        console.log( data?.data);
      }
    },
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    getCarInfo(id:string) {
      this.$router.push({ path: '/car-info/' + id });
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
  font-size: 22px;
  margin-bottom: 7px;
}

.container-content {
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-style {
  width: 10%;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: black !important;
  padding: 0px !important;
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
.icon {
  position: relative;
  top: -3px;
  margin-right: 5px;
}

.card {
  padding-bottom: 30px;
}

</style>
