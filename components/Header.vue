<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <a class="logo">Try&Buy</a>
        <ul :class="isOpen === false ?
            'navmenu' : 'navmenu' + ' ' + 'active'">
          <li class="navitem">
            <NuxtLink to="/">
              <a class="navlink">Home</a>
            </NuxtLink>
          </li>
          <li class="navitem">
            <NuxtLink to="/">
              <a class="navlink">Home</a>
            </NuxtLink>
          </li>
        </ul>
        <!-- <button v-on:click="say('quoi')">test</button> -->
        <button
        <!-- :class="isOpen === false ?
            'hamburger' : 'hamburger' + ' ' + 'active'"
            :click="openMenu"
          -->
          v-on:click="say('quoi')"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </nav>
    </header>
  </div>
</template>

<script>
    export default {
        data () {
          return {
             isOpen: false,
             name: 'Vue.js'
          }
        },
        methods: {    
          say: function (message) {
      alert(message)
    },
     
         openMenu() {
           this.isOpen = true;
           console.log("test")
         }

        }
    }
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  position: relative;
  z-index: 1;
}

.navbar {
  background-color: #808080;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  position: relative;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 35px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #222222;
}

.navmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navitem {
  margin-left: 5rem;
}

.navlink {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
}

.navlink:hover {
  color: #4b4747;
}

.navlogo {
  font: italic 2em "Open Sans", sans-serif;
  font-size: 2.1rem;
  font-weight: 500;
}

@media only screen and (max-width: 1024px) {
  .navmenu {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #000000;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .navmenu.active {
    z-index: 1;
    left: 0;
  }

  .navitem {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
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