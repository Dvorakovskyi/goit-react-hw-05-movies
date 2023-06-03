import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'Api/get-trending-api';
import TrendingList from 'components/TrendingList/TrendingList';

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => setMovie(results))
      .catch(error => setError(error.message));
  }, []);

  return (
    <section>
      {error && Notify.failure('Something went wrong, please try again later')}
      <h2>Trending today</h2>
      <TrendingList data={movie} />
    </section>
  );
};

export default HomePage;
