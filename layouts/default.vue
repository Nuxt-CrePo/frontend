<template>
  <div class="container__default">
    <Header v-if="isLoggedIn && isIndex || isWishlist || isSearch || isSkills || isExperiences"/>
    <div class="body__default">
      <Nuxt />
    </div>
    <Footer v-if="isLoggedIn && !isWatch"/>
  </div>
</template>

<script>
import Footer from "../components/footer/Footer.vue";
import Header from "../components/header/Header.vue";

export default {
  components: { Header, Footer }, 
  data() {
    return {
      isLoggedIn: null,
    };
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
  computed: {
    isIndex() {
      return this.$route.name === "index";
    },
    isSearch() {
      return this.$route.name === "search";
    },
    isWishlist() {
      return this.$route.name === "wishlists";
    },
    isSkills() {
      return this.$route.name === "skills";
    },
    isExperiences() {
      return this.$route.name === "experiences";
    },
    isWatch() {
      return this.$route.name === "watch";
    }
  },
};
</script>

<style lang="scss">
.body__default {
  margin: 0;
  padding: 0;
  height: 100%;
}
.container__default {
  min-height: 100%;
  position: relative;
}
</style>