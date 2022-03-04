<template>
  <div>
    <div class="text__test">HAI</div>
    <div class="text__test">HAI</div>
    <div class="text__test">HAI</div>
    <div class="text__test">HAI</div>
     <div class="text__test">HAI</div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          text: "image 1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },
        {
          text: "image 1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },
        {
          text: "image 1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.text__image {
  position: absolute;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
}

.text__test {
  color: black;
  position: relative;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 15rem;
  font-weight: 300;
  line-height: 15rem;
}
</style>