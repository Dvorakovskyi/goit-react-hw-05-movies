import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink, StyledItem } from './TrendingItem.styled';

const TrendingItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <StyledItem key={id}>
      <StyledLink to={`movies/${id}`} state={location}>
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
