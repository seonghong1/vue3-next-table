<script setup lang="ts">
import type { ColumnDefs, Options } from "@/types/options";
import SwitchableTd from "./td/SwitchableTd.vue";
import Pagination from "./pagination/Pagination.vue";

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
  <div class="table-container">
    <h3 v-if="props.options.tableTitle" class="table-title">{{ props.options.tableTitle }}</h3>
    <table>
      <thead>
        <tr>
          <th v-for="col in props.options.columnDefs">
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
            :style="[{ width: col.width ? `${col.width}%` : 'auto' }]"
            :class="getCellClassList(data, col)"
            @click="onCellClick(data, col)"
          >
            <SwitchableTd :data :col="col" />
          </td>
        </tr>
      </tbody>
    </table>
    <template v-if="props.options.pagination.use">
      <Pagination :options="props.options" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.table {
  &-container {
    width: 100%;
    border-radius: 10px;
    border: 1px solid $color-light-gray;
    box-sizing: border-box;

    table {
      width: 100%;

      thead {
        width: 100%;
        background-color: $color-light-gray-2;
        border-bottom: 1px solid $color-light-gray;

        th {
          padding: 10px 0;

          &:not(:last-child) {
            border-right: 1px solid $color-light-gray;
          }
        }
      }

      tbody {
        width: 100%;
        border-bottom: 1px solid $color-light-gray;

        tr {
          &:not(:last-child) {
            border-bottom: 1px solid $color-light-gray-2;
          }

          td {
            padding: 5px 0;
            text-align: center;

            &:not(:last-child) {
              border-right: 1px solid $color-light-gray;
            }
          }
        }
      }
    }
  }

  &-title {
    background-color: $color-gray;
    font-size: 18px;
    text-align: left;
    padding: 15px 10px;
    color: $color-white;
    border-radius: 10px 10px 0 0;
  }
}
</style>
