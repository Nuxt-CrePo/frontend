<template>
  <div class="wrapper__projects">
    <!-- <p v-if="isLoading">Loading....</p> -->
    <h1>Experiences</h1>
    <ul class="container__users">
      <li class="dropdown" v-for="(experience, index) in experiences" :key="index">
        <div>
          <img class="image__repo" :src="experience.image" alt="image" />
        </div>
        <div class="hide__content">
          <div class="text__hidden">
            <span>{{experience.year}}, {{experience.duration}}</span>
            <h2>{{ experience.name }}</h2>

            <span>{{experience.description}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import Experience from '../../mixins/experience'
export default {
  data () {
    return {
      experiences: []
    }
  },
  created () {
    Experience.getExperiences()
      .then((data) => {
        this.experiences = data
      })
      .catch(error => { console.log(error) })
    let paramsId = this.$route.params.id
    console.log(paramsId)
    Experience.getExperience(paramsId)
      .then((data) => {
        this.experience = data
        console.log(this.experience)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
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

</style>