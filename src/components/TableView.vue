<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 25 },
  { id: 3, name: "Jim Doe", age: 40 },
]);
</script>

<template>
  <div class="table-view-container">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
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
