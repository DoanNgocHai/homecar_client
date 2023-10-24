<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="200"
    >
      <b-carousel-slide
        class="carousel-image"
        img-src="https://cdn-v2.carpla.vn/1920x/cms/banner-1-1692008146.575.png"
      ></b-carousel-slide>
      <b-carousel-slide
        class="carousel-image"
        img-src="https://cdn-v2.carpla.vn/1920x/cms/microsoftteams-image-1-1686760833.973.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style>
/* .carousel-image {
  height: 300px;
} */
</style>

<script>
export default {
  name: 'CarouselComponent'
}
</script>
