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
  { headerName: "Id", field: "id", width: 10, cellClassList: ["test1", "test2"] },
  { headerName: "Name", field: "name", width: 20 },
  { headerName: "Age", field: "age", width: 30, cellClassList: ["test1"] },
  {
    headerName: "Amount",
    field: "amount",
    getCustomValue: (value) => `$${value}`,
    width: 40,
    onCellClick: (data) => console.log(data),
  },
];

const options: Options = {
  primaryKey: "id",
  tableTitle: "테이블 제목입니다",
  columnDefs,
  pagination: {
    use: false,
  },
  onRowClick: (data: any) => {
    console.log(data);
  },
  rowClassList: ["test1", "test2"],
  getRowClassList: (data: any) => {
    console.log(data);
    return ["test3", "test4"];
  },
};
</script>

<template>
  <div style="width: 500px">
    <TableView :tableData="tableData" :options="options" />
  </div>
</template>

<style scoped lang="scss"></style>
