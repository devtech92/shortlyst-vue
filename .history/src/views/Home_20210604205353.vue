<template>
  <div class="home">
    <div class="empty-header"></div>
    <main>
      <section class="main-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-row">
                <div class="banner-vectores banner-vector">
                  <img src="@/assets/images/banner-vector.png" />
                </div>
                <div class="banner-vectores banner-vector1">
                  <img src="@/assets/images/banner-vector1.png" />
                </div>
                <div class="banner-vectores banner-vector3">
                  <img src="@/assets/images/banner-vector3.png" />
                </div>
                <div class="banner-vectores banner-vector4">
                  <img src="@/assets/images/banner-vector4.png" />
                </div>
                <div class="banner-vectores banner-vector6">
                  <img src="@/assets/images/mails-icons.png" />
                </div>
                <div class="banner-vectores banner-vector5">
                  <img src="@/assets/images/ellipse.png" />
                </div>
                <h1 class="text-center">Say hello to your  ideal <br/> new <span> hires </span></h1>
                <!-- <h1 class="text-left">
                  new <span>{{ whois[0] }}</span>
                </h1> -->
                <p class="text-center">
                  Lead conversion reimagined, using AI & Automation technology.
                </p>
                <router-link to="/contact-sales" class="btn btn-blue mt-2 text-center">
                  Get started for free
                </router-link>
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
            <div
              class="brand-img"
            >
              <img src="@/assets/images/home_logo3.png" class="fixed-size-img" />
            </div>
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
          </carousel> -->
        </div>
      </section>
      <section class="business-software">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="main-title text-center">
                <h6>UNIFIED PLATFORM</h6>
                <h4>
                  Modern business software<br />
                  to empower your team
                </h4>
                <p>
                  Our data-driven solutions allow you to seamlessly source,
                  engage, and nurture leads <br />
                  so that you can focus on what matters most.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="hire-column">
                <div class="hire-img">
                  <img src="@/assets/images/hire.png" />
                </div>
                <div class="hire-content">
                  <h4>Looking for your next great hire?</h4>
                  <h6>
                    <img src="@/assets/images/stripe.png" class="mr-1" />
                    Shortlyst<span>. TALENT</span>
                  </h6>
                  <div class="hire-btns">
                    <router-link to="/contact-sales" class="btn btn-blue-start">
                      Request a demo
                    </router-link>
                    <router-link to="/product" class="btn btn-outline-blue">
                      Learn more
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="hire-column">
                <div class="hire-img">
                  <img src="@/assets/images/comming-soon.png" />
                </div>
                <div class="hire-content comming-soon">
                  <h4>Looking for your next great hire?</h4>
                  <h6>
                    <img src="@/assets/images/green-shape.png" class="mr-1" />
                    Shortlyst<span>. GROWTH</span>
                  </h6>
                  <div class="hire-btns">
                    <button type="button" style="point:n" class="btn btn-comming">Coming soon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="your-reach">
        <div class="top-circle">
          <img src="@/assets/images/top-cirlce.png" />
        </div>
        <div class="container">
          <div class="reach-row">
            <div class="col-md-12">
              <div class="main-title text-center">
                <h6>TESTIMONIALS</h6>
                <h4>Don’t just take our word for it</h4>
              </div>
            </div>
            <div class="testimonial-slider">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="testimonial-content item">
                      <div class="rating-star">
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                      </div>
                      <div class="testimnonial-content">
                        <h6>
                          “It’s intuitive, functional, easy-to-use and present
                          content in an interactive and interesting way.”
                        </h6>
                        <p>ALZEA ARAFAT, <span>FOUNDER ORENJI STUDIO</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial-content item">
                      <div class="rating-star">
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                      </div>
                      <div class="testimnonial-content">
                        <h6>
                          “It’s intuitive, functional, easy-to-use and present
                          content in an interactive and interesting way.”
                        </h6>
                        <p>ALZEA ARAFAT, <span>FOUNDER ORENJI STUDIO</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial-content item">
                      <div class="rating-star">
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                        <img src="@/assets/images/Star.png" />
                      </div>
                      <div class="testimnonial-content">
                        <h6>
                          “It’s intuitive, functional, easy-to-use and present
                          content in an interactive and interesting way.”
                        </h6>
                        <p>ALZEA ARAFAT, <span>FOUNDER ORENJI STUDIO</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  >
                    <div
                      class="slide-image"
                      :style="{
                        backgroundImage:
                          'url(' + require('@/assets/images/profile.png') + ')',
                      }"
                    ></div>
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    <div
                      class="slide-image"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require('@/assets/images/profile1.png') +
                          ')',
                      }"
                    ></div>
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  >
                    <div
                      class="slide-image"
                      :style="{
                        backgroundImage:
                          'url(' + require('@/assets/images/profile.png') + ')',
                      }"
                    ></div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-circle">
          <img src="@/assets/images/bottom-circle.png" />
        </div>
      </section>
      <section class="your-reach">
        <div class="container">
          <div class="reach-row">
            <div class="col-md-12">
              <div class="main-title text-center">
                <h6>FEATURES</h6>
                <h4>
                  Zoom in to your target &<br />
                  build relationships fast
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="small-cicle">
          <img src="@/assets/images/small-cicle.png" />
        </div>
        <div class="container">
          <div class="reach-row">
            <div class="col-md-12">
              <div class="reach-row">
                <div class="row">
                  <div class="col-md-5">
                    <div class="reach-content">
                      <h4>Instant leads using our <br />AI-powered search</h4>
                      <p>
                        With minimum input, our AI will seek through <br />
                        550M+ data points to give you the best leads.
                      </p>
                      <router-link to="/product" class="btn btn-outline">
                        Learn more
                      </router-link>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="reach-image">
                      <img src="@/assets/images/ai.png" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="reach-content">
                      <h4>Automate your outreach to global prospects</h4>
                      <p>
                        Engage with customers or candidates and build
                        relationships at scale.
                      </p>
                      <router-link to="/product" class="btn btn-outline">
                        Learn more
                      </router-link>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="reach-image">
                      <img src="@/assets/images/automatice.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="small-triangle">
          <img src="@/assets/images/small-traingle.png" />
        </div>
      </section>
    </main>
  </div>
</template>


<script>
// @ is an alias to /src
// import carousel from "vue-owl-carousel";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "Home",
  components: {
    // carousel,
  },
  data() {
    return {
      whois: ["hires", "customers"],
    };
  },
  created() {
    this.$emit(`update:layout`, DefaultLayout);
  },
  mounted() {
    window.setInterval(() => {
      this.pollPerson();
    }, 2000);
  },
  methods: {
    pollPerson() {
      const first = this.whois.shift();
      this.whois = this.whois.concat(first);
    },
  },
};
</script>

<style scoped>
.fixed-size-img {
  width: 100%; /* You can set the dimensions to whatever you want */
  min-height: 63px;
  object-fit: contain;
}
</style>