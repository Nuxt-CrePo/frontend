<template>
  <div class="wrapper__skill">
      <div class="container__skill">
             <SkillList />
      </div>
  </div>
</template>

<script>
import SkillList from "../components/skills/SkillList.vue";
export default {
  components: { SkillList },
  beforeCreate() {
    if (!JSON.parse(localStorage.getItem("user"))) {
      this.$router.push("/")
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper__skill {
  background-color: black;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  
}
.container__skill {
    width: 100%;
    height: 100vh;
}
</style>