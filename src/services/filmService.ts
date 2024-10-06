import useApi from "./api";
import { Movie, MovieDetails, MovieListResponse } from "../types/movie";

interface UseFilmReturn {
  fetchTrendingMovies: (page: number) => Promise<Movie[] | undefined>;
  searchMovies: (query: string) => Promise<Movie[] | undefined>;
  fetchMovieDetails: (id: number) => Promise<MovieDetails | undefined>;
  loading: boolean;
  error: string | null;
}
const useFilm = (): UseFilmReturn => {
  const { get, loading, error } = useApi();

  const fetchTrendingMovies = async (page: number) => {
    const data = await get<MovieListResponse>(
      `/trending/movie/week?page=${page}`
    );
    if (data) return data.results;
  };

  const searchMovies = async (query: string) => {
    const data = await get<MovieListResponse>(`/search/movie`, {
      query,
    });
    if (data) return data.results;
  };

  const fetchMovieDetails = async (id: number) => {
    const data = await get<MovieDetails>(`/movie/${id}`);
    return data;
  };

  return {
    fetchTrendingMovies,
    loading,
    error,
    searchMovies,
    fetchMovieDetails,
  };
};

export default useFilm;
