import React from 'react';
import PropTypes from 'prop-types';

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
        <p>{genres}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  imgPath: PropTypes.string,
  userScore: PropTypes.number,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieCard;
