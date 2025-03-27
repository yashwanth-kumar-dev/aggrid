import { useState, useEffect } from "react";
import { FetchDataState, GridRowData } from "../types/gridTypes";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const useFetchData = (endpoint: string): FetchDataState => {
  const [data, setData] = useState<GridRowData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_BASE_URL) {
      console.warn("API_BASE_URL is not defined in the .env file");
      setError("API Base URL is missing");
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, { signal });

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const result: GridRowData[] = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, loading, error };
};
