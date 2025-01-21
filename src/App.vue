<script setup lang="ts">
import { ref } from "vue";
import TableView from "@/components/TableView.vue";
import type { Options } from "@/types/options";
import TestRenderer from "@/TestRenderer.vue";
import type { ColumnDefs } from "@/types/options";

const tableData = ref([
  { id: 1, name: "John Doe", age: 430, amount: 10000 },
  { id: 2, name: "Jane Doe", age: 235, amount: 10000 },
  { id: 3, name: "Jim Doe", age: 401, amount: 10000 },
  { id: 3, name: "Jim Doe", age: 401, amount: 10000, editvalue: "stringsss" },
  { id: 3, name: "Jim Doe", age: 401, amount: 10000, number: 123 },
  { id: 3, name: "Jim Doe", age: 401, date: "2025-01-18", amount: 10000, number: 123 },
  { id: 3, name: "Jim Doe", age: 401, date: "2025-01-18", amount: 10000, number: 123, select: 3 },
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
    onCellClick: (data: any, col: ColumnDefs) => console.log(data, col),
  },
  {
    headerName: "edits",
    field: "editvalue",
    width: 30,
    editable: true,
    editType: "text",
    onEditCellChange: (data: any, col: ColumnDefs) => console.log(data, col),
  },
  {
    headerName: "number",
    field: "number",
    width: 30,
    editable: true,
    editType: "number",
    onEditCellChange: (data: any, col: ColumnDefs) => console.log(data, col),
  },
  {
    headerName: "date",
    field: "date",
    width: 30,
    editable: true,
    editType: "date",
    onEditCellChange: (data: any, col: ColumnDefs) => console.log(data, col),
  },
  {
    headerName: "select",
    field: "select",
    width: 30,
    editable: true,
    editType: "select",
    editSelectOptions: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
    ],
    onEditCellChange: (data: any, col: ColumnDefs) => console.log(data, col),
  },
  {
    headerName: "cellRenderer",
    field: "",
    width: 30,
    cellRenderer: (data: any, col: ColumnDefs) => {
      return `<button onclick="console.log('cellRenderer', ${data.id})">Click</button>`;
    },
  },
  {
    headerName: "cellRenderer2",
    field: "",
    width: 30,
    cellRenderer: (data: any, col: ColumnDefs) => {
      return TestRenderer;
    },
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
