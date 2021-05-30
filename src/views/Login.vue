<template>
  <section class="login-template">
    <div class="login-row">
      <div class="login-column">
        <div class="login-vectors login-vector">
          <img src="@/assets/images/login-vector.png" />
        </div>
        <div class="login-vectors login-vector2">
          <img src="@/assets/images/login-vector2.png" />
        </div>
        <div class="login-vectors login-vector3">
          <img src="@/assets/images/login-vector3.png" />
        </div>
        <div class="login-logo">
          <img src="@/assets/images/white-logo.png" />
        </div>
        <div class="login-title">
          <h2>
            Say hello to your<br />
            ideal new <br />candidates
          </h2>
        </div>
      </div>
      <div class="login-column1">
        <div class="sign-up-form">
          <h3>Sign In</h3>
          <div class="form-rows">
            <a href="#" class="btn-google">
              <img src="@/assets/images/google.png" class="mr-2" /> Sign In with Google
            </a>
          </div>
          <div class="form-rows">
            <p class="or text-center">OR</p>
          </div>
          <form>
            <div class="form-rows">
              <input type="email" class="general-field" placeholder="Email*" />
            </div>
            <div class="form-rows">
              <input
                type="password"
                class="general-field"
                placeholder="Password*"
              />
            </div>
            <div class="form-rows forgot-passwrod">
              <router-link to="/forgot-password">Forgot Passwrod</router-link>
            </div>
            <div class="form-rows">
              <button class="btn btn-login">Sign In</button>
            </div>
            <div class="form-rows">
              <h6>Don't have a Shortlyst account? <router-link to="/sign-up"> Sign up</router-link></h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
// @ is an alias to /src

import GuestLayout from "@/components/layouts/GuestLayout.vue";

export default {
  name: "Login",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, GuestLayout);
  },
  mounted() {},
};
</script>
