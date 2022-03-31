<template>
<div>
   <vue-typed-js :loop="true" :startDelay="1000" :typeSpeed="100" :backSpeed="100" :strings="['Front-end!', 'Back-end!', 'Fullstack!']">
  <h1>Hi, i'm Kevlin, web developer <span class="typing"></span></h1>
</vue-typed-js>
  
</div>
 
</template>
<script>

import WhoWatching from "../components/main/WhoWatching.vue";
export default {
  components: {  WhoWatching },
  data () {
  return {
   showModal: true,
   users: [
    {
      name: "Kevlin",
      img: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Dude",
      img: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ],
  }
 }
};


</script>

<style lang="scss" scoped>
.container__users{
    display: flex;
    justify-content: space-between;
    
}
img{
    width: 200px;
    height: 200px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

// /* Change the background color of the dropdown button when the dropdown content is shown */
// .dropdown:hover .dropbtn {
//   background-color: #3e8e41;
// }
</style>