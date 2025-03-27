import AgGridAdapter from "./AgGridAdapter";
import { AgGridAdapterProps } from "../types/gridTypes";

// keeping this wrapper
// to add extra logic (e.g., additional configuration, state management, logging), makes sense.
const AgGridWrapper = (props: AgGridAdapterProps) => {
  return <AgGridAdapter {...props} />;
};

export default AgGridWrapper;
