<template>
  <nav class="navbar">
    <NuxtLink to="/" tag="div" class="navbar__logo">
      <img
        class="navbar__logoImg"
        src="https://fontmeme.com/permalink/220315/09294329ef0716007be902f0ca25112e.png"
        alt=""
      />
    </NuxtLink>
    <ul
      :class="
        isOpen === false ? 'navbar__list' : 'navbar__list' + ' ' + 'active'
      "
    >
      <li class="navbar__items" v-on:click="openMenu">
        <NuxtLink to="/">
          <a>Home</a>
        </NuxtLink>
      </li>
      <li class="navbar__items" v-on:click="openMenu">
        <NuxtLink to="/dashboard">
          <a>Dashboard</a>
          <fa icon="envelope" />
        </NuxtLink>
      </li>
    </ul>
    <button
      :class="isOpen === false ? 'hamburger' : 'hamburger' + ' ' + 'active'"
      v-on:click="openMenu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div class="navbar__right-side"  >
      <div class="navbar__list">
         <div
        class="navbar__search"
        :class="{
          navbar__open: wantsToSearch,
        }"
      >
        
        <i  @click="wantsToSearch = !wantsToSearch"
          ><font-awesome-icon class="navbar__iconSearch" :icon="['fas', 'magnifying-glass']"
        /></i>

        <input
          v-if="wantsToSearch"
          v-model="searchInput"
          type="text"
          placeholder="Projects, technos, genres..."
          @input="searchMovie(searchInput)"
        />
      </div>
      </div>
     
      <div class="navbar__list">
        <a href="https://github.com/KevlinS" target="_blank">
        <i><font-awesome-icon class="navbar__iconGithub" :icon="['fab', 'github']" /></i>
        </a>
        <a href="https://www.linkedin.com/in/kevlin-susanto-138b00146/" target="_blank">
         <i><font-awesome-icon class="navbar__iconLinkedin" :icon="['fab', 'linkedin']" /></i>
         </a>
         
   
          <i><font-awesome-icon class="navbar__iconUser" :icon="['fas', 'user']" /></i>
          <i><font-awesome-icon class="navbar__iconArrow" :icon="['fas', 'caret-down']" /></i>
   
        <!-- <img src="@/static/img/profile.png" alt="profile" /> -->
      </div>
    </div>
  </nav>
</template>

<script>
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
export default {
  props: {
    search: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
      wantsToSearch: false,
      searchInput: "",
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
    searchMovie() {
      this.$router.push(`/search?query=${this.searchInput}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
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
  background-color: transparent;
  &__logo {
    width: 14rem;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__logoImg {
    height: 45px;
    padding: 0rem 3rem;
    position: relative;
    top: 5px;
  }
  &__list {
    display: flex;

    margin-right: auto;
    & i {
      color: #fff;
      cursor: pointer;
    }
  }
  &__items {
    padding-left: 0.5rem;
    padding-right: 2.5rem;
    & a {
      color: #ffffff;
      text-decoration: none;
      &:hover {
        color: #dc1a28;
      }
    }
  }
  &__open {
    border: 1px solid #fff;
    padding: 1rem;
  }
  &__right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-right: 2rem;
  }
  &__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease-in;
    height: 30px;
    & input {
      padding: 1rem 5rem 1rem 0.5rem;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 1.4rem;
      width: 30rem;
      &::placeholder {
        color: rgb(129, 129, 129);
      }
      &:focus {
        outline: none;
      }
      .icon{
        height: 40px;
        
      }
    }
    & i {
      color: #fff;
      cursor: pointer;
    
    }
  }
  &__iconArrow {
    height: 40px;
    width: 9px;
  }
  &__iconLinkedin {
    height: 40px;
    width: 18px;
    margin-right: 12px;
  }
  &__iconSearch {
    height: 40px;
    width: 20px;
    margin-right: 12px;
  }
  &__iconGithub {
    height: 40px;
    width: 22px;
    margin-right: 12px;
  }
  &__iconUser {
    height: 40px;
    width: 17px;

  }
  &__profile {
    margin: 0 0 0 0;
    color: #fff;
      margin-right: 1rem;
      cursor: pointer;
    & img {
      border-radius: 1rem;
    }
  }
  &.sticky {
    background: #141414;
  }
}
.hamburger {
  display: none;
  position: absolute;
  right: 10%;
}
.bar {
  display: block;
  width: 35px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
}

@media only screen and (max-width: 1024px) {
  .navbar__list { 
    position: fixed;
    left: -100%;
    top: 10rem;
    flex-direction: column;
    background-color: #141414;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }
  
  .navbar__list.active {
    z-index: 1;
    left: 0;
  }
  .navbar__items {
    margin: 2.5rem 0;
  }
  .hamburger {
    display: block;
    cursor: pointer;
    margin-right: 25px;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>