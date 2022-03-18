<template>
  <div>
    <section class="banner"></section>

<div class="container__main">
  <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching github</p>
    <ul v-else>
      <li class="text__test" v-for="(repo, index) in githubRepos" :key="index">
        <img :src="imgURL + repo.poster_path" />
        {{ repo.original_title }}
      </li>
    </ul>
</div>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        githubRepos: [],
        imgURL: "https://image.tmdb.org/t/p/w200"
      }
    },
    async fetch() {
      this.githubRepos = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1'
      ).then(res => res.json())
      .then(res => this.githubRepos = res.results);
    }
  }
</script>


<style lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
}
.container__main{
  background-color: #000;
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