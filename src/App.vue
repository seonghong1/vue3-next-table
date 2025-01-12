<script setup lang="ts">
import { ref } from "vue";
import TableView from "@/components/TableView.vue";
import type { Options } from "@/types/options";
import type { ColumnDefs } from "@/types/options";

const tableData = ref([
  { id: 1, name: "John Doe", age: 430, amount: 10000 },
  { id: 2, name: "Jane Doe", age: 235, amount: 10000 },
  { id: 3, name: "Jim Doe", age: 401, amount: 10000 },
]);

const columnDefs: ColumnDefs[] = [
  { headerName: "Id", field: "id" },
  { headerName: "Name", field: "name" },
  { headerName: "Age", field: "age" },
  { headerName: "Amount", field: "amount", getCustomValue: (value) => `$${value}` },
];

const options: Options = {
  tableTitle: "테이블 제목입니다",
  perPage: 10,
  columnDefs,
};
</script>

<template>
  <TableView :tableData="tableData" :options="options" />
</template>

<style scoped lang="scss"></style>
