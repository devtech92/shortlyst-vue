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
              <div class="salse-title forgot-c">
                <h3>Check your email to <br/> complete registration</h3>
                <p>we've emailed a special link to<br/> text@gamil.com. Click the link to confirm <br/> your email address and get started.</p>
                <p class="mt-2">Wrong email ? <a href="">re-enter your email address</a></p>
              </div>
              
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
