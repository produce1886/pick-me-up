import { useState, useEffect } from "react";
import { AxiosQueryResponse } from "@src/types/Api";

const useAxiosQuery = <T>(
  query: (...parameters: any[]) => void | Promise<any>
) => (parameters: any[]): AxiosQueryResponse<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await query(...parameters);
        setData(result);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, parameters);

  return { isLoading, isError, data };
};

export default useAxiosQuery;
