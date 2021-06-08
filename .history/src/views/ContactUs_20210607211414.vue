<template>
  <main>
    <div class="empty-header"></div>
    <section class="contact-us">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="contact-form">
              <h2>Get in touch <span>with us</span></h2>
            </div>
            <form class="contact-forms" @submit.prevent="sendEmail">
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
            </form>
          </div>
          <div class="col-md-5">
            <div class="contact-details-row">
              <div class="map">
                <GmapMap
                  :center="mapCenter"
                  :zoom="12"
                  style="width: 100%;"
                >
                  <gmap-info-window
                    :opened="infoOpened"
                    @closeclick="infoOpened = false"
                    :position="mapCenter"
                    :options="{
                      pixelOffset: {
                        width: 0,
                        height: -35,
                      },
                    }"
                  >
                    Lorem, ipsum dolor.
                  </gmap-info-window>

                  <GmapMarker
                    :position="mapCenter"
                    @click="mapCenter = mapCenter"
                  />
                </GmapMap>
              </div>
              <div class="contact-details">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      >Indonesia</a
                    >
                  </li>
                  <!-- <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      >Singapore</a
                    >
                  </li> -->
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="contact-headers">
                      <h6>PT. SHORLYST LABS INTERNATIONAL</h6>
                      <p>Wisma BNI 46, Lt 45</p>
                      <p>
                        Jl. Jend. Sudirman No. Kav. 1, RT.10/RW.11 Karet
                        Tengsin, Tanahabang, Kota Jakarta Pusat, Daerah Khusus
                        Ibukota Jakarta 10220
                      </p>
                    </div>
                    <div class="contacts-footer">
                      <ul>
                        <li>
                          <a href="#"> business@shorlyst.ai </a>
                        </li>
                        <li>
                          <a href="#"> support@shorlyst.ai </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="contact-headers">
                      <h6>PT. SHORLYST LABS INTERNATIONAL</h6>
                      <p>Wisma BNI 46, Lt 45</p>
                      <p>
                        Jl. Jend. Sudirman No. Kav. 1, RT.10/RW.11 Karet
                        Tengsin, Tanahabang, Kota Jakarta Pusat, Daerah Khusus
                        Ibukota Jakarta 10220
                      </p>
                    </div>
                    <div class="contacts-footer">
                      <ul>
                        <li>
                          <a href="#"> business@shorlyst.ai </a>
                        </li>
                        <li>
                          <a href="#"> support@shorlyst.ai </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
import emailjs from "emailjs-com";

import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "ContactUs",
  components: {
    // ,
  },
  data() {
    return {
      mapCenter: { lat: 40.72158448684192, lng: -74.04797359538375 },
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  created() {
    this.$emit(`update:layout`, DefaultLayout);
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


