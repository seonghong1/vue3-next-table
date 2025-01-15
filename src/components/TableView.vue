<script setup lang="ts">
import type { ColumnDefs, Options } from "@/types/options";

const props = defineProps<{
  tableData: any[];
  options: Options;
}>();

const getCellValue = (data: any, col: ColumnDefs) => {
  if (col.getCustomValue) {
    return col.getCustomValue(data[col.field]);
  }

  return data[col.field];
};

const getCellClassList = (data: any, col: ColumnDefs) => {
  let classList = [];
  if (col.getCellClassList) {
    classList = [...classList, ...col.getCellClassList(data)];
  }

  if (col.cellClassList) {
    classList = [...classList, ...col.cellClassList];
  }

  return classList;
};

const getRowClassList = (data: any) => {
  let classList = [];
  if (props.options.rowClassList) {
    classList = [...classList, ...props.options.rowClassList];
  }

  if (props.options.getRowClassList) {
    classList = [...classList, ...props.options.getRowClassList(data)];
  }

  return classList;
};

const onRowClick = (data: any) => {
  if (props.options.onRowClick) {
    props.options.onRowClick(data);
  }
};

const onCellClick = (data: any, col: ColumnDefs) => {
  if (col.onCellClick) {
    col.onCellClick(data);
  }
};
</script>

<template>
  <div class="table-view-container">
    <h3 v-if="props.options.tableTitle">{{ props.options.tableTitle }}</h3>
    <table>
      <thead>
        <tr>
          <th
            v-for="col in props.options.columnDefs"
            :style="[{ width: col.width ? `${col.width}%` : 'auto' }]"
          >
            {{ col.headerName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in props.tableData"
          :key="props.options.primaryKey"
          :class="getRowClassList(data)"
          @click="onRowClick(data)"
        >
          <td
            v-for="col in props.options.columnDefs"
            :class="getCellClassList(data, col)"
            @click="onCellClick(data, col)"
          >
            {{ getCellValue(data, col) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table-view-container {
  width: 100%;

  table {
    width: 100%;
  }
}
h1 {
  color: red;

  span {
    color: blue;
  }
}
</style>
