<template>
  <div class="wrapper">
    <div>
      <HeaderLanding />
    </div>
    <div class="container__item">
      <div>
        <h1 class="container__text">Who's watching?</h1>
        <div class="container__users">
          <div class="user">
            <NuxtLink to="/">
              <img
                class="img__profile"
                src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Grapefruit slice atop a pile of other slices"
              />
              <a>Kevlin</a>
            </NuxtLink>
          </div>
          <div class="user">
            <NuxtLink to="/">
              <img
                class="img__profile"
                src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="Grapefruit slice atop a pile of other slices"
              />
              <a>Dude</a>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLanding from "../header/HeaderLanding.vue";

export default {
  components: HeaderLanding,
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #141414;
}
.container__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.container__text {
  color: white;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 2rem;
}

.img__profile {
  height: 180px;
  width: 180px;
  cursor: pointer;
  
}

.container__users {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  & img {
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  & a {
    font-size: 1.3vw;
    color: gray;
    text-decoration: none;
  }
  & :hover img{
    border: solid 2px #fff;
    
  }
  & :hover a {
      color: #fff;
    }
}

.user a {
  display: grid;
}
</style>