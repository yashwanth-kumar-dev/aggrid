import AgGridAdapter from "./AgGridAdapter";
import { AgGridAdapterProps } from "../types/gridTypes";

const AgGridWrapper = (props: AgGridAdapterProps) => {
  return <AgGridAdapter {...props} />;
};

export default AgGridWrapper;
