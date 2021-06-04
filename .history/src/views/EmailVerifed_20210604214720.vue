<template>
  <section class="contact-salses forgot-password">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="salse-header">
            <div class="login-logo">
              <router-link to="/">
                <img src="@/assets/images/white-logo.png" />
              </router-link>
            </div>
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
              <img src="@/assets/images/forgot-vector.png" />
            </div>
            <div class="contact-vectors contact-vector2">
              <img src="@/assets/images/contact-vector5.png" />
            </div>
            <div class="contact-vectors contact-vector3">
              <img src="@/assets/images/contact-vector3.png" />
            </div>
            <div class="contacts-sales">
              <div class="salse-title">
                <h3>Email has been verified</h3>
                <p>Enter the email address associated with your account</p>
              </div>
              <form action="" class="contact-form">
                <div class="forgot-pass">
                  <div class="form-rows">
                    <input
                      type="email"
                      class="general-field"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-rows">
                    <button class="btn btn-blue">
                      Send reset instructions
                    </button>
                  </div>
                  <div class="form-rows">
                    <h6>
                      Remember the password? Back to
                      <router-link to="/login">Sign in</router-link>
                    </h6>
                  </div>
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
  name: "ForgotPassword",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, GuestLayout);
  },
  mounted() {},
};
</script>
