<script setup lang="ts">
import type { ColumnDefs } from "@/types/options";

import CellRenderer from "./CellRenderer.vue";
import EditDate from "./EditDate.vue";
import EditNumber from "./EditNumber.vue";
import EditSelect from "./EditSelect.vue";
import EditText from "./EditText.vue";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
}>();

const getCellValue = (data: any, col: ColumnDefs) => {
  if (col.getCustomValue) {
    return col.getCustomValue(data[col.field]);
  }

  return data[col.field];
};

const changeInputValue = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  props.data[props.col.field] = target.value;

  if (props.col.onEditCellChange) {
    props.col.onEditCellChange(props.data, props.col);
  }
};
</script>

<template>
  <template v-if="col.cellRenderer">
    <CellRenderer :data="data" :col="col" />
  </template>
  <template v-if="col.editable">
    <EditDate
      v-if="col.editType === 'date'"
      :data="data"
      :col="col"
      :changeInputValue="changeInputValue"
    />
    <EditNumber
      v-else-if="col.editType === 'number'"
      :data="data"
      :col="col"
      :changeInputValue="changeInputValue"
    />
    <EditSelect
      v-else-if="col.editType === 'select'"
      :data="data"
      :col="col"
      :changeInputValue="changeInputValue"
    />
    <EditText
      v-else-if="col.editType === 'text'"
      :data="data"
      :col="col"
      :changeInputValue="changeInputValue"
    />
  </template>
  <template v-else>
    <span> {{ getCellValue(data, col) }} </span>
  </template>
</template>

<style scoped lang="scss"></style>
