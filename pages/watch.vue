<template>
<div >
  <div class="back">
    <NuxtLink to="/">
          <a>Retour</a>
        </NuxtLink>
  </div>
 <video class="video_player" id="player" width="100%" controls muted autoplay preload="auto">
  <source src="../video/sneaker_video.webm"
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
</style>