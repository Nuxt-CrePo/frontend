<template>
<div >
  <div class="back">
    <NuxtLink to="/">
    <i class="icon"
        ><font-awesome-icon class="iconFont" :icon="['fas', 'arrow-left']"
      />
      </i>
         
        </NuxtLink>
  </div>
 <video class="video_player" id="player" width="100%" controls muted autoplay preload="auto">
  <source src="../video/trybuy.webm"
            type="video/webm"/>
            
</video>
  
</div>
</template>

<script>

export default {
  data () {
  return {
   showModal: false
  }
  }
}
</script>

<style lang="scss" scoped>
.video_player {
  width: 100%;
  height: 100vh;
}
.back {
   z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.6s;
  padding: 1rem 1rem;
  background: linear-gradient(0deg,transparent,rgba(0,0,0,.7));
}
h1 {
  color: white;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
}
.icon {
  color: white;
  display: flex;
align-items: center;
  height: 5vh;
  width: 5vw;
}
  
.iconFont {
  width: 6vw;
height: 6vh;


}


</style>