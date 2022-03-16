<template>
  <div class="container__default">
    <Header v-if="!isDashboard"/>
    <div class="body__default">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: { Header, Footer },
  computed: {
    isDashboard() {
      return this.$route.name === "dashboard" || this.$route.name === "about";
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