<template>
  <div class="wrapper__projects">
    <!-- <p v-if="isLoading">Loading....</p> -->
    <h1>Popular projects</h1>
    <ul class="container__users">
      <li class="dropdown" v-for="(repo, index) in projectsGithub" :key="index">
        <div>
          <img class="img__profile" :src="repo.homepage" alt="image user" />
        </div>
        <div class="hide__content">
          <h2>{{ repo.name }}</h2>
          <span>App, Website 2022</span>
          <div class="button__content">
            <div class="button__1" v-on:click="testAlert()">
              <i
                ><font-awesome-icon
                  class="iconPlay"
                  :icon="['fas', 'circle-play']"
              /></i>
            </div>
            <div class="button__2" v-on:click="testAlert()">
              <i
                ><font-awesome-icon
                  class="iconDown"
                  :icon="['fas', 'circle-chevron-down']"
              /></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    projectsGithub() {
      return this.$store.state.projects.projectsGithub;
    },
  },
  mounted() {
    // dispatch the getGithubProjects action which commits a mutation to update the state
    this.isLoading = false;
    this.$store.dispatch("projects/getGithubProjects");
  },
  methods: {
    testAlert: () => {
      alert("okaayy");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper__projects {
  padding: 2%;
}
.container__users {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding-right: 5%;
  padding-left: 5%;
}
img {
  width: 250px;
  height: 145px;
  border-radius: 0.25rem;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-bottom: 5%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
    z-index: 1;
  }
}

.hide__content {
  display: none;
  position: absolute;
  background-color: #181818;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  // z-index: 1;
}

.hide__content span {
  color: white;
  padding: 12px;
  font-size: 10px;
  width: 135px;
}

.hide__content h2 {
  font-family: $open-sans;
  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: bold;
  padding: 12px;
  width: 135px;
}

.hide__content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .hide__content {
  display: block;
  margin-top: -3px;
  border-radius: 0 0px 0.25rem 0.25rem;
}

.button__content {
  float: right;
  display: flex;
  position: relative;
  top: -30px;
  right: 10px;
}
.button__1 {
  display: block;
  padding: 3px;
  text-align: justify;
  cursor: pointer;
}

.button__2 {
  display: block;
  padding: 3px;
  text-align: justify;
  cursor: pointer;
}
h1 {
  color: #fff;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.iconDown {
  height: 30px;
  width: 30px;
}
.iconPlay {
  height: 30px;
  width: 30px;
}
</style>