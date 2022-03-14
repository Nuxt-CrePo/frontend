<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching github</p>
    <ul v-else>
      <li v-for="(repo, index) in githubRepos" :key="index">
        {{ repo.name }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        githubRepos: []
      }
    },
    async fetch() {
      this.githubRepos = await fetch(
        'https://api.github.com/users/KevlinS/repos'
      ).then(res => res.json())
    }
  }
</script>


<style lang="scss">
.text__image {
  position: absolute;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
}

.text__test {
  color: black;
  position: relative;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 15rem;
  font-weight: 300;
  line-height: 15rem;
}
</style>