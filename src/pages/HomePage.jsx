import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'Api/get-trending-api';
import MovieList from 'components/TrendingList/MovieList';
import Loader from 'components/Loader/Loader';
import { StyledTitle } from 'components/TrendingList/MovieList.styled';

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);

    fetchTrending()
      .then(({ results }) => setMovie(results))
      .catch(error => setError(error.message))
      .finally(setIsLoader(false));
  }, []);

  return (
    <>
      {error && Notify.failure('Something went wrong, please try again later')}
      {isLoader && <Loader />}
      <StyledTitle>Trending today</StyledTitle>
      <MovieList data={movie} />
    </>
  );
};

export default HomePage;
