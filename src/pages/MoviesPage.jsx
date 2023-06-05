import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/search-movies-api';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (request === '') {
      return;
    }

    setIsLoader(true);

    fetchMovies(request)
      .then(data => {
        if (data.results.length === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        } else {
          setMovies(data.results);
        }
      })
      .catch(error => setError(error.message))
      .finally(setIsLoader(false));
  }, [request]);

  const handleSubmit = query => {
    if (query !== '') {
      setRequest(query);
    } else {
      Notify.info('I`m waiting for your request');
    }
  };

  return (
    <main>
      {error && Notify.failure('Something went wrong, please try again later')}
      <SearchMoviesForm onSubmit={handleSubmit} />
      {isLoader && <Loader />}
      <MoviesList data={movies} />
    </main>
  );
};

export default MoviesPage;
