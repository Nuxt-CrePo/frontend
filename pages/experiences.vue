<template>
  <div class="wrapper__experience">
    <div class="container__experience">
      <ExperienceList />
    </div>
  </div>
</template>

<script>
import ExperienceList from "../components/experiences/ExperienceList.vue";
export default {
  components: { ExperienceList },
  beforeCreate() {
    if (!JSON.parse(localStorage.getItem("user"))) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper__experience {
  background-color: black;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
}
.container__experience {
  width: 100%;
  height: 100vh;
}
</style>