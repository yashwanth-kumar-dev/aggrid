import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { AgGridAdapterProps } from "../types/gridTypes";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

// Register only community modules
ModuleRegistry.registerModules([AllCommunityModule]);
//todo: Prop Types

const AgGridAdapter = ({
  rowData,
  columnDefs,
  defaultColDef = { sortable: true, filter: true },
  pagination = true,
  paginationPageSize = 50,
}: AgGridAdapterProps) => {
  const gridRef = useRef<AgGridReact>(null);

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
        rowModelType="clientSide"
      />
    </div>
  );
};

export default AgGridAdapter;
