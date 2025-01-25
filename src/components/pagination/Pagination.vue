<script setup lang="ts">
import { Options } from "@/types/options";
import { computed, ref } from "vue";

const props = defineProps<{
  options: Options;
}>();

const totalPageCount = computed(() => {
  return Math.ceil(props.options.pagination.totalCount / props.options.pagination.perPage);
});

const currentVisiblePages = computed(() => {
  const visiblePages = props.options.pagination.visiblePages;
  // 총 페이지
  const totalPageCount = Math.ceil(
    props.options.pagination.totalCount / props.options.pagination.perPage
  );
  // 화면에 보여질 페이지 그룹
  const currentPageGroup = Math.ceil(currentPage.value / visiblePages);
  const startPage = Math.max((currentPageGroup - 1) * visiblePages + 1, 1);
  const endPage = Math.min(currentPageGroup * visiblePages, totalPageCount);

  // 페이지 목록 생성
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

const currentPage = ref<number>(1);
const setCurrentPage = (page: number) => {
  currentPage.value = page;

  onPageChange(page);
};

const onPageChange = (page: number) => {
  if (props.options.pagination.onPageChange) {
    props.options.pagination.onPageChange(page);
  }
};

const onPrevOrNextClick = (type: "prev" | "next") => {
  if (
    (type === "next" && currentPage.value > totalPageCount.value) ||
    (type === "prev" && currentPage.value === 1)
  ) {
    return;
  }

  if (type === "prev") {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  } else {
    if (currentPage.value < totalPageCount.value) {
      currentPage.value += 1;
    }
  }

  onPageChange(currentPage.value);
};
</script>

<template>
  <div class="pagination-container">
    <button @click="onPrevOrNextClick('prev')">Prev</button>
    <ul class="pagination-list">
      <li v-for="i in currentVisiblePages" :key="i" @click="setCurrentPage(i)">{{ i }}</li>
    </ul>
    <button @click="onPrevOrNextClick('next')">Next</button>
  </div>
</template>

<style scoped lang="scss">
.pagination-list {
  display: flex;
  gap: 20px;
  list-style: none;
}
</style>
