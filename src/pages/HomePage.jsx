import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'Api/get-trending-api';
import TrendingList from 'components/TrendingList/TrendingList';
import Loader from 'components/Loader/Loader';

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
      <TrendingList data={movie} />
    </>
  );
};

export default HomePage;
