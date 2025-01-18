<script setup lang="ts">
import { ColumnDefs } from "@/types/options";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
  changeInputValue: (e: Event) => void;
}>();
</script>

<template>
  <input type="date" :value="data[col.field]" @change="props.changeInputValue" />
</template>

<style scoped lang="scss"></style>
