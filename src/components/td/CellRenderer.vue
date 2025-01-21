<script setup lang="ts">
import { ColumnDefs } from "@/types/options";
import { computed } from "vue";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
}>();

const renderedContent = computed(() => {
  if (props.col.cellRenderer) {
    return props.col.cellRenderer(props.data, props.col);
  }
  return null;
});
</script>

<template>
  <div v-if="typeof renderedContent === 'string'" v-html="renderedContent"></div>
  <component v-else :is="renderedContent" :data="data" :col="col" />
</template>

<style scoped lang="scss"></style>
