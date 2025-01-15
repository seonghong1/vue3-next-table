export interface Options {
  primaryKey: string; // -> 1차완료
  columnDefs: ColumnDefs[];
  pagination: {
    use: boolean;
    visiblePages?: number;
    perPage?: number;
    perPageOptions?: number[];
    onPageChange?: (page: number) => void;
  };
  tableTitle?: string; // -> 1차완료
  onRowClick?: (data: any) => void; // -> 1차완료
  rowClassList?: string[]; // -> 1차완료
  getRowClassList?: (data: any) => string[]; // -> 1차완료
}

export interface ColumnDefs {
  headerName: string; // -> 1차완료
  field: string; // -> 1차완료
  editable?: boolean;
  editType?: "text" | "select" | "date";
  sortable?: boolean;
  width?: number; // -> 1차완료
  cellClassList?: string[]; // -> 1차완료
  getCustomValue?: (data: any) => any; // -> 1차완료
  getCellClassList?: (data: any) => string[]; // -> 1차완료
  onCellClick?: (data: any) => void; // -> 1차완료
  cellRenderer?: (data: any) => string;
}
