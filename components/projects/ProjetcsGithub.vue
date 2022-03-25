<template>
  <div>
    <p v-if="isLoading">Loading....</p>
    
    <ul v-else>
      <li class="text__test" v-for="(repo, index) in projectsGithub" :key="index">
        {{ repo.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    projectsGithub() {
      return this.$store.state.projects.projectsGithub
    }
  },
  mounted() {
    // dispatch the getGithubProjects action which commits a mutation to update the state
    this.isLoading = false
    this.$store.dispatch("projects/getGithubProjects")
  }
};
</script>

<style lang="scss" scoped>
</style>