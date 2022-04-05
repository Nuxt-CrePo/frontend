<template>
  <div>
    <div v-if="isLoggedIn">
      <WhoWatching />
    </div>
    <div class="container__1" v-else>
      <div class="banner">
        <AboutMe />
      </div>
      <div class="container__main">
        <ProjectsGithub />
        <SkillList/>
        <ExperienceSkill/>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsGithub from "../components/projects/ProjetcsGithub";
import WhoWatching from "../components/main/WhoWatching.vue";
import AboutMe from "../components/main/AboutMe.vue";
import SkillList from "../components/skills/SkillList.vue";
import ExperienceSkill from "../components/experiences/ExperienceList.vue";

export default {
  components: { ProjectsGithub, WhoWatching, AboutMe, SkillList, ExperienceSkill },
  data() {
    return {
      isLoggedIn: null,
    };
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  },
};
</script>


<style lang="scss">
// .container__about {
//    position: absolute;
//   bottom: 5rem;
//   left: 3rem;
// }
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("https://cdn.wallpapersafari.com/21/18/9pg2ia.jpeg");
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 1) 0px 0px 80px 100px inset;
}
.about {
  // position:absolute;
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