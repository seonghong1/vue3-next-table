<script setup lang="ts">
import { ColumnDefs } from "@/types/options";
import { ref } from "vue";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
  changeInputValue: (e: Event) => void;
}>();

const emoji = "\uD83D\uDCC5";
const isFocused = ref(false);
</script>

<template>
  <div :class="[{ 'on-focus': isFocused }]">
    <span>{{ emoji }}</span>
    <input
      type="date"
      :value="data[col.field]"
      @change="props.changeInputValue"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<style scoped lang="scss">
div {
  opacity: 0.5;
  position: relative;
  &.on-focus {
    opacity: 1;
  }

  span {
    position: absolute;
    top: 0;
    left: 2px;
    font-size: 12px;
  }

  input {
    border: none;
    outline: none;
    height: 36px;
    padding: 5px 10px 0;
    font-size: 13px;
  }
}
</style>
