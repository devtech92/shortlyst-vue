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
            <div class="contact-details-row">
            <div class="map">
              <img src="@/assets/images/map1.png" />
            </div>
            <div class="contact-details">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Indonesia</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Singapore</a>
                </li>
              
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="contact-headers">
                    <h6>PT. SHORLYST LABS INTERNATIONAL</h6>
                    <p>Wisma BNI 46, Lt 45</p>
                    <p>Jl. Jend. Sudirman No. Kav. 1, RT.10/RW.11 Karet Tengsin, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220</p>
                  </div>
                  <div class="contacts-footer">
                    <ul>
                      <li>
                        <a href="#">
                          business@shorlyst.ai
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          support@shorlyst.ai
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="contact-headers">
                    <h6>PT. SHORLYST LABS INTERNATIONAL</h6>
                    <p>Wisma BNI 46, Lt 45</p>
                    <p>Jl. Jend. Sudirman No. Kav. 1, RT.10/RW.11 Karet Tengsin, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220</p>
                  </div>
                  <div class="contacts-footer">
                    <ul>
                      <li>
                        <a href="#">
                          business@shorlyst.ai
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          support@shorlyst.ai
                        </a>
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


