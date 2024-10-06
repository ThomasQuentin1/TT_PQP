export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
}

// liste de films
export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// détail d'un film
export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  budget: number;
  revenue: number;
  cast?: Cast[];
}

//casting d'un film
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
