<template>
  <div class="container__default">
    <Header v-if="isIndex"/>
    <div class="body__default">
      <Nuxt />
    </div>
    <Footer v-if="!isDashboard"/>
  </div>
</template>

<script>
import Footer from "../components/footer/Footer.vue";
import Header from "../components/header/Header.vue";

export default {
  components: { Header, Footer },
  computed: {
    isIndex() {
      return this.$route.name === "index" ;
    },
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