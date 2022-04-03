<template>
  <div class="wishlists">
    <ul>
      
      <li v-for="(project, index) in projectArray" :key="project.id">
        <div>
        <NuxtLink :to="`/detail?id=${project.id}`">
          <img :src="project.img" />
          <p>{{ project.name }}</p>
        </NuxtLink>
      </div>
     
        <div>
          <button class="btn" type="submit" v-on:click="()=>deleteProject(index)">X</button>
        </div>
        
      </li>
      
    </ul>
    <div class="btn_deleteall">
      <Button btnTitle="delete all projects" :btnFunction="clearAllProjects"/>
      
    </div>
    
  </div>
</template>

<script>
import Project from "../mixins/project";
import Button from "../components/button/Button.vue"
import HeaderLanding from "../components/header/HeaderLanding.vue"
export default {
  data: function () {
    return {
      projectArray: [],
      project: {},

    };
  },
  components: {
   Button, HeaderLanding
  },
  methods: {
    
    clearAllProjects: function () {
      this.clearWishlists();
      this.projectArray = this.getProjectWishlists();
    },
    deleteProject: function (index) {
      this.projectArray.splice(index, 1);
      localStorage.setItem('wishlists', JSON.stringify(this.projectArray));
    },
    
  },
  mounted() {
    this.projectArray = this.getProjectWishlists();
    
  },
  
  mixins: [Project],
};
</script>

<style>
.wishlists ul li a {
  color: rgb(245, 237, 237);
  text-decoration: none;
}
.wishlists ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}
.wishlists li {
  flex-basis: 20%;
  margin-bottom: 25px;
  display: flex;
}
.btn_deleteall{
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  background-color: white;
}
.btn {
  color: black;
}
</style>