import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import { StyledSection, StyledList } from './MovieList.styled';

const MovieList = ({ data }) => {
  return (
    <StyledSection>
      <StyledList>
        {data.map(({ id, title, name }) => (
          <MovieItem key={id} id={id} title={title} name={name} />
        ))}
      </StyledList>
    </StyledSection>
  );
};

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MovieList;
