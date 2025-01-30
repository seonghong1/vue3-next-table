<script setup lang="ts">
import { ColumnDefs } from "@/types/options";
import { ref } from "vue";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
  changeInputValue: (e: Event) => void;
}>();

const emoji = "\u270F\uFE0F";
const isFocused = ref(false);
</script>

<template>
  <div :class="[{ 'on-focus': isFocused }]">
    <span>{{ emoji }}</span>
    <input
      type="text"
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
    text-align: center;
    border: none;
    outline: none;
    height: 36px;
    padding: 5px 10px 0;
    font-size: 16px;
  }
}
</style>
