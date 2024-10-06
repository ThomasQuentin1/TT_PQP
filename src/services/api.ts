import { useState } from "react";
import axios, { AxiosInstance, AxiosError } from "axios";

export interface UseApiReturn {
  get: <T>(endpoint: string, params?: object) => Promise<T | undefined>;
  loading: boolean;
  error: string | null;
}

const apiKey = process.env.REACT_APP_API_KEY;

const useApi = (): UseApiReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Variable pour suivre le moment de la dernière requête
  let lastRequestTime: number = Date.now();

  const api: AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const get = async <T>(
    endpoint: string,
    params = {}
  ): Promise<T | undefined> => {
    setLoading(true);
    setError(null);

    // Vérifier le temps écoulé depuis la dernière requête
    const currentTime = Date.now();
    const timeSinceLastRequest = currentTime - lastRequestTime;

    // Attendre si moins d'une seconde s'est écoulée
    if (timeSinceLastRequest < 1000) {
      const waitTime = 1000 - timeSinceLastRequest;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }

    lastRequestTime = Date.now();

    try {
      const response = await api.get<T>(endpoint, { params });
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  return { get, loading, error };
};

export default useApi;
