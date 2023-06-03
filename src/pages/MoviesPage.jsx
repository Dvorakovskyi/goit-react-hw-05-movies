import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/search-movies-api';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (request === '') {
      return;
    }

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
      .catch(error => setError(error.message));
  }, [request]);

  const handleSubmit = query => {
    if (query !== '') {
      setRequest(query);
    } else {
      Notify.info('I`m waiting for your request');
    }
  };

  return (
    <section>
      {error && Notify.failure('Something went wrong, please try again later')}
      <SearchMoviesForm onSubmit={handleSubmit} />
      <MoviesList data={movies} />
    </section>
  );
};

export default MoviesPage;
