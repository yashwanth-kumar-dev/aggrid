import AgGridWrapper from "./components/AgGridWrapper";
import { useFetchData } from "./hooks/useFetchData";
import { defaultColumns } from "./config/defaultColumns";
import { GridRowData } from "./types/gridTypes";

const App = () => {
  const { data, loading, error } = useFetchData("userData");

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <AgGridWrapper
      rowData={data as GridRowData[]}
      columnDefs={defaultColumns}
      pagination
      paginationPageSize={100}
    />
  );
};

export default App;
