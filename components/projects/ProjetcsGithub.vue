<template>
  <div class="wrapper__projects">
    <!-- <p v-if="isLoading">Loading....</p> -->
    <h1>Popular projects</h1>
    <ul class="container__users">
      <li class="dropdown" v-for="(repo, index) in projectsGithub" :key="index">
        <div>
          <img class="image__repo" :src="repo.homepage" alt="image" />
        </div>
        <div class="hide__content">
          <div class="button__content">
            
            <div class="button__1" aria-label="Continue" data-balloon-pos="up">
              <NuxtLink to="/watch">
              <i
                ><font-awesome-icon
                  class="iconPlay"
                  :icon="['fas', 'circle-play']"
              /></i>
                 </NuxtLink>
            </div>
         

            <div
              class="button__2"
              v-on:click="addToWishlistsRepo(repo)"
              aria-label="Add to my list"
              data-balloon-pos="up"
            >
              <i
                ><img
                  class="iconPlus"
                  src="https://cdn.discordapp.com/attachments/832599917439483904/959469430021173248/output-onlinepngtools3.png"
              /></i>
            </div>
            <div
              class="button__3"
              v-on:click="setProject(repo)"
              @click="showModal = true"
              aria-label="More info"
              data-balloon-pos="up"
            >
              <i
                ><img
                  class="iconDown"
                  src="https://cdn.discordapp.com/attachments/832599917439483904/959468251979587624/output-onlinepngtools2.png"
              /></i>
            </div>
          </div>
          <div class="text__hidden">
            <span class="text__reco">Recommandé à 99%</span>
            <h2>{{ repo.name }}</h2>

            <span >App, Website - {{years[index]}}</span>
          </div>
        </div>
      </li>
    </ul>

    <!-- POPUP -->
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <div class="banner__popup">
          <img
            class="image__popup"
            :src="project.homepage"
            alt="image project"
          />
          <div class="buttons__popup">
            <a class="btn__visit" target="_blank" :href="project.html_url">
              <font-awesome-icon
                class="iconVisit"
                :icon="['fas', 'up-right-from-square']"
              />Visit
            </a>
            <div
              v-on:click="addToWishlists()"
              class="add__popup"
              aria-label="Add to my list"
              data-balloon-pos="up"
            >
              <i
                ><img
                  class="iconPlus__popup"
                  src="https://cdn.discordapp.com/attachments/832599917439483904/959469430021173248/output-onlinepngtools3.png"
              /></i>
            </div>
          </div>
        </div>
        <div class="container__popup">
          <div class="leftside__popup">
            <h1>{{ project.name }}</h1>
            <div class="div__reco">
              <span class="text__reco">Recommandé à 99%</span>
              <p>{{project_year}}</p>
              <p class="text__18">18+</p>
            </div>
            <input type="checkbox" class="read-more-state" id="text" />
            <ul class="read-more-wrap">
              <li>
                <p class="text__description">
                  {{ project.description }}
                </p>
              </li>
              <li>
                <p class="text__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem provident explicabo accusamus laudantium voluptatum
                  nobis sed nesciunt neque possimus molestiae?
                </p>
              </li>
              <li class="read-more-target">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem provident explicabo accusamus laudantium voluptatum
                nobis sed nesciunt neque possimus molestiae?
              </li>
            </ul>

            <label for="text" class="read-more-trigger"></label>
          </div>
          <div class="rightside__popup">
            <ul>
              <li class="rightside__text">
                Director:
                <a class="rightside__text2"> Kevlin Susanto </a>
              </li>
              <li class="rightside__text">
                Genre:
                <a class="rightside__text2"> App, Website </a>
              </li>
              <li class="rightside__text">
                Duration:
                <a class="rightside__text2"> 1 month </a>
              </li>
              <li class="rightside__text">
                Language:
                <a class="rightside__text2">
                  {{ project.language }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- <button class="button" @click="showModal = false">Close Modal</button> -->
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "../button/Button.vue";
import Project from "../../mixins/project";


export default {
  components: {
    Button,
  },
  data() {
    return {
      isLoading: true,
      showModal: false,
      project: [],
      years: [],
      project_year: ""
    };
  },
  computed: {
    projectsGithub() {
      //convert date format to year
      for (
        var i = 0;
        i < this.$store.state.projects.projectsGithub.length;
        i++
      ) {
        const str = this.$store.state.projects.projectsGithub[i].created_at;
        const words = str.split("-");
        const year = words[0];

        this.years.push(year)    
      }
    
      return this.$store.state.projects.projectsGithub;
    },
  },
  mounted() {
    // dispatch the getGithubProjects action which commits a mutation to update the state
    this.isLoading = false;
    this.$store.dispatch("projects/getGithubProjects");
    // this.years
  },
  methods: {
    testAlert: () => {
      alert("okaayy");
    },
    setProject(repo) {
      this.project = repo;
       const str = this.project.created_at;
        const words = str.split("-");
        const year = words[0];
        this.project_year = year;
      console.log(this.project_year)
    },
  },
  mixins: [Project],
};
</script>

<style lang="scss" scoped>
.wrapper__projects {
  padding: 1.5rem;
}
.image__repo {
  width: 250px;
  height: 145px;
  border-radius: 0.25rem;
}
.container__users {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1%;
  list-style-type: none;
  padding-right: 5%;
  padding-left: 5%;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-bottom: 5%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }
}

