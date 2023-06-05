import React from 'react';
import PropTypes from 'prop-types';
import TrendingItem from './TrendingItem/TrendingItem';
import { StyledSection, StyledTitle, StyledList } from './TrendingList.styled';

const TrendingList = ({ data }) => {
  return (
    <StyledSection>
      <StyledTitle>Trending today</StyledTitle>
      <StyledList>
        {data.map(({ id, title, name }) => (
          <TrendingItem key={id} id={id} title={title} name={name} />
        ))}
      </StyledList>
    </StyledSection>
  );
};

TrendingList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TrendingList;
