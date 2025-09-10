import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { CanceledError } from "axios";

interface FetchResults<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResults<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res: AxiosResponse<FetchResults<T>>) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (err instanceof CanceledError) return;
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      });

    return () => controller.abort();
  }, [...deps]);

  return { data, error, isLoading };
};

export default useData;
