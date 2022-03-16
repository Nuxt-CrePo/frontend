<template>
  <div>
    <section class="banner"></section>

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
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('https://firebasestorage.googleapis.com/v0/b/vicflix-2fbe0.appspot.com/o/Pictures%2FProjects%2Fmilinus%2Fmilinus.png?alt=media&token=1a524a27-fb5b-4a01-af27-cacc83872d9e');
  background-size: cover;
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
  color: black;
  position: relative;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 15rem;
  font-weight: 300;
  line-height: 15rem;
}
</style>