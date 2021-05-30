<template>
  <div id="app">
    <!-- Layout goes here dynamically  -->
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
// @ is an alias to /src
// import Layout from "@/views/Layout.vue";

export default {
  name: "App",
  data() {
    return {
      layout: `div`,
    };
  },
  mounted() {},
  methods: {
    // loadScript(src) {
    //   console.log("Hit App Load Method");
    //   let scriptTag = document.createElement("script");
    //   scriptTag.setAttribute("src", src);
    //   document.head.appendChild(scriptTag);
    // },
  },
};
</script>
