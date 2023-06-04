import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { fetchMovieDetails } from 'Api/movie-details-api';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(
        ({
          title,
          poster_path,
          vote_average,
          overview,
          genres,
          release_date,
        }) =>
          setMovieInfo({
            title,
            imgPath: `${BASE_IMG_URL}${poster_path}`,
            userScore: Math.round(vote_average * 10),
            overview,
            releaseDate: release_date.slice(0, 4),
            genres: genres.map(genre => genre.name).join(' '),
          })
      )
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {error ? (
        Notify.failure('Something went wrong, please try again later')
      ) : (
        <section>
          <Link to={location.state ?? '/movies'}>Go back</Link>
          <MovieCard movieInfo={movieInfo} />
          <div>
            Additional information
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
};
export default MovieDetails;
