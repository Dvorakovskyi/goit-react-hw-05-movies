import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledList } from 'components/TrendingList/TrendingList.styled';
import { StyledItem, StyledLink } from 'components/TrendingList/TrendingItem/TrendingItem.styled';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <StyledList>
      {data.map(({ id, title }) => (
        <StyledItem key={id}>
          <StyledLink to={`${id}`} state={location}>{title}</StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MoviesList;
