import { ColDef, CellClassParams, CellStyle } from "ag-grid-community";

export const defaultColumns: ColDef[] = [
  {
    headerName: "",
    field: "on",
    width: 70,
    flex: 1,
    checkboxSelection: true,
    headerCheckboxSelection: true,
    pinned: "left",
    suppressHeaderMenuButton: true,
    suppressHeaderFilterButton: true,
    resizable: false,
    suppressColumnsToolPanel: true,
    filter: false,
    sortable: false,
  },
  {
    headerName: "Name",
    field: "name",
    filter: "agTextColumnFilter",
    filterParams: { buttons: ["reset", "apply"] },
    editable: false,
    cellStyle: {
      color: "var(--salt-color-gray-900)",
      backgroundColor: "var(--salt-color-teal-20)",
    },
  },
  {
    headerName: "Code",
    field: "code",
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Capital",
    field: "capital",
    filter: "agSetColumnFilter",
    cellStyle: (params: CellClassParams): CellStyle => {
      if (params.value === "Montgomery_4") {
        return {
          color: "var(--salt-color-gray-900)",
          backgroundColor: "var(--salt-color-orange-20)",
        };
      }
      return {}; // Ensuring correct type
    },
  },
  {
    headerName: "Rating",
    field: "rating",
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Population",
    field: "population",
    filter: "agNumberColumnFilter",
    editable: true,
    cellClass: ["numeric-cell", "editable-cell"],
  },
  {
    headerName: "Date",
    field: "date",
    filter: "agDateColumnFilter",
    editable: true,
    cellClass: ["editable-cell"],
  },
];
