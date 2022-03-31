<template>
    <div class="about">
<vue-typed-js
:loop="true" 
:startDelay="1000" 
:typeSpeed="100" 
:backSpeed="100" 
:strings="['web developer Front-end!', 'web developer Back-end!', 'web developer Fullstack!']">
  <h1  >Hi, <br/>i'm Kevlin, <span class="typing"></span></h1>
</vue-typed-js>
<h3>I’m a Front-End Developer located in Paris.</h3>
<h3>The things that i like</h3>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.about {
    position: relative;
top: 25rem;
left: 5rem;
}
    h1 {
font-family: $roboto-slab;
  color: red;
  font-size: 3rem;
  line-height: 5rem;
  font-weight: bold;
  
}
span {
    color: white;
}
h3 {
    font-family: $roboto-slab;
  color: white;
  font-size: 1rem;
  font-weight: bold;
}

</style>