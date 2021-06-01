import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// plugins
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

// import LoadScript from "vue-plugin-load-script";
// Vue.use(LoadScript);
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
// Custom scripts
import "@/assets/js/custom.js";

// Main style
// import "@/assets/js/owl.js";
// import "@/assets/css/owl.css";
import "@/assets/scss/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
