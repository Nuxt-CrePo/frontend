<template>
  <div id="banner">
    <div class="about">
      <vue-typed-js
        :loop="true"
        :startDelay="1000"
        :typeSpeed="100"
        :backSpeed="100"
        :strings="[
          'web developer Front-end!',
          'web developer Back-end!',
          'web developer Fullstack!',
        ]"
      >
        <h1>Hi, <br />i'm Kevlin, <span class="typing"></span></h1>
      </vue-typed-js>
      <h3>I’m a student, web developer located in Paris.</h3>
      <h3>The things that i like,</h3>
      <div class="icons">
        <i class="icon" aria-label="JavaScript" data-balloon-pos="up"
          ><font-awesome-icon class="iconFont" :icon="['fab', 'js']"
        /></i>
        <i class="icon" aria-label="Nodejs" data-balloon-pos="up"
          ><font-awesome-icon class="iconFont" :icon="['fab', 'node-js']"
        /></i>
        <i class="icon" aria-label="Sass" data-balloon-pos="up"
          ><font-awesome-icon class="iconFont" :icon="['fab', 'sass']"
        /></i>
        <i class="icon" aria-label="Vuejs" data-balloon-pos="up"
          ><font-awesome-icon class="iconFont" :icon="['fab', 'vuejs']"
        /></i>
        <i class="icon" aria-label="React" data-balloon-pos="up"
          ><font-awesome-icon class="iconFont" :icon="['fab', 'react']"
        /></i>
        <i class="icon" aria-label="CSS3" data-balloon-pos="up"
          ><font-awesome-icon class="iconFont" :icon="['fab', 'css3-alt']"
        /></i>
      </div>
      <div class="buttons">
        <div>
          <button class="btn__continue">
            <font-awesome-icon class="iconPlay" :icon="['fas', 'play']" />
            <NuxtLink to="/watch"> Continue </NuxtLink>
          </button>
        </div>
        <div class="moreinfo">
          <button class="btn__info" v-on:click="show = !show; bright()" >
            <font-awesome-icon
              class="iconInfo"
              :icon="['fas', 'circle-info']"
            />More info
          </button>
          <transition name="fade">
            <h3 class="text__more" v-if="show">
              When i'm tired, i need some coffee ☕
            </h3>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
   
  
  },
  methods: {
   bright() {
      var elt = document.getElementById("banner");
     if(this.show) {
      elt.style.filter = "brightness(3.00)";
     }
     else{
       elt.style.filter = "";
     }
   }
   
  },
};
</script>

<style lang="scss" scoped>
.about {
  position: absolute;
  bottom: 5rem;
  left: 3rem;
}
#banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("https://cdn.wallpapersafari.com/21/18/9pg2ia.jpeg");
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 1) 0px 0px 80px 100px inset;
}
h1 {
  font-family: $roboto-slab;
  color: red;
  font-size: 3rem;
  line-height: 5rem;
  font-weight: bold;
}
span {
  color: white;
}
h3 {
  font-family: $roboto-slab;
  color: white;
  font-size: 1rem;
}
.icons {
  color: white;
  display: flex;
  & .icon {
    margin: 24px 33px 0px 10px;
    --balloon-border-radius: 0.25rem;
    --balloon-color: #2a5fa5;
    --balloon-font-size: 15px;
    --balloon-move: 30px;

    & .iconFont {
      width: 30px;
      height: 30px;
    }
  }
}
.buttons {
  margin-top: 40px;
  display: flex;
}
.btn__continue {
  border-radius: 6px;
  min-height: 37px;
  font-size: 16px;
  padding: 6px 16px;
  background-color: white;
  margin: 0 10px 0 0;
  font-weight: 600;
  max-width: 100%;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: #c8c3c3;
  }
  & .iconPlay {
    margin-right: 10px;
  }
}
.btn__info {
  border-radius: 6px;
  min-height: 37px;
  font-size: 16px;
  padding: 6px 16px;
  background-color: rgb(56, 56, 56);
  margin: 0 10px 0 0;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: rgb(35, 33, 33);
  }
  & .iconInfo {
    margin-right: 10px;
  }
}
.moreinfo {
  display: flex;

  .text__more {
    color: white;
    align-self: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>