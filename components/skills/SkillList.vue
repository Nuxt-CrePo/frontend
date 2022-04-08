<template>
  <div class="wrapper__projects">
    <h1>Skills</h1>
    <ul class="container__users">
      <li class="dropdown" v-for="(skill, index) in skills" :key="index">
        <div>
          <img class="image__repo" :src="skill.image" alt="image" />
        </div>
        <div class="hide__content">
          <div class="text__hidden">
            <span class="text__reco">Recommandé à 99%</span>
            <h2>{{ skill.name }}</h2>

            <span>{{skill.description}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import Skill from '../../mixins/skill'
export default {
  data () {
    return {
      skills: []
    }
  },
  created () {
    Skill.getSkills()
      .then((data) => {
        this.skills = data
      })
      .catch(error => { console.log(error) })
    let paramsId = this.$route.params.id
    console.log(paramsId)
    Skill.getSkill(paramsId)
      .then((data) => {
        this.skill = data
        console.log(this.skill)
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