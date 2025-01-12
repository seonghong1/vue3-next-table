export interface Options {
  tableTitle: string;
  perPage: number;
  columnDefs: ColumnDefs[];
}

export interface ColumnDefs {
  headerName: string;
  field: string;
  getCustomValue?: (data: any) => any;
}
