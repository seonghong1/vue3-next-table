<script setup lang="ts">
import { Options } from "@/types/options";

const props = defineProps<{
  options: Options;
}>();

const onPerPageChange = (e: Event) => {
  if (props.options.pagination.onPerPageChange) {
    const target = e.target as HTMLSelectElement;
    const selectedValue = target.value;

    props.options.pagination.onPerPageChange(Number(selectedValue));
  }
};
</script>

<template>
  <select @change="onPerPageChange">
    <option v-for="option in props.options.pagination.perPageOptions" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped lang="scss"></style>
