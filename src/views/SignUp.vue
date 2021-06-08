<template>
  <section class="login-template">
    <div class="login-row">
      <div class="login-column">
        <div class="login-logo">
          <img src="@/assets/images/white-logo.png" />
        </div>
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
          <router-link to="/">
            <img src="@/assets/images/white-logo.png" />
          </router-link>
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
          <h3>Sign Up</h3>
          <div class="form-rows">
            <a href="" class="btn-google">
              <img src="@/assets/images/google.png" class="mr-2" /> Sign Up with
              Google
            </a>
          </div>
          <div class="form-rows">
            <p class="or text-center">Or</p>
          </div>
          <form @submit.prevent="sendEmail">
            <div class="form-rows">
              <div class="placeholder-wrap">
                <input
                  type="text"
                  class="general-field"
                  placeholder="Full Name  *"
                  name="first_name"
                />
                <!-- <span class="placeholder">
                  <b class="important" style="color: red">*</b>
                </span> -->
              </div>
            </div>
            <div class="form-rows">
              <div class="placeholder-wrap">
                <input
                  type="email"
                  class="general-field"
                  placeholder="Email *"
                  name="email"
                />
                <!-- <span class="placeholder">
                  Email<b class="important" style="color: red">*</b>
                </span> -->
              </div>
            </div>
            <div class="form-rows">
              <div class="placeholder-wrap">
                <input
                  type="password"
                  class="general-field"
                  placeholder="Password *"
                  name="password"
                />
                <!-- <span class="placeholder">
                  Password<b class="important" style="color: red">*</b>
                </span> -->
              </div>
            </div>
            <div class="form-rows">
              <div class="placeholder-wrap">
                <input
                  type="password"
                  class="general-field"
                  placeholder="Confirm Password *"
                />
                <!-- <span class="placeholder">
                  Confirm Password<b class="important" style="color: red">*</b>
                </span> -->
              </div>
            </div>
            <div class="form-rows">
              <div class="placeholder-wrap">
                <input
                  type="text"
                  class="general-field"
                  placeholder="Phone number *"
                  name="phone_number"
                />
                <!-- <span class="placeholder">
                  Phone number<b class="important" style="color: red"></b>
                </span> -->
              </div>
            </div>
            <div class="form-rows">
              <button class="btn btn-login" type="submit">Sign Up</button>
            </div>
            <div class="form-rows">
              <p>
                By clicking Sign Up, you agree to our
                <router-link to="/terms">Term of Services</router-link> and
                <router-link to="/privacy">Privacy Policy</router-link>
              </p>
            </div>
            <div class="form-rows">
              <h6>
                Already have an account?
                <router-link to="/login">Sign in</router-link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import emailjs from "emailjs-com";

import GuestLayout from "@/components/layouts/GuestLayout.vue";

export default {
  name: "SignUp",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, GuestLayout);
  },
  mounted() {},
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_4z6hl0r",
          "template_mrd0di5",
          e.target,
          "user_4tVpKl3PomR3wGpPK73Uz"
        )
        .then(
          (result) => {
            console.log("Email sent successfuly!", result.status, result.text);
            this.$router.push("/contact-success");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>
<style scoped>
.placeholder-wrap {
  position: relative;
  /* margin: 20px; */
  /* display: inline-block; */
  /* background: #fff; */
}
.placeholder-wrap .placeholder {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #888;
  margin-top: -0.5em;
  line-height: 1em;
  z-index: 9;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Public Sans", sans-serif;
  width: 100%;
}
.placeholder-wrap input {
  background-color: transparent;
  font-family: "Public Sans", sans-serif;
  position: relative;
  z-index: 10;
  /* border: 1px #999 solid;
  padding: 4px 6px; */
}
.placeholder-wrap input:focus + .placeholder {
  display: none;
}
</style>