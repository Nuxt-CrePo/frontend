<template>
  <div class="wrapper__projects">
    <!-- <p v-if="isLoading">Loading....</p> -->
      <h1>Popular projects </h1>
    <ul class="projects__list">
      <li  v-for="(repo, index) in projectsGithub" :key="index">
            
        <img class="imgGithub" :src="repo.homepage" alt="">
        <div class="title">
          <span>{{ repo.name }}</span>
          <button></button>
        </div>
        
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
.wrapper__projects {
  margin-left: 4%;
}
.imgGithub {
  width: 250px;
  height: 145px;
  border-radius: .25rem;
  transition: transform .2s;
  
  &:hover {
    
  transform: scale(1.5); 

  }
}

.projects__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  grid-auto-rows: minmax(100px, auto);
  
  & .title {
    width: 250px;
    height: 145px;
    display: none;
    background-color: rgb(20, 17, 17);
    transition: transform .2s;
    border-radius: .25rem;
 
    color: #fff;
  }

  & img:hover + .title {
    position: absolute;
    display: block;
    transform: scale(1.5); 
     
   
}
}
h1 {
  color: #fff;
  font-size: 1.5rem;
line-height: 2rem;
font-weight: bold;
  margin-bottom: 20px;
 
}
</style>