<template>
  <section class="contact-salses">
    <div class="container-fluid">
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
          <div class="contact-sales conta">
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
              <form class="contact-form" @submit.prevent="sendEmail">
                <div class="contact-row">
                  <div class="contact-column">
                    <input
                      type="text"
                      class="general-field"
                      placeholder="First name"
                      name="first_name"
                    />
                  </div>
                  <div class="contact-column">
                    <input
                      type="text"
                      class="general-field"
                      placeholder="Last name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div class="form-rows">
                  <input
                    type="email"
                    class="general-field"
                    placeholder="Work Email"
                    name="email"
                  />
                </div>
                <div class="form-rows">
                  <input
                    type="text"
                    class="general-field"
                    placeholder="Phone number"
                    name="phone_number"
                  />
                </div>
                <div class="form-rows">
                  <input
                    type="text"
                    class="general-field"
                    placeholder="Company Name"
                    name="company_name"
                  />
                </div>
                <div class="form-rows">
                  <select name="subject">
                    <option>Subject</option>
                    <option>I’m interested in purchasing a product</option>
                    <option>
                      I want to learn more about a product or a feature
                    </option>
                    <option>
                      I need setup help or have a technical question
                    </option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-rows">
                  <textarea
                    class="details-msg"
                    placeholder="How can we help you?"
                    name="message"
                  ></textarea>
                </div>
                <div class="form-rows">
                  <button class="btn btn-blue" type="submit">Submit</button>
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
import emailjs from "emailjs-com";

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
  methods: {
    sendEmail(e) {
      //TODO: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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
