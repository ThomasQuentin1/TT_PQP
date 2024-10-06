import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useMovies from "../store/filmStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MovieDetails : React.FC = () => {
  const { id } = useParams();
  const { movieDetails, fetchMovieDetailsStore, loading } = useMovies();

  useEffect(() => {
    if (id) {
      fetchMovieDetailsStore(+id);
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Header />
      </div>
      <Link to="/" className="text-blue-500">
        ← Back to Search
      </Link>
      {loading ? (
        <div className="mt-4 flex justify-center">
          <Loader />
        </div>
      ) : movieDetails ? (
        <div className="mt-10">
          <a
            href="#"
            className="flex max-w-screen-2xl flex-col rounded-lg  border border-gray-700 bg-gray-800 shadow md:flex-row		"
          >
            <img
              className="w-full rounded-t-lg object-cover md:h-auto md:rounded-none md:rounded-s-lg"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />

            <div className="mt-4 flex flex-col justify-between p-4 md:mt-0 md:flex-1 md:p-8">
              <div>
                <p>
                  {movieDetails.genres.map((e) => (
                    <span
                      key={e.id}
                      className="me-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {e.name}
                    </span>
                  ))}
                </p>

                <div className="mt-4 flex justify-center font-bold text-white">
                  <p>{movieDetails.release_date}</p>
                  <p className="ml-4"> Durée {movieDetails.runtime} Mn</p>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-white">
                  {movieDetails.title}
                </h5>
                <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
                  {movieDetails.overview}
                </p>
              </div>

              <div className="mt-4 flex justify-center font-bold text-white">
                <p>Budget: {movieDetails.budget} $</p>
                <p className="ml-4">Revenue: {movieDetails.revenue} $</p>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex flex-col items-center">
                  {movieDetails.cast?.map((e) => (
                    <div key={e.id}>
                      <p>{e.name}</p>
                      <p className="text-sm text-gray-500">{e.character}</p>
                      {e.profile_path && (
                        <img
                          className="mx-auto h-12 w-12 rounded-full"
                          src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                          alt={e.name}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div>
      ) : (
        <p>No movie details available.</p>
      )}
      <Footer />
    </div>
  );
};

export default MovieDetails;
