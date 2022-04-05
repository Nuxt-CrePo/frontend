<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <p>😀 contact me 06060606</p>
      <p>❤️ kevlin.susanto@ynov.com</p>
      <p>🍕 made by : Kevlin 2022 </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  color: #999;
  background: #141414;
  &__wrapper {
    max-width: 75%;
    overflow: auto;
    padding: 1.5rem 0;
      margin-left: 25px;
  }
  & a {
    color: #999;
    font-size: 1.3rem;
  }
  & p {
    margin-bottom: 0.2rem;
    margin-left: 0;
  }
  &__cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5rem;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  & li {
    line-height: 2.4;
  }
  & .copyright {
    margin: 2rem 0;
  }
}
</style>