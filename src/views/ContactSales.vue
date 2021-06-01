<template>
  <section class="contact-salses">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="salse-header">
            <div class="login-logo">
              <router-link to="/">
                <img src="@/assets/images/white-logo.png" />
              </router-link>
            </div>
            <!-- <div class="close-icons">
              <img src="@/assets/images/close-icons.png" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="contact-sales">
            <div class="contact-vectors contact-vector">
              <img src="@/assets/images/contact-vector1.png" />
            </div>
            <div class="contact-vectors contact-vector1">
              <img src="@/assets/images/contact-vector3.png" />
            </div>
            <div class="contact-vectors contact-vector2">
              <img src="@/assets/images/contact-vector5.png" />
            </div>
            <div class="contact-vectors contact-vector3">
              <img src="@/assets/images/contact-vector2.png" />
            </div>
            <div class="contacts-sales">
              <div class="salse-title">
                <h3>Contact Sales</h3>
              </div>
              <form action="" class="contact-form">
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
                  <input
                    type="text"
                    class="general-field"
                    placeholder="Company Name"
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
                <div class="form-rows try-now">
                  <p>
                    Individual recruiter? <a href="#">Try Shortlyst Pro now!</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
// @ is an alias to /src

import GuestLayout from "@/components/layouts/GuestLayout.vue";

export default {
  name: "ContactSales",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, GuestLayout);
  },
  mounted() {},
};
</script>
