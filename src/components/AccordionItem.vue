<template>
  <div>
    <div class="accordion_head" v-b-toggle="id">
      <h5>
        <slot name="title"></slot>
        <span class="plusminus">
          <img src="@/assets/images/chevron_big_down.png" />
        </span>
      </h5>
    </div>

    <b-collapse :id="id" class="mt-2">
      <div class="accordion_body">
        <p>
          <slot></slot>
        </p>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: ["id", "item"],
};
</script>

