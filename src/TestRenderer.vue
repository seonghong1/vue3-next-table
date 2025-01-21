<script setup lang="ts">
import { ColumnDefs } from "./types/options";

const props = defineProps<{
  data: any;
  col: ColumnDefs;
}>();
</script>

<template>{{ data.id }} {{ col.headerName }}</template>

<style scoped lang="scss"></style>
