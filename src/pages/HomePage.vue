<template>
  <div>
    <carousel />
    <b-container>
      <b-row class="mt-4">
        <b-col cols="8">
          <div class="box-container">
            <div class="find-car">
              <div class="d-flex align-items-center justify-content-between">
                <strong>Mua xe</strong>
                <router-link to="/">Xem tất cả</router-link>
              </div>
            </div>
            <div class="search-car">
              <div class="icon-search">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
                </svg>
              </div>
              <input class="box-search" type="text" placeholder="Tìm kiếm bằng nhãn hiệu, mẫu xe hoặc từ khoá">
            </div>
            <div class="suggest-price">
              <div class="list-prices">
                <router-link class="price" to="/">Dưới 300tr</router-link>
                <router-link class="price" to="/">Từ 300tr - 500tr</router-link>
                <router-link class="price" to="/">Từ 500tr - 700tr</router-link>
                <router-link class="price" to="/">Trên 700tr</router-link>
                <router-link class="price help-me" to="/">Giúp tôi chọn xe</router-link>
              </div>
            </div>
            <div class="car-by-brands">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <strong>Xem theo hãng / kiểu dáng</strong>
                <router-link to="/">Tất cả</router-link>
              </div>
              <div class="list-brands">
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
                <div class="_1brand">
                  <img src="https://cdn-v2.carpla.vn/x36/cms/honda-1689061995.100.png" alt="honda">
                  <p>Honda</p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          commodi, nisi, unde consequuntur cum adipisci magni voluptatem
          perferendis molestias placeat vel eum sint rem, architecto ex
          perspiciatis quidem. Libero, ab.
        </b-col>
      </b-row>

    </b-container>
    <div class="car-outstanding">
      <b-container>
        <b-row class="my-4">
          <b-col cols="12">
            <h3 class="text-center my-4 py-4">Khám phá xe nổi bật</h3>
            <div class="list-cars pb-4">
              <car-overview />
              <car-overview />
              <car-overview />
              <car-overview />
              <car-overview />
              <car-overview />
            </div>
            <div class="text-center mb-4 view-more">
              <b-button pill>Xem thêm</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style>
.box-container {
  background-color: #1c2c5e;
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .15);
}

.find-car {
  color: white;
  font-size: 20px;
  padding: 20px 20px 10px 20px;
}

.search-car {
  background-color: white;
  border-radius: calc(17px + 10px);
  display: flex;
  padding: 10px;
  margin: 5px 20px 20px 20px;
}

.search-car .icon-search {
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 30px;
  background-color: #fd0;
  border-radius: 50%;
  margin-right: 5px;
}

.search-car .icon-search svg {}

.search-car .box-search {
  width: 100%;
  border: none;
}

.search-car .box-search:focus-visible {
  border: none;
}

.find-car a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.suggest-price {
  display: flex;
  margin: 0px 20px 40px 20px;
}

.suggest-price .list-prices {}

.suggest-price .list-prices .price {
  color: #e5e7eb;
  text-decoration: none;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 20px;
  margin-right: 10px;
}

.suggest-price .list-prices .price:hover {
  border-color: white;
}

.suggest-price .list-prices .price.help-me {
  color: #1c2c5e;
  background-color: #fd0;
}

.car-by-brands {
  background-color: white;
  padding: 20px 20px 0px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.car-by-brands strong {}

.car-by-brands a {
  text-decoration: none;
  font-size: 14px;
  color: #000;
}

.car-by-brands .list-brands {
  display: flex;
  flex-wrap: wrap;
}

.car-by-brands .list-brands ._1brand {
  text-align: center;
  width: calc(100%/7);
  cursor: pointer;
  margin-bottom: 20px;
}

.car-by-brands .list-brands ._1brand:hover p {
  font-weight: 500;
}

.car-by-brands .list-brands ._1brand img {}

.car-by-brands .list-brands ._1brand p {}

.car-outstanding {
  background-color: #f3f4f6;
}

.list-cars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-cars>div {
  width: calc((100% - 60px)/3);
}

.view-more button {
  background-color: #fd0;
  border: none;
  color: #1c2c5e;
  font-weight: 500;
  font-size: 18px;
}
</style>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import CarOverview from "@/components/CarOverview.vue";
export default {
  name: "HomePage",
  components: {
    carousel: CarouselComponent,
    'car-overview': CarOverview,
  },
};
</script>

<style>
</style>
