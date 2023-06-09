import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink, StyledItem } from './MovieItem.styled';
import { useLocation } from 'react-router-dom';

const TrendingItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <StyledItem key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {title || name}
      </StyledLink>
    </StyledItem>
  );
};

TrendingItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
};

export default TrendingItem;
