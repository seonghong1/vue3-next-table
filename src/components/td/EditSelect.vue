<script setup lang="ts">
import { ColumnDefs } from "@/types/options";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
  changeInputValue: (e: Event) => void;
}>();
</script>

<template>
  <select @change="props.changeInputValue">
    <option
      v-for="option in props.col.editSelectOptions"
      :key="option.value"
      :value="option.value"
      :selected="option.value === props.data[props.col.field]"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped lang="scss"></style>
