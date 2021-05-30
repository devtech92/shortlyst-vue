<template>
  <section class="successecction">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="sucees-logo">
                        <a href="#">
                            <img src="@/assets/images/success-logo.png"/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="vector1">
                        <img src="@/assets/images/success-vector.png"/>
                    </div>
                    <div class="vector2">
                        <img src="@/assets/images/@.png"/>
                    </div>
                    <div class="vector3">
                        <img src="@/assets/images/success-vector1.png"/>
                    </div>
                    <div class="vector4">
                        <img src="@/assets/images/email.png"/>
                    </div>
                    <div class="success-logo-content text-center">
                        <img src="@/assets/images/thanks.png"/>
                        <h4>Thanks!</h4>
                        <p>We will contact you shortly</p>
                        <router-link to="/" class="btn btn-blue mt-2">Back to Shortlyst</router-link>
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
  name: "ContactSuccess",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, GuestLayout);
  },
  mounted() {},
};
</script>
