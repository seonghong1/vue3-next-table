<script setup lang="ts">
import { Options } from "../../types/options";
import { computed, ref } from "vue";
import PerPageSelect from "./PerPageSelect.vue";

const props = defineProps<{
  options: Options;
}>();

const totalPageCount = computed(() => {
  const totalCount = props.options.pagination.totalCount ?? 0;
  const perPage = props.options.pagination.perPage ?? 1;
  return Math.ceil(totalCount / perPage);
});

const currentVisiblePages = computed(() => {
  const visiblePages = props.options.pagination.visiblePages ?? 1;
  // 총 페이지
  const totalCount = props.options.pagination.totalCount ?? 0;
  const perPage = props.options.pagination.perPage ?? 1;
  const totalPageCount = Math.ceil(totalCount / perPage);
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
      <li
        v-for="i in currentVisiblePages"
        :key="i"
        @click="setCurrentPage(i)"
        :class="[{ on: currentPage === i }]"
      >
        {{ i }}
      </li>
    </ul>
    <button @click="onPrevOrNextClick('next')">Next</button>
    <div v-if="props.options.pagination.perPageOptions" class="pagination-per-page">
      <PerPageSelect :options="props.options" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  &-container {
    padding: 15px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
      cursor: pointer;
      background-color: $color-gray;
      color: $color-white;
    }
  }

  &-list {
    display: flex;
    gap: 20px;
    list-style: none;

    li {
      cursor: pointer;
      color: $color-gray;
      padding: 10px;
      border-radius: 8px;
      opacity: 0.7;

      &.on,
      &:hover {
        opacity: 1;
        box-shadow: 0 0 0 1px $color-gray inset;
        box-sizing: border-box;
      }
    }
  }

  &-per-page {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
