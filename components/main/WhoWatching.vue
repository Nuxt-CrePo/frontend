<template>
  <div class="wrapper" >
    <HeaderLanding />
    <div class="container__text">
      <h1>Who's watching?</h1>
    </div>
    <div class="container__item">
      <ul class="container__users" v-for="(user, index) in users" :key="index">
        <li class="user" v-on:click="setLoginUser(user)">
          <NuxtLink to="/">
            <img
              class="img__profile"
              :src="user.img"
              alt="Grapefruit slice atop a pile of other slices"
            />
            <a>{{ user.name }}</a>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderLanding from "../header/HeaderLanding.vue";


export default {
  components: HeaderLanding,
  data() {
    return {
      user: [],
    };
  },
    computed: {
    users() {
      return this.$store.state.users.users
    }
  },
  
  methods: {
    setLoginUser(user) {
    this.user.push(user)
    localStorage.setItem("user", JSON.stringify(this.user)); 
    window.location.reload()
  }

  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #141414;
  height: 100vh;
}
.container__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.container__text {
  color: white;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 2rem;
  position: relative;
  top: 40vh;
}

.img__profile {
  height: 180px;
  width: 180px;
  max-width: 100%;
  cursor: pointer;
}

.container__users {
  padding: 10px;
  position: relative;
  top: 40vh;
  & img {
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  & a {
    font-size: 20px;
    color: gray;
    text-decoration: none;
    display: grid;
  }
  & :hover img {
    border: solid 2px #fff;
  }
  & :hover a {
    color: #fff;
  }
}
</style>