<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <p>Questions? Call 1-866-579-7172</p>
      <div class="footer__cols">
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Ways To Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Netflix Originals</a></li>
        </ul>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Redeem Gift Cards</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Speed Test</a></li>
        </ul>
        <ul>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Buy Gift Cards</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>
      </div>
      <p class="copyright">This is a little non-commercial exercice.</p>
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