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
        <NuxtLink to="/">
          <a>Skills</a>
        </NuxtLink>
      </li>
      <li class="navbar__items" v-on:click="openMenu">
        <NuxtLink to="/">
          <a>Experience</a>
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
    <div class="navbar__right-side">
      <div class="navbar__list">
        <div
          class="navbar__search"
          :class="{
            navbar__open: wantsToSearch,
          }"
        >
          <i @click="wantsToSearch = !wantsToSearch"
            ><font-awesome-icon
              class="navbar__iconSearch"
              :icon="['fas', 'magnifying-glass']"
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

      <ul class="navbar__list">
        <li>
          <a href="https://github.com/KevlinS" target="_blank">
            <i
              ><font-awesome-icon
                class="navbar__iconGithub"
                :icon="['fab', 'github']"
            /></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kevlin-susanto-138b00146/"
            target="_blank"
          >
            <i
              ><font-awesome-icon
                class="navbar__iconLinkedin"
                :icon="['fab', 'linkedin']"
            /></i>
          </a>
        </li>
        <li class="dropdown">
          <a class="dropbtn">
            <img class="navbar__imgProfile" :src="userImg" alt="profile" />
            <i
              ><font-awesome-icon
                class="navbar__iconArrow"
                :icon="['fas', 'caret-down']"
            /></i>
            <div class="dropdown-content">
              <a href="#">About me</a>
              <a href="#">Contact</a>
              <a href="#">Github</a>
              <a href="#">Linkedin</a>
              <hr />
              <a v-on:click="setLogoutUser()">Logout</a>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
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
      user: {},
      userName: "",
      userImg: "",
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userName = this.user[0].name;
    this.userImg = this.user[0].img;
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
    searchMovie() {
      this.$router.push(`/search?query=${this.searchInput}`);
    },
     setLogoutUser() {
    localStorage.removeItem("user"); 
    window.location.reload()
  }
  },
};

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
</script>

<style lang="scss" scoped>
.dropdown {
  float: left;
  overflow: hidden;
}


.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: inherit;
  font-family: inherit;
  position: relative;
  top: -18px;
  margin-top: 35px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #080800;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: fixed;
  top: 70px;
  right: 50px;

  & hr { display: block; height: 1px;
    border: 0; border-top: 1px solid #131111;
    margin: 1em 0; padding: 0; }
  
}

.dropdown-content a {
  float: none;
  color: white;
  padding: 6px 13px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  text-decoration: underline;
}

.dropdown:hover .dropdown-content {
  display: block;
}
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
  &__imgProfile {
    position: relative;
    top: 5px;
    height: 26px;
    width: 26px;
    margin-right: 10px;
    border-radius: 0.25rem;
  }
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
      height: 0;
    }
    & a {
      display: flex;
    }
    & .profile__dropdown {
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
      .icon {
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
    margin-right: 20px;
    margin-top: 16px;
  }
  &__iconSearch {
    height: 40px;
    width: 20px;
    margin-right: 20px;
    position: relative;
    top: -15px;
  }
  &__iconGithub {
    height: 40px;
    width: 22px;
    margin-right: 20px;
    margin-top: 16px;
  }
  &__iconUser {
    height: 40px;
    width: 17px;
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