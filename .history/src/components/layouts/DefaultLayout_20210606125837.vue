<template>
  <div>
    <navigation></navigation>
    <!-- main content goes here -->
    <slot />

    <section
      class="news-leeter"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/footer-bg.png') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center footer-content">
              <h3>Build winning teams today</h3>
              <router-link to="/contact-sales" class="btn btn-blue mt-2">
                Get started for free
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <div class="footer-logo">
              <router-link to="/">
                <img src="@/assets/images/footer-logo.png" />
              </router-link>
            </div>
          </div>
          <div class="col-md-8">
            <div class="footer-manu">
              <div class="footer-column">
                <h5>Products</h5>
                <ul>
                  <li>
                    <router-link to="/product">Shortlyst Talent</router-link>
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h5>Company</h5>
                <ul>
                  <li>
                    <router-link to="/pricing">Pricing</router-link>
                  </li>
                  <li>
                    <router-link to="/contact-sales">Request a Demo</router-link>
                  </li>
                  <li>
                    <router-link to="/contact-us">Contact Us</router-link>
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h5>Information</h5>
                <ul>
                  <li>
                    <router-link to="/terms">Terms of Service</router-link>
                  </li>
                  <li>
                    <router-link to="/privacy">Privacy Policy </router-link>
                  </li>
                  <li>
                    <router-link to="/faq"> FAQ </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="copyright">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-msg">
              <p>Develop by  GMITS TECH LLC</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Navigation from "@/components/layouts/Navigation.vue";

export default {
  name: "DefaultLayoutView",
  components: {
    Navigation,
  },
};
</script>
<style></style>
