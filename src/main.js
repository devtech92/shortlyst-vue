import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// plugins
import { BootstrapVue } from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAIecc7_NU6uRz3rjhEutY6CBYr4NwB8Pk",
    libraries: "places",
  },
});

Vue.use(BootstrapVue);

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

// Custom scripts
import "@/assets/js/custom.js";

// Main style
import "@/assets/scss/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
