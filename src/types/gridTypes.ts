import { ColDef } from "ag-grid-community";

export interface GridRowData {
  id: string | number;
  name: string;
  code: string;
  capital: string;
  rating: number;
  population: number;
  date: string;
}

export interface AgGridAdapterProps {
  rowData: GridRowData[] | null;
  columnDefs: ColDef[];
  defaultColDef?: Partial<ColDef>; // Allow partial column config
  pagination?: boolean;
  paginationPageSize?: number;
}

export interface FetchDataState {
  data: GridRowData[] | null;
  loading: boolean;
  error: string | null;
}
