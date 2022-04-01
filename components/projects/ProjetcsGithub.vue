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
          <h2>{{ repo.name }}</h2>
          <span>App, Website 2022</span>
          <div class="button__content">
            <div class="button__1" aria-label="Continue" data-balloon-pos="up">
              <i
                ><font-awesome-icon
                  class="iconPlay"
                  :icon="['fas', 'circle-play']"
              /></i>
            </div>
            <div
              class="button__2"
              v-on:click="setProject(repo)"
              @click="showModal = true"
              aria-label="More info"
              data-balloon-pos="up"
            >
              <i
                ><font-awesome-icon
                  class="iconDown"
                  :icon="['fas', 'circle-chevron-down']"
              /></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <img class="image__popup" :src="project.homepage" alt="image project" />
        <span class="text__reco">Recommandé à 98%</span>
        <h1>{{ project.name }}</h1>
        <h1>{{ project.id }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          provident explicabo accusamus laudantium voluptatum nobis sed nesciunt
          neque possimus molestiae?
        </p>
        <button class="button" @click="showModal = false">Close Modal</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      showModal: false,
      project: [],
    };
  },
  computed: {
    projectsGithub() {
      return this.$store.state.projects.projectsGithub;
    },
  },
  mounted() {
    // dispatch the getGithubProjects action which commits a mutation to update the state
    this.isLoading = false;
    this.$store.dispatch("projects/getGithubProjects");
  },
  methods: {
    testAlert: () => {
      alert("okaayy");
    },
    setProject(repo) {
      this.project = repo;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper__projects {
  
  padding: 2%;
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
  justify-content: space-between;
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
    transform: scale(1.5);
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
}

.hide__content span {
  color: white;
  padding: 12px;
  font-size: 10px;
  width: 135px;
}

.hide__content h2 {
  font-family: $open-sans;
  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: bold;
  padding: 12px;
  width: 135px;
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
  float: right;
  display: flex;
  position: relative;
  top: -30px;
  right: 10px;
}
.button__1 {
  display: block;
  padding: 3px;
  text-align: justify;
  cursor: pointer;
  --balloon-border-radius: 0.25rem;
  --balloon-color: rgb(132, 129, 129);
  --balloon-font-size: 11px;
  --balloon-move: 100px;
}

.button__2 {
  display: block;
  padding: 3px;
  text-align: justify;
  cursor: pointer;
  --balloon-border-radius: 0.25rem;
  --balloon-color: rgb(132, 129, 129);
  --balloon-font-size: 11px;
  --balloon-move: 100px;
}

h1 {
  color: #fff;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.iconDown {
  height: 30px;
  width: 30px;
}
.iconPlay {
  height: 30px;
  width: 30px;
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
  top: 10%;
  left: 35%;
  //  transform: translate(-50%, -50%);
  z-index: 99;
  width: 500px;
  height: 600px;
  background-color: #181818;
  border-radius: 10px;
  margin-bottom: 2rem;
  // overflow-y: scroll;

  .image__popup {
    border-radius: 10px 10px 0px 0px;
    width: 500px;
    height: 300px;
  
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
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
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