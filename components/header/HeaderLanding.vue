<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <img
        class="navbar__logoImg"
        src="https://fontmeme.com/permalink/220315/09294329ef0716007be902f0ca25112e.png"
        alt=""
      />
    </div>
  </nav>
</template>

<script>

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
 box-shadow: rgba(0, 0, 0, 0.6) 0px 45px 15px 0px inset;
  &__logo {
    width: 14rem;
  
    transition: transform 0.2s;
 
  }
  &__logoImg {
    height: 45px;
    padding: 0rem 3rem;
    position: relative;
    top: 5px;
  }

  
}
</style>