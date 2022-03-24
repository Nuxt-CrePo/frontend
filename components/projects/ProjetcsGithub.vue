<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching github</p>
    <ul v-else>
      <li class="text__test" v-for="(repo, index) in githubRepos" :key="index">
        {{ repo.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      githubRepos: [],
    };
  },
  // computed: {
  //   projectsGithub() {
  //     return this.$store.state.projects.projectsGithub
  //   }
  // },
  // mounted() {
  //   this.$store.dispatch("getGithubProjects")
  // }
  async fetch() {
    await axios
      .get("https://api.github.com/users/KevlinS/repos")
      .then((response) => {
        this.githubRepos = response.data;
        console.log(response);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>