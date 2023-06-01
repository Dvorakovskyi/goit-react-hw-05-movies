import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'Api/get-trending-api';
import TrendingList from 'components/TrendingList/TrendingList';

const HomePage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => setMovie(results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <TrendingList data={movie} />
    </section>
  );
};

export default HomePage;
