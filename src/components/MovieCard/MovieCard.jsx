import React from 'react';
import GenreList from 'components/GenreList/GenreList';

const MovieCard = ({ movieInfo }) => {
  const { title, imgPath, userScore, overview, releaseDate, genres } =
    movieInfo;

  return (
    <div>
      <img src={imgPath} alt={title} />
      <div>
        <h2>
          {title} ({releaseDate})
        </h2>
        <p>User score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
      </div>
    </div>
  );
};

export default MovieCard;
