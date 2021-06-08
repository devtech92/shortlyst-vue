<template>
  <main>
    <div class="empty-header"></div>
    <section class="main-banner product-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="banner-row inner-banner-content">
              <h1>Reach top talents in <span>3 Simple Steps</span></h1>
              <ul>
                <li>AI Matching.</li>

                <li>Efficient Reach Outs.</li>
                <li>Nurture Leads.</li>
              </ul>
              <div class="product-btns">
                <router-link to="/product" class="btn btn-blue mt-2 mr-2">
                  Get started for free
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="product-image">
              <img src="@/assets/images/product.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="brand-trust">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-title text-center">
              <h6>BRANDS THAT TRUST US</h6>
            </div>
          </div>
        </div>
          <div class="brand-slider brand-images">
            <div
              class="brand-img"
            >
              <img src="@/assets/images/home_logo1.png" class="fixed-size-img" />
            </div>
            <div
              class="brand-img"
            >
              <img src="@/assets/images/home_logo2.png" class="fixed-size-img" />
            </div>
            <!-- -->
            <div
              class="brand-img"
            >
              <img src="@/assets/images/home_logo4.png" class="fixed-size-img" />
            </div>
            <div
              class="brand-img"
            >
              <img src="@/assets/images/home_logo5.png" class="fixed-size-img" />
            </div>
            <div
              class="brand-img"
            >
              <img src="@/assets/images/home_logo3.png" class="fixed-size-img" />
            </div> 
          </div>
        <!-- <carousel
          :nav="false"
          :autoplay="true"
          class="brand-slider"
          :margin="10"
          :loop="true"
          :stagePadding="100"
          :dots="false"
          :responsive="{
            0: {
              items: 2,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 5,
            },
          }"
        >
          <div class="brand-img">
            <img src="@/assets/images/logo1.png" />
          </div>
          <div class="brand-img">
            <img src="@/assets/images/logo2.svg" />
          </div>
          <div class="brand-img">
            <img src="@/assets/images/logo3.svg" />
          </div>
          <div class="brand-img">
            <img src="@/assets/images/logo4.svg" />
          </div>
          <div class="brand-img">
            <img src="@/assets/images/logo5.svg" />
          </div>
        </carousel>
         -->
      </div>
    </section>
    <section class="your-reach producr-reach">
      <div class="container">
        <div class="reach-row">
          <div class="row">
            <div class="col-md-6">
              <div class="reach-image">
                <img src="@/assets/images/1.png" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="reach-content">
                <h4>
                  Search from 550M+ global profiles to find your ideal talent
                </h4>
                <p>
                  Shortlyst combines public profiles from various platforms to
                  give you a holistic view of who you are hiring.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="reach-image">
                <img src="@/assets/images/2.png" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="reach-content">
                <h4>Engage talents and build relationships at scale</h4>
                <p>
                  Let Shortlyst automate the repetitive tasks, so that you can
                  focus on what matters most.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="reach-image">
                <img src="@/assets/images/3.png" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="reach-content">
                <h4>Engage talents and build relationships at scale</h4>
                <p>
                  Let Shortlyst automate the repetitive tasks, so that you can
                  focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import carousel from "vue-owl-carousel";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "Product",
  components: {
    // carousel,
  },
  created() {
    this.$emit(`update:layout`, DefaultLayout);
  },
};
</script>

<style>
</style>