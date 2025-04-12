## 🚀 Getting Started

### 📦 Installation

```bash
npm install vue3-next-table
```

---

### 🛠️ Usage

```ts
<script setup lang="ts">
import { Vue3NextTable } from 'vue3-next-table'
import type { Options } from 'vue3-next-table'

const tableOptions: Options = {
  primaryKey: 'id',
  tableTitle: 'User List',
  columnDefs: [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
  ],
  pagination: {
    use: true,
    totalCount: 100,
    perPage: 10,
    onPageChange: (page) => {
      console.log('Page changed to:', page)
    },
  },
  onRowClick: (row) => {
    console.log('Row clicked:', row)
  },
}
</script>

<template>
  <Vue3NextTable :options="tableOptions" :data="tableData" />
</template>
```

### ✅ `Options` Props

| Prop | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `primaryKey` | `string` | 각 행의 고유 키 필드명 | ✅ Yes | - |
| `columnDefs` | `ColumnDefs[]` | 테이블 컬럼 정의 배열 | ✅ Yes | - |
| `pagination.use` | `boolean` | 페이징 기능 사용 여부 | ✅ Yes | - |
| `pagination.totalCount` | `number` | 전체 데이터 개수 (서버 페이지네이션 시 필요) | ❌ No | - |
| `pagination.visiblePages` | `number` | 한 번에 보여줄 페이지 수 | ❌ No | `5` |
| `pagination.perPage` | `number` | 페이지 당 데이터 수 | ❌ No | `10` |
| `pagination.perPageOptions` | `number[]` | perPage 선택 옵션 목록 | ❌ No | `[10, 20, 50]` |
| `pagination.onPageChange` | `(page: number) => void` | 페이지 변경 시 콜백 함수 | ❌ No | - |
| `pagination.onPerPageChange` | `(perPage: number) => void` | 페이지당 개수 변경 시 콜백 | ❌ No | - |
| `tableTitle` | `string` | 테이블 상단 제목 | ❌ No | - |
| `onRowClick` | `(data: any) => void` | 행 클릭 시 콜백 | ❌ No | - |
| `rowClassList` | `string[]` | 모든 행에 적용할 클래스 리스트 | ❌ No | - |
| `getRowClassList` | `(data: any) => string[]` | 각 행별 클래스 반환 함수 | ❌ No | - |

---

### ✅ `ColumnDefs` Props

| Prop | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `headerName` | `string` | 컬럼 헤더명 | ✅ Yes | - |
| `field` | `string` | 데이터 필드명 | ✅ Yes | - |
| `editable` | `boolean` | 셀 수정 가능 여부 | ❌ No | `false` |
| `editType` | `"text" \| "select" \| "date" \| "number"` | 수정 시 input 타입 | ❌ No | `"text"` |
| `editSelectOptions` | `{ value: string \| number; label: string }[]` | `editType: "select"`일 때 옵션 목록 | ❌ No | - |
| `sortable` | `boolean` | 정렬 기능 사용 여부 | ❌ No | `false` |
| `width` | `number` | 컬럼 너비 (px) | ❌ No | - |
| `cellClassList` | `string[]` | 셀에 적용할 클래스 리스트 | ❌ No | - |
| `getCustomValue` | `(data: any) => any` | 셀에 표시할 사용자 정의 값 | ❌ No | - |
| `getCellClassList` | `(data: any) => string[]` | 셀별 클래스 동적 정의 함수 | ❌ No | - |
| `onCellClick` | `(data: any, col: ColumnDefs) => void` | 셀 클릭 시 콜백 | ❌ No | - |
| `onEditCellChange` | `(data: any, col: ColumnDefs) => void` | 셀 값 변경 시 콜백 | ❌ No | - |
| `cellRenderer` | `(data: any, col: ColumnDefs) => string \| Component` | 커스텀 셀 렌더링 함수 | ❌ No | - |
