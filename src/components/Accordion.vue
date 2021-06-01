<template>
  <div>
    <div
      class="accordian-tabs"
      v-b-toggle="`accordion-${index}`"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="accordion_head">
        <h5>
          {{ item.title }}
          <span class="plusminus">
            <img src="@/assets/images/chevron_big_down.png" />
          </span>
        </h5>
      </div>
      <b-collapse
        :id="`accordion-${index}`"
        accordion="my-accordion"
        role="tabpanel"
      >
        <div class="accordion_body">
          <p>
            {{ item.contents }}
          </p>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

