<template>
  <component v-bind:is="transformed"></component>
</template>

<script>
export default {
  name: "DynamicRouterLink",
  data() {
    return {
      text: '',
    };
  },

  computed: {
    transformed() {
      return { template: this.text };
    },
  },
};
</script>
