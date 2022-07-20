import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);

  const loadData = useCallback(async (requestConfig, transformData) => {
    try {
      setIsLoading(true);
      setHasErr(false);

      const fetchOption = requestConfig.method
        ? {
            method: requestConfig.method,
            body: JSON.stringify(requestConfig.body),
          }
        : {};

      const response = await fetch(requestConfig.url, fetchOption);

      if (!response.ok) throw new Error("Something went wrong !!!");

      const data = await response.json();

      transformData(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setHasErr(true);
    }
  }, []);

  return [loadData, isLoading, hasErr];
};

export default useFetch;
