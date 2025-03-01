import { Component } from "vue";

export interface Options {
  primaryKey: string; // -> 1차완료
  columnDefs: ColumnDefs[];
  pagination: {
    use: boolean;
    totalCount?: number;
    visiblePages?: number;
    perPage?: number;
    perPageOptions?: number[];
    onPageChange?: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
  };
  tableTitle?: string; // -> 1차완료
  onRowClick?: (data: any) => void; // -> 1차완료
  rowClassList?: string[]; // -> 1차완료
  getRowClassList?: (data: any) => string[]; // -> 1차완료
}

export interface ColumnDefs {
  headerName: string; // -> 1차완료
  field: string; // -> 1차완료
  editable?: boolean; // -> 2025-01-18
  editType?: "text" | "select" | "date" | "number"; // -> 2025-01-18
  editSelectOptions?: { value: string | number; label: string }[]; // -> 2025-01-18
  sortable?: boolean;
  width?: number; // -> 1차완료
  cellClassList?: string[]; // -> 1차완료
  getCustomValue?: (data: any) => any; // -> 1차완료
  getCellClassList?: (data: any) => string[]; // -> 1차완료
  onCellClick?: (data: any, col: ColumnDefs) => void; // -> 1차완료
  onEditCellChange?: (data: any, col: ColumnDefs) => void; // -> 2025-01-18
  cellRenderer?: (data: any, col: ColumnDefs) => string | Component; // -> 2025-01-21
}

// 페이지네이션
// 페이지네이션 값이 변경될때 currentPage 초기회 및 visible 되는 페이지 변경 테스트 필요
