<template>
  <div>
    <section class="banner"></section>

    <div class="container__main">
      <ProjectsGithub />
      Counter: {{this.$store.state.projects.projectsGithub}}
  <button @click="add_one">add</button>
    </div>
  </div>
</template>
<script>
import ProjectsGithub from "../components/projects/ProjetcsGithub";

export default {
  components: { ProjectsGithub },
  methods: {
    add_one() {
      this.$store.commit("projects/setProjectsGithub");
      console.log(this.$store.state.projects.projectsGithub)
    },
  },
};
</script>


<style lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
}
.container__main {
  background-color: #000;
  color: white;
}
.text__image {
  position: absolute;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
}

.text__test {
  color: #fff;
  position: relative;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 1rem;
  font-weight: 30;
  line-height: 1rem;
}
</style>