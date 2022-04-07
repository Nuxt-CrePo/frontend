<template>
  <div>
    <h1>login</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button v-on:click="login()">login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
   
  },
  methods: {
      login() {
        //   if(this.email == "admin" && this.password == process.env.myPassword) {
        //       console.log("connecté")
        //        let adminBD = JSON.parse(localStorage.getItem('wishlists')) || [];
        //     let adminObject = {
        //        email: this.email,
        //        this.password
        //     }
        //       this.$router.push("/")
        //   }
        //   else {
        //       console.log("wrong id or pass")
        //   }
      }
  }
};
</script>

<style lang="scss" scoped>
</style>