import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useMovies from "../store/filmStore";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { Movie } from "../types/movie";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const {
    movies,
    fetchTrendingMoviesStore,
    searchMoviesStore,
    loading,
    error,
  } = useMovies();

  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    setQuery(query);
    setCurrentPage(1);
    if (query === "") {
      fetchTrendingMoviesStore(1);
    } else {
      setIsSearching(true);
      searchMoviesStore(query);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (currentPage > 1) {
      if (isSearching) {
        searchMoviesStore(query);
      } else {
        fetchTrendingMoviesStore(currentPage);
      }
    }
  }, [currentPage]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Header />
      </div>

      <SearchBar onSearch={handleSearch} />

      {loading && currentPage === 1 ? (
        <div className="mt-4 flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie: Movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      )}
      {loading && currentPage > 1 && (
        <div className="mt-4 flex justify-center">
          <Loader />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <Footer />
    </div>
  );
};

export default Home;
