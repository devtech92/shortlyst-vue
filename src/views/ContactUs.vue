<template>
  <main>
    <section class="contact-us">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="contact-form">
              <h2>Get in touch <span>with us</span></h2>
            </div>
            <form action="" class="contact-forms">
              <div class="vector4">
                <img src="@/assets/images/contact-us-vector.png" />
              </div>
              <div class="vector5">
                <img src="@/assets/images/email.png" />
              </div>
              <div class="contact-row">
                <div class="contact-column">
                  <input
                    type="text"
                    class="general-field"
                    placeholder="First name"
                  />
                </div>
                <div class="contact-column">
                  <input
                    type="text"
                    class="general-field"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="form-rows">
                <input
                  type="text"
                  class="general-field"
                  placeholder="Work Email"
                />
              </div>
              <div class="form-rows">
                <input
                  type="text"
                  class="general-field"
                  placeholder="Phone number"
                />
              </div>
              <div class="form-rows">
                <select>
                  <option>Subject</option>
                </select>
              </div>
              <div class="form-rows">
                <textarea
                  class="details-msg"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div class="form-rows">
                <button class="btn btn-blue">Submit</button>
              </div>
            </form>
          </div>
          <div class="col-md-5">
            <div class="map">
              <img src="@/assets/images/map1.png" />
            </div>
            <div class="vector3">
              <img src="@/assets/images/contact-us-vector2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
// @ is an alias to /src

import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "ContactUs",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, DefaultLayout);
  },
  mounted() {},
};
</script>


<style scoped>
.contact-us {
  padding-top: 100px;
}
</style>