.hide__content {
  display: none;
  position: absolute;
  background-color: #181818;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  // z-index: 1;
  .text__reco {
    color: #46d369;
    font-weight: 700;
  }
}

.hide__content span {
  color: white;
  font-size: 11px;
  width: 135px;
}

.hide__content h2 {
  font-family: $open-sans;
  color: #fff;
  font-size: 1.125rem;
  font-weight: bold;
  width: 100%;
}

.hide__content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .hide__content {
  display: block;
  margin-top: -3px;
  border-radius: 0 0px 0.25rem 0.25rem;
}

.button__content {
  display: flex;
  position: relative;
  margin: 10px;
}
.button__1 {
  display: block;
  padding: 3px;
  text-align: justify;
  cursor: pointer;
  --balloon-border-radius: 0.25rem;
  --balloon-color: rgb(132, 129, 129);
  --balloon-font-size: 11px;
  --balloon-move: 30px;
}

.button__2 {
  display: block;
  text-align: justify;
  cursor: pointer;
  --balloon-border-radius: 0.25rem;
  --balloon-color: rgb(132, 129, 129);
  --balloon-font-size: 11px;
  --balloon-move: 30px;
}

.button__3 {
  position: relative;
  top: -5px;
  left: 7.8rem;
  cursor: pointer;
  --balloon-border-radius: 0.25rem;
  --balloon-color: rgb(132, 129, 129);
  --balloon-font-size: 11px;
  --balloon-move: 30px;
}

.text__hidden {
  position: relative;
  bottom: 0.8rem;
  margin: 10px;
}

h1 {
  color: #fff;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.iconDown {
  height: 45px;
  width: 46px;
}
.iconPlay {
  height: 28px;
  width: 27px;
}
.iconPlus {
  height: 32px;
  width: 32px;
}
//popup

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  left: 25vw;
  top: 7vh;
  z-index: 99;
  background-color: #181818;
  border-radius: 10px;
  overflow-y: scroll;
  width: 48vw;
  height: 90vh;

  .image__popup {
    width: 48vw;
    height: 400px;
    mask-image: linear-gradient(0deg, transparent, #141414 40%);
  }
  .banner__popup {
    position: relative;
  }
  .buttons__popup {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    display: flex;
  }
  .iconPlus__popup {
    width: 50px;
    height: 50px;
  }
  .btn__visit {
    border-radius: 6px;
    min-height: 37px;
    font-size: 16px;
    padding-left: 1.7rem;
    padding-right: 1.7rem;
    background-color: white;
    margin: 0 10px 0 0;
    font-weight: 600;
    max-width: 100%;
    display: flex;
    align-items: center;
    transition: 0.3s;
    color: #141414;
    &:hover {
      background-color: #c8c3c3;
    }
    & .iconVisit {
      height: 28px;
      width: 27px;
      margin-right: 10px;
    }
  }
  .text__reco {
    color: #46d369;
    font-weight: 700;
  }

  h1 {
    color: white;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  p {
    color: white;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  //readmore
  .read-more-state {
    display: none;
  }

  .read-more-target {
    opacity: 0;
    max-height: 0;
    font-size: 0;
    transition: 0.25s ease;
  }

  .read-more-state:checked ~ .read-more-wrap .read-more-target {
    opacity: 1;
    font-size: inherit;
    max-height: 999em;
  }

  .read-more-state ~ .read-more-trigger:before {
    content: "Show more";
  }

  .read-more-state:checked ~ .read-more-trigger:before {
    content: "Show less";
  }

  .read-more-trigger {
    cursor: pointer;
    display: block;
    align-items: center;
    text-align: center;
    padding: 0px 10px;
    color: #fff;
    font-size: 0.9em;
    line-height: 2;
    background: transparent;
    &:hover {
      text-decoration: underline;
    }
  }
}

.container__popup {
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.div__reco {
  display: flex;
  gap: 8px;
}

.text__18 {
  border: 1px solid;
  padding-left: 3px;
  padding-right: 3px;
}
.leftside__popup {
  margin-right: 2%;
  width: 175%;
}
.rightside__popup {
  margin-top: 3rem;
  width: 35rem;

  .rightside__text {
    margin-bottom: 1rem;
    color: #707070;
    font-weight: 200;
    font-size: 14px;
  }
  .rightside__text2 {
    color: #fff;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0.1);
}
</style>