import { useRef, useState, useEffect, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { AgGridAdapterProps } from "../types/gridTypes";
import { ModuleRegistry, AllCommunityModule, GridApi } from "ag-grid-community";
import {
  ClientSideRowModelModule,
  SetFilterModule,
  MultiFilterModule,
  RichSelectModule,
} from "ag-grid-enterprise";

// Register required modules
ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule,
  SetFilterModule,
  MultiFilterModule,
  RichSelectModule,
]);

const AgGridAdapter = ({
  rowData,
  columnDefs,
  defaultColDef = { sortable: true, filter: true },
  pagination = true,
  paginationPageSize = 50,
}: AgGridAdapterProps) => {
  const gridRef = useRef<AgGridReact>(null);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<number>>(new Set());
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  // Store selected rows when user selects/deselects
  const onSelectionChanged = useCallback(() => {
    if (!gridApi) return;

    const selectedNodes = gridApi.getSelectedNodes();
    const selectedIds = new Set(selectedNodes.map((node) => node.data.id));
    setSelectedRowIds(selectedIds);
  }, [gridApi]);

  // Reapply selection after filtering/sorting/pagination
  useEffect(() => {
    if (!gridApi || !rowData) return;

    gridApi.forEachNode((node) => {
      if (selectedRowIds.has(node.data.id)) {
        node.setSelected(true);
      }
    });
  }, [gridApi, rowData, selectedRowIds]);

  return (
    <div className="ag-theme-quartz" style={{ height: "600px", width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        rowSelection="multiple"
        onSelectionChanged={onSelectionChanged}
        onGridReady={(params) => setGridApi(params.api)} // Store Grid API
        rowModelType="clientSide"
      />
    </div>
  );
};

export default AgGridAdapter;
