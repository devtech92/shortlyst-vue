<template>
  <div>
    <div
      class="accordian-tabs"
     
      v-for="(item, index) in items"
      :key="index"
    >
      <!-- <div class="accordion_head">
        <h5>
          {{ item.title }}
          <span class="plusminus">
            <img src="@/assets/images/chevron_big_down.png" />
          </span>
        </h5>
      </div>
      <b-collapse :id="`accordion-${index}`">
        <div class="accordion_body">
          <p v-html="item.contents"></p>
        </div>
      </b-collapse> -->
      <accordion-item :id="`accordion-${index}`">
        <template slot="title">{{item.title}}</template>
        <div v-html="item.contents"></div>
      </accordion-item>
    </div>
  </div>
</template>

<script>
import AccordionItem from "./AccordionItem.vue";
export default {
  components: { AccordionItem },
  props: ["items"],
};
</script>

    
