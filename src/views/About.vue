<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "AboutPage",
  created() {
    this.$emit(`update:layout`, DefaultLayout);
  },
};
</script>
