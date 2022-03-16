<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <p>Questions? Call 06060606</p>
      <!-- <div class="footer__cols">
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Ways To Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Netflix Originals</a></li>
        </ul>
       
      </div> -->
      <p class="copyright">©Copyright 2022 Kevlix  </p>
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
    margin-bottom: 2rem;
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