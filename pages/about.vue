<template>
<div id="box">
    <div class="image">
        <img src="http://s18.postimg.org/il7hbk7i1/image.png" />
    </div>
    <div class="text">
        <a class="mylink">linkk</a>
    </div>
</div>

 
</template>
<script>

import WhoWatching from "../components/main/WhoWatching.vue";
export default {
  components: {  WhoWatching },
  data: () => ({
     
      rating: 4,
    }),
};


</script>

<style lang="scss" scoped>
.image img {
   display:block;
   width: 250px;
   height: 250px;
}

.image img {        
    -moz-transform:scale(1);
    -webkit-transform:scale(1);
    -o-transform:scale(1);
    transform:scale(1);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}

#box:hover .image img {    
    cursor: pointer;
    -moz-transform:scale(1.5);
    -webkit-transform:scale(1.5);
    -o-transform:scale(1.5);
    transform:scale(1.5);
}
</style>