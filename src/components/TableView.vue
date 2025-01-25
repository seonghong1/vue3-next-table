<script setup lang="ts">
import type { ColumnDefs, Options } from "@/types/options";
import SwitchableTd from "./td/SwitchableTd.vue";
import Pagination from "./pagination/Pagination.vue";
import PerPageSelect from "./pagination/PerPageSelect.vue";

const props = defineProps<{
  tableData: any[];
  options: Options;
}>();

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
    col.onCellClick(data, col);
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
            <SwitchableTd :data :col="col" />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="props.options.pagination.use">
      <Pagination :options="props.options" />
      <PerPageSelect v-if="props.options.pagination.perPageOptions" :options="props.options" />
    </div>
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
