<script setup lang="ts">
import { ColumnDefs } from "../../types/options";
import { ref } from "vue";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
  changeInputValue: (e: Event) => void;
}>();

const emoji = "\uD83D\uDD22";
const isFocused = ref(false);
</script>

<template>
  <div :class="[{ 'on-focus': isFocused }]">
    <span> {{ emoji }}</span>
    <input
      type="number"
      :value="data[col.field]"
      @change="(e:Event)=>{
        const target = e.target as HTMLInputElement;
        target.value = target.value.replace(/[^0-9]/g, '');
        props.changeInputValue(e);
      }"
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
    font-size: 16px;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
}
</style>
