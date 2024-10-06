import { useState } from "react";
import { Movie, MovieDetails } from "../types/movie";
import useFilm from "../services/filmService";

interface UseMoviesReturn {
  movies: Movie[];
  movieDetails: MovieDetails | null;
  loading: boolean;
  error: string | null;
  fetchTrendingMoviesStore: (page: number) => Promise<void>;
  searchMoviesStore: (query: string) => Promise<void>;
  fetchMovieDetailsStore: (id: number) => Promise<void>;
}

const useMovies = (): UseMoviesReturn => {
  const {
    fetchMovieDetails,
    fetchTrendingMovies,
    searchMovies,
    loading,
    error,
  } = useFilm();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const fetchTrendingMoviesStore = async (page: number) => {
    const data = await fetchTrendingMovies(page);
    if (data)
      setMovies((prevMovies) => (page === 1 ? data : [...prevMovies, ...data]));
  };

  const searchMoviesStore = async (query: string) => {
    const data = await searchMovies(query);
    if (data) setMovies(data);
  };

  const fetchMovieDetailsStore = async (id: number) => {
    const data = await fetchMovieDetails(id);
    setMovieDetails(data || null);
  };

  return {
    movies,
    movieDetails,
    loading,
    error,
    fetchTrendingMoviesStore,
    searchMoviesStore,
    fetchMovieDetailsStore,
  };
};

export default useMovies;
