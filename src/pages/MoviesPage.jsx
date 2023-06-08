import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/search-movies-api';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/TrendingList/MovieList';

const MoviesPage = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const location = useLocation();

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

  const handleSubmit = (query) => {
    if (query !== '') {
      setRequest(query);
    } else {
      Notify.info('I`m waiting for your request');
    }
  };


  return (
    <main>
      {error && Notify.failure('Something went wrong, please try again later')}
      <SearchMoviesForm onSubmit={handleSubmit}/>
      {isLoader && <Loader />}
      <MovieList data={movies} location={location}/>
    </main>
  );
};

export default MoviesPage;
