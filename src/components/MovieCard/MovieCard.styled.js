import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledTitle } from 'components/TrendingList/TrendingList.styled';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 10px;
`;

export const StyledMovieTitle = styled(StyledTitle)`
  margin-bottom: 20px;
`;

export const StyledSecondTitle = styled.h3`
  margin: 20px 0;
`;

export const StyledBackBtn = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
  font-weight: 500;
  border-radius: 4px;
  border: 2px solid black;
  color: black;
  background-color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #d12b19;
    color: #d12b19;
  }
`;
