<template>
  <div class="_1car">
    <img src="https://cdn-v2.carpla.vn/360x/cardetail/4-1696573451.514.jpg" alt="">
    <div class="p-3">
      <p class="price">599 Triệu</p>
      <router-link to="/" class="title">Kia Seltos 1.4L TURBO PREMIUM 2021</router-link>
      <div class="car-info">
        <table class="table">
          <tr>
            <td>
              10.000 km
            </td>
            <td>7 chỗ</td>
          </tr>
          <tr>
            <td>Tự động 4 cấp</td>
            <td>Xe xăng</td>
          </tr>
          <tr>
            <td>Biển tỉnh</td>
            <td>CN Tấn Phú</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
._1car {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .15);
  margin: 10px;
}

._1car img {
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

._1car .price {
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0px;
}

._1car .title {
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 300;
}

._1car .title:hover {
  font-weight: 400;
}

._1car .car-info {
  background-color: #f2f4fa;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  padding: 10px;
  font-weight: 500;
}

._1car .car-info table {
  margin-bottom: 0;
}

._1car .car-info tr {
  background-color: #f2f4fa;
}

._1car .car-info td {}
</style>

<script>
export default {
  name: 'CarOverview',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>
