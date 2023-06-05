import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledMovieTitle, StyledSecondTitle } from './MovieCard.styled';

const MovieCard = ({ movieInfo }) => {
  const { title, imgPath, userScore, overview, releaseDate, genres } =
    movieInfo;

  return (
    <StyledWrapper>
      <img src={imgPath} alt={title} />
      <div>
        <StyledMovieTitle>
          {title} ({releaseDate})
        </StyledMovieTitle>
        <p>User score: {userScore}%</p>
        <StyledSecondTitle>Overview</StyledSecondTitle>
        <p>{overview}</p>
        <StyledSecondTitle>Genres</StyledSecondTitle>
        <p>{genres}</p>
      </div>
    </StyledWrapper>
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
