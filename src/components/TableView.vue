<script setup lang="ts">
import type { ColumnDefs, Options } from "@/types/options";

const props = defineProps<{
  tableData: any[];
  options: Options;
}>();

const getTdValue = (data: any, col: ColumnDefs) => {
  if (col.getCustomValue) {
    return col.getCustomValue(data[col.field]);
  }

  return data[col.field];
};
</script>

<template>
  <div class="table-view-container">
    <h3>{{ props.options.tableTitle }}</h3>
    <table>
      <thead>
        <tr>
          <th v-for="col in props.options.columnDefs">
            {{ col.headerName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in props.tableData" :key="data.id">
          <td v-for="col in props.options.columnDefs">
            {{ getTdValue(data, col) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: red;

  span {
    color: blue;
  }
}
</style>
